/**
*  @FileName 	Message.js 
*/

var pForm = nexacro.Form.prototype;
 
/** 
 * @class 메세지팝업오픈
 * @param {String} strMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [strPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
 * @param {String} [strCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
 * @return N/A
 * @example  
 * this.gfnAlert(this, "A", "확인하세요");	
 */
 pForm.gfn_alert = function (strMsgId, arrArg, strPopId, strCallback)
{


	var objApp = pForm.gfn_getApplication();  

	if(objApp.gdsMessage.findRow("MSG_ID", strMsgId) < 0) return false;
	var strMsg = objApp.gdsMessage.lookup("MSG_ID", strMsgId, "MSG_TEXT");

    if(this.gfn_isNull(strMsg)) strMsg = "확인";
	
    // 줄바꿈 변경
	strMsg = strMsg.replace(/\\n/g, String.fromCharCode(10));
	strMsg = pForm.gfn_convertMessage(strMsg, arrArg);
	
//    trace("strMsg : " + strMsg);
	var strMsgType = objApp.gdsMessage.lookup("MSG_ID", strMsgId, "MSG_TYPE");	
	if(this.gfn_isNull(strPopId)) strPopId = strMsgId;

	var strMsgUrl =""; 
	switch(strMsgType) {
		case "A":
			strMsgUrl = "comm::commAlert.xfdl";
			break;  
		case "C":   
			strMsgUrl = "comm::commConfirm.xfdl"; 
			break;
	}   
	var oArg = {paramContents:strMsg};    
	var oOption = {titlebar:"false", left:60, top:200};	     
      
	// messagePopup
	if (nexacro.getEnvironmentVariable("ev_messagePopup") == "true") {
		this.gfn_openEduPopup(strPopId,strMsgUrl,oArg,strCallback,oOption);
	}
	// alert-cofirm         
	else {
  
		if (strMsgType == "A") {
			alert(strMsg);
		}
		else {   
			return confirm(strMsg);
		}
	}   
};

/**
 * @class 메세지 치환
 * @param {String} msg - 메세지	
 * @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfn_convertMessage = function(msg, values) 
{
    return msg.replace(/\{(\d+)\}/g, function() {
        return values[arguments[1]];
    });
};


/**
 * @class 메세지 치환 후 완성된 메시지 리턴
 * @param {String} sMsgId - 메세지ID	
 * @param {Array}  arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfn_getMessage = function(sMsgId, arrArg) 
{
    var objApp = pForm.gfn_getApplication();
	if(objApp.gdsMessage.findRow("MSG_ID", sMsgId) < 0) return false;
	
	var sMsg = objApp.gdsMessage.lookup("MSG_ID", sMsgId, "MSG_TEXT");
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfn_convertMessage(sMsg, arrArg);	
	return sMsg;
};

/**
 * @class  다국어 처리를 위한 용어 검색
 * @param  {String} sTargetVal - 검색할 용어
 * @return {String} 변경할 용어
 */
pForm.gfn_getWord = function (sWord)
{
	var objApp 	  = this.gfn_getApplication();
	var sVal = sWord;
	var nRow = objApp.gdsWord.findRow("WORD_ID",sWord);
	if (nRow != -1){
		sVal = objApp.gdsWord.getColumn(nRow, "KR");
	}  
	return sVal;
};