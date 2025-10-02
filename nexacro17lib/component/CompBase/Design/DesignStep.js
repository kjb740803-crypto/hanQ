//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.1.html
//
//==============================================================================

if (nexacro.StepControl) {
	var _pStepControl = nexacro.StepControl.prototype;

	_pStepControl.stepitemsize = 9;

	_pStepControl.createCssDesignContents = function () {
		this.set_stepcount(3);
		this._redrawStepButton();

		var form = this._form;
		if (form) {
			nexacro.Form.prototype.on_apply_stepalign.call(form, "center middle");
		}
	};

	if (!_pStepControl._org_on_icon_onload) {
		_pStepControl._org_on_icon_onload = _pStepControl._on_icon_onload;
	}

	_pStepControl._on_icon_onload = function (url, width, height) {
		this._org_on_icon_onload(url, width, height);

		var form = this._form;
		if (form) {
			nexacro.Form.prototype.on_apply_stepalign.call(form, "center middle");
		}
	};
	delete _pStepControl;
}
