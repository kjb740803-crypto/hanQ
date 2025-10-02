
var pForm  = nexacro.Form.prototype;
 
/************************************************************************************************
 * @ Application 오브젝트를 반환하는 메소드
 * @param  none
 * @return Object
 ************************************************************************************************/
pForm.gfn_getApplication = function()
{
	var objApp = nexacro.getApplication();	
	return objApp;
}


 
/************************************************************************************************
 * @ Application 오브젝트를 반환하는 메소드
 * @param  none
 * @return Object
 ************************************************************************************************/
pForm.gfn_eduformOnLoad = function(objForm)
{
	//this.parent.parent.resetScroll();   
	return;  
}






/**
* @class frame open <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfn_formOnLoad(this);
*/
pForm.gfn_formOnLoad = function(objForm)
{
	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for(var i=0; i<nLength; i++)
	{
		if(arrComp[i] instanceof nexacro.Div){
			this.gfn_formOnLoad(arrComp[i].form); //재귀함수
		}
		else if(arrComp[i] instanceof nexacro.Tab){
			var nPages = arrComp[i].tabpages.length;			
			for(var j=0; j<nPages;j++)
			{			
				this.gfn_formOnLoad(arrComp[i].tabpages[j].form); //재귀함수
			}
		}
		else{
			if(arrComp[i] instanceof nexacro.Grid ){
				this.gfn_setGrid(arrComp[i]);
			}
			if (arrComp[i] instanceof nexacro.Calendar){
				// 월달력 Popup Div 호출 이벤트 추가
				if (arrComp[i].uCalType == "MM"){
					arrComp[i].addEventHandler("ondropdown", this.gfn_openMonthCal, this);
				}
			}
            if (arrComp[i] instanceof nexacro.Combo){
                if(arrComp[i].u_type == "multi"){
					arrComp[i].addEventHandler("ondropdown", this.gfn_openMultiCombo, this);
                }
            }
            
		}
	}
   
	// 화면 loading 시간 측정
	if (objForm.parent.name == "div_work")
	{
		var objApp     = objForm.gfn_getApplication();
		var sStartDate = objApp.sStartDate;
		var nStartTime = objApp.nStartTime;
		
		var objDate  = new Date();
		var sEndDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();						
		var nElapseTime = (objDate.getTime() - nStartTime)/1000;
		objApp.av_BottomFrame.form.staLodingTime.set_text("해당 화면의 loading 시간은 " +  + nElapseTime + " Sec 입니다.");
	}
	
/*    
	// 팝업 일때 처리
	if (objForm.opener)
	{
		if (objForm.parent instanceof nexacro.ChildFrame)
		{
			// 키다운 이베트 추가
			objForm.addEventHandler("onkeydown", this.gfn_onkeydown, this);
		}
	}

	// QuikView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
	{
		if (this.gfn_isNull(objForm.opener) && objForm.parent instanceof nexacro.ChildFrame)
		{
			// 키다운 이베트 추가
			objForm.addEventHandler("onkeydown", this.gfn_onkeydown, this);
		}
	}
*/    
    objForm.addEventHandler("onkeydown", this.gfn_onkeydown, this);
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Array} aArgs - arguments
 * @return N/A
 */
pForm.gfn_openForm = function(objDs, nRow, arrArg)
{
	var objApp   = pForm.gfn_getApplication();	
    var sMenuId = objDs.getColumn(nRow, "MENU_ID");
    var sMenuNm = objDs.getColumn(nRow, "MENU_NAME");
    var sUrl    = objDs.getColumn(nRow, "FORM_URL");

//     var sMenuId = objDs.getColumn(nRow, objApp.av_MenuColumns.menuId);
//     var sMenuNm = objDs.getColumn(nRow, objApp.av_MenuColumns.menuNm);
//     var sUrl    = objDs.getColumn(nRow, objApp.av_MenuColumns.menuUrl);

    if(this.gfn_isNull(sUrl)) return;    

	//최대화면	체크
	if(objApp.av_MaxForm <= objApp.gds_openForm.getRowCount()){
		alert(objApp.av_MaxForm +"개 초과하여 화면을 열수 없습니다");
		return false;
	}

	// 화면 loading 시간 측정
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();
	objApp.nStartTime = nStartTime;
	objApp.sStartDate = sStartDate;
	
	//업무영역 Size, application.av_WorkFrame
	var nWidth  = objApp.av_WorkFrame.getOffsetWidth();
	var nHeight = objApp.av_WorkFrame.getOffsetHeight();    

	// 동일화면 한번만 열기, 동일화면 여러개 열기
	// Application Script의 av_MultiOpen 변수 값에 따라 처리
	// true:여러개 열기, false:한번 열기
	var sFormId = "";
	if(objApp.av_MultiOpen){
        sFormId = "FORM_" + sMenuId + "_" + parseInt(Math.random() * 1000);		
	}
	else{
		sFormId = "FORM_" + sMenuId;				
		var arrObj = objApp.av_WorkFrame.all;
		for(var i=0; i<arrObj.length; i++){
			if(arrObj[i].name == sFormId){
				arrObj[i].setFocus();
				return;
			}
		}
	}
	
	var objCF = new ChildFrame();
	objCF.init(sFormId, 0, 0, nWidth, nHeight);
	objApp.av_WorkFrame.addChild(sFormId, objCF);

	objCF.set_tooltiptext(sFormId);
	objCF.set_dragmovetype("all");
	objCF.set_showtitlebar(false);
	objCF.set_resizable(true);
	objCF.set_openstatus("maximize");
	objCF.set_titletext(sMenuNm);
	objCF.set_showcascadetitletext(false);
	objCF.arguments = [];
	objCF.arguments["formId"]  = sFormId;
	objCF.arguments["menuId"]  = sMenuId;
	objCF.arguments["menuNm"]  = sMenuNm;
	objCF.arguments["formUrl"] = sUrl;
	objCF.arguments["arrArg"]  = arrArg;
	objCF.set_formurl("FrameBase::Frame_Work.xfdl");
	objCF.show();
trace("Frame.js==================== FORMID: + " + sFormId + " ==== " + sUrl);
	// 열린메뉴 정보등록
	this.gfn_setOpenFormDs(sFormId, sMenuId, sMenuNm, sUrl);
	objApp.av_MdiFrame.form.fn_addTab(sFormId, sMenuNm);   //mdi tab button add	
//	objApp.av_MdiFrame.form.isActiveFrame(sFormId);		
};

/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} sFormId
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfn_setOpenFormDs = function(sFormId, sMenuId, sMenuNm, sUrl)
{
	var objApp  = pForm.gfn_getApplication();
	var nRow = objApp.gds_openForm.addRow();
	objApp.gds_openForm.setColumn(nRow, "FORM_ID", sFormId);
	objApp.gds_openForm.setColumn(nRow, "MENU_ID", sMenuId);
	objApp.gds_openForm.setColumn(nRow, "MENU_NAME", sMenuNm);	
	objApp.gds_openForm.setColumn(nRow, "FORM_URL", sUrl);
};

/**
 * @description 각 화면에서 단축키 지정
*/
pForm.gfn_onkeydown = function(obj, e)
{
	//trace("e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);
	
	// 디버그 창 : Ctrl + Q
	if (e.ctrlkey && e.keycode == 81)
	{
		// 운영환경에서는 실행 방지
		//if (nexacro.getEnvironmentVariable("evRunMode") == "2") return;
		
		var oArg = {};
		var oOption = {popuptype:"modeless", title:"디버그", width:800, height:700};
		var sPopupCallBack = "fn_popupCallback";
		this.gfn_openPopup("debugging","Comm::Comm_Debug.xfdl",oArg,sPopupCallBack,oOption);	
	}
};

pForm.gfn_getArgument = function(sName)
{
	return this.getOwnerFrame().arguments[sName];
};

pForm.gfn_getServerUrl = function()
{
	var urlPath = "";
    if (system.navigatorname == "nexacro") 
	{
	    var objEnv = nexacro.getEnvironment();
		urlPath = objEnv.services["svcUrl"].url;
	}else{
		urlPath = window.location.protocol + "//" + window.location.host;
		urlPath+="/nexacro/";
	}
	trace("urlPath : " + urlPath);
	return urlPath;
};

