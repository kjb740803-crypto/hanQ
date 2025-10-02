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

if (nexacro.Div) {
	var _pDiv = nexacro.Div.prototype;

	_pDiv.createCssDesignContents = function () {
		this.set_text("Div");
	};

	_pDiv.resetScroll = function () {
		var form = this.form;

		if (form) {
			form.resetScroll();
		}
	};

	_pDiv.set_url = function (v) {
		var init = nexacro.Component.prototype.set_initvalueid;

		nexacro.Component.prototype.set_initvalueid = function (initvalueid) {
			if (!this._is_created) {
				this.initvalueid = initvalueid;
				var fn = this._type_name + initvalueid;
				if (nexacro_init[fn]) {
					nexacro_init[fn].call(this, this);
				}
			}
		};

		if (this.url != v) {
			this.url = v;
			this.on_apply_url();
		}
		nexacro.Component.prototype.set_initvalueid = init;
	};

	delete _pDiv;
}

if (nexacro._InnerForm) {
	var _pInnerForm = nexacro._InnerForm.prototype;
	_pInnerForm.loadForm = nexacro.FormBase.prototype.loadForm;

	delete _pInnerForm;
}
