<%@ include file="./XTracerAgent.jsp" %><%
	//conn.setAutoCommit(false); 

	
	out_vl = new VariableList(); 
	out_dl = new DataSetList();

	//String resType = in_vl.getString("RTYPE"); 
	DataSet sql_input = in_dl.get("SQL_INPUT");

	String sql_ins,sql_upd,sql_del,sql_sel,sql,sql_kind = "";
	String strPara = "";
	String inputDs,outDs   = "";
	String s1,s2,s3 = "";
	String strSQL = ""; 
	 
	/***
	if ( resType == null ) resType = default_encode_method;
	else if ( resType.equals("XML") ) resType = PlatformType.CONTENT_TYPE_XML;
  else if ( resType.equals("SSV") ) resType = PlatformType.CONTENT_TYPE_SSV;
  else if ( resType.equals("BIN") ) resType = PlatformType.CONTENT_TYPE_BINARY;
  else resType = default_encode_method;
  
  
  resType = PlatformType.CONTENT_TYPE_XML;
  **/
	
	try    
	{	
		for ( int nRow = 0 ; nRow < sql_input.getRowCount() ; nRow++ )
		{
			inputDs   = sql_input.getString(nRow,"inputDS","");
			outDs     = sql_input.getString(nRow,"outDS","");
			sql_ins   = sql_input.getString(nRow,"sql_insert","");
			sql_upd   = sql_input.getString(nRow,"sql_update","");
			sql_del   = sql_input.getString(nRow,"sql_delete","");
			sql_sel   = sql_input.getString(nRow,"sql_select","");
			strPara   = sql_input.getString(nRow,"parameters","");
			
			if ( inputDs != null && inputDs.length() > 0 )
			{
				DataSet ds_input = in_dl.get(inputDs);
			
				//delete
				if ( ds_input.getRemovedRowCount() > 0 && sql_del.length() > 0)
				{
					StringTokenizer st1 = new StringTokenizer(sql_del,",");
					s1 = st1.nextToken();
					s2 = st1.nextToken();
					s3 = st1.nextToken();
					strSQL = getSQL(logBuf,conn,s1,s2,s3,strPara);
					
					if ( PROJ_DEBUG < 1 ) writeLog(logBuf,"getRemovedRowCount : " + ds_input.getRemovedRowCount());
					
					for ( int row = 0 ; row < ds_input.getRemovedRowCount();row++ )
					{
						transSQL(logBuf,conn,strSQL,ds_input,row,0);
					}
				}
	
				if ( ds_input.getRowCount() > 0 )
				{
					String iSQL ="";
					String uSQL ="";
					
					StringTokenizer st1 ;
					if (  sql_ins.length() > 0 ) {
						st1 = new StringTokenizer(sql_ins,",");
						s1 = st1.nextToken();
						s2 = st1.nextToken();
						s3 = st1.nextToken();
						iSQL = getSQL(logBuf,conn,s1,s2,s3,strPara);
					}
					if ( sql_upd.length() > 0 ) {
						st1 = new StringTokenizer(sql_upd,",");
						s1 = st1.nextToken();
						s2 = st1.nextToken();
						s3 = st1.nextToken();
						uSQL = getSQL(logBuf,conn,s1,s2,s3,strPara);
					}
					for ( int row = 0 ; row < ds_input.getRowCount();row++ )
					{
						//writeLog(logBuf,row + "row type : " + ds_input.getRowType(row));
						if (ds_input.getRowType(row) == ds_input.ROW_TYPE_INSERTED ) //insert
							transSQL(logBuf,conn,iSQL,ds_input,row,1);
						else if (ds_input.getRowType(row) == ds_input.ROW_TYPE_UPDATED ) //update 4
							transSQL(logBuf,conn,uSQL,ds_input,row,1);
					}
				}
			} else {
				if ( sql_sel.length() > 0)
				{
					StringTokenizer st1 = new StringTokenizer(sql_sel,",");
					s1 = st1.nextToken();
					s2 = st1.nextToken();
					s3 = st1.nextToken();
   				
					strSQL = getSQL(logBuf,conn,s1,s2,s3,strPara);
  
				
					out_dl.add(selectSQL(logBuf,conn,strSQL,outDs));
				}
			}
		}
	    setResultMessage(0, "OK", out_vl);
//	    conn.commit(); 
	} catch(Exception ex) {
		//out.print("exception");
		ex.printStackTrace();
		//conn.rollback(); 
 		setResultMessage(-1, ex.toString(),out_vl);
 		setResultMessage("ErrorSQL",strSQL,out_vl);
	} finally {
		if(logBuf != null) {
			try {
				logBuf.close();
			}catch(Exception e) {}
		}
		if(rs != null) {
			try {
				rs.close();
			}catch(Exception e) {}
		}
		if(pstmt != null) {
			try {
				pstmt.close();
			}catch(Exception e) {}
		}
		if(conn != null) {
			try {
				conn.close();
			}catch(Exception e) {}
		}
	} 
	this.proc_output(response,out,out_vl,out_dl);//,resType);
%>