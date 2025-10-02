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

if (nexacro.SimpleComponent) {
	var _pSimpleComponent = nexacro.SimpleComponent.prototype;



	_pSimpleComponent.createCssDesignContents = function () {
		this._createCssDesignContents();
	};
	_pSimpleComponent.createCssDesignContents = function () {
		this._createCssDesignContents();
	};
	_pSimpleComponent.showCssDesignContents = function () {
		this._showCssDesignContents();
	};
	_pSimpleComponent.destroyCssDesignContents = function () {
		this._destroyCssDesignContents();
	};

	_pSimpleComponent.createFormDesignContents = function () {
		this._createFormDesignContents();
	};
	_pSimpleComponent.showFormDesignContents = function () {
		this._showFormDesignContents();
	};
	_pSimpleComponent.destroyFormDesignContents = function () {
		this._destroyFormDesignContents();
	};

	_pSimpleComponent.createCtseDesignContents = function () {
		this._createCtseDesignContents();
	};
	_pSimpleComponent.showCtseDesignContents = function () {
		this._showCtseDesignContents();
	};
	_pSimpleComponent.destroyCtseDesignContents = function () {
		this._destroyCtseDesignContents();
	};


	_pSimpleComponent._createCssDesignContents = function () {
		this._onCreateCssDesignContents();
	};
	_pSimpleComponent._showCssDesignContents = function () {
		this._onCreateCssDesignContents();
	};
	_pSimpleComponent._destroyCssDesignContents = function () {
		this._onDestroyCssDesignContents();
	};

	_pSimpleComponent._createFormDesignContents = function () {
		this._onCreateFormDesignContents();
	};
	_pSimpleComponent._showFormDesignContents = function () {
		this._onCreateFormDesignContents();
	};
	_pSimpleComponent._destroyFormDesignContents = function () {
		this._onDestroyFormDesignContents();
	};

	_pSimpleComponent._createCtseDesignContents = function () {
		this._onCreateCtseDesignContents();
	};
	_pSimpleComponent._showCtseDesignContents = function () {
		this._onCreateCtseDesignContents();
	};
	_pSimpleComponent._destroyCtseDesignContents = function () {
		this._onDestroyCtseDesignContents();
	};



	_pSimpleComponent._onCreateCssDesignContents = function (mode) {
	};
	_pSimpleComponent._onShowCssDesignContents = function () {
	};
	_pSimpleComponent._onDestroyCssDesignContents = function () {
	};

	_pSimpleComponent._onCreateFormDesignContents = function () {
	};
	_pSimpleComponent._onShowFormDesignContents = function () {
	};
	_pSimpleComponent._onDestroyFormDesignContents = function () {
	};

	_pSimpleComponent._onCreateCtseDesignContents = function () {
	};
	_pSimpleComponent._onShowCtseDesignContents = function () {
	};
	_pSimpleComponent._onDestroyCtseDesignContents = function () {
	};




	delete _pSimpleComponent;
}
;


if (nexacro._CompUtil) {
	nexacro._notify = function (msg) {
		if (this._notifycomp && this._notifycomp.value) {
			switch (this._notifytype) {
				case "addtext":
					return this._notifycomp.value += msg;
				case "addline":
					return this._notifycomp.value += msg + "\n";
				case "settext":
					return this._notifycomp.value = msg;
			}
		}

		return nexacro.__onNexacroStudioError(msg);
	};
}
;