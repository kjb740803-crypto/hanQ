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

if (!nexacro._AccessibilityStyles) {
	nexacro._AccessibilityStyles = [];
}

if (!nexacro._GraphicsLib) {
	nexacro._GraphicsLib = {
	};

	nexacro._GraphicsLib._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
	nexacro._GraphicsLib._toString = (Object.prototype.toString);

	nexacro._GraphicsLib._abscissas = [[0.5773502691896257645091488], [0, 0.7745966692414833770358531], [0.3399810435848562648026658, 0.8611363115940525752239465], [0, 0.5384693101056830910363144, 0.9061798459386639927976269], [0.2386191860831969086305017, 0.6612093864662645136613996, 0.9324695142031520278123016], [0, 0.4058451513773971669066064, 0.7415311855993944398638648, 0.9491079123427585245261897], [0.1834346424956498049394761, 0.5255324099163289858177390, 0.7966664774136267395915539, 0.9602898564975362316835609], [0, 0.3242534234038089290385380, 0.6133714327005903973087020, 0.8360311073266357942994298, 0.9681602395076260898355762], [0.1488743389816312108848260, 0.4333953941292471907992659, 0.6794095682990244062343274, 0.8650633666889845107320967, 0.9739065285171717200779640], [0, 0.2695431559523449723315320, 0.5190961292068118159257257, 0.7301520055740493240934163, 0.8870625997680952990751578, 0.9782286581460569928039380], [0.1252334085114689154724414, 0.3678314989981801937526915, 0.5873179542866174472967024, 0.7699026741943046870368938, 0.9041172563704748566784659, 0.9815606342467192506905491], [0, 0.2304583159551347940655281, 0.4484927510364468528779129, 0.6423493394403402206439846, 0.8015780907333099127942065, 0.9175983992229779652065478, 0.9841830547185881494728294], [0.1080549487073436620662447, 0.3191123689278897604356718, 0.5152486363581540919652907, 0.6872929048116854701480198, 0.8272013150697649931897947, 0.9284348836635735173363911, 0.9862838086968123388415973], [0, 0.2011940939974345223006283, 0.3941513470775633698972074, 0.5709721726085388475372267, 0.7244177313601700474161861, 0.8482065834104272162006483, 0.9372733924007059043077589, 0.9879925180204854284895657], [0.0950125098376374401853193, 0.2816035507792589132304605, 0.4580167776572273863424194, 0.6178762444026437484466718, 0.7554044083550030338951012, 0.8656312023878317438804679, 0.9445750230732325760779884, 0.9894009349916499325961542]
	];

	nexacro._GraphicsLib._weights = [[1], [0.8888888888888888888888889, 0.5555555555555555555555556], [0.6521451548625461426269361, 0.3478548451374538573730639], [0.5688888888888888888888889, 0.4786286704993664680412915, 0.2369268850561890875142640], [0.4679139345726910473898703, 0.3607615730481386075698335, 0.1713244923791703450402961], [0.4179591836734693877551020, 0.3818300505051189449503698, 0.2797053914892766679014678, 0.1294849661688696932706114], [0.3626837833783619829651504, 0.3137066458778872873379622, 0.2223810344533744705443560, 0.1012285362903762591525314], [0.3302393550012597631645251, 0.3123470770400028400686304, 0.2606106964029354623187429, 0.1806481606948574040584720, 0.0812743883615744119718922], [0.2955242247147528701738930, 0.2692667193099963550912269, 0.2190863625159820439955349, 0.1494513491505805931457763, 0.0666713443086881375935688], [0.2729250867779006307144835, 0.2628045445102466621806889, 0.2331937645919904799185237, 0.1862902109277342514260976, 0.1255803694649046246346943, 0.0556685671161736664827537], [0.2491470458134027850005624, 0.2334925365383548087608499, 0.2031674267230659217490645, 0.1600783285433462263346525, 0.1069393259953184309602547, 0.0471753363865118271946160], [0.2325515532308739101945895, 0.2262831802628972384120902, 0.2078160475368885023125232, 0.1781459807619457382800467, 0.1388735102197872384636018, 0.0921214998377284479144218, 0.0404840047653158795200216], [0.2152638534631577901958764, 0.2051984637212956039659241, 0.1855383974779378137417166, 0.1572031671581935345696019, 0.1215185706879031846894148, 0.0801580871597602098056333, 0.0351194603317518630318329], [0.2025782419255612728806202, 0.1984314853271115764561183, 0.1861610000155622110268006, 0.1662692058169939335532009, 0.1395706779261543144478048, 0.1071592204671719350118695, 0.0703660474881081247092674, 0.0307532419961172683546284], [0.1894506104550684962853967, 0.1826034150449235888667637, 0.1691565193950025381893121, 0.1495959888165767320815017, 0.1246289712555338720524763, 0.0951585116824927848099251, 0.0622535239386478928628438, 0.0271524594117540948517806]
	];

	nexacro._GraphicsLib._TOLERANCE = 10e-6;
	nexacro._GraphicsLib._EPSILON = 10e-12;
	nexacro._GraphicsLib._KAPPA = 4 *  (Math.sqrt(2) - 1) / 3;


	nexacro._GraphicsLib._fmtPercision = 5;
	nexacro._GraphicsLib._fmtMultiplier = Math.pow(10, 5);



	nexacro._GraphicsLib.isEmpty = function (value) {
		if (value == null) {
			return true;
		}

		if (nexacro._isString(value) || nexacro._isArray(value)) {
			return value.length == 0 ? true : false;
		}
		else if (nexacro._isObject(value)) {
			for (var p in value) {
				if (value.hasOwnProperty(p)) {
					return false;
				}
			}
			return true;
		}

		return false;
	};


	nexacro._GraphicsLib.getUniqueId = function (prefix, separator) {
		if (nexacro._GraphicsLib.isEmpty(prefix)) {
			prefix = "";
		}
		if (nexacro._GraphicsLib.isEmpty(separator)) {
			separator = 45;
		}
		else {
			separator = separator.charCodeAt(0);
		}

		var charcode = nexacro._GraphicsLib._ALPHA_CHAR_CODES, math = Math;
		var seq = 0;
		var seq0;
		var tmpArray = new Array(36);
		var idx = -1;

		while (seq < 8) {
			tmpArray[++idx] = charcode[nexacro._random() *  16 | 0];
			seq++;
		}
		seq = 0;
		while (seq < 3) {
			tmpArray[++idx] = separator;
			seq0 = 0;
			while (seq0 < 4) {
				tmpArray[++idx] = charcode[nexacro._random() *  16 | 0];
				seq0++;
			}
			seq++;
		}
		tmpArray[++idx] = separator;


		var tmpStr = (new Date()).getTime();
		tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
		seq = 0;
		while (seq < 8) {
			tmpArray[++idx] = tmpStr.charCodeAt(seq);
			seq++;
		}
		seq = 0;
		while (seq < 4) {
			tmpArray[++idx] = charcode[nexacro._getCryptoRandomValue(1, 16)];
			seq++;
		}
		return prefix + String.fromCharCode.apply(null, tmpArray);
	};

	if (nexacro._Browser == "Runtime") {
		nexacro._GraphicsLib.getLines = function (nexacroFont, txt, wordwrap, maxWidth) {
			var lines;

			if (wordwrap == "char") {
				var sz;
				var fsz = nexacroFont.size;
				var sizeForOneChar = (sz >= 0 ? nexacro._convertPtToPx(fsz) : Math.abs(fsz));
				if (sizeForOneChar >= maxWidth) {
					return txt.split("");
				}

				sz = nexacro.__getTextSize(txt, nexacroFont, "none");
				if (sz[0] > maxWidth) {
					lines = [];
					var tmpLines = txt.split("\n"), line, lineSize;

					for (var i = 0, len = tmpLines.length; i < len; i++) {
						line = tmpLines[i];
						lineSize = nexacro.__getTextSize(line, nexacroFont, "none");
						if (lineSize[0] > maxWidth) {
							lines = lines.concat(this.getFragmentText(nexacroFont, line, maxWidth));
						}
						else {
							lines.push(line);
						}
					}
				}
				else {
					lines = txt.split("\n");
				}
			}
			else {
				lines = txt.split("\n");
			}
			return lines;
		};

		nexacro._GraphicsLib.getFragmentText = function (nexacroFont, text, maxWidth) {
			var words = text.split(' '), lines = [], tmpChars = "", tmpstr = "", tmpLine = "", tmpLine2 = "", c = 0, clen, line = "";

			for (var n = 0, len = words.length; n < len; n++) {
				tmpLine = line + words[n] + ' ';
				if (n > 0 && (nexacro.__getTextSize(tmpLine, nexacroFont, "none"))[0] > maxWidth) {
					tmpChars = line.split("");
					for (c = 0, clen = tmpChars.length; c < clen; c++) {
						tmpLine2 = tmpstr + tmpChars[c];
						if (c > 0 && (nexacro.__getTextSize(tmpLine2, nexacroFont, "none"))[0] > maxWidth) {
							lines.push(tmpstr);
							tmpstr = tmpChars[c];
						}
						else {
							tmpstr = tmpLine2;
						}
					}
					line = tmpstr + words[n] + ' ';
				}
				else {
					line = tmpLine;
				}
			}
			if ((nexacro.__getTextSize(line, nexacroFont, "none"))[0] > maxWidth) {
				tmpChars = line.split("");
				tmpstr = "";
				for (c = 0, clen = tmpChars.length; c < clen; c++) {
					tmpLine2 = tmpstr + tmpChars[c];
					if (c > 0 && (nexacro.__getTextSize(tmpLine2, nexacroFont, "none"))[0] > maxWidth) {
						lines.push(tmpstr);
						tmpstr = tmpChars[c];
					}
					else {
						tmpstr = tmpLine2;
					}
				}
				if (tmpstr.length) {
					lines.push(tmpstr);
				}
			}
			else if (line.length) {
				lines.push(line);
			}
			return lines;
		};

		nexacro._GraphicsLib.getTextSize = function (nexacroFont, lines, fontHeight) {
			var w = 0, len = lines.length, h = fontHeight *  len;

			for (var i = 0; i < len; i++) {
				w = Math.max(w, (nexacro.__getTextSize(lines[i], nexacroFont, "none"))[0]);
			}
			return [w, h];
		};
	}
	else if (nexacro._Browser == "IE" && nexacro._BrowserVersion <= 8) {
	}
	else {
		nexacro._GraphicsLib.getDefaultCanvas = function () {
			var defaultCanvas = nexacro._GraphicsLib._graphicsDefaultCanvas;
			if (!defaultCanvas) {
				var _doc = nexacro._managerFrameDoc;
				defaultCanvas = _doc.createElement("canvas");
				defaultCanvas.width = 1;
				defaultCanvas.height = 1;
				_doc.body.appendChild(defaultCanvas);
				nexacro._GraphicsLib._graphicsDefaultCanvas = defaultCanvas;
			}
			return defaultCanvas;
		};

		nexacro._GraphicsLib.getLines = function (nexacroFont, txt, wordwrap, maxWidth) {
			var canvas = nexacro._GraphicsLib.getDefaultCanvas(), ctx = canvas.getContext('2d');
			var lines, sz, i, len = 0;


			if (wordwrap == "char") {
				sz = nexacroFont._size;
				var sizeForOneChar = (sz >= 0 ? nexacro._convertPtToPx(sz) : Math.abs(sz));
				if (sizeForOneChar >= maxWidth) {
					return txt.split("");
				}
				ctx.font = nexacroFont._sysvalue;
				sz = ctx.measureText(txt);
				if (sz.width > maxWidth) {
					lines = [];
					var tmpLines = txt.split("\n"), line, lineSize;
					len = tmpLines.length;
					for (i = 0; i < len; i++) {
						line = tmpLines[i];
						lineSize = ctx.measureText(line);
						if (lineSize.width > maxWidth) {
							lines = lines.concat(nexacro._GraphicsLib.getFragmentText(ctx, line, maxWidth));
						}
						else {
							lines.push(line);
						}
					}
				}
				else {
					lines = txt.split("\n");
				}
			}
			else {
				lines = txt.split("\n");
			}
			return lines;
		};

		nexacro._GraphicsLib.getFragmentText = function (ctx, text, maxWidth) {
			var words = text.split(' '), lines = [], tmpChars = "", tmpLine = "", tmpstr = "", tmpLine2 = "", c = 0, clen = 0, line = "";

			for (var n = 0, len = words.length; n < len; n++) {
				tmpLine = line + words[n] + ' ';
				if (n > 0 && ctx.measureText(tmpLine).width > maxWidth) {
					tmpChars = line.split("");
					for (c = 0, clen = tmpChars.length; c < clen; c++) {
						tmpLine2 = tmpstr + tmpChars[c];
						if (c > 0 && ctx.measureText(tmpLine2).width > maxWidth) {
							lines.push(tmpstr);
							tmpstr = tmpChars[c];
						}
						else {
							tmpstr = tmpLine2;
						}
					}
					line = tmpstr + words[n] + ' ';
				}
				else {
					line = tmpLine;
				}
			}
			if (ctx.measureText(line).width > maxWidth) {
				tmpChars = line.split("");
				tmpstr = "";
				for (c = 0, clen = tmpChars.length; c < clen; c++) {
					tmpLine2 = tmpstr + tmpChars[c];
					if (c > 0 && ctx.measureText(tmpLine2).width > maxWidth) {
						lines.push(tmpstr);
						tmpstr = tmpChars[c];
					}
					else {
						tmpstr = tmpLine2;
					}
				}
				if (tmpstr.length) {
					lines.push(tmpstr);
				}
			}
			else if (line.length) {
				lines.push(line);
			}
			return lines;
		};

		nexacro._GraphicsLib.getTextSize = function (nexacroFont, lines, fontHeight) {
			var canvas = nexacro._GraphicsLib.getDefaultCanvas(), ctx = canvas.getContext('2d');

			ctx.font = nexacroFont._sysvalue;
			var w = 0, len = lines.length, h = fontHeight *  len;
			for (var i = 0; i < len; i++) {
				w = Math.max(w, ctx.measureText(lines[i]).width);
			}
			return [w, h];
		};
	}
	nexacro._GraphicsLib.arrForEach = function (array, func, scope) {
		var i, len = array.length;

		for (i = 0; i < len; i++) {
			func.call(scope, array[i], i, array);
		}
	};

	nexacro._GraphicsLib.arrEach = function (array, func, scope, reverse) {
		var i, len = array.length;

		if (reverse !== true) {
			for (i = 0; i < len; i++) {
				if (func.call(scope || array[i], array[i], i, array) === false) {
					return i;
				}
			}
		}
		else {
			for (i = len - 1; i > -1; i--) {
				if (func.call(scope || array[i], array[i], i, array) === false) {
					return i;
				}
			}
		}

		return true;
	};

	nexacro._GraphicsLib.arrCopy = function (src, srcPos, dest, destPos, length) {
		if (!length) {
			return;
		}
		var cnt = length + srcPos;
		var i = 0;
		var j = 0;
		if (src == dest) {
			src = src.slice(srcPos, cnt);
			cnt = src.length;

			for (j = destPos; i < cnt; i++, j++) {
				dest[j] = src[i];
			}
		}
		else {
			for (i = srcPos, j = destPos; i < cnt; i++, j++) {
				dest[j] = src[i];
			}
		}
	};

	nexacro._GraphicsLib.arrIndexOf = function (array, item, from, strict) {
		var len = array.length;
		if (from == null) {
			from = 0;
		}
		var tostrict = !!strict;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0) {
			from += len;
		}

		if (tostrict) {
			for (; from < len; from++) {
				if (array[from] === item) {
					return from;
				}
			}
		}
		else {
			for (; from < len; from++) {
				if (array[from] == item) {
					return from;
				}
			}
		}

		return -1;
	};

	nexacro._GraphicsLib.arrRemoveAt = function (array, index) {
		array[index] = null;
		array.splice(index, 1);
	};

	nexacro._GraphicsLib.arrRemove = function (array, item) {
		var index = nexacro._GraphicsLib.arrIndexOf(array, item);

		if (index !== -1) {
			array[index] = null;
			array.splice(index, 1);
		}
	};

	nexacro._GraphicsLib.arrClean = function (array) {
		var results = [], i = 0, len = array.length, item;

		for (; i < len; i++) {
			item = array[i];

			if (!nexacro._GraphicsLib.isEmpty(item)) {
				results.push(item);
			}
		}

		return results;
	};

	nexacro._GraphicsLib.arrFilter = function (array, func, scope) {
		if (!func || !(typeof func === "function")) {
			return;
		}

		var results = [], i = 0, len = array.length;

		for (; i < len; i++) {
			if (func.call(scope, array[i], i, array)) {
				results.push(array[i]);
			}
		}

		return results;
	};


	nexacro._GraphicsLib.arrIndexOfProp = function (array, prop, item, from_, strict_) {
		var len = array.length, from = Number(from_) || 0, strict = strict_ || false, obj, propValue;

		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0) {
			from += len;
		}

		if (strict) {
			for (; from < len; from++) {
				if (from in array && array[from]) {
					obj = array[from];
					propValue = obj[prop];

					if (propValue === item) {
						return from;
					}
				}
			}
		}
		else {
			for (; from < len; from++) {
				if (from in array && array[from]) {
					obj = array[from];
					propValue = obj[prop];

					if (propValue == item) {
						return from;
					}
				}
			}
		}

		return -1;
	};

	nexacro._GraphicsLib.arrMove = function (array, from, to) {
		var i, tmp;
		from = parseInt(from, 10);
		to = parseInt(to, 10);

		if (from !== to && 
			0 <= from && from <= array.length && 
			0 <= to && to <= array.length) {
			tmp = array[from];
			if (from < to) {
				for (i = from; i < to; i++) {
					array[i] = array[i + 1];
				}
			}
			else {
				for (i = from; i > to; i--) {
					array[i] = array[i - 1];
				}
			}

			array[to] = tmp;
			return true;
		}

		return false;
	};

	nexacro._GraphicsLib.arrMap = function (array, func, scope) {
		if (!func || !(typeof func === "function")) {
			return;
		}

		var results = [], i = 0, len = array.length;

		for (; i < len; i++) {
			results[i] = func.call(scope, array[i], i, array);
		}

		return results;
	};

	nexacro._GraphicsLib.arrMax = function (array) {
		return Math.max.apply(Math, array);
	};

	nexacro._GraphicsLib.arrMin = function (array) {
		return Math.min.apply(Math, array);
	};
	nexacro._GraphicsLib.objEach = function (object, func, scope_) {
		var p, scope = scope_ || object;
		for (p in object) {
			if (object.hasOwnProperty(p)) {
				if (func.call(scope, p, object[p], object) === false) {
					return;
				}
			}
		}
	};

	nexacro._GraphicsLib.objMerge = function (tarobject) {
		var i = 1, func, scope, ln = arguments.length, o, prop, val;

		if (!tarobject) {
			return;
		}

		if (typeof arguments[ln - 1] == "function") {
			ln = ln - 1;
			func = arguments[ln];
		}
		else if (typeof arguments[ln - 2] == "function") {
			ln = ln - 2;
			func = arguments[ln];
			scope = arguments[ln + 1] || this;
		}

		if (func) {
			for (; i < ln; i++) {
				o = arguments[i];
				for (prop in o) {
					if (o.hasOwnProperty(prop)) {
						val = o[prop];
						if (func.call(scope, prop, val, tarobject) !== false) {
							tarobject[prop] = val;
						}
					}
				}
			}
		}
		else {
			for (; i < ln; i++) {
				o = arguments[i];
				for (prop in o) {
					if (o.hasOwnProperty(prop)) {
						val = o[prop];
						if (!tarobject[prop]) {
							tarobject[prop] = val;
						}
					}
				}
			}
		}
		return tarobject;
	};

	nexacro._GraphicsLib.objCopyProperties = function (tarobject, srcobject) {
		if (tarobject && srcobject) {
			var p, value;

			for (p in srcobject) {
				if (srcobject.hasOwnProperty(p)) {
					value = srcobject[p];
					tarobject[p] = value;
				}
			}
		}
	};

	nexacro._GraphicsLib.strCapitalize = function (str) {
		return str.replace(/\b[a-z]/g, function (match) {
			return match.toUpperCase();
		});
	};

	nexacro._GraphicsLib.mathIsZero = function (val) {
		return Math.abs(val) <= this._EPSILON;
	};

	nexacro._GraphicsLib.mathIntegrate = function (f, a, b, n) {
		var x = this._abscissas[n - 2], w = this._weights[n - 2], A = 0.5 *  (b - a), B = A + a, i = 0, m = (n + 1) >> 1, sum = n & 1 ? w[i++] *  f(B) : 0;

		while (i < m) {
			var Ax = A *  x[i];
			sum += w[i++] *  (f(B + Ax) + f(B - Ax));
		}
		return A *  sum;
	};

	nexacro._GraphicsLib.mathFindRoot = function (f, df, x, a, b, n, tolerance) {
		for (var i = 0; i < n; i++) {
			var fx = f(x), dx = fx / df(x);

			if (Math.abs(dx) < tolerance) {
				return x;
			}

			var nx = x - dx;
			if (fx > 0) {
				b = x;
				x = nx <= a ? 0.5 *  (a + b) : nx;
			}
			else {
				a = x;
				x = nx >= b ? 0.5 *  (a + b) : nx;
			}
		}
	};

	nexacro._GraphicsLib.mathSolveQuadratic = function (a, b, c, roots) {
		var epsilon = this._EPSILON;

		if (Math.abs(a) < epsilon) {
			if (Math.abs(b) >= epsilon) {
				roots[0] = -c / b;
				return 1;
			}
			return Math.abs(c) < epsilon ? -1 : 0;
		}

		var q = b *  b - 4 *  a *  c;

		if (q < 0) {
			return 0;
		}
		q = Math.sqrt(q);
		a *= 2;
		var n = 0;
		roots[n++] = (-b - q) / a;
		if (q > 0) {
			roots[n++] = (-b + q) / a;
		}
		return n;
	};

	nexacro._GraphicsLib.mathSolveBezier = function (a, b, c, d, roots) {
		var epsilon = this._EPSILON, sqp, snq, phi, t, o;


		if (Math.abs(a) < epsilon) {
			return this.mathSolveQuadratic(b, c, d, roots);
		}
		b /= a;
		c /= a;
		d /= a;
		var bb = b *  b, p = (bb - 3 *  c) / 9, q = (2 *  bb *  b - 9 *  b *  c + 27 *  d) / 54, ppp = p *  p *  p, D = q *  q - ppp;
		b /= 3;
		if (Math.abs(D) < epsilon) {
			if (Math.abs(q) < epsilon) {
				roots[0] = -b;
				return 1;
			}
			sqp = Math.sqrt(p);
			snq = q > 0 ? 1 : -1;
			roots[0] = -snq *  2 *  sqp - b;
			roots[1] = snq *  sqp - b;
			return 2;
		}
		if (D < 0) {
			sqp = Math.sqrt(p);
			phi = Math.acos(q / (sqp *  sqp *  sqp)) / 3;
			t = -2 *  sqp;
			o = 2 *  Math.PI / 3;
			roots[0] = t *  Math.cos(phi) - b;
			roots[1] = t *  Math.cos(phi + o) - b;
			roots[2] = t *  Math.cos(phi - o) - b;
			return 3;
		}
		var A = (q > 0 ? -1 : 1) *  Math.pow(Math.abs(q) + Math.sqrt(D), 1 / 3);
		roots[0] = A + p / A - b;
		return 1;
	};


	nexacro._GraphicsLib.toStrFormatNumber = function (val) {
		return (Math.round(val *  nexacro._GraphicsLib._fmtMultiplier) / nexacro._GraphicsLib._fmtMultiplier) + "";
	};

	nexacro._GraphicsLib.toStrFormatPoint = function (val, separator) {
		return nexacro._GraphicsLib.toStrFormatNumber(val.x) + (separator || ',') + nexacro._GraphicsLib.toStrFormatNumber(val.y);
	};

	nexacro._GraphicsLib.toStrFormatSize = function (val, separator) {
		return nexacro._GraphicsLib.toStrFormatNumber(val.width) + (separator || ',') + nexacro._GraphicsLib.toStrFormatNumber(val.height);
	};

	nexacro._GraphicsLib.toStrFormatRect = function (val, separator) {
		return nexacro._GraphicsClassUtils.fmtPoint(val, separator) + (separator || ',') + nexacro._GraphicsLib.toStrFormatSize(val, separator);
	};
}







if (!nexacro._GraphicsHashMap) {
	nexacro._GraphicsHashMap = function () {
		this._size = 0;
		this._map = {
		};
	};

	var _pGraphicsHashMap = nexacro._createPrototype(nexacro.Object, nexacro._GraphicsHashMap);
	nexacro._GraphicsHashMap.prototype = _pGraphicsHashMap;

	nexacro._GraphicsHashMap._hashkeypool = {
	};
	nexacro._GraphicsHashMap._simpleToString = function () {
		return this._hashKey;
	};
	nexacro._GraphicsHashMap.getHashKey = function (prefix, obj) {
		var key;
		if (obj._hashKey == null) {
			var nextVal = this._hashkeypool[prefix];
			if (nextVal == null) {
				nextVal = 0;
				this._hashkeypool[prefix] = nextVal;
			}
			else {
				nextVal++;
				this._hashkeypool[prefix] = nextVal;
			}
			key = prefix + nextVal;
			obj._hashKey = key;
		}
		else {
			key = obj._hashKey;
		}
		return key;
	};
	nexacro._GraphicsHashMap.makeHashKey = function (obj, toStringFn) {
		obj._hashKey = nexacro._GraphicsLib.getUniqueId();
		obj.toString = toStringFn || this._simpleToString;
	};
	nexacro._GraphicsHashMap.makeHashKeyForArray = function (arr, toStringFn_) {
		var getUniFn = nexacro._GraphicsLib.getUniqueId, i, len = arr.length, toStringFn = toStringFn_ || this._simpleToString;

		for (i = 0; i < len; i++) {
			arr[i]._hashKey = getUniFn();
			arr[i].toString = toStringFn;
		}
	};

	_pGraphicsHashMap.put = function (key, value) {
		if (this.containsKey(key)) {
			return false;
		}
		var map = this._map;
		this._size++;
		return map[key._toHashString()] = value;
	};

	_pGraphicsHashMap.get = function (key) {
		return this._map[key._toHashString()];
	};

	_pGraphicsHashMap.remove = function (key) {
		if (!this.containsKey(key)) {
			return false;
		}
		var map = this._map;
		this._size--;
		delete map[key._toHashString()];
		return true;
	};

	_pGraphicsHashMap.containsKey = function (key) {
		return key._toHashString() in this._map;
	};

	_pGraphicsHashMap.getSize = function () {
		return this._size;
	};

	_pGraphicsHashMap.clear = function () {
		this._size = 0;
		this._map = {
		};
	};

	_pGraphicsHashMap.fromDataset = function (ds, keyColumn, valueColumn, bClear) {
		var i, len = ds.getRowCount() || 0;
		if (bClear !== false) {
			this.clear();
		}
		if (valueColumn) {
			for (i = 0; i < len; i++) {
				this.put(ds.getColumn(i, keyColumn), ds.getColumn(i, valueColumn));
			}
		}
		else {
			for (i = 0; i < len; i++) {
				this.put(ds.getColumn(i, keyColumn), i);
			}
		}
	};

	_pGraphicsHashMap.toArray = function (flag) {
		var arr = [];
		if (flag == null) {
			flag = 0;
		}
		if (flag == 0) {
			this.forEach(function (key) {
				arr.push(key);
			});
		}
		else if (flag == 1) {
			this.forEach(function (key, value) {
				arr.push(value);
			});
		}
		else {
			this.forEach(function (key, value) {
				arr.push({
					key : key, 
					value : value
				});
			});
		}
		return arr;
	};

	_pGraphicsHashMap.forEach = function (f) {
		var map = this._map;
		for (var key in map) {
			f.call(this, key, map[key._toHashString()]);
		}
	};

	_pGraphicsHashMap._debug = function (bConsole) {
		if (bConsole) {
			this.forEach(function (key, value) {
				console.log("key: ", key, "value: ", value);
			});
		}
		else {
			this.forEach(function (key, value) {
				trace(key + "--->" + value);
			});
		}
	};

	delete _pGraphicsHashMap;
}

if (!nexacro._GraphicsMatrix) {
	nexacro._GraphicsMatrix = function (arg) {
		var count = arguments.length, ok = true;

		if (count == 6) {
			this.set_scaleX(+arguments[0]);
			this.set_shearY(+arguments[2]);
			this.set_shearX(+arguments[1]);
			this.set_scaleY(+arguments[3]);
			this.set_translateX(+arguments[4]);
			this.set_translateY(+arguments[5]);
		}
		else if (count == 1) {
			if (arg instanceof nexacro._GraphicsMatrix) {
				this.set(arg._scaleX, arg._shearX, arg._shearY, arg._scaleY, arg._translateX, arg._translateY);
			}
			else if (nexacro._isArray(arg)) {
				this.set_scaleX(+arguments[0]);
				this.set_shearY(+arguments[2]);
				this.set_shearX(+arguments[1]);
				this.set_scaleY(arguments[3]);
				this.set_translateX(+arguments[4]);
				this.set_translateY(+arguments[5]);
			}
			else {
				ok = false;
			}

			if (!ok) {
			}
		}
		else if (count == 0) {
			this.reset();
		}
	};

	var _pGraphicsMatrix = nexacro._createPrototype(nexacro.Object, nexacro._GraphicsMatrix);
	nexacro._GraphicsMatrix.prototype = _pGraphicsMatrix;

	nexacro._GraphicsMatrix.DEGTORAD = Math.PI / 180;
	nexacro._GraphicsMatrix.RADTODEG = 180 / Math.PI;

	_pGraphicsMatrix.scaleX = 1;
	_pGraphicsMatrix.shearY = 0;
	_pGraphicsMatrix.shearX = 0;
	_pGraphicsMatrix.scaleY = 1;
	_pGraphicsMatrix.translateX = 0;
	_pGraphicsMatrix.translateY = 0;

	_pGraphicsMatrix._scaleX = 1;
	_pGraphicsMatrix._shearY = 0;
	_pGraphicsMatrix._shearX = 0;
	_pGraphicsMatrix._scaleY = 1;
	_pGraphicsMatrix._translateX = 0;
	_pGraphicsMatrix._translateY = 0;

	_pGraphicsMatrix.set_scaleX = function (v) {
		if (isNumber(v) && this.scaleX != v) {
			this.scaleX = v;
			this._scaleX = this.scaleX;
		}
	};

	_pGraphicsMatrix.set_shearY = function (v) {
		if (isNumber(v) && this.shearY != v) {
			this.shearY = v;
			this._shearY = this.shearY;
		}
	};

	_pGraphicsMatrix.set_shearX = function (v) {
		if (isNumber(v) && this.shearX != v) {
			this.shearX = v;
			this._shearX = this.shearX;
		}
	};

	_pGraphicsMatrix.set_scaleY = function (v) {
		if (isNumber(v) && this.scaleY != v) {
			this.scaleY = v;
			this._scaleY = this.scaleY;
		}
	};

	_pGraphicsMatrix.set_translateX = function (v) {
		if (isNumber(v) && this._translateX != v) {
			this.translateX = v;
			this._translateX = this.translateX;
		}
	};

	_pGraphicsMatrix.set_translateY = function (v) {
		if (isNumber(v) && this._translateY != v) {
			this.translateY = v;
			this._translateY = this.translateY;
		}
	};

	_pGraphicsMatrix.set = function (a, c, b, d, tx, ty) {
		this.set_scaleX(a);
		this.set_shearY(b);
		this.set_shearX(c);
		this.set_scaleY(d);
		this.set_translateX(tx);
		this.set_translateY(ty);

		return this;
	};

	_pGraphicsMatrix.clone = function () {
		return new nexacro._GraphicsMatrix(this);
	};

	_pGraphicsMatrix.equals = function (m) {
		return m === this || m && this._scaleX == m._scaleX && this._shearX == m._shearX
			 && this._shearY == m._shearY && this._scaleY == m._scaleY && this._translateX == m._translateX
			 && this._translateY == m._translateY
			 || false;
	};

	_pGraphicsMatrix.toString = function () {
		var f0 = [nexacro._GraphicsLib.toStrFormatNumber(this._scaleX), nexacro._GraphicsLib.toStrFormatNumber(this._shearX), nexacro._GraphicsLib.toStrFormatNumber(this._translateX)];
		var f1 = [nexacro._GraphicsLib.toStrFormatNumber(this._shearY), nexacro._GraphicsLib.toStrFormatNumber(this._scaleY), nexacro._GraphicsLib.toStrFormatNumber(this._translateY)];

		return '[[' + f0.join(', ') + '], ['
			 + f1.join(', ') + ']]';
	};

	_pGraphicsMatrix.reset = function () {
		this._scaleX = this._scaleY = 1;
		this._shearY = this._shearX = this._translateX = this._translateY = 0;
		return this;
	};

	_pGraphicsMatrix.scale = function (pt, centerPt) {
		var read = 0;
		if (pt instanceof nexacro.Point) {
			read = 1;
		}
		else {
			pt = new nexacro.Point(+arguments[0], +arguments[1]);
			read = 2;
		}
		if (arguments[read] != null) {
			if (arguments[read] instanceof nexacro.Point) {
				centerPt = arguments[read];
			}
			else {
				centerPt = new nexacro.Point(+arguments[read], +arguments[read + 1]);
			}
		}
		else {
			centerPt = null;
		}

		if (centerPt) {
			this.translate(centerPt);
		}
		this._scaleX *= pt.x;
		this._shearY *= pt.x;
		this._shearX *= pt.y;
		this._scaleY *= pt.y;
		if (centerPt) {
			this.translate(centerPt.negate());
		}
		return this;
	};

	_pGraphicsMatrix.translate = function (pt) {
		if (!(pt instanceof nexacro.Point)) {
			pt = new nexacro.Point(+arguments[0], +arguments[1]);
		}
		var x = pt.x, y = pt.y;
		this._translateX += x *  this._scaleX + y *  this._shearY;
		this._translateY += x *  this._shearX + y *  this._scaleY;
		return this;
	};

	_pGraphicsMatrix.rotate = function (angle, centerPt) {
		if (!(centerPt instanceof nexacro.Point)) {
			var argsLen = arguments.length;
			if (argsLen == 3) {
				centerPt = new nexacro.Point(+arguments[1], +arguments[2]);
			}
			else {
				centerPt = new nexacro.Point();
			}
		}
		angle = angle *  nexacro._GraphicsMatrix.DEGTORAD;
		var x = centerPt.x, y = centerPt.y, cos = Math.cos(angle), sin = Math.sin(angle), tx = x - x *  cos + y *  sin, ty = y - x *  sin - y *  cos, a = this._scaleX, b = this._shearX, c = this._shearY, d = this._scaleY;
		this._scaleX = cos *  a + sin *  b;
		this._shearX = -sin *  a + cos *  b;
		this._shearY = cos *  c + sin *  d;
		this._scaleY = -sin *  c + cos *  d;
		this._translateX += tx *  a + ty *  b;
		this._translateY += tx *  c + ty *  d;
		return this;
	};

	_pGraphicsMatrix.shear = function (pt, centerPt) {
		var read = 0;
		if (pt instanceof nexacro.Point) {
			read = 1;
		}
		else {
			pt = new nexacro.Point(+arguments[0], +arguments[1]);
			read = 2;
		}
		if (arguments[read] != null) {
			if (arguments[read] instanceof nexacro.Point) {
				centerPt = arguments[read];
			}
			else {
				centerPt = new nexacro.Point(+arguments[read], +arguments[read + 1]);
			}
		}
		else {
			centerPt = null;
		}
		if (centerPt) {
			this.translate(centerPt);
		}
		var a = this._scaleX, c = this._shearX;
		this._scaleX += pt.y *  this._shearY;
		this._shearX += pt.y *  this._scaleY;
		this._shearY += pt.x *  a;
		this._scaleY += pt.x *  c;

		if (centerPt) {
			this.translate(centerPt.negate());
		}
		return this;
	};

	_pGraphicsMatrix.skew = function (xdeg, ydeg, centerX, centerY) {
		xdeg = xdeg *  nexacro._GraphicsMatrix.DEGTORAD;
		ydeg = ydeg *  nexacro._GraphicsMatrix.DEGTORAD;
		var tx = centerX - centerX *  Math.cos(xdeg) + centerY *  Math.sin(xdeg), ty = centerY - centerX *  Math.sin(ydeg) - centerY *  Math.cos(ydeg), a = this._scaleX, b = this._shearX, c = this._shearY, d = this._scaleY;
		tx = tx *  a + ty *  b;
		ty = tx *  c + ty *  d;
		this.concatenate(new nexacro._GraphicsMatrix(Math.cos(ydeg), -Math.sin(xdeg), Math.sin(ydeg), Math.cos(xdeg), tx, ty));
	};

	_pGraphicsMatrix.isIdentity = function () {
		return this._scaleX == 1 && this._shearY == 0 && this._shearX == 0 && this._scaleY == 1
			 && this._translateX == 0 && this._translateY == 0;
	};

	_pGraphicsMatrix.isInvertible = function () {
		return !!this._getDeterminant();
	};

	_pGraphicsMatrix.isSingular = function () {
		return !this._getDeterminant();
	};

	_pGraphicsMatrix.concatenate = function (m) {
		var a = this._scaleX, b = this._shearX, c = this._shearY, d = this._scaleY;

		this._scaleX = m._scaleX *  a + m._shearY *  b;
		this._shearX = m._shearX *  a + m._scaleY *  b;
		this._shearY = m._scaleX *  c + m._shearY *  d;
		this._scaleY = m._shearX *  c + m._scaleY *  d;
		this._translateX += m._translateX *  a + m._translateY *  b;
		this._translateY += m._translateX *  c + m._translateY *  d;
		return this;
	};

	_pGraphicsMatrix.preConcatenate = function (m) {
		var a = this._scaleX, b = this._shearX, c = this._shearY, d = this._scaleY, tx = this._translateX, ty = this._translateY;
		this._scaleX = m._scaleX *  a + m._shearX *  c;
		this._shearX = m._scaleX *  b + m._shearX *  d;
		this._shearY = m._shearY *  a + m._scaleY *  c;
		this._scaleY = m._shearY *  b + m._scaleY *  d;
		this._translateX = m._scaleX *  tx + m._shearX *  ty + m._translateX;
		this._translateY = m._shearY *  tx + m._scaleY *  ty + m._translateY;
		return this;
	};

	_pGraphicsMatrix.transform = function (src, srcOff, dst, dstOff, numPts) {
		if (arguments.length < 5) {
			if (!(src instanceof nexacro.Point)) {
				src = new nexacro.Point(arguments[0], arguments[1]);
				var readargs = src.__readArgs;
				return this._transformPoint(src, arguments[readargs]);
			}
			else {
				return this._transformPoint(src, srcOff);
			}
		}
		else {
			return this._transformCoordinates(src, srcOff, dst, dstOff, numPts);
		}
	};

	_pGraphicsMatrix._transformPoint = function (pt, dest) {
		var x = pt.x, y = pt.y;
		if (!dest) {
			dest = new nexacro.Point();
		}
		return dest.set(x *  this._scaleX + y *  this._shearX + this._translateX, x *  this._shearY + y *  this._scaleY + this._translateY
		);
	};

	_pGraphicsMatrix._transformCoordinates = function (src, srcOff, dst, dstOff, numPts) {
		var i = srcOff, j = dstOff, srcEnd = srcOff + 2 *  numPts, x, y, a = this._scaleX, b = this._shearX, c = this._shearY, d = this._scaleY;

		var tx = this._translateX, ty = this._translateY;


		while (i < srcEnd) {
			x = src[i++];
			y = src[i++];
			dst[j++] = x *  a + y *  b + tx;
			dst[j++] = x *  c + y *  d + ty;
		}
		return dst;
	};

	_pGraphicsMatrix._transformCorners = function (rect, obj_id) {
		var x1 = rect.left, y1 = rect.top, x2 = x1 + rect.width, y2 = y1 + rect.height, coords = [x1, y1, x2, y1, x2, y2, x1, y2, obj_id];


		return this._transformCoordinates(coords, 0, coords, 0, 4);
	};

	_pGraphicsMatrix._transformBounds = function (bounds, dest, obj_id) {
		var coords = this._transformCorners(bounds, obj_id), min = coords.slice(0, 2), max = coords.slice(0), val, j;
		for (var i = 2; i < 8; i++) {
			val = coords[i];
			j = i & 1;

			if (val < min[j]) {
				min[j] = val;
			}
			else if (val > max[j]) {
				max[j] = val;
			}
		}
		if (!dest) {
			dest = new nexacro.Rect();
		}
		return dest.set(min[0], min[1], max[0] - min[0], max[1] - min[1]);
	};

	_pGraphicsMatrix.inverseTransform = function (pt) {
		if (!(pt instanceof nexacro.Point)) {
			pt = new nexacro.Point(+arguments[0], +arguments[1]);
			var readargs = pt.__readArgs;
			return this._inverseTransform(pt, arguments[readargs]);
		}
		else {
			return this._inverseTransform(pt, arguments[1]);
		}
	};

	_pGraphicsMatrix._getDeterminant = function () {
		var det = this._scaleX *  this._scaleY - this._shearX *  this._shearY;
		return isFinite(det) && !nexacro._GraphicsLib.mathIsZero(det)
			 && isFinite(this._translateX) && isFinite(this._translateY)
			 ? det : null;
	};

	_pGraphicsMatrix._inverseTransform = function (pt, dest) {
		var det = this._getDeterminant();
		if (!det) {
			return null;
		}
		var x = pt.x - this._translateX, y = pt.y - this._translateY;
		if (!dest) {
			dest = new nexacro.Point();
		}
		return dest.set((x *  this._scaleY - y *  this._shearX) / det, (y *  this._scaleX - x *  this._shearY) / det
		);
	};

	_pGraphicsMatrix.decompose = function () {
		var a = this._scaleX, b = this._shearX, c = this._shearY, d = this._scaleY;
		if (nexacro._GraphicsLib.mathIsZero(a *  d - b *  c)) {
			return null;
		}

		var scaleX = Math.sqrt(a *  a + b *  b);
		a /= scaleX;
		b /= scaleX;

		var shear = a *  c + b *  d;
		c -= a *  shear;
		d -= b *  shear;

		var scaleY = Math.sqrt(c *  c + d *  d);
		c /= scaleY;
		d /= scaleY;
		shear /= scaleY;

		if (a *  d < b *  c) {
			a = -a;
			b = -b;
			shear = -shear;
			scaleX = -scaleX;
		}

		return {
			translation : this.getTranslation(), 
			scaling : new nexacro.Point(scaleX, scaleY), 
			rotation : -Math.atan2(b, a) *  180 / Math.PI, 
			shearing : shear
		};
	};

	_pGraphicsMatrix.consolidate = function () {
		var attrs = {
			"a" : this._scaleX, 
			"b" : this._shearX, 
			"c" : this._shearY, 
			"d" : this._scaleY, 
			"e" : this._translateX, 
			"f" : this._translateY
		};
		return attrs;
	};

	_pGraphicsMatrix.getValues = function () {
		return [this._scaleX, this._shearY, this._shearX, this._scaleY, this._translateX, this._translateY];
	};

	_pGraphicsMatrix.getTranslation = function () {
		return new nexacro.Point(this._translateX, this._translateY);
	};

	_pGraphicsMatrix.getScaling = function () {
		return (this.decompose() || {
		}).scaling;
	};

	_pGraphicsMatrix.getRotation = function () {
		return (this.decompose() || {
		}).rotation;
	};

	_pGraphicsMatrix.inverted = function () {
		var det = this._getDeterminant();
		return det && new nexacro._GraphicsMatrix(this._scaleY / det, -this._shearY / det, -this._shearX / det, this._scaleX / det, (this._shearX *  this._translateY - this._scaleY *  this._translateX) / det, (this._shearY *  this._translateX - this._scaleX *  this._translateY) / det);
	};

	_pGraphicsMatrix.shiftless = function () {
		return new nexacro._GraphicsMatrix(this._scaleX, this._shearY, this._shearX, this._scaleY, 0, 0);
	};

	_pGraphicsMatrix.equalsExceptTranslate = function (m) {
		return m === this || m && this._scaleX == m._scaleX && this._shearX == m._shearX
			 && this._shearY == m._shearY && this._scaleY == m._scaleY
			 || false;
	};

	_pGraphicsMatrix._fixedHalflineAntiAlise = function (obj) {
		var ret = {
		}, objpos = null, isfixantialiseX = true, isfixantialiseY = true, sx, sy, x, y;

		function isFixedAntiAliesCheck (n) {
			if (nexacro._Browser == "Runtime") {
				return true;
			}
			return n === +n && n === (n | 0);
		}
		ret.x = this._translateX;
		ret.y = this._translateY;
		if (obj && obj._strokewidth) {
			if (obj._segments && obj._strokewidth == 1) {
				if (obj._segments.length > 0) {
					objpos = {
					};
					objpos.x = obj._segments[0].point.x;
					objpos.y = obj._segments[0].point.y;
				}
				if (objpos) {
					sx = Math.floor(objpos.x);
					sy = Math.floor(objpos.y);

					if (!isFixedAntiAliesCheck(objpos.x)) {
						if ((sx + 0.3) < objpos.x && objpos.x < (sx + 0.7)) {
							isfixantialiseX = false;
						}
					}
					if (!isFixedAntiAliesCheck(objpos.y)) {
						if ((sy + 0.3) < objpos.y && objpos.y < (sy + 0.7)) {
							isfixantialiseY = false;
						}
					}
					x = Math.round(this._translateX);
					y = Math.round(this._translateY);


					if (this._translateX == x && isfixantialiseX) {
						x += 0.5;
					}
					else {
						x = this._translateX;
					}

					if (this._translateY == y && isfixantialiseY) {
						y += 0.5;
					}
					else {
						y = this._translateY;
					}

					ret.x = x;
					ret.y = y;
				}
				else {
					ret.x = this._translateX;
					ret.y = this._translateY;
				}
			}
			else {
				if (obj._strokewidth == 1) {
					sx = Math.floor(this._translateX);
					sy = Math.floor(this._translateY);
					if (!isFixedAntiAliesCheck(this._translateX)) {
						if ((sx + 0.3) < this._translateX && this._translateX < (sx + 0.7)) {
							isfixantialiseX = false;
						}
					}
					if (!isFixedAntiAliesCheck(this._translateY)) {
						if ((sy + 0.3) < this._translateY && this._translateY < (sy + 0.7)) {
							isfixantialiseY = false;
						}
					}


					x = Math.round(this._translateX);
					y = Math.round(this._translateY);
					if (obj._size) {
						obj._size.width = Math.round(obj._size.width);
						obj._size.height = Math.round(obj._size.height);
					}

					if (isfixantialiseX) {
						x += 0.5;
					}
					else {
						x = this._translateX;
					}
					if (isfixantialiseY) {
						y += 0.5;
					}
					else {
						y = this._translateY;
					}


					ret.x = x;
					ret.y = y;
				}
				else {
					ret.x = this._translateX;
					ret.y = this._translateY;
				}
			}
		}
		return ret;
	};
	_pGraphicsMatrix.applyToContext = function (ctx, obj) {
		var fixpos = this._fixedHalflineAntiAlise(obj);
		ctx.transform(this._scaleX, this._shearY, this._shearX, this._scaleY, fixpos.x, fixpos.y);
	};

	delete _pGraphicsMatrix;
}

if (!nexacro._GraphicsQuadTree) {
	nexacro._GraphicsQuadTree = function (x, y, w, h) {
		this._dict = new nexacro._GraphicsHashMap();
		w = Math.max(w, h);
		this._root = new nexacro._GraphicsQuadTreeNode(new nexacro.Rect(x, y, w, w));
	};

	var _pGraphicsQuadTree = nexacro._createPrototype(nexacro.Object, nexacro._GraphicsQuadTree);
	nexacro._GraphicsQuadTree.prototype = _pGraphicsQuadTree;

	_pGraphicsQuadTree.setDebug = function (topForm) {
		this._root._topForm = topForm;
		if (topForm) {
			this._root._debug = true;
		}
	};

	_pGraphicsQuadTree.query = function (areaRect, results) {
		if (nexacro._isArray(results)) {
			this._root.query(areaRect, results);
		}
		else {
			return this._root.query(areaRect);
		}
	};

	_pGraphicsQuadTree.getAll = function () {
		return this._dict.getValues();
	};

	_pGraphicsQuadTree.getCount = function () {
		return this._dict.getSize();
	};

	_pGraphicsQuadTree.move = function (item) {
		if (this.contains(item)) {
			var i = 0;
			while (!this._checkRegion(item)) {
				if (i == 20) {
					var rect = item._getBoundRect();
					trace("error checkRegion (move)" + rect.left + "," + rect.top + "," + rect.width + "," + rect.height);
					return false;
				}
				i++;
			}
			this._root.move(item);
			return true;
		}
		else {
			return false;
		}
	};

	_pGraphicsQuadTree.add = function (item) {
		var i = 0;
		while (!this._checkRegion(item)) {
			if (i == 20) {
				var rect = item._getBoundRect();
				trace("error checkRegion (add) " + rect.left + "," + rect.top + "," + rect.width + "," + rect.height);
				return;
			}
			i++;
		}
		var root = this._root, map = this._dict;
		if (nexacro._isArray(item)) {
			var len = item.length;

			for (i = 0; i < len; i++) {
				root.insert(item[i]);
				map.put(item[i], item[i]);
			}
		}
		else {
			root.insert(item);
			map.put(item, item);
		}
	};

	_pGraphicsQuadTree.clear = function () {
		this._dict.clear();
		this._root.clear();
	};

	_pGraphicsQuadTree.contains = function (item) {
		return this._dict.containsKey(item);
	};

	_pGraphicsQuadTree.remove = function (item) {
		if (this.contains(item)) {
			this._root.remove(item, true);
			this._dict.remove(item);
			return true;
		}
		else {
			return false;
		}
	};

	_pGraphicsQuadTree._checkRegion = function (item) {
		var root = this._root, bounds = root._bounds, itemBounds = item._getBoundRect();
		if (!bounds || bounds.width == 0 || bounds.height == 0) {
		}
		if (!bounds.containsRect(itemBounds)) {
			var p;
			if (itemBounds.left < bounds.left) {
				if (itemBounds.top < bounds.top) {
					p = this._grow(bounds.width, bounds.height);
				}
				else {
					p = this._grow(bounds.width, 0);
				}
			}
			else if ((itemBounds.left + itemBounds.width) > (bounds.left + bounds.width)) {
				if (itemBounds.top < bounds.top) {
					p = this._grow(0, bounds.height);
				}
				else {
					p = this._grow(0, 0);
				}
			}
			else if (itemBounds.top < bounds.top) {
				p = this._grow(0, bounds.height);
			}
			else if (itemBounds.top + itemBounds.height > bounds.top + bounds.height) {
				p = this._grow(0, 0);
			}
			if (p) {
				this._root = p;
			}
			return false;
		}
		return true;
	};

	_pGraphicsQuadTree._grow = function (xoffset, yoffset) {
		var root = this._root, bounds = root._bounds;
		var x = bounds.left - xoffset, y = bounds.top - yoffset, cls = nexacro._GraphicsQuadTreeNode, rectCls = nexacro.Rect, w = bounds.width, h = bounds.height;


		var p = new cls(x, y, bounds.width *  2, bounds.height *  2);
		var nodes = p._childNodes;
		if (xoffset) {
			if (yoffset) {
				nodes[3] = root;
				root.Parent = p;
			}
			else {
				nodes[2] = root;
				root.Parent = p;
			}
		}
		else if (yoffset) {
			nodes[1] = root;
			root.Parent = p;
		}
		else {
			nodes[0] = root;
			root.Parent = p;
		}
		nodes[0] = nodes[0] || new cls(p, new rectCls(x, y, w, h));
		nodes[1] = nodes[1] || new cls(p, new rectCls(x, y + h, w, h));
		nodes[2] = nodes[2] || new cls(p, new rectCls(x + w, y, w, h));
		nodes[3] = nodes[3] || new cls(p, new rectCls(x + w, y + h, w, h));
		return p;
	};

	delete _pGraphicsQuadTree;
}

if (!nexacro._GraphicsQuadTreeNode) {
	nexacro._GraphicsQuadTreeNode = function () {
		if (arguments.length == 4) {
			this._bounds = new nexacro.Rect(arguments[0], arguments[1], arguments[2], arguments[3]);
		}
		else if (arguments.length == 2) {
			this.Parent = arguments[0];
			this._bounds = arguments[1];
		}
		else if (arguments.length == 1) {
			this._bounds = arguments[0];
		}
		this._items = [];
		this._childNodes = [];
	};

	var _pGraphicsQuadTreeNode = nexacro._createPrototype(nexacro.Object, nexacro._GraphicsQuadTreeNode);
	nexacro._GraphicsQuadTreeNode.prototype = _pGraphicsQuadTreeNode;

	_pGraphicsQuadTreeNode.maxItemsPerNode = 2;

	_pGraphicsQuadTreeNode.isEmptyLeaf = function () {
		return this.getCount() == 0 && this._childNodes.length == 0;
	};

	_pGraphicsQuadTreeNode.getCount = function () {
		var cnt = 0;

		cnt += this._items.length;

		var nodes = this._childNodes, node;
		for (var i = 0, len = nodes.length; i < len; i++) {
			node = nodes[i];
			cnt += node.getCount();
		}
		return cnt;
	};

	_pGraphicsQuadTreeNode.add = function (item) {
		item._qOwner = this;
		var items = this._items;
		items.push(item);
	};

	_pGraphicsQuadTreeNode._remove = function (item) {
		var items = this._items;
		var idx = nexacro._GraphicsLib.arrIndexOf(items, item);
		if (idx >= 0) {
			items[idx] = items[items.length - 1];
			nexacro._GraphicsLib.arrRemoveAt(items, items.length - 1);
		}
	};

	_pGraphicsQuadTreeNode.relocate = function (item) {
		if (this._bounds.containsRect(item._getBoundRect())) {
			var nodes = this._childNodes;
			if (nodes.length) {
				var dest = this.getDestTree(item);
				if (item._qOwner != dest) {
					var formerOwner = item._qOwner;
					this.remove(item, false);
					dest.insert(item);
					if (formerOwner) {
						formerOwner.cleanUpwards();
					}
				}
			}
		}
		else {
			if (this.Parent != null) {
				this.Parent.relocate(item);
			}
		}
	};

	_pGraphicsQuadTreeNode.cleanUpwards = function () {
		var nodes = this._childNodes;
		if (nodes.length) {
			if (nodes[0].isEmptyLeaf() && 
				nodes[1].isEmptyLeaf() && 
				nodes[2].isEmptyLeaf() && 
				nodes[3].isEmptyLeaf()) {
				this._childNodes = [];
				if (this.Parent != null && this.getCount() == 0) {
					this.Parent.cleanUpwards();
				}
			}
		}
		else {
			if (this.Parent != null && this.getCount() == 0) {
				this.Parent.cleanUpwards();
			}
		}
	};

	_pGraphicsQuadTreeNode.clear = function () {
		var nodes = this._childNodes;
		if (nodes.length) {
			nodes[0].clear();
			nodes[1].clear();
			nodes[2].clear();
			nodes[3].clear();
		}
		this._childNodes = [];
		var items = this._items;
		for (var i = 0, len = items.length; i < len; i++) {
			items[i]._qOwner = null;
		}
		this._items = [];
	};

	_pGraphicsQuadTreeNode.remove = function (item, bClean) {
		if (item._qOwner != null) {
			if (item._qOwner == this) {
				this._remove(item);
				if (bClean) {
					this.cleanUpwards();
				}
			}
			else {
				item._qOwner.remove(item, bClean);
			}
		}
	};

	_pGraphicsQuadTreeNode.getAll = function (results) {
		results.push.apply(results, this._items);
		var nodes = this._childNodes;
		for (var i = 0, len = nodes.length; i < len; i++) {
			nodes[i].getAll(results);
		}
	};

	_pGraphicsQuadTreeNode.query = function (areaRect, results) {
		var i, res = [], len = 0;
		if (results != null && nexacro._isArray(results)) {
			var bounds = this._bounds;
			if (areaRect.containsRect(bounds)) {
				this.getAll(results);
			}
			else if (areaRect.intersectRect(bounds)) {
				var nodes = this._childNodes, items = this._items;

				len = items.length || 0;
				for (i = 0; i < len; i++) {
					if (areaRect.intersectRect(items[i]._getBoundRect())) {
						results.push(items[i]);
					}
				}
				len = nodes.length;
				for (i = 0; i < len; i++) {
					nodes[i].query(areaRect, results);
				}
			}
		}
		else {
			this.query(areaRect, res);
			return res;
		}
	};

	_pGraphicsQuadTreeNode.insert = function (item) {
		var bounds = this._bounds, itemBounds = item._getBoundRect();

		if (!bounds.containsRect(itemBounds)) {
			return;
		}
		var nodes = this._childNodes, items = this._items;

		if (items.length == 0 || (nodes.length == 0 && items.length + 1 <= this.maxItemsPerNode)) {
			this.add(item);
		}
		else {
			if (nodes.length == 0) {
				this._createSubNodes();
			}
			var dest = this.getDestTree(item);
			if (dest == this) {
				this.add(item);
			}
			else {
				dest.insert(item);
			}
		}
	};

	_pGraphicsQuadTreeNode._createSubNodes = function () {
		var bounds = this._bounds;
		if ((bounds.width *  bounds.height) <= 10) {
			return;
		}
		var halfWidth = bounds.width / 2;
		var halfHeight = bounds.height / 2;
		var left = bounds.left;
		var top = bounds.top;
		var nodes = this._childNodes, cls = nexacro._GraphicsQuadTreeNode, rectCls = nexacro.Rect;
		nodes[0] = new cls(this, new rectCls(left, top, halfWidth, halfHeight));
		nodes[1] = new cls(this, new rectCls(left, top + halfHeight, halfWidth, halfHeight));
		nodes[2] = new cls(this, new rectCls(left + halfWidth, top, halfWidth, halfHeight));
		nodes[3] = new cls(this, new rectCls(left + halfWidth, top + halfHeight, halfWidth, halfHeight));

		var items = this._items, dest;
		for (var i = 0; i < items.length; i++) {
			dest = this.getDestTree(items[i]);
			if (dest != this) {
				dest.insert(items[i]);
				this._remove(items[i]);
				i--;
			}
		}
	};

	_pGraphicsQuadTreeNode.getDestTree = function (item) {
		var destTree = this;
		var nodes = this._childNodes, node, nodeBounds;
		for (var i = 0, len = nodes.length; i < len; i++) {
			node = nodes[i];
			nodeBounds = node._bounds;
			if (nodeBounds.containsRect(item._getBoundRect())) {
				destTree = node;
				return destTree;
			}
		}
		return destTree;
	};

	_pGraphicsQuadTreeNode.move = function (item) {
		if (item._qOwner != null) {
			item._qOwner.relocate(item);
		}
		else {
			this.relocate(item);
		}
	};

	_pGraphicsQuadTreeNode._getTopForm = function () {
		if (this._topForm == null) {
			var p = this;
			while (p.Parent) {
				p = p.Parent;
			}
			this._topForm = p._topForm;
		}
		return this._topForm;
	};

	delete _pGraphicsQuadTreeNode;
}

if (!nexacro._GraphicsRectsManager) {
	nexacro._GraphicsRectsManager = function () {
		var argLens = arguments.length;
		if (argLens >= 1) {
			var arg0 = arguments[0];
			if (nexacro._isArray(arg0)) {
				if (argLens == 3) {
					this._rects = arg0.slice(arguments[1], arguments[1] + arguments[2] - 1);
				}
				else {
					this._rects = arg0.slice(0);
				}
				this._rects.sort(this._compare);
			}
			else if (arg0 instanceof nexacro.Rect) {
				this._rects = [arg0];
			}
			else if (arg0 instanceof nexacro._GraphicsRectsManager) {
				this._rects = arg0._rects.slice(0);
				this._rects.sort(this._compare);
			}
		}
		else {
			this._rects = [];
		}
	};

	var _pGraphicsRectsManager = nexacro._createPrototype(nexacro.Object, nexacro._GraphicsRectsManager);
	nexacro._GraphicsRectsManager.prototype = _pGraphicsRectsManager;

	_pGraphicsRectsManager.clear = function () {
		this._rects = [];
		this._bounds = null;
	};

	_pGraphicsRectsManager._compare = function (a, b) {
		return a.x - b.x;
	};

	_pGraphicsRectsManager._debug = function () {
		var rects = this._rects, size = rects.length;
		console.log("nexacro._GraphicsRectsManager: ", "size: ", size);
		console.log("bounds: ", this.getBoundRect());
		for (var i = 0; i < size; i++) {
			console.log(rects[i].toString());
		}
	};

	_pGraphicsRectsManager.getBoundRect = function () {
		var bounds = this._bounds;
		if (!bounds) {
			var rects = this._rects, len = rects.length, r;
			if (len) {
				bounds = rects[0].clone();
				for (var i = 1; i < len; i++) {
					r = rects[i];
					if (r.left < bounds.left) {
						bounds.width = bounds.left + bounds.width - r.left;
						bounds.left = r.left;
					}
					if (r.top < bounds.top) {
						bounds.height = bounds.top + bounds.height - r.top;
						bounds.top = r.top;
					}
					if (r.left + r.width > bounds.left + bounds.width) {
						bounds.width = r.left + r.width - bounds.left;
					}
					if (r.top + r.height > bounds.top + bounds.height) {
						bounds.height = r.top + r.height - bounds.top;
					}
				}
				this._bounds = bounds;
			}
		}
		return bounds;
	};

	_pGraphicsRectsManager.add = function (rect) {
		this._add(rect, 0, this._rects.length - 1);
	};

	_pGraphicsRectsManager._add = function (rect, l, r) {
		var idx = l, rects = this._rects, size = rects.length;
		while (l <= r) {
			idx = (l + r) >>> 1;
			while ((rects[idx] == null) && (idx < r)) {
				idx++;
			}
			if (rects[idx] == null) {
				r = (l + r) >>> 1;
				idx = (l + r) >>> 1;
				if (l > r) {
					idx = l;
				}
				while ((rects[idx] == null) && (idx > l)) {
					idx--;
				}
				if (rects[idx] == null) {
					rects[idx] = rect;
					return;
				}
			}
			if (rect.left == rects[idx].left) {
				break;
			}
			if (rect.left < rects[idx].left) {
				if (idx == 0) {
					break;
				}
				if ((rects[idx - 1] != null) && (rect.left >= rects[idx - 1].left)) {
					break;
				}
				r = idx - 1;
			}
			else {
				if (idx == size - 1) {
					idx++;
					break;
				}
				if ((rects[idx + 1] != null) && (rect.left <= rects[idx + 1].left)) {
					idx++;
					break;
				}
				l = idx + 1;
			}
		}
		if (idx < size) {
			rects.splice(idx, 0, rect);
		}
		else {
			rects[idx] = rect;
		}
		this._bounds = null;
	};

	_pGraphicsRectsManager._addOrSkipWhenInclude = function (rect, l, r) {
		var idx = l, rects = this._rects, size = rects.length;
		while (l <= r) {
			idx = (l + r) >>> 1;
			while ((rects[idx] == null) && (idx < r)) {
				idx++;
			}
			if (rects[idx] == null) {
				r = (l + r) >>> 1;
				idx = (l + r) >>> 1;
				if (l > r) {
					idx = l;
				}
				while ((rects[idx] == null) && (idx > l)) {
					idx--;
				}
				if (rects[idx] == null) {
					rects[idx] = rect;
					return;
				}
			}
			if (rect.left == rects[idx].left) {
				break;
			}
			if (rect.left < rects[idx].left) {
				if (idx == 0) {
					break;
				}
				if ((rects[idx - 1] != null) && (rect.left >= rects[idx - 1].left)) {
					break;
				}
				r = idx - 1;
			}
			else {
				if (idx == size - 1) {
					idx++;
					break;
				}
				if ((rects[idx + 1] != null) && (rect.left <= rects[idx + 1].left)) {
					idx++;
					break;
				}
				l = idx + 1;
			}
		}
		if (idx < size) {
			rects.splice(idx, 0, rect);
		}
		else {
			rects[idx] = rect;
		}
		this._bounds = null;
	};

	_pGraphicsRectsManager.contains = function (rect) {
		var l = 0, i = 0, rects = this._rects, size = rects.length, r = size - 1, idx = 0;
		while (l <= r) {
			idx = (l + r) >>> 1;
			if (rect.left == rects[idx].left) {
				break;
			}
			if (rect.left < rects[idx].left) {
				if (idx == 0) {
					break;
				}
				if (rect.left >= rects[idx - 1].left) {
					break;
				}
				r = idx - 1;
			}
			else {
				if (idx == size - 1) {
					idx++;
					break;
				}
				if (rect.left <= rects[idx + 1].left) {
					idx++;
					break;
				}
				l = idx + 1;
			}
		}

		if (rects[idx].left != rect.left) {
			return false;
		}

		for (i = idx; i >= 0; i--) {
			if (rects[idx].equals(rect)) {
				return true;
			}
			if (rects[idx].left != rect.left) {
				break;
			}
		}

		for (i = idx + 1; i < size; i++) {
			if (rects[idx].equals(rect)) {
				return true;
			}
			if (rects[idx].left != rect.left) {
				break;
			}
		}

		return false;
	};

	_pGraphicsRectsManager.containsAll = function (arr) {
		if (!(arr instanceof nexacro._GraphicsRectsManager)) {
			arr = new nexacro._GraphicsRectsManager(arr);
		}
		return this._containsAll(arr);
	};

	_pGraphicsRectsManager._containsAll = function (rectMgr) {
		var x, xChange = 0, rects = this._rects, size = rects.length, argRects = rectMgr._rects, argSize = argRects.length;
		for (var j = 0, i = 0; j < argSize; j++) {
			i = xChange;
			while (rects[i].left < argRects[j].left) {
				i++;
				if (i == size) {
					return false;
				}
			}
			xChange = i;
			x = rects[i].left;
			while (!argRects[j].equals(rects[i])) {
				i++;
				if (i == size) {
					return false;
				}
				if (x != rects[i].left) {
					return false;
				}
			}
		}
		return true;
	};

	_pGraphicsRectsManager.remove = function (rect) {
		var l = 0, i = 0, rects = this._rects, size = rects.length, r = size - 1, arrayCopy = nexacro._GraphicsLib.arrCopy, idx = 0;

		while (l <= r) {
			idx = (l + r) >>> 1;
			if (rect.left == rects[idx].left) {
				break;
			}
			if (rect.left < rects[idx].left) {
				if (idx == 0) {
					break;
				}
				if (rect.left >= rects[idx - 1].left) {
					break;
				}
				r = idx - 1;
			}
			else {
				if (idx == size - 1) {
					idx++;
					break;
				}
				if (rect.left <= rects[idx + 1].left) {
					idx++;
					break;
				}
				l = idx + 1;
			}
		}

		if (rects[idx].left != rect.left) {
			return false;
		}

		for (i = idx; i >= 0; i--) {
			if (rects[idx].equals(rect)) {
				arrayCopy(rects, idx + 1, rects, idx, size - idx);
				rects.length = size - 1;
				this._bounds = null;
				return true;
			}
			if (rects[idx].left != rect.left) {
				break;
			}
		}

		for (i = idx + 1; i < size; i++) {
			if (rects[idx].equals(rect)) {
				arrayCopy(rects, idx + 1, rects, idx, size - idx);
				rects.length = size - 1;
				this._bounds = null;
				return true;
			}
			if (rects[idx].left != rect.left) {
				break;
			}
		}

		return false;
	};

	_pGraphicsRectsManager.removeAll = function (arr) {
		if (!(arr instanceof nexacro._GraphicsRectsManager)) {
			arr = new nexacro._GraphicsRectsManager(arr);
		}
		return this._removeAll(arr);
	};

	_pGraphicsRectsManager._removeAll = function (rectsMgr) {
		var x, xChange = 0, rects = this._rects, size = rects.length, argRects = rectsMgr, i = 0, j, argSize = argRects.length;
		var ret = false;

		for (j = 0; j < argSize; j++) {
			i = xChange;
			while ((rects[i] == null) || (rects[i].left < argRects[j].left)) {
				i++;
				if (i == size) {
					break;
				}
			}

			if (i == size) {
				break;
			}

			xChange = i;
			x = rects[i].left;
			while (true) {
				if (rects[i] == null) {
					i++;
					if (i == size) {
						break;
					}
					continue;
				}
				if (argRects[j].equals(rects[i])) {
					rects[i] = null;
					ret = true;
				}
				i++;
				if (i == size) {
					break;
				}
				if (x != rects[i].left) {
					break;
				}
			}
		}

		if (ret) {
			j = 0;
			i = 0;
			while (i < size) {
				if (rects[i] != null) {
					rects[j++] = rects[i];
				}
				i++;
			}
			rects.length = j;
			this._bounds = null;
		}
		return ret;
	};

	_pGraphicsRectsManager.retainAll = function (arr) {
		if (!(arr instanceof nexacro._GraphicsRectsManager)) {
			arr = new nexacro._GraphicsRectsManager(arr);
		}
		return this._retainAll(arr);
	};

	_pGraphicsRectsManager._retainAll = function (rectsMgr) {
		var x, xChange = 0, rects = this._rects, size = rects.length, argRects = rectsMgr._rects, i = 0, j, argSize = argRects.length;
		var ret = false;

		for (j = 0; j < size; j++) {
			i = xChange;
			while (argRects[i].left < rects[j].left) {
				i++;
				if (i == argSize) {
					break;
				}
			}
			if (i == argSize) {
				ret = true;

				for (var k = j; k < size; k++) {
					rects[k] = null;
				}
				size = j;
				rects.length = j;
				break;
			}
			xChange = i;
			x = argRects[i].left;
			while (true) {
				if (rects[j].equals(argRects[i])) {
					break;
				}
				i++;
				if ((i == argSize) || (x != argRects[i].left)) {
					rects[j] = null;
					ret = true;
					break;
				}
			}
		}

		if (ret) {
			j = 0;
			i = 0;
			while (i < size) {
				if (rects[i] != null) {
					rects[j++] = rects[i];
				}
				i++;
			}
			rects.length = j;
			this._bounds = null;
		}
		return ret;
	};

	_pGraphicsRectsManager.append = function (rectsMgr) {
		var argRects = rectsMgr._rects, argSize = argRects.length;
		if (argSize == 0) {
			return;
		}

		var rects = this._rects, dst = rects, size = rects.length, arrayCopy = nexacro._GraphicsLib.arrCopy;

		if (size == 0) {
			this._rects = argRects.slice(0);
			this._bounds = null;
			return;
		}

		if (rects.length < (size + argSize)) {
			dst = new Array(size + argSize);
		}

		var src1 = argRects, src1Sz = argSize, src1I = src1Sz - 1;

		var src2 = rects, src2Sz = size, src2I = src2Sz - 1;

		var dstI = size + argSize - 1;
		var x1 = src1[src1I].left;
		var x2 = src2[src2I].left;

		while (dstI >= 0) {
			if (x1 <= x2) {
				dst[dstI] = src2[src2I];
				if (src2I == 0) {
					arrayCopy(src1, 0, dst, 0, src1I + 1);
					break;
				}
				src2I--;
				x2 = src2[src2I].left;
			}
			else {
				dst[dstI] = src1[src1I];
				if (src1I == 0) {
					arrayCopy(src2, 0, dst, 0, src2I + 1);
					break;
				}
				src1I--;
				x1 = src1[src1I].left;
			}
			dstI--;
		}
		this._rects = dst;
		this._bounds = null;
	};

	_pGraphicsRectsManager.mergeRects = function (overhead, lineOverhead) {
		var rects = this._rects, i, j = 0, size = rects.length;

		if (size == 0) {
			return;
		}

		var r, cr;
		var cost1, cost2, cost3;
		var splits = new Array(4);

		for (i = 0; i < size; i++) {
			r = rects[i];
			if (r == null) {
				continue;
			}
			cost1 = (overhead + (r.height *  lineOverhead) + (r.height *  r.width));
			do {
				var maxX = r.left + r.width + overhead / r.height;
				for (j = i + 1; j < size; j++) {
					cr = rects[j];
					if ((cr == null) || (cr == r)) {
						continue;
					}
					if (cr.left >= maxX) {
						j = size;
						break;
					}
					cost2 = (overhead + (cr.height *  lineOverhead) + (cr.height *  cr.width));
					var mr = r.union(cr);
					cost3 = (overhead + (mr.height *  lineOverhead) + (mr.height *  mr.width));
					if (cost3 <= cost1 + cost2) {
						r = rects[i] = mr;
						rects[j] = null;
						cost1 = cost3;
						j = -1;
						break;
					}

					if (!r.intersectRect(cr)) {
						continue;
					}

					this.splitRect(cr, r, splits);
					var splitCost = 0;
					var l = 0;
					for (var k = 0; k < 4; k++) {
						if (splits[k] != null) {
							var sr = splits[k];

							if (k < 3) {
								splits[l++] = sr;
							}
							splitCost += (overhead + (sr.height *  lineOverhead) + (sr.height *  sr.width));
						}
					}
					if (splitCost >= cost2) {
						continue;
					}

					if (l == 0) {
						rects[j] = null;
						if (splits[3] != null) {
							this._add(splits[3], j, size - 1);
							size = rects.length;
						}
						continue;
					}

					rects[j] = splits[0];
					if (l > 1) {
						this.insertRects(splits, 1, j + 1, l - 1);
						size = rects.length;
					}
					if (splits[3] != null) {
						this._add(splits[3], j, size - 1);
						size = rects.length;
					}
				}
			} while (j != size);
		}

		j = 0;
		i = 0;
		var area = 0;
		while (i < size) {
			if (rects[i] != null) {
				r = rects[i];
				rects[j++] = r;
				area += overhead + (r.height *  lineOverhead) + (r.height *  r.width);
			}
			i++;
		}
		rects.length = j;
		this._bounds = null;
		r = this.getBoundRect();
		if (r == null) {
			return;
		}
		if (overhead + (r.height *  lineOverhead) + (r.height *  r.width) < area) {
			rects[0] = r;
			rects.length = 1;
		}
	};

	_pGraphicsRectsManager.subtract = function (rectsMgr, overhead, lineOverhead) {
		var r, i, j = 0, k = 0, sr;
		var cost;
		var jMin = 0;
		var splits = new Array(4);
		var rects = this._rects, size = rects.length, argRects = rectsMgr._rects, argSize = argRects.length;

		for (i = 0; i < size; i++) {
			r = rects[i];
			cost = (overhead + (r.height *  lineOverhead) + (r.height *  r.width));

			for (j = jMin; j < argSize; j++) {
				sr = argRects[j];

				if (sr.left + sr.width < r.left) {
					if (j == jMin) {
						jMin++;
					}
					continue;
				}

				if (sr.left > r.left + r.width) {
					break;
				}

				if (!r.intersectRect(sr)) {
					continue;
				}

				this.splitRect(r, sr, splits);

				var splitCost = 0;
				var tmpR;
				for (k = 0; k < 4; k++) {
					tmpR = splits[k];
					if (tmpR != null) {
						splitCost += (overhead + (tmpR.height *  lineOverhead) + (tmpR.height *  tmpR.width));
					}
				}

				if (splitCost >= cost) {
					continue;
				}

				var l = 0;
				for (k = 0; k < 3; k++) {
					if (splits[k] != null) {
						splits[l++] = splits[k];
					}
				}

				if (l == 0) {
					rects[i].width = 0;
					if (splits[3] != null) {
						this._add(splits[3], i, size - 1);
						size = rects.length;
					}
					break;
				}

				r = splits[0];
				rects[i] = r;
				cost = (overhead + (r.height *  lineOverhead) + (r.height *  r.width));

				if (l > 1) {
					this.insertRects(splits, 1, i + 1, l - 1);
					size = rects.length;
				}

				if (splits[3] != null) {
					this._add(splits[3], i + l, size - 1);
					size = rects.length;
				}
			}
		}

		j = 0;
		i = 0;
		while (i < size) {
			if (rects[i].width == 0) {
				rects[i] = null;
			}
			else {
				rects[j++] = rects[i];
			}
			i++;
		}
		rects.length = j;
		this._bounds = null;
	};

	_pGraphicsRectsManager.splitRect = function (r, sr, splits) {
		var rx0 = r.left;
		var rx1 = rx0 + r.width - 1;
		var ry0 = r.top;
		var ry1 = ry0 + r.height - 1;

		var srx0 = sr.left;
		var srx1 = srx0 + sr.width - 1;
		var sry0 = sr.top;
		var sry1 = sry0 + sr.height - 1;

		if ((ry0 < sry0) && (ry1 >= sry0)) {
			splits[0] = new nexacro.Rect(rx0, ry0, r.width, sry0 - ry0);
			ry0 = sry0;
		}
		else {
			splits[0] = null;
		}

		if ((ry0 <= sry1) && (ry1 > sry1)) {
			splits[1] = new nexacro.Rect(rx0, sry1 + 1, r.width, ry1 - sry1);
			ry1 = sry1;
		}
		else {
			splits[1] = null;
		}

		if ((rx0 < srx0) && (rx1 >= srx0)) {
			splits[2] = new nexacro.Rect(rx0, ry0, srx0 - rx0, ry1 - ry0 + 1);
		}
		else {
			splits[2] = null;
		}

		if ((rx0 <= srx1) && (rx1 > srx1)) {
			splits[3] = new nexacro.Rect(srx1 + 1, ry0, rx1 - srx1, ry1 - ry0 + 1);
		}
		else {
			splits[3] = null;
		}
	};

	_pGraphicsRectsManager.insertRects = function (rects, srcPos, dstPos, len) {
		if (len == 0) {
			return;
		}

		var innerRects = this._rects, size = innerRects.length;
		innerRects.length = (size + len);

		for (var i = size - 1; i >= dstPos; i--) {
			innerRects[i + len] = innerRects[i];
		}

		nexacro._GraphicsLib.arrCopy(rects, srcPos, innerRects, dstPos, len);
	};

	_pGraphicsRectsManager.Each = function (fn, scope) {
		var rects = this._rects, size = rects.length;

		scope = scope || this;
		for (var i = 0; i < size; i++) {
			fn.call(scope, rects[i]);
		}
	};

	delete _pGraphicsRectsManager;
}

if (!nexacro._GraphicsSize) {
	nexacro._GraphicsSize = function (w, h) {
		var type = typeof w;
		var htype = typeof h;

		if (type == 'string') {
			w = +w;
		}
		if (htype == 'string') {
			h = +h;
		}
		if (type == 'number') {
			var hasHeight = typeof h === 'number';
			this.width = w;
			this.height = hasHeight ? h : w;
			this.__readArgs = hasHeight ? 2 : 1;
		}
		else if (type == 'undefined' || w === null) {
			this.width = this.height = 0;
			this.__readArgs = w === null ? 1 : 0;
		}
		else {
			if (nexacro._isArray(w)) {
				this.width = w[0];
				this.height = w.length > 1 ? w[1] : w[0];
				this.__readArgs = 1;
			}
			else if (w.width != null) {
				this.width = w.width;
				this.height = w.height;
				this.__readArgs = 1;
			}
			else if (w.x != null) {
				this.width = w.x;
				this.height = w.y;
				this.__readArgs = 1;
			}
			else {
				this.width = this.height = 0;
				this.__readArgs = 0;
			}
		}
	};

	var _pGraphicsSize = nexacro._createPrototype(nexacro.Object, nexacro._GraphicsSize);
	nexacro._GraphicsSize.prototype = _pGraphicsSize;

	nexacro._GraphicsSize.min = function () {
		var sz1 = new this(arguments[0], arguments[1]);
		var readargs = sz1.__readArgs;
		var sz2 = new this(arguments[readargs], arguments[readargs + 1]);
		return new this(Math.min(sz1.width, sz2.width), Math.min(sz1.height, sz2.height)
		);
	};

	nexacro._GraphicsSize.max = function () {
		var sz1 = new this(arguments[0], arguments[1]);
		var readargs = sz1.__readArgs;
		var sz2 = new this(arguments[readargs], arguments[readargs + 1]);
		return new this(Math.max(sz1.width, sz2.width), Math.max(sz1.height, sz2.height)
		);
	};

	nexacro._GraphicsSize.random = function () {
		var bytes = new Uint8Array(10);
		window.crypto.getRandomValues(bytes);
		window.crypto.getRandomValues(bytes2);
		return new this(bytes, bytes2);
	};

	_pGraphicsSize.width = 0;
	_pGraphicsSize.height = 0;

	_pGraphicsSize.set_width = function (v) {
		if (isNumber(v) && this.width != v) {
			this.width = v;
		}
	};

	_pGraphicsSize.set_height = function (v) {
		if (isNumber(v) && this.height != v) {
			this.height = v;
		}
	};

	_pGraphicsSize.set = function (w, h) {
		this.set_width(w);
		this.set_height(h);
		return this;
	};

	_pGraphicsSize.equals = function (sz) {
		return sz === this || sz && (this.width === sz.width
			 && this.height === sz.height
			 || nexacro._isArray(sz) && this.width === sz[0]
			 && this.height === sz[1]) || false;
	};

	_pGraphicsSize.clone = function () {
		return new nexacro._GraphicsSize(this.width, this.height);
	};

	_pGraphicsSize.toString = function () {
		return '{ width: ' + nexacro._GraphicsLib.toStrFormatNumber(this.width)
			 + ', height: ' + nexacro._GraphicsLib.toStrFormatNumber(this.height) + ' }';
	};

	_pGraphicsSize.add = function (sz) {
		if (!(sz instanceof nexacro._GraphicsSize)) {
			sz = new nexacro._GraphicsSize(arguments[0], arguments[1]);
		}
		return new nexacro._GraphicsSize(this.width + sz.width, this.height + sz.height);
	};

	_pGraphicsSize.subtract = function (sz) {
		if (!(sz instanceof nexacro.Size)) {
			sz = new nexacro._GraphicsSize(arguments[0], arguments[1]);
		}
		return new nexacro._GraphicsSize(this.width - sz.width, this.height - sz.height);
	};

	_pGraphicsSize.multiply = function (sz) {
		if (!(sz instanceof nexacro._GraphicsSize)) {
			sz = new nexacro._GraphicsSize(arguments[0], arguments[1]);
		}
		return new nexacro._GraphicsSize(this.width *  sz.width, this.height *  sz.height);
	};

	_pGraphicsSize.divide = function (sz) {
		if (!(sz instanceof nexacro._GraphicsSize)) {
			sz = new nexacro._GraphicsSize(arguments[0], arguments[1]);
		}
		return new nexacro._GraphicsSize(this.width / sz.width, this.height / sz.height);
	};

	_pGraphicsSize.modulo = function (sz) {
		if (!(sz instanceof nexacro._GraphicsSize)) {
			sz = new nexacro._GraphicsSize(arguments[0], arguments[1]);
		}
		return new nexacro._GraphicsSize(this.width % sz.width, this.height % sz.height);
	};

	_pGraphicsSize.negate = function () {
		return new nexacro._GraphicsSize(-this.width, -this.height);
	};

	_pGraphicsSize.isZero = function () {
		return nexacro._GraphicsLib.mathIsZero(this.width) && nexacro._GraphicsLib.mathIsZero(this.height);
	};

	_pGraphicsSize.isNaN = function () {
		return isNaN(this.width) || isNaN(this.height);
	};

	_pGraphicsSize.round = function () {
		return new nexacro._GraphicsSize(Math.round(this.width), Math.round(this.height));
	};

	_pGraphicsSize.ceil = function () {
		return new nexacro._GraphicsSize(Math.ceil(this.width), Math.ceil(this.height));
	};

	_pGraphicsSize.floor = function () {
		return new nexacro._GraphicsSize(Math.floor(this.width), Math.floor(this.height));
	};

	_pGraphicsSize.abs = function () {
		return new nexacro._GraphicsSize(Math.abs(this.width), Math.abs(this.height));
	};

	delete _pGraphicsSize;
}

if (!nexacro._GraphicsObject) {
	nexacro._GraphicsObject = function (x, y) {
		nexacro._GraphicsHashMap.getHashKey("ge", this);
		this._matrix = new nexacro._GraphicsMatrix();
		this._drawflags = 0;
		this._painted = 0;
		this._style = {
		};
		var read = 0, args = arguments, argslen = args.length;
		var pt;
		if (argslen > 0) {
			if (x instanceof nexacro.Point) {
				read++;

				this._x = +x.x;
				this._y = +x.y;
				this._matrix.translate(new nexacro.Point(this._x, this._y));
				this._drawflags |= 1;
			}
			else if (argslen >= 2) {
				this._x = +x;
				this._y = +y;
				pt = new nexacro.Point(this._x, this._y);
				this._matrix.translate(pt);
				this._drawflags |= 1;
				read += 2;
			}
		}
		else {
			this._x = 0;
			this._y = 0;
		}
		this.x = this._x;
		this.y = this._y;
		this.__readArgs = read;
		this._childidx_map = new nexacro.Collection();
		this.childlength = 0;
	};

	var _pGraphicsObject = nexacro._GraphicsObject.prototype = nexacro._createPrototype(nexacro.Object, nexacro._GraphicsObject);
	_pGraphicsObject._type_name = "_GraphicsObject";

	_pGraphicsObject.id = "";
	_pGraphicsObject.strokepen = "";
	_pGraphicsObject.fillstyle = "";

	_pGraphicsObject.visible = true;
	_pGraphicsObject.opacity = 1;
	_pGraphicsObject.strokejoin = "miter";

	_pGraphicsObject.strokecap = "";
	_pGraphicsObject.miterlimit = 10;

	_pGraphicsObject._id = "";
	_pGraphicsObject._center = "";
	_pGraphicsObject._clipitems = "";
	_pGraphicsObject._nextsibling = null;
	_pGraphicsObject._previoussibling = null;
	_pGraphicsObject._firstchild = null;
	_pGraphicsObject._isfirstchild = "";
	_pGraphicsObject._nonscalingstroke = "";
	_pGraphicsObject._x = 0;
	_pGraphicsObject._y = 0;
	_pGraphicsObject.x = 0;
	_pGraphicsObject.y = 0;
	_pGraphicsObject._cx = 0;
	_pGraphicsObject._cy = 0;
	_pGraphicsObject._opacity = null;
	_pGraphicsObject._miterlimit = null;
	_pGraphicsObject._strokecap = null;
	_pGraphicsObject._strokejoin = null;



	_pGraphicsObject.set_x = function (val) {
		var newX = 0;
		if (val !== undefined) {
			if (isNaN(val)) {
				return;
			}
		}
		if (val !== "" && val != null) {
			newX = parseInt(val);
		}

		if (newX != this._x) {
			this.translate(newX - this._x, 0);
			this.x = val;
			this._x = newX;
			var pos = this.on_getCenter();
			this._cx = pos.x;
		}
	};

	_pGraphicsObject.set_y = function (val) {
		var newY = 0;
		if (val !== undefined) {
			if (isNaN(val)) {
				return;
			}
		}
		if (val !== "" && val != null) {
			newY = parseInt(val);
		}

		if (newY != this._y) {
			this.translate(0, newY - this._y);
			this.y = val;
			this._y = newY;
			var pos = this.on_getCenter();
			this._cy = pos.y;
		}
	};
	_pGraphicsObject.set_strokepen = function (val) {
		var s = this._style, oldval = this.strokepen, oldobj, newobj;

		if (oldval != val) {
			this.strokepen = val;
			oldobj = s.strokepen;

			if (val) {
				if (oldobj == null || oldobj.value != val) {
					newobj = nexacro.BorderLineObject(val);
					s.strokepen = newobj;
				}
			}
			else {
				if (oldobj) {
					s.strokepen = null;
				}
			}

			this._drawflags |= 8;
			if (newobj) {
				var lineW = newobj._width || 0;
				if (this._strokewidth != lineW) {
					this._drawflags |= 4;
					this._strokewidth = lineW;
					if (lineW == 1 && newobj.style == "dotted") {
						this._isOddStrokeWidth = true;
					}
					else {
						this._isOddStrokeWidth = false;
					}
					this._bounds = null;
					this._globalBounds = null;
				}
			}
			else {
				if (this._strokewidth != 0) {
					this._strokewidth = 0;
					this._isOddStrokeWidth = false;
				}
			}
			this._changedStrokepen = true;
		}
	};

	_pGraphicsObject.set_fillstyle = function (val) {
		var s = this._style, oldval = this.fillstyle, oldobj, newobj;


		if (oldval != val) {
			this._isGradation = false;
			this.fillstyle = val;
			oldobj = s.fillstyle;

			if (val) {
				if (oldobj == null || oldobj.value != val) {
					if (val instanceof nexacro._CanvasFillPattern) {
						s.fillstyle = val;
					}
					else {
						newobj = nexacro.BackgroundObject(val, this);
						s.fillstyle = newobj;
					}
				}
			}
			else {
				if (oldobj) {
					s.fillstyle = null;
				}
			}

			this._drawflags |= 8;
			this._changedFillstyle = true;

			if (newobj && newobj.gradient) {
				newobj.gradient._parseInfo(newobj.value);
				this._isGradation = true;
			}
		}
	};

	_pGraphicsObject.set_strokejoin = function (val) {
		var s = this._style, oldval = this.strokejoin;


		var join_enum = ["miter", "bevel", "round"];
		if (join_enum.indexOf(val) == -1) {
			return;
		}

		if (oldval != val) {
			this.strokejoin = val;
			this._strokejoin = val;
			s.strokejoin = val;
			this._drawflags |= 4;
			this._drawflags |= 8;
			this._bounds = null;
			this._globalBounds = null;
			this._changedStrokejoin = true;
		}
	};

	_pGraphicsObject.set_strokecap = function (val) {
		var s = this._style, oldval = this.strokecap;


		var cap_enum = ["butt", "round", "square"];
		if (cap_enum.indexOf(val) == -1) {
			return;
		}

		if (oldval != val) {
			this.strokecap = val;
			this._strokecap = val;
			s.strokecap = val;

			this._drawflags |= 4;
			this._drawflags |= 8;
			this._bounds = null;
			this._globalBounds = null;
			this._changedStrokecap = true;
		}
	};

	_pGraphicsObject.set_miterlimit = function (val) {
		var s = this._style, oldval = this.miterlimit;
		if (val !== undefined) {
			if (isNaN(val) || val < 0) {
				return;
			}
		}

		if (val != oldval) {
			this.miterlimit = val;
			this._miterlimit = val;
			s.miterlimit = val;
			this._drawflags |= 4;
			this._drawflags |= 8;
			this._bounds = null;
			this._globalBounds = null;
			this._changedMiterlimit = true;
		}
	};

	_pGraphicsObject.set_visible = function (v) {
		if (v == null) {
			v = true;
		}

		v = nexacro._toBoolean(v);

		if (v !== this.visible) {
			this.visible = v;
			var p = this._parent;
			if (p) {
				p._drawflags |= 4;
			}
		}
	};


	_pGraphicsObject.set_opacity = function (val) {
		var s = this._style;

		this.opacity = val;
		if (0 === val || val) {
			if (this._opacity == null || this._opacity.value != val) {
				var opacity = nexacro.OpacityObject(val);
				this._opacity = opacity;
				s.opacity = opacity;
			}
		}
		else {
			if (this._opacity) {
				this._opacity = null;
				s.opacity = null;
			}
		}
	};




	_pGraphicsObject.setClipRect = function (x, y, width, height) {
		var argLen = arguments.length;
		if (argLen == 1 && arguments[0] == null) {
			this._clipitems = [];
			return;
		}


		var rect = new nexacro.Rect(x, y, width, height);

		this._clipitems = [];
		this._clipitems.push(rect);
	};

	_pGraphicsObject.getNextSibling = function () {
		return this._nextsibling;
	};

	_pGraphicsObject.getPreviousSibling = function () {
		return this._isfirstchild ? null : this._previoussibling;
	};
	_pGraphicsObject.getObjects = nexacro._emptyFn;
	_pGraphicsObject.getFirstChild = nexacro._emptyFn;
	_pGraphicsObject.getLastChild = nexacro._emptyFn;
	_pGraphicsObject.insertChild = nexacro._emptyFn;
	_pGraphicsObject.addChild = nexacro._emptyFn;
	_pGraphicsObject.removeChild = nexacro._emptyFn;
	_pGraphicsObject.indexOf = nexacro._emptyFn;
	_pGraphicsObject.clear = nexacro._emptyFn;
	_pGraphicsObject.getObjectByID = nexacro._emptyFn;



	_pGraphicsObject._getBoundRect = function (bCopy, iscurrent) {
		var bounds = this._bounds;
		if (iscurrent) {
			bounds = null;
		}
		if (bounds) {
			return bounds;
		}
		var rect = this.on_getRect(true, iscurrent);
		if (rect) {
			bounds = this._matrix._transformBounds(rect, null, this.id);
			if (!iscurrent) {
				this._bounds = bounds;
			}
		}
		if (bounds) {
			if (bCopy) {
				return bounds.clone();
			}
			else {
				return bounds;
			}
		}
	};

	_pGraphicsObject.translate = function (x, y) {
		if (arguments.length != 2) {
			return;
		}
		var pt = new nexacro.Point(+x, +y);

		var m = new nexacro._GraphicsMatrix();

		m.translate(pt);
		return this._transform(m);
	};

	_pGraphicsObject.setTransform = function (v) {
		if (nexacro._isString(v)) {
			this._toTransform(v);
		}
		else {
			if (v == null) {
				v = new nexacro._GraphicsMatrix();
				var pt = new nexacro.Point(this._x, this._y);
				v.translate(pt.x, pt.y);
				this._matrix.reset();
				this._matrix.constructor(v);
				this._drawflags |= 1;
			}
		}
	};

	_pGraphicsObject._toTransform = function (str) {
		var attrs = {
		};
		var arg1, arg2;
		if (str) {
			for (var i in str = str.match(/(\w+\((\-?\d+\.?\d*,?|(\s+?))+\))+/g)) {
				if (str[i].match) {
					var c = str[i].match(/[\w\.\-]+/g);
					attrs[c.shift()] = c;
				}
			}
		}
		var m = new nexacro._GraphicsMatrix(), val, shearX, shearY;
		for (var cmd in attrs) {
			val = attrs[cmd];
			switch (cmd) {
				case "translate":
					if (val.length == 1) {
						arg1 = new nexacro.Point(parseFloat(val[0]), 0);
						m.translate(arg1);
					}
					else {
						arg1 = new nexacro.Point(parseFloat(val[0]), parseFloat(val[1]));
						m.translate(arg1);
					}
					break;
				case "rotate":
					if (val.length == 1) {
						m.rotate(parseFloat(val[0]));
					}
					else {
						arg1 = new nexacro.Point(parseFloat(val[1]), parseFloat(val[2]));
						m.rotate(parseFloat(val[0]), arg1);
					}
					break;
				case "scale":
					if (val.length == 2) {
						arg1 = new nexacro.Point(parseFloat(val[0]), parseFloat(val[1]));
						m.scale(arg1);
					}
					else {
						arg1 = new nexacro.Point(parseFloat(val[0]), parseFloat(val[1]));
						arg2 = new nexacro.Point(parseFloat(val[2]), parseFloat(val[3]));
						m.scale(arg1, arg2);
					}
					break;
				case "shear":
					if (val.length == 2) {
						arg1 = new nexacro.Point(parseFloat(val[0]), parseFloat(val[1]));
						m.shear(arg1);
					}
					else {
						arg1 = new nexacro.Point(parseFloat(val[0]), parseFloat(val[1]));
						arg2 = new nexacro.Point(parseFloat(val[2]), parseFloat(val[3]));
						m.shear(arg1, arg2);
					}
					break;
				case "matrix":
					m.set(parseFloat(val[0]), parseFloat(val[2]), parseFloat(val[1]), parseFloat(val[3]), parseFloat(val[4]), parseFloat(val[5]));
					break;
				case "skew":
					if (val.length == 1) {
						shearX = shearY = Math.tan(parseFloat(val[0]) *  nexacro._GraphicsMatrix.DEGTORAD);
					}
					else {
						shearX = Math.tan(parseFloat(val[0]) *  nexacro._GraphicsMatrix.DEGTORAD);
						shearY = Math.tan(parseFloat(val[1]) *  nexacro._GraphicsMatrix.DEGTORAD);
					}
					break;
			}
		}
		if (shearX != 0 || shearY != 0) {
			m.shear(shearX || 0, shearY || 0);
		}
		if (this._type) {
			m.translate(this._x + (this._dx || 0), this._y + (this._dy || 0));

			this._matrix.constructor(m);
			this._drawflags |= 1;
		}
		return m;
	};
	_pGraphicsObject.toString = function () {
		return "[object " + this._type_name + "]";
	};
	_pGraphicsObject._toHashString = function () {
		return this._type_name + "#" + (this.id ? this.id + "(" + this._hashKey + ")" : this._hashKey);
	};


	_pGraphicsObject.getBoundRect = function () {
		var bounds = null;

		var rect = this.on_getRect(true, true);
		if (rect) {
			var elems = [this], p = this._parent, pLayerCls = nexacro._GraphicsLayer, m;
			while (p) {
				elems.unshift(p);
				if (p instanceof pLayerCls) {
					break;
				}
				if (p instanceof pLayerCls) {
					p = p.parent;
				}
				else {
					p = p._parent;
				}
			}
			for (var i = 0, len = elems.length; i < len; i++) {
				if (i == 0) {
					if (elems[i] instanceof pLayerCls) {
						m = (elems[i]._matrix ? (elems[i].parent._matrix.clone()).concatenate(elems[i]._matrix) : elems[i].parent._matrix.clone());
					}
					else {
						m = elems[i]._matrix.clone();
					}
				}
				else {
					m = (m.clone()).concatenate(elems[i]._matrix);
				}
			}
			if (m) {
				bounds = m._transformBounds(rect, null, this.id);
			}
		}
		if (bounds) {
			return bounds.clone();
		}
	};
	_pGraphicsObject.getOffsetBoundRect = function () {
		var bounds = null;

		var rect = this.on_getRect(true, true);
		if (rect) {
			bounds = this._matrix._transformBounds(rect, null, this.id);
		}
		if (bounds) {
			return bounds.clone();
		}
	};
	_pGraphicsObject.getRect = function () {
		var bounds = null;

		var rect = this.on_getRect(false, true);
		if (rect) {
			var elems = [this], p = this._parent, pLayerCls = nexacro._GraphicsLayer, m;
			while (p) {
				elems.unshift(p);
				if (p instanceof pLayerCls) {
					break;
				}
				if (p instanceof pLayerCls) {
					p = p.parent;
				}
				else {
					p = p._parent;
				}
			}
			for (var i = 0, len = elems.length; i < len; i++) {
				if (i == 0) {
					if (elems[i] instanceof pLayerCls) {
						m = (elems[i]._matrix ? (elems[i].parent._matrix.clone()).concatenate(elems[i]._matrix) : elems[i].parent._matrix.clone());
					}
					else {
						m = elems[i]._matrix.clone();
					}
				}
				else {
					m = (m.clone()).concatenate(elems[i]._matrix);
				}
			}
			if (m) {
				bounds = m._transformBounds(rect, null, this.id);
			}
		}
		if (bounds) {
			return bounds.clone();
		}
	};
	_pGraphicsObject.getOffsetRect = function () {
		var bounds = null;

		var rect = this.on_getRect(false, true);
		if (rect) {
			bounds = this._matrix._transformBounds(rect, null, this.id);
		}
		if (bounds) {
			return bounds.clone();
		}
	};
	_pGraphicsObject.getRegion = function () {
		var boundrect = this.getBoundRect();
		var rect = this.getRect();


		if (rect && boundrect) {
			var leftshift = rect.left - boundrect.left;
			var topshift = rect.top - boundrect.top;
			var rightshift = boundrect.right - rect.right;
			var bottomshift = boundrect.bottom - rect.bottom;
			return new nexacro.Rect(rect.left + leftshift, rect.top + topshift, rect.width - (leftshift + rightshift), rect.height - (topshift + bottomshift));
		}
		else {
			return new nexacro.Rect();
		}
	};
	_pGraphicsObject.getOffsetRegion = function () {
		var boundrect = this.getOffsetBoundRect();
		var rect = this.getOffsetRect();


		if (rect && boundrect) {
			var leftshift = rect.left - boundrect.left;
			var topshift = rect.top - boundrect.top;
			var rightshift = boundrect.right - rect.right;
			var bottomshift = boundrect.bottom - rect.bottom;
			return new nexacro.Rect(rect.left + leftshift, rect.top + topshift, rect.width - (leftshift + rightshift), rect.height - (topshift + bottomshift));
		}
		else {
			return new nexacro.Rect();
		}
	};
	_pGraphicsObject._getGlobalBoundRect = function (bCopy, iscurrent) {
		var bounds = this._globalBounds;
		if (iscurrent) {
			bounds = null;
		}
		if (bounds) {
			if (bCopy) {
				return bounds.clone();
			}
			else {
				return bounds;
			}
		}

		var rect = this.on_getRect(true, iscurrent);
		if (rect) {
			if (iscurrent) {
				var elems = [this], p = this._parent, pLayerCls = nexacro._GraphicsLayer, m;
				while (p) {
					elems.unshift(p);
					if (p instanceof pLayerCls) {
						break;
					}

					p = p._parent;
				}
				for (var i = 0, len = elems.length; i < len; i++) {
					if (i == 0) {
						if (elems[i] instanceof pLayerCls) {
							m = (elems[i]._matrix ? (elems[i].parent._matrix.clone()).concatenate(elems[i]._matrix) : elems[i].parent._matrix.clone());
						}
						else {
							m = elems[i]._matrix.clone();
						}
					}
					else {
						m = (m.clone()).concatenate(elems[i]._matrix);
					}
				}
				if (m) {
					bounds = m._transformBounds(rect, null, this.id);
				}
			}
			else {
				bounds = (this._globalMatrix || this._matrix)._transformBounds(rect, null, this.id);
				this._globalBounds = bounds;
			}
		}
		if (bounds) {
			if (bCopy) {
				return bounds.clone();
			}
			else {
				return bounds;
			}
		}
	};

	_pGraphicsObject.scale = function (x, y, cx, cy) {
		var center = null;
		if (arguments.length == 2 || arguments.length == 4) {
			var m = new nexacro._GraphicsMatrix();
			if (arguments.length == 4) {
				center = new nexacro.Point(+cx, +cy);
				this._transform(m.scale(+x, +y, center));
			}
			else {
				this._transform(m.scale(+x, +y));
			}
		}
	};


	_pGraphicsObject.rotate = function (angle, cx, cy) {
		var m = new nexacro._GraphicsMatrix();
		if (arguments.length == 3) {
			var center = new nexacro.Point(+arguments[1], +arguments[2]);
			this._transform(m.rotate(+angle, center));
		}
		else {
			this._transform(m.rotate(+angle));
		}
	};

	_pGraphicsObject.shear = function (x, y, cx, cy) {
		var center = null;
		if (arguments.length == 2 || arguments.length == 4) {
			var m = new nexacro._GraphicsMatrix();
			if (arguments.length == 4) {
				center = new nexacro.Point(+cx, +cy);
				this._transform(m.shear(+x, +y, center));
			}
			else {
				this._transform(m.shear(+x, +y));
			}
		}
	};
	_pGraphicsObject.transform = function (a, b, c, d, e, f) {
		var bounds = this._bounds, pos = this._center;
		if (arguments.length == 1 && a == null) {
			this._matrix.reset();
			this._matrix.set_translateX(this.x);
			this._matrix.set_translateY(this.y);
			this.setTransform("translate(" + 0 + "," + 0 + ")");
		}
		if (arguments.length != 6) {
			return;
		}
		var m = new nexacro._GraphicsMatrix(a, b, c, d, e, f);

		this._matrix.preConcatenate(m);

		this._drawflags |= 1;
		if (bounds && m.getRotation() % 90 === 0) {
			m._transformBounds(bounds, bounds, this.id);
			var pt = bounds.getCenterPoint();
			this._center = new nexacro.Point(pt.x, pt.y);
		}
		else if (pos) {
			this._center = m._transformPoint(pos, pos);
		}
	};
	_pGraphicsObject._transform = function (m) {
		var bounds = this._bounds, pos = this._center;

		this._matrix.preConcatenate(m);

		this._drawflags |= 1;
		if (bounds && m.getRotation() % 90 === 0) {
			m._transformBounds(bounds, bounds, this.id);
			var pt = bounds.getCenterPoint();
			this._center = new nexacro.Point(pt.x, pt.y);
		}
		else if (pos) {
			this._center = m._transformPoint(pos, pos);
		}
	};

	_pGraphicsObject.isHitTest = function (x, y) {
		var pt = new nexacro.Point(+arguments[0], +arguments[1]);
		pt = this._globalMatrix._inverseTransform(pt);
		var rect = this.on_getRect();
		if (rect) {
			return rect.containsPoint(pt);
		}
		return false;
	};

	_pGraphicsObject.on_removeParent = function () {
		var parent = this._parent;
		if (parent) {
			var re = parent.removeChild(this.id);
			if (re != this) {
				return false;
			}

			delete parent._idCache;
			delete parent._children;
			delete parent._totalItems;
		}
	};
	_pGraphicsObject.destroy = function () {
		this.on_removeParent();

		this.id = null;
		this.strokepen = null;
		this.fillstyle = null;
		this.x = null;
		this.y = null;
		this._x = null;
		this._y = null;
		this._cx = null;
		this._cy = null;
		this.visible = null;
		this.opacity = null;
		this.strokejoin = null;
		this.cursor = null;
		this.strokecap = null;
		this.miterlimit = null;

		this._id = null;
		this._center = null;
		this._clipitems = null;
		this._nextsibling = null;
		this._previoussibling = null;
		this._firstchild = null;
		this._isfirstchild = null;
		this._nonscalingstroke = null;

		this._matrix = null;
		this._drawflags = null;
		this._painted = null;
		this._type = null;
		this.__readArgs = null;
		this._childidx_map.clear();
		this._childidx_map = null;

		nexacro.Object.prototype.destroy.call(this);
		return true;
	};

	_pGraphicsObject._getItemById = function (val) {
		var elem;
		if (this._firstchild) {
			var idCache = this._idCache;
			if (!idCache || idCache._childchanged != this._childchanged) {
				idCache = {
				};
				this._idCache = idCache;
				idCache._childchanged = this._childchanged;
				elem = this._firstchild;
				for (; elem; elem = elem._nextsibling) {
					if (elem._id) {
						idCache[elem._id] = elem;
					}
				}
			}
			var res = idCache[val];
			if (!res) {
				elem = this._firstchild;
				for (; elem; elem = elem._nextsibling) {
					if (elem._firstchild) {
						res = elem._getItemById(val);
						if (res) {
							break;
						}
					}
				}
				return res;
			}
			return res;
		}
	};

	_pGraphicsObject.on_insertBefore = function (newChild, id, refChild) {
		var ret = -1;
		var idx = -1;
		var is_insert = false;
		if (id && id.length <= 0) {
			return -1;
		}
		if (!newChild) {
			throw nexacro.MakeReferenceError(this, "reference_not_define", id);
		}
		if (this._childidx_map[id]) {
			throw nexacro.MakeNativeError(this, "native_exist_id", id);
		}
		if (refChild && refChild._parent != this) {
			trace("native_notexist_parent");
			return -1;
		}
		if (!newChild.id) {
			newChild.id = newChild._id = newChild.name = id;
		}
		else {
			newChild.id = newChild._id = id;
		}

		if (refChild != null) {
			is_insert = true;
		}
		if (is_insert) {
			idx = this._childidx_map.indexOf(refChild.id);
		}
		if (newChild == refChild) {
			refChild = refChild.getNextSibling();
			idx = this._childidx_map.indexOf(refChild.id);
			this.removeChild(newChild.id);
			ret = this.insertChild(idx, id, newChild);
			return ret;
		}

		var oldparent = newChild._parent;
		if (oldparent && oldparent != this) {
			oldparent.removeChild(newChild.id);
		}

		newChild.parent = this;
		newChild._parent = this;
		if (is_insert) {
			ret = this._childidx_map.insert_item(idx, id, newChild);
		}
		else {
			ret = this._childidx_map.add_item(id, newChild);
		}



		this.childlength++;

		if (!this._firstchild) {
			this._firstchild = newChild;
			newChild._isfirstchild = true;
			newChild._previoussibling = newChild;
		}
		else {
			if (!refChild) {
				var lastChild = this._firstchild._previoussibling;
				lastChild._nextsibling = newChild;
				newChild._previoussibling = lastChild;
				this._firstchild._previoussibling = newChild;
			}
			else {
				var firstChild = this._firstchild;
				if (refChild == firstChild) {
					firstChild._isfirstchild = false;
					newChild._nextsibling = firstChild;
					newChild._previoussibling = firstChild._previoussibling;
					firstChild._previoussibling = newChild;
					this._firstchild = newChild;
					newChild._isfirstchild = true;
				}
				else {
					var prev = refChild._previoussibling;
					newChild._nextsibling = refChild;
					prev._nextsibling = newChild;
					refChild._previoussibling = newChild;
					newChild._previoussibling = prev;
				}
			}
		}
		this._childchanged++;
		newChild._drawflags |= 8;
		newChild._painted = 0;
		newChild.setTransform(null);
		this._drawflags |= 4;

		var layer = this.on_getOwnerLayer();
		if (layer) {
			layer.on_TreeChanged();
		}
		var childListCache = this._childListCache;
		if (childListCache) {
			if (childListCache.flength != -1) {
				childListCache.flength++;
			}
			if (childListCache.fchildindex != -1) {
				if (refChild && childListCache.fchild == refChild) {
					childListCache.fchild = newChild;
				}
				else {
					childListCache.fchildindex = -1;
				}
			}
		}
		return ret;
	};

	_pGraphicsObject.on_removeChild = function (oldChild) {
		var childListCache = this._childListCache;
		if (childListCache) {
			if (childListCache.flength != -1) {
				childListCache.flength--;
			}
			if (childListCache.fchildindex != -1) {
				if (childListCache.fchild == oldChild) {
					childListCache.fchildindex--;
					childListCache.fchild = oldChild.getPreviousSibling();
				}
				else {
					childListCache.fchildindex = -1;
				}
			}
		}
		if (oldChild == this._firstchild) {
			oldChild._isfirstchild = false;
			this._firstchild = oldChild._nextsibling;
			var firstChild = this._firstchild;
			if (firstChild) {
				firstChild._isfirstchild = true;
				firstChild._previoussibling = oldChild._previoussibling;
			}
		}
		else {
			var prev = oldChild._previoussibling;
			var next = oldChild._nextsibling;
			prev._nextsibling = next;
			if (!next) {
				this._firstchild._previoussibling = prev;
			}
			else {
				next._previoussibling = prev;
			}
		}


		this._childidx_map.delete_item(oldChild.id);

		this.childlength--;

		oldChild._remove(true);
		oldChild.parent = null;
		oldChild._parent = null;
		oldChild._nextsibling = null;
		oldChild._previoussibling = null;
		this._childchanged++;
		this._drawflags |= 4;

		var layer = this.on_getOwnerLayer();
		if (layer) {
			layer.on_TreeChanged();
		}
		return oldChild;
	};

	_pGraphicsObject._getStrokeWidth = function () {
		return this._strokewidth || 0;
	};

	_pGraphicsObject.on_getRect = function (bStrokeWidth, iscurrent) {
		var child = this._firstchild;
		if (!child) {
			return new nexacro.Rect();
		}
		var rect = this._rect;
		if (iscurrent) {
			rect = null;
		}
		if (!rect) {
			var x1 = Infinity, x2 = -x1, y1 = x1, y2 = x2;

			for (; child != null; child = child._nextsibling) {
				if (child.visible && !child.on_IsNotDraw()) {
					rect = child._getBoundRect(false, iscurrent);
					x1 = Math.min(rect.left, x1);
					y1 = Math.min(rect.top, y1);
					x2 = Math.max(rect.left + rect.width, x2);
					y2 = Math.max(rect.top + rect.height, y2);
				}
			}
			rect = isFinite(x1) ? new nexacro.Rect(x1, y1, x2 - x1, y2 - y1) : new nexacro.Rect();
			if (!iscurrent) {
				this._rect = rect;
			}
		}
		if (bStrokeWidth) {
			rect = rect.expand(this._getStrokeWidth() / 2);
		}
		return rect;
	};

	_pGraphicsObject._getTransform = function () {
		var m = this._matrix.clone(), xyM = new nexacro._GraphicsMatrix();

		xyM.translate(-this._x - (this._dx || 0), -this._y - (this._dy || 0));

		m.preConcatenate(xyM);

		if (m.isIdentity()) {
			return "";
		}

		var fmtNubmer = nexacro._GraphicsLib.toStrFormatNumber;
		var decomposed = m.decompose();
		if (decomposed && !decomposed.shearing) {
			var parts = [], angle = decomposed.rotation, trans = decomposed.translation, scale = decomposed.scaling;

			if (!trans.isZero()) {
				parts.push('translate(' + fmtNubmer(trans.x) + "," + fmtNubmer(trans.y) + ')');
			}
			if (!nexacro._GraphicsLib.mathIsZero(scale.x - 1) || !nexacro._GraphicsLib.mathIsZero(scale.y - 1)) {
				parts.push('scale(' + fmtNubmer(scale.x) + "," + fmtNubmer(scale.y) + ')');
			}
			if (angle) {
				parts.push('rotate(' + fmtNubmer(angle) + ')');
			}
			return parts.join(' ');
		}
		else {
			return 'matrix(' + m.getValues().join(',') + ')';
		}
	};


	_pGraphicsObject._setOldGlobalBounds = function () {
		if ((this._painted & (1 | 2 | 4)) && !this._oldGlobalBounds) {
			this._oldGlobalBounds = this._getGlobalBoundRect(true);
		}
	};

	_pGraphicsObject.on_getOwnerLayer = function () {
		var ownerLayer = this._ownerLayer;
		if (!ownerLayer) {
			var p = this._parent, pLayerCls = nexacro._GraphicsLayer;
			while (p) {
				if (p instanceof pLayerCls) {
					ownerLayer = p;
					break;
				}
				if (p instanceof pLayerCls) {
					p = p.parent;
				}
				else {
					p = p._parent;
				}
			}
			this._ownerLayer = ownerLayer;
		}
		return ownerLayer;
	};

	_pGraphicsObject.on_updateStyles = function (ctx, sizeChanged) {
		var sysstyle = this._renderstyle;
		if (!sysstyle) {
			sysstyle = {
			};
			this._renderstyle = sysstyle;
		}
		var style = this._style;
		if (this._changedStrokepen) {
			this._updateStrokePen(style.strokepen, sysstyle);
			this._changedStrokepen = false;
		}
		if (this._changedFillstyle || (sizeChanged && this._isGradation)) {
			this._updateFill(style.fillstyle, sysstyle, ctx);
			this._changedFillstyle = false;
		}

		ctx.setElementGlobalAlpha(this._globalAlpha);

		if (this._changedStrokejoin) {
			this._updateStrokeJoin(style.strokejoin, sysstyle);
			this._changedStrokejoin = false;
		}

		if (this._changedStrokecap) {
			this._updateStrokeCap(style.strokecap, sysstyle);
			this._changedStrokecap = false;
		}

		if (this._changedMiterlimit) {
			sysstyle._miterlimit = parseInt(this.miterlimit);
			this._changedMiterlimit = false;
		}
	};


	_pGraphicsObject._updateStrokePen = function (strokePenObj, sys_style) {
		var canvasval, substyle;
		if (nexacro._Browser == "Runtime") {
			if (strokePenObj) {
				canvasval = strokePenObj._syscanvasval;
				if (!canvasval) {
					substyle = strokePenObj.style;
					canvasval = {
					};
					if (substyle == "none") {
						canvasval._width = null;
						canvasval._strokecolor = null;
					}
					else {
						canvasval._width = strokePenObj._width;
						canvasval._strokecolor = strokePenObj.color;
						canvasval._linetype = substyle;
					}

					strokePenObj._syscanvasval = canvasval;
				}
				sys_style._linetype = canvasval._linetype;
				sys_style._width = canvasval._width;
				sys_style._strokecolor = canvasval._strokecolor;
			}
			else {
				sys_style._width = null;
				sys_style._strokecolor = null;
				sys_style._linetype = "none";
			}
		}
		var isIErow = (nexacro._Browser == "IE" && nexacro._BrowserVersion <= 8);

		if (!isIErow) {
			if (strokePenObj) {
				canvasval = strokePenObj._syscanvasval;
				if (!canvasval) {
					substyle = strokePenObj.style;
					canvasval = {
					};
					if (substyle == "none") {
						canvasval._width = null;
						canvasval._strokecolor = null;
					}
					else {
						canvasval._width = strokePenObj._width;
						canvasval._strokecolor = strokePenObj.color;
						canvasval._linetype = substyle;
					}

					strokePenObj._syscanvasval = canvasval;
				}
				sys_style._linetype = canvasval._linetype;
				sys_style._width = canvasval._width;
				sys_style._strokecolor = canvasval._strokecolor;
			}
			else {
				sys_style._width = null;
				sys_style._strokecolor = null;
				sys_style._linetype = "none";
			}
		}
	};



	_pGraphicsObject._updateFill = function (fillstyleObj, sys_style, ctx) {
		if (fillstyleObj) {
			var canvasval = fillstyleObj._syscanvasval;
			if (!canvasval || this._isGradation) {
				if (this._isGradation) {
					var fillGradationObj;
					fillGradationObj = fillstyleObj.gradient;

					if (fillGradationObj) {
						var gradationsubstyle = fillGradationObj.style, gradationpoint = fillGradationObj.point, startPt, endPt, ctxGradient;

						var bounds = this.on_getRect();
						if (gradationsubstyle == "linear") {
							startPt = new nexacro.Point(bounds.width *  gradationpoint.startX / 100, bounds.height *  gradationpoint.startY / 100);
							endPt = new nexacro.Point(bounds.width *  gradationpoint.endX / 100, bounds.height *  gradationpoint.endY / 100);

							startPt.x += bounds.left;
							startPt.y += bounds.top;
							endPt.x += bounds.left;
							endPt.y += bounds.top;

							ctxGradient = ctx.createLinearGradient(startPt.x, startPt.y, endPt.x, endPt.y);

							nexacro._GraphicsLib.arrForEach(fillGradationObj.color_stops, function (o, index) {
								ctxGradient.addColorStop(o.percents, o.color);
							});

							canvasval = ctxGradient;
						}
						else if (gradationsubstyle == "radial") {
						}
						else {
							canvasval = fillstyleObj.color;
						}
					}
				}
				else if (fillstyleObj instanceof nexacro._CanvasFillPattern) {
					canvasval = fillstyleObj;
				}
				else {
					canvasval = fillstyleObj.color;
				}

				fillstyleObj._syscanvasval = canvasval;
			}
			sys_style._fillcolor = canvasval;
		}
		else {
			sys_style._fillcolor = null;
		}
	};

	_pGraphicsObject._updateStrokeJoin = function (strokejoinObj, sys_style) {
		if (strokejoinObj) {
			var tmpval = strokejoinObj;
			sys_style._strokejoin = tmpval;
		}
		else {
			sys_style._strokejoin = null;
		}
	};

	_pGraphicsObject._updateStrokeCap = function (strokecapObj, sys_style) {
		if (strokecapObj) {
			var tmpval = strokecapObj;
			if (tmpval == "flat") {
				sys_style._strokecap = "butt";
			}
			else {
				sys_style._strokecap = tmpval;
			}
		}
		else {
			sys_style._strokecap = null;
		}
	};

	_pGraphicsObject._getItemsByFilter = function (propNm, val) {
		if (this._firstchild) {
			var filterCache = this._filterCache;


			if (!filterCache) {
				filterCache = {
				};
				this._filterCache = filterCache;
			}
			var selectorkey = propNm + "_" + val, cached = filterCache[selectorkey], elem, elems, res, retvals = [], arr = [], seq;
			if (!cached) {
				cached = {
					pElement : this, 
					propertyNm : propNm, 
					value : val, 
					elements : null
				};
				filterCache[selectorkey] = cached;
			}
			if (cached._childchanged != this._childchanged) {
				arr = [];
				seq = 0;
				elem = this._firstchild;
				if (val == "*") {
					for (; elem; elem = elem._nextsibling) {
						arr[seq] = elem;
						seq++;
					}
				}
				else {
					for (; elem; elem = elem._nextsibling) {
						if (elem[propNm] == val) {
							arr[seq] = elem;
							seq++;
						}
					}
				}
				cached.elements = arr;
				cached._childchanged = this._childchanged;
			}
			elem = this._firstchild;
			elems = cached.elements;
			res = elems.slice(0);

			seq = 0;
			for (; elem; elem = elem._nextsibling) {
				if (elem._firstchild) {
					seq++;
					retvals = elem._getItemsByFilter(propNm, val);
					retvals.unshift(seq, 0);
					res.splice.apply(res, retvals);
					seq += retvals.length - 2;
				}
				else {
					seq++;
				}
			}
			return res;
		}
		else {
			return null;
		}
	};

	_pGraphicsObject._setGlobalTransforms = function (pMatrix) {
		this._globalMatrix = (pMatrix ? (pMatrix.clone()).concatenate(this._matrix) : this._matrix.clone());
	};

	_pGraphicsObject.on_draw = function (ctx) {
		var style = this._renderstyle, temppaint, m = this._globalMatrix;

		if (m && style) {
			var isScalingStroke = this._type == "Image" || this._type == "Text" || this._nonscalingstroke !== true;
			this._painted = 1;
			ctx.save();
			if (isScalingStroke) {
				if (this._type != "Image" && this._type != "Text") {
					m.applyToContext(ctx, this);
				}
				else {
					m.applyToContext(ctx);
				}
			}
			var clipItems = this._clipitems;
			if (this._parent && this._parent._type == "Paths" && !clipItems) {
				clipItems = this._parent._clipitems;
			}
			if (clipItems && clipItems.length) {
				ctx.beginPath();
				for (var i = 0, len = clipItems.length; i < len; i++) {
					var rect = clipItems[i];
					ctx.rect(rect.left, rect.top, rect.width, rect.height);
				}
				ctx.closePath();
				ctx.clip();
			}

			this.on_apply_styles(ctx, style);
			this.on_drawShape(ctx, (isScalingStroke ? null : m));
			if ((this._type_name != "GraphicsImage" || (this._type_name == "GraphicsImage" && !this._imageloaded))) {
				var fillColor = style._fillcolor, strokeColor = style._strokecolor;
				if (fillColor) {
					ctx.fill();
					this._painted |= 4;
				}
				if (strokeColor) {
					ctx.stroke();
					this._painted |= 2;
				}
			}

			ctx.restore();
		}
		if (this._painted & (2 | 4)) {
			temppaint = this._painted;
			this._painted = temppaint;
		}
		else {
			if (this.visible) {
				if (this._drawflags && this._drawflags & (1 | 2 | 4)) {
					this._painted |= 2;
				}
				else {
					this._painted = 0;
				}
			}
			if (!this.visible) {
				this._painting = 2;
			}
		}
	};

	_pGraphicsObject.on_apply_styles = function (ctx, style) {
		var width = style._width, join = style._strokejoin || "miter", cap = style._strokecap || "butt", limit = style._miterlimit || 10, fillColor = style._fillcolor, strokeColor = style._strokecolor, lineType = style._linetype, font = style._font;
		if (nexacro._Browser == "Runtime") {
			if (!style) {
				return;
			}
			if (ctx) {
				if (width != null) {
					ctx.setElementLineWidth(width);
				}

				ctx.setElementLineJoin(join);
				ctx.setElementLineCap(cap);
				ctx.setElementMiterLimit(limit);
				if (font) {
					ctx.setElementFont(font);
				}
				if (fillColor) {
					ctx.setElementFillStyle(fillColor);
				}

				if (strokeColor) {
					ctx.setElementStrokeStyle(strokeColor);
				}
				if (lineType) {
					ctx.setElementLineStyle(lineType);
				}
			}
		}
		var isIERow = (nexacro._Browser == "IE" && nexacro._BrowserVersion <= 8);

		if (!isIERow) {
			if (!style) {
				return;
			}
			if (ctx) {
				if (width != null) {
					ctx.setElementLineWidth(width);
				}

				ctx.setElementLineJoin(join);
				ctx.setElementLineCap(cap);
				ctx.setElementMiterLimit(limit);

				if (font) {
					ctx.setElementFont(font);
				}
				if (fillColor) {
					ctx.setElementFillStyle(fillColor);
				}

				if (strokeColor) {
					ctx.setElementStrokeStyle(strokeColor);
				}
				if (lineType) {
					ctx.setElementLineStyle(lineType);
				}
			}
		}
	};

	_pGraphicsObject._getSharperOffset = function (x, y) {
		var ret = [];
		if (this._isOddStrokeWidth) {
			if ((~~(x)) == x) {
				ret[0] = 0;
			}
			else {
				ret[0] = 0.5;
			}
			if ((~~(y)) == y) {
				ret[1] = 0;
			}
			else {
				ret[1] = 0.5;
			}
		}
		else {
			if ((~~(x)) == x) {
				ret[0] = 0.5;
			}
			else {
				ret[0] = 0;
			}
			if ((~~(y)) == y) {
				ret[1] = 0.5;
			}
			else {
				ret[1] = 0;
			}
		}
		return ret;
	};

	_pGraphicsObject.on_drawShape = function (ctx, strokeMatrix) {
		var rect = this.on_getRect(), w = rect.width, h = rect.height, x = rect.left, y = rect.top;


		var gap = 0;
		if (this._isOddStrokeWidth) {
			gap = 0.5;
		}
		ctx.beginPath();
		if (strokeMatrix) {
			var coords = [x, y, x + w, y + h];
			strokeMatrix._transformCoordinates(coords, 0, coords, 0, 2);
			ctx.rect(parseInt(coords[0]) + gap, parseInt(coords[1]) + gap, parseInt(coords[2] - coords[0]), parseInt(coords[3] - coords[1]));
		}
		else {
			ctx.rect(x + gap, y + gap, w, h);
		}
		ctx.closePath();
	};

	_pGraphicsObject._remove = function (deep, notDirty) {
		if (!notDirty && this._painted & (1 | 2 | 4)) {
			var layer = this.on_getOwnerLayer();
			if (layer) {
				layer._addDirty(this._oldGlobalBounds, this);

				if (this._parent._quadtree) {
					this._parent._quadtree.remove(this);
				}
			}
		}
		if (deep) {
			var node = this._firstchild;
			for (; node; node = node._nextsibling) {
				node._remove(true, true);
			}
		}
	};
	_pGraphicsObject.on_IsNotDraw = function () {
		return true;
	};
	_pGraphicsObject.on_getCenter = function () {
		var pos, pt;
		if (this instanceof nexacro.GraphicsGroup) {
			pt = this._getBoundRect().getCenterPoint();
			pos = this._center = new nexacro.Point(pt.x, pt.y);
		}
		else {
			pos = this._center;
			if (!pos) {
				pt = this._getBoundRect().getCenterPoint();
				pos = this._center = new nexacro.Point(pt.x, pt.y);
			}
		}


		return pos;
	};


	delete _pGraphicsObject;
}

if (!nexacro._GraphicsShape) {
	nexacro._GraphicsShape = function () {
		nexacro._GraphicsObject.prototype.constructor.apply(this, arguments);
		var read = this.__readArgs;
		var sz = arguments[read];

		if (sz instanceof nexacro._GraphicsSize) {
			read++;
			this._size = sz.clone();
			this._drawflags |= 2;
		}
		else if (nexacro._isNumber(sz) && nexacro._isNumber(arguments[read + 1])) {
			this._size = new nexacro._GraphicsSize(sz, arguments[read + 1]);
			read += 2;
			this._drawflags |= 2;
		}
		if (!this._size) {
			this._size = new nexacro._GraphicsSize(0, 0);
		}
		var pos = this.on_getCenter();
		this._cx = pos.x;
		this._cy = pos.y;
		this.x = this._x;
		this.y = this._y;
		this.width = this._size.width;
		this.height = this._size.height;
		this.__readArgs = read;
	};

	var _pGraphicsShape = nexacro._GraphicsShape.prototype = nexacro._createPrototype(nexacro._GraphicsObject, nexacro._GraphicsShape);
	_pGraphicsShape._type_name = "_GraphicsShape";

	_pGraphicsShape.x = 0;
	_pGraphicsShape.y = 0;
	_pGraphicsShape.width = 0;
	_pGraphicsShape.height = 0;
	_pGraphicsShape._width = 0;
	_pGraphicsShape._height = 0;



	_pGraphicsShape.set_width = function (val) {
		var newWidth = 0;
		if (val !== undefined) {
			if (isNaN(val)) {
				return;
			}
		}
		if (val !== "" && val != null) {
			newWidth = parseInt(val);
		}

		if (val != this.width) {
			this.width = val;
		}
		var sz = this._size;
		if (sz) {
			if (sz.width != newWidth) {
				sz.width = newWidth;
				this._drawflags |= 2;
			}
		}
		else {
			this._size = new nexacro._GraphicsSize(newWidth, 0);
			this._drawflags |= 2;
		}
	};

	_pGraphicsShape.set_height = function (val) {
		var newHeight = 0;
		if (val !== undefined) {
			if (isNaN(val)) {
				return;
			}
		}
		if (val !== "" && val != null) {
			newHeight = parseInt(val);
		}

		if (val != this.height) {
			this.height = val;
		}

		var sz = this._size;
		if (sz) {
			if (sz.height != newHeight) {
				sz.height = newHeight;
				this._drawflags |= 2;
			}
		}
		else {
			this._size = new nexacro._GraphicsSize(0, newHeight);
			this._drawflags |= 2;
		}
	};



	_pGraphicsShape.destroy = function () {
		this.width = null;
		this.height = null;
		this._size = null;

		nexacro._GraphicsObject.prototype.destroy.call(this);
	};

	_pGraphicsShape._getSize = function (bArray) {
		var sz = this._size;
		if (bArray) {
			return [sz.width, sz.height];
		}
		else {
			return sz;
		}
	};

	_pGraphicsShape.isEmptyRect = function () {
		return this.on_isEmptyRect();
	};
	_pGraphicsShape.on_isEmptyRect = function () {
		var sz = this._size;
		if (sz) {
			return sz.width <= 0 || sz.height <= 0;
		}
		return true;
	};
	_pGraphicsShape.on_IsNotDraw = function () {
		return this.isEmptyRect();
	};
	_pGraphicsShape.on_getRect = function (bStrokeWidth, iscurrent) {
		var rect = this._rect;
		if (iscurrent) {
			rect = null;
		}
		if (!rect) {
			var size = this._size;
			if (size) {
				rect = new nexacro.Rect(0, 0, size.width || 0, size.height || 0);
			}
			else {
				rect = new nexacro.Rect();
			}
			if (!iscurrent) {
				this._rect = rect;
			}
		}
		if (bStrokeWidth) {
			rect = rect.expand(this._getStrokeWidth() / 2);
		}
		return rect;
	};

	delete _pGraphicsShape;
}

if (!nexacro.GraphicsRect) {
	nexacro.GraphicsRect = function () {
		this._type = "Rect";
		nexacro._GraphicsShape.prototype.constructor.apply(this, arguments);
		var read = this.__readArgs;
		if (arguments[read] > 0) {
			this.radiusx = arguments[read];
		}
		else {
			this.radiusx = 0;
		}
		if (arguments[read + 1] > 0) {
			this.radiusy = arguments[read + 1];
		}
		else {
			this.radiusy = 0;
		}
		this._drawflags |= 8;
	};

	var _pGraphicsRect = nexacro.GraphicsRect.prototype = nexacro._createPrototype(nexacro._GraphicsShape, nexacro.GraphicsRect);
	_pGraphicsRect._type_name = "GraphicsRect";

	_pGraphicsRect.radiusx = 0;
	_pGraphicsRect.radiusy = 0;


	_pGraphicsRect.set_radiusx = function (v) {
		if (v == null) {
			return;
		}

		if (v != this.radiusx) {
			this.radiusx = v;
			this._drawflags |= 8;
		}
	};

	_pGraphicsRect.set_radiusy = function (v) {
		if (v == null) {
			return;
		}

		if (v != this.radiusy) {
			this.radiusy = v;
			this._drawflags |= 8;
		}
	};

	_pGraphicsRect.destroy = function () {
		this.radiusx = null;
		this.radiusy = null;

		nexacro._GraphicsShape.prototype.destroy.call(this);
	};

	_pGraphicsRect.on_drawShape = function (ctx, strokeMatrix) {
		var sz = this._size, rx = +this.radiusx || 0, ry = +this.radiusy || 0, w = sz.width, h = sz.height, x = 0, y = 0, mx = w / 2, coords, my = h / 2;

		if (rx > mx) {
			rx = mx;
		}
		if (ry > my) {
			ry = my;
		}
		var isRounded = rx !== 0 || ry !== 0;
		var gap = 0;
		if (this._isOddStrokeWidth) {
			gap = 0.5;
		}

		if (isRounded) {
			ctx.beginPath();
			if (strokeMatrix) {
				coords = [x + rx, y, x + w - rx, y, x + w, y, x + w, y + ry, x + w, ry, x + w, y + h - ry, x + w, y + h, x + w - rx, y + h, x + w - rx, y + h, x + rx, y + h, x, y + h, x, y + h - ry, x, y + h - ry, x, y + ry, x, y, x + rx, y, x + rx, y
				];
				strokeMatrix._transformCoordinates(coords, 0, coords, 0, coords.length / 2);
				ctx.moveTo(parseInt(coords[0]) + gap, parseInt(coords[1]) + gap);
				ctx.lineTo(parseInt(coords[2]) + gap, parseInt(coords[3]) + gap);
				ctx.quadraticCurveTo(parseInt(coords[4]) + gap, parseInt(coords[5]) + gap, parseInt(coords[6]) + gap, parseInt(coords[7]) + gap, parseInt(coords[8]) + gap, parseInt(coords[9]) + gap);

				ctx.lineTo(parseInt(coords[10]) + gap, parseInt(coords[11]) + gap);
				ctx.quadraticCurveTo(parseInt(coords[12]) + gap, parseInt(coords[13]) + gap, parseInt(coords[14]) + gap, parseInt(coords[15]) + gap, parseInt(coords[16]) + gap, parseInt(coords[17]) + gap);

				ctx.lineTo(parseInt(coords[18]) + gap, parseInt(coords[19]) + gap);
				ctx.quadraticCurveTo(parseInt(coords[20]) + gap, parseInt(coords[21]) + gap, parseInt(coords[22]) + gap, parseInt(coords[23]) + gap, parseInt(coords[24]) + gap, parseInt(coords[25]) + gap);

				ctx.lineTo(parseInt(coords[26]) + gap, parseInt(coords[27]) + gap);
				ctx.quadraticCurveTo(parseInt(coords[28]) + gap, parseInt(coords[29]) + gap, parseInt(coords[30]) + gap, parseInt(coords[31]) + gap, parseInt(coords[32]) + gap, parseInt(coords[33]) + gap);
			}
			else {
				ctx.moveTo(x + rx + gap, y + gap);
				ctx.lineTo(x + w - rx + gap, y + gap);
				ctx.quadraticCurveTo(x + w + gap, y + gap, x + w + gap, y + ry + gap, x + w + gap, y + ry + gap);

				ctx.lineTo(x + w + gap, y + h - ry + gap);
				ctx.quadraticCurveTo(x + w + gap, y + h + gap, x + w - rx + gap, y + h + gap, x + w - rx + gap, y + h + gap);

				ctx.lineTo(x + rx + gap, y + h + gap);
				ctx.quadraticCurveTo(x + gap, y + h + gap, x + gap, y + h - ry + gap, x + gap, y + h - ry + gap);

				ctx.lineTo(x + gap, y + ry + gap);
				ctx.quadraticCurveTo(x + gap, y + gap, x + rx + gap, y + gap, x + rx + gap, y + gap);
			}
			ctx.closePath();
		}
		else {
			ctx.beginPath();
			if (strokeMatrix) {
				coords = [x, y, x + w, y + h];
				strokeMatrix._transformCoordinates(coords, 0, coords, 0, 2);
				ctx.rect(parseInt(coords[0]) + gap, parseInt(coords[1]) + gap, parseInt(coords[2] - coords[0]), parseInt(coords[3] - coords[1]));
			}
			else {
				ctx.rect(x + gap, y + gap, w, h);
			}
			ctx.closePath();
		}
	};


	delete _pGraphicsRect;
}

if (!nexacro.GraphicsEllipse) {
	nexacro.GraphicsEllipse = function () {
		this._type = "Ellipse";
		nexacro._GraphicsShape.prototype.constructor.apply(this, arguments);
	};

	var _pGraphicsEllipse = nexacro.GraphicsEllipse.prototype = nexacro._createPrototype(nexacro._GraphicsShape, nexacro.GraphicsEllipse);
	_pGraphicsEllipse._type_name = "GraphicsEllipse";





	_pGraphicsEllipse.destroy = function () {
		nexacro._GraphicsShape.prototype.destroy.call(this);
	};

	_pGraphicsEllipse.isHitTest = function (x, y) {
		var pt = new nexacro.Point(+arguments[0], +arguments[1]);
		pt = this._globalMatrix._inverseTransform(pt);
		var sz = this._size;
		if (sz) {
			return pt.divide(sz.width, sz.height).getLength() <= 0.5;
		}
		return false;
	};


	_pGraphicsEllipse.on_drawShape = function (ctx, strokeMatrix) {
		var sz = this._size, w = sz.width, coords, h = sz.height;
		if (w == h) {
			ctx.beginPath();
			if (strokeMatrix) {
				coords = [0, 0, (w + h) / 4, 0
				];
				strokeMatrix._transformCoordinates(coords, 0, coords, 0, coords.length / 2);
				ctx.arc(coords[0], coords[1], coords[2], coords[3], Math.PI *  2, true);
			}
			else {
				ctx.arc(0, 0, (w + h) / 4, 0, Math.PI *  2, true);
			}
		}
		else {
			ctx.beginPath();
			var mx = w / 2, my = h / 2, kappa = nexacro._GraphicsLib._KAPPA, cx = mx *  kappa, cy = my *  kappa;
			if (strokeMatrix) {
				coords = [-mx, 0, -mx, -cy, -cx, -my, 0, -my, cx, -my, mx, -cy, mx, 0, mx, cy, cx, my, 0, my, -cx, my, -mx, cy, -mx, 0
				];
				strokeMatrix._transformCoordinates(coords, 0, coords, 0, coords.length / 2);
				ctx.moveTo(coords[0], coords[1]);
				ctx.bezierCurveTo(coords[2], coords[3], coords[4], coords[5], coords[6], coords[7]);
				ctx.bezierCurveTo(coords[8], coords[9], coords[10], coords[11], coords[12], coords[13]);
				ctx.bezierCurveTo(coords[14], coords[15], coords[16], coords[17], coords[18], coords[19]);
				ctx.bezierCurveTo(coords[20], coords[21], coords[22], coords[23], coords[24], coords[25]);
			}
			else {
				ctx.moveTo(-mx, 0);
				ctx.bezierCurveTo(-mx, -cy, -cx, -my, 0, -my);
				ctx.bezierCurveTo(cx, -my, mx, -cy, mx, 0);
				ctx.bezierCurveTo(mx, cy, cx, my, 0, my);
				ctx.bezierCurveTo(-cx, my, -mx, cy, -mx, 0);
			}
			ctx.closePath();
		}
	};

	_pGraphicsEllipse.on_getRect = function (bStrokeWidth, iscurrent) {
		var rect = this._rect;
		if (iscurrent) {
			rect = null;
		}
		if (!rect) {
			rect = new nexacro.Rect(0, 0, this._size.width, this._size.height).setCenterPoint(0, 0);
			if (!iscurrent) {
				this._rect = rect;
			}
		}
		if (bStrokeWidth) {
			rect = rect.expand(this._getStrokeWidth() / 2);
		}
		return rect;
	};


	_pGraphicsEllipse.on_getCenter = function () {
		return new nexacro.Point(this.x, this.y);
	};
	delete _pGraphicsEllipse;
}

if (!nexacro.GraphicsText) {
	nexacro.GraphicsText = function () {
		this._type = "Text";
		nexacro._GraphicsObject.prototype.constructor.apply(this, arguments);
		var read = this.__readArgs;
		if (arguments[read] != null) {
			this.set_text(arguments[read]);
		}
	};

	var _pGraphicsText = nexacro.GraphicsText.prototype = nexacro._createPrototype(nexacro._GraphicsShape, nexacro.GraphicsText);
	_pGraphicsText._type_name = "GraphicsText";

	_pGraphicsText.font = "";
	_pGraphicsText.text = "";
	_pGraphicsText.textwidth = "";
	_pGraphicsText.color = "";
	_pGraphicsText.dx = 0;
	_pGraphicsText.dy = 0;
	_pGraphicsText.textAlign = "left";
	_pGraphicsText.verticalAlign = "top";
	_pGraphicsText.wordWrap = "none";

	_pGraphicsText._textwidth = 0;
	_pGraphicsText.set_font = function (v) {
		var s = this._style, oldval = this.font, oldobj, newobj;

		if (oldval != v) {
			this.font = v;
			oldobj = s.font;

			if (v) {
				if (oldobj == null || oldobj.value != v) {
					newobj = nexacro.FontObject(v);
					s.font = newobj;
				}
			}
			else {
				if (oldobj) {
					s.font = null;
				}
			}

			this._drawflags |= (2 | 8);
			this._changedFont = true;
		}
	};

	_pGraphicsText.set_color = function (v) {
		this.color = v;
		nexacro._GraphicsObject.prototype.set_fillstyle.call(this, v);
		this.fillstyle = undefined;
	};
	_pGraphicsText.set_fillstyle = function (v) {
		return;
	};
	_pGraphicsText.set_textAlign = function (v) {
		if (!/^(left|center|right)$/.test(v)) {
			return;
		}
		if (this.textAlign != v) {
			this.textAlign = v;
			this._drawflags |= (1 | 8);
			this._alignChanged = true;
		}
	};

	_pGraphicsText.set_verticalAlign = function (v) {
		if (!/^(top|middle|bottom)$/.test(v)) {
			return;
		}
		if (this.verticalAlign != v) {
			this.verticalAlign = v;
			this._drawflags |= (1 | 8);
			this._alignChanged = true;
		}
	};

	_pGraphicsText.set_text = function (v) {
		if (!nexacro._isString(v)) {
			if (!nexacro._GraphicsLib.isEmpty(v)) {
				v = v.toString();
			}
			else {
				v = "";
			}
		}
		if (this.text != v) {
			this.text = v;
			this._drawflags |= 4;
			this._textChanged = true;
		}
	};


	_pGraphicsText.set_wordWrap = function (v) {
		var wordWrap_enum = ["none", "char"];

		if (wordWrap_enum.indexOf(v) == -1) {
			return;
		}

		if (this.wordWrap !== v) {
			this.wordWrap = v;
			this._drawflags |= 4;
			this._wordwrapChanged = true;
		}
	};

	_pGraphicsText.set_textwidth = function (val) {
		var newTextWidth = 0;
		if (val !== undefined) {
			if (isNaN(val) || val < 0) {
				return;
			}
		}

		if (val !== "" && val != null) {
			newTextWidth = parseInt(val);
		}
		if (this.textwidth != val) {
			this.textwidth = val;
			this._textwidth = newTextWidth;
			this._drawflags |= 2;
			this._widthChanged = true;
		}
	};

	_pGraphicsText.destroy = function () {
		this.font = null;
		this.text = null;
		this.width = null;
		this.color = null;
		this.dx = null;
		this.dy = null;
		this.textAlign = null;
		this.verticalAlign = null;
		this.wordWrap = null;

		nexacro._GraphicsObject.prototype.destroy.call(this);
	};


	_pGraphicsText.on_isEmptyRect = function () {
		var sz = this.on_getRect();
		if (sz.width <= 0 || sz.height <= 0) {
			sz = this.on_getRect(false, true);
		}
		return sz.width <= 0 || sz.height <= 0;
	};
	_pGraphicsText.on_updateStyles = function (ctx, sizeChanged) {
		this._updateText();
		var fill;
		var sysstyle = this._renderstyle;
		if (!sysstyle) {
			sysstyle = {
			};
			this._renderstyle = sysstyle;
		}
		var style = this._style;

		if (this._changedFillstyle || sizeChanged) {
			fill = style.fillstyle;
			if (!fill) {
				fill = nexacro.BackgroundObject("#000000", this);
			}
			this._updateFill(fill, sysstyle, ctx);
			this._changedFillstyle = false;
		}

		ctx.setElementGlobalAlpha(this._globalAlpha);
	};

	_pGraphicsText._updateText = function () {
		var sysstyle = this._renderstyle, style = this._style;
		if (!sysstyle) {
			sysstyle = {
			};
			this._renderstyle = sysstyle;
		}
		if (!this._size) {
			this._size = new nexacro._GraphicsSize(0, 0);
		}
		if (this._textChanged || this._changedFont || this._wordwrapChanged || this._widthChanged) {
			var font = style.font;
			if (font === null || font === 'undefined' || font === undefined) {
				font = nexacro.FontObject('12pt/normal Verdana');
				this._changedFont = true;
			}
			if (this._changedFont) {
				this._updateFontInCanvas(font, sysstyle);
				if (font) {
					var sz = nexacro.getTextSize("Wj", font);
					this._lineHeight = sz.ny;
				}
				else {
					this._lineHeight = 0;
				}
				this._changedFont = false;
			}
			var txt = this.text;
			if (font && txt && txt.length && this._lineHeight) {
				var width = +this.textwidth || +this.width;
				this._lines = nexacro._GraphicsLib.getLines(font, txt, this.wordWrap, width);
				this._txtSize = nexacro._GraphicsLib.getTextSize(font, this._lines, this._lineHeight);

				this._size.width = this._txtSize[0];
				this._size.height = this._txtSize[1];
			}
			else {
				this._lines = null;
				this._txtSize = [0, 0];
				this._size.width = 0;
				this._size.height = 0;
			}
			this._textChanged = false;
			this._widthChanged = false;
			this._wordwrapChanged = false;
		}
		else {
			if (!this._txtSize) {
				this._txtSize = [0, 0];
				this._size.width = 0;
				this._size.height = 0;
			}
			else {
				this._size.width = this._txtSize[0];
				this._size.height = this._txtSize[1];
			}
		}
	};

	_pGraphicsText._updateFontInCanvas = function (nexacroFont, sys_style) {
		if (nexacroFont) {
			sys_style._font = nexacroFont;
		}
		else {
			sys_style._font = null;
		}
	};

	_pGraphicsText.on_getRect = function (bStrokeWidth, iscurrent) {
		var rect = this._rect;
		if (iscurrent) {
			rect = null;
		}
		if (!rect || this._changedFont || this._textChanged || this._wordwrapChanged || this._widthChanged || this._alignChanged) {
			this._updateText();
			var txtSz = this._txtSize;
			rect = new nexacro.Rect(0, 0, txtSz[0], txtSz[1]);

			if (txtSz[0] != 0 && txtSz[1] != 0) {
				switch (this.textAlign) {
					case "left":
						break;
					case "center":
						rect.left = -(txtSz[0] / 2);
						break;
					case "right":
						rect.left = -txtSz[0];
						break;
				}
				switch (this.verticalAlign) {
					case "top":
						break;
					case "middle":
						rect.top = -(txtSz[1] / 2);
						break;
					case "bottom":
						rect.top = -txtSz[1];
						break;
				}

				rect.left -= 1;
				rect.top -= 1;
				rect.width += 6;
				rect.height += 6;
				rect.right = rect.left + rect.width;
				rect.bottom = rect.top + rect.height;
			}

			if (!iscurrent) {
				this._rect = rect;
			}
			this._alignChanged = false;
		}
		return rect;
	};

	_pGraphicsText.on_draw = function (ctx) {
		var style = this._renderstyle;
		var m = this._globalMatrix;
		var lineHeight = this._lineHeight;
		var i, len = 0, yGap;
		if (style && m) {
			this._painted |= 1;
			ctx.save();
			m.applyToContext(ctx);
			var clipItems = this._clipitems;
			if (clipItems && clipItems.length) {
				ctx.beginPath();
				len = clipItems.length;
				for (i = 0; i < len; i++) {
					var rect = clipItems[i];

					var txtValign = this.verticalAlign;
					if (txtValign == "top") {
						ctx.rect(rect.left, rect.top, rect.width, rect.height);
					}
					else if (txtValign == "middle") {
						ctx.rect(rect.left, rect.top - (lineHeight / 2), rect.width, rect.height);
					}
					else {
						ctx.rect(rect.left, rect.top - lineHeight, rect.width, rect.height);
					}
				}
				ctx.closePath();
				ctx.clip();
			}

			this.on_apply_styles(ctx, style);

			var fillColor = style._fillcolor;



			var lines = this._lines;

			if (lines) {
				switch (this.textAlign) {
					case "left":
						ctx.setElementTextAlign("start");
						break;
					case "center":
						ctx.setElementTextAlign("center");
						break;
					case "right":
						ctx.setElementTextAlign("end");
						break;
				}
				switch (this.verticalAlign) {
					case "top":
						ctx.setElementTextBaseline("top");
						len = lines.length;
						if (fillColor) {
							for (i = 0; i < len; i++) {
								ctx.fillText(lines[i], 0, i *  lineHeight);
							}
							this._painted |= 4;
						}
						break;
					case "middle":
						ctx.setElementTextBaseline("middle");
						if (fillColor) {
							len = lines.length;
							yGap = (len - 1) *  lineHeight / 2;
							for (i = 0; i < len; i++) {
								ctx.fillText(lines[i], 0, i *  lineHeight - yGap);
							}
							this._painted |= 4;
						}
						break;
					case "bottom":
						ctx.setElementTextBaseline("bottom");
						if (fillColor) {
							len = lines.length;
							yGap = (len - 1) *  lineHeight;
							for (i = 0; i < len; i++) {
								ctx.fillText(lines[i], 0, i *  lineHeight - yGap);
							}
							this._painted |= 4;
						}
						break;
				}
			}
			ctx.restore();
		}
		if (!(this._painted & (2 | 4))) {
			if (this.visible) {
				if (this._drawflags && this._drawflags & (1 | 2 | 4)) {
					this._painted |= 2;
				}
				else {
					this._painted = 0;
				}
			}
			if (!this.visible) {
				this._painting = 2;
			}
		}
	};

	delete _pGraphicsText;
}

if (!nexacro.GraphicsImage) {
	nexacro.GraphicsImage = function () {
		this._type = "Image";
		nexacro._GraphicsShape.prototype.constructor.apply(this, arguments);
	};

	var _pGraphicsImage = nexacro.GraphicsImage.prototype = nexacro._createPrototype(nexacro._GraphicsShape, nexacro.GraphicsImage);
	_pGraphicsImage._type_name = "GraphicsImage";

	_pGraphicsImage.image = "";
	_pGraphicsImage.imagewidth = 0;
	_pGraphicsImage.imageheight = 0;

	_pGraphicsImage._cacheimages = null;
	_pGraphicsImage._cacheimagesCapacity = null;
	_pGraphicsImage._cacheimagescnt = null;
	_pGraphicsImage._redrawparent = null;
	_pGraphicsImage._redrawcallback = null;
	_pGraphicsImage._imgobj = null;
	_pGraphicsImage.set_strokepen = function (val) {
		this.strokepen = val;
	};

	_pGraphicsImage.set_fillstyle = function (val) {
		this.fillstyle = val;
	};

	_pGraphicsImage.set_strokejoin = function (val) {
		this.strokejoin = val;
	};

	_pGraphicsImage.set_strokecap = function (val) {
		this.strokecap = val;
	};

	_pGraphicsImage.set_miterlimit = function (val) {
		this.miterlimit = val;
	};
	_pGraphicsImage.set_image = function (v) {
		if (v instanceof nexacro.Image) {
			if (v._base64str) {
				v = v._base64str;
			}
			else {
				v = v.src;
			}
		}
		else {
			v = v.toString();
		}

		if (this.image != v) {
			this.imagewidth = 0;
			this.imageheight = 0;
			this.image = v;
			var w, h;
			if (v) {
				this._imageloaded = false;
				if (nexacro._Browser != "Runtime") {
					var rurl = this._getRealImageUrl(v);
					var cacheimages = this._cacheimages, imageobj;
					if (!this._imgobj) {
						this._imgobj = {
						};
					}
					if (cacheimages && cacheimages[rurl]) {
						imageobj = cacheimages[rurl];
						this._imgobj.handle = imageobj;
						w = imageobj.naturalWidth || imageobj.width;
						h = imageobj.naturalHeight || imageobj.height;
						this._doingSomethingAfterImageloaded(w, h);
					}
					else {
						imageobj = new Image();
						var that = this, bindfn = function () {
							nexacro._stopSysObserving(this, "load", "onload", bindfn);
							that._imageload_callback(rurl, 0, 0, imageobj);
						};

						var image_size = nexacro._getImageSize(rurl, nexacro._emptyFn, this, undefined, imageobj);
						if (image_size) {
							w = image_size.width;
							h = image_size.height;
							this.imagewidth = w;
							this.imageheight = h;
						}

						nexacro._observeSysEvent(imageobj, "load", "onload", bindfn);
						imageobj.src = rurl;
					}
				}
				else {
					if (!this._imgobj) {
						this._imgobj = {
						};
					}
					this._imgobj.src = v;
					this._imgobj.handle = nexacro._getImageObject(v, this._imageload_callback, this, "", false);
				}
			}
			else {
				this._imgobj = null;
				this._imageloaded = true;
			}
			this._drawflags |= 4;
		}
	};

	_pGraphicsImage.destroy = function () {
		this.image = null;
		this._imgobj = null;
		this.imagewidth = null;
		this.imageheight = null;
		this._cacheimages = null;
		this._cacheimagesCapacity = null;
		this._cacheimagescnt = null;

		nexacro._GraphicsShape.prototype.destroy.call(this);
	};


	_pGraphicsImage.setImageLoadEventHandler = function (func, target) {
		if (target && func) {
			if (typeof func === "function") {
				this._redrawparent = target;
				this._redrawcallback = func;
			}
		}
	};

	_pGraphicsImage.on_isEmptyRect = function () {
		if (this._imgobj) {
			var sz = this._size;
			var imageloaded = this._imageloaded;
			if (sz) {
				return sz.width <= 0 || sz.height <= 0;
			}
			else if (imageloaded) {
				return true;
			}
			else {
				return false;
			}
		}
		return true;
	};
	_pGraphicsImage._getRealImageUrl = function (url) {
		if (url.substring(0, 4).toLowerCase() == "url(") {
			url = url.substring(5, url.length - 2);
		}
		if (!url || !url.length) {
			return null;
		}

		var layer = this.on_getOwnerLayer();
		var baseurl = layer ? layer.parent._getRefFormBaseUrl() : undefined;
		return nexacro._getImageLocation(url, baseurl);
	};

	_pGraphicsImage._imageload_callback = function (url, w, h, imgnode) {
		if (nexacro._Browser != "Runtime") {
			var cacheimages = this._cacheimages;


			if (this._cacheimagescnt == null) {
				this._cacheimagescnt = 0;
				this._cacheimagesCapacity = 30;
			}
			if (!cacheimages) {
				cacheimages = {
				};
				this._cacheimages = cacheimages;
			}

			var width, height;

			if ('naturalHeight' in imgnode) {
				if (imgnode.naturalHeight + imgnode.naturalWidth === 0) {
					return;
				}
				width = imgnode.naturalWidth;
				height = imgnode.naturalHeight;
			}
			else if (imgnode.width + imgnode.height == 0) {
				return;
			}
			else {
				width = imgnode.width;
				height = imgnode.height;
			}
			this._imgobj.handle = imgnode;
			cacheimages[url] = imgnode;
			this._cacheimagescnt++;
			if (this._cacheimagescnt > this._cacheimagesCapacity) {
				nexacro._GraphicsLib.objEach(cacheimages, function (prop, val, object) {
					delete object[prop];
					this._cacheimagescnt--;
					if (this._cacheimagescnt < this._cacheimagesCapacity) {
						return false;
					}
				});
			}
			this.imagewidth = width;
			this.imageheight = height;

			this._doingSomethingAfterImageloaded(width, height);
		}
		else {
			this.imagewidth = w;
			this.imageheight = h;


			this._doingSomethingAfterImageloaded(w, h);
		}
	};

	_pGraphicsImage._doingSomethingAfterImageloaded = function (w, h) {
		var sz = this._size, layer, graph;
		this._imageloaded = true;
		this.imagewidth = w;
		this.imageheight = h;


		if (sz == null) {
			this._size = new nexacro._GraphicsSize(w, h);
			this._drawflags |= 2;
			if (this._needRedarw) {
				this._drawflags |= 4;
				layer = this.on_getOwnerLayer();
				graph = layer.parent;
				graph._delayTask();
				this._needRedarw = false;
			}
			return;
		}
		if (this.width <= 0) {
			sz.width = w;
			this._drawflags |= 2;
		}
		if (this.height <= 0) {
			sz.height = h;
			this._drawflags |= 2;
		}
		if (this._needRedarw) {
			this._drawflags |= 4;
			layer = this.on_getOwnerLayer();
			graph = layer.parent;
			graph._delayTask();
			this._needRedarw = false;
		}
		if (this._redrawparent && this._redrawcallback) {
			this._redrawcallback.call(this._redrawparent);
		}
	};
	_pGraphicsImage.on_updateStyles = function (ctx, sizeChanged) {
		var sysstyle = this._renderstyle;
		if (!sysstyle) {
			sysstyle = {
			};
			this._renderstyle = sysstyle;
		}


		ctx.setElementGlobalAlpha(this._globalAlpha);
	};
	_pGraphicsImage.on_drawShape = function (ctx) {
		if (!this.isEmptyRect()) {
			if (this._imageloaded) {
				var sz = this._size, w = sz.width, h = sz.height;
				ctx.drawImage(this._imgobj, 0, 0, w, h);
			}
			else {
				this._needRedarw = true;
			}
		}
	};

	delete _pGraphicsImage;
}

if (!nexacro.GraphicsPath) {
	nexacro.GraphicsPath = function () {
		this._type = "Path";
		nexacro._GraphicsObject.prototype.constructor.apply(this, arguments);
		this._closed = false;
		this._segments = [];
	};

	var _pGraphicsPath = nexacro.GraphicsPath.prototype = nexacro._createPrototype(nexacro._GraphicsObject, nexacro.GraphicsPath);
	_pGraphicsPath._type_name = "GraphicsPath";


	_pGraphicsPath._strokepadding = 0;
	_pGraphicsPath._curvemin = 0.00001;
	_pGraphicsPath._curvemax = 1 - 0.00001;



	_pGraphicsPath.destroy = function () {
		this._closed = null;
		this._segments = null;
		this._strokepadding = null;
		this._curvemin = null;
		this._curvemax = null;

		delete this._segments;

		nexacro._GraphicsObject.prototype.destroy.call(this);
	};

	_pGraphicsPath._add = function (segs, index) {
		var segments = this._segments, append = index == null;


		index = append ? segments.length : index;

		if (append) {
			segments.push.apply(segments, segs);
		}
		else {
			segments.splice.apply(segments, [index, 0].concat(segs));
		}
		this._drawflags |= 4;
		return segs;
	};

	_pGraphicsPath.hasSegments = function () {
		return this.on_hasSegments();
	};
	_pGraphicsPath.on_hasSegments = function () {
		return !(this._segments.length === 0);
	};
	_pGraphicsPath.on_IsNotDraw = function () {
		return !this.hasSegments();
	};
	_pGraphicsPath._isClosed = function () {
		if (this._closed) {
			return true;
		}


		return false;
	};

	_pGraphicsPath._setClosed = function (closed) {
		if (this._closed != (closed = !!closed)) {
			this._closed = closed;
			this._drawflags |= 4;
		}
	};

	_pGraphicsPath._removeSegment = function (index) {
		return this._removeSegments(index, index + 1)[0] || null;
	};

	_pGraphicsPath._removeSegments = function (from, to) {
		from = (from || 0);
		to = (to == null ? this._segments.length : to);
		var segments = this._segments, removed = segments.splice(from, to - from), removedLen = removed.length;
		if (!removedLen) {
			return removed;
		}
		this._drawflags |= 4;
		return removed;
	};


	_pGraphicsPath.quadraticCurveTo = function (cx, cy, endx, endy) {
		var argLen = arguments.length;
		if (argLen != 4) {
			return;
		}




		this.bezierCurveTo(+cx, +cy, +endx, +endy, +endx, +endy
		);
	};

	_pGraphicsPath.bezierCurveTo = function (c1x, c1y, c2x, c2y, endx, endy) {
		var argLen = arguments.length;
		if (argLen != 6) {
			return;
		}

		var read = 0;

		var control1Pt = new nexacro.Point(+arguments[0], +arguments[1]);
		read += 2;

		var control2Pt = new nexacro.Point(+arguments[read], +arguments[read + 1]);
		read += 2;

		var endpt = new nexacro.Point(+arguments[read], +arguments[read + 1]);



		var current = this._getCurrentSegment();

		current.outVector = control1Pt;
		var seg = {
			point : endpt.clone(), 
			inVector : control2Pt.clone(), 
			nextSeg : null
		};
		this._add([seg]);
	};

	_pGraphicsPath.arcTo = function (_x, _y, radiusx, radiusy, rotation, clockwise, large) {
		var current = this._getCurrentSegment(), from = current.point, to, radius, center, extent, vector, matrix, read = 0;

		if (arguments.length < 7) {
			return;
		}
		to = new nexacro.Point(+arguments[0], +arguments[1]);
		read += 2;
		radius = new nexacro._GraphicsSize(+arguments[read], +arguments[read + 1]);
		read += 2;
		rotation = arguments[read];
		read += 1;
		clockwise = !!arguments[read];
		read += 1;
		large = !!arguments[read];



		if (radius.isZero()) {
			return this.lineTo(to);
		}
		var middle = from.add(to).divide(2), pt = from.subtract(middle).rotate(-rotation), x = pt.x, y = pt.y, abs = Math.abs, EPSILON = 1e-11, rx = abs(radius.width), ry = abs(radius.height), rxSq = rx *  rx, rySq = ry *  ry, xSq = x *  x, ySq = y *  y, out;

		var factor = Math.sqrt(xSq / rxSq + ySq / rySq);
		if (factor > 1) {
			rx *= factor;
			ry *= factor;
			rxSq = rx *  rx;
			rySq = ry *  ry;
		}
		factor = (rxSq *  rySq - rxSq *  ySq - rySq *  xSq) / (rxSq *  ySq + rySq *  xSq);
		if (abs(factor) < EPSILON) {
			factor = 0;
		}
		if (factor < 0) {
		}
		center = new nexacro.Point(rx *  y / ry, -ry *  x / rx);
		center = center.multiply((large === clockwise ? -1 : 1)
			 *  Math.sqrt(factor));
		center = center.rotate(rotation);
		center = center.add(middle);

		matrix = new nexacro._GraphicsMatrix().translate(center).rotate(rotation).scale(rx, ry);
		vector = matrix._inverseTransform(from);
		if (!vector) {
			return;
		}
		extent = vector.getDirectedAngle(matrix._inverseTransform(to));
		if (!clockwise && extent > 0) {
			extent -= 360;
		}
		else if (clockwise && extent < 0) {
			extent += 360;
		}

		var ext = Math.abs(extent), count = ext >= 360 ? 4 : Math.ceil(ext / 90), inc = extent / count, half = inc *  Math.PI / 360, z = 4 / 3 *  Math.sin(half) / (1 + Math.cos(half)), segs = [], seg;

		for (var i = 0; i <= count; i++) {
			pt = to;
			out = null;
			if (i < count) {
				out = vector.rotate(90).multiply(z);
				if (matrix) {
					pt = matrix._transformPoint(vector);
					out = matrix._transformPoint(vector.add(out));
				}
				else {
					pt = center.add(vector);
				}
			}
			if (i === 0) {
				current.outVector = out;
			}
			else {
				var _in = vector.rotate(-90).multiply(z);
				if (matrix) {
					_in = matrix._transformPoint(vector.add(_in));
				}
				seg = {
					point : pt.clone(), 
					inVector : _in.clone(), 
					outVector : out, 
					nextSeg : null
				};
				segs.push(seg);
			}
			vector = vector.rotate(inc);
		}
		this._add(segs);
	};

	_pGraphicsPath.moveTo = function (x, y) {
		var argsLen = arguments.length;
		var pt;
		var seg;
		if (argsLen == 2) {
			pt = new nexacro.Point(+arguments[0], +arguments[1]);
		}
		else {
			return;
		}


		if (this._segments.length === 1) {
			this._removeSegments();
		}
		if (!this._segments.length) {
			seg = {
				point : pt.clone(), 
				nextSeg : null
			};
			this._add([seg]);
		}
		else {
			seg = {
				point : pt.clone(), 
				nextSeg : null
			};
			this._removeSegment(0);
			this._add([seg], 0);
		}
	};

	_pGraphicsPath.moveBy = function (x, y) {
		var pt;
		var argsLen = arguments.length;
		var seg;
		if (argsLen == 2) {
			pt = new nexacro.Point(+x, +y);

			if (this._segments.length > 0) {
				pt = this._getFirstSegment().point.add(pt);


				if (this._segments.length === 1) {
					this._removeSegments();
				}
				if (!this._segments.length) {
					seg = {
						point : pt.clone(), 
						nextSeg : null
					};
					this._add([seg]);
				}
				else {
					seg = {
						point : pt.clone(), 
						nextSeg : null
					};
					this._removeSegment(0);
					this._add([seg], 0);
				}
			}
			else {
				this.moveTo(x, y);
			}
		}
		else {
			return;
		}
	};
	_pGraphicsPath.lineTo = function (x, y) {
		var argsLen = arguments.length;
		var pt;
		if (argsLen == 2) {
			pt = new nexacro.Point(+arguments[0], +arguments[1]);
		}
		else {
			return;
		}

		var seg = {
			point : pt.clone(), 
			nextSeg : null
		};
		this._add([seg]);
	};

	_pGraphicsPath.closePath = function () {
		var first = this._getFirstSegment(), last = this._getLastSegment();
		if (first && last) {
			if (first.point.equals(last.point)) {
				first.inVector = last.inVector;
				this._removeSegment(this._segments.length - 1);
			}
		}
		this._setClosed(true);
	};

	_pGraphicsPath._getFirstSegment = function () {
		return this._segments[0];
	};


	_pGraphicsPath._getLastSegment = function () {
		return this._segments[this._segments.length - 1];
	};

	_pGraphicsPath.getPathData = function () {
		var segs = this._segments, parts = [];

		if (segs.length === 0) {
			return '';
		}
		var mpt = segs[0].point, fmtNumber = nexacro._GraphicsLib.toStrFormatNumber;
		parts.push('M' + fmtNumber(mpt.x) + ',' + fmtNumber(mpt.y));
		for (var i = 0, l = segs.length - 1; i < l; i++) {
			this._getSegPathData(parts, segs[i], segs[i + 1], false);
		}
		if (this._closed) {
			this._getSegPathData(parts, segs[segs.length - 1], segs[0], true);
			parts.push('Z');
		}
		return parts.join('');
	};
	_pGraphicsPath.clear = function () {
		this._removeSegments();
		this._setClosed(false);
	};

	_pGraphicsPath.setPathData = function (data) {
		var clsPoint = nexacro.Point;
		var parts = data.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig), coords, relative = false, pt, control, control2, l = 0, j = 0, i, current = new nexacro.Point();

		function getCoord (index, coord, update) {
			var val = parseFloat(coords[index]);
			if (relative) {
				val += current[coord];
			}
			if (update) {
				current[coord] = val;
			}
			return val;
		}

		function getPoint (index, update) {
			return new clsPoint(getCoord(index, 'x', update), getCoord(index + 1, 'y', update)
			);
		}


		this._removeSegments();


		for (i = 0, l = parts.length; i < l; i++) {
			var part = parts[i], cmd = part[0], lower = cmd.toLowerCase();
			coords = part.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
			relative = cmd === lower;
			var length = coords && coords.length;

			switch (lower) {
				case 'm':
				case 'l':
					for (j = 0; j < length; j += 2) {
						pt = getPoint(j, true);
						this[j === 0 && lower === 'm' ? 'moveTo' : 'lineTo'](pt.x, pt.y
						);
					}
					break;
				case 'h':
				case 'v':
					var coord = lower == 'h' ? 'x' : 'y';
					for (j = 0; j < length; j++) {
						getCoord(j, coord, true);
						this.lineTo(current.x, current.y);
					}
					break;
				case 'c':
					for (j = 0; j < length; j += 6) {
						pt = getPoint(j);
						control = getPoint(j + 2);
						control2 = getPoint(j + 4, true);
						this.bezierCurveTo(+pt.x, +pt.y, +control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 's':
					for (j = 0; j < length; j += 4) {
						pt = current.multiply(2).subtract(control);
						control = getPoint(j);
						control2 = getPoint(j + 2, true);
						this.bezierCurveTo(+pt.x, +pt.y, +control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 'q':
					for (j = 0; j < length; j += 4) {
						control = getPoint(j);
						control2 = getPoint(j + 2, true);
						this.quadraticCurveTo(+control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 't':
					for (j = 0; j < length; j += 2) {
						control = current.multiply(2).subtract(control);
						control2 = getPoint(j, true);
						this.quadraticCurveTo(+control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 'a':
					for (j = 0; j < length; j += 7) {
						current = getPoint(j + 5);
						this.arcTo(+current.x, +current.y, +coords[0], +coords[1], +coords[2], +coords[4], +coords[3]);
					}
					break;
				case 'z':
					this.closePath();
					break;
			}
		}
	};

	_pGraphicsPath.isHitTest = function (x, y) {
		var pt = new nexacro.Point(+arguments[0], +arguments[1]);
		pt = this._globalMatrix._inverseTransform(pt);
		if (this._isClosed()) {
			return this._contains(pt);
		}
		else {
			var hitsize1 = 2;
			var hitsize2 = this._strokewidth / 2;
			return this._getStrokeCross(Math.max(hitsize1, hitsize2), pt);
		}
	};

	_pGraphicsPath.isPointInPath = function (x, y, tolerance) {
		var pt = new nexacro.Point(+arguments[0], +arguments[1]);
		if (!nexacro._isNumber(+tolerance)) {
			return this._contains(pt);
		}
		else {
			return this._getStrokeCross(+tolerance, pt);
		}
	};

	_pGraphicsPath._contains = function (pt) {
		var x = pt.x, y = pt.y;
		var segments = this._segments, crossings = 0, roots = new Array(3), last, previous;

		if (segments.length < 2) {
			return false;
		}

		last = this._getValues(segments[segments.length - 1], segments[0]);

		previous = last;

		var vals, tmpx, tmpy;
		for (var i = 0, l = segments.length - 1; i < l; i++) {
			vals = this._getValues(segments[i], segments[i + 1]);
			tmpx = vals[0];
			tmpy = vals[1];
			if (!(tmpx === vals[2] && tmpy === vals[3] && tmpx === vals[4]
				 && tmpy === vals[5] && tmpx === vals[6] && tmpy === vals[7])) {
				crossings += this._getCrossings(vals, previous, x, y, roots);
				previous = vals;
			}
		}
		crossings += this._getCrossings(last, previous, x, y, roots);
		return (crossings & 1) === 1;
	};

	_pGraphicsPath._getStrokeCross = function (tolerance, pt) {
		var segs = this._segments, i = 0, l = 0, sz = tolerance / 2;

		if (segs.length === 0) {
			return null;
		}
		var hitRect = new nexacro.Rect(pt.x - sz, pt.y - sz, tolerance, tolerance);
		var firstPt = segs[0].point.clone(), args = [], pt2, controlPt1, controlPt2, seg1, seg2;

		var topLeftPt = new nexacro.Point(hitRect.left, hitRect.top), bottomRightPt = new nexacro.Point(hitRect.getRight(), hitRect.getBottom());

		while (i < 4) {
			args[i] = new nexacro.Point();
			i++;
		}
		args[0].x = firstPt.x;
		args[0].y = firstPt.y;
		for (i = 0, l = segs.length - 1; i < l; i++) {
			seg1 = segs[i];
			seg2 = segs[i + 1];

			pt2 = seg2.point;
			controlPt1 = seg1.outVector;
			controlPt2 = seg2.inVector;
			if (!(controlPt1 && controlPt2) || (controlPt1.isZero() && controlPt2.isZero())) {
				args[1].x = pt2.x;
				args[1].y = pt2.y;

				if (this._intersectLineRectangle(args[0], args[1], topLeftPt, bottomRightPt)) {
					return true;
				}
				args[0].x = pt2.x;
				args[0].y = pt2.y;
			}
			else {
				args[1].x = controlPt1.x;
				args[1].y = controlPt1.y;
				args[2].x = controlPt2.x;
				args[2].y = controlPt2.y;
				args[3].x = pt2.x;
				args[3].y = pt2.y;
				if (this._intersectBezier3Rectangle(args[0], args[1], args[2], args[3], topLeftPt, bottomRightPt)) {
					return true;
				}
				args[0].x = pt2.x;
				args[0].y = pt2.y;
			}
		}
		if (this._closed) {
			seg1 = segs[segs.length - 1];
			seg2 = segs[0];

			pt2 = seg2.point;
			controlPt1 = seg1.outVector;
			controlPt2 = seg2.inVector;
			if (!(controlPt1 && controlPt2) || (controlPt1.isZero() && controlPt2.isZero())) {
				args[1].x = pt2.x;
				args[1].y = pt2.y;
				if (this._intersectLineRectangle(args[0], args[1], topLeftPt, bottomRightPt)) {
					return true;
				}
				args[0].x = pt2.x;
				args[0].y = pt2.y;
			}
			else {
				args[1].x = controlPt1.x;
				args[1].y = controlPt1.y;
				args[2].x = controlPt2.x;
				args[2].y = controlPt2.y;
				args[3].x = pt2.x;
				args[3].y = pt2.y;
				if (this._intersectBezier3Rectangle(args[0], args[1], args[2], args[3], topLeftPt, bottomRightPt)) {
					return true;
				}
				args[0].x = pt2.x;
				args[0].y = pt2.y;
			}
		}
		return false;
	};

	_pGraphicsPath.on_getRect = function (bStrokeWidth, iscurrent) {
		var rect = this._rect;
		var strokecap = this._strokecap || "butt";
		var strokejoin = this._strokejoin || "miter";
		var segs = this._segments;
		var isSameLine = false;
		var isxsame = false;
		var isysame = false;
		var i = 0;
		var l = 0;
		function getAngle (pt1, pt2, pt3) {
			var a = Math.sqrt(Math.pow(pt1.x - pt3.x, 2) + Math.pow(pt1.y - pt3.y, 2));
			var b = Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2));
			var c = Math.sqrt(Math.pow(pt2.x - pt3.x, 2) + Math.pow(pt2.y - pt3.y, 2));

			var ret = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 *  b *  c);
			var angle = Math.acos(ret);
			angle = angle *  (180 / Math.PI);
			return angle;
		}
		function getDistance (x1, y1, x2, y2) {
			var nLen = Math.sqrt((x2 - x1) *  (x2 - x1) + (y2 - y1) *  (y2 - y1));
			return nLen;
		}
		function getUnitVector (ptAnchor, ptPos) {
			var pt = {
				x : 0, 
				y : 0
			};
			if (ptAnchor.x - ptPos.x == 0 && ptAnchor.y - ptPos.y == 0) {
				return pt;
			}

			var dx = ptAnchor.x - ptPos.x;
			var dy = ptAnchor.y - ptPos.y;

			var len = getDistance(ptAnchor.x, ptAnchor.y, ptPos.x, ptPos.y);
			pt.x = dx / len;
			pt.y = dy / len;

			return pt;
		}
		if (iscurrent) {
			rect = null;
		}
		if (!rect) {
			var spt1;
			var spt2;
			var spt3;
			var xcnt = 1;
			var ycnt = 1;
			var conPt1;
			var conPt2;
			var curvechk = false;

			for (i = 0, l = segs.length; i < l; i++) {
				conPt1 = segs[i].outVector;
				conPt2 = segs[i].inVector;
				if (!(conPt1 && conPt2) || (conPt1.isZero() && conPt2.isZero())) {
					curvechk = true;
				}
				if (i > 0) {
					if (curvechk) {
						if (segs[i].point.x == segs[0].point.x) {
							xcnt++;
						}
						if (segs[i].point.y == segs[0].point.y) {
							ycnt++;
						}
					}
				}
				if (i == 0) {
					if (this._closed) {
						spt1 = segs[segs.length - 1].point;
						spt2 = segs[i].point;
						if (segs[i + 1]) {
							spt3 = segs[i + 1].point;
						}
						else {
							spt3 = segs[segs.length - 1].point;
						}
					}
					else {
						segs[i]._miterval = 0;

						segs[i]._miterval = this._getStrokeWidth() / 2;
						segs[i]._miterval += 1;

						continue;
					}
				}
				else if (i == segs.length - 1) {
					if (this._closed) {
						spt1 = segs[i - 1].point;
						spt2 = segs[i].point;
						spt3 = segs[0].point;
					}
					else {
						segs[i]._miterval = 0;
						segs[i]._miterval = this._getStrokeWidth() / 2;
						segs[i]._miterval += 1;

						continue;
					}
				}
				else {
					spt1 = segs[i - 1].point;
					spt2 = segs[i].point;
					spt3 = segs[i + 1].point;
				}

				var degree = getAngle(spt1, spt2, spt3);
				if ((degree > (this._miterlimit || 10)) && strokejoin == "miter") {
					var miterlength = (this._getStrokeWidth() / Math.sin(degree *  Math.PI / 360));

					segs[i]._miterval = miterlength / 2;
					segs[i]._miterval += 1;
				}
				else {
					segs[i]._miterval = this._getStrokeWidth() / 2;
					segs[i]._miterval += 1;
				}
			}
			if (xcnt == segs.length) {
				isxsame = true;
			}
			if (ycnt == segs.length) {
				isysame = true;
			}
			if (isxsame || isysame) {
				isSameLine = true;
			}
			if (isSameLine) {
				bStrokeWidth = true;
			}





			if (segs.length === 0) {
				rect = new nexacro.Rect();
				this._rect = rect;
				return rect;
			}
			var pt = segs[0].point, pt2, controlPt1, controlPt2, seg1, seg2, tmpX, tmpY;
			var curx = pt.x;
			var cury = pt.y;
			for (i = 0, l = segs.length - 1; i < l; i++) {
				seg1 = segs[i];
				seg2 = segs[i + 1];

				pt2 = seg2.point;
				controlPt1 = seg1.outVector;
				controlPt2 = seg2.inVector;
				if (!(controlPt1 && controlPt2) || (controlPt1.isZero() && controlPt2.isZero())) {
					tmpX = pt2.x;
					tmpY = pt2.y;
					if (!rect) {
						rect = new nexacro.Rect(Math.min(curx, tmpX), Math.min(cury, tmpY), Math.max(curx, tmpX) - Math.min(curx, tmpX), Math.max(cury, tmpY) - Math.min(cury, tmpY));
					}
					else {
						this._unionRect(rect, Math.min(curx, tmpX), Math.min(cury, tmpY), Math.max(curx, tmpX), Math.max(cury, tmpY));
					}
					curx = tmpX;
					cury = tmpY;
				}
				else {
					rect = this._getCurveBounds(curx, cury, controlPt1.x, controlPt1.y, controlPt2.x, controlPt2.y, pt2.x, pt2.y, rect);
					curx = pt2.x;
					cury = pt2.y;
				}
			}
			if (this._closed) {
				seg1 = segs[segs.length - 1];
				seg2 = segs[0];

				pt2 = seg2.point;
				controlPt1 = seg1.outVector;
				controlPt2 = seg2.inVector;
				if (!(controlPt1 && controlPt2) || (controlPt1.isZero() && controlPt2.isZero())) {
					tmpX = pt2.x;
					tmpY = pt2.y;
					if (!rect) {
						rect = new nexacro.Rect(Math.min(curx, tmpX), Math.min(cury, tmpY), Math.max(curx, tmpX) - Math.min(curx, tmpX), Math.max(cury, tmpY) - Math.min(cury, tmpY));
					}
					else {
						this._unionRect(rect, Math.min(curx, tmpX), Math.min(cury, tmpY), Math.max(curx, tmpX), Math.max(cury, tmpY));
					}
				}
				else {
					rect = this._getCurveBounds(curx, cury, controlPt1.x, controlPt1.y, controlPt2.x, controlPt2.y, pt2.x, pt2.y, rect);
				}
			}
			if (!rect) {
				rect = new nexacro.Rect();
				this._rect = rect;
				if (bStrokeWidth) {
					rect = rect.expand(this._getStrokeWidth() / 2);
				}
				return rect;
			}
			if (!iscurrent) {
				this._rect = rect;
			}
		}
		if (bStrokeWidth) {
			var ptPos = {
				x : 0, 
				y : 0
			};
			var originpoint = {
				x : rect.getCenterPoint().x, 
				y : rect.getCenterPoint().y
			};
			var vUnit;

			var _left = rect.left;
			var _top = rect.top;
			var _right = rect.right;
			var _bottom = rect.bottom;

			var boundx;
			var boundy;

			for (i = 0, l = segs.length; i < l; i++) {
				var seg = segs[i];
				ptPos.x = seg.point.x;
				ptPos.y = seg.point.y;

				vUnit = getUnitVector(ptPos, originpoint);
				var tmpx = Math.abs(vUnit.x);
				var tmpy = Math.abs(vUnit.y);
				vUnit.x = Math.max(tmpx, tmpy);
				vUnit.y = Math.max(tmpx, tmpy);
				var miterval;
				if (rect.left == seg.point.x) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isysame) {
						miterval = 1;
					}

					boundx = ptPos.x + vUnit.x *  miterval;
					boundx = boundx - rect.left;
					_left = rect.left - Math.abs(boundx);
				}
				if (rect.top == seg.point.y) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isxsame) {
						miterval = 1;
					}

					boundy = ptPos.y + vUnit.y *  miterval;
					boundy = boundy - rect.top;
					_top = rect.top - Math.abs(boundy);
				}
				if (rect.right == seg.point.x) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isysame) {
						miterval = 1;
					}

					boundx = ptPos.x + vUnit.x *  miterval;
					boundx = boundx - rect.right;
					_right = rect.right + Math.abs(boundx);
				}
				if (rect.bottom == seg.point.y) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isxsame) {
						miterval = 1;
					}

					boundy = ptPos.y + vUnit.y *  miterval;
					boundy = boundy - rect.bottom;


					_bottom = rect.bottom + Math.abs(boundy);
				}
			}
			rect.set(_left, _top, _right - _left, _bottom - _top);
		}

		return rect;
	};

	_pGraphicsPath._unionRect = function (rect, left, top, right, bottom) {
		var l = Math.min(rect.left, left);
		var t = Math.min(rect.top, top);
		var r = Math.max(rect.getRight(), right);
		var b = Math.max(rect.getBottom(), bottom);
		rect.left = l;
		rect.top = t;
		rect.right = r;
		rect.bottom = b;
		rect.width = r - l;
		rect.height = b - t;
	};

	_pGraphicsPath._adjustSegments = function () {
		if (this._pathDataChanged) {
			var length = this._countSegs(), segments = this._segments, seg;
			for (var i = 0; i < length; i++) {
				seg = segments[i];
				seg.nextSeg = segments[i + 1] || segments[0];
			}
			this._pathDataChanged;
		}
	};

	_pGraphicsPath._countSegs = function () {
		var length = this._segments.length;
		return !this._closed && length > 0 ? length - 1 : length;
	};

	_pGraphicsPath.on_drawShape = function (ctx, strokeMatrix) {
		var segs = this._segments, mpt = segs[0].point, coords, i, l = 0;


		if (segs.length === 0) {
			return;
		}

		var gap = 0;
		if (this._isOddStrokeWidth) {
			gap = 0.5;
		}
		function drawSegment_strokeMatrix (seg1, seg2, skipLine) {
			var point2 = seg2.point, controlPt1 = seg1.outVector, controlPt2 = seg2.inVector;

			var cnt = 2, isLine = 2;
			coords[0] = point2.x;
			coords[1] = point2.y;
			if (controlPt2 && !controlPt2.isZero()) {
				coords[cnt++] = controlPt2.x;
				coords[cnt++] = controlPt2.y;
				isLine -= 1;
			}
			if (controlPt1 && !controlPt1.isZero()) {
				coords[cnt++] = controlPt1.x;
				coords[cnt++] = controlPt1.y;
				isLine -= 1;
			}
			strokeMatrix._transformCoordinates(coords, 0, coords, 0, cnt / 2);
			if (isLine != 0) {
				if (!skipLine) {
					ctx.lineTo(parseInt(coords[0]) + gap, parseInt(coords[1]) + gap);
				}
			}
			else {
				ctx.bezierCurveTo(parseInt(coords[4]) + gap, parseInt(coords[5]) + gap, parseInt(coords[2]) + gap, parseInt(coords[3]) + gap, parseInt(coords[0]) + gap, parseInt(coords[1]) + gap);
			}
		}

		function drawSegment (seg1, seg2, skipLine) {
			var point2 = seg2.point, controlPt1 = seg1.outVector, controlPt2 = seg2.inVector;

			if (!(controlPt1 && controlPt2) || (controlPt1.isZero() && controlPt2.isZero())) {
				if (!skipLine) {
					ctx.lineTo(point2.x + gap, point2.y + gap);
				}
			}
			else {
				ctx.bezierCurveTo(controlPt1.x + gap, controlPt1.y + gap, controlPt2.x + gap, controlPt2.y + gap, point2.x + gap, point2.y + gap);
			}
		}


		ctx.beginPath();
		if (strokeMatrix) {
			coords = new Array(6);
			coords[0] = mpt.x;
			coords[1] = mpt.y;
			strokeMatrix._transformCoordinates(coords, 0, coords, 0, 1);
			ctx.moveTo(parseInt(coords[0]) + gap, parseInt(coords[1]) + gap);


			for (i = 0, l = segs.length - 1; i < l; i++) {
				drawSegment_strokeMatrix(segs[i], segs[i + 1], false);
			}
			if (this._closed) {
				drawSegment_strokeMatrix(segs[segs.length - 1], segs[0], true);
				ctx.closePath();
			}
		}
		else {
			ctx.moveTo(mpt.x + gap, mpt.y + gap);
			for (i = 0, l = segs.length - 1; i < l; i++) {
				drawSegment(segs[i], segs[i + 1], false);
			}
			if (this._closed) {
				drawSegment(segs[segs.length - 1], segs[0], true);
				ctx.closePath();
			}
		}
	};

	_pGraphicsPath._getSegPathData = function (parts, seg1, seg2, skipLine) {
		var point2 = seg2.point, controlPt1 = seg1.outVector, controlPt2 = seg2.inVector, fmtNumber = nexacro._GraphicsLib.toStrFormatNumber;
		if (!(controlPt1 && controlPt2) || (controlPt1.isZero() && controlPt2.isZero())) {
			if (!skipLine) {
				parts.push('L' + fmtNumber(point2.x) + ',' + fmtNumber(point2.y));
			}
		}
		else {
			parts.push('C' + fmtNumber(controlPt1.x) + ',' + fmtNumber(controlPt1.y)
				 + ' ' + fmtNumber(controlPt2.x) + ',' + fmtNumber(controlPt2.y)
				 + ' ' + fmtNumber(point2.x) + ',' + fmtNumber(point2.y));
		}
	};

	_pGraphicsPath._getCurrentSegment = function (index) {
		var segments = this._segments;
		if (segments.length == 0) {
		}
		return segments[segments.length - 1];
	};

	_pGraphicsPath._getCurveBounds = function (sx, sy, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, eX, eY, rect) {
		var coords, prevCoords = [sx, sy, 0, 0, ctrl1X, ctrl1Y], min = [sx, sy], max = [sx, sy], roots = new Array(2), strokePadding = this._strokepadding;

		coords = [eX, eY, ctrl2X, ctrl2Y, 0, 0];
		for (var i = 0; i < 2; i++) {
			this._calcCurve(prevCoords[i], prevCoords[i + 4], coords[i + 2], coords[i], i, strokePadding, min, max, roots);
		}
		if (!rect) {
			rect = new nexacro.Rect(min[0], min[1], max[0] - min[0], max[1] - min[1]);
		}
		else {
			this._unionRect(rect, min[0], min[1], max[0], max[1]);
		}
		return rect;
	};

	_pGraphicsPath._calcCurve = function (v0, v1, v2, v3, xyCoord, padding, min, max, roots) {
		var a = 3 *  (v1 - v2) - v0 + v3, b = 2 *  (v0 + v2) - 4 *  v1, c = v1 - v0, count = nexacro._GraphicsLib.mathSolveQuadratic(a, b, c, roots), tMin = this._curvemin, tMax = this._curvemax, u, t;

		this._calcCurveMinMax(v3, 0, xyCoord, min, max);
		for (var i = 0; i < count; i++) {
			t = roots[i];
			u = 1 - t;
			if (tMin < t && t < tMax) {
				this._calcCurveMinMax(u *  u *  u *  v0
					 + 3 *  u *  u *  t *  v1
					 + 3 *  u *  t *  t *  v2
					 + t *  t *  t *  v3, padding, xyCoord, min, max);
			}
		}
	};

	_pGraphicsPath._calcCurveMinMax = function (value, padding, xyCoord, min, max) {
		var left = value - padding, right = value + padding;

		if (left < min[xyCoord]) {
			min[xyCoord] = left;
		}
		if (right > max[xyCoord]) {
			max[xyCoord] = right;
		}
	};

	_pGraphicsPath._intersectLineLine = function (line1StartPt, line1EndPt, line2StartPt, line2EndPt, resPt) {
		var line2DistX = line2EndPt.x - line2StartPt.x, line2DistY = line2EndPt.y - line2StartPt.y, line1DistX = line1EndPt.x - line1StartPt.x, line1DistY = line1EndPt.y - line1StartPt.y, ua_t = line2DistX *  (line1StartPt.y - line2StartPt.y) - line2DistY *  (line1StartPt.x - line2StartPt.x), ub_t = line1DistX *  (line1StartPt.y - line2StartPt.y) - line1DistY *  (line1StartPt.x - line2StartPt.x), u_b = line2DistY *  line1DistX - line2DistX *  line1DistY;

		if (!nexacro._GraphicsLib.mathIsZero(u_b)) {
			var ua = ua_t / u_b;
			var ub = ub_t / u_b;

			if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
				resPt.x = line1StartPt.x + ua *  (line1EndPt.x - line1StartPt.x);
				resPt.y = line1StartPt.y + ua *  (line1EndPt.y - line1StartPt.y);
				return true;
			}
		}
		return false;
	};

	_pGraphicsPath._intersectLineRectangle = function (lineStartPt, lineEndPt, rectTopLeftPt, rectBottomRightPt) {
		var clsPoint = nexacro.Point;
		var minPt = clsPoint.min(rectTopLeftPt, rectBottomRightPt);
		var maxPt = clsPoint.max(rectTopLeftPt, rectBottomRightPt);
		var topRightPt = new clsPoint(maxPt.x, minPt.y);
		var bottomLeftPt = new clsPoint(minPt.x, maxPt.y);
		var inter1 = new clsPoint(), inter2 = new clsPoint(), inter3 = new clsPoint(), inter4 = new clsPoint();
		var ret = this._intersectLineLine(minPt, topRightPt, lineStartPt, lineEndPt, inter1);
		var resPts = [];
		if (ret) {
			resPts.push(inter1);
		}
		ret = this._intersectLineLine(topRightPt, maxPt, lineStartPt, lineEndPt, inter2);
		if (ret) {
			resPts.push(inter2);
		}
		ret = this._intersectLineLine(maxPt, bottomLeftPt, lineStartPt, lineEndPt, inter3);
		if (ret) {
			resPts.push(inter3);
		}
		ret = this._intersectLineLine(bottomLeftPt, minPt, lineStartPt, lineEndPt, inter4);
		if (ret) {
			resPts.push(inter4);
		}
		if (resPts.length) {
			return resPts;
		}
	};

	_pGraphicsPath._intersectBezier3Line = function (startPt, control1Pt, control2Pt, endPt, lineStartPt, lineEndPt, resPts) {
		var clsPoint = nexacro.Point;
		var a, b, c, d;
		var c3, c2, c1, c0;
		var cl;
		var n;
		var min = clsPoint.min(lineStartPt, lineEndPt);
		var max = clsPoint.max(lineStartPt, lineEndPt);


		a = startPt.multiply(-1);
		b = control1Pt.multiply(3);
		c = control2Pt.multiply(-3);
		d = a.add(b.add(c.add(endPt)));
		c3 = new clsPoint(d.x, d.y);

		a = startPt.multiply(3);
		b = control1Pt.multiply(-6);
		c = control2Pt.multiply(3);
		d = a.add(b.add(c));
		c2 = new clsPoint(d.x, d.y);

		a = startPt.multiply(-3);
		b = control1Pt.multiply(3);
		c = a.add(b);
		c1 = new clsPoint(c.x, c.y);

		c0 = new clsPoint(startPt.x, startPt.y);

		n = new clsPoint(lineStartPt.y - lineEndPt.y, lineEndPt.x - lineStartPt.x);

		cl = lineStartPt.x *  lineEndPt.y - lineEndPt.x *  lineStartPt.y;

		var roots = [];
		nexacro._GraphicsLib.mathSolveBezier(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl, roots);

		for (var i = 0; i < roots.length; i++) {
			var t = roots[i];

			if (0 <= t && t <= 1) {
				var p5 = startPt.lerp(control1Pt, t);
				var p6 = control1Pt.lerp(control2Pt, t);
				var p7 = control2Pt.lerp(endPt, t);

				var p8 = p5.lerp(p6, t);
				var p9 = p6.lerp(p7, t);

				var p10 = p8.lerp(p9, t);

				if (lineStartPt.x == lineEndPt.x) {
					if (min.y <= p10.y && p10.y <= max.y) {
						resPts.push(p10);
					}
				}
				else if (lineStartPt.y == lineEndPt.y) {
					if (min.x <= p10.x && p10.x <= max.x) {
						resPts.push(p10);
					}
				}
				else if (p10.gte(min) && p10.lte(max)) {
					resPts.push(p10);
				}
			}
		}
		if (resPts.length) {
			return true;
		}
		return false;
	};

	_pGraphicsPath._intersectBezier3Rectangle = function (startPt, control1Pt, control2Pt, endPt, rectTopLeftPt, rectBottomRightPt) {
		var clsPoint = nexacro.Point;
		var minPt = clsPoint.min(rectTopLeftPt, rectBottomRightPt);
		var maxPt = clsPoint.max(rectTopLeftPt, rectBottomRightPt);
		var topRightPt = new clsPoint(maxPt.x, minPt.y);
		var bottomLeftPt = new clsPoint(minPt.x, maxPt.y);
		var inter1 = [], inter2 = [], inter3 = [], inter4 = [];

		var ret = this._intersectBezier3Line(startPt, control1Pt, control2Pt, endPt, minPt, topRightPt, inter1);
		var resPts = [];
		if (ret) {
			resPts = resPts.concat(inter1);
		}
		ret = this._intersectBezier3Line(startPt, control1Pt, control2Pt, endPt, topRightPt, maxPt, inter2);
		if (ret) {
			resPts = resPts.concat(inter2);
		}
		ret = this._intersectBezier3Line(startPt, control1Pt, control2Pt, endPt, maxPt, bottomLeftPt, inter3);
		if (ret) {
			resPts = resPts.concat(inter3);
		}
		ret = this._intersectBezier3Line(startPt, control1Pt, control2Pt, endPt, bottomLeftPt, minPt, inter4);
		if (ret) {
			resPts = resPts.concat(inter4);
		}
		if (resPts.length) {
			return resPts;
		}
	};

	_pGraphicsPath._getValues = function (seg1, seg2) {
		var pt1 = seg1.point;
		var pt2 = seg2.point;
		var controlPt1 = seg1.outVector;
		var controlPt2 = seg2.inVector;

		if (!(controlPt1 && controlPt2) || (controlPt1.isZero() && controlPt2.isZero())) {
			return [pt1.x, pt1.y, pt1.x, pt1.y, pt2.x, pt2.y, pt2.x, pt2.y
			];
		}
		else {
			return [pt1.x, pt1.y, controlPt1.x, controlPt1.y, controlPt2.x, controlPt2.y, pt2.x, pt2.y
			];
		}
	};

	_pGraphicsPath._evaluate = function (v, t, type) {
		var p1x = v[0], p1y = v[1], c1x = v[2], c1y = v[3], c2x = v[4], c2y = v[5], p2x = v[6], p2y = v[7], x, y;

		if (type === 0 && (t === 0 || t === 1)) {
			x = t === 0 ? p1x : p2x;
			y = t === 0 ? p1y : p2y;
		}
		else {
			var cx = 3 *  (c1x - p1x), bx = 3 *  (c2x - c1x) - cx, ax = p2x - p1x - cx - bx, cy = 3 *  (c1y - p1y), by = 3 *  (c2y - c1y) - cy, ay = p2y - p1y - cy - by;
			if (type === 0) {
				x = ((ax *  t + bx) *  t + cx) *  t + p1x;
				y = ((ay *  t + by) *  t + cy) *  t + p1y;
			}
			else {
				var tMin = this._curvemin;
				if (t < tMin && c1x == p1x && c1y == p1y
					 || t > 1 - tMin && c2x == p2x && c2y == p2y) {
					x = c2x - c1x;
					y = c2y - c1y;
				}
				else {
					x = (3 *  ax *  t + 2 *  bx) *  t + cx;
					y = (3 *  ay *  t + 2 *  by) *  t + cy;
				}
				if (type === 3) {
					var x2 = 6 *  ax *  t + 2 *  bx, y2 = 6 *  ay *  t + 2 *  by;
					return (x *  y2 - y *  x2) / Math.pow(x *  x + y *  y, 3 / 2);
				}
			}
		}
		return type == 2 ? new nexacro.Point(y, -x) : new nexacro.Point(x, y);
	};

	_pGraphicsPath._solveBezier = function (v, coord, val, roots) {
		var p1 = v[coord], c1 = v[coord + 2], c2 = v[coord + 4], p2 = v[coord + 6], c = 3 *  (c1 - p1), b = 3 *  (c2 - c1) - c, a = p2 - p1 - c - b;
		return nexacro._GraphicsLib.mathSolveBezier(a, b, c, p1 - val, roots);
	};

	_pGraphicsPath._getParameterOf = function (v, x, y) {
		var tMin = this._curvemin;
		if (Math.abs(v[0] - x) < tMin
			 && Math.abs(v[1] - y) < tMin) {
			return 0;
		}
		if (Math.abs(v[6] - x) < tMin
			 && Math.abs(v[7] - y) < tMin) {
			return 1;
		}
		var txs = [], tys = [], sx = this._solveBezier(v, 0, x, txs), sy = this._solveBezier(v, 1, y, tys), tx, ty;
		for (var cx = 0; sx == -1 || cx < sx; ) {
			if (sx == -1 || (tx = txs[cx++]) >= 0 && tx <= 1) {
				for (var cy = 0; sy == -1 || cy < sy; ) {
					if (sy == -1 || (ty = tys[cy++]) >= 0 && ty <= 1) {
						if (sx == -1) {
							tx = ty;
						}
						else if (sy == -1) {
							ty = tx;
						}
						if (Math.abs(tx - ty) < tMin) {
							return (tx + ty) *  0.5;
						}
					}
				}
				if (sx == -1) {
					break;
				}
			}
		}
		return null;
	};

	_pGraphicsPath._changesOrientation = function (tangent, prev) {
		return this._evaluate(prev, 1, 1).y *  tangent.y > 0;
	};

	_pGraphicsPath._getAngle = function (pt) {
		return this._getAngleInRadians.apply(this, arguments) *  180 / Math.PI;
	};

	_pGraphicsPath._getAngleInRadians = function (pt0) {
		if (arguments.length == 1) {
			return Math.atan2(pt0.y, pt0.x);
		}
		else {
			var pt = arguments[1];
			if (!(pt instanceof nexacro.Point)) {
				pt = new nexacro.Point(+arguments[1], +arguments[2]);
			}
			var div = this.getLength() *  pt.getLength();
			if (div === 0) {
				return NaN;
			}
			else {
				return Math.acos(this.dot(pt) / div);
			}
		}
	};

	_pGraphicsPath._getCrossings = function (v, prev, x, y, roots) {
		var count = this._solveBezier(v, 1, y, roots), crossings = 0, tolerance = this._curvemin;


		if (count === -1) {
			roots[0] = this._getParameterOf(v, x, y);
			count = roots[0] !== null ? 1 : 0;
		}

		for (var i = 0; i < count; i++) {
			var t = roots[i];
			if (t > -tolerance && t < 1 - tolerance) {
				var pt = this._evaluate(v, t, 0);
				if (x < pt.x + tolerance) {
					var tan = this._evaluate(v, t, 1);
					if (Math.abs(pt.x - x) < tolerance) {
						var angle = this._getAngle(tan);
						if (angle > -180 && angle < 0
							 && (t > tolerance || this._changesOrientation(tan, prev))) {
							continue;
						}
					}
					else {
						if (Math.abs(tan.y) < tolerance
							 || t < tolerance && !this._changesOrientation(tan, prev)) {
							continue;
						}
					}
					crossings++;
				}
			}
		}
		return crossings;
	};

	delete _pGraphicsPath;
}

if (!nexacro.GraphicsLine) {
	nexacro.GraphicsLine = function () {
		nexacro._GraphicsObject.prototype.constructor.apply(this, arguments);

		this._type = "Line";
		var addarr = [];
		var seg = {
		};
		seg = {
			point : new nexacro.Point(0, 0), 
			nextSeg : null
		};
		addarr.push(seg);
		seg = {
			point : new nexacro.Point(0, 0), 
			nextSeg : null
		};
		addarr.push(seg);
		this._segments = [];
		this._add(addarr);
	};

	var _pGraphicsLine = nexacro.GraphicsLine.prototype = nexacro._createPrototype(nexacro._GraphicsObject, nexacro.GraphicsLine);
	_pGraphicsLine._type_name = "GraphicsLine";

	_pGraphicsLine.x1 = 0;
	_pGraphicsLine.y1 = 0;
	_pGraphicsLine.x2 = 0;
	_pGraphicsLine.y2 = 0;

	_pGraphicsLine._strokepadding = 0;

	_pGraphicsLine._closed = false;

	_pGraphicsLine.set_x1 = function (v) {
		if (!nexacro._isNumber(v)) {
			return;
		}
		var segs = this._segments;
		if (segs[0].point.x != v) {
			segs[0].point.x = v;
			this.x1 = v;
			this._drawflags |= 4;
		}
	};

	_pGraphicsLine.set_y1 = function (v) {
		if (!nexacro._isNumber(v)) {
			return;
		}
		var segs = this._segments;
		if (segs[0].point.y != v) {
			segs[0].point.y = v;
			this.y1 = v;
			this._drawflags |= 4;
		}
	};

	_pGraphicsLine.set_x2 = function (v) {
		if (!nexacro._isNumber(v)) {
			return;
		}
		var segs = this._segments;
		if (segs[1].point.x != v) {
			segs[1].point.x = v;
			this.x2 = v;
			this._drawflags |= 4;
		}
	};

	_pGraphicsLine.set_y2 = function (v) {
		if (!nexacro._isNumber(v)) {
			return;
		}
		var segs = this._segments;
		if (segs[1].point.y != v) {
			segs[1].point.y = v;
			this.y2 = v;
			this._drawflags |= 4;
		}
	};


	_pGraphicsLine.destroy = function () {
		this.x1 = null;
		this.x1 = null;
		this.x2 = null;
		this.y2 = null;

		delete this._segments;
		this._segments = null;
		this._strokepadding = null;
		this._strokejoin = null;
		this._closed = null;
		nexacro._GraphicsObject.prototype.destroy.call(this);
	};
	_pGraphicsLine.on_apply_Segments = function () {
	};
	_pGraphicsLine.on_drawShape = function (ctx, strokeMatrix) {
		var segs = this._segments, mpt = segs[0].point, coords, i, l = 0;


		if (segs.length === 0) {
			return;
		}

		var gap = 0;
		if (this._isOddStrokeWidth) {
			gap = 0.5;
		}
		function drawSegment_strokeMatrix (seg1, seg2, skipLine) {
			var point2 = seg2.point;


			var cnt = 2;
			coords[0] = point2.x;
			coords[1] = point2.y;

			strokeMatrix._transformCoordinates(coords, 0, coords, 0, cnt / 2);

			if (!skipLine) {
				ctx.lineTo(parseInt(coords[0]) + gap, parseInt(coords[1]) + gap);
			}
		}

		function drawSegment (seg1, seg2, skipLine) {
			var point2 = seg2.point;


			if (!skipLine) {
				ctx.lineTo(point2.x + gap, point2.y + gap);
			}
		}



		ctx.beginPath();
		if (strokeMatrix) {
			coords = new Array(6);
			coords[0] = mpt.x;
			coords[1] = mpt.y;
			strokeMatrix._transformCoordinates(coords, 0, coords, 0, 1);
			ctx.moveTo(parseInt(coords[0]) + gap, parseInt(coords[1]) + gap);


			for (i = 0, l = segs.length - 1; i < l; i++) {
				drawSegment_strokeMatrix(segs[i], segs[i + 1], false);
			}
		}
		else {
			ctx.moveTo(mpt.x + gap, mpt.y + gap);
			for (i = 0, l = segs.length - 1; i < l; i++) {
				drawSegment(segs[i], segs[i + 1], false);
			}
		}
	};
	_pGraphicsLine.isHitTest = function (x, y) {
		var pt = new nexacro.Point(+arguments[0], +arguments[1]);

		pt = this._globalMatrix._inverseTransform(pt);
		var hitsize1 = 2;
		var hitsize2 = this._strokewidth / 2;
		return this._getStrokeCross(Math.max(hitsize1, hitsize2), pt);
	};

	_pGraphicsLine.isPointInPath = function (x, y, tolerance) {
		var pt = new nexacro.Point(+arguments[0], +arguments[1]);
		if (!nexacro._isNumber(tolerance)) {
			return this.isHitTest(pt);
		}
		else {
			return this._getStrokeCross(tolerance, pt);
		}
	};

	_pGraphicsLine.hasSegments = function () {
		return this.on_hasSegments();
	};
	_pGraphicsLine.on_hasSegments = function () {
		return !(this._segments.length === 0);
	};
	_pGraphicsLine.on_IsNotDraw = function () {
		return !this.hasSegments();
	};
	_pGraphicsLine._getStrokeCross = function (tolerance, pt) {
		var segs = this._segments, i, l = 0, sz = tolerance / 2;

		if (segs.length === 0) {
			return null;
		}
		var hitRect = new nexacro.Rect(pt.x - sz, pt.y - sz, tolerance, tolerance);
		var firstPt = segs[0].point.clone(), args = [], pt2, seg2;

		var topLeftPt = new nexacro.Point(hitRect.left, hitRect.top), bottomRightPt = new nexacro.Point(hitRect.getRight(), hitRect.getBottom());

		while (i < 4) {
			args[i] = new nexacro.Point();
			i++;
		}
		args[0].x = firstPt.x;
		args[0].y = firstPt.y;
		for (i = 0, l = segs.length - 1; i < l; i++) {
			seg2 = segs[i + 1];

			pt2 = seg2.point;

			args[1].x = pt2.x;
			args[1].y = pt2.y;


			if (this._intersectLineRectangle(args[0], args[1], topLeftPt, bottomRightPt)) {
				return true;
			}
		}
		return false;
	};
	_pGraphicsLine._intersectLineLine = function (line1StartPt, line1EndPt, line2StartPt, line2EndPt, resPt) {
		var line2DistX = line2EndPt.x - line2StartPt.x, line2DistY = line2EndPt.y - line2StartPt.y, line1DistX = line1EndPt.x - line1StartPt.x, line1DistY = line1EndPt.y - line1StartPt.y, ua_t = line2DistX *  (line1StartPt.y - line2StartPt.y) - line2DistY *  (line1StartPt.x - line2StartPt.x), ub_t = line1DistX *  (line1StartPt.y - line2StartPt.y) - line1DistY *  (line1StartPt.x - line2StartPt.x), u_b = line2DistY *  line1DistX - line2DistX *  line1DistY;

		if (!nexacro._GraphicsLib.mathIsZero(u_b)) {
			var ua = ua_t / u_b;
			var ub = ub_t / u_b;

			if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
				resPt.x = line1StartPt.x + ua *  (line1EndPt.x - line1StartPt.x);
				resPt.y = line1StartPt.y + ua *  (line1EndPt.y - line1StartPt.y);
				return true;
			}
		}
		return false;
	};

	_pGraphicsLine._intersectLineRectangle = function (lineStartPt, lineEndPt, rectTopLeftPt, rectBottomRightPt) {
		var clsPoint = nexacro.Point;
		var minPt = clsPoint.min(rectTopLeftPt, rectBottomRightPt);
		var maxPt = clsPoint.max(rectTopLeftPt, rectBottomRightPt);
		var topRightPt = new clsPoint(maxPt.x, minPt.y);
		var bottomLeftPt = new clsPoint(minPt.x, maxPt.y);
		var inter1 = new clsPoint(), inter2 = new clsPoint(), inter3 = new clsPoint(), inter4 = new clsPoint();
		var ret = this._intersectLineLine(minPt, topRightPt, lineStartPt, lineEndPt, inter1);
		var resPts = [];
		if (ret) {
			resPts.push(inter1);
		}
		ret = this._intersectLineLine(topRightPt, maxPt, lineStartPt, lineEndPt, inter2);
		if (ret) {
			resPts.push(inter2);
		}
		ret = this._intersectLineLine(maxPt, bottomLeftPt, lineStartPt, lineEndPt, inter3);
		if (ret) {
			resPts.push(inter3);
		}
		ret = this._intersectLineLine(bottomLeftPt, minPt, lineStartPt, lineEndPt, inter4);
		if (ret) {
			resPts.push(inter4);
		}
		if (resPts.length) {
			return resPts;
		}
	};
	_pGraphicsLine._add = function (segs, index) {
		var segments = this._segments, append = index == null;


		index = append ? segments.length : index;

		if (append) {
			segments.push.apply(segments, segs);
		}
		else {
			segments.splice.apply(segments, [index, 0].concat(segs));
		}
		this._drawflags |= 4;
		return segs;
	};

	_pGraphicsLine.on_getRect = function (bStrokeWidth, iscurrent) {
		var rect = this._rect;
		var strokecap = this._strokecap || "butt";

		var segs = this._segments;
		var isSameLine = false;
		var isxsame = false;
		var isysame = false;
		var i = 0;
		var l = 0;
		function getDistance (x1, y1, x2, y2) {
			var nLen = Math.sqrt((x2 - x1) *  (x2 - x1) + (y2 - y1) *  (y2 - y1));
			return nLen;
		}
		function getUnitVector (ptAnchor, ptPos) {
			var pt = {
				x : 0, 
				y : 0
			};
			if (ptAnchor.x - ptPos.x == 0 && ptAnchor.y - ptPos.y == 0) {
				return pt;
			}

			var dx = ptAnchor.x - ptPos.x;
			var dy = ptAnchor.y - ptPos.y;

			var len = getDistance(ptAnchor.x, ptAnchor.y, ptPos.x, ptPos.y);
			pt.x = dx / len;
			pt.y = dy / len;

			return pt;
		}
		if ((this.x1 == this.x2) || (this.y1 == this.y2)) {
			isSameLine = true;
			if (isSameLine) {
				if (this.x1 == this.x2) {
					isxsame = true;
				}
				if (this.y1 == this.y2) {
					isysame = true;
				}
				bStrokeWidth = true;
			}
		}
		if (iscurrent) {
			rect = null;
		}
		if (!rect) {
			for (i = 0, l = segs.length; i < l; i++) {
				if (i == 0 || i == segs.length - 1) {
					segs[i]._miterval = 0;

					segs[i]._miterval = this._getStrokeWidth() / 2;
					segs[i]._miterval += 1;

					continue;
				}
			}

			if (segs.length === 0) {
				rect = new nexacro.Rect();
				this._rect = rect;
				return rect;
			}
			var pt = segs[0].point, pt2, seg2, tmpX, tmpY;
			var curx = pt.x;
			var cury = pt.y;
			for (i = 0, l = segs.length - 1; i < l; i++) {
				seg2 = segs[i + 1];

				pt2 = seg2.point;

				tmpX = pt2.x;
				tmpY = pt2.y;
				if (!rect) {
					rect = new nexacro.Rect(Math.min(curx, tmpX), Math.min(cury, tmpY), Math.max(curx, tmpX) - Math.min(curx, tmpX), Math.max(cury, tmpY) - Math.min(cury, tmpY));
				}
				else {
					this._unionRect(rect, Math.min(curx, tmpX), Math.min(cury, tmpY), Math.max(curx, tmpX), Math.max(cury, tmpY));
				}
				curx = tmpX;
				cury = tmpY;
			}

			if (!rect) {
				rect = new nexacro.Rect();
				this._rect = rect;
				if (bStrokeWidth) {
					rect = rect.expand(this._getStrokeWidth() / 2);
				}
				return rect;
			}
			if (!iscurrent) {
				this._rect = rect;
			}
		}
		if (bStrokeWidth) {
			var ptPos = {
				x : 0, 
				y : 0
			};
			var originpoint = {
				x : rect.getCenterPoint().x, 
				y : rect.getCenterPoint().y
			};
			var vUnit;

			var _left = rect.left;
			var _top = rect.top;
			var _right = rect.right;
			var _bottom = rect.bottom;

			var boundx;
			var boundy;

			for (i = 0, l = segs.length; i < l; i++) {
				var seg = segs[i];
				ptPos.x = seg.point.x;
				ptPos.y = seg.point.y;

				vUnit = getUnitVector(ptPos, originpoint);
				var tmpx = Math.abs(vUnit.x);
				var tmpy = Math.abs(vUnit.y);
				vUnit.x = Math.max(tmpx, tmpy);
				vUnit.y = Math.max(tmpx, tmpy);
				var miterval;
				if (rect.left == seg.point.x) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isysame) {
						miterval = 1;
					}

					boundx = ptPos.x + vUnit.x *  miterval;
					boundx = boundx - rect.left;
					_left = rect.left - Math.abs(boundx);
				}
				if (rect.top == seg.point.y) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isxsame) {
						miterval = 1;
					}

					boundy = ptPos.y + vUnit.y *  miterval;
					boundy = boundy - rect.top;
					_top = rect.top - Math.abs(boundy);
				}
				if (rect.right == seg.point.x) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isysame) {
						miterval = 1;
					}

					boundx = ptPos.x + vUnit.x *  miterval;
					boundx = boundx - rect.right;
					_right = rect.right + Math.abs(boundx);
				}
				if (rect.bottom == seg.point.y) {
					miterval = seg._miterval;
					if (strokecap == "butt" && isxsame) {
						miterval = 1;
					}

					boundy = ptPos.y + vUnit.y *  miterval;
					boundy = boundy - rect.bottom;


					_bottom = rect.bottom + Math.abs(boundy);
				}
			}
			rect.set(_left, _top, _right - _left, _bottom - _top);
		}

		return rect;
	};
	_pGraphicsLine._unionRect = function (rect, left, top, right, bottom) {
		var l = Math.min(rect.left, left);
		var t = Math.min(rect.top, top);
		var r = Math.max(rect.getRight(), right);
		var b = Math.max(rect.getBottom(), bottom);
		rect.left = l;
		rect.top = t;
		rect.width = r - l;
		rect.height = b - t;
	};

	_pGraphicsLine._countSegs = function () {
		var length = this._segments.length;
		return !this._closed && length > 0 ? length - 1 : length;
	};

	delete _pGraphicsLine;
}

if (!nexacro.GraphicsGroup) {
	nexacro.GraphicsGroup = function () {
		this._childchanged = 0;


		nexacro._GraphicsObject.prototype.constructor.apply(this, arguments);
	};

	var _pGraphicsGroup = nexacro.GraphicsGroup.prototype = nexacro._createPrototype(nexacro._GraphicsObject, nexacro.GraphicsGroup);
	_pGraphicsGroup._type = "Group";
	_pGraphicsGroup._type_name = "GraphicsGroup";


	_pGraphicsGroup.destroy = function () {
		this.clear();
		this._childchanged = null;
		nexacro._GraphicsObject.prototype.destroy.call(this);
	};

	_pGraphicsGroup.clear = function () {
		var node = this._firstchild, delected = false, removed = [];
		for (; node; node = node._nextsibling) {
			removed[removed.length] = node;
		}
		for (var i = 0, len = removed.length; i < len; i++) {
			node = removed[i];
			node._remove(true);
			node.parent = null;
			node._parent = null;
			node._nextsibling = null;
			node._previoussibling = null;
			delected = true;
		}

		this._childidx_map.clear();
		this.childlength = 0;

		if (delected) {
			this._firstchild._isfirstchild = false;
			this._firstchild = null;
			this._childchanged++;
			this._drawflags |= 4;
			var layer = this.on_getOwnerLayer();
			if (layer) {
				layer.on_TreeChanged();
			}
			var childListCache = this._childListCache;
			if (childListCache) {
				childListCache.fchild = null;
				childListCache.fchildindex = -1;
				childListCache.flength = -1;
			}
		}
	};

	_pGraphicsGroup.getObjectByID = function (id) {
		if (!id) {
			return null;
		}
		return this._getItemById(id);
	};

	_pGraphicsGroup.getObjects = function () {
		if (this._firstchild) {
			var children = this._children;
			if (!children || (children._changed != this._childchanged)) {
				children = [];
				var child = this._firstchild, seq = 0;
				for (; child != null; child = child._nextsibling) {
					children[seq] = child;
					seq++;
				}
				this._children = children;
				children._changed = this._childchanged;
			}
			return children;
		}
	};

	_pGraphicsGroup.getFirstChild = function () {
		return this._firstchild;
	};

	_pGraphicsGroup.getLastChild = function () {
		var child = this._firstchild;
		return child ? child._previoussibling : null;
	};

	_pGraphicsGroup.insertChild = function (idx, id, newChild) {
		var refChild = null;

		refChild = this._childidx_map.getItem(idx);
		if (refChild !== undefined && refChild !== null) {
			return this.on_insertBefore(newChild, id, refChild);
		}
		else {
			return this.on_insertBefore(newChild, id, null);
		}
	};

	_pGraphicsGroup.addChild = function (id, child) {
		return this.on_insertBefore(child, id, null);
	};

	_pGraphicsGroup.removeChild = function (id) {
		var obj = this.getObjectByID(id);
		if (obj) {
			return this.on_removeChild(obj);
		}
		else {
			return null;
		}
	};
	_pGraphicsGroup.indexOf = function (id) {
		var obj = this.getObjectByID(id);
		if (obj) {
			if (this._childidx_map && this._childidx_map.length > 0) {
				return this._childidx_map.indexOf(id);
			}
		}
		else {
			return -1;
		}
	};

	_pGraphicsGroup.hasChild = function () {
		return this.on_hasChild();
	};
	_pGraphicsGroup.on_hasChild = function () {
		return (this._firstchild != null);
	};
	_pGraphicsGroup.on_IsNotDraw = function () {
		return !this.hasChild();
	};
	_pGraphicsGroup.on_draw = function (ctx) {
		this._painted = 1;
	};
	_pGraphicsGroup.on_getRect = function (bStrokeWidth, iscurrent) {
		var child = this._firstchild;
		if (!child) {
			return new nexacro.Rect();
		}
		var rect = this._rect;
		if (iscurrent) {
			rect = null;
		}
		if (!rect) {
			var x1 = Infinity, x2 = -x1, y1 = x1, y2 = x2;

			for (; child != null; child = child._nextsibling) {
				if (child.visible && !child.on_IsNotDraw()) {
					rect = child._getBoundRect(false, iscurrent);
					x1 = Math.min(rect.left, x1);
					y1 = Math.min(rect.top, y1);
					x2 = Math.max(rect.left + rect.width, x2);
					y2 = Math.max(rect.top + rect.height, y2);
				}
			}
			rect = isFinite(x1) ? new nexacro.Rect(x1, y1, x2 - x1, y2 - y1) : new nexacro.Rect();
			if (!iscurrent) {
				this._rect = rect;
			}
		}

		return rect;
	};
	delete _pGraphicsGroup;
}

if (!nexacro.GraphicsPaths) {
	nexacro.GraphicsPaths = function () {
		nexacro.GraphicsGroup.prototype.constructor.apply(this, arguments);

		var childs = arguments[this.__readArgs];
		this._childchanged = 0;
		if (nexacro._isArray(childs)) {
			this._addChildren(childs);
		}
	};

	var _pGraphicsPaths = nexacro.GraphicsPaths.prototype = nexacro._createPrototype(nexacro.GraphicsGroup, nexacro.GraphicsPaths);
	_pGraphicsPaths._type_name = "GraphicsPaths";

	_pGraphicsPaths._type = "Paths";
	_pGraphicsPaths.strokepen = "";
	_pGraphicsPaths.fillstyle = "";
	_pGraphicsPaths.fillgradation = "";
	_pGraphicsPaths.strokejoin = "miter";
	_pGraphicsPaths.strokecap = "";
	_pGraphicsPaths.miterlimit = 10;
	_pGraphicsPaths.opacity = 1;

	_pGraphicsPaths.set_strokepen = function (val) {
		nexacro._GraphicsObject.prototype.set_strokepen.call(this, val);
		var node = this._firstchild;
		for (; node; node = node._nextsibling) {
			if (!node._style.strokepen) {
				node._strokewidth = this._strokewidth;
				node._isOddStrokeWidth = this._isOddStrokeWidth;
				node._bounds = null;
				node._globalBounds = null;
			}
		}
	};

	_pGraphicsPaths.set_fillstyle = function (val) {
		nexacro._GraphicsObject.prototype.set_fillstyle.call(this, val);
	};


	_pGraphicsPaths.set_strokejoin = function (val) {
		nexacro._GraphicsObject.prototype.set_strokejoin.call(this, val);
		if (this._strokeloin) {
			var node = this._firstchild;
			for (; node; node = node._nextsibling) {
				if (!node._style.strokejoin) {
					node._strokejoin = this._strokejoin;
					node._bounds = null;
					node._globalBounds = null;
					node._drawflags |= 8;
					node._drawflags |= 4;
				}
			}
		}
	};

	_pGraphicsPaths.set_strokecap = function (val) {
		nexacro._GraphicsObject.prototype.set_strokecap.call(this, val);
		if (this._strokecap) {
			var node = this._firstchild;

			for (; node; node = node._nextsibling) {
				if (!node._style.strokecap) {
					node._strokecap = this._strokecap;
					node._bounds = null;
					node._globalBounds = null;
					node._drawflags |= 8;
					node._drawflags |= 4;
				}
			}
		}
	};

	_pGraphicsPaths.set_miterlimit = function (val) {
		nexacro._GraphicsObject.prototype.set_miterlimit.call(this, val);
		if (this._miterlimit) {
			var node = this._firstchild;
			for (; node; node = node._nextsibling) {
				if (!node._style.miterlimit) {
					node._miterlimit = this._miterlimit;
					node._bounds = null;
					node._globalBounds = null;
					node._drawflags |= 8;
					node._drawflags |= 4;
				}
			}
		}
	};


	_pGraphicsPaths.set_opacity = function (val) {
		nexacro._GraphicsObject.prototype.set_opacity.call(this, val);

		var node = this._firstchild;
		for (; node; node = node._nextsibling) {
			if (!node._style.opacity) {
				node._opacity = this._opacity;
				node._drawflags |= 8;
				node._drawflags |= 4;
			}
		}
	};


	_pGraphicsPaths.destroy = function () {
		this.clear();
		nexacro._GraphicsObject.prototype.destroy.call(this);
	};

	_pGraphicsPaths.insertChild = function (idx, id, newChild) {
		var refChild = null;
		if (newChild && newChild._type == "Path") {
			refChild = this._childidx_map.getItem(idx);
			if (refChild !== undefined && refChild !== null) {
				return this.on_insertBefore(newChild, id, refChild);
			}
			else {
				return this.on_insertBefore(newChild, id, null);
			}
		}
		else {
			return -1;
		}
	};

	_pGraphicsPaths.addChild = function (id, child) {
		if (child && child._type == "Path") {
			return this.on_insertBefore(child, id, null);
		}
		else {
			return -1;
		}
	};

	_pGraphicsPaths._getFirstSegment = function () {
		var first = this.getFirstChild();
		return first && first._getFirstSegment();
	};

	_pGraphicsPaths._getLastSegment = function () {
		var last = this.getLastChild();
		return last && last._getLastSegment();
	};



	_pGraphicsPaths._moveTo = function () {
		var path = new nexacro.GraphicsPath();
		var id = this.id + "_path" + this.childlength;
		this.addChild(id, path);
		path.moveTo.apply(path, arguments);
	};


	_pGraphicsPaths._lineTo = function () {
		var path = this._getCurrentPath();
		path.lineTo.apply(path, arguments);
	};


	_pGraphicsPaths._quadraticCurveTo = function () {
		var path = this._getCurrentPath();
		path.quadraticCurveTo.apply(path, arguments);
	};

	_pGraphicsPaths._bezierCurveTo = function () {
		var path = this._getCurrentPath();
		path.bezierCurveTo.apply(path, arguments);
	};

	_pGraphicsPaths._arcTo = function () {
		var path = this._getCurrentPath();
		path.arcTo.apply(path, arguments);
	};

	_pGraphicsPaths.closePath = function () {
		if (this._getCurrentPath()) {
			this._getCurrentPath().closePath();
		}
	};

	_pGraphicsPaths.getPathData = function () {
		var node = this._firstchild, paths = [];
		for (; node; node = node._nextsibling) {
			paths.push(node.getPathData());
		}
		return paths.join(' ');
	};

	_pGraphicsPaths.setPathData = function (data) {
		var clsPoint = nexacro.Point;
		var parts = data.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig), coords, pt, relative = false, control, control2, current = new nexacro.Point();

		function getCoord (index, coord, update) {
			var val = parseFloat(coords[index]);
			if (relative) {
				val += current[coord];
			}
			if (update) {
				current[coord] = val;
			}
			return val;
		}

		function getPoint (index, update) {
			return new clsPoint(getCoord(index, 'x', update), getCoord(index + 1, 'y', update)
			);
		}

		this.clear();
		if (!parts) {
			return;
		}
		for (var i = 0, l = parts.length; i < l; i++) {
			var part = parts[i], cmd = part[0], j, lower = cmd.toLowerCase();
			coords = part.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
			relative = cmd === lower;
			var length = coords && coords.length;
			switch (lower) {
				case 'm':
				case 'l':
					for (j = 0; j < length; j += 2) {
						pt = getPoint(j, true);
						this[j === 0 && lower === 'm' ? '_moveTo' : '_lineTo'](pt.x, pt.y);
					}
					break;
				case 'h':
				case 'v':
					var coord = lower == 'h' ? 'x' : 'y';
					for (j = 0; j < length; j++) {
						getCoord(j, coord, true);
						this._lineTo(current.x, current.y);
					}
					break;
				case 'c':
					for (j = 0; j < length; j += 6) {
						pt = getPoint(j);
						control = getPoint(j + 2);
						control2 = getPoint(j + 4, true);
						this._bezierCurveTo(+pt.x, +pt.y, +control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 's':
					for (j = 0; j < length; j += 4) {
						pt = current.multiply(2).subtract(control);
						control = getPoint(j);
						control2 = getPoint(j + 2, true);
						this._bezierCurveTo(+pt.x, +pt.y, +control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 'q':
					for (j = 0; j < length; j += 4) {
						control = getPoint(j);
						control2 = getPoint(j + 2, true);
						this._quadraticCurveTo(+control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 't':
					for (j = 0; j < length; j += 2) {
						control = current.multiply(2).subtract(control);
						control2 = getPoint(j, true);
						this._quadraticCurveTo(+control.x, +control.y, +control2.x, +control2.y);
					}
					break;
				case 'a':
					for (j = 0; j < length; j += 7) {
						current = getPoint(j + 5);
						this._arcTo(+current.x, +current.y, +coords[0], +coords[1], +coords[2], +coords[4], +coords[3]);
					}
					break;
				case 'z':
					this.closePath();
					break;
			}
		}
	};




	_pGraphicsPaths.on_draw = function (ctx) {
		this._painted = 1;
	};

	_pGraphicsPaths._addChildren = function (arr) {
		if (!nexacro._isArray(arr) || !arr.length) {
			return false;
		}
		var i, len = arr.length - 1;
		if (!this._firstchild) {
			this._firstchild = arr[0];
			arr[0]._isfirstchild = true;

			this._childidx_map.add_item(arr[0].id, arr[0]);
			for (i = 0; i < len; i++) {
				arr[i]._nextsibling = arr[i + 1];
				arr[i + 1]._previoussibling = arr[i];
				this._childidx_map.add_item(arr[i + 1].id, arr[i + 1]);
			}
			arr[0]._previoussibling = arr[arr.length - 1];
		}
		else {
			var lastChild = this._firstchild._previoussibling;
			lastChild._nextsibling = arr[0];
			arr[0]._previoussibling = lastChild;


			this._childidx_map.add_item(arr[0].id, arr[0]);
			for (i = 0; i < len; i++) {
				arr[i]._nextsibling = arr[i + 1];
				arr[i + 1]._previoussibling = arr[i];

				this._childidx_map.add_item(arr[i + 1].id, arr[i + 1]);
			}
			this._firstchild._previoussibling = arr[arr.length - 1];
		}

		this.childlength += arr.length;
		this._childchanged++;
		this._drawflags |= 4;
		var layer = this.on_getOwnerLayer();
		if (layer) {
			layer.on_TreeChanged();
		}
		var childListCache = this._childListCache;
		if (childListCache) {
			if (childListCache.flength != -1) {
				childListCache.flength += arr.length;
			}
			if (childListCache.fchildindex != -1) {
				childListCache.fchildindex = -1;
			}
		}
	};

	_pGraphicsPaths.on_updateStyles = function (ctx, sizeChanged) {
		var node = this._firstchild;
		var style = this._style;

		var sysstyle = null;
		for (; node; node = node._nextsibling) {
			sysstyle = node._renderstyle;
			if (!sysstyle) {
				sysstyle = {
				};
				node._renderstyle = sysstyle;
			}
			if (this._style.strokepen && !node._style.strokepen) {
				node._updateStrokePen(style.strokepen, sysstyle);
			}
			if ((this._style.fillstyle || (sizeChanged && this._isGradation)) && !node._style.fillstyle) {
				node._updateFill(style.fillstyle, sysstyle, ctx);
			}
			if (!node._style.strokejoin) {
				node._updateStrokeJoin(style.strokejoin, sysstyle);
			}
			if (this._style.strokecap && !node._style.strokecap) {
				node._updateStrokeCap(style.strokecap, sysstyle);
			}
			if (!node._style.miterlimit) {
				sysstyle._miterlimit = parseInt(this.miterlimit || 10);
			}
		}
		ctx.setElementGlobalAlpha(this._globalAlpha);
		this._changedStrokepen = false;
		this._changedFillstyle = false;
		this._changedStrokejoin = false;
		this._changedStrokecap = false;
		this._changedMiterlimit = false;
	};
	_pGraphicsPaths.removeChild = function (id) {
		var obj = this.getObjectByID(id);
		if (obj) {
			obj = this.on_removeChild(obj);
			if (obj) {
				obj._drawflags |= 8;
				obj._renderstyle = null;
				var style = this._style;
				if (style.strokepen) {
					obj._changedStrokepen = true;
				}
				if (style.fillstyle) {
					obj._changedFillstyle = true;
				}
				if (style.strokejoin) {
					obj._changedStrokejoin = true;
				}
				if (style.strokecap) {
					this._changedStrokecap = true;
				}
				if (style.miterlimit) {
					this._changedMiterlimit = true;
				}
			}
			return obj;
		}
		else {
			return null;
		}
	};
	_pGraphicsPaths.on_insertBefore = function (newChild, id, refChild) {
		var idx = nexacro._GraphicsObject.prototype.on_insertBefore.apply(this, [newChild, id, refChild]);
		if (idx >= 0) {
			this._drawflags |= 8;

			if (this._style.strokepen && !newChild._style.strokepen) {
				newChild._strokewidth = this._strokewidth;
			}
			if (!newChild._style.miterlimit) {
				newChild._miterlimit = this._miterlimit || 10;
			}
			if (!newChild._style.strokecap) {
				newChild._strokecap = this._strokecap || "butt";
			}
			if (!newChild._style.strokejoin) {
				newChild._strokejoin = this._strokejoin || "miter";
			}
			if (this._style.opacity && !newChild._style.opacity) {
				newChild._opacity = nexacro.OpacityObject(this._opacity.value);
			}
		}

		return idx;
	};

	_pGraphicsPaths._getCurrentPath = function () {
		var len = this._getLength();
		if (!len) {
			trace("getCurrentPath error length = 0. Use a moveTo() command first");
			return;
		}
		return this.getChildByIndex(len - 1);
	};

	_pGraphicsPaths.getChildByIndex = function (index) {
		if (this._firstchild) {
			var children = this._children;
			if (children && (children._changed == this._childchanged)) {
				return children[index];
			}
			return this._getChildByIndex(index);
		}
	};

	_pGraphicsPaths._getLength = function () {
		if (this._firstchild) {
			var children = this._children;
			if (children && (children._changed == this._childchanged)) {
				return children.length;
			}
			return this._getChildrenLength();
		}
		return 0;
	};

	_pGraphicsPaths._getChildrenLength = function () {
		var childListCache = this._childListCache;
		if (!childListCache) {
			var firstChild = this._firstchild;
			if (!firstChild) {
				return 0;
			}

			if (firstChild == this.getLastChild()) {
				return 1;
			}
			childListCache = {
				flength : -1, 
				fchildindex : -1, 
				fchild : null, 
				fowner : this
			};
			this._childListCache = childListCache;
		}
		if (childListCache.flength == -1) {
			var l, n;
			if (childListCache.fchildindex != -1 && 
				childListCache.fchild != null) {
				l = childListCache.fchildindex;
				n = childListCache.fchild;
			}
			else {
				n = this._firstchild;
				l = 0;
			}
			while (n) {
				l++;
				n = n._nextsibling;
			}
			childListCache.flength = l;
		}
		return childListCache.flength;
	};

	_pGraphicsPaths._getChildByIndex = function (index) {
		var childListCache = this._childListCache;
		if (!childListCache) {
			if (this._firstchild == this.getLastChild()) {
				return index == 0 ? this._firstchild : null;
			}
			childListCache = {
				flength : -1, 
				fchildindex : -1, 
				fchild : null, 
				fowner : this
			};
			this._childListCache = childListCache;
		}
		var i = childListCache.fchildindex;
		var n = childListCache.fchild;
		var firstAccess = true;
		if (i != -1 && n != null) {
			firstAccess = false;
			if (i < index) {
				while (i < index && n) {
					i++;
					n = n._nextsibling;
				}
			}
			else if (i > index) {
				while (i > index && n) {
					i--;
					n = n.getPreviousSibling();
				}
			}
		}
		else {
			if (index < 0) {
				return null;
			}
			n = this._firstchild;
			for (i = 0; i < index && n; i++) {
				n = n._nextsibling;
			}
		}
		if (!firstAccess && (n == this._firstchild || n == this.getLastChild())) {
			childListCache.fchildindex = -1;
			childListCache.fchild = null;
		}
		else {
			childListCache.fchildindex = i;
			childListCache.fchild = n;
		}
		return n;
	};


	delete _pGraphicsPaths;
}

if (!nexacro._GraphicsLayer) {
	nexacro._GraphicsLayer = function () {
		nexacro._GraphicsHashMap.getHashKey("ge", this);

		this._dirtyRectsMgr = new nexacro._GraphicsRectsManager();

		this._totalItems = [];
		this._childidx_map = new nexacro.Collection();
	};

	var _pGraphicsLayer = nexacro._GraphicsLayer.prototype = nexacro._createPrototype(nexacro.GraphicsGroup, nexacro._GraphicsLayer);
	_pGraphicsLayer._type_name = "_GraphicsLayer";


	_pGraphicsLayer.childlength = 0;


	_pGraphicsLayer._type = "Layer";
	_pGraphicsLayer._renderHint = "all";

	_pGraphicsLayer._level = 0;
	_pGraphicsLayer._treechange = 0;
	_pGraphicsLayer._childchanged = 0;




	_pGraphicsLayer.getAllObjects = function () {
		var items = this._totalItems;
		if (!items || !items.length || (this._treechange != items._treechange)) {
			var idx = 0;
			var node = this._firstchild;

			items = [];
			for (; node; node = node._nextsibling) {
				node._index = idx;
				this._getAllObjects(items, node, 1);
				idx++;
			}

			this._totalItems = items;
			items._treechange = this._treechange;
		}

		return items;
	};



	_pGraphicsLayer.on_removeParent = function () {
	};
	_pGraphicsLayer.destroy = function () {
		this.clear();

		var i, item;
		var items = this.getAllObjects();
		for (i = 0; i < items.length; i++) {
			item = items[i];
			if (item) {
				item.destroy();
			}
		}

		this._dirtyRectsMgr = null;


		this._totalItems = null;
		this._quadtree = null;

		if (this._canvas) {
			this._canvas.destroy();
			this._canvas = null;
		}

		nexacro._GraphicsObject.prototype.destroy.call(this);
	};

	_pGraphicsLayer.hitTest = function (pt) {
		var rect = new nexacro.Rect(pt.x - 1, pt.y - 1, 3, 3);
		var item = this._hitTestItems(this, pt, rect);
		if (this != item) {
			return item;
		}
		return null;
	};

	_pGraphicsLayer.hitTestAll = function (pt) {
		var ret = [];
		var rect = new nexacro.Rect(pt.x - 1, pt.y - 1, 3, 3);
		this._hitTestAllItems(this, pt, rect, ret);

		return ret;
	};

	_pGraphicsLayer._beforePaint = function () {
		if (this._renderHint == "all") {
			this._beforeDrawAll(this._totalItems);
		}
		else {
			this._beforeDrawDirty(this._totalItems);
		}
	};

	_pGraphicsLayer._paint = function () {
		var totalItems = this.getAllObjects();

		if (this._renderHint == "all") {
			this._drawAll(totalItems);
		}
		else {
			this._drawDirty(totalItems);
		}

		this._setQuadTree(totalItems);
	};

	_pGraphicsLayer._beforeDrawAll = function (totalItems) {
		var item, drawflags;
		for (var i = totalItems.length - 1; i > -1; i--) {
			item = totalItems[i];
			if (item._painting & 1) {
				drawflags = item._jobDrawflags;
				if (drawflags & (1 | 2 | 4)) {
					if (drawflags & 1) {
						item._bounds = null;
						item._globalBounds = null;
					}
					if (drawflags & (2 | 4)) {
						item._bounds = null;
						item._globalBounds = null;
						item._rect = null;
					}
					var p = item._parent;
					if (p && !(p._jobDrawflags & 4)) {
						if (p == this) {
							p._rect = null;
						}
						else {
							p._jobDrawflags |= 4;
						}
					}
					item._sizeChanged = true;
				}
			}
		}
	};

	_pGraphicsLayer._drawAll = function (totalItems) {
		var drawflags = this.parent._drawflags;
		var ctx = this._canvas;

		if (!ctx.handle) {
			ctx.create();
		}
		else if (!(drawflags & 2)) {
			ctx.clearRect(0, 0, ctx.width, ctx.height);
		}

		ctx.save();

		if (this._matrix) {
			var bound = this._getCanvasRect();
			ctx.translate(-bound.left, -bound.top);
		}

		var item;

		for (var i = 0, len = totalItems.length; i < len; i++) {
			item = totalItems[i];
			if (item._painting & 1) {
				if (item._jobDrawflags & 8) {
					item.on_updateStyles(ctx, item._sizeChanged);
					item._sizeChanged = false;
				}

				item.on_draw(ctx);
			}
			else {
				item._painted = 0;
			}
		}
		ctx.restore();
		this._dirtyRectsMgr.clear();
	};

	_pGraphicsLayer._beforeDrawDirty = function (totalItems) {
		var item, drawflags, sizeChanged, matrixchanged, p;
		var oldBounds, curBounds;
		for (var i = totalItems.length - 1; i > -1; i--) {
			item = totalItems[i];
			p = item._parent;

			if (item._painting & 1) {
				sizeChanged = false;
				matrixchanged = false;
				drawflags = item._jobDrawflags;
				if (drawflags & (1 | 2 | 4)) {
					if (drawflags & 1) {
						item._bounds = null;
						item._globalBounds = null;
						matrixchanged = true;
					}
					if (drawflags & (2 | 4)) {
						item._bounds = null;
						item._globalBounds = null;
						item._rect = null;
						sizeChanged = true;
					}
					if (matrixchanged) {
						oldBounds = item._oldGlobalBounds;
						curBounds = item._getGlobalBoundRect();

						if (oldBounds) {
							this._addDirty(oldBounds, item);
						}
						this._addDirty(curBounds, item);
					}
					else if (sizeChanged) {
						if (item._type == "Group" || item._type == "Paths") {
							if (item._painted & (2 | 4)) {
								oldBounds = item._oldGlobalBounds;
								if (oldBounds) {
									this._addDirty(oldBounds, item);
								}
							}
							var s = item._style;
							if (s && (s._fillcolor || s._strokecolor)) {
								curBounds = item._getGlobalBoundRect();
								this._addDirty(curBounds, item);
							}
						}
						else {
							oldBounds = item._oldGlobalBounds;
							curBounds = item._getGlobalBoundRect();

							if (oldBounds) {
								this._addDirty(oldBounds, item);
							}
							this._addDirty(curBounds, item);
						}
					}
					if (p && !(p._jobDrawflags & 4)) {
						if (p == this) {
							p._rect = null;
						}
						else {
							p._jobDrawflags |= 4;
						}
					}
					item._sizeChanged = sizeChanged;
					item._painting |= 4;
				}
				else if ((drawflags & 8) || item._newDraw) {
					item._painting |= 4;
					this._addDirty(item._getGlobalBoundRect(), item);
				}
			}
			else if (item._painting & 2) {
				if (item._painted & (2 | 4)) {
					this._addDirty(item._oldGlobalBounds, item);
				}
			}
		}
	};

	_pGraphicsLayer._drawDirty = function (totalItems) {
		if (this._applyRendering) {
			return;
		}

		this._applyRendering = true;

		var dirtyRectsMgr = this._dirtyRectsMgr;
		var _self = this;
		var ctx = this._canvas;

		if (!ctx.handle) {
			ctx.create();
		}

		dirtyRectsMgr.mergeRects(10000, 10);

		ctx.save();
		ctx.beginPath();


		var fullrect = dirtyRectsMgr._bounds;
		if (nexacro._Browser == "Runtime") {
			if (fullrect) {
				ctx.clearRect(fullrect.left, fullrect.top, fullrect.width, fullrect.height);
				_self._setItemsInDirtyRect(_self, fullrect);
				ctx.rect(fullrect.left, fullrect.top, fullrect.width, fullrect.height);
			}
		}
		else {
			dirtyRectsMgr.Each(function (rect) {
				ctx.clearRect(rect.left, rect.top, rect.width, rect.height);
				_self._setItemsInDirtyRect(_self, rect);
				ctx.rect(rect.left, rect.top, rect.width, rect.height);
			});
		}

		ctx.clip();

		var item;
		for (var i = 0, len = totalItems.length; i < len; i++) {
			item = totalItems[i];

			ctx.setElementGlobalAlpha(item._globalAlpha);

			if (item._jobDrawflags & 8 || item._jobDrawflags & 2) {
				item.on_updateStyles(ctx, item._sizeChanged);
				item._sizeChanged = false;
			}

			if (item._painting & 4) {
				if (item._painting & 2) {
					item._painted = 0;
				}
				else {
					item.on_draw(ctx);
				}
			}
			else if (item._painting & 2) {
				item._painted = 0;
			}
		}

		dirtyRectsMgr.clear();
		ctx.restore();

		this._applyRendering = false;
	};

	_pGraphicsLayer._addDirty = function (bounds_rect, item) {
		var rect = bounds_rect;
		if (rect) {
			var l = rect.left;
			var t = rect.top;
			var w = rect.width;
			var h = rect.height;
			var n_rect = new nexacro.Rect(l, t, w, h);
			var ctx = this._canvas;


			if (n_rect.right <= 0 || n_rect.bottom <= 0 || n_rect.left >= ctx.width || n_rect.top >= ctx.height) {
				return;
			}
			if (n_rect.width <= 0 || n_rect.height <= 0) {
				return;
			}



			n_rect.obj_id = item.id;

			this._dirtyRectsMgr.add(n_rect);
		}
	};

	_pGraphicsLayer._hitTestItems = function (p, pt, rect) {
		var quadtree = p._quadtree;
		if (quadtree) {
			var i, len;
			var item, ret, invertPt;
			var items = quadtree.query(rect);

			items.sort(function (a, b) {
				return b._index - a._index;
			});

			for (i = 0, len = items.length; i < len; i++) {
				item = items[i];
				invertPt = item._globalMatrix._inverseTransform(pt);
				if (item.isHitTest(invertPt.x, invertPt.y)) {
					if (item._firstchild) {
						rect.left = invertPt.x - 1;
						rect.top = invertPt.y - 1;
						ret = this._hitTestItems(item, pt, rect);
						if (item._type == "Paths") {
							if (ret != item) {
								return item;
							}
						}
						else {
							return ret;
						}
					}
					else {
						return item;
					}
				}
			}
		}

		return p;
	};

	_pGraphicsLayer._hitTestAllItems = function (p, pt, rect, results) {
		var quadtree = p._quadtree;
		if (quadtree) {
			var item, invertPt;
			var items = quadtree.query(rect);

			items.sort(function (a, b) {
				return b._index - a._index;
			});

			for (var i = 0, len = items.length; i < len; i++) {
				item = items[i];
				invertPt = item._globalMatrix._inverseTransform(pt);
				if (item.isHitTest(pt.x, pt.y)) {
					if (item._firstchild) {
						rect.left = invertPt.x - 1;
						rect.top = invertPt.y - 1;

						this._hitTestAllItems(item, pt, rect, results);
					}
					else {
						if (item._parent && item._parent._type == "Paths") {
							results.push(item._parent);
						}
						else {
							results.push(item);
						}
					}
				}
			}
		}
	};

	_pGraphicsLayer.on_TreeChanged = function () {
		this._treechange++;
	};

	_pGraphicsLayer._getAllObjects = function (arr, node, level) {
		node._level = level;
		arr[arr.length] = node;
		if (node = node._firstchild) {
			level++;
			var idx = 0;
			for (; node; node = node._nextsibling) {
				node._index = idx;
				this._getAllObjects(arr, node, level);
				idx++;
			}
		}
	};

	_pGraphicsLayer.on_getOwnerLayer = function () {
		return this;
	};

	_pGraphicsLayer._getCanvasRect = function () {
		var parent = this.parent;
		if (parent) {
			return new nexacro.Rect(0, 0, parent._size.width, parent._size.height);
		}

		return new nexacro.Rect(0, 0, 0, 0);
	};

	_pGraphicsLayer._getItemsInRect = function (p, rect, results) {
		var quadtree = p._quadtree;
		if (quadtree) {
			var m = p._globalMatrix || p._matrix;
			var invertM = m.inverted() || m;
			var localRect = invertM._transformBounds(rect, null, rect.obj_id);

			var i, len, item;
			var items = quadtree.query(localRect);

			items.sort(function (a, b) {
				return b._index - a._index;
			});

			for (i = 0, len = items.length; i < len; i++) {
				item = items[i];
				results[results.length] = item;
				if (item._firstchild) {
					this._getItemsInRect(item, rect, results);
				}
			}
		}
	};

	_pGraphicsLayer._setItemsInDirtyRect = function (p, rect) {
		var quadtree = p._quadtree;
		if (quadtree) {
			var m = p._globalMatrix || p._matrix;
			var invertM = m.inverted() || m;
			var localRect = invertM._transformBounds(rect, null, rect.obj_id);

			var item;
			var items = quadtree.query(localRect);

			for (var i = 0, len = items.length; i < len; i++) {
				item = items[i];
				item._painting |= 4;

				if (item._firstchild) {
					this._setItemsInDirtyRect(item, rect);
				}
			}
		}
	};

	_pGraphicsLayer._setGlobalTransforms = function () {
		var totalItems = this.getAllObjects();
		var drawflags = this.parent._drawflags;
		var m = this.parent._matrix;

		if (this._matrix) {
			drawflags |= this._drawflags;
			this._globalMatrix = (m ? (m.clone()).concatenate(this._matrix) : this._matrix.clone());
		}
		else {
			this._globalMatrix = m.clone();
		}
		m = this._globalMatrix;

		var transformStack = [m];
		var transformChangedStack = [(drawflags & 1)];
		var visibleStack = [true];
		var opacityStack = [1];
		var item, alpha, level, upLevel;
		var opacityval = 1;
		for (var i = 0, len = totalItems.length; i < len; i++) {
			item = totalItems[i];
			level = item._level;
			upLevel = level - 1;
			if (item._opacity) {
				opacityval = item._opacity.value;
			}
			else {
				opacityval = 1;
			}
			alpha = opacityval *  opacityStack[upLevel];
			if (!visibleStack[upLevel] || !item.visible || item.on_IsNotDraw() || !alpha) {
				visibleStack[level] = false;
				if (item._painted & (1 | 2 | 4)) {
					item._painting = 2;
				}
				else {
					item._painting = 0;
				}
			}
			else {
				item._jobDrawflags = item._drawflags;
				if (item._globalAlpha != alpha) {
					item._globalAlpha = alpha;
					item._jobDrawflags |= 8;
				}
				item._painting = 1;
				if (item._painted == 0) {
					item._newDraw = true;
				}
				if (transformChangedStack[upLevel] || (item._jobDrawflags & 1) || 
					!item._globalMatrix) {
					item._setGlobalTransforms(transformStack[upLevel]);
					transformChangedStack[level] = true;
					item._jobDrawflags |= 1;
				}
				else {
					transformChangedStack[level] = false;
				}
				visibleStack[level] = true;
			}
			if (item._firstchild) {
				transformStack[level] = item._globalMatrix;
				opacityStack[level] = item._globalAlpha *  opacityStack[upLevel];
			}
		}
	};

	_pGraphicsLayer._setQuadTree = function (totalItems, bRefresh) {
		var item;
		var quadTreeCls = nexacro._GraphicsQuadTree;
		var quadtree = this._quadtree;

		if (!quadtree || bRefresh) {
			var bounds = this._getCanvasRect();
			quadtree = this._quadtree = new quadTreeCls(bounds.left, bounds.top, bounds.width, bounds.height);
		}

		var quadtreeStacks = [quadtree];
		var level, upLevel, pQuadtree;
		for (var i = 0, len = totalItems.length; i < len; i++) {
			item = totalItems[i];
			if (item._painting & 1) {
				level = item._level;
				upLevel = level - 1;
				if ((item._jobDrawflags & (1 | 2 | 4)) || item._newDraw || bRefresh) {
					pQuadtree = quadtreeStacks[upLevel];
					if (!pQuadtree.move(item) || bRefresh) {
						pQuadtree.add(item);
					}
				}
				if (item._firstchild) {
					quadtree = item._quadtree;
					if (!quadtree || bRefresh) {
						var rect = item.on_getRect();
						quadtree = item._quadtree = new quadTreeCls(rect.left, rect.top, rect.width, rect.height);
					}
					else if (item._jobDrawflags & (1 | 2 | 4)) {
						item._quadtree._root._bounds = item.on_getRect();
					}
					quadtreeStacks[level] = quadtree;
				}
				item._oldGlobalBounds = null;
				item._setOldGlobalBounds();
				item._drawflags = 0;
				delete item._newDraw;
			}
			else if (!bRefresh && item._painting & 2) {
				level = item._level;
				upLevel = level - 1;
				pQuadtree = quadtreeStacks[upLevel];
				if (pQuadtree) {
					pQuadtree.remove(item);
				}
				item._oldGlobalBounds = null;
			}
		}

		if (totalItems.length > 0 && !(nexacro._Browser == "IE" && nexacro._BrowserVersion <= 8)) {
			this._renderHint = "dirty";
		}

		if (this._drawflags != null) {
			this._drawflags = 0;
		}
	};

	_pGraphicsLayer._refreshQuadTree = function () {
		this._setQuadTree(this.getAllObjects(), true);
	};

	delete _pGraphicsLayer;
}

if (!nexacro.Graphics) {
	nexacro.Graphics = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
		nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

		this._matrix = new nexacro._GraphicsMatrix();
	};

	var _pGraphicsControl = nexacro._createPrototype(nexacro.Component, nexacro.Graphics);
	nexacro.Graphics.prototype = _pGraphicsControl;
	_pGraphicsControl._type_name = "Graphics";
	_pGraphicsControl._is_subcontrol = true;


	_pGraphicsControl._layer = null;


	_pGraphicsControl._drawflags = 1;


	_pGraphicsControl._event_list = {
		"onclick" : 1, 
		"ondblclick" : 1, 
		"onkillfocus" : 1, 
		"onsetfocus" : 1, 
		"onkeydown" : 1, 
		"onkeyup" : 1, 
		"onlbuttondown" : 1, 
		"onlbuttonup" : 1, 
		"onrbuttondown" : 1, 
		"onrbuttonup" : 1, 
		"onmouseenter" : 1, 
		"onmouseleave" : 1, 
		"onmousemove" : 1, 
		"ondrag" : 1, 
		"ondragenter" : 1, 
		"ondragleave" : 1, 
		"ondragmove" : 1, 
		"ondrop" : 1, 
		"onmove" : 1, 
		"onsize" : 1, 
		"onmouseup" : 1, 
		"onmousedown" : 1, 
		"ontouchstart" : 1, 
		"ontouchmove" : 1, 
		"ontouchend" : 1, 
		"ondevicebuttonup" : 1
	};

	_pGraphicsControl.on_create_contents = function () {
		var control_elem = this.getElement();
		if (control_elem) {
			this._setSize(this._adjust_width, this._adjust_height);

			var layer = this._layer;
			if (!layer) {
				var ctx = new nexacro.CanvasElement(control_elem);

				layer = this._layer = new nexacro._GraphicsLayer();
				layer.id = this.id + "_layer";
				layer.parent = this;
				layer._canvas = ctx;

				ctx.setElementPosition(0, 0);
				ctx.setElementSize(this._adjust_width, this._adjust_height);
			}
		}
	};

	_pGraphicsControl.on_created_contents = function (win) {
		var layer = this._layer;
		if (layer) {
			layer._canvas.create(win);
			if (nexacro._AccessibilityStyles.length == 0 && nexacro._enableaccessibility) {
				this._createAccessibilityStyles();
				layer._canvas.setElementPosition(0, 0);
				layer._canvas.setElementSize(this._adjust_width, this._adjust_height);
			}
			layer._paint();
		}

		this._drawflags = 0;
	};

	_pGraphicsControl.on_create_contents_command = function () {
		return "";
	};

	_pGraphicsControl.on_attach_contents_handle = function (win) {
		var layer = this._layer;
		if (layer) {
			layer._canvas.create(win);
			layer._paint();
		}

		this._drawflags = 0;
	};

	_pGraphicsControl.on_destroy_contents = function () {
		if (this._layer) {
			this._layer.destroy();
			this._layer = null;
		}
	};

	_pGraphicsControl.on_change_containerRect = function (width, height) {
		if (this._is_created_contents) {
			this._setSize(width, height);

			var layer = this._layer;
			if (layer) {
				layer._refreshQuadTree();
			}
		}
	};

	_pGraphicsControl.on_change_containerPos = function (left, top) {
	};


	_pGraphicsControl.getAccessibilityStyles = function () {
		if (nexacro._AccessibilityStyles.length > 0) {
			var copy = nexacro._AccessibilityStyles.slice(0);
			return copy;
		}
		return null;
	};
	_pGraphicsControl._createAccessibilityStyles = function () {
		var styles = {
		};

		for (var index = 0; index < 20; index++) {
			styles.fillstyle = this.on_apply_accessibilitypattern(index, false);
			styles.linestyle = this.on_apply_accessibilityline(index, false);
			styles.normallinestyle = "1px solid #000000";
			styles.selectlinestyle = this.on_apply_accessibilityline(index, true);
			styles.selectfillstyle = this.on_apply_accessibilitypattern(index, true);
			styles.highlightfillstyle = "";
			styles.highlightlinestyle = "5px solid #000000";

			nexacro._AccessibilityStyles.push(styles);
			styles = {
			};
		}
	};
	_pGraphicsControl.on_apply_accessibilityline = function (index, bselect) {
		if (index == 0) {
			if (bselect) {
				return "1px solid #999999";
			}
			else {
				return "1px solid #000000";
			}
		}
		else if (index == 1) {
			if (bselect) {
				return "1px dotted #999999";
			}
			else {
				return "1px dotted #555555";
			}
		}
		else if (index == 2) {
			if (bselect) {
				return "1px dashed #999999";
			}
			else {
				return "1px dashed #000000";
			}
		}
		else if (index == 3) {
			if (bselect) {
				return "2px solid #999999";
			}
			else {
				return "2px solid #555555";
			}
		}
		else if (index == 4) {
			if (bselect) {
				return "2px dotted #999999";
			}
			else {
				return "2px dotted #000000";
			}
		}
		else if (index == 5) {
			if (bselect) {
				return "2px dashed #999999";
			}
			else {
				return "2px dashed #555555";
			}
		}
		else if (index == 6) {
			if (bselect) {
				return "3px solid #999999";
			}
			else {
				return "3px solid #000000";
			}
		}
		else if (index == 7) {
			if (bselect) {
				return "3px dotted #999999";
			}
			else {
				return "3px dotted #555555";
			}
		}
		else if (index == 8) {
			if (bselect) {
				return "3px dashed #999999";
			}
			else {
				return "3px dashed #000000";
			}
		}
		else if (index == 9) {
			if (bselect) {
				return "1px solid #999999";
			}
			else {
				return "1px solid #555555";
			}
		}
		else if (index == 10) {
			if (bselect) {
				return "1px dotted #999999";
			}
			else {
				return "1px dotted #000000";
			}
		}
		else if (index == 11) {
			if (bselect) {
				return "1px dashed #999999";
			}
			else {
				return "1px dashed #555555";
			}
		}
		else if (index == 12) {
			if (bselect) {
				return "2px solid #999999";
			}
			else {
				return "2px solid #000000";
			}
		}
		else if (index == 13) {
			if (bselect) {
				return "2px dotted #999999";
			}
			else {
				return "2px dotted #555555";
			}
		}
		else if (index == 14) {
			if (bselect) {
				return "2px dashed #999999";
			}
			else {
				return "2px dashed #000000";
			}
		}
		else if (index == 15) {
			if (bselect) {
				return "3px solid #999999";
			}
			else {
				return "3px solid #555555";
			}
		}
		else if (index == 16) {
			if (bselect) {
				return "3px dotted #999999";
			}
			else {
				return "3px dotted #000000";
			}
		}
		else if (index == 17) {
			if (bselect) {
				return "3px dashed #999999";
			}
			else {
				return "3px dashed #555555";
			}
		}
		else if (index == 18) {
			if (bselect) {
				return "4px solid #999999";
			}
			else {
				return "4px solid #000000";
			}
		}
		else if (index == 19) {
			if (bselect) {
				return "4px dotted #999999";
			}
			else {
				return "4px dotted #555555";
			}
		}
	};

	_pGraphicsControl.on_apply_accessibilitypattern = function (index, bselect) {
		var pctx = this._layer._canvas;
		var patterncolor = "#000000";
		pctx.setElementPosition(-20, -20);
		pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
		pctx.setElementLineWidth(2);
		var offset, x0, y0, x1, y1, offsetx, offsety;
		if (index == 0) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = -1;
			x1 = pctx.width + 1;
			y0 = -1;
			y1 = pctx.height + 1;
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(x0, y0);
			pctx.lineTo(x1, y1);

			pctx.moveTo(x1 - offset, y0);
			pctx.lineTo(x1, y0 + offset);

			pctx.moveTo(x0, y1 - offset);
			pctx.lineTo(x0 + offset, y1);
			pctx.stroke();
		}
		else if (index == 1) {
			pctx.setElementSize(12, 12);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(pctx.width / 2, offset);
			pctx.lineTo(offset, pctx.height - offset);
			pctx.lineTo(pctx.width - offset, pctx.height - offset);
			pctx.closePath();
			pctx.stroke();
		}
		else if (index == 2) {
			pctx.setElementSize(8, 8);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));


			pctx.beginPath();
			pctx.moveTo(2, 0);
			pctx.lineTo(2, 2);
			pctx.lineTo(6, 2);
			pctx.lineTo(6, 6);
			pctx.lineTo(2, 6);
			pctx.lineTo(2, 8);
			pctx.stroke();
		}
		else if (index == 3) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(offset, pctx.height / 2);
			pctx.lineTo(pctx.width - offset, pctx.height / 2);
			pctx.moveTo(pctx.width / 2, offset);
			pctx.lineTo(pctx.width / 2, pctx.height - offset);
			pctx.stroke();
		}
		else if (index == 4) {
			pctx.setElementSize(8, 8);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			y0 = -1;
			y1 = pctx.height + 1;
			offsetx = pctx.width / 2;

			pctx.beginPath();
			pctx.moveTo(offsetx, y0);
			pctx.lineTo(offsetx, y1);
			pctx.stroke();
		}
		else if (index == 5) {
			pctx.setElementSize(12, 12);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = 2;
			x1 = pctx.width - x0;
			y0 = 2;
			y1 = pctx.height - y0;

			pctx.beginPath();
			pctx.moveTo(x0, y0);
			pctx.lineTo(x0, y1);
			pctx.lineTo(x1, y1);
			pctx.lineTo(x1, y0);
			pctx.closePath();
			pctx.stroke();
		}
		else if (index == 6) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = 0;
			x1 = pctx.width;
			y0 = 0;
			y1 = pctx.height;
			offset = 3;

			pctx.beginPath();
			pctx.moveTo(x0 + offset, y0);
			pctx.lineTo(x1 / 2 + offset, y1 / 2);
			pctx.lineTo(x0 + offset, y1);
			pctx.stroke();
		}
		else if (index == 7) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));


			pctx.beginPath();
			pctx.moveTo(5, 1);
			pctx.lineTo(3, 5);
			pctx.lineTo(7, 5);
			pctx.lineTo(5, 9);
			pctx.stroke();
		}
		else if (index == 8) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = pctx.width + 1;
			x1 = -1;
			y0 = pctx.height + 1;
			y1 = -1;
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(x0, y1);
			pctx.lineTo(x1, y0);
			pctx.moveTo(x1 + offset, y1);
			pctx.lineTo(x1, y1 + offset);
			pctx.moveTo(x0, y0 - offset);
			pctx.lineTo(x0 - offset, y0);
			pctx.stroke();
		}
		else if (index == 9) {
			pctx.setElementSize(12, 12);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(pctx.width / 2, offset);
			pctx.lineTo(offset, pctx.height / 2);
			pctx.lineTo(pctx.width / 2, pctx.height - offset);
			pctx.lineTo(pctx.width - offset, pctx.height / 2);
			pctx.closePath();
			pctx.stroke();
		}
		else if (index == 10) {
			pctx.setElementSize(8, 8);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = -1;
			x1 = pctx.width + 1;
			y0 = -1;
			y1 = pctx.height + 1;
			offsetx = pctx.width / 2;
			offsety = pctx.height / 2;

			pctx.beginPath();
			pctx.moveTo(x0, offsety);
			pctx.lineTo(x1, offsety);
			pctx.moveTo(offsetx, y0);
			pctx.lineTo(offsetx, y1);
			pctx.stroke();
		}
		else if (index == 11) {
			pctx.setElementSize(8, 8);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(pctx.width / 2, offset);
			pctx.lineTo(offset, pctx.height - offset);
			pctx.lineTo(pctx.width - offset, pctx.height - offset);
			pctx.closePath();
			pctx.stroke();
		}
		else if (index == 12) {
			pctx.setElementSize(8, 8);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));


			pctx.beginPath();
			pctx.moveTo(0, 6);
			pctx.lineTo(2, 6);
			pctx.lineTo(2, 2);
			pctx.lineTo(6, 2);
			pctx.lineTo(6, 6);
			pctx.lineTo(8, 6);
			pctx.stroke();
		}
		else if (index == 13) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));

			offset = 2;

			pctx.beginPath();
			pctx.moveTo(offset, offset);
			pctx.lineTo(pctx.width - offset, pctx.height - offset);
			pctx.moveTo(pctx.width - offset, offset);
			pctx.lineTo(offset, pctx.height - offset);
			pctx.stroke();
		}
		else if (index == 14) {
			pctx.setElementSize(8, 8);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = -1;
			x1 = pctx.width + 1;
			offsety = pctx.height / 2;

			pctx.beginPath();
			pctx.moveTo(x0, offsety);
			pctx.lineTo(x1, offsety);
			pctx.stroke();
		}
		else if (index == 15) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = 2;
			x1 = pctx.width - x0;
			y0 = 2;
			y1 = pctx.height - y0;

			pctx.beginPath();
			pctx.moveTo(x0, y0);
			pctx.lineTo(x0, y1);
			pctx.lineTo(x1, y1);
			pctx.lineTo(x1, y0);
			pctx.closePath();
			pctx.stroke();
		}
		else if (index == 16) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = 0;
			x1 = pctx.width;
			y0 = 0;
			y1 = pctx.height;
			offset = 3;

			pctx.beginPath();
			pctx.moveTo(x0, y0 + offset);
			pctx.lineTo(x1 / 2, y1 / 2 + offset);
			pctx.lineTo(x1, y0 + offset);
			pctx.stroke();
		}
		else if (index == 17) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = 2;
			y0 = 2;
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(x0, y0);
			pctx.lineTo(pctx.width / 2, pctx.height - offset);
			pctx.lineTo(pctx.width - 2, y0);
			pctx.stroke();
		}
		else if (index == 18) {
			pctx.setElementSize(10, 10);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			x0 = pctx.width + 1;
			x1 = -1;
			y0 = pctx.height + 1;
			y1 = -1;
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(x0, y0);
			pctx.lineTo(x1, y1);
			pctx.moveTo(x1 - offset, y0);
			pctx.lineTo(x1, y0 + offset);
			pctx.moveTo(x0, y1 - offset);
			pctx.lineTo(x0 + offset, y1);
			pctx.moveTo(x0, y1);
			pctx.lineTo(x1, y0);
			pctx.moveTo(x1 + offset, y1);
			pctx.lineTo(x1, y1 + offset);
			pctx.moveTo(x0, y0 - offset);
			pctx.lineTo(x0 - offset, y0);
			pctx.stroke();
		}
		else if (index == 19) {
			pctx.setElementSize(8, 8);
			pctx.setElementLineWidth(2);
			pctx.setElementStrokeStyle(nexacro.ColorObject(patterncolor));
			offset = 2;

			pctx.beginPath();
			pctx.moveTo(pctx.width / 2, offset);
			pctx.lineTo(offset, pctx.height / 2);
			pctx.lineTo(pctx.width / 2, pctx.height - offset);
			pctx.lineTo(pctx.width - offset, pctx.height / 2);
			pctx.closePath();
			pctx.stroke();
		}

		if (bselect) {
			pctx.rect(0, 0, pctx.width, pctx.height);
			pctx.setElementFillStyle("gray");
			pctx.setElementGlobalAlpha(0.4);
			pctx.fill();
		}

		var pat = this._layer._canvas.createPattern(pctx, 'repeat');
		pctx.clearRect(0, 0, pctx.width, pctx.height);
		pctx.setElementGlobalAlpha(1);
		return pat;
	};
	_pGraphicsControl.redraw = function () {
		this._paint();

		if (this._repaint) {
			this._repaint = false;

			var pThis = this;
			var win_handle = this._getWindowHandle();

			if (this._timeId != null) {
				nexacro._clearSystemTimer(win_handle, this._timeId);
				this._timeId = null;
			}

			this._timeId = nexacro._setSystemTimer(win_handle, function () {
				nexacro._clearSystemTimer(win_handle, pThis._timeId);
				pThis._timeId = null;
				pThis._paint();
			}, 10);
		}
	};

	_pGraphicsControl.hitTest = function (x, y) {
		var elem;
		var layer = this._layer;
		if (layer) {
			elem = layer.hitTest(new nexacro.Point(+x, +y));
		}

		return elem;
	};
	_pGraphicsControl.hitTestAll = function (x, y) {
		var elem;

		elem = this._getGraphicsObjectAll(x, y);


		return elem;
	};

	_pGraphicsControl.getAllObjects = function () {
		var totalItems = [];
		var layer = this._layer;
		if (layer) {
			totalItems = layer.getAllObjects();
		}

		return totalItems;
	};

	_pGraphicsControl.getFirstChild = function () {
		var firstchild;
		var layer = this._layer;
		if (layer) {
			firstchild = layer.getFirstChild();
		}

		return firstchild;
	};

	_pGraphicsControl.getLastChild = function () {
		var lastchild;
		var layer = this._layer;
		if (layer) {
			lastchild = layer.getLastChild();
		}

		return lastchild;
	};

	_pGraphicsControl.removeChild = function (id) {
		var removechild;
		var layer = this._layer;
		if (layer) {
			removechild = layer.removeChild(id);
		}

		return removechild;
	};

	_pGraphicsControl.addChild = function (id, child) {
		var ret = -1;
		var layer = this._layer;
		if (layer) {
			ret = layer.addChild(id, child);
			if (ret > -1) {
				child.parent = this;
			}
		}

		return ret;
	};

	_pGraphicsControl.insertChild = function (idx, id, newChild) {
		var ret = -1;
		var layer = this._layer;
		if (layer) {
			ret = layer.insertChild(idx, id, newChild);
			if (ret > -1) {
				newChild.parent = this;
			}
		}

		return ret;
	};

	_pGraphicsControl.getObjectByID = function (id) {
		var children;
		var layer = this._layer;
		if (layer && id) {
			children = layer.getObjectByID(id);
		}

		return children;
	};
	_pGraphicsControl.indexOf = function (id) {
		var index = -1;
		var layer = this._layer;
		if (layer && id) {
			index = layer.indexOf(id);
		}

		return index;
	};
	_pGraphicsControl.getNextObject = function (id) {
		var obj = this.getObjectByID(id);
		if (obj) {
			return obj.getNextSibling();
		}
		else {
			return null;
		}
	};
	_pGraphicsControl.getPrevObject = function (id) {
		var obj = this.getObjectByID(id);
		if (obj) {
			return obj.getPreviousSibling();
		}
		else {
			return null;
		}
	};
	_pGraphicsControl.clear = function () {
		var layer = this._layer;
		if (layer) {
			layer.clear();
		}
	};


	_pGraphicsControl._delayTask = function () {
		if (this._painting) {
			this._repaint = true;
		}
		else {
			this._paint();
		}
	};

	_pGraphicsControl._paint = function () {
		var control_elem = this.getElement();
		if (control_elem) {
			if (this._painting) {
				return;
			}

			this._painting = true;

			var layer = this._layer;
			if (layer) {
				var ctx = layer._canvas;
				var bounds = layer._getCanvasRect();

				layer._setGlobalTransforms();
				layer._beforePaint();

				if (control_elem.handle) {
					if (!ctx) {
						ctx = layer._canvas = new nexacro.CanvasElement(control_elem);
						ctx.setElementPosition(bounds.left, bounds.top);
						ctx.setElementSize(bounds.width, bounds.height);
					}
					else if (this._drawflags & 2) {
						ctx.setElementPosition(bounds.left, bounds.top);
						ctx.setElementSize(bounds.width, bounds.height);
					}

					layer._paint();
				}

				this._drawflags = 0;
				this._painting = false;
			}
		}
	};

	_pGraphicsControl._setSize = function (w, h) {
		var size = new nexacro._GraphicsSize(w, h);

		var oldSize = this._size;
		if (oldSize) {
			if (!size.equals(oldSize)) {
				this._size = size;
				this._drawflags |= 2;
			}
		}
		else {
			this._size = size;
			this._drawflags |= 2;
		}
	};

	_pGraphicsControl._getGraphicsObjectAll = function (x, y) {
		var elem;
		var layer = this._layer;
		if (layer) {
			elem = layer.hitTestAll(new nexacro.Point(+x, +y));
		}

		return elem;
	};

	delete _pGraphicsControl;
}
