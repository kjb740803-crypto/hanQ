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

if (nexacro.PopupMenu) {
	var _pPopupMenu = nexacro.PopupMenu.prototype;
	_pPopupMenu.createCssDesignContents = function () {
		var obj = new nexacro.Dataset("PopupMenu_innerdataset", this.parent);
		obj._setContents("<ColumnInfo><Column id=\"idcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"captioncolumn\" type=\"STRING\" size=\"256\"/><Column id=\"levelcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"iconcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"enablecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"checkboxcolumn\" type=\"STRING\" size=\"256\"/><Column id=\"hotkeycolumn\" type=\"STRING\" size=\"256\"/><Column id=\"userdatcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"captioncolumn\">File</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">F</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"captioncolumn\">New</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+N</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')(</Col></Row><Row><Col id=\"idcolumn\">3</Col><Col id=\"captioncolumn\">Open</Col><Col id=\"levelcolumn\">1</Col><Col id=\"hotkeycolumn\">CTRL+O</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">URL('theme://images/btn_TF_Max_O.png')</Col></Row><Row><Col id=\"idcolumn\">4</Col><Col id=\"captioncolumn\">Project</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+P</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">5</Col><Col id=\"captioncolumn\">File..</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+F</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">6</Col><Col id=\"captioncolumn\">Save</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+S</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">7</Col><Col id=\"captioncolumn\">Exit</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">false</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+E</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">8</Col><Col id=\"captioncolumn\">Edit</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">false</Col><Col id=\"hotkeycolumn\">E</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">9</Col><Col id=\"captioncolumn\">Cut</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+X</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">10</Col><Col id=\"captioncolumn\">Copy</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"hotkeycolumn\">CTRL+C</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">copy</Col></Row><Row><Col id=\"idcolumn\">11</Col><Col id=\"captioncolumn\">Undo</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">false</Col><Col id=\"hotkeycolumn\">CTRL+U</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">undo</Col></Row><Row><Col id=\"idcolumn\">12</Col><Col id=\"captioncolumn\">View</Col><Col id=\"levelcolumn\">0</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">URL('theme://images/btn_WF_Calendar.png')</Col></Row><Row><Col id=\"idcolumn\">13</Col><Col id=\"captioncolumn\">1-1</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\">URL('theme://images/img_Step_NS.png')</Col></Row><Row><Col id=\"idcolumn\">14</Col><Col id=\"captioncolumn\">1-2</Col><Col id=\"levelcolumn\">1</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"></Col></Row><Row><Col id=\"idcolumn\">15</Col><Col id=\"captioncolumn\">1-2-1</Col><Col id=\"levelcolumn\">2</Col><Col id=\"enablecolumn\">true</Col><Col id=\"iconcolumn\"></Col></Row><Row><Col id=\"idcolumn\">16</Col><Col id=\"captioncolumn\">1-2-2</Col><Col id=\"levelcolumn\">2</Col><Col id=\"iconcolumn\"></Col><Col id=\"enablecolumn\">true</Col></Row><Row><Col id=\"idcolumn\">17</Col><Col id=\"captioncolumn\">1-2-2-1</Col><Col id=\"levelcolumn\">3</Col><Col id=\"iconcolumn\">titlebar_icon</Col><Col id=\"enablecolumn\">true</Col></Row></Rows>");


		this.set_idcolumn("idcolumn");
		this.set_captioncolumn("captioncolumn");
		this.set_levelcolumn("levelcolumn");
		this.set_iconcolumn("iconcolumn");
		this.set_enablecolumn("enablecolumn");
		this.set_checkboxcolumn("checkboxcolumn");
		this.set_hotkeycolumn("hotkeycolumn");
		this.set_userdatacolumn("userdatacolumn");
		this.parent.addChild(obj.name, obj);
		this.set_innerdataset("PopupMenu_innerdataset");
	};

	_pPopupMenu.showCssDesignContents = function (objpath, status, statusvalue, userstatus, userstatusvalue) {
		var form = this.parent;
		var offset_left = (form._adjust_width / 4) - (this._adjust_width / 2);
		var offset_top = (form._adjust_height / 2) - (this._adjust_height / 2);
		if (this.isPopup()) {
			this.trackPopup(offset_left, offset_top);
		}
		else {
			this.trackPopup(offset_left, offset_top);
		}
		var obj = this._items[0];
		if (obj) {
			obj._changeUserStatus("selected", true);
			this._showPopup(obj);
		}
	};

	_pPopupMenu.updatePreviewPosition = function () {
		var form = this.parent;
		var offset_left = (form._adjust_width / 4) - (this._adjust_width / 2);
		var offset_top = (form._adjust_height / 2) - (this._adjust_height / 2);
		this.move(offset_left, offset_top);
	};

	_pPopupMenu.destroyCssDesignContents = function () {
		if (this.isPopup()) {
			this._closePopup();
		}
		var popupmenu = this._popupmenu;
		if (popupmenu) {
			popupmenu.destroy();
		}
		var obj = this.parent.removeChild("PopupMenu_innerdataset");
		obj.destroy();
	};

	_pPopupMenu.on_create_contents = function () {
	};

	_pPopupMenu.on_created_contents = function (_window) {
		var control_elem = this.getElement();
		if (control_elem) {
			if (!this._innerdataset && this.innerdataset) {
				this._innerdataset = this._findDataset(this.innerdataset);
				this.on_apply_innerdataset();
			}

			this._createPopupMenu();

			var items = this._lineItems;
			if (items) {
				var len = items.length;
				for (var i = 0; i < len; i++) {
					items[i].on_created();
				}
			}
		}

		if (!this._isPreviewMode()) {
			this.set_visible(true);
		}
	};

	_pPopupMenu._createPopupMenu = function () {
		var control_elem = this.getElement();
		if (control_elem) {
			this._deletePopupMenu();

			var ds = this._innerdataset;
			if (ds && this.levelcolumn && this.captioncolumn && this.idcolumn) {
				var item_index = 0;
				var row_index = this.datarow;
				var ds_len = ds.getRowCount();

				var top = 0;
				var height = this.itemheight ? this.itemheight : 0;

				for (; row_index < ds_len; row_index++) {
					var rootComp = this._getRootComponent(this);

					var id = ds.getColumn(row_index, this.idcolumn);
					var level = ds.getColumn(row_index, this.levelcolumn);
					var caption = ds.getColumn(row_index, this.captioncolumn);

					var enable = ds.getColumn(row_index, this.enablecolumn);
					var hotkey = ds.getColumn(row_index, this.hotkeycolumn);
					var userdata = ds.getColumn(row_index, this.userdatacolumn);
					var icon = ds.getColumn(row_index, this.iconcolumn);
					var check = ds.getColumn(row_index, this.checkboxcolumn == undefined ? "" : this.checkboxcolumn);
					if (level == this.level) {
						if (caption == "-") {
							var lineItem = new nexacro.Static("separator", 0, top, 0, 1, null, null, null, null, null, null, this);
							lineItem._setControl();
							lineItem.set_background("black");
							lineItem.createComponent();
							lineItem._bLine = true;

							top += 1;

							this._lineItems.push(lineItem);

							continue;
						}

						var popupmenuitem = new nexacro._PopupMenuItemControl("popupmenuitem" + row_index, 0, top, 0, height, null, null, null, null, null, null, this);
						popupmenuitem.createComponent();
						top += height;
						popupmenuitem._bindindex = row_index;
						popupmenuitem.index = item_index++;
						popupmenuitem.datarow = row_index;
						popupmenuitem.level = level;

						popupmenuitem.set_text(caption || "");

						popupmenuitem._setEnable((enable === false || enable === "false") ? false : true);
						popupmenuitem._setId(id || "");
						popupmenuitem._setHotkeyText(hotkey || "");
						popupmenuitem._setUserdata(userdata);

						check = nexacro._toBoolean(check);

						if (check) {
							popupmenuitem._setCheck(check);
						}
						else if (icon) {
							popupmenuitem._setIcon(icon);
						}

						if (row_index == ds.getRowCount() - 1) {
							popupmenuitem._canExpand = false;
						}
						else {
							var next_itemlevel = +ds.getColumn(row_index + 1, this.levelcolumn);
							if (next_itemlevel <= this.level) {
								popupmenuitem._canExpand = false;
							}
							else {
								popupmenuitem._setExpandimage();
							}
						}

						popupmenuitem._setEventHandler("onclick", this.on_notify_menuitem_onclick, this);
						popupmenuitem._setEventHandler("onlbuttondown", this.on_notify_menuitem_onlbuttondown, this);

						if (!(nexacro._isTouchInteraction && nexacro._SupportTouch)) {
							popupmenuitem._setEventHandler("onmouseenter", this.on_notify_menuitem_onmouseenter, this);
							this._setEventHandler("onmouseenter", this.on_notify_onmouseenter, this);

							if (rootComp.onmouseleave) {
								popupmenuitem._setEventHandler("onmouseleave", this.on_notify_menuitem_onmouseleave, this);
							}
						}
						if (nexacro._enableaccessibility) {
							popupmenuitem.on_apply_accessibility();
						}

						this._items.push(popupmenuitem);
						this._lineItems.push(popupmenuitem);

						popupmenuitem._real_visible = false;
					}
					else if (level < this.level) {
						break;
					}

					if (!this._is_subcontrol) {
						if (this.autohotkey && hotkey) {
							this._set_hotkey(id, hotkey);
						}
					}
				}

				this._is_updatedimages = true;
			}
		}
		this._reCalcSize();
	};

	_pPopupMenu.on_created = function (_window) {
		if (!this._is_created) {
			nexacro.Component.prototype.on_created.call(this, _window);
		}
	};

	_pPopupMenu.createComponent = function (bCreateOnly) {
		return nexacro.Component.prototype.createComponent.call(this, bCreateOnly);
	};


	_pPopupMenu.set_visible = function (v) {
		nexacro.Component.prototype.set_visible.apply(this, arguments);
	};

	_pPopupMenu.on_apply_innerdataset = function () {
		this._createPopupMenu();
		this.beforeindex = -1;
		this.beforevalue = "";
		this.beforeText = "";
	};

	_pPopupMenu._reCalcSize = function () {
		var ds = this._innerdataset;
		if (ds && this.captioncolumn) {
			var items = this._items;
			if (!items || items.length == 0) {
				return;
			}

			var len = items.length;
			var currentstatus = this._status;
			var expandtext_width = parseInt(nexacro._getTextSize(">", items[0]._getCurrentStyleInheritValue("font", this._status))[0]);
			var controls_info = this._getControlInfo();
			var textcontrol_width = controls_info[0];
			var hotkeycontrol_width = controls_info[1];
			var maxtextheight = controls_info[2];
			var maxhotkeyheight = controls_info[3];
			var has_expand = controls_info[4];
			var itemborder = controls_info[5];
			var itemborder_t = 0, itemborder_b = 0;
			var itempadding = controls_info[6];
			var itempadding_l = 0, itempadding_r = 0, itempadding_t = 0, itempadding_b = 0;
			var iconimgwidth = controls_info[7];
			var itemheight = controls_info[8];
			var expimgwidth = controls_info[9];
			var expimgheight = controls_info[10];
			var bchkimg = controls_info[11];
			var chkimgwidth = 0;
			var border = this._getCSSStyleValue("border", currentstatus);
			var padding = this._getCSSStyleValue("padding", currentstatus);

			if (itempadding) {
				itempadding_l = itempadding.left;
				itempadding_r = itempadding.right;
				itempadding_t = itempadding.top;
				itempadding_b = itempadding.bottom;
			}

			if (itemborder) {
				if (itemborder.top) {
					itemborder_t = itemborder.top._width;
				}
				if (itemborder.bottom) {
					itemborder_b = itemborder.bottom._width;
				}
			}

			var border_left = 0, border_top = 0, border_right = 0, border_bottom = 0;
			if (border) {
				border_left = border.left._width;
				border_top = border.top._width;
				border_right = border.right._width;
				border_bottom = border.bottom._width;
			}

			var padding_left = 0, padding_top = 0, padding_right = 0, padding_bottom = 0;
			if (padding) {
				padding_left = padding.left;
				padding_right = padding.right;
				padding_top = padding.top;
				padding_bottom = padding.bottom;
			}


			var item_h = this.itemheight;
			var item_contents_height = 0;
			if (item_h == undefined) {
				item_h = itemheight + itemborder_t + itemborder_b + itempadding_t + itempadding_b;
				item_contents_height = itemheight;
			}
			else {
				item_contents_height = item_h - itemborder_t - itemborder_b - itempadding_t - itempadding_b;
			}

			this._itemheight = item_h;

			if (bchkimg) {
				chkimgwidth = item_h;
			}

			var gap = 0, icontextpadding = 0;
			if (!this.checkboxcolumn && !this.iconcolumn) {
				iconimgwidth = 0;
				chkimgwidth = 0;
				icontextpadding = 0;
			}

			var iconwidth = 0;
			if (iconimgwidth && chkimgwidth) {
				if (iconimgwidth > chkimgwidth) {
					iconwidth = iconimgwidth;
				}
				else {
					iconwidth = chkimgwidth;
				}
			}
			else if (iconimgwidth) {
				iconwidth = iconimgwidth;
			}
			else {
				iconwidth = chkimgwidth;
			}
			var item_width = itempadding_l + itempadding_r + icontextpadding + (iconwidth ? iconwidth : 0) + (textcontrol_width ? textcontrol_width + gap : 0) + (hotkeycontrol_width ? hotkeycontrol_width + gap : 0) + (has_expand ? expimgwidth ? expimgwidth + gap : gap + expandtext_width : 0);
			var popupmenu_width = item_width + padding_left + padding_right + border_left + border_right;
			var items_total_height = this._items_total_height = item_h *  len;
			var popupmenu_height = items_total_height + border_top + border_bottom + padding_top + padding_bottom;

			var buttonsize = this.buttonsize | 0;
			var navigation_visible = this._isNavigationbuttonVisible();
			if (this._isPreviewMode()) {
				if (navigation_visible) {
					this._rearrangePopupMenuItems();
				}
				else {
					this._showNavigationButton(navigation_visible);
					this.resize(popupmenu_width, popupmenu_height);
				}
			}

			var _item_top = buttonsize;

			var icon_x = 0;
			var icon_end_x = iconwidth;

			var text_x = icon_x > itempadding_l ? icon_end_x + icontextpadding : icon_end_x;
			var hotkey_x = text_x + textcontrol_width + gap;

			this._setItemControlPosition(icon_x, iconwidth, itemheight, text_x, textcontrol_width, maxtextheight, hotkey_x, hotkeycontrol_width, maxhotkeyheight, gap, chkimgwidth, expimgwidth ? expimgwidth : expandtext_width, expimgheight ? expimgheight : 0, item_contents_height);

			for (var i = 0; i < this._lineItems.length; i++) {
				var item = this._lineItems[i];
				if (item._bLine) {
					item.move(0, _item_top, popupmenu_width, 1);
					_item_top += 1;
				}
				else {
					if (navigation_visible == false) {
						item.move(0, _item_top, popupmenu_width, item_h);
					}

					if (nexacro._enableaccessibility) {
						item._updateAccessibilityLabel(item);
					}
					_item_top += item_h;
				}
			}
		}
	};

	_pPopupMenu._loaded_expImage = function (imgurl, w, h) {
		if (this._expImage_width != w || this._expImage_height != h) {
			this._expImage_width = w;
			this._expImage_height = h;
		}
	};

	_pPopupMenu._loaded_chkImage = function (imgurl, w, h) {
		if (this._chkImage_width != w || this._chkImage_height != h) {
			this._chkImage_width = w;
			this._chkImage_height = h;
		}
	};

	_pPopupMenu._loaded_iconImage = function (imgurl, w, h) {
		if (!this._iconImage_info[imgurl]) {
			this._iconImage_info[imgurl] = {
				width : 0, 
				height : 0
			};
		}

		if (this._iconImage_info[imgurl].width != w || this._iconImage_info[imgurl].height != h) {
			this._iconImage_info[imgurl].width = w;
			this._iconImage_info[imgurl].height = h;
		}
	};


	delete _pPopupMenu;

	var _pPopupMenuItemControl = nexacro._PopupMenuItemControl.prototype;

	_pPopupMenuItemControl._updateAccessibilityLabel = nexacro._emptyFn;
	delete _pPopupMenuItemControl;
}
