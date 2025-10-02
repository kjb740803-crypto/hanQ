<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page language="java"%>
<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro17.xapi.data.*" %>
<%@ page import = "com.nexacro17.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ include file="./DbInfo.jsp" %>
<%! 
    static final String DEFAULT_CHAR_SET = "UTF-8";
    public String default_charset = "UTF-8";
  
    public String default_encode_method = PlatformType.CONTENT_TYPE_SSV;    //PlatformType.CONTENT_TYPE_SSV;//PlatformType.CONTENT_TYPE_BINARY
    public int PROJ_DEBUG = 2;                                               //0-all,1-sql
            
    public void setResultMessage(int code, String msg, VariableList out_vl)
    {
        if (out_vl == null) {
            out_vl = new VariableList();
        }

        out_vl.add("ErrorCode", code);
        out_vl.add("ErrorMsg", msg);
    }

    public void setResultMessage(String Key,String msg,VariableList out_vl)
    {
        if (out_vl == null) {
            out_vl = new VariableList();
        }

        out_vl.add(Key, msg);
    }

    public PlatformData proc_input(HttpServletRequest request) throws Exception
    {
        PlatformRequest platformRequest = new PlatformRequest(request.getInputStream());    //PlatformType.CONTENT_TYPE_XML, strCharset);

        if (PROJ_DEBUG < 1) {
            platformRequest.setStreamLogEnabled(true);
            String contextRealPath = request.getSession().getServletContext().getRealPath("/") + "logs";
            platformRequest.setStreamLogDir(contextRealPath);
        }

        if (request.getContentLength() > 0) platformRequest.receiveData();

        if (PROJ_DEBUG < 1) {
            platformRequest.storeStreamLog();
        }

        return platformRequest.getData();
    }

    public void proc_output(HttpServletResponse sRes, JspWriter out, VariableList out_vl, DataSetList out_dl) throws Exception
    {
        PlatformData pd = new PlatformData();

        if (out_vl != null) pd.setVariableList(out_vl);
        if (out_dl != null) pd.setDataSetList(out_dl);

        // HttpServletResponse¸|  HttpPlatformResponse
        // PlatformResponse pRes = new PlatformResponse(response.getOutputStream(), ContentsType, default_char);
        HttpPlatformResponse res = new HttpPlatformResponse(sRes, default_encode_method, default_charset);
        //res.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB);

        res.setData(pd);

        out.clearBuffer();

        res.sendData();
    }

    public void proc_output2(HttpServletResponse sRes, JspWriter out, VariableList out_vl, DataSetList out_dl, String outType) throws Exception
    {
        PlatformData pd = new PlatformData();

        if (out_vl != null) pd.setVariableList(out_vl);
        if (out_dl != null) pd.setDataSetList(out_dl);

        // HttpServletResponse¸| 문제 HttpPlatformResponse
        HttpPlatformResponse res = new HttpPlatformResponse(sRes,outType , default_charset);
        //res.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB);

        res.setData(pd);

        out.clearBuffer();

        res.sendData();
    }

    public DataSet makeDataSet(BufferedWriter bw, ResultSet rs, String strDataSet) throws ServletException, Exception
    {
        DataSet ds = new DataSet(strDataSet);
        //ds.setCharset(default_charset);

        ResultSetMetaData rsmd = rs.getMetaData();
        int numberOfColumns = rsmd.getColumnCount();

        int ColSize;
        int ColType = 0;
        String Colnm = "";

        for (int j = 1; j <= numberOfColumns; j++) {
            Colnm = rsmd.getColumnName(j);
            ColSize = rsmd.getColumnDisplaySize(j);

            switch(rsmd.getColumnType(j)) {
                case Types.VARCHAR:
                case Types.CHAR:
                case Types.LONGVARCHAR:
                case Types.CLOB:
                    ColType = DataTypes.STRING;
                    break;
                case Types.INTEGER:
                case Types.BIGINT:
                case Types.SMALLINT:
                case Types.TINYINT:
                case Types.NUMERIC:
                    ColType = DataTypes.INT;
                    break;
                case Types.FLOAT:
                    ColType = DataTypes.FLOAT;
                    break;
                case Types.DOUBLE:
                case Types.REAL:
                case Types.DECIMAL:
                    ColType = DataTypes.DECIMAL;
                    break;
                case Types.BINARY:
                case Types.BLOB:
                case Types.LONGVARBINARY:
                    ColType = DataTypes.BLOB;
                    break;
                case Types.DATE:
                    ColType = DataTypes.DATE;
                    break;
                case Types.TIME:
                case Types.TIMESTAMP:
                    ColType = DataTypes.DATE_TIME;
                    break;
                default:
                    ColType = DataTypes.STRING;
                    break;
            }

            if (ColType == DataTypes.STRING) ColSize = 255;

            ds.addColumn(Colnm, ColType,ColSize);
        }

        int Row = 0;
        int i;

        while(rs.next()) {
            Row = ds.newRow();

            for (i = 0; i < numberOfColumns; i++) {
                ColType = ds.getColumn(i).getDataType();
                Colnm = ds.getColumn(i).getName();
                // writeLog(bw,Colnm +":" + DataTypes.toStringType(ColType));

                if (ColType == DataTypes.DATE || ColType == DataTypes.DATE_TIME) {
                    ds.set(Row,Colnm,rs.getDate(ds.getColumn(i).getName()));
                } else if (ColType == DataTypes.BLOB) {
                    ds.set(Row,Colnm,rs.getBytes(ds.getColumn(i).getName()));
                } else if (ColType == DataTypes.INT) {
                    ds.set(Row,Colnm,rs.getInt(ds.getColumn(i).getName()));
                } else if(ColType == DataTypes.DECIMAL || ColType == DataTypes.FLOAT) {
                    ds.set(Row,Colnm,rs.getDouble(ds.getColumn(i).getName()));
                } else {
                    ds.set(Row,Colnm,rs.getString(ds.getColumn(i).getName()));
                }
            }
        }

        return ds;
    }

    public String getSQL(BufferedWriter bw, Connection conn, String kind, String id, String seq, String strPara) throws Exception
    {
        String strSQL  = "";
        String rtnSQL  = "";
  
        strSQL = "";
        strSQL = strSQL + "SELECT sql_text ";
        strSQL = strSQL + "FROM sqlmanager ";
        strSQL = strSQL + "WHERE sql_kind = '" + kind + "'";
        strSQL = strSQL + "  AND sql_id   = '" + id   + "'";
        strSQL = strSQL + "  AND sql_seq  = "  + seq;

        //System.out.println("====" + strSQL);

        PreparedStatement ps = conn.prepareStatement(strSQL);
        ResultSet rs = ps.executeQuery();

        while (rs.next())
        {
            rtnSQL = rs.getString("sql_text");
        }

        if (rtnSQL.length() == 0) {
            rtnSQL = "";
            writeLog(bw, "SQL NOT FOUND!!");
        } else {
            if (strPara.length() > 0) {
                StringTokenizer st1 = new StringTokenizer(strPara, "&");

                while (st1.hasMoreTokens()) {
                    StringTokenizer st2 = new StringTokenizer(st1.nextToken(), "=");

                    while (st2.hasMoreTokens()) {
                        String strKey = st2.nextToken();
                        String strVal = st2.nextToken();

                        //strVal = replaceAll(strVal,"'","''");

                        if(PROJ_DEBUG < 1) writeLog(bw, "KEY = " + strKey + "==>" + strVal);

                        rtnSQL = replaceAll(rtnSQL, ":" + strKey + "$", strVal);
                    }
                }
            }
        }

        if (rs != null) rs.close();

        if (PROJ_DEBUG < 1) writeLog(bw, "GET SQL Bind : " + rtnSQL);

        return rtnSQL;
    }

    public DataSet selectSQL(BufferedWriter bw, Connection conn, String strSQL, String strDataSet) throws Exception
    {
        //KJB start 2020.08.14
        //SqlLogWriter(bw,conn,strSQL);
        //KJB End

        PreparedStatement ps = null;
        ResultSet rs = null;
        DataSet ds = null;

        try {
            ps = conn.prepareStatement(strSQL);
            rs = ps.executeQuery();

            ds = makeDataSet(bw,rs,strDataSet);
        } catch (Exception e) {
            e.printStackTrace();

            if (ps != null) { ps.close(); }
            if (rs != null) { rs.close(); }
        } finally {
            if (ps != null) { ps.close(); }
            if (rs != null) { rs.close(); }

            return ds;
        }
    }

    public DataSet selectSQL(BufferedWriter bw, Connection conn, String strSQL, String strDataSet, JspWriter out) throws Exception
    {
        //KJB start 2020.08.14
        //SqlLogWriter(bw,conn,strSQL);
        //KJB End

        PreparedStatement ps = null;
        ResultSet rs = null;
        DataSet ds = null;

        try {
            ps = conn.prepareStatement(strSQL);
            rs = ps.executeQuery();
            ds = makeDataSet(bw, rs, strDataSet);
        } catch (Exception e) {
            e.printStackTrace();

            if (ps != null) { ps.close(); }
            if (rs != null) { rs.close(); }
        } finally {
            if (ps != null) { ps.close(); }
            if (rs != null) { rs.close(); }

            return ds;
        }
    }

    public void transSQL(BufferedWriter bw, Connection conn, String strSQL, DataSet dsObj, int nRow, int iFlag) throws Exception
    {
        int colCnt,strType = 0;
        String strCol,strVal = "";
        String varCol = null;

        colCnt = dsObj.getColumnCount();

        for (int col = 0; col < colCnt; col++) {
            strCol  = dsObj.getColumn(col).getName();
            strType = dsObj.getColumn(col).getDataType();

            if(iFlag == 0)
                varCol = dsObj.getRemovedStringData(nRow,strCol);
            else
                varCol = dsObj.getString(nRow,strCol);

            if(varCol == null)
                strVal = "null";
            else
                strVal = varCol;

            strVal = replaceAll(strVal, "'", "''");

            if (PROJ_DEBUG < 1) writeLog(bw, "Column Value : " + strCol + "=" + strCol + " ,val=" + strVal + ",Type=" + strType);

            if (strType == DataTypes.INT || strType == DataTypes.LONG || strType == DataTypes.DECIMAL || strType == DataTypes.FLOAT || strVal.equals("null")) {
                if(strVal.equals("null")) strSQL = replaceAll(strSQL, "N:" + strCol + "$", strVal); //다국어 처리시 null인 경우

                strSQL = replaceAll(strSQL, ":" + strCol + "$", strVal);
            } else {
                strSQL = replaceAll(strSQL, ":" + strCol + "$", "'" + strVal + "'");
            }
        }

        if (PROJ_DEBUG < 2) writeLog(bw,strSQL);

        runSQL(bw,conn,strSQL);     //bw 추가 KJB
    }

    public void runSQL(BufferedWriter bw,Connection conn, String strSQL) throws Exception
    {
        //KJB start 2020.08.14
        SqlLogWriter(bw,conn,strSQL);   
        //KJB End

        Statement st = conn.createStatement();
        st.execute(strSQL);
        st.close();
    }

    public void SqlLogWriter(BufferedWriter bw, Connection conn, String strSQL) throws Exception
    {    

        strSQL = replaceAll(strSQL,"'","''");
        Statement st = conn.createStatement();
        String strLog =  "INSERT INTO dbo.EDU_SQLLOG(SQL_TEXT, DateLast) VALUES ('" + strSQL + "', getdate())";
  
        st.execute(strLog);
        st.close();
    }

    public BufferedWriter openLogFile(String confPath, String ip) throws Exception
    {
        String filePath = confPath + java.io.File.separator + "logs" + java.io.File.separator + ip + "_" + getYmd() + ".log";

        File parent = new File(filePath).getParentFile();

        if (! parent.exists()) {
            parent.mkdirs();
        }

        File f = new File(filePath);
        FileWriter fw = new FileWriter(f, true);

        return new BufferedWriter(fw);
    }

    public void writeLog(BufferedWriter bw, String str) throws Exception
    {
        if (str.length() > 0) {
            bw.write(str + "\n");
            bw.flush();
        }
    }

    public String getYmd()
    {
        long time = System.currentTimeMillis();
        return new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date(time));
    }

    public String getTime()
    {
        long time = System.currentTimeMillis();
        return new java.text.SimpleDateFormat("yyyyMMdd_HHmmssSSS").format(new java.util.Date(time));
    }

    public String checkNull(String str)
    {
      if ( str == null ) return "";
      return str;
    }

    public String replaceAll(String str, String pattern, String replace)
    {
        int e = 0, s = 0;
        StringBuffer result = new StringBuffer();

        while ((e = str.indexOf(pattern, s)) >= 0) {
            result.append(str.substring(s, e));
            result.append(replace);
            s = e + pattern.length();
        }

        result.append(str.substring(s));

        return result.toString();
    }

%>
<%
    PlatformData xplatformData = new PlatformData();
    VariableList in_vl = new VariableList();    //input variable list
    DataSetList  in_dl = new DataSetList();     //input dataset list

    VariableList out_vl = new VariableList();   // output variable list
    DataSetList  out_dl = new DataSetList();    // output dataset list

    Connection conn = null;                     //Connection

    PreparedStatement pstmt= null;
    BufferedWriter logBuf = null;
    ResultSet rs = null;
    String logFilePath = "";
    String remoteIP;

    //out.print("start\\n");

    try {
        PlatformData pData = proc_input(request);

        remoteIP = request.getRemoteAddr();

        in_vl = pData.getVariableList();
        in_dl = pData.getDataSetList();

        Class.forName(db_driver);

        try {
            logFilePath = request.getRealPath("/");
            logBuf      = openLogFile(logFilePath,remoteIP);

            //out.print("kkkkkkkkkkkkkk");

            writeLog(logBuf, "[" + getTime() + "]" + request.getRequestURI());
            writeLog(logBuf, "[" + getTime() + "] CONN start");

            conn = DriverManager.getConnection(db_url, db_user, db_password);

            if(PROJ_DEBUG < 1) writeLog(logBuf, new Debugger().detail(pData));
        } catch (Exception e) {
            out.print("4");
            e.printStackTrace();

            if( conn != null) conn.close();
        }
    } catch(ClassNotFoundException e) {
        if(conn != null) conn.close();
    } catch(Throwable e) {
        e.printStackTrace();

        if(conn != null) conn.close();
    }
%>