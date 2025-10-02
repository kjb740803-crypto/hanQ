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

if (nexacro._Browser != "Runtime") {
	if (nexacro.ControlElement) {
		var _pControlElement = nexacro.ControlElement.prototype;

		_pControlElement.createCommandStart = function () {
			var str = "";
			if (!this._is_popup) {
				var owner_elem = (this._is_nc_element) ? this.parent_elem : this.parent_elem.getContainerElement(this.position_step);
				if (owner_elem && !this.handle) {
					this.owner_elem = owner_elem;

					if (nexacro._enableaccessibility && nexacro._accessibilitytype == 5) {
						if (this.linkedcontrol && (this.linkedcontrol._skip_mobile_tabfocus || this.linkedcontrol._input_element)) {
							str = "<div id='" + this.name + "' class='" + this._getElementClassName() + "' ";
						}
						else {
							str = "<div id='" + this.name + "' class='" + this._getElementClassName() + "' tabindex ='" + this.tabindex + "' ";
						}
					}
					else {
						str = "<div id='" + this.name + "' class='" + this._getElementClassName() + "' tabindex ='" + this.tabindex + "' ";
					}

					if (!nexacro._isNull(this.tooltiptext)) {
						if (nexacro._AccessibilityUtil.isUseTooltipText()) {
							str += " title = '" + this.tooltiptext + "' ";
						}
					}

					var acc_str = this._getAccessibilityInfoStr();
					var style_str = this._getControlStyleStr();
					var status_str = this._getControlStatusStr();

					str += status_str ? (" " + status_str) : "";
					str += style_str ? (" style='" + style_str + "'") : "";
					str += acc_str ? (" " + acc_str) : "";

					if (nexacro._enableaccessibility && !this.visible) {
						str += nexacro.__getDOMAccessibilityStr_StatHidden(true);
					}

					str += ">";

					var edge_elem = this._edge_elem;
					if (edge_elem) {
						str += edge_elem.createCommand();
					}

					if (this._client_elem && !this._is_popup) {
						str += this._client_elem.createCommandStart();
					}
					else if (!this._is_simple_control) {
						style_str = "";
						if (this.client_left || this.client_top) {
							style_str += nexacro.__getHTMLStyle_Pos(this.client_left, this.client_top);
						}
						if (this.client_width && this.client_height) {
							style_str += nexacro.__getHTMLStyle_Size(this.client_width, this.client_height);
						}
						str += "<div class='nexasimplecontainer' id='nexacontainer' ";
						str += style_str ? (" style='" + style_str + "' >") : " >";
					}

					return str;
				}
			}
			return "";
		};

		_pControlElement.create = function (win) {
			var _doc, owner_elem, handle, handle_style;
			if (!this._is_popup) {
				owner_elem = (this._is_nc_element) ? this.parent_elem : this.parent_elem.getContainerElement(this.position_step);
				if (owner_elem && owner_elem.handle) {
					if (!this.handle) {
						this.owner_elem = owner_elem;
						_doc = win._doc || owner_elem._getRootWindowHandle();

						handle = _doc.createElement("div");
						handle.id = this.name;
						handle._linked_element = this;


						this.handle = this.dest_handle = handle;
						nexacro.__setDOMNode_ClassName(handle, this._getElementClassName());

						if (!this._is_simple_control) {
							var inner_node = _doc.createElement("div");
							this.dest_handle = inner_node;
							nexacro.__setDOMNode_ClassName(inner_node, this._getElementNexaClassName("nexasimplecontainer"));
							nexacro.__setDOMNode_Id(inner_node, "", "nexacontainer");

							nexacro.__appendDOMNode(handle, inner_node);

							var innernodestyle = inner_node.style;
							if (this.client_left || this.client_top) {
								nexacro.__setDOMStyle_Pos(innernodestyle, this.client_left, this.client_top);
							}
							if (this.client_width && this.client_height) {
								nexacro.__setDOMStyle_Size(innernodestyle, this.client_width, this.client_height);
							}
						}
						handle_style = handle.style;
						nexacro.__setDOMStyle_Pos(handle_style, this.left, this.top);
						nexacro.__setDOMStyle_Size(handle_style, this.width, this.height);

						if (nexacro._enableaccessibility && nexacro._accessibilitytype == 5) {
							if (this.linkedcontrol && this.linkedcontrol._skip_mobile_tabfocus) {
								this.tabindex = -99;
							}
						}
						if (nexacro._enableaccessibility && !this.visible) {
							nexacro.__setDOMAccessibility_StatHidden(handle, true);
						}

						this._refreshControl(handle, handle_style, _doc);

						if (this.direction) {
							nexacro.__setDOMStyle_Direction(handle_style, this.direction);
						}

						nexacro.__appendDOMNode((this._is_nc_element) ? owner_elem.handle : owner_elem.dest_handle, handle);
					}
				}
			}
			else {
				_doc = this._doc = win._doc;
				owner_elem = win;

				handle = _doc.createElement("div");
				var linkedcontrol = this.linkedcontrol;

				handle._linked_element = this;
				handle.id = this.name;

				this.handle = this.dest_handle = handle;
				nexacro.__setDOMNode_ClassName(handle, this._getElementClassName());

				handle_style = handle.style;
				nexacro.__setDOMStyle_Pos(handle_style, this.left, this.top);
				nexacro.__setDOMStyle_Size(handle_style, this.width, this.height);

				if (linkedcontrol._findOwnerElementHandle) {
					var owner_elem_info = linkedcontrol._findOwnerElementHandle();
					if (owner_elem_info.is_append) {
						if (owner_elem_info.ref_handle) {
							nexacro.__appendDOMNode(owner_elem_info.ref_handle, handle);
						}
						else {
							nexacro.__appendDOMNode(owner_elem_info.owner_handle, handle);
						}
						this.owner_elem = owner_elem_info.owner_handle._linked_element;
					}
					else {
						owner_elem_info.owner_handle.insertBefore(handle, owner_elem_info.ref_handle);
						this.owner_elem = owner_elem.dest_handle._linked_element;
					}
				}
				else {
					nexacro.__appendDOMNode(owner_elem.dest_handle, handle);
					this.owner_elem = owner_elem;
				}
				if (nexacro._enableaccessibility && nexacro._accessibilitytype == 5) {
					if (this.linkedcontrol && this.linkedcontrol._skip_mobile_tabfocus) {
						this.tabindex = -99;
					}
				}
				if (nexacro._enableaccessibility && !this.visible) {
					nexacro.__setDOMAccessibility_StatHidden(handle, true);
				}

				this._refreshControl(handle, handle_style, _doc);

				this._frame_node = nexacro._createFrameNode(handle, this.left, this.top, _doc);
			}
		};

		_pControlElement.setElementAccessibilityRole = function (role) {
			var accrole = nexacro._roleList[role];
			if ((nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && this.linkedcontrol && this.linkedcontrol._skip_mobile_tabfocus) {
				accrole = "";
			}

			{

				this.accessibilityrole = accrole;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_Role(handle, accrole);
				}
			}
		};

		_pControlElement.setElementAccessibilityLabel = function (label) {
			if (this.accessibilitylabel != label) {
				this.accessibilitylabel = label;
			}

			this._updateAccessibilityLabel();
		};

		_pControlElement.accessibilityparentlabel = "";

		_pControlElement.setElementAccessibilityParentLabel = function (parentlabel) {
			if (this.accessibilityparentlabel != parentlabel) {
				this.accessibilityparentlabel = parentlabel;
			}

			this._updateAccessibilityLabel();
		};

		_pControlElement._updateAccessibilityLabel = function () {
			var handle = this.handle;
			if (handle) {
				var readlabel = this._makeAccessibilityLabelbyReadtype(this);
				if (readlabel != this.accessibilityreadlabel) {
					this.accessibilityreadlabel = readlabel;
					nexacro.__setDOMAccessibility_Label(handle, readlabel);
				}
			}
		};

		_pControlElement.setElementAccessibilityEnable = function (enable) {
			if (this.accessibilityenable != enable) {
				this.accessibilityenable = enable;
				var handle = this.handle;
				if (handle) {
					if (enable) {
						nexacro.__setDOMAccessibility_Role(handle, this.accessibilityrole);
						var readlabel = this._makeAccessibilityLabelbyReadtype(this);
						if (readlabel != this.accessibilityreadlabel) {
							this.accessibilityreadlabel = readlabel;
							nexacro.__setDOMAccessibility_Label(handle, readlabel);
						}

						nexacro.__setDOMAccessibility_Description(handle, this.accessibilitydescription);
						nexacro.__setDOMAccessibility_StatHidden(handle, false);
					}
					else {
						if ((nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && this.linkedcontrol && !this.linkedcontrol._skip_mobile_tabfocus) {
							nexacro.__setDOMAccessibility_Role(handle, "");
							nexacro.__setDOMAccessibility_StatHidden(handle, true);
						}
						else {
							nexacro.__setDOMAccessibility_Disabled(handle);
						}
					}
				}
			}
		};

		_pControlElement.setElementAccessibilityDescription = function (desc) {
			if (this.accessibilitydescription != desc) {
				this.accessibilitydescription = desc;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_Description(handle, desc);
				}

				this._updateAccessibilityLabel();
			}
		};

		_pControlElement.setElementAccessibilityDescLevel = function (desclevel) {
			this.accessibilitydesclevel = desclevel;

			this._updateAccessibilityLabel();
		};

		_pControlElement.setElementAccessibilityAction = function (action) {
			this.accessibilityaction = action;

			this._updateAccessibilityLabel();
		};

		_pControlElement.setElementAccessibilityValue = function (value, input, bfocus) {
			if (this.accessibility_value != value) {
				this.accessibility_value = value;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_Value(handle, value, input, bfocus);
				}
			}
		};

		_pControlElement.setElementAccessibilityStatDisabled = function (disabled) {
			if (this.accessibility_stat_disabled != disabled) {
				this.accessibility_stat_disabled = disabled;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_StatDisabled(handle, disabled);
				}
			}
		};

		_pControlElement.setElementAccessibilityStatHidden = function (hidden) {
			if (this.accessibility_stat_hidden != hidden) {
				this.accessibility_stat_hidden = hidden;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_StatHidden(handle, hidden);
				}
			}
		};

		_pControlElement.setElementAccessibilityStatChecked = function (checked) {
			if (this.accessibility_stat_checked != checked) {
				this.accessibility_stat_checked = checked;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_StatChecked(handle, checked);
				}
			}
		};

		_pControlElement.setElementAccessibilityStatPressed = function (pressed) {
			if (this.accessibility_stat_pressed != pressed) {
				this.accessibility_stat_pressed = pressed;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_StatPressed(handle, pressed);
				}
			}
		};

		_pControlElement.setElementAccessibilityStatSelected = function (selected) {
			if (this.accessibility_stat_selected != selected) {
				this.accessibility_stat_selected = selected;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_StatSelected(handle, selected);
				}
			}
		};

		_pControlElement.setElementAccessibilityStatLive = function (v) {
			if (this.accessibilitylive != v) {
				this.accessibilitylive = v;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_Live(handle, v);
				}
			}
		};

		_pControlElement.setElementAccessibilityStatExpanded = function (expanded) {
			this.accessibility_stat_expanded = expanded;
			var handle = this.handle;
			if (handle) {
				nexacro.__setDOMAccessibility_StatExpanded(handle, expanded);
			}
		};

		_pControlElement.setElementAccessibilityStatAutoComplete = function (autocomplete) {
			if (this.accessibility_stat_autocomplete != autocomplete) {
				this.accessibility_stat_autocomplete = autocomplete;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_StatAutoComplete(handle, autocomplete);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagHasPopup = function (haspopup) {
			if (this.accessibility_flag_haspopup != haspopup) {
				this.accessibility_flag_haspopup = haspopup;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_StatHasPopup(handle, haspopup);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagFocusable = function (focusable) {
			if (this.accessibility_flag_focusable != focusable) {
				this.accessibility_flag_focusable = focusable;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagFocusable(handle, focusable);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagReadOnly = function (readonly) {
			{

				this.accessibility_flag_readonly = readonly;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagReadOnly(handle, readonly);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagPassword = function (password) {
			if (this.accessibility_flag_password != password) {
				this.accessibility_flag_password = password;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagPassword(handle, password);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagMultiSelectable = function (multiselectable) {
			if (this.accessibility_flag_multiselectable != multiselectable) {
				this.accessibility_flag_multiselectable = multiselectable;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagMultiSelectable(handle, multiselectable);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagSelectable = function (selectable) {
			if (this.accessibility_flag_selectable != selectable) {
				this.accessibility_flag_selectable = selectable;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagSelectable(handle, selectable);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagDefaultButton = function (defaultbutton) {
			if (this.accessibility_flag_defaultbutton != defaultbutton) {
				this.accessibility_flag_defaultbutton = defaultbutton;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagDefaultButton(handle, defaultbutton);
				}
			}
		};

		_pControlElement.setElementAccessibilityFlagMultiLine = function (multiline) {
			if (this.accessibility_flag_multiline != multiline) {
				this.accessibility_flag_multiline = multiline;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagMultiLine(handle, multiline);
				}
			}
		};

		_pControlElement.setElementAccessibilityInfoCount = function (count) {
			if (this.accessibility_prop_infocount != count) {
				this.accessibility_prop_infocount = count;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_InfoCount(handle, count);
				}
			}
		};

		_pControlElement.setElementAccessibilityInfoIndex = function (index) {
			if (this.accessibility_prop_infoindex != index) {
				this.accessibility_prop_infoindex = index;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_InfoIndex(handle, index);
				}
			}
		};

		_pControlElement.setElementAccessibilityInfoValueMax = function (valuemax) {
			if (this.accessibility_prop_infovaluemax != valuemax) {
				this.accessibility_prop_infovaluemax = valuemax;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_InfoValueMax(handle, valuemax);
				}
			}
		};

		_pControlElement.setElementAccessibilityInfoValueMin = function (valuemin) {
			if (this.accessibility_prop_infovaluemin != valuemin) {
				this.accessibility_prop_infovaluemin = valuemin;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_InfoValueMin(handle, valuemin);
				}
			}
		};

		_pControlElement.setElementAccessibilityInfoValueCur = function (valuecur) {
			if (this.accessibility_prop_infovaluecur != valuecur) {
				this.accessibility_prop_infovaluecur = valuecur;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_InfoValueCur(handle, valuecur);
				}
			}
		};

		_pControlElement.setElementAccessibilityInfoLevel = function (level) {
			if (this.accessibility_prop_infolevel != level) {
				this.accessibility_prop_infolevel = level;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_InfoLevel(handle, level);
				}
			}
		};

		_pControlElement.setElementAccessibilityHotKey = function (hotkey) {
			if (this.accessibility_prop_hotkey != hotkey) {
				this.accessibility_prop_hotkey = hotkey;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_HotKey(handle, hotkey);
				}
			}
		};

		_pControlElement.setElementAccessibilityActiveDescendant = function (control, activedescendant_elem) {
			this.accessibility_prop_activedescendant = control._unique_id;
			var handle = activedescendant_elem.handle;
			if (handle) {
				nexacro.__setDOMAccessibility_ActiveDescendant(activedescendant_elem.handle, this.accessibility_prop_activedescendant);
			}
		};

		_pControlElement.setElementAccessibilityStatFocus = function (readlabel) {
			var linkedcontrol = this.linkedcontrol;
			var handle;
			if (!linkedcontrol._isEnable()) {
				var notifyvalue;
				if (readlabel) {
					notifyvalue = readlabel;
				}
				else {
					readlabel = this._makeAccessibilityLabelbyReadtype(this);
					this.accessibilityreadlabel = readlabel;
					notifyvalue = readlabel;
				}

				notifyvalue += " " + (linkedcontrol.value ? linkedcontrol.value : "");
				handle = this.handle;
				if (handle) {
					nexacro._notifyAccessibility(handle, notifyvalue, "notify", this, false, false);
				}
			}
			else {
				if (readlabel && readlabel != this.accessibilityreadlabel) {
					this.accessibilityreadlabel = readlabel;
					handle = this.handle;
					if (handle) {
						nexacro.__setDOMAccessibility_Label(this.handle, readlabel);
					}
				}

				var env = nexacro.getEnvironment();
				if (env) {
					var label = readlabel ? readlabel : nexacro._AccessibilityUtil.getAccessibilityLabel(this);
					var from_refer_comp = this.linkedcontrol;
					env.on_fire_onaccessibility(label, env, from_refer_comp);
				}
			}
		};

		if (nexacro._Browser == "IE" && nexacro._BrowserVersion < 8) {
			_pControlElement.notifyAccessibility = nexacro._emptyFn;
			_pControlElement._makeAccessibilityLabelbyReadtype = nexacro._emptyFn;
		}
		else {
			_pControlElement.notifyAccessibility = function (label, notifyevent, bfocus) {
				var readlabel = this._makeAccessibilityLabelbyReadtype(this);
				this.accessibilityreadlabel = readlabel;
				nexacro._notifyAccessibility(this.handle, label ? label : this.accessibilityreadlabel, notifyevent ? notifyevent : "notify", this, bfocus);
			};

			if (nexacro._OS == "Android") {
				_pControlElement._makeAccessibilityLabelbyReadtype = function (b_label) {
					var label = " ";
					if (!this.accessibilityenable || this.accessibilitydesclevel == "none" || this.accessibilitydesclevel == "child") {
						var is_editable = this.linkedcontrol._is_editable_control;
						if (is_editable && nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel(this);
						}
					}
					else if (this.accessibilityenable && this.accessibilitydesclevel != "none" && this.accessibilitydesclevel != "child") {
						if ((nexacro._accessibilitydescreadtype & 0x01) == 0x01) {
							label = nexacro._AccessibilityUtil.getAccessibilityLabel(this);
						}
						if ((nexacro._accessibilitydescreadtype & 0x02) == 0x02 && this.accessibilityaction) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityAction(this);
						}
						if ((nexacro._accessibilitydescreadtype & 0x04) == 0x04 && this.accessibilitydescription) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityDescription(this);
						}
						if (nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel(this);
						}
					}
					if (this.accessibilityparentlabel) {
						label = this.accessibilityparentlabel + " " + label;
					}

					return label;
				};
			}
			else if (nexacro._Browser == "MobileSafari") {
				_pControlElement._makeAccessibilityLabelbyReadtype = function (b_label) {
					var label = " ";
					if (!this.accessibilityenable) {
						var is_editable = this.linkedcontrol._is_editable_control;
						if (is_editable && nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel(this);
						}
					}
					else if (this.accessibilityenable) {
						if (this.accessibilitydesclevel != "none" && this.accessibilitydesclevel != "child") {
							if ((nexacro._accessibilitydescreadtype & 0x01) == 0x01) {
								label = nexacro._AccessibilityUtil.getAccessibilityLabel(this);
							}
							if ((nexacro._accessibilitydescreadtype & 0x02) == 0x02 && this.accessibilityaction) {
								label += " " + nexacro._AccessibilityUtil.getAccessibilityAction(this);
							}
							if ((nexacro._accessibilitydescreadtype & 0x04) == 0x04 && this.accessibilitydescription) {
								label += " " + nexacro._AccessibilityUtil.getAccessibilityDescription(this);
							}
						}
						if (nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel(this);
						}
					}
					if (this.accessibilityparentlabel) {
						label = this.accessibilityparentlabel + " " + label;
					}

					return label;
				};
			}
			else {
				_pControlElement._makeAccessibilityLabelbyReadtype = function (b_label) {
					var label = " ";
					if (this.accessibilityenable && this.accessibilitydesclevel != "none" && this.accessibilitydesclevel != "child") {
						if (b_label !== false && (nexacro._accessibilitydescreadtype & 0x01) == 0x01) {
							label = nexacro._AccessibilityUtil.getAccessibilityLabel(this);
						}
						if ((nexacro._accessibilitydescreadtype & 0x02) == 0x02 && this.accessibilityaction) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityAction(this);
						}
						if ((nexacro._accessibilitydescreadtype & 0x04) == 0x04 && this.accessibilitydescription) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityDescription(this);
						}
						if (nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel) {
							label += " " + nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel(this);
						}
					}
					if (this.accessibilityparentlabel) {
						label = this.accessibilityparentlabel + " " + label;
					}

					return label;
				};
			}
		}

		_pControlElement._refreshAccessibilityInfo = function (handle, handle_style) {
			if (this.accessibilityenable) {
				if ((nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && this.linkedcontrol && this.linkedcontrol._skip_mobile_tabfocus) {
				}
				else if (nexacro._accessibilitytype == 5 && this.linkedcontrol && !(this.linkedcontrol instanceof nexacro.TextArea) && this.linkedcontrol._input_element) {
				}
				else if (nexacro._accessibilitytype == 4 && this.linkedcontrol && this.linkedcontrol._input_element) {
				}
				else {
					nexacro.__setDOMAccessibility_Role(handle, this.accessibilityrole);
				}
				var readlabel = this._makeAccessibilityLabelbyReadtype(this);
				if (readlabel != this.accessibilityreadlabel) {
					this.accessibilityreadlabel = readlabel;
					nexacro.__setDOMAccessibility_Label(handle, this.accessibilityreadlabel);
				}
				else {
					nexacro.__setDOMAccessibility_DescLevel(handle, this.accessibilitydesclevel);
				}
				nexacro.__setDOMAccessibility_Description(handle, this.accessibilitydescription);
			}
			else {
				if ((nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && this.linkedcontrol && !this.linkedcontrol._skip_mobile_tabfocus) {
					nexacro.__setDOMAccessibility_Role(handle, "");
					nexacro.__setDOMAccessibility_StatHidden(handle, true);
				}
				else {
					nexacro.__setDOMAccessibility_Disabled(handle);
				}
			}

			if (this.accessibility_value) {
				nexacro.__setDOMAccessibility_Value(handle, this.accessibility_value);
			}

			if (this.accessibility_stat_disabled) {
				nexacro.__setDOMAccessibility_StatDisabled(handle, this.accessibility_stat_disabled);
			}
			if (this.accessibility_stat_hidden) {
				nexacro.__setDOMAccessibility_StatHidden(handle, this.accessibility_stat_hidden);
			}

			if (this.accessibility_stat_checked) {
				nexacro.__setDOMAccessibility_StatChecked(handle, this.accessibility_stat_checked);
			}
			if (this.accessibility_stat_pressed) {
				nexacro.__setDOMAccessibility_StatPressed(handle, this.accessibility_stat_pressed);
			}
			if (this.accessibility_stat_selected) {
				nexacro.__setDOMAccessibility_StatSelected(handle, this.accessibility_stat_selected);
			}
			if (this.accessibility_stat_expanded) {
				nexacro.__setDOMAccessibility_StatExpanded(handle, this.accessibility_stat_expanded);
			}
			if (this.accessibility_stat_autocomplete) {
				nexacro.__setDOMAccessibility_StatAutoComplete(handle, this.accessibility_stat_autocomplete);
			}

			if (this.accessibility_flag_haspopup) {
				nexacro.__setDOMAccessibility_StatHasPopup(handle, this.accessibility_flag_haspopup);
			}
			if (this.accessibility_flag_focusable) {
				nexacro.__setDOMAccessibility_FlagFocusable(handle, this.accessibility_flag_focusable);
			}
			if (this.accessibility_flag_readonly) {
				nexacro.__setDOMAccessibility_FlagReadOnly(handle, this.accessibility_flag_readonly);
			}

			if (this.accessibility_flag_password) {
				nexacro.__setDOMAccessibility_FlagPassword(handle, this.accessibility_flag_password);
			}
			if (this.accessibility_flag_multiselectable) {
				nexacro.__setDOMAccessibility_FlagMultiSelectable(handle, this.accessibility_flag_multiselectable);
			}
			if (this.accessibility_flag_selectable) {
				nexacro.__setDOMAccessibility_FlagSelectable(handle, this.accessibility_flag_selectable);
			}
			if (this.accessibility_flag_defaultbutton) {
				nexacro.__setDOMAccessibility_FlagDefaultButton(handle, this.accessibility_flag_defaultbutton);
			}
			if (this.accessibility_flag_multiline) {
				nexacro.__setDOMAccessibility_FlagMultiLine(handle, this.accessibility_flag_multiline);
			}

			if (this.accessibility_prop_infocount) {
				nexacro.__setDOMAccessibility_InfoCount(handle, this.accessibility_prop_infocount);
			}
			if (this.accessibility_prop_infoindex) {
				nexacro.__setDOMAccessibility_InfoIndex(handle, this.accessibility_prop_infoindex);
			}

			if (this.accessibility_prop_infovaluecur) {
				nexacro.__setDOMAccessibility_InfoValueCur(handle, this.accessibility_prop_infovaluecur);
			}
			if (this.accessibility_prop_infovaluemax) {
				nexacro.__setDOMAccessibility_InfoValueMax(handle, this.accessibility_prop_infovaluemax);
			}
			if (this.accessibility_prop_infovaluemin) {
				nexacro.__setDOMAccessibility_InfoValueMin(handle, this.accessibility_prop_infovaluemin);
			}
		};

		_pControlElement._getAccessibilityInfoStr = function () {
			var str;
			if (this.accessibilityenable) {
				if ((nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && this.linkedcontrol && this.linkedcontrol._skip_mobile_tabfocus) {
					str = "";
				}
				else if (nexacro._accessibilitytype == 5 && this.linkedcontrol && !(this.linkedcontrol instanceof nexacro.TextArea) && this.linkedcontrol._input_element) {
					str = "";
				}
				else if (nexacro._accessibilitytype == 4 && this.linkedcontrol && this.linkedcontrol._input_element) {
					str = "";
				}
				else {
					str = nexacro.__getDOMAccessibilityStr_Role(this.accessibilityrole);
				}

				var readlabel = this._makeAccessibilityLabelbyReadtype(this);
				if (readlabel != this.accessibilityreadlabel) {
					this.accessibilityreadlabel = readlabel;
				}

				str += nexacro.__getDOMAccessibilityStr_Label(this.accessibilityreadlabel);
				str += nexacro.__getDOMAccessibilityStr_Description(this.accessibilitydescription);
			}
			else {
				if ((nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && this.linkedcontrol) {
					if (!this.linkedcontrol._skip_mobile_tabfocus) {
						str = nexacro.__getDOMAccessibilityStr_StatHidden(true);
					}
					else {
						str = "";
					}
				}
				else {
					str = nexacro.__getDOMAccessibilityStr_Disabled();
				}
			}

			if (this.accessibility_stat_disabled) {
				str += nexacro.__getDOMAccessibilityStr_StatDisabled(this.accessibility_stat_disabled);
			}
			if (this.accessibility_stat_hidden) {
				str += nexacro.__getDOMAccessibilityStr_StatHidden(this.accessibility_stat_hidden);
			}

			if (this.accessibility_stat_checked) {
				str += nexacro.__getDOMAccessibilityStr_StatChecked(this.accessibility_stat_checked);
			}
			if (this.accessibility_stat_pressed) {
				str += nexacro.__getDOMAccessibilityStr_StatPressed(this.accessibility_stat_pressed);
			}
			if (this.accessibility_stat_selected) {
				str += nexacro.__getDOMAccessibilityStr_StatSelected(this.accessibility_stat_selected);
			}
			if (this.accessibility_stat_expanded) {
				str += nexacro.__getDOMAccessibilityStr_StatExpanded(this.accessibility_stat_expanded);
			}
			if (this.accessibility_stat_autocomplete) {
				str += nexacro.__getDOMAccessibilityStr_StatAutoComplete(this.accessibility_stat_autocomplete);
			}

			if (this.accessibility_flag_haspopup) {
				str += nexacro.__getDOMAccessibilityStr_StatHasPopup(this.accessibility_flag_haspopup);
			}
			if (this.accessibility_flag_focusable) {
				str += nexacro.__getDOMAccessibilityStr_FlagFocusable(this.accessibility_flag_focusable);
			}
			if (this.accessibility_flag_readonly) {
				str += nexacro.__getDOMAccessibilityStr_FlagReadOnly(this.accessibility_flag_readonly);
			}

			if (this.accessibility_flag_password) {
				str += nexacro.__getDOMAccessibilityStr_FlagPassword(this.accessibility_flag_password);
			}
			if (this.accessibility_flag_multiline) {
				str += nexacro.__getDOMAccessibilityStr_FlagMultiLine(this.accessibility_flag_multiline);
			}
			if (this.accessibility_flag_selectable) {
				str += nexacro.__getDOMAccessibilityStr_FlagSelectable(this.accessibility_flag_selectable);
			}
			if (this.accessibility_flag_multiselectable) {
				str += nexacro.__getDOMAccessibilityStr_FlagMultiSelectable(this.accessibility_flag_multiselectable);
			}

			if (this.accessibility_flag_defaultbutton) {
				str += nexacro.__getDOMAccessibilityStr_FlagDefaultButton(this.accessibility_flag_defaultbutton);
			}

			if (this.accessibility_prop_infocount) {
				str += nexacro.__getDOMAccessibilityStr_InfoCount(this.accessibility_prop_infocount);
			}
			if (this.accessibility_prop_infoindex) {
				str += nexacro.__getDOMAccessibilityStr_InfoIndex(this.accessibility_prop_infoindex);
			}

			if (this.accessibility_prop_infovaluecur) {
				str += nexacro.__getDOMAccessibilityStr_InfoValueCur(this.accessibility_prop_infovaluecur);
			}
			if (this.accessibility_prop_infovaluemax) {
				str += nexacro.__getDOMAccessibilityStr_InfoValueMax(this.accessibility_prop_infovaluemax);
			}
			if (this.accessibility_prop_infovaluemin) {
				str += nexacro.__getDOMAccessibilityStr_InfoValueMin(this.accessibility_prop_infovaluemin);
			}

			return str;
		};
		_pControlElement._setAccessibility_notify = function (handle) {
			if (this.accessibility_value) {
				nexacro._notifyAccessibility(handle, this.accessibility_value, this);
			}
		};

		delete _pControlElement;
	}

	if (nexacro.ScrollableControlElement) {
		var _pScrollableControlElement = nexacro.ScrollableControlElement.prototype;
		_pScrollableControlElement._refreshControl = function (handle, handle_style) {
			if (nexacro._accessibilitytype == 5) {
				if (this.linkedcontrol && this.linkedcontrol._skip_mobile_tabfocus) {
					this.tabindex = -99;
				}
			}

			nexacro.ControlElement.prototype._refreshControl.call(this, handle, handle_style);
		};

		delete _pScrollableControlElement;
	}

	if (nexacro.FrameControlElement) {
		var _pFrameControlElement = nexacro.FrameControlElement.prototype;
		_pFrameControlElement._refreshControl = function (handle, handle_style) {
			if (nexacro._accessibilitytype == 5) {
				this.tabindex = -99;
			}

			nexacro.ControlElement.prototype._refreshControl.call(this, handle, handle_style);
		};

		delete _pFrameControlElement;
	}

	if (nexacro.GridRowControlElement) {
		var _pGridRowControlElement = nexacro.GridRowControlElement.prototype;
		_pGridRowControlElement._refreshControl = function (handle, handle_style) {
			if (nexacro._enableaccessibility && nexacro._accessibilitytype == 5) {
				if (this.linkedcontrol && this.linkedcontrol._skip_mobile_tabfocus) {
					this.tabindex = -99;
				}
			}

			nexacro.ControlElement.prototype._refreshControl.call(this, handle, handle_style);
		};

		delete _pGridRowControlElement;
	}

	if (nexacro.TextBoxElement) {
		var _pTextBoxElement = nexacro.TextBoxElement.prototype;

		_pTextBoxElement._createElementHandle = function (owner_elem, _doc) {
			if (this.text) {
				_doc = _doc || owner_elem._getRootWindowHandle();
				var handle = this._createTextElementHandle(_doc);

				handle.id = this.name;
				handle._linked_element = this;

				this.handle = handle;

				var handle_style = handle.style;
				var box_node = this._box_node;
				var box_style = box_node.style;
				var bRtl = this._isRtl();

				this._refreshCommonStyleProps(handle_style);

				if (this.textAlign) {
					nexacro.__setDOMStyle_textAlign(box_style, this.textAlign, bRtl);
				}
				if (this.verticalAlign) {
					nexacro.__setDOMStyle_verticalAlign(box_style, this.verticalAlign);
				}

				if (this._use_decoration) {
					nexacro.__setDOMNode_DecorateText(box_node, this.text);
				}
				else {
					nexacro.__setDOMNode_Text(box_node, this.text, this.wordWrap || this._wordwrap_info);
				}

				if (nexacro._enableaccessibility) {
					nexacro.__setDOMAccessibility_StatHidden(handle, true);
				}
				nexacro.__appendDOMNode(owner_elem.dest_handle, handle);
			}
		};

		if (nexacro._Browser != "IE" || (nexacro._Browser == "IE" && nexacro._BrowserVersion > 7)) {
			_pTextBoxElement.createCommand = function () {
				var owner_elem = this.parent_elem.getContainerElement(this.position_step);
				if (owner_elem && !this._created) {
					this.owner_elem = owner_elem;

					if (this.text) {
						var handle_style = this._getCommonStyleStr();
						var box_style = "";
						var bRtl = this._isRtl();
						var pointereventsstyle = "";

						if (this.textAlign) {
							box_style += nexacro.__getHTMLStyle_textAlign(this.textAlign, bRtl);
						}
						if (this.verticalAlign) {
							box_style += nexacro.__getHTMLStyle_verticalAlign(this.verticalAlign);
						}

						var classname = this._getElementClassName();
						var str = "<div id='" + this.name + "' class='" + classname + "'";

						if (nexacro._enableaccessibility) {
							str += nexacro.__getDOMAccessibilityStr_StatHidden(true);
						}

						if (nexacro._Browser == "IE" && nexacro._BrowserVersion == 11 && this._use_decoration) {
							pointereventsstyle = "pointer-events:visiblePainted";
						}

						str += (handle_style || box_style) ? (" style='" + handle_style + box_style + pointereventsstyle + "'>") : ">";

						if (this._use_decoration) {
							str += nexacro.__getHTMLAttr_DecorateText(this.text);
						}
						else {
							str += nexacro.__getHTMLAttr_Text(this.text, this.wordWrap || this._wordwrap_info);
						}

						str += "</div>";
						return str;
					}
				}
				return "";
			};
		}

		delete _pTextBoxElement;
	}

	if (nexacro.TextAreaElement) {
		var _pTextAreaElement = nexacro.TextAreaElement.prototype;
		_pTextAreaElement.createCommand = function () {
			var owner_elem = this.parent_elem.getContainerElement(this.position_step);
			if (owner_elem && !this._created) {
				this.owner_elem = owner_elem;

				var handle_style = this._getCommonStyleStr();
				handle_style += nexacro.__getTextAreaHTMLStyle_AbsoluteTransparent();
				var bRtl = this._isRtl();

				if (!this.enable) {
					handle_style += nexacro.__getHTMLStyle_Enable(this.enable, this._disabled_color);
				}
				if (this.imemode) {
					handle_style += nexacro.__getHTMLStyle_ImeMode(this.imemode);
				}
				if (this.padding) {
					handle_style += nexacro.__getHTMLStyle_PaddingObject(this.padding, bRtl);
				}
				if (this.textAlign) {
					handle_style += nexacro.__getHTMLStyle_textAlign(this.textAlign, bRtl);
				}

				var attr_str = nexacro.__getHTMLAttr_Enable(this.enable) + 
					nexacro.__getHTMLAttr_Wrap(this.wordWrap || this._wordwrap_info) + 
					nexacro.__getHTMLAttr_ReadOnly(this.readonly);
				if (this.maxlength > 0 && this._use_html_maxlength) {
					attr_str += nexacro.__getHTMLAttr_MaxLength(this.maxlength);
				}
				var str = nexacro.__getDOMAccessibilityStr_Labelfor(this.name, this.value);
				str += "<textarea id='" + this.name + "' class='nexatextarea' ";
				str += (handle_style) ? (" style='" + handle_style + "'") : "";
				if (nexacro._enableaccessibility) {
					var parent_elem = this.parent_elem;
					str += nexacro.__getDOMAccessibilityStr_LabelBy(parent_elem.name);
					if (nexacro._accessibilitytype == 4) {
						str += nexacro.__getDOMAccessibilityStr_Role(parent_elem.accessibilityrole);
					}
				}
				str += attr_str ? (" " + attr_str) + ">" : ">";
				if (this.value) {
					str += nexacro._encodeXml(this.value);
				}
				else if (this.displaynulltext) {
					str += nexacro._encodeXml(this.displaynulltext);
				}
				else {
					str += "";
				}

				str += "</textarea>";

				return str;
			}

			return "";
		};

		delete _pTextAreaElement;
	}

	if (nexacro.InputElement) {
		var _pInputElement = nexacro.InputElement.prototype;
		_pInputElement.setElementAccessibilityRole = function (role) {
			var accrole = nexacro._roleList[role];
			var input_handle = this.handle;
			if (input_handle) {
				nexacro.__setDOMAccessibility_Role(input_handle, accrole);
			}
		};

		_pInputElement.setElementAccessibilityFlagReadOnly = function (readonly) {
			{

				this.accessibility_flag_readonly = readonly;
				var handle = this.handle;
				if (handle) {
					nexacro.__setDOMAccessibility_FlagReadOnly(handle, readonly);
				}
			}
		};
		_pInputElement._setElementInputRole = function () {
		};

		if (nexacro._Browser == "IE" && nexacro._BrowserVersion == 8) {
			_pInputElement._wantAccessibilityAdditionalLabel = function () {
				var role = this.parent_elem.accessibilityrole;

				switch (role) {
					case "document":
					case "spinbutton":
						return false;
					default:
						return true;
				}
			};
		}
		else if (nexacro._Browser == "Chrome" || nexacro._Browser == "Gecko" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
			_pInputElement._wantAccessibilityAdditionalLabel = function () {
				return true;
			};
		}

		if (nexacro._Browser == "MobileSafari") {
			_pInputElement.setElementAccessibilityLabel = function (label) {
				var handle = this.handle;
				if (handle && this.accessibilitylabel != label) {
					this.accessibilitylabel = label;
					nexacro.__setDOMAccessibility_Label(handle, label);
				}
			};
		}

		_pInputElement._setAccessibilityLabel = function (label) {
			var handle = this.handle;
			nexacro.__setDOMAccessibility_Label(handle, label);
		};

		_pInputElement.on_sys_focus_process = function (evt) {
			var input_handle = (evt.target || evt.srcElement);
			var pThis = input_handle._linked_element;

			if (pThis._accept_focus_process === false) {
				pThis._accept_focus_process = true;
				return;
			}

			if ((nexacro._Browser == "IE" && nexacro._BrowserVersion == 8) || (nexacro._Browser == "Edge" && nexacro._BrowserType == "Edge")) {
				if (pThis._force_focus) {
					pThis._force_focus = false;
					return;
				}
			}

			var _parent = pThis.parent;
			if (_parent) {
				if (pThis._need_reset_update_value) {
					pThis.on_reset_update_value(true);
				}

				var comp = _parent.linkedcontrol;
				if (comp) {
					var _win = comp._getWindow();

					var old_focused_comp;
					var cur_focus_paths, focuspath_index;

					if (nexacro._enableaccessibility) {
						if (nexacro._isDesktop()) {
							if (_win && _win._is_active_window) {
								cur_focus_paths = _win.getCurrentFocusPaths();
								focuspath_index = cur_focus_paths ? nexacro._indexOf(cur_focus_paths, comp._getRootComponent(comp)) : -1;

								if (focuspath_index == -1) {
									old_focused_comp = cur_focus_paths ? cur_focus_paths[cur_focus_paths.length - 1] : null;
									if (old_focused_comp) {
										if (pThis._use_event_beforeinput) {
											pThis._skip_sys_keyinput = true;
										}

										if (nexacro._Browser == "Chrome" || nexacro._Browser == "Opera" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit") || nexacro._OS == "iOS") {
											pThis.setElementValue(comp.value, pThis._is_invalid_value);
										}
										old_focused_comp._apply_setfocus();
										return;
									}
								}
							}
						}
					}
					else {
						if (_win && _win._is_active_window) {
							cur_focus_paths = _win.getCurrentFocusPaths();
							focuspath_index = cur_focus_paths ? nexacro._indexOf(cur_focus_paths, comp._getRootComponent(comp)) : -1;

							if (focuspath_index == -1) {
								old_focused_comp = cur_focus_paths ? cur_focus_paths[cur_focus_paths.length - 1] : null;
								if (old_focused_comp) {
									if (pThis._use_event_beforeinput) {
										pThis._skip_sys_keyinput = true;
									}

									if (nexacro._Browser == "Chrome" || nexacro._Browser == "Opera" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit") || nexacro._OS == "iOS") {
										pThis.setElementValue(comp.value, pThis._is_invalid_value);
									}
									old_focused_comp._apply_setfocus();
									return;
								}
							}
						}
					}
				}
			}

			pThis._is_sys_focused = true;

			var _doc = pThis._getRootWindowHandle();
			if (pThis.autoselect && pThis.inputtype != "date") {
				pThis.__prevent_sys_lbuttonup = true;
				if (nexacro._OS == "iOS") {
					nexacro.__setDOMNode_SetSelect(_doc, input_handle, 0, pThis._getInputValue().length);
				}
				else {
					nexacro.__setDOMNode_Select(_doc, input_handle);
				}
			}
			else if (pThis._last_selection_range) {
				var sel = pThis._last_selection_range;

				if (nexacro._enableaccessibility) {
					if (nexacro._accessibilitytype != 5) {
						nexacro.__setDOMNode_SetSelect(_doc, input_handle, sel[0], sel[1]);
					}
				}
				else {
					nexacro.__setDOMNode_SetSelect(_doc, input_handle, sel[0], sel[1]);
				}
			}

			if (pThis.value == null) {
				pThis._zerolength_value = undefined;
			}
			else {
				pThis._zerolength_value = "";
			}

			var pos = pThis.getElementCaretPos();
			pThis._composer.setStatus(nexacro._CompositionState.NONE, pos.begin);

			return true;
		};

		delete _pInputElement;
	}

	if (nexacro._ContainerElement) {
		var _pContainerElement = nexacro._ContainerElement.prototype;

		var _bind_container_scroll_handler_after = function (elem, hpos, vpos) {
			var control_elem, linked_control;
			if (nexacro._accessibilitytype == 5) {
				control_elem = elem.parent;
				if (control_elem) {
					control_elem.scroll_top = vpos;
					control_elem.scroll_left = hpos;
					linked_control = control_elem.linkedcontrol;
					if (linked_control) {
						linked_control._setHscrollPos(hpos);
						linked_control._setVscrollPos(vpos);
					}
				}
			}
			else if (nexacro._accessibilitytype == 4) {
				control_elem = elem.parent;
				if (control_elem) {
					linked_control = control_elem.linkedcontrol;
					if (linked_control) {
						linked_control._scrollTo(hpos, vpos, true, false, undefined, "slide");
					}
				}
			}
		};

		_pContainerElement.create = function (win) {
			var owner_elem = this.parent_elem;
			if (owner_elem && owner_elem.handle && !this.handle) {
				this.owner_elem = owner_elem;
				var _doc = win ? win._doc : owner_elem._getRootWindowHandle();
				var handle = _doc.createElement("div");
				var dest_handle = null;
				this.name = owner_elem.name + ":container" + this.type;
				handle._linked_element = this;
				this.handle = handle;

				nexacro.__setDOMNode_ClassName(handle, this._getElementNexaClassName("nexacontainer"));
				nexacro.__setDOMNode_Id(handle, "", "nexacontainer");

				nexacro._AccessibilityUtil.supportMobileApplicationAccessibility(handle);

				this.createInnerContainer(_doc);
				dest_handle = this.dest_handle;

				var handle_style = handle.style;
				if (this.left || this.top) {
					nexacro.__setDOMStyle_Pos(handle_style, this.left, this.top);
				}
				if (this.width && this.height) {
					nexacro.__setDOMStyle_Size(handle_style, this.width, this.height);
				}

				if (this._use_translate_scroll) {
					var scroll_maxwidth = this._scroll_maxwidth || this.parent._scroll_maxwidth;
					var scroll_maxheight = this._scroll_maxheight || this.parent._scroll_maxheight;
					if (scroll_maxwidth && scroll_maxheight) {
						nexacro.__setDOMStyle_Size(dest_handle.style, scroll_maxwidth, scroll_maxheight);
					}

					if (this._scroll_left != 0 || this._scroll_top != 0) {
						nexacro.__setDOMStyle_Translate(dest_handle, -this._scroll_left, -this._scroll_top);
					}
				}
				else {
					if (nexacro._OS == "Android" || nexacro._Browser == "MobileSafari") {
						if (nexacro._enableaccessibility && (nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && !this._use_translate_scroll) {
							if (!(owner_elem instanceof nexacro.GridScrollableControlElement || owner_elem instanceof nexacro.GridBandControlElement || owner_elem instanceof nexacro.GridRowControlElement)) {
								nexacro.__setDOMStyle_Overflow(handle_style, "scroll");
								nexacro.__setDOMStyle_Display(handle_style, "block");
							}
						}
					}

					if (this._scroll_left) {
						nexacro.__setDOMNode_HScrollPos(handle, this._scroll_left);
					}
					if (this._scroll_top) {
						nexacro.__setDOMNode_VScrollPos(handle, this._scroll_top);
					}
				}

				nexacro.__appendDOMNode(owner_elem.dest_handle, handle);

				this._syshandler_onscroll_forward = _bind_container_scroll_handler(this);
				nexacro._observeSysEvent(handle, "scroll", "onscroll", this._syshandler_onscroll_forward);
			}
		};

		_pContainerElement.createCommandStart = function () {
			var owner_elem = this.parent_elem;
			if (owner_elem) {
				this.owner_elem = owner_elem;
				this.name = owner_elem.name + ":container" + this.type;
				var str = "<div class='nexacontainer' id='" + this.name + "' ";
				var style_str = this._getCommonStyleStr();

				str += " style='" + style_str;
				if (nexacro._OS == "Android" || nexacro._Browser == "MobileSafari") {
					if (nexacro._enableaccessibility && (nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && !this._use_translate_scroll) {
						if (!(owner_elem instanceof nexacro.GridScrollableControlElement || owner_elem instanceof nexacro.GridBandControlElement || owner_elem instanceof nexacro.GridRowControlElement)) {
							str += "overflow:scroll;display:block;";
						}
					}
				}

				str += "'>";
				if (this._use_translate_scroll || this._use_onscroll_inner) {
					str += "<div class='nexainnercontainer' style='width : " + (this._scroll_maxwidth ? this._scroll_maxwidth : this.width) + "px; height : " + (this._scroll_maxheight ? this._scroll_maxheight : this.height) + "px;'>";
				}

				return str;
			}
			return "";
		};

		delete _pContainerElement;
	}


	nexacro.__setDOMAccessibility_Disabled = function (node) {
		node.setAttribute("role", this._roleList.noread);
		node.setAttribute("aria-label", " ");
		node.setAttribute("aria-description", "");
	};
	nexacro.__getDOMAccessibilityStr_Disabled = function () {
		return "role='document' aria-label=' ' aria-description='' aria-labelledby='accessibility_notify_0'";
	};

	nexacro.__setDOMAccessibility_Role = function (node, role) {
		if (role) {
			node.setAttribute("role", role);
		}
		else {
			node.removeAttribute("role");
		}
	};
	nexacro.__getDOMAccessibilityStr_Role = function (role) {
		return "role='" + (role ? role : "") + "'";
	};

	nexacro.__setDOMAccessibility_Label = function (node, label) {
		if (nexacro._accessibilitytype == 5) {
			if (label) {
				label = label.toString().trim();
			}

			node.setAttribute("aria-label", (label ? label : ""));
		}
		else {
			node.setAttribute("aria-label", (label ? label : " "));
		}
	};
	nexacro.__getDOMAccessibilityStr_Label = function (label) {
		if (label) {
			label = label.toString().replace(/[\'\"]/g, "");
		}

		if (nexacro._accessibilitytype == 5) {
			if (label) {
				label = label.trim();
			}

			return " aria-label='" + (label ? label : "") + "'";
		}
		else {
			return " aria-label='" + (label ? label : " ") + "'";
		}
	};

	nexacro.__setDOMAccessibility_DescLevel = function (node, label) {
		node.setAttribute("aria-label", " ");
	};
	nexacro.__getDOMAccessibilityStr_DescLevel = function (label) {
		return " aria-label=' '";
	};
	nexacro.__setDOMAccessibility_LabelBy = function (node, id) {
		node.setAttribute("aria-labelledby", (id ? id : "accessibility_notify_0"));
	};
	nexacro.__getDOMAccessibilityStr_LabelBy = function (id) {
		return " aria-labelledby='" + (id ? id : "accessibility_notify_0") + "'";
	};
	nexacro.__setDOMAccessibility_Description = function (node, desc) {
		node.setAttribute("aria-description", desc);
	};
	nexacro.__getDOMAccessibilityStr_Description = function (desc) {
		return " aria-description='" + (desc ? desc : "") + "'";
	};

	nexacro.__setDOMAccessibility_DescriptionBy = function (node, id) {
		if (id) {
			node.setAttribute("aria-describedby", id);
		}
	};
	nexacro.__getDOMAccessibilityStr_DescriptionBy = function (id) {
		return id ? (" aria-describedby='" + id + "'") : "";
	};


	nexacro.__setDOMAccessibility_StatNormal = function (node, normal) {
	};

	nexacro.__setDOMAccessibility_StatDisabled = function (node, disable) {
		node.setAttribute("aria-disabled", (disable ? "true" : "false"));
	};
	nexacro.__getDOMAccessibilityStr_StatDisabled = function (disable) {
		return " aria-disabled='" + (disable ? "true" : "false") + "'";
	};

	nexacro.__setDOMAccessibility_StatHidden = function (node, hidden) {
		if (hidden) {
			node.setAttribute("aria-hidden", "true");
		}
		else {
			node.removeAttribute("aria-hidden");
		}
	};
	nexacro.__getDOMAccessibilityStr_StatHidden = function (hidden) {
		return hidden ? " aria-hidden='true'" : "";
	};
	nexacro.__setDOMAccessibility_StatChecked = function (node, check) {
		node.setAttribute("aria-checked", check);
	};
	nexacro.__getDOMAccessibilityStr_StatChecked = function (check) {
		return " aria-checked='" + check + "'";
	};

	nexacro.__setDOMAccessibility_StatPressed = function (node, press) {
		node.setAttribute("aria-pressed", press);
	};
	nexacro.__getDOMAccessibilityStr_StatPressed = function (press) {
		return " aria-pressed='" + press + "'";
	};

	nexacro.__setDOMAccessibility_StatSelected = function (node, select) {
		node.setAttribute("aria-selected", select);
	};
	nexacro.__getDOMAccessibilityStr_StatSelected = function (select) {
		return " aria-selected='" + select + "'";
	};

	nexacro.__setDOMAccessibility_StatExpanded = function (node, expanded) {
		node.setAttribute("aria-expanded", expanded);
	};
	nexacro.__getDOMAccessibilityStr_StatExpanded = function (expanded) {
		return " aria-expanded='" + expanded + "'";
	};

	nexacro.__setDOMAccessibility_StatAutoComplete = function (node, autocomplete) {
		node.setAttribute("aria-autocomplete", autocomplete);
	};
	nexacro.__getDOMAccessibilityStr_StatAutoComplete = function (autocomplete) {
		return " aria-autocomplete='" + autocomplete + "'";
	};

	nexacro.__setDOMAccessibility_StatHasPopup = function (node, haspopup) {
		node.setAttribute("aria-haspopup", haspopup);
	};
	nexacro.__getDOMAccessibilityStr_StatHasPopup = function (haspopup) {
		return " aria-haspopup='" + haspopup + "'";
	};

	nexacro.__setDOMAccessibility_FlagFocusable = function (node, focus) {
	};
	nexacro.__getDOMAccessibilityStr_FlagFocusable = function (focus) {
		return "";
	};

	nexacro.__setDOMAccessibility_FlagReadOnly = function (node, readonly) {
		node.setAttribute("aria-readonly", readonly);
	};
	nexacro.__getDOMAccessibilityStr_FlagReadOnly = function (readonly) {
		return " aria-readonly='" + readonly + "'";
	};

	nexacro.__setDOMAccessibility_FlagPassword = function (node, password) {
	};
	nexacro.__getDOMAccessibilityStr_FlagPassword = function (password) {
		return "";
	};

	nexacro.__setDOMAccessibility_FlagMultiLine = function (node, multiline) {
		node.setAttribute("aria-multiline", multiline);
	};
	nexacro.__getDOMAccessibilityStr_FlagMultiLine = function (node, multiline) {
		return " aria-multiline='" + multiline + "'";
	};

	nexacro.__setDOMAccessibility_FlagSelectable = function (node, selectable) {
		node.setAttribute("aria-selected", selectable);
	};
	nexacro.__getDOMAccessibilityStr_FlagSelectable = function (selectable) {
		return " aria-selected" + selectable + "'";
	};

	nexacro.__setDOMAccessibility_FlagMultiSelectable = function (node, multiselectable) {
		node.setAttribute("aria-multiselectable", multiselectable);
	};
	nexacro.__getDOMAccessibilityStr_FlagMultiSelectable = function (multiselectable) {
		return " aria-multiselectable='" + multiselectable + "'";
	};

	nexacro.__setDOMAccessibility_FlagDefaultButton = function (node, button) {
	};
	nexacro.__getDOMAccessibilityStr_FlagDefaultButton = function (button) {
		return "";
	};


	nexacro.__setDOMAccessibility_InfoCount = function (node, count) {
		node.setAttribute("aria-setsize", count);
	};
	nexacro.__getDOMAccessibilityStr_InfoCount = function (count) {
		return " aria-setsize='" + count + "'";
	};

	nexacro.__setDOMAccessibility_InfoIndex = function (node, index) {
		node.setAttribute("aria-posinset", index);
	};
	nexacro.__getDOMAccessibilityStr_InfoIndex = function (index) {
		return " aria-posinset='" + index + "'";
	};

	nexacro.__setDOMAccessibility_InfoValueMax = function (node, maxvalue) {
		node.setAttribute("aria-valuemax", maxvalue);
	};
	nexacro.__getDOMAccessibilityStr_InfoValueMax = function (maxvalue) {
		return " aria-valuemax='" + maxvalue + "'";
	};

	nexacro.__setDOMAccessibility_InfoValueMin = function (node, minvalue) {
		node.setAttribute("aria-valuemin", minvalue);
	};
	nexacro.__getDOMAccessibilityStr_InfoValueMin = function (minvalue) {
		return " aria-valuemin='" + minvalue + "'";
	};

	nexacro.__setDOMAccessibility_InfoValueCur = function (node, value) {
		node.setAttribute("aria-valuenow", value);
	};
	nexacro.__getDOMAccessibilityStr_InfoValueCur = function (value) {
		return " aria-valuenow='" + value + "'";
	};

	nexacro.__setDOMAccessibility_InfoValueText = function (node, text) {
		node.setAttribute("aria-valuetext", text);
	};
	nexacro.__getDOMAccessibilityStr_InfoValueText = function (text) {
		return " aria-valuetext='" + text + "'";
	};

	nexacro.__setDOMAccessibility_InfoLevel = function (node, level) {
		if (level) {
			node.setAttribute("aria-level", level);
		}
	};

	nexacro.__createLabelElementHandle = function (_doc, name, value) {
		var handle = _doc.createElement("label");
		var handle_style = handle.style;
		handle.setAttribute("for", name);
		handle.textContent = value;
		handle.id = name + ":label";
		nexacro.__setDOMStyle_Absolute(handle_style);
		nexacro.__setDOMStyle_Size(handle_style, 0, 0);
		nexacro.__setDOMAccessibility_StatHidden(handle, true);
		return handle;
	};

	nexacro.__getDOMAccessibilityStr_Labelfor = function (name, value) {
		return "<label for= '" + name + "' style='position:absolute;width:0px;overflow:hidden;' aria-hidden=true>" + value + "</label>";
	};


	nexacro.__setDOMAccessibility_Selection = function (node, select) {
	};

	nexacro.__setDOMAccessibility_HotKey = function (node, select) {
	};

	nexacro.__setDOMAccessibility_ActiveDescendant = function (node, id) {
		node.setAttribute("aria-activedescendant", id);
	};

	nexacro.__setDOMAccessibility_TabStop = function (node, id) {
	};

	nexacro.__setDOMAccessibility_Live = function (node, v) {
		if (v) {
			node.setAttribute("aria-relevant", "text");
			node.setAttribute("aria-live", "assertive");
			node.setAttribute("aria-atomic", "false");
		}
		else {
			node.setAttribute("aria-relevant", "");
			node.setAttribute("aria-live", "");
			node.setAttribute("aria-atomic", "");
		}
	};

	nexacro.__setDOMNode_Alt = function (node, text) {
		if (!text) {
			text = "";
		}

		if (!node.alt || node.alt != text) {
			return node.alt = text;
		}
	};

	nexacro.__getDOMNode_Alt = function (text) {
		return " alt ='" + (text ? text : "") + "'";
	};

	nexacro.__setDOMAccessibility_Value = function (node, value, elem, bfocus) {
		nexacro._notifyAccessibility(node, value, "valuechange", elem, bfocus);
	};



	nexacro._AccessibilityNotifyManager = function () {
		this._nodes = [];
		this._index = -1;
		this._count = 0;
	};

	var _pAccessibilityNotifyManager = nexacro._createPrototype(Object, nexacro._AccessibilityNotifyManager);
	nexacro._AccessibilityNotifyManager.prototype = _pAccessibilityNotifyManager;

	if (nexacro._Browser == "Gecko") {
		_pAccessibilityNotifyManager._getNotifyNode = function () {
			if (this._index == -1) {
				var _doc = document;
				var node = _doc.createElement("div");
				node.id = "accessibility_notify_" + this._count;

				var node_style = node.style;
				nexacro.__setDOMStyle_Absolute(node_style);
				nexacro.__setDOMStyle_Size(node_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node, -1);
				_doc.body.appendChild(node);


				this._nodes.push(node);

				this._count = this._count + 1;

				var node2 = _doc.createElement("div");
				node2.id = "accessibility_notify_" + this._count;

				var node2_style = node2.style;
				nexacro.__setDOMStyle_Absolute(node2_style);
				nexacro.__setDOMStyle_Size(node2_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node2, -1);

				_doc.body.appendChild(node2);
				this._nodes.push(node2);
				this._index = 0;
			}

			return this._nodes;
		};

		_pAccessibilityNotifyManager._notify = function (handle, label, notifyevent, elem, bfocus, benable) {
			var nodes = this._getNotifyNode();
			if (nodes) {
				var node;
				if (notifyevent == "notify") {
					node = nodes[this._index];
					node.innerText = label;
					nexacro.__setDOMNode_Title(node, label);

					if (benable === false) {
						nexacro.__setDOMAccessibility_StatDisabled(node, true);
					}
					else {
						nexacro.__setDOMAccessibility_StatDisabled(node, false);
					}

					node.focus();
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else {
					node = nodes[0];
					node.innerText = label;
					nexacro.__setDOMNode_Title(node, label);
				}
			}
			this._index = this._index ^ 1;
		};
	}
	else if (nexacro._Browser == "IE" && nexacro._BrowserVersion == 11) {
		_pAccessibilityNotifyManager._getNotifyNode = function () {
			if (this._index == -1) {
				var _doc = document;
				var node = _doc.createElement("div");
				node.id = "accessibility_notify_" + this._count;

				var node_style = node.style;
				nexacro.__setDOMStyle_Absolute(node_style);
				nexacro.__setDOMStyle_Size(node_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node, -1);
				nexacro.__setDOMAccessibility_Role(node, "option");
				_doc.body.appendChild(node);


				this._nodes.push(node);

				this._count = this._count + 1;

				var node2 = _doc.createElement("div");
				node2.id = "accessibility_notify_" + this._count;

				var node2_style = node2.style;
				nexacro.__setDOMStyle_Absolute(node2_style);
				nexacro.__setDOMStyle_Size(node2_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node2, -1);

				_doc.body.appendChild(node2);
				nexacro.__setDOMAccessibility_Role(node2, "option");
				this._nodes.push(node2);
				this._index = 0;
			}

			return this._nodes;
		};

		_pAccessibilityNotifyManager._notify = function (handle, label, notifyevent, elem, bfocus, benable) {
			var nodes = this._getNotifyNode();
			if (nodes) {
				var node = nodes[this._index];
				if (notifyevent == "notify") {
					node.innerText = label;
					if (elem) {
						if (elem.accessibilityrole) {
							nexacro.__setDOMAccessibility_Role(node, elem.accessibilityrole);
						}
						else {
							nexacro.__setDOMAccessibility_Role(node, "");
						}
						nexacro.__setDOMStyle_Pos(node.style, elem.left, elem.top);
					}
					else {
						nexacro.__setDOMAccessibility_Role(node, handle ? handle.getAttribute('role') : "");
					}

					if (benable === false) {
						nexacro.__setDOMAccessibility_StatDisabled(node, true);
					}
					else {
						nexacro.__setDOMAccessibility_StatDisabled(node, false);
					}

					node.focus();
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else if (notifyevent == "valuechange") {
					node.innerText = "";
					if (elem && elem.input_handle) {
					}
					if (bfocus) {
						node.focus();
					}
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else if (notifyevent == "daychange") {
					node.innerText = label;
					node.focus();
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else if (notifyevent == "wholeread") {
					node.innerText = label;
					nexacro.__setDOMAccessibility_Role(node, "option");
					node.focus();
				}
				else {
					node.innerText = label;
				}
			}
			this._index = this._index ^ 1;
		};
	}
	else if ((nexacro._Browser == "IE" && nexacro._BrowserVersion >= 9) || (nexacro._Browser == "Edge" && nexacro._BrowserType == "Edge")) {
		_pAccessibilityNotifyManager._getNotifyNode = function () {
			if (this._index == -1) {
				var _doc = document;
				var node = _doc.createElement("div");
				node.id = "accessibility_notify_" + this._count;

				var node_style = node.style;
				nexacro.__setDOMStyle_Absolute(node_style);
				nexacro.__setDOMStyle_Size(node_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node, -1);
				nexacro.__setDOMAccessibility_Role(node, "document");
				_doc.body.appendChild(node);


				this._nodes.push(node);

				this._count = this._count + 1;

				var node2 = _doc.createElement("div");
				node2.id = "accessibility_notify_" + this._count;

				var node2_style = node2.style;
				nexacro.__setDOMStyle_Absolute(node2_style);
				nexacro.__setDOMStyle_Size(node2_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node2, -1);

				_doc.body.appendChild(node2);
				nexacro.__setDOMAccessibility_Role(node2, "document");
				this._nodes.push(node2);
				this._index = 0;
			}

			return this._nodes;
		};

		_pAccessibilityNotifyManager._notify = function (handle, label, notifyevent, elem, bfocus, benable) {
			var nodes = this._getNotifyNode();
			if (nodes) {
				var node;
				if (notifyevent == "notify") {
					node = nodes[this._index];
					node.innerText = label;

					if (elem) {
						if (elem.accessibilityrole) {
							nexacro.__setDOMAccessibility_Role(node, elem.accessibilityrole);
						}
						else {
							nexacro.__setDOMAccessibility_Role(node, "");
						}
						nexacro.__setDOMStyle_Pos(node.style, elem.left, elem.top);
					}
					else {
						nexacro.__setDOMAccessibility_Role(node, handle ? handle.getAttribute('role') : "");
					}

					if (benable === false) {
						nexacro.__setDOMAccessibility_StatDisabled(node, true);
					}
					else {
						nexacro.__setDOMAccessibility_StatDisabled(node, false);
					}

					node.focus();
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else if (notifyevent == "valuechange") {
					node = nodes[0];
					node.innerText = "";

					if (elem && elem.input_handle) {
					}
					if (bfocus) {
						node.focus();
					}
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else if (notifyevent == "daychange") {
					node = nodes[0];
					node.innerText = label;
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else if (notifyevent == "wholeread") {
					node = nodes[0];
					node.innerText = label;
					nexacro.__setDOMAccessibility_Role(node, "document");
					node.focus();
				}
				else {
					node = nodes[0];
					node.innerText = label;
				}
			}
			this._index = this._index ^ 1;
		};
	}
	else if (nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) {
		_pAccessibilityNotifyManager._getNotifyNode = function () {
			if (this._index == -1) {
				var _doc = document;
				var _container = _doc.createElement("div");
				var node_style = _container.style;
				nexacro.__setDOMStyle_Absolute(node_style);
				nexacro.__setDOMStyle_Size(node_style, 0, 0);
				nexacro.__setDOMAccessibility_StatHidden(_container, true);
				_doc.body.appendChild(_container);

				var node = _doc.createElement("div");
				node.id = "accessibility_notify_" + this._count;

				node_style = node.style;
				nexacro.__setDOMStyle_Absolute(node_style);
				nexacro.__setDOMStyle_Size(node_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node, -1);
				nexacro.__setDOMAccessibility_Role(node, "document");
				_container.appendChild(node);


				this._nodes.push(node);

				this._count = this._count + 1;

				var node2 = _doc.createElement("div");
				node2.id = "accessibility_notify_" + this._count;

				var node2_style = node2.style;
				nexacro.__setDOMStyle_Absolute(node2_style);
				nexacro.__setDOMStyle_Size(node2_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node2, -1);

				_container.appendChild(node2);
				nexacro.__setDOMAccessibility_Role(node2, "document");
				this._nodes.push(node2);
				this._index = 0;
			}

			return this._nodes;
		};

		_pAccessibilityNotifyManager._notify = function (handle, label, notifyevent, elem, bfocus, benable) {
			var nodes = this._getNotifyNode();
			if (nodes) {
				var node;
				if (notifyevent == "notify") {
					node = nodes[this._index];

					if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
						node.innerText = "";
						nexacro.__setDOMAccessibility_Label(node, label);
					}
					else {
						node.innerText = label;
					}

					if (elem) {
						if (elem.accessibilityrole) {
							nexacro.__setDOMAccessibility_Role(node, elem.accessibilityrole);
						}
						else {
							nexacro.__setDOMAccessibility_Role(node, "");
						}
						nexacro.__setDOMStyle_Pos(node.style, elem.left, elem.top);
					}
					else {
						nexacro.__setDOMAccessibility_Role(node, handle ? handle.getAttribute('role') : "");
					}

					if (benable === false) {
						nexacro.__setDOMAccessibility_StatDisabled(node, true);
					}
					else {
						nexacro.__setDOMAccessibility_StatDisabled(node, false);
					}

					node.focus();
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else {
					node = nodes[this._index];

					if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
						nexacro.__setDOMAccessibility_Label(node, "");
					}

					if (notifyevent == "valuechange") {
						if (label == "#textarea:msg_accessibility_emptyline") {
							label = nexacro._getErrorMessge("msg_accessibility_emptyline");
						}

						node.innerText = label;
						nexacro.__setDOMAccessibility_Role(node, "listitem");
						nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);

						if (elem && elem.input_handle) {
						}
						if (bfocus) {
							node.focus();
						}
						nexacro.__setDOMStyle_Pos(node.style, 0, 0);
					}
					else if (notifyevent == "daychange") {
						if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
							node.innerText = "";
							nexacro.__setDOMAccessibility_Label(node, label);
						}
						else {
							node.innerText = label;
						}
						nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);
						nexacro.__setDOMStyle_Pos(node.style, 0, 0);
					}
					else if (notifyevent == "wholeread") {
						if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
							node.innerText = "";
							nexacro.__setDOMAccessibility_Label(node, label);
						}
						else {
							node.innerText = label;
						}
						nexacro.__setDOMAccessibility_Role(node, "document");
						node.focus();
					}
					else {
						node.innerText = label;
					}
				}
			}
			this._index = this._index ^ 1;
		};
	}
	else if (true) {
		_pAccessibilityNotifyManager._getNotifyNode = function () {
			if (this._index == -1) {
				var _doc = document;
				var node = _doc.createElement("div");
				node.id = "accessibility_notify_" + this._count;

				var node_style = node.style;
				nexacro.__setDOMStyle_Absolute(node_style);
				nexacro.__setDOMStyle_Size(node_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node, -1);
				nexacro.__setDOMAccessibility_Role(node, "document");
				_doc.body.appendChild(node);


				this._nodes.push(node);

				this._count = this._count + 1;

				var node2 = _doc.createElement("div");
				node2.id = "accessibility_notify_" + this._count;

				var node2_style = node2.style;
				nexacro.__setDOMStyle_Absolute(node2_style);
				nexacro.__setDOMStyle_Size(node2_style, 0, 0);
				nexacro.__setDOMNode_TabIndex(node2, -1);

				_doc.body.appendChild(node2);
				nexacro.__setDOMAccessibility_Role(node2, "document");
				this._nodes.push(node2);
				this._index = 0;
			}

			return this._nodes;
		};

		_pAccessibilityNotifyManager._notify = function (handle, label, notifyevent, elem, bfocus, benable) {
			var nodes = this._getNotifyNode();
			if (nodes) {
				var node;
				if (notifyevent == "notify") {
					node = nodes[this._index];

					if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
						node.innerText = "";
						nexacro.__setDOMAccessibility_Label(node, label);
					}
					else {
						node.innerText = label;
					}

					if (elem) {
						if (elem.accessibilityrole) {
							nexacro.__setDOMAccessibility_Role(node, elem.accessibilityrole);
						}
						else {
							nexacro.__setDOMAccessibility_Role(node, "");
						}
						nexacro.__setDOMStyle_Pos(node.style, elem.left, elem.top);
					}
					else {
						nexacro.__setDOMAccessibility_Role(node, handle ? handle.getAttribute('role') : "");
					}

					if (benable === false) {
						nexacro.__setDOMAccessibility_StatDisabled(node, true);
					}
					else {
						nexacro.__setDOMAccessibility_StatDisabled(node, false);
					}

					node.focus();
					nexacro.__setDOMStyle_Pos(node.style, 0, 0);
				}
				else {
					node = nodes[this._index];

					if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
						nexacro.__setDOMAccessibility_Label(node, "");
					}

					if (notifyevent == "valuechange") {
						if (label == "#textarea:msg_accessibility_emptyline") {
							label = nexacro._getErrorMessge("msg_accessibility_emptyline");
						}

						node.innerText = label;
						nexacro.__setDOMAccessibility_Role(node, "listitem");
						nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);

						if (elem && elem.input_handle) {
						}
						if (bfocus) {
							node.focus();
						}
						nexacro.__setDOMStyle_Pos(node.style, 0, 0);
					}
					else if (notifyevent == "daychange") {
						if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
							node.innerText = "";
							nexacro.__setDOMAccessibility_Label(node, label);
						}
						else {
							node.innerText = label;
						}
						nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);
						nexacro.__setDOMStyle_Pos(node.style, 0, 0);
					}
					else if (notifyevent == "wholeread") {
						if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
							node.innerText = "";
							nexacro.__setDOMAccessibility_Label(node, label);
						}
						else {
							node.innerText = label;
						}
						nexacro.__setDOMAccessibility_Role(node, "document");
						node.focus();
					}
					else {
						node.innerText = label;
					}
				}
			}
			this._index = this._index ^ 1;
		};
	}

	nexacro.__notifyAccessibility = function (node, label, notifyevent, elem, bfocus, benable) {
		if (!nexacro._AccessibilityNotifyNode) {
			nexacro._AccessibilityNotifyNode = new nexacro._AccessibilityNotifyManager();
		}
		nexacro._AccessibilityNotifyNode._notify(node, label, notifyevent, elem, bfocus, benable);
	};

	nexacro._notifyAccessibilityValue = function (elem, label, notifyevent) {
		if (!nexacro._AccessibilityNotifyNode) {
			nexacro._AccessibilityNotifyNode = new nexacro._AccessibilityNotifyManager();
		}
		var handle = elem.handle;
		if (handle) {
			nexacro._AccessibilityNotifyNode._notify(handle, label, notifyevent, elem);
		}
	};



	if (nexacro._Browser == "IE" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "Edge")) {
		if (nexacro._OSVersion >= 6.0) {
			nexacro._roleList = 
				{
				"alert" : "alert", 
				"application" : "application", 
				"button" : "button", 
				"calendar" : "textbox", 
				"chart" : "option", 
				"checkbox" : "checkbox", 
				"columnheader" : "gridcell", 
				"combobox" : "combobox", 
				"datepicker" : "option", 
				"dialog" : "dialog", 
				"edit" : "textbox", 
				"fileupload" : "option", 
				"form" : "option", 
				"frame" : "option", 
				"grid" : "option", 
				"gridcell" : "gridcell", 
				"groupbox" : "group", 
				"image" : "img", 
				"listbox" : "listbox", 
				"listboxitem" : "listitem", 
				"menubar" : "menubar", 
				"menu" : "menu", 
				"menuitem" : "menuitem", 
				"none" : "option", 
				"progressbar" : "option", 
				"radio" : "option", 
				"radioitem" : "radio", 
				"rowheader" : "gridcell", 
				"scrollbar" : "scrollbar", 
				"slider" : "slider", 
				"spin" : "textbox", 
				"splitter" : "option", 
				"static" : "option", 
				"statusbar" : "status", 
				"step" : "option", 
				"tab" : "tablist", 
				"tabitem" : "tab", 
				"tabpage" : "tabpanel", 
				"textarea" : "textbox", 
				"textbox" : "textbox", 
				"titlebar" : "region", 
				"toolbar" : "toolbar", 
				"tooltip" : "tooltip", 
				"treegrid" : "tree", 
				"treeitem" : "treeitem", 
				"webbrowser" : "option", 
				"webview" : "option", 
				"link" : "link", 
				"heading" : "option", 
				"noread" : "option"
			};
		}
		else {
			nexacro._roleList = 
				{
				"alert" : "alert", 
				"application" : "application", 
				"button" : "button", 
				"calendar" : "alert", 
				"chart" : "alert", 
				"checkbox" : "checkbox", 
				"columnheader" : "alert", 
				"combobox" : "combobox", 
				"datepicker" : "alert", 
				"dialog" : "dialog", 
				"edit" : "textbox", 
				"fileupload" : "alert", 
				"form" : "alert", 
				"frame" : "alert", 
				"grid" : "alert", 
				"gridcell" : "gridcell", 
				"groupbox" : "group", 
				"image" : "img", 
				"listbox" : "listbox", 
				"listboxitem" : "listitem", 
				"menubar" : "menubar", 
				"menu" : "menu", 
				"menuitem" : "menuitem", 
				"none" : "alert", 
				"progressbar" : "alert", 
				"radio" : "alert", 
				"radioitem" : "radio", 
				"rowheader" : "alert", 
				"scrollbar" : "scrollbar", 
				"slider" : "slider", 
				"spin" : "document", 
				"splitter" : "alert", 
				"static" : "alert", 
				"statusbar" : "status", 
				"step" : "alert", 
				"tab" : "tablist", 
				"tabitem" : "tab", 
				"tabpage" : "tabpanel", 
				"textarea" : "textbox", 
				"textbox" : "textbox", 
				"titlebar" : "region", 
				"toolbar" : "toolbar", 
				"tooltip" : "tooltip", 
				"treegrid" : "tree", 
				"treeitem" : "treeitem", 
				"webbrowser" : "alert", 
				"webview" : "alert", 
				"link" : "link", 
				"heading" : "alert", 
				"noread" : "document"
			};
		}
	}
	else if (nexacro._OS == "Android") {
		nexacro._roleList = 
			{
			"alert" : "alert", 
			"application" : "application", 
			"button" : "button", 
			"calendar" : "textbox", 
			"chart" : "", 
			"checkbox" : "checkbox", 
			"columnheader" : "", 
			"combobox" : "combobox", 
			"datepicker" : "", 
			"dialog" : "dialog", 
			"edit" : "textbox", 
			"fileupload" : "", 
			"form" : "", 
			"frame" : "", 
			"grid" : "", 
			"gridcell" : "gridcell", 
			"groupbox" : "group", 
			"image" : "img", 
			"listbox" : "listbox", 
			"listboxitem" : "option", 
			"menubar" : "menubar", 
			"menu" : "menu", 
			"menuitem" : "menuitem", 
			"none" : "", 
			"progressbar" : "", 
			"radio" : "document", 
			"radioitem" : "radio", 
			"rowheader" : "", 
			"scrollbar" : "scrollbar", 
			"slider" : "slider", 
			"spin" : "spin", 
			"splitter" : "", 
			"static" : "", 
			"statusbar" : "status", 
			"step" : "", 
			"tab" : "tablist", 
			"tabitem" : "tab", 
			"tabpage" : "tabpanel", 
			"textarea" : "textbox", 
			"textbox" : "textbox", 
			"titlebar" : "region", 
			"toolbar" : "toolbar", 
			"tooltip" : "tooltip", 
			"treegrid" : "", 
			"treeitem" : "treeitem", 
			"webbrowser" : "", 
			"webview" : "", 
			"link" : "link", 
			"heading" : "", 
			"noread" : "document"
		};
	}
	else if (nexacro._Browser == "MobileSafari") {
		nexacro._roleList = 
			{
			"alert" : "alert", 
			"application" : "application", 
			"button" : "button", 
			"calendar" : "textbox", 
			"chart" : "", 
			"checkbox" : "checkbox", 
			"columnheader" : "option", 
			"combobox" : "combobox", 
			"datepicker" : "", 
			"dialog" : "dialog", 
			"edit" : "textbox", 
			"fileupload" : "", 
			"form" : "", 
			"frame" : "", 
			"grid" : "option", 
			"gridcell" : "option", 
			"gridedit" : "textbox", 
			"groupbox" : "group", 
			"image" : "img", 
			"listbox" : "listbox", 
			"listboxitem" : "option", 
			"menubar" : "menubar", 
			"menu" : "menu", 
			"menuitem" : "menuitem", 
			"none" : "", 
			"progressbar" : "", 
			"radio" : "", 
			"radioitem" : "radio", 
			"rowheader" : "option", 
			"scrollbar" : "scrollbar", 
			"slider" : "slider", 
			"splitter" : "", 
			"static" : "option", 
			"statusbar" : "status", 
			"step" : "", 
			"tab" : "tablist", 
			"tabitem" : "tab", 
			"tabpage" : "tabpanel", 
			"textarea" : "textbox", 
			"textbox" : "textbox", 
			"titlebar" : "region", 
			"toolbar" : "toolbar", 
			"tooltip" : "tooltip", 
			"treegrid" : "", 
			"treeitem" : "option", 
			"webbrowser" : "", 
			"webview" : "", 
			"link" : "link", 
			"heading" : "", 
			"noread" : ""
		};
	}
	else if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit")) {
		nexacro._roleList = 
			{
			"alert" : "alert", 
			"application" : "application", 
			"button" : "button", 
			"calendar" : "", 
			"chart" : "", 
			"checkbox" : "checkbox", 
			"columnheader" : "", 
			"combobox" : "combobox", 
			"datepicker" : "", 
			"dialog" : "dialog", 
			"fileupload" : "", 
			"form" : "", 
			"frame" : "", 
			"grid" : "", 
			"gridcell" : "gridcell", 
			"groupbox" : "group", 
			"image" : "img", 
			"listbox" : "listbox", 
			"listboxitem" : "listitem", 
			"menubar" : "menubar", 
			"menu" : "menu", 
			"menuitem" : "menuitem", 
			"none" : "", 
			"progressbar" : "document", 
			"radio" : "document", 
			"radioitem" : "radio", 
			"rowheader" : "document", 
			"scrollbar" : "scrollbar", 
			"slider" : "slider", 
			"spin" : "textbox", 
			"splitter" : "", 
			"static" : "", 
			"statusbar" : "status", 
			"step" : "document", 
			"tab" : "tablist", 
			"tabitem" : "tab", 
			"tabpage" : "tabpanel", 
			"textarea" : "document", 
			"textbox" : "textbox", 
			"titlebar" : "region", 
			"toolbar" : "toolbar", 
			"tooltip" : "tooltip", 
			"treegrid" : "tree", 
			"treeitem" : "treeitem", 
			"webbrowser" : "", 
			"webview" : "", 
			"link" : "link", 
			"heading" : "", 
			"noread" : ""
		};
	}
	else if (nexacro._Browser == "Gecko") {
		nexacro._roleList = 
			{
			"alert" : "alert", 
			"application" : "application", 
			"button" : "button", 
			"calendar" : "", 
			"chart" : "", 
			"checkbox" : "checkbox", 
			"columnheader" : "", 
			"combobox" : "combobox", 
			"datepicker" : "", 
			"dialog" : "dialog", 
			"fileupload" : "", 
			"form" : "", 
			"frame" : "", 
			"grid" : "", 
			"gridcell" : "gridcell", 
			"groupbox" : "group", 
			"image" : "img", 
			"listbox" : "listbox", 
			"listboxitem" : "option", 
			"menubar" : "menubar", 
			"menu" : "menu", 
			"menuitem" : "menuitem", 
			"none" : "", 
			"progressbar" : "", 
			"radio" : "document", 
			"radioitem" : "radio", 
			"rowheader" : "", 
			"scrollbar" : "scrollbar", 
			"slider" : "slider", 
			"spin" : "document", 
			"splitter" : "", 
			"static" : "", 
			"statusbar" : "status", 
			"step" : "", 
			"tab" : "tablist", 
			"tabitem" : "tab", 
			"tabpage" : "tabpanel", 
			"textbox" : "textbox", 
			"titlebar" : "region", 
			"toolbar" : "toolbar", 
			"tooltip" : "tooltip", 
			"treegrid" : "treegrid", 
			"treeitem" : "treeitem", 
			"webbrowser" : "", 
			"webview" : "", 
			"link" : "link", 
			"heading" : "", 
			"noread" : "document"
		};
	}
	else {
		nexacro._roleList = 
			{
			"alert" : "alert", 
			"application" : "application", 
			"button" : "button", 
			"calendar" : "document", 
			"chart" : "", 
			"checkbox" : "checkbox", 
			"columnheader" : "", 
			"combobox" : "combobox", 
			"datepicker" : "", 
			"dialog" : "dialog", 
			"fileupload" : "", 
			"form" : "", 
			"frame" : "", 
			"grid" : "", 
			"gridcell" : "gridcell", 
			"groupbox" : "group", 
			"listbox" : "listbox", 
			"listboxitem" : "option", 
			"menubar" : "menubar", 
			"menu" : "menu", 
			"menuitem" : "menuitem", 
			"none" : "", 
			"progressbar" : "", 
			"radio" : "document", 
			"radioitem" : "radio", 
			"rowheader" : "", 
			"scrollbar" : "scrollbar", 
			"slider" : "slider", 
			"spin" : "document", 
			"splitter" : "", 
			"static" : "", 
			"statusbar" : "status", 
			"step" : "", 
			"tab" : "tablist", 
			"tabitem" : "tab", 
			"tabpage" : "tabpanel", 
			"titlebar" : "region", 
			"toolbar" : "toolbar", 
			"tooltip" : "tooltip", 
			"treegrid" : "treegrid", 
			"treeitem" : "treeitem", 
			"webbrowser" : "", 
			"webview" : "", 
			"link" : "link", 
			"heading" : "", 
			"noread" : "document"
		};
	}
}
