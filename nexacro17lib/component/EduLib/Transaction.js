/**
*  @FileName 	Transaction.xfdl
*/

var pForm = nexacro.Form.prototype;


/**
 * @함수설명  				공통코드 조회
 * @param arrCode 	        조회할 공통코드 정보
 * @param isAsync			싱크여부(디폴트 : ansync)
 * @return None
 */ 
this._commCodeArg = null;
pForm.gfn_searchCode = function(arrCode, sCallBack, isAsync) 
{
	var objApp = pForm.gfn_getApplication();
	var objDs = objApp.gds_temp;    //공통코드 임시 데이터셋
//	objDs.clearData();

	var arrCodeGroup = new Array();
	for(var i=0; i<arrCode.length; i++)
	{
		arrCodeGroup.push(arrCode[i].codeGroup);  //코드 그룹
	}
    
	// 파라미터값 조회
	this._commCodeArg = arrCode;
	
    var sSvcID    = "svcCommonCode";
    var sURL      = "LocalUrl::selectCommonCode.do";
    var sInDs     = "";
    var sOutDs    = objDs.name+"=ds_commonCode";
    var sParam    = "codeGroup=" + nexacro.wrapQuote(arrCodeGroup.toString());
    var sCallBack = "gfn_codeCallback";
    
	if(!pForm.gfn_isNull(sCallBack))	sSvcID = sSvcID + ":" + sCallBack;
	if(pForm.gfn_isNull(isAsync))		isAsync = true;    
    
//	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack); 
    
    this.gfn_codeCallback("svcCommonCode:fn_callback", 0, "");
}

pForm.gfn_codeCallback = function(svcID, errorCode, errorMsg) 
{
	if (errorCode < 0){
        this.gfn_alert(errorMsg);
        return;
	}
	
	var arrSvcID =  svcID.split(":");
	if (arrSvcID[0] == "svcCommonCode") {
		var sCallBack = arrSvcID[1];
        var objApp = pForm.gfn_getApplication();
        var objDs = objApp.gds_temp;
        
        this.gfn_getCommonCode(this._commCodeArg, objDs);   //{codeGroup:"C001", obj:this.cbo_pos}, gds_temp 
		
		this._commCodeArg = null;
		
		// form에 callback 함수가 있을때
		if (this[sCallBack]) {
			this.lookupFunc(sCallBack).call(arrSvcID[0], errorCode, errorMsg);
		}
	} 
};

pForm.gfn_getCommonCode = function(arrCode, objDsTemp) 
{
    if(this.gfn_isNull(objDsTemp)) objDsTemp = this.gfn_getApplication().gds_comCode;
    
	var objDs = null;		// 대상 데이터셋
	var objComp = null;	// 대상 컴포넌트

    for(var i=0; i<arrCode.length; i++)
    {
        var obj = arrCode[i].obj;
        if(obj instanceof nexacro.Combo ||  obj instanceof nexacro.Radio || obj instanceof nexacro.ListBox){
            objDs   = obj.getInnerDataset();
            objComp = obj;
        } 
        else if(obj instanceof Dataset){		//obj 가 데이터셋일경우
            objDs = obj;
            objComp = null;
        }
        
        if(objDs == null){	
            trace("gfn_getCommonCode : Dataset is Null");
            return;
        } 
        
        var strFilter = "GROUP==" + nexacro.wrapQuote(arrCode[i].codeGroup); 	 	
        //FIlter조건 추가
        if(!this.gfn_isNull(arrCode[i].filter)) {
            strFilter = strFilter + " && " + arrCode[i].filter;
        }
        
        objDsTemp.set_enableevent(false);
        objDs.set_enableevent(false);
        objDsTemp.filter(strFilter);
        objDs.copyData(objDsTemp, true);

        // first set 세팅
        if(!this.gfn_isNull(arrCode[i].first)){
            objDs.insertRow(0);
            var arrFirst = arrCode[i].first.split(":");                    
            if(arrFirst[0] == "0"){
                objDs.setColumn(0, "CODE"     , "ALL");
                objDs.setColumn(0, "CODE_NAME", "All");
            }
            else if(arrFirst[0] == "1"){
                objDs.setColumn(0, "CODE"     , "");
                objDs.setColumn(0, "CODE_NAME", "Selected...");
            }
            else if(arrFirst[0] == "2"){
                objDs.setColumn(0, "CODE"     , arrFirst[1]);
                objDs.setColumn(0, "CODE_NAME", arrFirst[2]);
            }
        }
        
        objDsTemp.filter("");
        objDs.set_enableevent(true);
        objDsTemp.set_enableevent(true);
        
        //컴포넌트를 넘긴 경우 0번째 인덱스 설정
        if(!this.gfn_isNull(objComp)){
            objComp.set_index(0);
        } 
    } 
};

/* KJB */
pForm.gfn_xtransCommon = function(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync, nHttpTimeout)
{

	if(this.gfn_isNull(strSvcId))
	{
		trace("Error : gfn_xtransCommon() 함수의 인자값이 부족합니다.");
		return false;
	}
	
	//nexacro.getApplication().gds_transCOMM;
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()+1).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();

	// Async
	if ((isAsync != true) && (isAsync != false)) isAsync = true;
	
	// Service ID  And callBackFnc Merge
	var strMergeSvcID = strSvcId + "|" + callBackFnc + "|" + isAsync + "|" +nStartTime +"|" + outData;
		
	// StrServiceUrl
      
	var strServiceUrl = "ServiceUrl::JspAgent.jsp";
	strServiceUrl =  strSvcUrl;
	var inDataModi = "SQL_INPUT=ds_transCOMM " + inData;
	
	//개발시에는 xml 운영시에는 ssv로 할것  
	var nDataType = 0;  
	this.transaction( strMergeSvcID                 	//1.strMergeSvcID
					, strServiceUrl                 	//2.strServiceUrl
					, inDataModi                      		//3.inDataSet
					, outData                     		//4.outDataSet
					, strArg                     		//5.arguments
					, "gfn_xcallback"				    //6.strCallbackFunc
					, isAsync                     		//7.bAsync
					, nDataType                     	//0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                    		//0.bCompress ( default : false ) 
};         
  
pForm.gfn_xcallback = function(svcID, errorCode, errorMsg)
{

	/*
	99999 : 데이터셋 gds_ErrMsg 리턴  code는 메세지코드, MESSAGE는 파라미터 파라미터 연결은 | 

	ErrorCode 
	-9998 : 세션 종료    
	-9997 : 오라클 에러
	-9995 :  ErrorMsg 에 첫번째는 에러코드  파라미터 연결은 | 으로

	*/
	  
	var arrSvcID = svcID.split("|");
	
	//통신이 끝나면 기본값으로 셋팅
	//nexacro.getEnvironment().set_httptimeout(500);
	/*
	if (!this.gfn_isNull(nexacro.getEnvironment().pErrorCode)) {		
		nexacro.getEnvironment().pErrorCode = "";
		return;
	}  
	*/
	//에러
	if(errorCode != 0)
	{
		//this.alert("통신중 오류가 발생하였습니다.\n관리자에게 문의 바랍니다.");
		var sMsgId = "edu.msg.server.error";
		var arrArg = ""
		var sPopId = sMsgId;	

		this.gfn_alert(sMsgId, arrArg, sPopId, "fnMsgCallback");
//this.alert(svcID + "error====" + errorCode + "===" + errorMsg);  
		      
		/*
		switch(errorCode)  
		{
			//Error
			case -9999:
				this.gfn_alert("error", "사용중 오류가 발생하였습니다.\n관리자에게 문의 바랍니다.(-9999)");
				return;
				break;
			case -9995:
				var arrMsg    = errorMsg.split("|");
				var sErrorMsg = "";
				if(arrMsg.length >1 ){
					sErrorMsg = this.gfn_getErrMessage(arrMsg[0], errorMsg.substr(errorMsg.indexOf("|")+1));
				}else{
					sErrorMsg = this.gfn_getErrMessage(arrMsg[0]);
				}
				
				this.gfn_alert("caution", sErrorMsg);
				return;
				break;
			//오라클에러
			case -9997:
				this.gfn_alert("error", "사용중 오류가 발생하였습니다.\n관리자에게 문의 바랍니다.(-9997)");
				return;
				break;
			//세션종료
			case -9998:
				var arrMsg    = errorMsg.split("|");
				var sErrorMsg = "";
				if(arrMsg.length >1 ){
					sErrorMsg = this.gfn_getErrMessage(arrMsg[0], errorMsg.substr(errorMsg.indexOf("|")+1));
				}else{
					sErrorMsg = this.gfn_getErrMessage(arrMsg[0]);
				}
				this.gfn_alert("caution", sErrorMsg);
				
				if (system.navigatorname == "nexacro"){  
					this.gfn_reset();		
				}
				else { //html5일 경우 새로고침.
					window.location.reload();
				}
				
				return;				
				break;
			
		}
		*/
	}
	/* switch 문에서 처리
	if(errorCode < 0){
		this.gfn_alert("error", errorMsg);
		return;
	}
	*/
	
	//저장 토스트팝업
	/*
	if(errorCode == 99999){
		if(nexacro.getApplication().gds_errMsg.rowcount > 0){
			var sCode = nexacro.getApplication().gds_errMsg.getColumn(0, "CODE");
			var sMsg  = nexacro.getApplication().gds_errMsg.getColumn(0, "MESSAGE");
			
			this.gfn_alert("info", this.gfn_getErrMessage(sCode, sMsg));
			//return;
		}
	}
	*/

	/*
	var sStartDate = arrSvcID[3];
	var nStartTime = arrSvcID[4];
	
	var objDate = new Date();
	var sEndDate = objDate.getYear()
					+"-"+String(objDate.getMonth()).padLeft(2, '0')
					+"-"+String(objDate.getDate()).padLeft(2, '0')
					+" "+String(objDate.getHours()).padLeft(2, '0')
					+":"+String(objDate.getMinutes()).padLeft(2, '0')
					+":"+String(objDate.getSeconds()).padLeft(2, '0')
					+" "+objDate.getMilliseconds();
	var nElapseTime = (objDate.getTime() - nStartTime)/1000;
	var sMsg = "gfn_callback : SvcID>>"+arrSvcID[0] + ",  errorCode>>"+errorCode + ", errorMsg>>"+errorMsg + ", isAsync>>" + arrSvcID[2] + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
	//trace(sMsg);
	*/
	
	/*
	//세션연장 
	if(arrSvcID[0] != "login" && arrSvcID[0] != "updatePw" && arrSvcID[0] != "sessionChk" && nexacro.getApplication().GV_CONN_BPM != "Y"){
		nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.TopFrame.form._gfn_setTimerReset();
	}
	*/
	
	//공통에서 사용. 콜백이 필요없음(gfn_stopCallBack)
	if(arrSvcID[1] == "gfn_stopCallBack") return;
	

	// 화면의 callBack 함수 실행
	if(!this.gfn_isNull(arrSvcID[1]))
	{
	
		this.lookupFunc(arrSvcID[1]).call(arrSvcID[0], errorCode, errorMsg);
	}
	
};
 
  
pForm.gfn_sQuote = function (argString)
{
	if (this.gfn_isNull(argString)) 
	{
		argString = "";
	}

	var strVal = new String(argString);
	var strRet = new String("'");

	for (var i = 0; i < strVal.length; i++) 
	{
		if (strVal.substr(i, 1) == "'") 
		{
			strRet += '"';
		}
		else if (strVal.substr(i, 1) == '"') 
		{
			strRet += '"';
		}
		else 
		{
			strRet += strVal.substr(i, 1);
		}
	}

	strRet += "'";
	return strRet;
} 

pForm.gfn_addTransInfo = function (inDs, outDs, args, sqlSel, sqlIns, sqlUpd, sqlDel)
{  
  
	var ds = this.ds_transCOMM;
	if ( ds == undefined || ds == null) {  
	
		this.ds_transCOMM = new Dataset;
		ds = this.ds_transCOMM;  
		ds.addColumn("inputDS","string");
		ds.addColumn("outDS","string");
		ds.addColumn("parameters","string");
		ds.addColumn("sql_select","string");
		ds.addColumn("sql_insert","string");
		ds.addColumn("sql_update","string");
		ds.addColumn("sql_delete","string");
		
	}
	var aRow = ds.addRow();
	ds.setColumn(aRow, "inputDS", inDs);
	ds.setColumn(aRow, "outDS", outDs);
	ds.setColumn(aRow, "parameters", args);
	ds.setColumn(aRow, "sql_select", sqlSel);
	ds.setColumn(aRow, "sql_insert", sqlIns);
	ds.setColumn(aRow, "sql_update", sqlUpd);
	ds.setColumn(aRow, "sql_delete", sqlDel);  
  
}
  

pForm.gfn_transCOMMClear = function ()
{  

	if ( this.ds_transCOMM != undefined ) {
		this.ds_transCOMM.clearData();
	}
}	  

