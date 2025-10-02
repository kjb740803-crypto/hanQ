/**
*  @FileName 	Popup.js 
*/

var pForm = nexacro.Form.prototype;

/**
 * @class 팝업오픈
 * @param {String} sPopupId	- 팝업ID
 * @param {String} sUrl	 - 팝업URL
 * @param {String} [oArg] - 전달값
 * @param {String} [sPopupCallback] - 팝업콜백
 * @param {Object} [oOption] - 팝업옵션 <br>
 *	oOption.top : 상단 좌표 <br>
 *	oOption.left : 좌측 좌표 <br>
 *	oOption.width : 넓이 <br>
 *	oOption.height : 높이 <br>
 *	oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow) <br>
 *	oOption.layered : 투명 윈도우 <br>
 *	oOption.opacity : 투명도 <br>
 *	oOption.autosize : autosize <br>
 * @return N/A
 * @example     
 * this.gfnOpenPopup(this);
 */
pForm.gfn_openEduPopup = function(sPopupId, sUrl, oArg, sCallBack, oOption)
{  
	var sOpenalign = "";
	var nLeft = 0;
	var nTop = 0;
 
	var sTitleText = "";
	for (var key in oOption) {
       if (oOption.hasOwnProperty(key)) {
            switch (key) 
			{
				case "title":					
					sTitleText = oOption[key];	
					break;		
				case "left":					
					nLeft = oOption[key];	
					break;		
				case "top":					
					nTop = oOption[key];	
					break;			
			}	  
        }
    }
   

	var objChildFrame = new ChildFrame();
	objChildFrame.init(sPopupId
	                  , nLeft  
					  , nTop
					  , -1
					  , -1  
					  , null
					  , null
					  , sUrl);
   

	
//	objChildFrame.set_openalign("center middle");
	
	objChildFrame.set_overlaycolor("RGBA(0,0,0,0.80)");  
	objChildFrame.set_dragmovetype("all");
	objChildFrame.set_resizable(false);
	objChildFrame.set_showstatusbar(false);
	objChildFrame.set_showtitlebar(false);
	if(!this.gfn_isNull(sTitleText)){
		objChildFrame.set_titletext(sTitleText);
	} 
		   
	var objParam = oArg;
				   
	objChildFrame.showModal( this.getOwnerFrame()
	                       , objParam
						   , this
						   , sCallBack);	
}	   