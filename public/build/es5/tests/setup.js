"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var chaiEnzyme = _interopRequire(require("chai-enzyme"));

var jsdom = _interopRequire(require("jsdom"));

var _chai = require("chai");

var chai = _interopRequire(_chai);

var expect = _chai.expect;


chai.use(chaiEnzyme());

var doc = jsdom.jsdom("<!doctype html><html><head><body></body>></head></html>");
var win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach(function (key) {
	if (!(key in global)) {
		global[key] = window[key];
	}
});
global.React = React;
global.expect = expect;