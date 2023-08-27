/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivityBrowser.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivityBrowser.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//

var uap = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ActivityBrowser",
  props: {
    userAgent: {},
    iconOnly: {
      "default": function _default() {
        return false;
      }
    }
  },
  computed: {
    browserName: function browserName() {
      if (!this.userAgent) return '';
      var parsed = uap(this.userAgent);
      if (parsed.browser) return parsed.browser.name;
    },
    browserVersion: function browserVersion() {
      if (!this.userAgent) return '';
      var parsed = uap(this.userAgent);
      if (parsed.browser) return parsed.browser.version;
    },
    browserIcon: function browserIcon() {
      return this.getIcon(this.browserName);
    }
  },
  methods: {
    getIcon: function getIcon(browserName) {
      var icons = {
        'Firefox [Focus/Reality]': 'fa-brands fa-firefox-browser',
        'Firefox': 'fa-brands fa-firefox-browser',
        'Edge': 'fa-brands fa-edge',
        'Chrome': 'fa-brands fa-chrome',
        'Chromium': 'fa-brands fa-chrome',
        'Safari': 'fa-brands fa-safari',
        'IE': 'fa-brands fa-internet-explorer',
        'Opera [Mini/Mobi/Tablet]': 'fa-brands fa-opera',
        'Opera': 'fa-brands fa-opera',
        'Brave': 'fa-solid fa-shield-cat'
      };
      return icons[browserName] !== undefined ? icons[browserName] : 'fa-solid fa-globe';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivitySystem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivitySystem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//

var uap = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ActivitySystem",
  props: {
    userAgent: {},
    iconOnly: {
      "default": function _default() {
        return false;
      }
    }
  },
  computed: {
    systemName: function systemName() {
      if (!this.userAgent) return '';
      var parsed = uap(this.userAgent);
      if (parsed.os) return parsed.os.name;
    },
    systemVersion: function systemVersion() {
      if (!this.userAgent) return '';
      var parsed = uap(this.userAgent);
      if (parsed.os) return parsed.os.version;
    },
    systemIcon: function systemIcon() {
      return this.getIcon(this.systemName);
    }
  },
  methods: {
    getIcon: function getIcon(systemName) {
      var icons = {
        'Android[-x86]': 'fa-brands fa-android',
        'Android': 'fa-brands fa-android',
        'Arch': 'fa-solid fa-archway',
        'CentOS': 'fa-brands fa-centos',
        'Chromium OS': 'fa-brands fa-chrome',
        'Firefox OS': 'fa-brands fa-firefox-browser',
        'Fedora': 'fa-brands fa-fedora',
        'iOS': 'fa-brands fa-apple',
        'Linux': 'fa-brands fa-linux',
        'Mint': 'fa-brands fa-linux',
        'Mac OS': 'fa-brands fa-apple',
        'Mac': 'fa-brands fa-apple',
        'Ubuntu': 'fa-brands fa-ubuntu',
        'Windows': 'fa-brands fa-windows',
        'Windows [Phone/Mobile]': 'fa-brands fa-windows'
      };
      return icons[systemName] !== undefined ? icons[systemName] : 'fa-solid fa-laptop';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Method.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Method.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Method",
  props: ['method'],
  computed: {
    methodsClass: function methodsClass() {
      var classes = {
        'GET': 'bg-label-info',
        'POST': 'bg-label-success',
        'PUT': 'bg-label-warning',
        'PATCH': 'bg-label-warning',
        'DELETE': 'bg-label-danger'
      };
      return classes[this.method] !== undefined ? classes[this.method] : 'bg-label-secondary';
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/mixins/activity-log.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/mixins/activity-log.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ActivityBrowser_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ActivityBrowser.vue */ "./resources/assets/js/components/ActivityBrowser.vue");
/* harmony import */ var _components_ActivitySystem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ActivitySystem.vue */ "./resources/assets/js/components/ActivitySystem.vue");
/* harmony import */ var vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-json-pretty/lib/styles.css */ "./node_modules/vue-json-pretty/lib/styles.css");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-json-pretty */ "./node_modules/vue-json-pretty/lib/vue-json-pretty.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty__WEBPACK_IMPORTED_MODULE_3__);




var activityLog = {
  components: {
    ActivityBrowser: _components_ActivityBrowser_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ActivitySystem: _components_ActivitySystem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueJsonPretty: (vue_json_pretty__WEBPACK_IMPORTED_MODULE_3___default())
  },
  created: function created() {},
  data: function data() {
    return {
      activityLog: {
        modal: null,
        route: activityLogGetRoute,
        item: null
      }
    };
  },
  methods: {
    openDetailsModal: function openDetailsModal(id, event) {
      var instance = this;
      var button = event.currentTarget;
      window.Spinner.on().button(button);
      var route = "".concat(this.activityLog.route, "/").concat(id);
      axios.get(route)["finally"](function () {
        window.Spinner.off().button(button);
      }).then(function (response) {
        instance.activityLog.item = response.data.result;
        instance.activityLogModal().show();
      })["catch"](function (error) {
        console.error(error);
      });
    },
    activityLogModal: function activityLogModal() {
      var myModalEl = document.querySelector('#ActivityLogDetailsModal');
      return bootstrap.Modal.getOrCreateInstance(myModalEl);
    },
    activityBrowser: function activityBrowser() {},
    activityOs: function activityOs() {}
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activityLog);

/***/ }),

/***/ "./resources/assets/js/mixins/common.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/mixins/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Common = {
  filters: {
    dateFormat: function dateFormat(value) {
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var compiled = new Date(value);
      return compiled.toLocaleString("en-GB");
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Common);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-json-pretty/lib/styles.css":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-json-pretty/lib/styles.css ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;-webkit-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{-webkit-box-sizing:content-box;box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;-webkit-transform:rotate(45deg) scaleY(0);transform:rotate(45deg) scaleY(0);width:4px;-webkit-transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s, -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-webkit-transform-origin:center;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vjs-tree-node{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff}.vjs-tree-node .vjs-indent{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.vjs-tree-node .vjs-indent-unit{width:1em}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-node-index{position:absolute;right:100%;margin-right:4px}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-value{word-break:break-word}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}", "",{"version":3,"sources":["webpack://./node_modules/vue-json-pretty/lib/styles.css"],"names":[],"mappings":"AAAA,mBAAmB,cAAc,CAAC,yBAAyB,aAAa,CAAC,sBAAsB,iBAAiB,CAAC,MAAM,CAAC,6DAA6D,wBAAwB,CAAC,oBAAoB,CAAC,+EAA+E,yCAAgC,CAAhC,iCAAiC,CAAC,4EAA4E,+CAAsC,CAAtC,uCAAuC,CAAC,kDAAkD,oBAAoB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,6BAAqB,CAArB,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,qBAAqB,CAAC,SAAS,CAAC,cAAc,CAAC,0HAAiH,CAAjH,kHAAkH,CAAC,wDAAwD,8BAAsB,CAAtB,sBAAsB,CAAC,UAAU,CAAC,qBAAqB,CAAC,aAAa,CAAC,YAAY,CAAC,UAAU,CAAC,QAAQ,CAAC,iBAAiB,CAAC,OAAO,CAAC,yCAAiC,CAAjC,iCAAiC,CAAC,SAAS,CAAC,4EAA4D,CAA5D,oEAA4D,CAA5D,4DAA4D,CAA5D,uHAA4D,CAAC,+BAAsB,CAAtB,uBAAuB,CAAC,2DAA2D,kBAAkB,CAAC,iEAAiE,kBAAkB,CAAC,UAAU,CAAC,qBAAqB,CAAC,QAAQ,CAAC,OAAO,CAAC,qDAAqD,SAAS,CAAC,YAAY,CAAC,iBAAiB,CAAC,UAAU,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,QAAQ,CAAC,YAAY,iBAAiB,CAAC,OAAO,CAAC,cAAc,CAAC,gBAAgB,wCAAuB,CAAvB,gCAAuB,CAAvB,wBAAuB,CAAvB,+CAAwB,CAAC,kBAAkB,aAAa,CAAC,kBAAkB,gCAAuB,CAAvB,wBAAwB,CAAC,eAAe,mBAAY,CAAZ,mBAAY,CAAZ,YAAY,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,0BAA0B,iBAAiB,CAAC,mEAAmE,iBAAiB,CAAC,iDAAiD,wBAAwB,CAAC,2BAA2B,mBAAY,CAAZ,mBAAY,CAAZ,YAAY,CAAC,iBAAiB,CAAC,gCAAgC,SAAS,CAAC,yCAAyC,8BAA8B,CAAC,gBAAgB,iBAAiB,CAAC,UAAU,CAAC,gBAAgB,CAAC,WAAW,eAAe,CAAC,aAAa,aAAa,CAAC,WAAW,qBAAqB,CAAC,qCAAqC,aAAa,CAAC,qCAAqC,aAAa,CAAC,kBAAkB,aAAa,CAAC,UAAU,oEAAoE,CAAC,cAAc,CAAC,eAAe,CAAC,qBAAqB,aAAa,CAAC,oCAAoC,kBAAkB","sourcesContent":[".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit{width:1em}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-node-index{position:absolute;right:100%;margin-right:4px}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-value{word-break:break-word}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Channel: () => (/* binding */ Channel),
/* harmony export */   "default": () => (/* binding */ Echo)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/**
 * This class represents a basic channel.
 */
var Channel = /*#__PURE__*/function () {
  function Channel() {
    _classCallCheck(this, Channel);
  }

  _createClass(Channel, [{
    key: "listenForWhisper",
    value:
    /**
     * Listen for a whisper event on the channel instance.
     */
    function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "notification",
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */

  }, {
    key: "stopListeningForWhisper",
    value: function stopListeningForWhisper(event, callback) {
      return this.stopListening('.client-' + event, callback);
    }
  }]);

  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function EventFormatter(namespace) {
    _classCallCheck(this, EventFormatter);

    this.namespace = namespace; //
  }
  /**
   * Format the given event name.
   */


  _createClass(EventFormatter, [{
    key: "format",
    value: function format(event) {
      if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
        return event.substr(1);
      } else if (this.namespace) {
        event = this.namespace + '.' + event;
      }

      return event.replace(/\./g, '\\');
    }
    /**
     * Set the event namespace.
     */

  }, {
    key: "setNamespace",
    value: function setNamespace(value) {
      this.namespace = value;
    }
  }]);

  return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */

var PusherChannel = /*#__PURE__*/function (_Channel) {
  _inherits(PusherChannel, _Channel);

  var _super = _createSuper(PusherChannel);

  /**
   * Create a new class instance.
   */
  function PusherChannel(pusher, name, options) {
    var _this;

    _classCallCheck(this, PusherChannel);

    _this = _super.call(this);
    _this.name = name;
    _this.pusher = pusher;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Pusher channel.
   */


  _createClass(PusherChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.subscription = this.pusher.subscribe(this.name);
    }
    /**
     * Unsubscribe from a Pusher channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.unsubscribe(this.name);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */

  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      var _this2 = this;

      this.subscription.bind_global(function (event, data) {
        if (event.startsWith('pusher:')) {
          return;
        }

        var namespace = _this2.options.namespace.replace(/\./g, '\\');

        var formattedEvent = event.startsWith(namespace) ? event.substring(namespace.length + 1) : '.' + event;
        callback(formattedEvent, data);
      });
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      if (callback) {
        this.subscription.unbind(this.eventFormatter.format(event), callback);
      } else {
        this.subscription.unbind(this.eventFormatter.format(event));
      }

      return this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */

  }, {
    key: "stopListeningToAll",
    value: function stopListeningToAll(callback) {
      if (callback) {
        this.subscription.unbind_global(callback);
      } else {
        this.subscription.unbind_global();
      }

      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('pusher:subscription_succeeded', function () {
        callback();
      });
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      this.on('pusher:subscription_error', function (status) {
        callback(status);
      });
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      this.subscription.bind(event, callback);
      return this;
    }
  }]);

  return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */

var PusherPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherPrivateChannel);

  function PusherPrivateChannel() {
    _classCallCheck(this, PusherPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher private channel.
 */

var PusherEncryptedPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherEncryptedPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherEncryptedPrivateChannel);

  function PusherEncryptedPrivateChannel() {
    _classCallCheck(this, PusherEncryptedPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherEncryptedPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherEncryptedPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */

var PusherPresenceChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPresenceChannel, _PusherChannel);

  var _super = _createSuper(PusherPresenceChannel);

  function PusherPresenceChannel() {
    _classCallCheck(this, PusherPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      this.on('pusher:subscription_succeeded', function (data) {
        callback(Object.keys(data.members).map(function (k) {
          return data.members[k];
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('pusher:member_added', function (member) {
        callback(member.info);
      });
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('pusher:member_removed', function (member) {
        callback(member.info);
      });
      return this;
    }
  }]);

  return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */

var SocketIoChannel = /*#__PURE__*/function (_Channel) {
  _inherits(SocketIoChannel, _Channel);

  var _super = _createSuper(SocketIoChannel);

  /**
   * Create a new class instance.
   */
  function SocketIoChannel(socket, name, options) {
    var _this;

    _classCallCheck(this, SocketIoChannel);

    _this = _super.call(this);
    /**
     * The event callbacks applied to the socket.
     */

    _this.events = {};
    /**
     * User supplied callbacks for events on this channel.
     */

    _this.listeners = {};
    _this.name = name;
    _this.socket = socket;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Socket.io channel.
   */


  _createClass(SocketIoChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.socket.emit('subscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Unsubscribe from channel and ubind event callbacks.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.unbind();
      this.socket.emit('unsubscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      this.unbindEvent(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('connect', function (socket) {
        callback(socket);
      });
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      var _this2 = this;

      this.listeners[event] = this.listeners[event] || [];

      if (!this.events[event]) {
        this.events[event] = function (channel, data) {
          if (_this2.name === channel && _this2.listeners[event]) {
            _this2.listeners[event].forEach(function (cb) {
              return cb(data);
            });
          }
        };

        this.socket.on(event, this.events[event]);
      }

      this.listeners[event].push(callback);
      return this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */

  }, {
    key: "unbind",
    value: function unbind() {
      var _this3 = this;

      Object.keys(this.events).forEach(function (event) {
        _this3.unbindEvent(event);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */

  }, {
    key: "unbindEvent",
    value: function unbindEvent(event, callback) {
      this.listeners[event] = this.listeners[event] || [];

      if (callback) {
        this.listeners[event] = this.listeners[event].filter(function (cb) {
          return cb !== callback;
        });
      }

      if (!callback || this.listeners[event].length === 0) {
        if (this.events[event]) {
          this.socket.removeListener(event, this.events[event]);
          delete this.events[event];
        }

        delete this.listeners[event];
      }
    }
  }]);

  return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io private channel.
 */

var SocketIoPrivateChannel = /*#__PURE__*/function (_SocketIoChannel) {
  _inherits(SocketIoPrivateChannel, _SocketIoChannel);

  var _super = _createSuper(SocketIoPrivateChannel);

  function SocketIoPrivateChannel() {
    _classCallCheck(this, SocketIoPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.socket.emit('client event', {
        channel: this.name,
        event: "client-".concat(eventName),
        data: data
      });
      return this;
    }
  }]);

  return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */

var SocketIoPresenceChannel = /*#__PURE__*/function (_SocketIoPrivateChann) {
  _inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

  var _super = _createSuper(SocketIoPresenceChannel);

  function SocketIoPresenceChannel() {
    _classCallCheck(this, SocketIoPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      this.on('presence:subscribed', function (members) {
        callback(members.map(function (m) {
          return m.user_info;
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('presence:joining', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.socket.emit('client event', {
        channel: this.name,
        event: "client-".concat(eventName),
        data: data
      });
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('presence:leaving', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
  }]);

  return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */

var NullChannel = /*#__PURE__*/function (_Channel) {
  _inherits(NullChannel, _Channel);

  var _super = _createSuper(NullChannel);

  function NullChannel() {
    _classCallCheck(this, NullChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullChannel, [{
    key: "subscribe",
    value:
    /**
     * Subscribe to a channel.
     */
    function subscribe() {//
    }
    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {//
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */

  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      return this;
    }
  }]);

  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */

var NullPrivateChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPrivateChannel, _NullChannel);

  var _super = _createSuper(NullPrivateChannel);

  function NullPrivateChannel() {
    _classCallCheck(this, NullPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      return this;
    }
  }]);

  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */

var NullPresenceChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPresenceChannel, _NullChannel);

  var _super = _createSuper(NullPresenceChannel);

  function NullPresenceChannel() {
    _classCallCheck(this, NullPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      return this;
    }
  }]);

  return NullPresenceChannel;
}(NullChannel);

var Connector = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Connector(options) {
    _classCallCheck(this, Connector);

    /**
     * Default connector options.
     */
    this._defaultOptions = {
      auth: {
        headers: {}
      },
      authEndpoint: '/broadcasting/auth',
      userAuthentication: {
        endpoint: '/broadcasting/user-auth',
        headers: {}
      },
      broadcaster: 'pusher',
      csrfToken: null,
      bearerToken: null,
      host: null,
      key: null,
      namespace: 'App.Events'
    };
    this.setOptions(options);
    this.connect();
  }
  /**
   * Merge the custom options with the defaults.
   */


  _createClass(Connector, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = _extends(this._defaultOptions, options);
      var token = this.csrfToken();

      if (token) {
        this.options.auth.headers['X-CSRF-TOKEN'] = token;
        this.options.userAuthentication.headers['X-CSRF-TOKEN'] = token;
      }

      token = this.options.bearerToken;

      if (token) {
        this.options.auth.headers['Authorization'] = 'Bearer ' + token;
        this.options.userAuthentication.headers['Authorization'] = 'Bearer ' + token;
      }

      return options;
    }
    /**
     * Extract the CSRF token from the page.
     */

  }, {
    key: "csrfToken",
    value: function csrfToken() {
      var selector;

      if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
        return window['Laravel'].csrfToken;
      } else if (this.options.csrfToken) {
        return this.options.csrfToken;
      } else if (typeof document !== 'undefined' && typeof document.querySelector === 'function' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
        return selector.getAttribute('content');
      }

      return null;
    }
  }]);

  return Connector;
}();

/**
 * This class creates a connector to Pusher.
 */

var PusherConnector = /*#__PURE__*/function (_Connector) {
  _inherits(PusherConnector, _Connector);

  var _super = _createSuper(PusherConnector);

  function PusherConnector() {
    var _this;

    _classCallCheck(this, PusherConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Pusher connection.
   */


  _createClass(PusherConnector, [{
    key: "connect",
    value: function connect() {
      if (typeof this.options.client !== 'undefined') {
        this.pusher = this.options.client;
      } else if (this.options.Pusher) {
        this.pusher = new this.options.Pusher(this.options.key, this.options);
      } else {
        this.pusher = new Pusher(this.options.key, this.options);
      }
    }
    /**
     * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
     */

  }, {
    key: "signin",
    value: function signin() {
      this.pusher.signin();
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new PusherChannel(this.pusher, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name) {
      if (!this.channels['private-encrypted-' + name]) {
        this.channels['private-encrypted-' + name] = new PusherEncryptedPrivateChannel(this.pusher, 'private-encrypted-' + name, this.options);
      }

      return this.channels['private-encrypted-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this2 = this;

      var channels = [name, 'private-' + name, 'private-encrypted-' + name, 'presence-' + name];
      channels.forEach(function (name, index) {
        _this2.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.pusher.connection.socket_id;
    }
    /**
     * Disconnect Pusher connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.pusher.disconnect();
    }
  }]);

  return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */

var SocketIoConnector = /*#__PURE__*/function (_Connector) {
  _inherits(SocketIoConnector, _Connector);

  var _super = _createSuper(SocketIoConnector);

  function SocketIoConnector() {
    var _this;

    _classCallCheck(this, SocketIoConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Socket.io connection.
   */


  _createClass(SocketIoConnector, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var io = this.getSocketIO();
      this.socket = io(this.options.host, this.options);
      this.socket.on('reconnect', function () {
        Object.values(_this2.channels).forEach(function (channel) {
          channel.subscribe();
        });
      });
      return this.socket;
    }
    /**
     * Get socket.io module from global scope or options.
     */

  }, {
    key: "getSocketIO",
    value: function getSocketIO() {
      if (typeof this.options.client !== 'undefined') {
        return this.options.client;
      }

      if (typeof io !== 'undefined') {
        return io;
      }

      throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this3 = this;

      var channels = [name, 'private-' + name, 'presence-' + name];
      channels.forEach(function (name) {
        _this3.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.socket.id;
    }
    /**
     * Disconnect Socketio connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.socket.disconnect();
    }
  }]);

  return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */

var NullConnector = /*#__PURE__*/function (_Connector) {
  _inherits(NullConnector, _Connector);

  var _super = _createSuper(NullConnector);

  function NullConnector() {
    var _this;

    _classCallCheck(this, NullConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  _createClass(NullConnector, [{
    key: "connect",
    value: function connect() {//
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {//
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {//
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {//
    }
  }]);

  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Echo(options) {
    _classCallCheck(this, Echo);

    this.options = options;
    this.connect();

    if (!this.options.withoutInterceptors) {
      this.registerInterceptors();
    }
  }
  /**
   * Get a channel instance by name.
   */


  _createClass(Echo, [{
    key: "channel",
    value: function channel(_channel) {
      return this.connector.channel(_channel);
    }
    /**
     * Create a new connection.
     */

  }, {
    key: "connect",
    value: function connect() {
      if (this.options.broadcaster == 'pusher') {
        this.connector = new PusherConnector(this.options);
      } else if (this.options.broadcaster == 'socket.io') {
        this.connector = new SocketIoConnector(this.options);
      } else if (this.options.broadcaster == 'null') {
        this.connector = new NullConnector(this.options);
      } else if (typeof this.options.broadcaster == 'function') {
        this.connector = new this.options.broadcaster(this.options);
      }
    }
    /**
     * Disconnect from the Echo server.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.connector.disconnect();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "join",
    value: function join(channel) {
      return this.connector.presenceChannel(channel);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(channel) {
      this.connector.leave(channel);
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(channel) {
      this.connector.leaveChannel(channel);
    }
    /**
     * Leave all channels.
     */

  }, {
    key: "leaveAllChannels",
    value: function leaveAllChannels() {
      for (var channel in this.connector.channels) {
        this.leaveChannel(channel);
      }
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(channel, event, callback) {
      return this.connector.listen(channel, event, callback);
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "private",
    value: function _private(channel) {
      return this.connector.privateChannel(channel);
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivate",
    value: function encryptedPrivate(channel) {
      return this.connector.encryptedPrivateChannel(channel);
    }
    /**
     * Get the Socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.connector.socketId();
    }
    /**
     * Register 3rd party request interceptiors. These are used to automatically
     * send a connections socket id to a Laravel app with a X-Socket-Id header.
     */

  }, {
    key: "registerInterceptors",
    value: function registerInterceptors() {
      if (typeof Vue === 'function' && Vue.http) {
        this.registerVueRequestInterceptor();
      }

      if (typeof axios === 'function') {
        this.registerAxiosRequestInterceptor();
      }

      if (typeof jQuery === 'function') {
        this.registerjQueryAjaxSetup();
      }

      if ((typeof Turbo === "undefined" ? "undefined" : _typeof(Turbo)) === 'object') {
        this.registerTurboRequestInterceptor();
      }
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerVueRequestInterceptor",
    value: function registerVueRequestInterceptor() {
      var _this = this;

      Vue.http.interceptors.push(function (request, next) {
        if (_this.socketId()) {
          request.headers.set('X-Socket-ID', _this.socketId());
        }

        next();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerAxiosRequestInterceptor",
    value: function registerAxiosRequestInterceptor() {
      var _this2 = this;

      axios.interceptors.request.use(function (config) {
        if (_this2.socketId()) {
          config.headers['X-Socket-Id'] = _this2.socketId();
        }

        return config;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */

  }, {
    key: "registerjQueryAjaxSetup",
    value: function registerjQueryAjaxSetup() {
      var _this3 = this;

      if (typeof jQuery.ajax != 'undefined') {
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (_this3.socketId()) {
            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
          }
        });
      }
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerTurboRequestInterceptor",
    value: function registerTurboRequestInterceptor() {
      var _this4 = this;

      document.addEventListener('turbo:before-fetch-request', function (event) {
        event.detail.fetchOptions.headers['X-Socket-Id'] = _this4.socketId();
      });
    }
  }]);

  return Echo;
}();




/***/ }),

/***/ "./node_modules/pusher-js/dist/web/pusher.js":
/*!***************************************************!*\
  !*** ./node_modules/pusher-js/dist/web/pusher.js ***!
  \***************************************************/
/***/ ((module) => {

/*!
 * Pusher JavaScript Library v8.3.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_669__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_669__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_669__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_669__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_669__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_669__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_669__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_669__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_669__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_669__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_669__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_669__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_669__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_669__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_669__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_669__(__nested_webpack_require_669__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package base64 implements Base64 encoding and decoding.
 */
// Invalid character used in decoding to indicate
// that the character to decode is out of range of
// alphabet and cannot be decoded.
var INVALID_BYTE = 256;
/**
 * Implements standard Base64 encoding.
 *
 * Operates in constant time.
 */
var Coder = /** @class */ (function () {
    // TODO(dchest): methods to encode chunk-by-chunk.
    function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) { _paddingCharacter = "="; }
        this._paddingCharacter = _paddingCharacter;
    }
    Coder.prototype.encodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
    };
    Coder.prototype.encode = function (data) {
        var out = "";
        var i = 0;
        for (; i < data.length - 2; i += 3) {
            var c = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            out += this._encodeByte((c >>> 1 * 6) & 63);
            out += this._encodeByte((c >>> 0 * 6) & 63);
        }
        var left = data.length - i;
        if (left > 0) {
            var c = (data[i] << 16) | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            if (left === 2) {
                out += this._encodeByte((c >>> 1 * 6) & 63);
            }
            else {
                out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
        }
        return out;
    };
    Coder.prototype.maxDecodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
    };
    Coder.prototype.decodedLength = function (s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
    };
    Coder.prototype.decode = function (s) {
        if (s.length === 0) {
            return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
        for (; i < length - 4; i += 4) {
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            out[op++] = (v1 << 4) | (v2 >>> 2);
            out[op++] = (v2 << 6) | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = (v1 << 4) | (v2 >>> 2);
            haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v2 << 6) | v3;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
    };
    // Standard encoding have the following encoded/decoded ranges,
    // which we need to convert between.
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
    //
    // Encode 6 bits in b into a new character.
    Coder.prototype._encodeByte = function (b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 43);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 43) - 63 + 47);
        return String.fromCharCode(result);
    };
    // Decode a character code into a byte.
    // Must return 256 if character is out of alphabet range.
    Coder.prototype._decodeChar = function (c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (((42 - c) & (c - 44)) >>> 8) & (-INVALID_BYTE + c - 43 + 62);
        // c == 47 (c > 46 and c < 48)
        result += (((46 - c) & (c - 48)) >>> 8) & (-INVALID_BYTE + c - 47 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    Coder.prototype._getPaddingLength = function (s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] !== this._paddingCharacter) {
                    break;
                }
                paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
                throw new Error("Base64Coder: incorrect padding");
            }
        }
        return paddingLength;
    };
    return Coder;
}());
exports.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
    return stdCoder.encode(data);
}
exports.encode = encode;
function decode(s) {
    return stdCoder.decode(s);
}
exports.decode = decode;
/**
 * Implements URL-safe Base64 encoding.
 * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
 *
 * Operates in constant time.
 */
var URLSafeCoder = /** @class */ (function (_super) {
    __extends(URLSafeCoder, _super);
    function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // URL-safe encoding have the following encoded/decoded ranges:
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
    //
    URLSafeCoder.prototype._encodeByte = function (b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 45);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 45) - 63 + 95);
        return String.fromCharCode(result);
    };
    URLSafeCoder.prototype._decodeChar = function (c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (((44 - c) & (c - 46)) >>> 8) & (-INVALID_BYTE + c - 45 + 62);
        // c == 95 (c > 94 and c < 96)
        result += (((94 - c) & (c - 96)) >>> 8) & (-INVALID_BYTE + c - 95 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    return URLSafeCoder;
}(Coder));
exports.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
    return urlSafeCoder.encode(data);
}
exports.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
    return urlSafeCoder.decode(s);
}
exports.decodeURLSafe = decodeURLSafe;
exports.encodedLength = function (length) {
    return stdCoder.encodedLength(length);
};
exports.maxDecodedLength = function (length) {
    return stdCoder.maxDecodedLength(length);
};
exports.decodedLength = function (s) {
    return stdCoder.decodedLength(s);
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package utf8 implements UTF-8 encoding and decoding.
 */
var INVALID_UTF16 = "utf8: invalid string";
var INVALID_UTF8 = "utf8: invalid source encoding";
/**
 * Encodes the given string into UTF-8 byte array.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encode(s) {
    // Calculate result length and allocate output array.
    // encodedLength() also validates string and throws errors,
    // so we don't need repeat validation here.
    var arr = new Uint8Array(encodedLength(s));
    var pos = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            arr[pos++] = c;
        }
        else if (c < 0x800) {
            arr[pos++] = 0xc0 | c >> 6;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else if (c < 0xd800) {
            arr[pos++] = 0xe0 | c >> 12;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else {
            i++; // get one more character
            c = (c & 0x3ff) << 10;
            c |= s.charCodeAt(i) & 0x3ff;
            c += 0x10000;
            arr[pos++] = 0xf0 | c >> 18;
            arr[pos++] = 0x80 | (c >> 12) & 0x3f;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
    }
    return arr;
}
exports.encode = encode;
/**
 * Returns the number of bytes required to encode the given string into UTF-8.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encodedLength(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            result += 1;
        }
        else if (c < 0x800) {
            result += 2;
        }
        else if (c < 0xd800) {
            result += 3;
        }
        else if (c <= 0xdfff) {
            if (i >= s.length - 1) {
                throw new Error(INVALID_UTF16);
            }
            i++; // "eat" next character
            result += 4;
        }
        else {
            throw new Error(INVALID_UTF16);
        }
    }
    return result;
}
exports.encodedLength = encodedLength;
/**
 * Decodes the given byte array from UTF-8 into a string.
 * Throws if encoding is invalid.
 */
function decode(arr) {
    var chars = [];
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        if (b & 0x80) {
            var min = void 0;
            if (b < 0xe0) {
                // Need 1 more byte.
                if (i >= arr.length) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                if ((n1 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x1f) << 6 | (n1 & 0x3f);
                min = 0x80;
            }
            else if (b < 0xf0) {
                // Need 2 more bytes.
                if (i >= arr.length - 1) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 12 | (n1 & 0x3f) << 6 | (n2 & 0x3f);
                min = 0x800;
            }
            else if (b < 0xf8) {
                // Need 3 more bytes.
                if (i >= arr.length - 2) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                var n3 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80 || (n3 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 18 | (n1 & 0x3f) << 12 | (n2 & 0x3f) << 6 | (n3 & 0x3f);
                min = 0x10000;
            }
            else {
                throw new Error(INVALID_UTF8);
            }
            if (b < min || (b >= 0xd800 && b <= 0xdfff)) {
                throw new Error(INVALID_UTF8);
            }
            if (b >= 0x10000) {
                // Surrogate pair.
                if (b > 0x10ffff) {
                    throw new Error(INVALID_UTF8);
                }
                b -= 0x10000;
                chars.push(String.fromCharCode(0xd800 | (b >> 10)));
                b = 0xdc00 | (b & 0x3ff);
            }
        }
        chars.push(String.fromCharCode(b));
    }
    return chars.join("");
}
exports.decode = decode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_19901__) {

// required so we don't have to do require('pusher').default etc.
module.exports = __nested_webpack_require_19901__(3).default;


/***/ }),
/* 3 */
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_20105__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_20105__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_receiver_factory.ts
class ScriptReceiverFactory {
    constructor(prefix, name) {
        this.lastId = 0;
        this.prefix = prefix;
        this.name = name;
    }
    create(callback) {
        this.lastId++;
        var number = this.lastId;
        var id = this.prefix + number;
        var name = this.name + '[' + number + ']';
        var called = false;
        var callbackWrapper = function () {
            if (!called) {
                callback.apply(null, arguments);
                called = true;
            }
        };
        this[number] = callbackWrapper;
        return { number: number, id: id, name: name, callback: callbackWrapper };
    }
    remove(receiver) {
        delete this[receiver.number];
    }
}
var ScriptReceivers = new ScriptReceiverFactory('_pusher_script_', 'Pusher.ScriptReceivers');

// CONCATENATED MODULE: ./src/core/defaults.ts
var Defaults = {
    VERSION: "8.3.0",
    PROTOCOL: 7,
    wsPort: 80,
    wssPort: 443,
    wsPath: '',
    httpHost: 'sockjs.pusher.com',
    httpPort: 80,
    httpsPort: 443,
    httpPath: '/pusher',
    stats_host: 'stats.pusher.com',
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax',
    activityTimeout: 120000,
    pongTimeout: 30000,
    unavailableTimeout: 10000,
    userAuthentication: {
        endpoint: '/pusher/user-auth',
        transport: 'ajax'
    },
    channelAuthorization: {
        endpoint: '/pusher/auth',
        transport: 'ajax'
    },
    cdn_http: "http://js.pusher.com",
    cdn_https: "https://js.pusher.com",
    dependency_suffix: ""
};
/* harmony default export */ var defaults = (Defaults);

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependency_loader.ts


class dependency_loader_DependencyLoader {
    constructor(options) {
        this.options = options;
        this.receivers = options.receivers || ScriptReceivers;
        this.loading = {};
    }
    load(name, options, callback) {
        var self = this;
        if (self.loading[name] && self.loading[name].length > 0) {
            self.loading[name].push(callback);
        }
        else {
            self.loading[name] = [callback];
            var request = runtime.createScriptRequest(self.getPath(name, options));
            var receiver = self.receivers.create(function (error) {
                self.receivers.remove(receiver);
                if (self.loading[name]) {
                    var callbacks = self.loading[name];
                    delete self.loading[name];
                    var successCallback = function (wasSuccessful) {
                        if (!wasSuccessful) {
                            request.cleanup();
                        }
                    };
                    for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](error, successCallback);
                    }
                }
            });
            request.send(receiver);
        }
    }
    getRoot(options) {
        var cdn;
        var protocol = runtime.getDocument().location.protocol;
        if ((options && options.useTLS) || protocol === 'https:') {
            cdn = this.options.cdn_https;
        }
        else {
            cdn = this.options.cdn_http;
        }
        return cdn.replace(/\/*$/, '') + '/' + this.options.version;
    }
    getPath(name, options) {
        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependencies.ts



var DependenciesReceivers = new ScriptReceiverFactory('_pusher_dependencies', 'Pusher.DependenciesReceivers');
var Dependencies = new dependency_loader_DependencyLoader({
    cdn_http: defaults.cdn_http,
    cdn_https: defaults.cdn_https,
    version: defaults.VERSION,
    suffix: defaults.dependency_suffix,
    receivers: DependenciesReceivers
});

// CONCATENATED MODULE: ./src/core/utils/url_store.ts
const urlStore = {
    baseUrl: 'https://pusher.com',
    urls: {
        authenticationEndpoint: {
            path: '/docs/channels/server_api/authenticating_users'
        },
        authorizationEndpoint: {
            path: '/docs/channels/server_api/authorizing-users/'
        },
        javascriptQuickStart: {
            path: '/docs/javascript_quick_start'
        },
        triggeringClientEvents: {
            path: '/docs/client_api_guide/client_events#trigger-events'
        },
        encryptedChannelSupport: {
            fullUrl: 'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support'
        }
    }
};
const buildLogSuffix = function (key) {
    const urlPrefix = 'See:';
    const urlObj = urlStore.urls[key];
    if (!urlObj)
        return '';
    let url;
    if (urlObj.fullUrl) {
        url = urlObj.fullUrl;
    }
    else if (urlObj.path) {
        url = urlStore.baseUrl + urlObj.path;
    }
    if (!url)
        return '';
    return `${urlPrefix} ${url}`;
};
/* harmony default export */ var url_store = ({ buildLogSuffix });

// CONCATENATED MODULE: ./src/core/auth/options.ts
var AuthRequestType;
(function (AuthRequestType) {
    AuthRequestType["UserAuthentication"] = "user-authentication";
    AuthRequestType["ChannelAuthorization"] = "channel-authorization";
})(AuthRequestType || (AuthRequestType = {}));

// CONCATENATED MODULE: ./src/core/errors.ts
class BadEventName extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class BadChannelName extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class RequestTimedOut extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class TransportPriorityTooLow extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class TransportClosed extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedFeature extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedTransport extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedStrategy extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class HTTPAuthError extends Error {
    constructor(status, msg) {
        super(msg);
        this.status = status;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

// CONCATENATED MODULE: ./src/runtimes/isomorphic/auth/xhr_auth.ts




const ajax = function (context, query, authOptions, authRequestType, callback) {
    const xhr = runtime.createXHR();
    xhr.open('POST', authOptions.endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    for (var headerName in authOptions.headers) {
        xhr.setRequestHeader(headerName, authOptions.headers[headerName]);
    }
    if (authOptions.headersProvider != null) {
        let dynamicHeaders = authOptions.headersProvider();
        for (var headerName in dynamicHeaders) {
            xhr.setRequestHeader(headerName, dynamicHeaders[headerName]);
        }
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data;
                let parsed = false;
                try {
                    data = JSON.parse(xhr.responseText);
                    parsed = true;
                }
                catch (e) {
                    callback(new HTTPAuthError(200, `JSON returned from ${authRequestType.toString()} endpoint was invalid, yet status code was 200. Data was: ${xhr.responseText}`), null);
                }
                if (parsed) {
                    callback(null, data);
                }
            }
            else {
                let suffix = '';
                switch (authRequestType) {
                    case AuthRequestType.UserAuthentication:
                        suffix = url_store.buildLogSuffix('authenticationEndpoint');
                        break;
                    case AuthRequestType.ChannelAuthorization:
                        suffix = `Clients must be authorized to join private or presence channels. ${url_store.buildLogSuffix('authorizationEndpoint')}`;
                        break;
                }
                callback(new HTTPAuthError(xhr.status, `Unable to retrieve auth string from ${authRequestType.toString()} endpoint - ` +
                    `received status: ${xhr.status} from ${authOptions.endpoint}. ${suffix}`), null);
            }
        }
    };
    xhr.send(query);
    return xhr;
};
/* harmony default export */ var xhr_auth = (ajax);

// CONCATENATED MODULE: ./src/core/base64.ts
function encode(s) {
    return btoa(utob(s));
}
var fromCharCode = String.fromCharCode;
var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var b64tab = {};
for (var base64_i = 0, l = b64chars.length; base64_i < l; base64_i++) {
    b64tab[b64chars.charAt(base64_i)] = base64_i;
}
var cb_utob = function (c) {
    var cc = c.charCodeAt(0);
    return cc < 0x80
        ? c
        : cc < 0x800
            ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
                fromCharCode(0x80 | (cc & 0x3f));
};
var utob = function (u) {
    return u.replace(/[^\x00-\x7F]/g, cb_utob);
};
var cb_encode = function (ccc) {
    var padlen = [0, 2, 1][ccc.length % 3];
    var ord = (ccc.charCodeAt(0) << 16) |
        ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
        (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
    var chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
    ];
    return chars.join('');
};
var btoa = window.btoa ||
    function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };

// CONCATENATED MODULE: ./src/core/utils/timers/abstract_timer.ts
class Timer {
    constructor(set, clear, delay, callback) {
        this.clear = clear;
        this.timer = set(() => {
            if (this.timer) {
                this.timer = callback(this.timer);
            }
        }, delay);
    }
    isRunning() {
        return this.timer !== null;
    }
    ensureAborted() {
        if (this.timer) {
            this.clear(this.timer);
            this.timer = null;
        }
    }
}
/* harmony default export */ var abstract_timer = (Timer);

// CONCATENATED MODULE: ./src/core/utils/timers/index.ts

function timers_clearTimeout(timer) {
    window.clearTimeout(timer);
}
function timers_clearInterval(timer) {
    window.clearInterval(timer);
}
class timers_OneOffTimer extends abstract_timer {
    constructor(delay, callback) {
        super(setTimeout, timers_clearTimeout, delay, function (timer) {
            callback();
            return null;
        });
    }
}
class timers_PeriodicTimer extends abstract_timer {
    constructor(delay, callback) {
        super(setInterval, timers_clearInterval, delay, function (timer) {
            callback();
            return timer;
        });
    }
}

// CONCATENATED MODULE: ./src/core/util.ts

var Util = {
    now() {
        if (Date.now) {
            return Date.now();
        }
        else {
            return new Date().valueOf();
        }
    },
    defer(callback) {
        return new timers_OneOffTimer(0, callback);
    },
    method(name, ...args) {
        var boundArguments = Array.prototype.slice.call(arguments, 1);
        return function (object) {
            return object[name].apply(object, boundArguments.concat(arguments));
        };
    }
};
/* harmony default export */ var util = (Util);

// CONCATENATED MODULE: ./src/core/utils/collections.ts


function extend(target, ...sources) {
    for (var i = 0; i < sources.length; i++) {
        var extensions = sources[i];
        for (var property in extensions) {
            if (extensions[property] &&
                extensions[property].constructor &&
                extensions[property].constructor === Object) {
                target[property] = extend(target[property] || {}, extensions[property]);
            }
            else {
                target[property] = extensions[property];
            }
        }
    }
    return target;
}
function stringify() {
    var m = ['Pusher'];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            m.push(arguments[i]);
        }
        else {
            m.push(safeJSONStringify(arguments[i]));
        }
    }
    return m.join(' : ');
}
function arrayIndexOf(array, item) {
    var nativeIndexOf = Array.prototype.indexOf;
    if (array === null) {
        return -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item);
    }
    for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}
function objectApply(object, f) {
    for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            f(object[key], key, object);
        }
    }
}
function keys(object) {
    var keys = [];
    objectApply(object, function (_, key) {
        keys.push(key);
    });
    return keys;
}
function values(object) {
    var values = [];
    objectApply(object, function (value) {
        values.push(value);
    });
    return values;
}
function apply(array, f, context) {
    for (var i = 0; i < array.length; i++) {
        f.call(context || window, array[i], i, array);
    }
}
function map(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(f(array[i], i, array, result));
    }
    return result;
}
function mapObject(object, f) {
    var result = {};
    objectApply(object, function (value, key) {
        result[key] = f(value);
    });
    return result;
}
function filter(array, test) {
    test =
        test ||
            function (value) {
                return !!value;
            };
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array, result)) {
            result.push(array[i]);
        }
    }
    return result;
}
function filterObject(object, test) {
    var result = {};
    objectApply(object, function (value, key) {
        if ((test && test(value, key, object, result)) || Boolean(value)) {
            result[key] = value;
        }
    });
    return result;
}
function flatten(object) {
    var result = [];
    objectApply(object, function (value, key) {
        result.push([key, value]);
    });
    return result;
}
function any(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
function collections_all(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
function encodeParamsObject(data) {
    return mapObject(data, function (value) {
        if (typeof value === 'object') {
            value = safeJSONStringify(value);
        }
        return encodeURIComponent(encode(value.toString()));
    });
}
function buildQueryString(data) {
    var params = filterObject(data, function (value) {
        return value !== undefined;
    });
    var query = map(flatten(encodeParamsObject(params)), util.method('join', '=')).join('&');
    return query;
}
function decycleObject(object) {
    var objects = [], paths = [];
    return (function derez(value, path) {
        var i, name, nu;
        switch (typeof value) {
            case 'object':
                if (!value) {
                    return null;
                }
                for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                        return { $ref: paths[i] };
                    }
                }
                objects.push(value);
                paths.push(path);
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                    }
                }
                else {
                    nu = {};
                    for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                        }
                    }
                }
                return nu;
            case 'number':
            case 'string':
            case 'boolean':
                return value;
        }
    })(object, '$');
}
function safeJSONStringify(source) {
    try {
        return JSON.stringify(source);
    }
    catch (e) {
        return JSON.stringify(decycleObject(source));
    }
}

// CONCATENATED MODULE: ./src/core/logger.ts


class logger_Logger {
    constructor() {
        this.globalLog = (message) => {
            if (window.console && window.console.log) {
                window.console.log(message);
            }
        };
    }
    debug(...args) {
        this.log(this.globalLog, args);
    }
    warn(...args) {
        this.log(this.globalLogWarn, args);
    }
    error(...args) {
        this.log(this.globalLogError, args);
    }
    globalLogWarn(message) {
        if (window.console && window.console.warn) {
            window.console.warn(message);
        }
        else {
            this.globalLog(message);
        }
    }
    globalLogError(message) {
        if (window.console && window.console.error) {
            window.console.error(message);
        }
        else {
            this.globalLogWarn(message);
        }
    }
    log(defaultLoggingFunction, ...args) {
        var message = stringify.apply(this, arguments);
        if (core_pusher.log) {
            core_pusher.log(message);
        }
        else if (core_pusher.logToConsole) {
            const log = defaultLoggingFunction.bind(this);
            log(message);
        }
    }
}
/* harmony default export */ var logger = (new logger_Logger());

// CONCATENATED MODULE: ./src/runtimes/web/auth/jsonp_auth.ts

var jsonp = function (context, query, authOptions, authRequestType, callback) {
    if (authOptions.headers !== undefined ||
        authOptions.headersProvider != null) {
        logger.warn(`To send headers with the ${authRequestType.toString()} request, you must use AJAX, rather than JSONP.`);
    }
    var callbackName = context.nextAuthCallbackID.toString();
    context.nextAuthCallbackID++;
    var document = context.getDocument();
    var script = document.createElement('script');
    context.auth_callbacks[callbackName] = function (data) {
        callback(null, data);
    };
    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
    script.src =
        authOptions.endpoint +
            '?callback=' +
            encodeURIComponent(callback_name) +
            '&' +
            query;
    var head = document.getElementsByTagName('head')[0] || document.documentElement;
    head.insertBefore(script, head.firstChild);
};
/* harmony default export */ var jsonp_auth = (jsonp);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_request.ts
class ScriptRequest {
    constructor(src) {
        this.src = src;
    }
    send(receiver) {
        var self = this;
        var errorString = 'Error loading ' + self.src;
        self.script = document.createElement('script');
        self.script.id = receiver.id;
        self.script.src = self.src;
        self.script.type = 'text/javascript';
        self.script.charset = 'UTF-8';
        if (self.script.addEventListener) {
            self.script.onerror = function () {
                receiver.callback(errorString);
            };
            self.script.onload = function () {
                receiver.callback(null);
            };
        }
        else {
            self.script.onreadystatechange = function () {
                if (self.script.readyState === 'loaded' ||
                    self.script.readyState === 'complete') {
                    receiver.callback(null);
                }
            };
        }
        if (self.script.async === undefined &&
            document.attachEvent &&
            /opera/i.test(navigator.userAgent)) {
            self.errorScript = document.createElement('script');
            self.errorScript.id = receiver.id + '_error';
            self.errorScript.text = receiver.name + "('" + errorString + "');";
            self.script.async = self.errorScript.async = false;
        }
        else {
            self.script.async = true;
        }
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(self.script, head.firstChild);
        if (self.errorScript) {
            head.insertBefore(self.errorScript, self.script.nextSibling);
        }
    }
    cleanup() {
        if (this.script) {
            this.script.onload = this.script.onerror = null;
            this.script.onreadystatechange = null;
        }
        if (this.script && this.script.parentNode) {
            this.script.parentNode.removeChild(this.script);
        }
        if (this.errorScript && this.errorScript.parentNode) {
            this.errorScript.parentNode.removeChild(this.errorScript);
        }
        this.script = null;
        this.errorScript = null;
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/dom/jsonp_request.ts


class jsonp_request_JSONPRequest {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }
    send(receiver) {
        if (this.request) {
            return;
        }
        var query = buildQueryString(this.data);
        var url = this.url + '/' + receiver.number + '?' + query;
        this.request = runtime.createScriptRequest(url);
        this.request.send(receiver);
    }
    cleanup() {
        if (this.request) {
            this.request.cleanup();
        }
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/timeline/jsonp_timeline.ts


var getAgent = function (sender, useTLS) {
    return function (data, callback) {
        var scheme = 'http' + (useTLS ? 's' : '') + '://';
        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
        var request = runtime.createJSONPRequest(url, data);
        var receiver = runtime.ScriptReceivers.create(function (error, result) {
            ScriptReceivers.remove(receiver);
            request.cleanup();
            if (result && result.host) {
                sender.host = result.host;
            }
            if (callback) {
                callback(error, result);
            }
        });
        request.send(receiver);
    };
};
var jsonp_timeline_jsonp = {
    name: 'jsonp',
    getAgent
};
/* harmony default export */ var jsonp_timeline = (jsonp_timeline_jsonp);

// CONCATENATED MODULE: ./src/core/transports/url_schemes.ts

function getGenericURL(baseScheme, params, path) {
    var scheme = baseScheme + (params.useTLS ? 's' : '');
    var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
    return scheme + '://' + host + path;
}
function getGenericPath(key, queryString) {
    var path = '/app/' + key;
    var query = '?protocol=' +
        defaults.PROTOCOL +
        '&client=js' +
        '&version=' +
        defaults.VERSION +
        (queryString ? '&' + queryString : '');
    return path + query;
}
var ws = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '') + getGenericPath(key, 'flash=false');
        return getGenericURL('ws', params, path);
    }
};
var http = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '/pusher') + getGenericPath(key);
        return getGenericURL('http', params, path);
    }
};
var sockjs = {
    getInitial: function (key, params) {
        return getGenericURL('http', params, params.httpPath || '/pusher');
    },
    getPath: function (key, params) {
        return getGenericPath(key);
    }
};

// CONCATENATED MODULE: ./src/core/events/callback_registry.ts

class callback_registry_CallbackRegistry {
    constructor() {
        this._callbacks = {};
    }
    get(name) {
        return this._callbacks[prefix(name)];
    }
    add(name, callback, context) {
        var prefixedEventName = prefix(name);
        this._callbacks[prefixedEventName] =
            this._callbacks[prefixedEventName] || [];
        this._callbacks[prefixedEventName].push({
            fn: callback,
            context: context
        });
    }
    remove(name, callback, context) {
        if (!name && !callback && !context) {
            this._callbacks = {};
            return;
        }
        var names = name ? [prefix(name)] : keys(this._callbacks);
        if (callback || context) {
            this.removeCallback(names, callback, context);
        }
        else {
            this.removeAllCallbacks(names);
        }
    }
    removeCallback(names, callback, context) {
        apply(names, function (name) {
            this._callbacks[name] = filter(this._callbacks[name] || [], function (binding) {
                return ((callback && callback !== binding.fn) ||
                    (context && context !== binding.context));
            });
            if (this._callbacks[name].length === 0) {
                delete this._callbacks[name];
            }
        }, this);
    }
    removeAllCallbacks(names) {
        apply(names, function (name) {
            delete this._callbacks[name];
        }, this);
    }
}
function prefix(name) {
    return '_' + name;
}

// CONCATENATED MODULE: ./src/core/events/dispatcher.ts


class dispatcher_Dispatcher {
    constructor(failThrough) {
        this.callbacks = new callback_registry_CallbackRegistry();
        this.global_callbacks = [];
        this.failThrough = failThrough;
    }
    bind(eventName, callback, context) {
        this.callbacks.add(eventName, callback, context);
        return this;
    }
    bind_global(callback) {
        this.global_callbacks.push(callback);
        return this;
    }
    unbind(eventName, callback, context) {
        this.callbacks.remove(eventName, callback, context);
        return this;
    }
    unbind_global(callback) {
        if (!callback) {
            this.global_callbacks = [];
            return this;
        }
        this.global_callbacks = filter(this.global_callbacks || [], c => c !== callback);
        return this;
    }
    unbind_all() {
        this.unbind();
        this.unbind_global();
        return this;
    }
    emit(eventName, data, metadata) {
        for (var i = 0; i < this.global_callbacks.length; i++) {
            this.global_callbacks[i](eventName, data);
        }
        var callbacks = this.callbacks.get(eventName);
        var args = [];
        if (metadata) {
            args.push(data, metadata);
        }
        else if (data) {
            args.push(data);
        }
        if (callbacks && callbacks.length > 0) {
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].fn.apply(callbacks[i].context || window, args);
            }
        }
        else if (this.failThrough) {
            this.failThrough(eventName, data);
        }
        return this;
    }
}

// CONCATENATED MODULE: ./src/core/transports/transport_connection.ts





class transport_connection_TransportConnection extends dispatcher_Dispatcher {
    constructor(hooks, name, priority, key, options) {
        super();
        this.initialize = runtime.transportConnectionInitializer;
        this.hooks = hooks;
        this.name = name;
        this.priority = priority;
        this.key = key;
        this.options = options;
        this.state = 'new';
        this.timeline = options.timeline;
        this.activityTimeout = options.activityTimeout;
        this.id = this.timeline.generateUniqueID();
    }
    handlesActivityChecks() {
        return Boolean(this.hooks.handlesActivityChecks);
    }
    supportsPing() {
        return Boolean(this.hooks.supportsPing);
    }
    connect() {
        if (this.socket || this.state !== 'initialized') {
            return false;
        }
        var url = this.hooks.urls.getInitial(this.key, this.options);
        try {
            this.socket = this.hooks.getSocket(url, this.options);
        }
        catch (e) {
            util.defer(() => {
                this.onError(e);
                this.changeState('closed');
            });
            return false;
        }
        this.bindListeners();
        logger.debug('Connecting', { transport: this.name, url });
        this.changeState('connecting');
        return true;
    }
    close() {
        if (this.socket) {
            this.socket.close();
            return true;
        }
        else {
            return false;
        }
    }
    send(data) {
        if (this.state === 'open') {
            util.defer(() => {
                if (this.socket) {
                    this.socket.send(data);
                }
            });
            return true;
        }
        else {
            return false;
        }
    }
    ping() {
        if (this.state === 'open' && this.supportsPing()) {
            this.socket.ping();
        }
    }
    onOpen() {
        if (this.hooks.beforeOpen) {
            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
        }
        this.changeState('open');
        this.socket.onopen = undefined;
    }
    onError(error) {
        this.emit('error', { type: 'WebSocketError', error: error });
        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
    }
    onClose(closeEvent) {
        if (closeEvent) {
            this.changeState('closed', {
                code: closeEvent.code,
                reason: closeEvent.reason,
                wasClean: closeEvent.wasClean
            });
        }
        else {
            this.changeState('closed');
        }
        this.unbindListeners();
        this.socket = undefined;
    }
    onMessage(message) {
        this.emit('message', message);
    }
    onActivity() {
        this.emit('activity');
    }
    bindListeners() {
        this.socket.onopen = () => {
            this.onOpen();
        };
        this.socket.onerror = error => {
            this.onError(error);
        };
        this.socket.onclose = closeEvent => {
            this.onClose(closeEvent);
        };
        this.socket.onmessage = message => {
            this.onMessage(message);
        };
        if (this.supportsPing()) {
            this.socket.onactivity = () => {
                this.onActivity();
            };
        }
    }
    unbindListeners() {
        if (this.socket) {
            this.socket.onopen = undefined;
            this.socket.onerror = undefined;
            this.socket.onclose = undefined;
            this.socket.onmessage = undefined;
            if (this.supportsPing()) {
                this.socket.onactivity = undefined;
            }
        }
    }
    changeState(state, params) {
        this.state = state;
        this.timeline.info(this.buildTimelineMessage({
            state: state,
            params: params
        }));
        this.emit(state, params);
    }
    buildTimelineMessage(message) {
        return extend({ cid: this.id }, message);
    }
}

// CONCATENATED MODULE: ./src/core/transports/transport.ts

class transport_Transport {
    constructor(hooks) {
        this.hooks = hooks;
    }
    isSupported(environment) {
        return this.hooks.isSupported(environment);
    }
    createConnection(name, priority, key, options) {
        return new transport_connection_TransportConnection(this.hooks, name, priority, key, options);
    }
}

// CONCATENATED MODULE: ./src/runtimes/isomorphic/transports/transports.ts




var WSTransport = new transport_Transport({
    urls: ws,
    handlesActivityChecks: false,
    supportsPing: false,
    isInitialized: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    isSupported: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    getSocket: function (url) {
        return runtime.createWebSocket(url);
    }
});
var httpConfiguration = {
    urls: http,
    handlesActivityChecks: false,
    supportsPing: true,
    isInitialized: function () {
        return true;
    }
};
var streamingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createStreamingSocket(url);
    }
}, httpConfiguration);
var pollingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createPollingSocket(url);
    }
}, httpConfiguration);
var xhrConfiguration = {
    isSupported: function () {
        return runtime.isXHRSupported();
    }
};
var XHRStreamingTransport = new transport_Transport((extend({}, streamingConfiguration, xhrConfiguration)));
var XHRPollingTransport = new transport_Transport(extend({}, pollingConfiguration, xhrConfiguration));
var Transports = {
    ws: WSTransport,
    xhr_streaming: XHRStreamingTransport,
    xhr_polling: XHRPollingTransport
};
/* harmony default export */ var transports = (Transports);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transports.ts






var SockJSTransport = new transport_Transport({
    file: 'sockjs',
    urls: sockjs,
    handlesActivityChecks: true,
    supportsPing: false,
    isSupported: function () {
        return true;
    },
    isInitialized: function () {
        return window.SockJS !== undefined;
    },
    getSocket: function (url, options) {
        return new window.SockJS(url, null, {
            js_path: Dependencies.getPath('sockjs', {
                useTLS: options.useTLS
            }),
            ignore_null_origin: options.ignoreNullOrigin
        });
    },
    beforeOpen: function (socket, path) {
        socket.send(JSON.stringify({
            path: path
        }));
    }
});
var xdrConfiguration = {
    isSupported: function (environment) {
        var yes = runtime.isXDRSupported(environment.useTLS);
        return yes;
    }
};
var XDRStreamingTransport = new transport_Transport((extend({}, streamingConfiguration, xdrConfiguration)));
var XDRPollingTransport = new transport_Transport(extend({}, pollingConfiguration, xdrConfiguration));
transports.xdr_streaming = XDRStreamingTransport;
transports.xdr_polling = XDRPollingTransport;
transports.sockjs = SockJSTransport;
/* harmony default export */ var transports_transports = (transports);

// CONCATENATED MODULE: ./src/runtimes/web/net_info.ts

class net_info_NetInfo extends dispatcher_Dispatcher {
    constructor() {
        super();
        var self = this;
        if (window.addEventListener !== undefined) {
            window.addEventListener('online', function () {
                self.emit('online');
            }, false);
            window.addEventListener('offline', function () {
                self.emit('offline');
            }, false);
        }
    }
    isOnline() {
        if (window.navigator.onLine === undefined) {
            return true;
        }
        else {
            return window.navigator.onLine;
        }
    }
}
var net_info_Network = new net_info_NetInfo();

// CONCATENATED MODULE: ./src/core/transports/assistant_to_the_transport_manager.ts


class assistant_to_the_transport_manager_AssistantToTheTransportManager {
    constructor(manager, transport, options) {
        this.manager = manager;
        this.transport = transport;
        this.minPingDelay = options.minPingDelay;
        this.maxPingDelay = options.maxPingDelay;
        this.pingDelay = undefined;
    }
    createConnection(name, priority, key, options) {
        options = extend({}, options, {
            activityTimeout: this.pingDelay
        });
        var connection = this.transport.createConnection(name, priority, key, options);
        var openTimestamp = null;
        var onOpen = function () {
            connection.unbind('open', onOpen);
            connection.bind('closed', onClosed);
            openTimestamp = util.now();
        };
        var onClosed = closeEvent => {
            connection.unbind('closed', onClosed);
            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                this.manager.reportDeath();
            }
            else if (!closeEvent.wasClean && openTimestamp) {
                var lifespan = util.now() - openTimestamp;
                if (lifespan < 2 * this.maxPingDelay) {
                    this.manager.reportDeath();
                    this.pingDelay = Math.max(lifespan / 2, this.minPingDelay);
                }
            }
        };
        connection.bind('open', onOpen);
        return connection;
    }
    isSupported(environment) {
        return this.manager.isAlive() && this.transport.isSupported(environment);
    }
}

// CONCATENATED MODULE: ./src/core/connection/protocol/protocol.ts
const Protocol = {
    decodeMessage: function (messageEvent) {
        try {
            var messageData = JSON.parse(messageEvent.data);
            var pusherEventData = messageData.data;
            if (typeof pusherEventData === 'string') {
                try {
                    pusherEventData = JSON.parse(messageData.data);
                }
                catch (e) { }
            }
            var pusherEvent = {
                event: messageData.event,
                channel: messageData.channel,
                data: pusherEventData
            };
            if (messageData.user_id) {
                pusherEvent.user_id = messageData.user_id;
            }
            return pusherEvent;
        }
        catch (e) {
            throw { type: 'MessageParseError', error: e, data: messageEvent.data };
        }
    },
    encodeMessage: function (event) {
        return JSON.stringify(event);
    },
    processHandshake: function (messageEvent) {
        var message = Protocol.decodeMessage(messageEvent);
        if (message.event === 'pusher:connection_established') {
            if (!message.data.activity_timeout) {
                throw 'No activity timeout specified in handshake';
            }
            return {
                action: 'connected',
                id: message.data.socket_id,
                activityTimeout: message.data.activity_timeout * 1000
            };
        }
        else if (message.event === 'pusher:error') {
            return {
                action: this.getCloseAction(message.data),
                error: this.getCloseError(message.data)
            };
        }
        else {
            throw 'Invalid handshake';
        }
    },
    getCloseAction: function (closeEvent) {
        if (closeEvent.code < 4000) {
            if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                return 'backoff';
            }
            else {
                return null;
            }
        }
        else if (closeEvent.code === 4000) {
            return 'tls_only';
        }
        else if (closeEvent.code < 4100) {
            return 'refused';
        }
        else if (closeEvent.code < 4200) {
            return 'backoff';
        }
        else if (closeEvent.code < 4300) {
            return 'retry';
        }
        else {
            return 'refused';
        }
    },
    getCloseError: function (closeEvent) {
        if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
            return {
                type: 'PusherError',
                data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                }
            };
        }
        else {
            return null;
        }
    }
};
/* harmony default export */ var protocol_protocol = (Protocol);

// CONCATENATED MODULE: ./src/core/connection/connection.ts




class connection_Connection extends dispatcher_Dispatcher {
    constructor(id, transport) {
        super();
        this.id = id;
        this.transport = transport;
        this.activityTimeout = transport.activityTimeout;
        this.bindListeners();
    }
    handlesActivityChecks() {
        return this.transport.handlesActivityChecks();
    }
    send(data) {
        return this.transport.send(data);
    }
    send_event(name, data, channel) {
        var event = { event: name, data: data };
        if (channel) {
            event.channel = channel;
        }
        logger.debug('Event sent', event);
        return this.send(protocol_protocol.encodeMessage(event));
    }
    ping() {
        if (this.transport.supportsPing()) {
            this.transport.ping();
        }
        else {
            this.send_event('pusher:ping', {});
        }
    }
    close() {
        this.transport.close();
    }
    bindListeners() {
        var listeners = {
            message: (messageEvent) => {
                var pusherEvent;
                try {
                    pusherEvent = protocol_protocol.decodeMessage(messageEvent);
                }
                catch (e) {
                    this.emit('error', {
                        type: 'MessageParseError',
                        error: e,
                        data: messageEvent.data
                    });
                }
                if (pusherEvent !== undefined) {
                    logger.debug('Event recd', pusherEvent);
                    switch (pusherEvent.event) {
                        case 'pusher:error':
                            this.emit('error', {
                                type: 'PusherError',
                                data: pusherEvent.data
                            });
                            break;
                        case 'pusher:ping':
                            this.emit('ping');
                            break;
                        case 'pusher:pong':
                            this.emit('pong');
                            break;
                    }
                    this.emit('message', pusherEvent);
                }
            },
            activity: () => {
                this.emit('activity');
            },
            error: error => {
                this.emit('error', error);
            },
            closed: closeEvent => {
                unbindListeners();
                if (closeEvent && closeEvent.code) {
                    this.handleCloseEvent(closeEvent);
                }
                this.transport = null;
                this.emit('closed');
            }
        };
        var unbindListeners = () => {
            objectApply(listeners, (listener, event) => {
                this.transport.unbind(event, listener);
            });
        };
        objectApply(listeners, (listener, event) => {
            this.transport.bind(event, listener);
        });
    }
    handleCloseEvent(closeEvent) {
        var action = protocol_protocol.getCloseAction(closeEvent);
        var error = protocol_protocol.getCloseError(closeEvent);
        if (error) {
            this.emit('error', error);
        }
        if (action) {
            this.emit(action, { action: action, error: error });
        }
    }
}

// CONCATENATED MODULE: ./src/core/connection/handshake/index.ts



class handshake_Handshake {
    constructor(transport, callback) {
        this.transport = transport;
        this.callback = callback;
        this.bindListeners();
    }
    close() {
        this.unbindListeners();
        this.transport.close();
    }
    bindListeners() {
        this.onMessage = m => {
            this.unbindListeners();
            var result;
            try {
                result = protocol_protocol.processHandshake(m);
            }
            catch (e) {
                this.finish('error', { error: e });
                this.transport.close();
                return;
            }
            if (result.action === 'connected') {
                this.finish('connected', {
                    connection: new connection_Connection(result.id, this.transport),
                    activityTimeout: result.activityTimeout
                });
            }
            else {
                this.finish(result.action, { error: result.error });
                this.transport.close();
            }
        };
        this.onClosed = closeEvent => {
            this.unbindListeners();
            var action = protocol_protocol.getCloseAction(closeEvent) || 'backoff';
            var error = protocol_protocol.getCloseError(closeEvent);
            this.finish(action, { error: error });
        };
        this.transport.bind('message', this.onMessage);
        this.transport.bind('closed', this.onClosed);
    }
    unbindListeners() {
        this.transport.unbind('message', this.onMessage);
        this.transport.unbind('closed', this.onClosed);
    }
    finish(action, params) {
        this.callback(extend({ transport: this.transport, action: action }, params));
    }
}

// CONCATENATED MODULE: ./src/core/timeline/timeline_sender.ts

class timeline_sender_TimelineSender {
    constructor(timeline, options) {
        this.timeline = timeline;
        this.options = options || {};
    }
    send(useTLS, callback) {
        if (this.timeline.isEmpty()) {
            return;
        }
        this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
    }
}

// CONCATENATED MODULE: ./src/core/channels/channel.ts





class channel_Channel extends dispatcher_Dispatcher {
    constructor(name, pusher) {
        super(function (event, data) {
            logger.debug('No callbacks on ' + name + ' for ' + event);
        });
        this.name = name;
        this.pusher = pusher;
        this.subscribed = false;
        this.subscriptionPending = false;
        this.subscriptionCancelled = false;
    }
    authorize(socketId, callback) {
        return callback(null, { auth: '' });
    }
    trigger(event, data) {
        if (event.indexOf('client-') !== 0) {
            throw new BadEventName("Event '" + event + "' does not start with 'client-'");
        }
        if (!this.subscribed) {
            var suffix = url_store.buildLogSuffix('triggeringClientEvents');
            logger.warn(`Client event triggered before channel 'subscription_succeeded' event . ${suffix}`);
        }
        return this.pusher.send_event(event, data, this.name);
    }
    disconnect() {
        this.subscribed = false;
        this.subscriptionPending = false;
    }
    handleEvent(event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName === 'pusher_internal:subscription_succeeded') {
            this.handleSubscriptionSucceededEvent(event);
        }
        else if (eventName === 'pusher_internal:subscription_count') {
            this.handleSubscriptionCountEvent(event);
        }
        else if (eventName.indexOf('pusher_internal:') !== 0) {
            var metadata = {};
            this.emit(eventName, data, metadata);
        }
    }
    handleSubscriptionSucceededEvent(event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.emit('pusher:subscription_succeeded', event.data);
        }
    }
    handleSubscriptionCountEvent(event) {
        if (event.data.subscription_count) {
            this.subscriptionCount = event.data.subscription_count;
        }
        this.emit('pusher:subscription_count', event.data);
    }
    subscribe() {
        if (this.subscribed) {
            return;
        }
        this.subscriptionPending = true;
        this.subscriptionCancelled = false;
        this.authorize(this.pusher.connection.socket_id, (error, data) => {
            if (error) {
                this.subscriptionPending = false;
                logger.error(error.toString());
                this.emit('pusher:subscription_error', Object.assign({}, {
                    type: 'AuthError',
                    error: error.message
                }, error instanceof HTTPAuthError ? { status: error.status } : {}));
            }
            else {
                this.pusher.send_event('pusher:subscribe', {
                    auth: data.auth,
                    channel_data: data.channel_data,
                    channel: this.name
                });
            }
        });
    }
    unsubscribe() {
        this.subscribed = false;
        this.pusher.send_event('pusher:unsubscribe', {
            channel: this.name
        });
    }
    cancelSubscription() {
        this.subscriptionCancelled = true;
    }
    reinstateSubscription() {
        this.subscriptionCancelled = false;
    }
}

// CONCATENATED MODULE: ./src/core/channels/private_channel.ts

class private_channel_PrivateChannel extends channel_Channel {
    authorize(socketId, callback) {
        return this.pusher.config.channelAuthorizer({
            channelName: this.name,
            socketId: socketId
        }, callback);
    }
}

// CONCATENATED MODULE: ./src/core/channels/members.ts

class members_Members {
    constructor() {
        this.reset();
    }
    get(id) {
        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
            return {
                id: id,
                info: this.members[id]
            };
        }
        else {
            return null;
        }
    }
    each(callback) {
        objectApply(this.members, (member, id) => {
            callback(this.get(id));
        });
    }
    setMyID(id) {
        this.myID = id;
    }
    onSubscription(subscriptionData) {
        this.members = subscriptionData.presence.hash;
        this.count = subscriptionData.presence.count;
        this.me = this.get(this.myID);
    }
    addMember(memberData) {
        if (this.get(memberData.user_id) === null) {
            this.count++;
        }
        this.members[memberData.user_id] = memberData.user_info;
        return this.get(memberData.user_id);
    }
    removeMember(memberData) {
        var member = this.get(memberData.user_id);
        if (member) {
            delete this.members[memberData.user_id];
            this.count--;
        }
        return member;
    }
    reset() {
        this.members = {};
        this.count = 0;
        this.myID = null;
        this.me = null;
    }
}

// CONCATENATED MODULE: ./src/core/channels/presence_channel.ts
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class presence_channel_PresenceChannel extends private_channel_PrivateChannel {
    constructor(name, pusher) {
        super(name, pusher);
        this.members = new members_Members();
    }
    authorize(socketId, callback) {
        super.authorize(socketId, (error, authData) => __awaiter(this, void 0, void 0, function* () {
            if (!error) {
                authData = authData;
                if (authData.channel_data != null) {
                    var channelData = JSON.parse(authData.channel_data);
                    this.members.setMyID(channelData.user_id);
                }
                else {
                    yield this.pusher.user.signinDonePromise;
                    if (this.pusher.user.user_data != null) {
                        this.members.setMyID(this.pusher.user.user_data.id);
                    }
                    else {
                        let suffix = url_store.buildLogSuffix('authorizationEndpoint');
                        logger.error(`Invalid auth response for channel '${this.name}', ` +
                            `expected 'channel_data' field. ${suffix}, ` +
                            `or the user should be signed in.`);
                        callback('Invalid auth response');
                        return;
                    }
                }
            }
            callback(error, authData);
        }));
    }
    handleEvent(event) {
        var eventName = event.event;
        if (eventName.indexOf('pusher_internal:') === 0) {
            this.handleInternalEvent(event);
        }
        else {
            var data = event.data;
            var metadata = {};
            if (event.user_id) {
                metadata.user_id = event.user_id;
            }
            this.emit(eventName, data, metadata);
        }
    }
    handleInternalEvent(event) {
        var eventName = event.event;
        var data = event.data;
        switch (eventName) {
            case 'pusher_internal:subscription_succeeded':
                this.handleSubscriptionSucceededEvent(event);
                break;
            case 'pusher_internal:subscription_count':
                this.handleSubscriptionCountEvent(event);
                break;
            case 'pusher_internal:member_added':
                var addedMember = this.members.addMember(data);
                this.emit('pusher:member_added', addedMember);
                break;
            case 'pusher_internal:member_removed':
                var removedMember = this.members.removeMember(data);
                if (removedMember) {
                    this.emit('pusher:member_removed', removedMember);
                }
                break;
        }
    }
    handleSubscriptionSucceededEvent(event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.members.onSubscription(event.data);
            this.emit('pusher:subscription_succeeded', this.members);
        }
    }
    disconnect() {
        this.members.reset();
        super.disconnect();
    }
}

// EXTERNAL MODULE: ./node_modules/@stablelib/utf8/lib/utf8.js
var utf8 = __nested_webpack_require_20105__(1);

// EXTERNAL MODULE: ./node_modules/@stablelib/base64/lib/base64.js
var base64 = __nested_webpack_require_20105__(0);

// CONCATENATED MODULE: ./src/core/channels/encrypted_channel.ts





class encrypted_channel_EncryptedChannel extends private_channel_PrivateChannel {
    constructor(name, pusher, nacl) {
        super(name, pusher);
        this.key = null;
        this.nacl = nacl;
    }
    authorize(socketId, callback) {
        super.authorize(socketId, (error, authData) => {
            if (error) {
                callback(error, authData);
                return;
            }
            let sharedSecret = authData['shared_secret'];
            if (!sharedSecret) {
                callback(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                return;
            }
            this.key = Object(base64["decode"])(sharedSecret);
            delete authData['shared_secret'];
            callback(null, authData);
        });
    }
    trigger(event, data) {
        throw new UnsupportedFeature('Client events are not currently supported for encrypted channels');
    }
    handleEvent(event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName.indexOf('pusher_internal:') === 0 ||
            eventName.indexOf('pusher:') === 0) {
            super.handleEvent(event);
            return;
        }
        this.handleEncryptedEvent(eventName, data);
    }
    handleEncryptedEvent(event, data) {
        if (!this.key) {
            logger.debug('Received encrypted event before key has been retrieved from the authEndpoint');
            return;
        }
        if (!data.ciphertext || !data.nonce) {
            logger.error('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' +
                data);
            return;
        }
        let cipherText = Object(base64["decode"])(data.ciphertext);
        if (cipherText.length < this.nacl.secretbox.overheadLength) {
            logger.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${cipherText.length}`);
            return;
        }
        let nonce = Object(base64["decode"])(data.nonce);
        if (nonce.length < this.nacl.secretbox.nonceLength) {
            logger.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${nonce.length}`);
            return;
        }
        let bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
        if (bytes === null) {
            logger.debug('Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
            this.authorize(this.pusher.connection.socket_id, (error, authData) => {
                if (error) {
                    logger.error(`Failed to make a request to the authEndpoint: ${authData}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                }
                bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
                if (bytes === null) {
                    logger.error(`Failed to decrypt event with new key. Dropping encrypted event`);
                    return;
                }
                this.emit(event, this.getDataToEmit(bytes));
                return;
            });
            return;
        }
        this.emit(event, this.getDataToEmit(bytes));
    }
    getDataToEmit(bytes) {
        let raw = Object(utf8["decode"])(bytes);
        try {
            return JSON.parse(raw);
        }
        catch (_a) {
            return raw;
        }
    }
}

// CONCATENATED MODULE: ./src/core/connection/connection_manager.ts





class connection_manager_ConnectionManager extends dispatcher_Dispatcher {
    constructor(key, options) {
        super();
        this.state = 'initialized';
        this.connection = null;
        this.key = key;
        this.options = options;
        this.timeline = this.options.timeline;
        this.usingTLS = this.options.useTLS;
        this.errorCallbacks = this.buildErrorCallbacks();
        this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks);
        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
        var Network = runtime.getNetwork();
        Network.bind('online', () => {
            this.timeline.info({ netinfo: 'online' });
            if (this.state === 'connecting' || this.state === 'unavailable') {
                this.retryIn(0);
            }
        });
        Network.bind('offline', () => {
            this.timeline.info({ netinfo: 'offline' });
            if (this.connection) {
                this.sendActivityCheck();
            }
        });
        this.updateStrategy();
    }
    connect() {
        if (this.connection || this.runner) {
            return;
        }
        if (!this.strategy.isSupported()) {
            this.updateState('failed');
            return;
        }
        this.updateState('connecting');
        this.startConnecting();
        this.setUnavailableTimer();
    }
    send(data) {
        if (this.connection) {
            return this.connection.send(data);
        }
        else {
            return false;
        }
    }
    send_event(name, data, channel) {
        if (this.connection) {
            return this.connection.send_event(name, data, channel);
        }
        else {
            return false;
        }
    }
    disconnect() {
        this.disconnectInternally();
        this.updateState('disconnected');
    }
    isUsingTLS() {
        return this.usingTLS;
    }
    startConnecting() {
        var callback = (error, handshake) => {
            if (error) {
                this.runner = this.strategy.connect(0, callback);
            }
            else {
                if (handshake.action === 'error') {
                    this.emit('error', {
                        type: 'HandshakeError',
                        error: handshake.error
                    });
                    this.timeline.error({ handshakeError: handshake.error });
                }
                else {
                    this.abortConnecting();
                    this.handshakeCallbacks[handshake.action](handshake);
                }
            }
        };
        this.runner = this.strategy.connect(0, callback);
    }
    abortConnecting() {
        if (this.runner) {
            this.runner.abort();
            this.runner = null;
        }
    }
    disconnectInternally() {
        this.abortConnecting();
        this.clearRetryTimer();
        this.clearUnavailableTimer();
        if (this.connection) {
            var connection = this.abandonConnection();
            connection.close();
        }
    }
    updateStrategy() {
        this.strategy = this.options.getStrategy({
            key: this.key,
            timeline: this.timeline,
            useTLS: this.usingTLS
        });
    }
    retryIn(delay) {
        this.timeline.info({ action: 'retry', delay: delay });
        if (delay > 0) {
            this.emit('connecting_in', Math.round(delay / 1000));
        }
        this.retryTimer = new timers_OneOffTimer(delay || 0, () => {
            this.disconnectInternally();
            this.connect();
        });
    }
    clearRetryTimer() {
        if (this.retryTimer) {
            this.retryTimer.ensureAborted();
            this.retryTimer = null;
        }
    }
    setUnavailableTimer() {
        this.unavailableTimer = new timers_OneOffTimer(this.options.unavailableTimeout, () => {
            this.updateState('unavailable');
        });
    }
    clearUnavailableTimer() {
        if (this.unavailableTimer) {
            this.unavailableTimer.ensureAborted();
        }
    }
    sendActivityCheck() {
        this.stopActivityCheck();
        this.connection.ping();
        this.activityTimer = new timers_OneOffTimer(this.options.pongTimeout, () => {
            this.timeline.error({ pong_timed_out: this.options.pongTimeout });
            this.retryIn(0);
        });
    }
    resetActivityCheck() {
        this.stopActivityCheck();
        if (this.connection && !this.connection.handlesActivityChecks()) {
            this.activityTimer = new timers_OneOffTimer(this.activityTimeout, () => {
                this.sendActivityCheck();
            });
        }
    }
    stopActivityCheck() {
        if (this.activityTimer) {
            this.activityTimer.ensureAborted();
        }
    }
    buildConnectionCallbacks(errorCallbacks) {
        return extend({}, errorCallbacks, {
            message: message => {
                this.resetActivityCheck();
                this.emit('message', message);
            },
            ping: () => {
                this.send_event('pusher:pong', {});
            },
            activity: () => {
                this.resetActivityCheck();
            },
            error: error => {
                this.emit('error', error);
            },
            closed: () => {
                this.abandonConnection();
                if (this.shouldRetry()) {
                    this.retryIn(1000);
                }
            }
        });
    }
    buildHandshakeCallbacks(errorCallbacks) {
        return extend({}, errorCallbacks, {
            connected: (handshake) => {
                this.activityTimeout = Math.min(this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                this.clearUnavailableTimer();
                this.setConnection(handshake.connection);
                this.socket_id = this.connection.id;
                this.updateState('connected', { socket_id: this.socket_id });
            }
        });
    }
    buildErrorCallbacks() {
        let withErrorEmitted = callback => {
            return (result) => {
                if (result.error) {
                    this.emit('error', { type: 'WebSocketError', error: result.error });
                }
                callback(result);
            };
        };
        return {
            tls_only: withErrorEmitted(() => {
                this.usingTLS = true;
                this.updateStrategy();
                this.retryIn(0);
            }),
            refused: withErrorEmitted(() => {
                this.disconnect();
            }),
            backoff: withErrorEmitted(() => {
                this.retryIn(1000);
            }),
            retry: withErrorEmitted(() => {
                this.retryIn(0);
            })
        };
    }
    setConnection(connection) {
        this.connection = connection;
        for (var event in this.connectionCallbacks) {
            this.connection.bind(event, this.connectionCallbacks[event]);
        }
        this.resetActivityCheck();
    }
    abandonConnection() {
        if (!this.connection) {
            return;
        }
        this.stopActivityCheck();
        for (var event in this.connectionCallbacks) {
            this.connection.unbind(event, this.connectionCallbacks[event]);
        }
        var connection = this.connection;
        this.connection = null;
        return connection;
    }
    updateState(newState, data) {
        var previousState = this.state;
        this.state = newState;
        if (previousState !== newState) {
            var newStateDescription = newState;
            if (newStateDescription === 'connected') {
                newStateDescription += ' with new socket ID ' + data.socket_id;
            }
            logger.debug('State changed', previousState + ' -> ' + newStateDescription);
            this.timeline.info({ state: newState, params: data });
            this.emit('state_change', { previous: previousState, current: newState });
            this.emit(newState, data);
        }
    }
    shouldRetry() {
        return this.state === 'connecting' || this.state === 'connected';
    }
}

// CONCATENATED MODULE: ./src/core/channels/channels.ts




class channels_Channels {
    constructor() {
        this.channels = {};
    }
    add(name, pusher) {
        if (!this.channels[name]) {
            this.channels[name] = createChannel(name, pusher);
        }
        return this.channels[name];
    }
    all() {
        return values(this.channels);
    }
    find(name) {
        return this.channels[name];
    }
    remove(name) {
        var channel = this.channels[name];
        delete this.channels[name];
        return channel;
    }
    disconnect() {
        objectApply(this.channels, function (channel) {
            channel.disconnect();
        });
    }
}
function createChannel(name, pusher) {
    if (name.indexOf('private-encrypted-') === 0) {
        if (pusher.config.nacl) {
            return factory.createEncryptedChannel(name, pusher, pusher.config.nacl);
        }
        let errMsg = 'Tried to subscribe to a private-encrypted- channel but no nacl implementation available';
        let suffix = url_store.buildLogSuffix('encryptedChannelSupport');
        throw new UnsupportedFeature(`${errMsg}. ${suffix}`);
    }
    else if (name.indexOf('private-') === 0) {
        return factory.createPrivateChannel(name, pusher);
    }
    else if (name.indexOf('presence-') === 0) {
        return factory.createPresenceChannel(name, pusher);
    }
    else if (name.indexOf('#') === 0) {
        throw new BadChannelName('Cannot create a channel with name "' + name + '".');
    }
    else {
        return factory.createChannel(name, pusher);
    }
}

// CONCATENATED MODULE: ./src/core/utils/factory.ts









var Factory = {
    createChannels() {
        return new channels_Channels();
    },
    createConnectionManager(key, options) {
        return new connection_manager_ConnectionManager(key, options);
    },
    createChannel(name, pusher) {
        return new channel_Channel(name, pusher);
    },
    createPrivateChannel(name, pusher) {
        return new private_channel_PrivateChannel(name, pusher);
    },
    createPresenceChannel(name, pusher) {
        return new presence_channel_PresenceChannel(name, pusher);
    },
    createEncryptedChannel(name, pusher, nacl) {
        return new encrypted_channel_EncryptedChannel(name, pusher, nacl);
    },
    createTimelineSender(timeline, options) {
        return new timeline_sender_TimelineSender(timeline, options);
    },
    createHandshake(transport, callback) {
        return new handshake_Handshake(transport, callback);
    },
    createAssistantToTheTransportManager(manager, transport, options) {
        return new assistant_to_the_transport_manager_AssistantToTheTransportManager(manager, transport, options);
    }
};
/* harmony default export */ var factory = (Factory);

// CONCATENATED MODULE: ./src/core/transports/transport_manager.ts

class transport_manager_TransportManager {
    constructor(options) {
        this.options = options || {};
        this.livesLeft = this.options.lives || Infinity;
    }
    getAssistant(transport) {
        return factory.createAssistantToTheTransportManager(this, transport, {
            minPingDelay: this.options.minPingDelay,
            maxPingDelay: this.options.maxPingDelay
        });
    }
    isAlive() {
        return this.livesLeft > 0;
    }
    reportDeath() {
        this.livesLeft -= 1;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/sequential_strategy.ts



class sequential_strategy_SequentialStrategy {
    constructor(strategies, options) {
        this.strategies = strategies;
        this.loop = Boolean(options.loop);
        this.failFast = Boolean(options.failFast);
        this.timeout = options.timeout;
        this.timeoutLimit = options.timeoutLimit;
    }
    isSupported() {
        return any(this.strategies, util.method('isSupported'));
    }
    connect(minPriority, callback) {
        var strategies = this.strategies;
        var current = 0;
        var timeout = this.timeout;
        var runner = null;
        var tryNextStrategy = (error, handshake) => {
            if (handshake) {
                callback(null, handshake);
            }
            else {
                current = current + 1;
                if (this.loop) {
                    current = current % strategies.length;
                }
                if (current < strategies.length) {
                    if (timeout) {
                        timeout = timeout * 2;
                        if (this.timeoutLimit) {
                            timeout = Math.min(timeout, this.timeoutLimit);
                        }
                    }
                    runner = this.tryStrategy(strategies[current], minPriority, { timeout, failFast: this.failFast }, tryNextStrategy);
                }
                else {
                    callback(true);
                }
            }
        };
        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
    tryStrategy(strategy, minPriority, options, callback) {
        var timer = null;
        var runner = null;
        if (options.timeout > 0) {
            timer = new timers_OneOffTimer(options.timeout, function () {
                runner.abort();
                callback(true);
            });
        }
        runner = strategy.connect(minPriority, function (error, handshake) {
            if (error && timer && timer.isRunning() && !options.failFast) {
                return;
            }
            if (timer) {
                timer.ensureAborted();
            }
            callback(error, handshake);
        });
        return {
            abort: function () {
                if (timer) {
                    timer.ensureAborted();
                }
                runner.abort();
            },
            forceMinPriority: function (p) {
                runner.forceMinPriority(p);
            }
        };
    }
}

// CONCATENATED MODULE: ./src/core/strategies/best_connected_ever_strategy.ts


class best_connected_ever_strategy_BestConnectedEverStrategy {
    constructor(strategies) {
        this.strategies = strategies;
    }
    isSupported() {
        return any(this.strategies, util.method('isSupported'));
    }
    connect(minPriority, callback) {
        return connect(this.strategies, minPriority, function (i, runners) {
            return function (error, handshake) {
                runners[i].error = error;
                if (error) {
                    if (allRunnersFailed(runners)) {
                        callback(true);
                    }
                    return;
                }
                apply(runners, function (runner) {
                    runner.forceMinPriority(handshake.transport.priority);
                });
                callback(null, handshake);
            };
        });
    }
}
function connect(strategies, minPriority, callbackBuilder) {
    var runners = map(strategies, function (strategy, i, _, rs) {
        return strategy.connect(minPriority, callbackBuilder(i, rs));
    });
    return {
        abort: function () {
            apply(runners, abortRunner);
        },
        forceMinPriority: function (p) {
            apply(runners, function (runner) {
                runner.forceMinPriority(p);
            });
        }
    };
}
function allRunnersFailed(runners) {
    return collections_all(runners, function (runner) {
        return Boolean(runner.error);
    });
}
function abortRunner(runner) {
    if (!runner.error && !runner.aborted) {
        runner.abort();
        runner.aborted = true;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/websocket_prioritized_cached_strategy.ts




class websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy {
    constructor(strategy, transports, options) {
        this.strategy = strategy;
        this.transports = transports;
        this.ttl = options.ttl || 1800 * 1000;
        this.usingTLS = options.useTLS;
        this.timeline = options.timeline;
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var usingTLS = this.usingTLS;
        var info = fetchTransportCache(usingTLS);
        var cacheSkipCount = info && info.cacheSkipCount ? info.cacheSkipCount : 0;
        var strategies = [this.strategy];
        if (info && info.timestamp + this.ttl >= util.now()) {
            var transport = this.transports[info.transport];
            if (transport) {
                if (['ws', 'wss'].includes(info.transport) || cacheSkipCount > 3) {
                    this.timeline.info({
                        cached: true,
                        transport: info.transport,
                        latency: info.latency
                    });
                    strategies.push(new sequential_strategy_SequentialStrategy([transport], {
                        timeout: info.latency * 2 + 1000,
                        failFast: true
                    }));
                }
                else {
                    cacheSkipCount++;
                }
            }
        }
        var startTimestamp = util.now();
        var runner = strategies
            .pop()
            .connect(minPriority, function cb(error, handshake) {
            if (error) {
                flushTransportCache(usingTLS);
                if (strategies.length > 0) {
                    startTimestamp = util.now();
                    runner = strategies.pop().connect(minPriority, cb);
                }
                else {
                    callback(error);
                }
            }
            else {
                storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp, cacheSkipCount);
                callback(null, handshake);
            }
        });
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
}
function getTransportCacheKey(usingTLS) {
    return 'pusherTransport' + (usingTLS ? 'TLS' : 'NonTLS');
}
function fetchTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            var serializedCache = storage[getTransportCacheKey(usingTLS)];
            if (serializedCache) {
                return JSON.parse(serializedCache);
            }
        }
        catch (e) {
            flushTransportCache(usingTLS);
        }
    }
    return null;
}
function storeTransportCache(usingTLS, transport, latency, cacheSkipCount) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
                timestamp: util.now(),
                transport: transport,
                latency: latency,
                cacheSkipCount: cacheSkipCount
            });
        }
        catch (e) {
        }
    }
}
function flushTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            delete storage[getTransportCacheKey(usingTLS)];
        }
        catch (e) {
        }
    }
}

// CONCATENATED MODULE: ./src/core/strategies/delayed_strategy.ts

class delayed_strategy_DelayedStrategy {
    constructor(strategy, { delay: number }) {
        this.strategy = strategy;
        this.options = { delay: number };
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var strategy = this.strategy;
        var runner;
        var timer = new timers_OneOffTimer(this.options.delay, function () {
            runner = strategy.connect(minPriority, callback);
        });
        return {
            abort: function () {
                timer.ensureAborted();
                if (runner) {
                    runner.abort();
                }
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
}

// CONCATENATED MODULE: ./src/core/strategies/if_strategy.ts
class IfStrategy {
    constructor(test, trueBranch, falseBranch) {
        this.test = test;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
    }
    isSupported() {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.isSupported();
    }
    connect(minPriority, callback) {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.connect(minPriority, callback);
    }
}

// CONCATENATED MODULE: ./src/core/strategies/first_connected_strategy.ts
class FirstConnectedStrategy {
    constructor(strategy) {
        this.strategy = strategy;
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var runner = this.strategy.connect(minPriority, function (error, handshake) {
            if (handshake) {
                runner.abort();
            }
            callback(error, handshake);
        });
        return runner;
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/default_strategy.ts







function testSupportsStrategy(strategy) {
    return function () {
        return strategy.isSupported();
    };
}
var getDefaultStrategy = function (config, baseOptions, defineTransport) {
    var definedTransports = {};
    function defineTransportStrategy(name, type, priority, options, manager) {
        var transport = defineTransport(config, name, type, priority, options, manager);
        definedTransports[name] = transport;
        return transport;
    }
    var ws_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.wsHost + ':' + config.wsPort,
        hostTLS: config.wsHost + ':' + config.wssPort,
        httpPath: config.wsPath
    });
    var wss_options = Object.assign({}, ws_options, {
        useTLS: true
    });
    var sockjs_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.httpHost + ':' + config.httpPort,
        hostTLS: config.httpHost + ':' + config.httpsPort,
        httpPath: config.httpPath
    });
    var timeouts = {
        loop: true,
        timeout: 15000,
        timeoutLimit: 60000
    };
    var ws_manager = new transport_manager_TransportManager({
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var streaming_manager = new transport_manager_TransportManager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var ws_transport = defineTransportStrategy('ws', 'ws', 3, ws_options, ws_manager);
    var wss_transport = defineTransportStrategy('wss', 'ws', 3, wss_options, ws_manager);
    var sockjs_transport = defineTransportStrategy('sockjs', 'sockjs', 1, sockjs_options);
    var xhr_streaming_transport = defineTransportStrategy('xhr_streaming', 'xhr_streaming', 1, sockjs_options, streaming_manager);
    var xdr_streaming_transport = defineTransportStrategy('xdr_streaming', 'xdr_streaming', 1, sockjs_options, streaming_manager);
    var xhr_polling_transport = defineTransportStrategy('xhr_polling', 'xhr_polling', 1, sockjs_options);
    var xdr_polling_transport = defineTransportStrategy('xdr_polling', 'xdr_polling', 1, sockjs_options);
    var ws_loop = new sequential_strategy_SequentialStrategy([ws_transport], timeouts);
    var wss_loop = new sequential_strategy_SequentialStrategy([wss_transport], timeouts);
    var sockjs_loop = new sequential_strategy_SequentialStrategy([sockjs_transport], timeouts);
    var streaming_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)
    ], timeouts);
    var polling_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)
    ], timeouts);
    var http_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy_BestConnectedEverStrategy([
            streaming_loop,
            new delayed_strategy_DelayedStrategy(polling_loop, { delay: 4000 })
        ]), polling_loop)
    ], timeouts);
    var http_fallback_loop = new IfStrategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
    var wsStrategy;
    if (baseOptions.useTLS) {
        wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
            ws_loop,
            new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 2000 })
        ]);
    }
    else {
        wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
            ws_loop,
            new delayed_strategy_DelayedStrategy(wss_loop, { delay: 2000 }),
            new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 5000 })
        ]);
    }
    return new websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy(new FirstConnectedStrategy(new IfStrategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
        ttl: 1800000,
        timeline: baseOptions.timeline,
        useTLS: baseOptions.useTLS
    });
};
/* harmony default export */ var default_strategy = (getDefaultStrategy);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transport_connection_initializer.ts

/* harmony default export */ var transport_connection_initializer = (function () {
    var self = this;
    self.timeline.info(self.buildTimelineMessage({
        transport: self.name + (self.options.useTLS ? 's' : '')
    }));
    if (self.hooks.isInitialized()) {
        self.changeState('initialized');
    }
    else if (self.hooks.file) {
        self.changeState('initializing');
        Dependencies.load(self.hooks.file, { useTLS: self.options.useTLS }, function (error, callback) {
            if (self.hooks.isInitialized()) {
                self.changeState('initialized');
                callback(true);
            }
            else {
                if (error) {
                    self.onError(error);
                }
                self.onClose();
                callback(false);
            }
        });
    }
    else {
        self.onClose();
    }
});

// CONCATENATED MODULE: ./src/runtimes/web/http/http_xdomain_request.ts

var http_xdomain_request_hooks = {
    getRequest: function (socket) {
        var xdr = new window.XDomainRequest();
        xdr.ontimeout = function () {
            socket.emit('error', new RequestTimedOut());
            socket.close();
        };
        xdr.onerror = function (e) {
            socket.emit('error', e);
            socket.close();
        };
        xdr.onprogress = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
        };
        xdr.onload = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
            socket.emit('finished', 200);
            socket.close();
        };
        return xdr;
    },
    abortRequest: function (xdr) {
        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
        xdr.abort();
    }
};
/* harmony default export */ var http_xdomain_request = (http_xdomain_request_hooks);

// CONCATENATED MODULE: ./src/core/http/http_request.ts


const MAX_BUFFER_LENGTH = 256 * 1024;
class http_request_HTTPRequest extends dispatcher_Dispatcher {
    constructor(hooks, method, url) {
        super();
        this.hooks = hooks;
        this.method = method;
        this.url = url;
    }
    start(payload) {
        this.position = 0;
        this.xhr = this.hooks.getRequest(this);
        this.unloader = () => {
            this.close();
        };
        runtime.addUnloadListener(this.unloader);
        this.xhr.open(this.method, this.url, true);
        if (this.xhr.setRequestHeader) {
            this.xhr.setRequestHeader('Content-Type', 'application/json');
        }
        this.xhr.send(payload);
    }
    close() {
        if (this.unloader) {
            runtime.removeUnloadListener(this.unloader);
            this.unloader = null;
        }
        if (this.xhr) {
            this.hooks.abortRequest(this.xhr);
            this.xhr = null;
        }
    }
    onChunk(status, data) {
        while (true) {
            var chunk = this.advanceBuffer(data);
            if (chunk) {
                this.emit('chunk', { status: status, data: chunk });
            }
            else {
                break;
            }
        }
        if (this.isBufferTooLong(data)) {
            this.emit('buffer_too_long');
        }
    }
    advanceBuffer(buffer) {
        var unreadData = buffer.slice(this.position);
        var endOfLinePosition = unreadData.indexOf('\n');
        if (endOfLinePosition !== -1) {
            this.position += endOfLinePosition + 1;
            return unreadData.slice(0, endOfLinePosition);
        }
        else {
            return null;
        }
    }
    isBufferTooLong(buffer) {
        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
    }
}

// CONCATENATED MODULE: ./src/core/http/state.ts
var State;
(function (State) {
    State[State["CONNECTING"] = 0] = "CONNECTING";
    State[State["OPEN"] = 1] = "OPEN";
    State[State["CLOSED"] = 3] = "CLOSED";
})(State || (State = {}));
/* harmony default export */ var state = (State);

// CONCATENATED MODULE: ./src/core/http/http_socket.ts



var autoIncrement = 1;
class http_socket_HTTPSocket {
    constructor(hooks, url) {
        this.hooks = hooks;
        this.session = randomNumber(1000) + '/' + randomString(8);
        this.location = getLocation(url);
        this.readyState = state.CONNECTING;
        this.openStream();
    }
    send(payload) {
        return this.sendRaw(JSON.stringify([payload]));
    }
    ping() {
        this.hooks.sendHeartbeat(this);
    }
    close(code, reason) {
        this.onClose(code, reason, true);
    }
    sendRaw(payload) {
        if (this.readyState === state.OPEN) {
            try {
                runtime.createSocketRequest('POST', getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    reconnect() {
        this.closeStream();
        this.openStream();
    }
    onClose(code, reason, wasClean) {
        this.closeStream();
        this.readyState = state.CLOSED;
        if (this.onclose) {
            this.onclose({
                code: code,
                reason: reason,
                wasClean: wasClean
            });
        }
    }
    onChunk(chunk) {
        if (chunk.status !== 200) {
            return;
        }
        if (this.readyState === state.OPEN) {
            this.onActivity();
        }
        var payload;
        var type = chunk.data.slice(0, 1);
        switch (type) {
            case 'o':
                payload = JSON.parse(chunk.data.slice(1) || '{}');
                this.onOpen(payload);
                break;
            case 'a':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                for (var i = 0; i < payload.length; i++) {
                    this.onEvent(payload[i]);
                }
                break;
            case 'm':
                payload = JSON.parse(chunk.data.slice(1) || 'null');
                this.onEvent(payload);
                break;
            case 'h':
                this.hooks.onHeartbeat(this);
                break;
            case 'c':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                this.onClose(payload[0], payload[1], true);
                break;
        }
    }
    onOpen(options) {
        if (this.readyState === state.CONNECTING) {
            if (options && options.hostname) {
                this.location.base = replaceHost(this.location.base, options.hostname);
            }
            this.readyState = state.OPEN;
            if (this.onopen) {
                this.onopen();
            }
        }
        else {
            this.onClose(1006, 'Server lost session', true);
        }
    }
    onEvent(event) {
        if (this.readyState === state.OPEN && this.onmessage) {
            this.onmessage({ data: event });
        }
    }
    onActivity() {
        if (this.onactivity) {
            this.onactivity();
        }
    }
    onError(error) {
        if (this.onerror) {
            this.onerror(error);
        }
    }
    openStream() {
        this.stream = runtime.createSocketRequest('POST', getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
        this.stream.bind('chunk', chunk => {
            this.onChunk(chunk);
        });
        this.stream.bind('finished', status => {
            this.hooks.onFinished(this, status);
        });
        this.stream.bind('buffer_too_long', () => {
            this.reconnect();
        });
        try {
            this.stream.start();
        }
        catch (error) {
            util.defer(() => {
                this.onError(error);
                this.onClose(1006, 'Could not start streaming', false);
            });
        }
    }
    closeStream() {
        if (this.stream) {
            this.stream.unbind_all();
            this.stream.close();
            this.stream = null;
        }
    }
}
function getLocation(url) {
    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
    return {
        base: parts[1],
        queryString: parts[2]
    };
}
function getSendURL(url, session) {
    return url.base + '/' + session + '/xhr_send';
}
function getUniqueURL(url) {
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    return url + separator + 't=' + +new Date() + '&n=' + autoIncrement++;
}
function replaceHost(url, hostname) {
    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
    return urlParts[1] + hostname + urlParts[3];
}
function randomNumber(max) {
    return runtime.randomInt(max);
}
function randomString(length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(randomNumber(32).toString(32));
    }
    return result.join('');
}
/* harmony default export */ var http_socket = (http_socket_HTTPSocket);

// CONCATENATED MODULE: ./src/core/http/http_streaming_socket.ts
var http_streaming_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr_streaming' + url.queryString;
    },
    onHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
    }
};
/* harmony default export */ var http_streaming_socket = (http_streaming_socket_hooks);

// CONCATENATED MODULE: ./src/core/http/http_polling_socket.ts
var http_polling_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr' + url.queryString;
    },
    onHeartbeat: function () {
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        if (status === 200) {
            socket.reconnect();
        }
        else {
            socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
        }
    }
};
/* harmony default export */ var http_polling_socket = (http_polling_socket_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http_xhr_request.ts

var http_xhr_request_hooks = {
    getRequest: function (socket) {
        var Constructor = runtime.getXHRAPI();
        var xhr = new Constructor();
        xhr.onreadystatechange = xhr.onprogress = function () {
            switch (xhr.readyState) {
                case 3:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    break;
                case 4:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    socket.emit('finished', xhr.status);
                    socket.close();
                    break;
            }
        };
        return xhr;
    },
    abortRequest: function (xhr) {
        xhr.onreadystatechange = null;
        xhr.abort();
    }
};
/* harmony default export */ var http_xhr_request = (http_xhr_request_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http.ts





var HTTP = {
    createStreamingSocket(url) {
        return this.createSocket(http_streaming_socket, url);
    },
    createPollingSocket(url) {
        return this.createSocket(http_polling_socket, url);
    },
    createSocket(hooks, url) {
        return new http_socket(hooks, url);
    },
    createXHR(method, url) {
        return this.createRequest(http_xhr_request, method, url);
    },
    createRequest(hooks, method, url) {
        return new http_request_HTTPRequest(hooks, method, url);
    }
};
/* harmony default export */ var http_http = (HTTP);

// CONCATENATED MODULE: ./src/runtimes/web/http/http.ts


http_http.createXDR = function (method, url) {
    return this.createRequest(http_xdomain_request, method, url);
};
/* harmony default export */ var web_http_http = (http_http);

// CONCATENATED MODULE: ./src/runtimes/web/runtime.ts












var Runtime = {
    nextAuthCallbackID: 1,
    auth_callbacks: {},
    ScriptReceivers: ScriptReceivers,
    DependenciesReceivers: DependenciesReceivers,
    getDefaultStrategy: default_strategy,
    Transports: transports_transports,
    transportConnectionInitializer: transport_connection_initializer,
    HTTPFactory: web_http_http,
    TimelineTransport: jsonp_timeline,
    getXHRAPI() {
        return window.XMLHttpRequest;
    },
    getWebSocketAPI() {
        return window.WebSocket || window.MozWebSocket;
    },
    setup(PusherClass) {
        window.Pusher = PusherClass;
        var initializeOnDocumentBody = () => {
            this.onDocumentBody(PusherClass.ready);
        };
        if (!window.JSON) {
            Dependencies.load('json2', {}, initializeOnDocumentBody);
        }
        else {
            initializeOnDocumentBody();
        }
    },
    getDocument() {
        return document;
    },
    getProtocol() {
        return this.getDocument().location.protocol;
    },
    getAuthorizers() {
        return { ajax: xhr_auth, jsonp: jsonp_auth };
    },
    onDocumentBody(callback) {
        if (document.body) {
            callback();
        }
        else {
            setTimeout(() => {
                this.onDocumentBody(callback);
            }, 0);
        }
    },
    createJSONPRequest(url, data) {
        return new jsonp_request_JSONPRequest(url, data);
    },
    createScriptRequest(src) {
        return new ScriptRequest(src);
    },
    getLocalStorage() {
        try {
            return window.localStorage;
        }
        catch (e) {
            return undefined;
        }
    },
    createXHR() {
        if (this.getXHRAPI()) {
            return this.createXMLHttpRequest();
        }
        else {
            return this.createMicrosoftXHR();
        }
    },
    createXMLHttpRequest() {
        var Constructor = this.getXHRAPI();
        return new Constructor();
    },
    createMicrosoftXHR() {
        return new ActiveXObject('Microsoft.XMLHTTP');
    },
    getNetwork() {
        return net_info_Network;
    },
    createWebSocket(url) {
        var Constructor = this.getWebSocketAPI();
        return new Constructor(url);
    },
    createSocketRequest(method, url) {
        if (this.isXHRSupported()) {
            return this.HTTPFactory.createXHR(method, url);
        }
        else if (this.isXDRSupported(url.indexOf('https:') === 0)) {
            return this.HTTPFactory.createXDR(method, url);
        }
        else {
            throw 'Cross-origin HTTP requests are not supported';
        }
    },
    isXHRSupported() {
        var Constructor = this.getXHRAPI();
        return (Boolean(Constructor) && new Constructor().withCredentials !== undefined);
    },
    isXDRSupported(useTLS) {
        var protocol = useTLS ? 'https:' : 'http:';
        var documentProtocol = this.getProtocol();
        return (Boolean(window['XDomainRequest']) && documentProtocol === protocol);
    },
    addUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
            window.addEventListener('unload', listener, false);
        }
        else if (window.attachEvent !== undefined) {
            window.attachEvent('onunload', listener);
        }
    },
    removeUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
            window.removeEventListener('unload', listener, false);
        }
        else if (window.detachEvent !== undefined) {
            window.detachEvent('onunload', listener);
        }
    },
    randomInt(max) {
        const random = function () {
            const crypto = window.crypto || window['msCrypto'];
            const random = crypto.getRandomValues(new Uint32Array(1))[0];
            return random / Math.pow(2, 32);
        };
        return Math.floor(random() * max);
    }
};
/* harmony default export */ var runtime = (Runtime);

// CONCATENATED MODULE: ./src/core/timeline/level.ts
var TimelineLevel;
(function (TimelineLevel) {
    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
})(TimelineLevel || (TimelineLevel = {}));
/* harmony default export */ var timeline_level = (TimelineLevel);

// CONCATENATED MODULE: ./src/core/timeline/timeline.ts



class timeline_Timeline {
    constructor(key, session, options) {
        this.key = key;
        this.session = session;
        this.events = [];
        this.options = options || {};
        this.sent = 0;
        this.uniqueID = 0;
    }
    log(level, event) {
        if (level <= this.options.level) {
            this.events.push(extend({}, event, { timestamp: util.now() }));
            if (this.options.limit && this.events.length > this.options.limit) {
                this.events.shift();
            }
        }
    }
    error(event) {
        this.log(timeline_level.ERROR, event);
    }
    info(event) {
        this.log(timeline_level.INFO, event);
    }
    debug(event) {
        this.log(timeline_level.DEBUG, event);
    }
    isEmpty() {
        return this.events.length === 0;
    }
    send(sendfn, callback) {
        var data = extend({
            session: this.session,
            bundle: this.sent + 1,
            key: this.key,
            lib: 'js',
            version: this.options.version,
            cluster: this.options.cluster,
            features: this.options.features,
            timeline: this.events
        }, this.options.params);
        this.events = [];
        sendfn(data, (error, result) => {
            if (!error) {
                this.sent++;
            }
            if (callback) {
                callback(error, result);
            }
        });
        return true;
    }
    generateUniqueID() {
        this.uniqueID++;
        return this.uniqueID;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/transport_strategy.ts




class transport_strategy_TransportStrategy {
    constructor(name, priority, transport, options) {
        this.name = name;
        this.priority = priority;
        this.transport = transport;
        this.options = options || {};
    }
    isSupported() {
        return this.transport.isSupported({
            useTLS: this.options.useTLS
        });
    }
    connect(minPriority, callback) {
        if (!this.isSupported()) {
            return failAttempt(new UnsupportedStrategy(), callback);
        }
        else if (this.priority < minPriority) {
            return failAttempt(new TransportPriorityTooLow(), callback);
        }
        var connected = false;
        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
        var handshake = null;
        var onInitialized = function () {
            transport.unbind('initialized', onInitialized);
            transport.connect();
        };
        var onOpen = function () {
            handshake = factory.createHandshake(transport, function (result) {
                connected = true;
                unbindListeners();
                callback(null, result);
            });
        };
        var onError = function (error) {
            unbindListeners();
            callback(error);
        };
        var onClosed = function () {
            unbindListeners();
            var serializedTransport;
            serializedTransport = safeJSONStringify(transport);
            callback(new TransportClosed(serializedTransport));
        };
        var unbindListeners = function () {
            transport.unbind('initialized', onInitialized);
            transport.unbind('open', onOpen);
            transport.unbind('error', onError);
            transport.unbind('closed', onClosed);
        };
        transport.bind('initialized', onInitialized);
        transport.bind('open', onOpen);
        transport.bind('error', onError);
        transport.bind('closed', onClosed);
        transport.initialize();
        return {
            abort: () => {
                if (connected) {
                    return;
                }
                unbindListeners();
                if (handshake) {
                    handshake.close();
                }
                else {
                    transport.close();
                }
            },
            forceMinPriority: p => {
                if (connected) {
                    return;
                }
                if (this.priority < p) {
                    if (handshake) {
                        handshake.close();
                    }
                    else {
                        transport.close();
                    }
                }
            }
        };
    }
}
function failAttempt(error, callback) {
    util.defer(function () {
        callback(error);
    });
    return {
        abort: function () { },
        forceMinPriority: function () { }
    };
}

// CONCATENATED MODULE: ./src/core/strategies/strategy_builder.ts





const { Transports: strategy_builder_Transports } = runtime;
var strategy_builder_defineTransport = function (config, name, type, priority, options, manager) {
    var transportClass = strategy_builder_Transports[type];
    if (!transportClass) {
        throw new UnsupportedTransport(type);
    }
    var enabled = (!config.enabledTransports ||
        arrayIndexOf(config.enabledTransports, name) !== -1) &&
        (!config.disabledTransports ||
            arrayIndexOf(config.disabledTransports, name) === -1);
    var transport;
    if (enabled) {
        options = Object.assign({ ignoreNullOrigin: config.ignoreNullOrigin }, options);
        transport = new transport_strategy_TransportStrategy(name, priority, manager ? manager.getAssistant(transportClass) : transportClass, options);
    }
    else {
        transport = strategy_builder_UnsupportedStrategy;
    }
    return transport;
};
var strategy_builder_UnsupportedStrategy = {
    isSupported: function () {
        return false;
    },
    connect: function (_, callback) {
        var deferred = util.defer(function () {
            callback(new UnsupportedStrategy());
        });
        return {
            abort: function () {
                deferred.ensureAborted();
            },
            forceMinPriority: function () { }
        };
    }
};

// CONCATENATED MODULE: ./src/core/options.ts

function validateOptions(options) {
    if (options == null) {
        throw 'You must pass an options object';
    }
    if (options.cluster == null) {
        throw 'Options object must provide a cluster';
    }
    if ('disableStats' in options) {
        logger.warn('The disableStats option is deprecated in favor of enableStats');
    }
}

// CONCATENATED MODULE: ./src/core/auth/user_authenticator.ts


const composeChannelQuery = (params, authOptions) => {
    var query = 'socket_id=' + encodeURIComponent(params.socketId);
    for (var key in authOptions.params) {
        query +=
            '&' +
                encodeURIComponent(key) +
                '=' +
                encodeURIComponent(authOptions.params[key]);
    }
    if (authOptions.paramsProvider != null) {
        let dynamicParams = authOptions.paramsProvider();
        for (var key in dynamicParams) {
            query +=
                '&' +
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(dynamicParams[key]);
        }
    }
    return query;
};
const UserAuthenticator = (authOptions) => {
    if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw `'${authOptions.transport}' is not a recognized auth transport`;
    }
    return (params, callback) => {
        const query = composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.UserAuthentication, callback);
    };
};
/* harmony default export */ var user_authenticator = (UserAuthenticator);

// CONCATENATED MODULE: ./src/core/auth/channel_authorizer.ts


const channel_authorizer_composeChannelQuery = (params, authOptions) => {
    var query = 'socket_id=' + encodeURIComponent(params.socketId);
    query += '&channel_name=' + encodeURIComponent(params.channelName);
    for (var key in authOptions.params) {
        query +=
            '&' +
                encodeURIComponent(key) +
                '=' +
                encodeURIComponent(authOptions.params[key]);
    }
    if (authOptions.paramsProvider != null) {
        let dynamicParams = authOptions.paramsProvider();
        for (var key in dynamicParams) {
            query +=
                '&' +
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(dynamicParams[key]);
        }
    }
    return query;
};
const ChannelAuthorizer = (authOptions) => {
    if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw `'${authOptions.transport}' is not a recognized auth transport`;
    }
    return (params, callback) => {
        const query = channel_authorizer_composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.ChannelAuthorization, callback);
    };
};
/* harmony default export */ var channel_authorizer = (ChannelAuthorizer);

// CONCATENATED MODULE: ./src/core/auth/deprecated_channel_authorizer.ts
const ChannelAuthorizerProxy = (pusher, authOptions, channelAuthorizerGenerator) => {
    const deprecatedAuthorizerOptions = {
        authTransport: authOptions.transport,
        authEndpoint: authOptions.endpoint,
        auth: {
            params: authOptions.params,
            headers: authOptions.headers
        }
    };
    return (params, callback) => {
        const channel = pusher.channel(params.channelName);
        const channelAuthorizer = channelAuthorizerGenerator(channel, deprecatedAuthorizerOptions);
        channelAuthorizer.authorize(params.socketId, callback);
    };
};

// CONCATENATED MODULE: ./src/core/config.ts





function getConfig(opts, pusher) {
    let config = {
        activityTimeout: opts.activityTimeout || defaults.activityTimeout,
        cluster: opts.cluster,
        httpPath: opts.httpPath || defaults.httpPath,
        httpPort: opts.httpPort || defaults.httpPort,
        httpsPort: opts.httpsPort || defaults.httpsPort,
        pongTimeout: opts.pongTimeout || defaults.pongTimeout,
        statsHost: opts.statsHost || defaults.stats_host,
        unavailableTimeout: opts.unavailableTimeout || defaults.unavailableTimeout,
        wsPath: opts.wsPath || defaults.wsPath,
        wsPort: opts.wsPort || defaults.wsPort,
        wssPort: opts.wssPort || defaults.wssPort,
        enableStats: getEnableStatsConfig(opts),
        httpHost: getHttpHost(opts),
        useTLS: shouldUseTLS(opts),
        wsHost: getWebsocketHost(opts),
        userAuthenticator: buildUserAuthenticator(opts),
        channelAuthorizer: buildChannelAuthorizer(opts, pusher)
    };
    if ('disabledTransports' in opts)
        config.disabledTransports = opts.disabledTransports;
    if ('enabledTransports' in opts)
        config.enabledTransports = opts.enabledTransports;
    if ('ignoreNullOrigin' in opts)
        config.ignoreNullOrigin = opts.ignoreNullOrigin;
    if ('timelineParams' in opts)
        config.timelineParams = opts.timelineParams;
    if ('nacl' in opts) {
        config.nacl = opts.nacl;
    }
    return config;
}
function getHttpHost(opts) {
    if (opts.httpHost) {
        return opts.httpHost;
    }
    if (opts.cluster) {
        return `sockjs-${opts.cluster}.pusher.com`;
    }
    return defaults.httpHost;
}
function getWebsocketHost(opts) {
    if (opts.wsHost) {
        return opts.wsHost;
    }
    return getWebsocketHostFromCluster(opts.cluster);
}
function getWebsocketHostFromCluster(cluster) {
    return `ws-${cluster}.pusher.com`;
}
function shouldUseTLS(opts) {
    if (runtime.getProtocol() === 'https:') {
        return true;
    }
    else if (opts.forceTLS === false) {
        return false;
    }
    return true;
}
function getEnableStatsConfig(opts) {
    if ('enableStats' in opts) {
        return opts.enableStats;
    }
    if ('disableStats' in opts) {
        return !opts.disableStats;
    }
    return false;
}
function buildUserAuthenticator(opts) {
    const userAuthentication = Object.assign(Object.assign({}, defaults.userAuthentication), opts.userAuthentication);
    if ('customHandler' in userAuthentication &&
        userAuthentication['customHandler'] != null) {
        return userAuthentication['customHandler'];
    }
    return user_authenticator(userAuthentication);
}
function buildChannelAuth(opts, pusher) {
    let channelAuthorization;
    if ('channelAuthorization' in opts) {
        channelAuthorization = Object.assign(Object.assign({}, defaults.channelAuthorization), opts.channelAuthorization);
    }
    else {
        channelAuthorization = {
            transport: opts.authTransport || defaults.authTransport,
            endpoint: opts.authEndpoint || defaults.authEndpoint
        };
        if ('auth' in opts) {
            if ('params' in opts.auth)
                channelAuthorization.params = opts.auth.params;
            if ('headers' in opts.auth)
                channelAuthorization.headers = opts.auth.headers;
        }
        if ('authorizer' in opts)
            channelAuthorization.customHandler = ChannelAuthorizerProxy(pusher, channelAuthorization, opts.authorizer);
    }
    return channelAuthorization;
}
function buildChannelAuthorizer(opts, pusher) {
    const channelAuthorization = buildChannelAuth(opts, pusher);
    if ('customHandler' in channelAuthorization &&
        channelAuthorization['customHandler'] != null) {
        return channelAuthorization['customHandler'];
    }
    return channel_authorizer(channelAuthorization);
}

// CONCATENATED MODULE: ./src/core/watchlist.ts


class watchlist_WatchlistFacade extends dispatcher_Dispatcher {
    constructor(pusher) {
        super(function (eventName, data) {
            logger.debug(`No callbacks on watchlist events for ${eventName}`);
        });
        this.pusher = pusher;
        this.bindWatchlistInternalEvent();
    }
    handleEvent(pusherEvent) {
        pusherEvent.data.events.forEach(watchlistEvent => {
            this.emit(watchlistEvent.name, watchlistEvent);
        });
    }
    bindWatchlistInternalEvent() {
        this.pusher.connection.bind('message', pusherEvent => {
            var eventName = pusherEvent.event;
            if (eventName === 'pusher_internal:watchlist_events') {
                this.handleEvent(pusherEvent);
            }
        });
    }
}

// CONCATENATED MODULE: ./src/core/utils/flat_promise.ts
function flatPromise() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { promise, resolve, reject };
}
/* harmony default export */ var flat_promise = (flatPromise);

// CONCATENATED MODULE: ./src/core/user.ts





class user_UserFacade extends dispatcher_Dispatcher {
    constructor(pusher) {
        super(function (eventName, data) {
            logger.debug('No callbacks on user for ' + eventName);
        });
        this.signin_requested = false;
        this.user_data = null;
        this.serverToUserChannel = null;
        this.signinDonePromise = null;
        this._signinDoneResolve = null;
        this._onAuthorize = (err, authData) => {
            if (err) {
                logger.warn(`Error during signin: ${err}`);
                this._cleanup();
                return;
            }
            this.pusher.send_event('pusher:signin', {
                auth: authData.auth,
                user_data: authData.user_data
            });
        };
        this.pusher = pusher;
        this.pusher.connection.bind('state_change', ({ previous, current }) => {
            if (previous !== 'connected' && current === 'connected') {
                this._signin();
            }
            if (previous === 'connected' && current !== 'connected') {
                this._cleanup();
                this._newSigninPromiseIfNeeded();
            }
        });
        this.watchlist = new watchlist_WatchlistFacade(pusher);
        this.pusher.connection.bind('message', event => {
            var eventName = event.event;
            if (eventName === 'pusher:signin_success') {
                this._onSigninSuccess(event.data);
            }
            if (this.serverToUserChannel &&
                this.serverToUserChannel.name === event.channel) {
                this.serverToUserChannel.handleEvent(event);
            }
        });
    }
    signin() {
        if (this.signin_requested) {
            return;
        }
        this.signin_requested = true;
        this._signin();
    }
    _signin() {
        if (!this.signin_requested) {
            return;
        }
        this._newSigninPromiseIfNeeded();
        if (this.pusher.connection.state !== 'connected') {
            return;
        }
        this.pusher.config.userAuthenticator({
            socketId: this.pusher.connection.socket_id
        }, this._onAuthorize);
    }
    _onSigninSuccess(data) {
        try {
            this.user_data = JSON.parse(data.user_data);
        }
        catch (e) {
            logger.error(`Failed parsing user data after signin: ${data.user_data}`);
            this._cleanup();
            return;
        }
        if (typeof this.user_data.id !== 'string' || this.user_data.id === '') {
            logger.error(`user_data doesn't contain an id. user_data: ${this.user_data}`);
            this._cleanup();
            return;
        }
        this._signinDoneResolve();
        this._subscribeChannels();
    }
    _subscribeChannels() {
        const ensure_subscribed = channel => {
            if (channel.subscriptionPending && channel.subscriptionCancelled) {
                channel.reinstateSubscription();
            }
            else if (!channel.subscriptionPending &&
                this.pusher.connection.state === 'connected') {
                channel.subscribe();
            }
        };
        this.serverToUserChannel = new channel_Channel(`#server-to-user-${this.user_data.id}`, this.pusher);
        this.serverToUserChannel.bind_global((eventName, data) => {
            if (eventName.indexOf('pusher_internal:') === 0 ||
                eventName.indexOf('pusher:') === 0) {
                return;
            }
            this.emit(eventName, data);
        });
        ensure_subscribed(this.serverToUserChannel);
    }
    _cleanup() {
        this.user_data = null;
        if (this.serverToUserChannel) {
            this.serverToUserChannel.unbind_all();
            this.serverToUserChannel.disconnect();
            this.serverToUserChannel = null;
        }
        if (this.signin_requested) {
            this._signinDoneResolve();
        }
    }
    _newSigninPromiseIfNeeded() {
        if (!this.signin_requested) {
            return;
        }
        if (this.signinDonePromise && !this.signinDonePromise.done) {
            return;
        }
        const { promise, resolve, reject: _ } = flat_promise();
        promise.done = false;
        const setDone = () => {
            promise.done = true;
        };
        promise.then(setDone).catch(setDone);
        this.signinDonePromise = promise;
        this._signinDoneResolve = resolve;
    }
}

// CONCATENATED MODULE: ./src/core/pusher.ts













class pusher_Pusher {
    static ready() {
        pusher_Pusher.isReady = true;
        for (var i = 0, l = pusher_Pusher.instances.length; i < l; i++) {
            pusher_Pusher.instances[i].connect();
        }
    }
    static getClientFeatures() {
        return keys(filterObject({ ws: runtime.Transports.ws }, function (t) {
            return t.isSupported({});
        }));
    }
    constructor(app_key, options) {
        checkAppKey(app_key);
        validateOptions(options);
        this.key = app_key;
        this.config = getConfig(options, this);
        this.channels = factory.createChannels();
        this.global_emitter = new dispatcher_Dispatcher();
        this.sessionID = runtime.randomInt(1000000000);
        this.timeline = new timeline_Timeline(this.key, this.sessionID, {
            cluster: this.config.cluster,
            features: pusher_Pusher.getClientFeatures(),
            params: this.config.timelineParams || {},
            limit: 50,
            level: timeline_level.INFO,
            version: defaults.VERSION
        });
        if (this.config.enableStats) {
            this.timelineSender = factory.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: '/timeline/v2/' + runtime.TimelineTransport.name
            });
        }
        var getStrategy = (options) => {
            return runtime.getDefaultStrategy(this.config, options, strategy_builder_defineTransport);
        };
        this.connection = factory.createConnectionManager(this.key, {
            getStrategy: getStrategy,
            timeline: this.timeline,
            activityTimeout: this.config.activityTimeout,
            pongTimeout: this.config.pongTimeout,
            unavailableTimeout: this.config.unavailableTimeout,
            useTLS: Boolean(this.config.useTLS)
        });
        this.connection.bind('connected', () => {
            this.subscribeAll();
            if (this.timelineSender) {
                this.timelineSender.send(this.connection.isUsingTLS());
            }
        });
        this.connection.bind('message', event => {
            var eventName = event.event;
            var internal = eventName.indexOf('pusher_internal:') === 0;
            if (event.channel) {
                var channel = this.channel(event.channel);
                if (channel) {
                    channel.handleEvent(event);
                }
            }
            if (!internal) {
                this.global_emitter.emit(event.event, event.data);
            }
        });
        this.connection.bind('connecting', () => {
            this.channels.disconnect();
        });
        this.connection.bind('disconnected', () => {
            this.channels.disconnect();
        });
        this.connection.bind('error', err => {
            logger.warn(err);
        });
        pusher_Pusher.instances.push(this);
        this.timeline.info({ instances: pusher_Pusher.instances.length });
        this.user = new user_UserFacade(this);
        if (pusher_Pusher.isReady) {
            this.connect();
        }
    }
    channel(name) {
        return this.channels.find(name);
    }
    allChannels() {
        return this.channels.all();
    }
    connect() {
        this.connection.connect();
        if (this.timelineSender) {
            if (!this.timelineSenderTimer) {
                var usingTLS = this.connection.isUsingTLS();
                var timelineSender = this.timelineSender;
                this.timelineSenderTimer = new timers_PeriodicTimer(60000, function () {
                    timelineSender.send(usingTLS);
                });
            }
        }
    }
    disconnect() {
        this.connection.disconnect();
        if (this.timelineSenderTimer) {
            this.timelineSenderTimer.ensureAborted();
            this.timelineSenderTimer = null;
        }
    }
    bind(event_name, callback, context) {
        this.global_emitter.bind(event_name, callback, context);
        return this;
    }
    unbind(event_name, callback, context) {
        this.global_emitter.unbind(event_name, callback, context);
        return this;
    }
    bind_global(callback) {
        this.global_emitter.bind_global(callback);
        return this;
    }
    unbind_global(callback) {
        this.global_emitter.unbind_global(callback);
        return this;
    }
    unbind_all(callback) {
        this.global_emitter.unbind_all();
        return this;
    }
    subscribeAll() {
        var channelName;
        for (channelName in this.channels.channels) {
            if (this.channels.channels.hasOwnProperty(channelName)) {
                this.subscribe(channelName);
            }
        }
    }
    subscribe(channel_name) {
        var channel = this.channels.add(channel_name, this);
        if (channel.subscriptionPending && channel.subscriptionCancelled) {
            channel.reinstateSubscription();
        }
        else if (!channel.subscriptionPending &&
            this.connection.state === 'connected') {
            channel.subscribe();
        }
        return channel;
    }
    unsubscribe(channel_name) {
        var channel = this.channels.find(channel_name);
        if (channel && channel.subscriptionPending) {
            channel.cancelSubscription();
        }
        else {
            channel = this.channels.remove(channel_name);
            if (channel && channel.subscribed) {
                channel.unsubscribe();
            }
        }
    }
    send_event(event_name, data, channel) {
        return this.connection.send_event(event_name, data, channel);
    }
    shouldUseTLS() {
        return this.config.useTLS;
    }
    signin() {
        this.user.signin();
    }
}
pusher_Pusher.instances = [];
pusher_Pusher.isReady = false;
pusher_Pusher.logToConsole = false;
pusher_Pusher.Runtime = runtime;
pusher_Pusher.ScriptReceivers = runtime.ScriptReceivers;
pusher_Pusher.DependenciesReceivers = runtime.DependenciesReceivers;
pusher_Pusher.auth_callbacks = runtime.auth_callbacks;
/* harmony default export */ var core_pusher = __nested_webpack_exports__["default"] = (pusher_Pusher);
function checkAppKey(key) {
    if (key === null || key === undefined) {
        throw 'You must pass your app key when you instantiate Pusher.';
    }
}
runtime.setup(pusher_Pusher);


/***/ })
/******/ ]);
});
//# sourceMappingURL=pusher.js.map

/***/ }),

/***/ "./node_modules/vue-json-pretty/lib/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/vue-json-pretty/lib/styles.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./styles.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-json-pretty/lib/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/ua-parser-js/src/ua-parser.js":
/*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.35
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '1.0.35',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 350;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SHARP   = 'Sharp',
        SONY    = 'Sony',
        VIERA   = 'Viera',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK    = 'Facebook',
        CHROMIUM_OS = 'Chromium OS',
        MAC_OS  = 'Mac OS';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    if (!regex[j]) { break; }
                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(heytap|ovi)browser\/([\d\.]+)/i,                                  // Heytap/Ovi
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /ya(?:search)?browser\/([\w\.]+)/i                                  // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish/Huawei Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i,                                                     // LieBao Browser
            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,                             // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,                                  // Naver InApp
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i                        // TikTok
            ], [VERSION, [NAME, 'TikTok']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i,                                             // Links
            /panasonic;(viera)/i                                                // Panasonic Viera
            ], [NAME, VERSION], [
            
            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
            ], [NAME, [VERSION, /master.|lts./, ""]]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i                          // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
            /(macintosh);/i
            ], [MODEL, [VENDOR, APPLE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,                             // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(kobo)\s(ereader|touch)/i,                                         // Kobo
            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i                                               // Sharp
            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
            /(bravia[\w ]+)( bui|\))/i                                              // Sony
            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
            /(mitv-\w{5}) bui/i                                                 // Xiaomi
            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
            /Hbbtv.*(technisat) (.*);/i                                         // TechniSAT
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i         // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i                              // Apple Watch
            ], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2| pro)?)/i                                                // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [
            /(aeobc)\b/i                                                        // Echo Dot
            ], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,                                      // iCab
            /\b(libweb)/i
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /ios;fbsv\/([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, MAC_OS], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i                              // watchOS
            ], [VERSION, [NAME, 'watchOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i                                  // Chromium OS
            ], [[NAME, CHROMIUM_OS], VERSION],[

            // Smart TVs
            /panasonic;(viera)/i,                                               // Panasonic Viera
            /(netrange)mmh/i,                                                   // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,                                         // NetTV

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _navigator = (typeof window !== UNDEF_TYPE && window.navigator) ? window.navigator : undefined;
        var _ua = ua || ((_navigator && _navigator.userAgent) ? _navigator.userAgent : EMPTY);
        var _uach = (_navigator && _navigator.userAgentData) ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
                _browser[NAME] = 'Brave';
            }
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
                _device[TYPE] = MOBILE;
            }
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == 'Macintosh' && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = 'iPad';
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != 'Unknown') {
                _os[NAME] = _uach.platform  
                                    .replace(/chrome os/i, CHROMIUM_OS)
                                    .replace(/macos/i, MAC_OS);           // backward compatibility
            }
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__.amdO) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ "./node_modules/vue-json-pretty/lib/vue-json-pretty.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-json-pretty/lib/vue-json-pretty.js ***!
  \*************************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(){var e={228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},858:function(e){e.exports=function(e){if(Array.isArray(e))return e}},646:function(e,t,n){var o=n(228);e.exports=function(e){if(Array.isArray(e))return o(e)}},713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},884:function(e){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,i=!1,l=void 0;try{for(var a,r=e[Symbol.iterator]();!(o=(a=r.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw l}}return n}}},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:function(e,t,n){var o=n(858),i=n(884),l=n(379),a=n(521);e.exports=function(e,t){return o(e)||i(e,t)||l(e,t)||a()}},319:function(e,t,n){var o=n(646),i=n(860),l=n(379),a=n(206);e.exports=function(e){return o(e)||i(e)||l(e)||a()}},8:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},379:function(e,t,n){var o=n(228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},629:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var o=n(38),i=n.n(o),l=n(319),a=n.n(l),r=n(713),s=n.n(r);function c(e,t,n,o,i,l,a,r){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(e,t){return s.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:c}}var u=c({props:{data:{required:!0,type:String}},methods:{toggleBrackets:function(e){this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree-brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v(e._s(e.data))])}),[],!1,null,null,null).exports,d=c({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},computed:{uiType:function(){return this.isMultiple?"checkbox":"radio"},model:{get:function(){return this.checked},set:function(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[n("span",{class:"vjs-check-controller-inner is-"+e.uiType}),n("input",{class:"vjs-check-controller-original is-"+e.uiType,attrs:{type:e.uiType},domProps:{checked:e.model},on:{change:function(t){return e.$emit("change",e.model)}}})])}),[],!1,null,null,null).exports,h=c({props:{nodeType:{type:String,required:!0}},computed:{isOpen:function(){return"objectStart"===this.nodeType||"arrayStart"===this.nodeType},isClose:function(){return"objectCollapsed"===this.nodeType||"arrayCollapsed"===this.nodeType}},methods:{handleClick:function(){this.$emit("click")}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isOpen||e.isClose?n("span",{class:"vjs-carets vjs-carets-"+(e.isOpen?"open":"close"),on:{click:e.handleClick}},[n("svg",{attrs:{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}})])]):e._e()}),[],!1,null,null,null).exports,p=n(8),f=n.n(p);function y(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.key,l=o.index,a=o.type,r=void 0===a?"content":a,s=o.showComma,c=void 0!==s&&s,u=o.length,d=void 0===u?1:u,h=y(e);if("array"===h){var p=v(e.map((function(e,o,i){return g(e,"".concat(t,"[").concat(o,"]"),n+1,{index:o,showComma:o!==i.length-1,length:d,type:r})})));return[g("[",t,n,{key:i,length:e.length,type:"arrayStart"})[0]].concat(p,g("]",t,n,{showComma:c,length:e.length,type:"arrayEnd"})[0])}if("object"===h){var f=Object.keys(e),b=v(f.map((function(o,i,l){return g(e[o],/^[a-zA-Z_]\w*$/.test(o)?"".concat(t,".").concat(o):"".concat(t,'["').concat(o,'"]'),n+1,{key:o,showComma:i!==l.length-1,length:d,type:r})})));return[g("{",t,n,{key:i,index:l,length:f.length,type:"objectStart"})[0]].concat(b,g("}",t,n,{showComma:c,length:f.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:i,index:l,path:t,showComma:c,length:d,type:r}]}function v(e){if("function"==typeof Array.prototype.flat)return e.flat();for(var t=a()(e),n=[];t.length;){var o=t.shift();Array.isArray(o)?t.unshift.apply(t,a()(o)):n.push(o)}return n}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null==e)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if("object"!==f()(e))return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map((function(e){return b(e,t)}));return t.set(e,n),n}var o={};for(var i in e)o[i]=b(e[i],t);return t.set(e,o),o}var m=c({components:{Brackets:u,CheckController:d,Carets:h},props:{node:{required:!0,type:Object},collapsed:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"}},data:function(){return{editing:!1}},computed:{valueClass:function(){return"vjs-value vjs-value-".concat(this.dataType)},dataType:function(){return y(this.node.content)},prettyKey:function(){return this.showDoubleQuotes?'"'.concat(this.node.key,'"'):this.node.key},selectable:function(){return this.nodeSelectable(this.node)&&(this.isMultiple||this.isSingle)},isMultiple:function(){return"multiple"===this.selectableType},isSingle:function(){return"single"===this.selectableType},defaultValue:function(){var e,t=null===(e=this.node)||void 0===e?void 0:e.content;return null==t&&(t+=""),"string"===this.dataType?'"'.concat(t,'"'):t}},methods:{handleInputChange:function(e){var t,n,o="null"===(n=null===(t=e.target)||void 0===t?void 0:t.value)?null:"undefined"===n?void 0:"true"===n||"false"!==n&&(n[0]+n[n.length-1]==='""'||n[0]+n[n.length-1]==="''"?n.slice(1,-1):"number"==typeof Number(n)&&!isNaN(Number(n))||"NaN"===n?Number(n):n);this.$emit("value-change",o,this.node.path)},handleIconClick:function(){this.$emit("icon-click",!this.collapsed,this.node.path)},handleBracketsClick:function(){this.$emit("brackets-click",!this.collapsed,this.node.path)},handleSelectedChange:function(){this.$emit("selected-change",this.node)},handleNodeClick:function(){this.$emit("node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)},handleValueEdit:function(e){var t=this;if(this.editable&&!this.editing){this.editing=!0;var n=function n(o){var i;o.target!==e.target&&(null===(i=o.target)||void 0===i?void 0:i.parentElement)!==e.target&&(t.editing=!1,document.removeEventListener("click",n))};document.removeEventListener("click",n),document.addEventListener("click",n)}}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.handleNodeClick}},[e.showLineNumber?n("span",{staticClass:"vjs-node-index"},[e._v("\n    "+e._s(e.node.id+1)+"\n  ")]):e._e(),e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?n("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.handleSelectedChange}}):e._e(),n("div",{staticClass:"vjs-indent"},[e._l(e.node.level,(function(t,o){return n("div",{key:o,class:{"vjs-indent-unit":!0,"has-line":e.showLine}})})),e.showIcon?n("carets",{attrs:{"node-type":e.node.type},on:{click:e.handleIconClick}}):e._e()],2),e.node.key?n("span",{staticClass:"vjs-key"},[e._t("key",[e._v(e._s(e.prettyKey))],{node:e.node,defaultKey:e.prettyKey}),n("span",{staticClass:"vjs-colon"},[e._v(e._s(":"+(e.showKeyValueSpace?" ":"")))])],2):e._e(),n("span",["content"!==e.node.type?n("brackets",{attrs:{data:e.node.content},on:{click:e.handleBracketsClick}}):n("span",{class:e.valueClass,on:{click:function(t){!e.editable||e.editableTrigger&&"click"!==e.editableTrigger||e.handleValueEdit(t)},dblclick:function(t){e.editable&&"dblclick"===e.editableTrigger&&e.handleValueEdit(t)}}},[e.editable&&e.editing?n("input",{style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"},domProps:{value:e.defaultValue},on:{change:e.handleInputChange}}):e._t("value",[e._v(e._s(e.defaultValue))],{node:e.node,defaultValue:e.defaultValue})],2),e.node.showComma?n("span",[e._v(",")]):e._e(),e.showLength&&e.collapsed?n("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],1)}),[],!1,null,null,null);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=c({name:"VueJsonPretty",components:{TreeNode:m.exports},model:{prop:"data"},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},selectedValue:{type:[Array,String],default:function(){return""}},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"}},data:function(){return{translateY:0,visibleData:null,hiddenPaths:this.initHiddenPaths(g(this.data,this.rootPath),this.deep)}},computed:{originFlatData:function(){return g(this.data,this.rootPath)},flatData:function(e){for(var t=e.originFlatData,n=e.hiddenPaths,o=null,i=[],l=t.length,a=0;a<l;a++){var r=C(C({},t[a]),{},{id:a}),s=n[r.path];if(o&&o.path===r.path){var c="objectStart"===o.type,u=C(C(C({},r),o),{},{showComma:r.showComma,content:c?"{...}":"[...]",type:c?"objectCollapsed":"arrayCollapsed"});o=null,i.push(u)}else{if(s&&!o){o=r;continue}if(o)continue;i.push(r)}}return i},selectedPaths:{get:function(){var e=this.selectedValue;return e&&"multiple"===this.selectableType&&Array.isArray(e)?e:[e]},set:function(e){this.$emit("update:selectedValue",e)}},propsError:function(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler:function(e){if(e)throw new Error("[VueJsonPretty] ".concat(e))},immediate:!0},flatData:{handler:function(e){this.updateVisibleData(e)},immediate:!0},deep:{handler:function(e){this.hiddenPaths=this.initHiddenPaths(this.originFlatData,e)}}},methods:{initHiddenPaths:function(e,t){return e.reduce((function(e,n){var o=n.level>=t;return"objectStart"!==n.type&&"arrayStart"!==n.type||!o?e:C(C({},e),{},s()({},n.path,1))}),{})},updateVisibleData:function(e){if(this.virtual){var t=this.height/this.itemHeight,n=this.$refs.tree&&this.$refs.tree.scrollTop||0,o=Math.floor(n/this.itemHeight),i=o<0?0:o+t>e.length?e.length-t:o;i<0&&(i=0);var l=i+t;this.translateY=i*this.itemHeight,this.visibleData=e.filter((function(e,t){return t>=i&&t<l}))}else this.visibleData=e},handleTreeScroll:function(){this.updateVisibleData(this.flatData)},handleSelectedChange:function(e){var t=e.path,n=this.selectableType;if("multiple"===n){var o=this.selectedPaths.findIndex((function(e){return e===t})),l=a()(this.selectedPaths);-1!==o?this.selectedPaths.splice(o,1):this.selectedPaths.push(t),this.$emit("selected-change",this.selectedPaths,l)}else if("single"===n&&this.selectedPaths[0]!==t){var r=i()(this.selectedPaths,1)[0],s=t;this.selectedPaths=s,this.$emit("selected-change",s,r)}},handleNodeClick:function(e){this.$emit("node-click",e)},updateCollapsedPaths:function(e,t){if(e)this.hiddenPaths=C(C({},this.hiddenPaths),{},s()({},t,1));else{var n=C({},this.hiddenPaths);delete n[t],this.hiddenPaths=n}},handleBracketsClick:function(e,t){this.collapsedOnClickBrackets&&this.updateCollapsedPaths(e,t),this.$emit("brackets-click",e)},handleIconClick:function(e,t){this.updateCollapsedPaths(e,t),this.$emit("icon-click",e)},handleValueChange:function(e,t){var n=b(this.data),o=this.rootPath;new Function("data","val","data".concat(t.slice(o.length),"=val"))(n,e),this.$emit("input",n)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},style:e.showLineNumber?{paddingLeft:12*Number(e.originFlatData.length.toString().length)+"px"}:{},on:{scroll:function(t){e.virtual&&e.handleTreeScroll()}}},[n("div",{staticClass:"vjs-tree-list",style:e.virtual&&{height:e.height+"px"}},[n("div",{staticClass:"vjs-tree-list-holder",style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[n("div",{staticClass:"vjs-tree-list-holder-inner",style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return n("tree-node",{key:t.id,style:e.itemHeight&&20!==e.itemHeight?{lineHeight:e.itemHeight+"px"}:{},attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-line-number":e.showLineNumber,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"node-selectable":e.nodeSelectable,"highlight-selected-node":e.highlightSelectedNode,"show-icon":e.showIcon,"show-key-value-space":e.showKeyValueSpace,editable:e.editable,"editable-trigger":e.editableTrigger},on:{"node-click":e.handleNodeClick,"brackets-click":e.handleBracketsClick,"icon-click":e.handleIconClick,"selected-change":e.handleSelectedChange,"value-change":e.handleValueChange},scopedSlots:e._u([{key:"key",fn:function(t){return[e._t("nodeKey",null,{node:t.node,defaultKey:t.defaultKey})]}},{key:"value",fn:function(t){return[e._t("nodeValue",null,{node:t.node,defaultValue:t.defaultValue})]}}],null,!0)})})),1)])])])}),[],!1,null,null,null).exports,S=Object.assign({},w,{version:"1.9.4"})}},t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(629)}()}));

/***/ }),

/***/ "./resources/assets/js/components/ActivityBrowser.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/ActivityBrowser.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActivityBrowser_vue_vue_type_template_id_7e92309c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityBrowser.vue?vue&type=template&id=7e92309c& */ "./resources/assets/js/components/ActivityBrowser.vue?vue&type=template&id=7e92309c&");
/* harmony import */ var _ActivityBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityBrowser.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ActivityBrowser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActivityBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActivityBrowser_vue_vue_type_template_id_7e92309c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActivityBrowser_vue_vue_type_template_id_7e92309c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ActivityBrowser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ActivitySystem.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/ActivitySystem.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActivitySystem_vue_vue_type_template_id_8b4dddd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivitySystem.vue?vue&type=template&id=8b4dddd6& */ "./resources/assets/js/components/ActivitySystem.vue?vue&type=template&id=8b4dddd6&");
/* harmony import */ var _ActivitySystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivitySystem.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ActivitySystem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActivitySystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActivitySystem_vue_vue_type_template_id_8b4dddd6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActivitySystem_vue_vue_type_template_id_8b4dddd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ActivitySystem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Method.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/components/Method.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Method_vue_vue_type_template_id_7c1c0d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Method.vue?vue&type=template&id=7c1c0d58& */ "./resources/assets/js/components/Method.vue?vue&type=template&id=7c1c0d58&");
/* harmony import */ var _Method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Method.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Method.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Method_vue_vue_type_template_id_7c1c0d58___WEBPACK_IMPORTED_MODULE_0__.render,
  _Method_vue_vue_type_template_id_7c1c0d58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Method.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ActivityBrowser.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/ActivityBrowser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActivityBrowser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivityBrowser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ActivitySystem.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/ActivitySystem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitySystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActivitySystem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivitySystem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitySystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Method.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Method.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Method.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Method.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Method_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ActivityBrowser.vue?vue&type=template&id=7e92309c&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/ActivityBrowser.vue?vue&type=template&id=7e92309c& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityBrowser_vue_vue_type_template_id_7e92309c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityBrowser_vue_vue_type_template_id_7e92309c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityBrowser_vue_vue_type_template_id_7e92309c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActivityBrowser.vue?vue&type=template&id=7e92309c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivityBrowser.vue?vue&type=template&id=7e92309c&");


/***/ }),

/***/ "./resources/assets/js/components/ActivitySystem.vue?vue&type=template&id=8b4dddd6&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/ActivitySystem.vue?vue&type=template&id=8b4dddd6& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitySystem_vue_vue_type_template_id_8b4dddd6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitySystem_vue_vue_type_template_id_8b4dddd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivitySystem_vue_vue_type_template_id_8b4dddd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActivitySystem.vue?vue&type=template&id=8b4dddd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivitySystem.vue?vue&type=template&id=8b4dddd6&");


/***/ }),

/***/ "./resources/assets/js/components/Method.vue?vue&type=template&id=7c1c0d58&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/Method.vue?vue&type=template&id=7c1c0d58& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Method_vue_vue_type_template_id_7c1c0d58___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Method_vue_vue_type_template_id_7c1c0d58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Method_vue_vue_type_template_id_7c1c0d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Method.vue?vue&type=template&id=7c1c0d58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Method.vue?vue&type=template&id=7c1c0d58&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivityBrowser.vue?vue&type=template&id=7e92309c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivityBrowser.vue?vue&type=template&id=7e92309c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { attrs: { title: _vm.browserName + " - " + _vm.browserVersion } },
    [
      _vm.browserIcon ? [_c("i", { class: _vm.browserIcon })] : _vm._e(),
      _vm._v(" "),
      !_vm.iconOnly
        ? [_vm._v("\n        " + _vm._s(_vm.browserName) + "\n    ")]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivitySystem.vue?vue&type=template&id=8b4dddd6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ActivitySystem.vue?vue&type=template&id=8b4dddd6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { attrs: { title: _vm.systemName + " - " + _vm.systemVersion } },
    [
      _vm.systemIcon ? [_c("i", { class: _vm.systemIcon })] : _vm._e(),
      _vm._v(" "),
      !_vm.iconOnly
        ? [_vm._v("\n        " + _vm._s(_vm.systemName) + "\n    ")]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Method.vue?vue&type=template&id=7c1c0d58&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Method.vue?vue&type=template&id=7c1c0d58& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "badge me-1", class: [_vm.methodsClass] }, [
    _vm._v("\n    " + _vm._s(_vm.method) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./resources/assets/js/mngmnt/dashboard.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Method_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Method.vue */ "./resources/assets/js/components/Method.vue");
/* harmony import */ var _mixins_activity_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/activity-log */ "./resources/assets/js/mixins/activity-log.js");
/* harmony import */ var _mixins_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/common */ "./resources/assets/js/mixins/common.js");
var _broadcastingData$opt, _broadcastingData$opt2, _broadcastingData$opt3, _broadcastingData$opt4;





window.Pusher = (pusher_js__WEBPACK_IMPORTED_MODULE_1___default());
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: 'pusher',
  key: broadcastingData.key,
  cluster: (_broadcastingData$opt = broadcastingData.options.cluster) !== null && _broadcastingData$opt !== void 0 ? _broadcastingData$opt : 'mt1',
  wsHost: broadcastingHost ? broadcastingHost : "ws-".concat(broadcastingData.options.cluster, ".pusher.com"),
  wsPort: (_broadcastingData$opt2 = broadcastingData.options.port) !== null && _broadcastingData$opt2 !== void 0 ? _broadcastingData$opt2 : 80,
  wssPort: (_broadcastingData$opt3 = broadcastingData.options.port) !== null && _broadcastingData$opt3 !== void 0 ? _broadcastingData$opt3 : 443,
  forceTLS: ((_broadcastingData$opt4 = broadcastingData.options.scheme) !== null && _broadcastingData$opt4 !== void 0 ? _broadcastingData$opt4 : 'https') === 'https',
  enabledTransports: ['ws', 'wss']
});
new Vue({
  el: '#MasterApp',
  mixins: [_mixins_activity_log__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_common__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    Method: _components_Method_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    this.listening();
  },
  computed: {
    usersFiltered: function usersFiltered() {
      return this.users.filter(function (user) {
        return user.id != thisUser;
      });
    }
  },
  data: {
    recentActivity: recentActivity,
    userNameField: userNameField,
    users: []
  },
  methods: {
    listening: function listening() {
      var _this = this;
      window.Echo.join('al.tracking.users').here(function (users) {
        _this.users = users;
      }).joining(function (user) {
        var index = _this.users.findIndex(function (single) {
          return single.id === user.id;
        });
        if (index > 0) {
          _this.users[index] = user;
        } else {
          _this.users.push(user);
        }
      }).leaving(function (user) {
        var index = _this.users.findIndex(function (single) {
          return single.id === user.id;
        });
        if (index > 0) _this.users.splice(index, 1);
      }).error(function (error) {
        console.error(error);
      });
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQ7QUFDQSxpQkFBaUIsZ0NBQW1COzs7QUFHcEMsT0FBTztBQUNQO0FBQ0Esd0JBQXdCLDBCQUFtQixFQUFFLGdDQUFtQjs7QUFFaEU7QUFDQTtBQUNBLGdDQUFtQixHQUFHLDBCQUFtQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVyxFQUFFLElBQUk7QUFDL0I7QUFDQSxnREFBZ0QsZ0JBQWdCOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw0QkFBNEIsMkRBQTJELGlCQUFpQjtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUcsa0RBQWtEO0FBQ3ZKO0FBQ0E7QUFDQSw4RkFBOEYsNEJBQTRCO0FBQzFILHdDQUF3QyxZQUFZLE9BQU8scUJBQXFCLElBQUksT0FBTztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxJQUFJO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsNEJBQTRCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywyQkFBMkI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNDQUFzQztBQUNuRSx3REFBd0QseUJBQXlCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlELDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlELDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FB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QUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLCtCQUErQjtBQUNoRSx3Q0FBd0MsNENBQTRDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTyxJQUFJLE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGtDQUFrQztBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsMkNBQTJDO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0NBQXNDO0FBQ3RDO0FBQ0EsS0FBSztBQUNMLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxhQUFhO0FBQzFFLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNkJBQTZCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNDQUFzQztBQUN2Qzs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVyx1QkFBdUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLFFBQVEsMENBQTBDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkNBQTJDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7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Q0FBQyxtQkFBbUIsQ0FBQyxDQUNoQ0MsSUFBSSxDQUFDLFVBQUNSLEtBQUssRUFBSztRQUNiTSxLQUFJLENBQUNOLEtBQUssR0FBR0EsS0FBSztNQUN0QixDQUFDLENBQUMsQ0FDRFMsT0FBTyxDQUFDLFVBQUNQLElBQUksRUFBSztRQUVmLElBQUlRLEtBQUssR0FBR0osS0FBSSxDQUFDTixLQUFLLENBQUNXLFNBQVMsQ0FBQyxVQUFVQyxNQUFNLEVBQUM7VUFDOUMsT0FBT0EsTUFBTSxDQUFDM0UsRUFBRSxLQUFLaUUsSUFBSSxDQUFDakUsRUFBRTtRQUNoQyxDQUFDLENBQUM7UUFFRixJQUFJeUUsS0FBSyxHQUFHLENBQUMsRUFBRTtVQUNYSixLQUFJLENBQUNOLEtBQUssQ0FBQ1UsS0FBSyxDQUFDLEdBQUdSLElBQUk7UUFDNUIsQ0FBQyxNQUFNO1VBQ0hJLEtBQUksQ0FBQ04sS0FBSyxDQUFDYSxJQUFJLENBQUNYLElBQUksQ0FBQztRQUN6QjtNQUVKLENBQUMsQ0FBQyxDQUNEWSxPQUFPLENBQUMsVUFBQ1osSUFBSSxFQUFLO1FBRWYsSUFBSVEsS0FBSyxHQUFHSixLQUFJLENBQUNOLEtBQUssQ0FBQ1csU0FBUyxDQUFDLFVBQVVDLE1BQU0sRUFBQztVQUM5QyxPQUFPQSxNQUFNLENBQUMzRSxFQUFFLEtBQUtpRSxJQUFJLENBQUNqRSxFQUFFO1FBQ2hDLENBQUMsQ0FBQztRQUVGLElBQUl5RSxLQUFLLEdBQUcsQ0FBQyxFQUNUSixLQUFJLENBQUNOLEtBQUssQ0FBQ2UsTUFBTSxDQUFDTCxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ25DLENBQUMsQ0FBQyxDQUNEeEQsS0FBSyxDQUFDLFVBQUNBLEtBQUssRUFBSztRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO01BQ3hCLENBQUMsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQWN0aXZpdHlCcm93c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FjdGl2aXR5U3lzdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01ldGhvZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWN0aXZpdHktbG9nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWpzb24tcHJldHR5L2xpYi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1qc29uLXByZXR0eS9saWIvc3R5bGVzLmNzcz85OGY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWEtcGFyc2VyLWpzL3NyYy91YS1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1qc29uLXByZXR0eS9saWIvdnVlLWpzb24tcHJldHR5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BY3Rpdml0eUJyb3dzZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BY3Rpdml0eVN5c3RlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01ldGhvZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FjdGl2aXR5QnJvd3Nlci52dWU/MDNlNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQWN0aXZpdHlTeXN0ZW0udnVlPzExZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01ldGhvZC52dWU/OWY3NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQWN0aXZpdHlCcm93c2VyLnZ1ZT9iMzgzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BY3Rpdml0eVN5c3RlbS52dWU/YjQxZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQWN0aXZpdHlCcm93c2VyLnZ1ZT81YThlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BY3Rpdml0eVN5c3RlbS52dWU/NTY2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWV0aG9kLnZ1ZT8zNjQ2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21uZ21udC9kYXNoYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHNwYW4gOnRpdGxlPVwiYnJvd3Nlck5hbWUgKyAnIC0gJyArIGJyb3dzZXJWZXJzaW9uXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJicm93c2VySWNvblwiPlxyXG4gICAgICAgICAgICA8aSA6Y2xhc3M9XCJicm93c2VySWNvblwiPjwvaT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFpY29uT25seVwiPlxyXG4gICAgICAgICAgICB7eyBicm93c2VyTmFtZSB9fVxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3NwYW4+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxudmFyIHVhcCA9IHJlcXVpcmUoJ3VhLXBhcnNlci1qcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJBY3Rpdml0eUJyb3dzZXJcIixcclxuXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXJBZ2VudDoge30sXHJcbiAgICAgICAgaWNvbk9ubHk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdCgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGJyb3dzZXJOYW1lKCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnVzZXJBZ2VudClcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJzZWQgPSB1YXAoIHRoaXMudXNlckFnZW50ICk7XHJcblxyXG4gICAgICAgICAgICBpZihwYXJzZWQuYnJvd3NlcilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQuYnJvd3Nlci5uYW1lO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJyb3dzZXJWZXJzaW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnVzZXJBZ2VudClcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJzZWQgPSB1YXAoIHRoaXMudXNlckFnZW50ICk7XHJcblxyXG4gICAgICAgICAgICBpZihwYXJzZWQuYnJvd3NlcilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQuYnJvd3Nlci52ZXJzaW9uO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJyb3dzZXJJY29uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEljb24odGhpcy5icm93c2VyTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0SWNvbihicm93c2VyTmFtZSl7XHJcbiAgICAgICAgICAgIGxldCBpY29ucyA9IHtcclxuICAgICAgICAgICAgICAgICdGaXJlZm94IFtGb2N1cy9SZWFsaXR5XSc6ICdmYS1icmFuZHMgZmEtZmlyZWZveC1icm93c2VyJyxcclxuICAgICAgICAgICAgICAgICdGaXJlZm94JzogJ2ZhLWJyYW5kcyBmYS1maXJlZm94LWJyb3dzZXInLFxyXG4gICAgICAgICAgICAgICAgJ0VkZ2UnOiAnZmEtYnJhbmRzIGZhLWVkZ2UnLFxyXG4gICAgICAgICAgICAgICAgJ0Nocm9tZSc6ICdmYS1icmFuZHMgZmEtY2hyb21lJyxcclxuICAgICAgICAgICAgICAgICdDaHJvbWl1bSc6ICdmYS1icmFuZHMgZmEtY2hyb21lJyxcclxuICAgICAgICAgICAgICAgICdTYWZhcmknOiAnZmEtYnJhbmRzIGZhLXNhZmFyaScsXHJcbiAgICAgICAgICAgICAgICAnSUUnOiAnZmEtYnJhbmRzIGZhLWludGVybmV0LWV4cGxvcmVyJyxcclxuICAgICAgICAgICAgICAgICdPcGVyYSBbTWluaS9Nb2JpL1RhYmxldF0nOiAnZmEtYnJhbmRzIGZhLW9wZXJhJyxcclxuICAgICAgICAgICAgICAgICdPcGVyYSc6ICdmYS1icmFuZHMgZmEtb3BlcmEnLFxyXG4gICAgICAgICAgICAgICAgJ0JyYXZlJzogJ2ZhLXNvbGlkIGZhLXNoaWVsZC1jYXQnLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGljb25zW2Jyb3dzZXJOYW1lXSAhPT0gdW5kZWZpbmVkID8gaWNvbnNbYnJvd3Nlck5hbWVdIDogJ2ZhLXNvbGlkIGZhLWdsb2JlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzcGFuIDp0aXRsZT1cInN5c3RlbU5hbWUgKyAnIC0gJyArIHN5c3RlbVZlcnNpb25cIj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInN5c3RlbUljb25cIj5cclxuICAgICAgICAgICAgPGkgOmNsYXNzPVwic3lzdGVtSWNvblwiPjwvaT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFpY29uT25seVwiPlxyXG4gICAgICAgICAgICB7eyBzeXN0ZW1OYW1lIH19XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG52YXIgdWFwID0gcmVxdWlyZSgndWEtcGFyc2VyLWpzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkFjdGl2aXR5U3lzdGVtXCIsXHJcblxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyQWdlbnQ6IHt9LFxyXG4gICAgICAgIGljb25Pbmx5OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgc3lzdGVtTmFtZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJBZ2VudClcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJzZWQgPSB1YXAodGhpcy51c2VyQWdlbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlZC5vcylcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQub3MubmFtZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzeXN0ZW1WZXJzaW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudXNlckFnZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcnNlZCA9IHVhcCh0aGlzLnVzZXJBZ2VudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyc2VkLm9zKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5vcy52ZXJzaW9uO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN5c3RlbUljb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEljb24odGhpcy5zeXN0ZW1OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRJY29uKHN5c3RlbU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpY29ucyA9IHtcclxuICAgICAgICAgICAgICAgICdBbmRyb2lkWy14ODZdJzogJ2ZhLWJyYW5kcyBmYS1hbmRyb2lkJyxcclxuICAgICAgICAgICAgICAgICdBbmRyb2lkJzogJ2ZhLWJyYW5kcyBmYS1hbmRyb2lkJyxcclxuICAgICAgICAgICAgICAgICdBcmNoJzogJ2ZhLXNvbGlkIGZhLWFyY2h3YXknLFxyXG4gICAgICAgICAgICAgICAgJ0NlbnRPUyc6ICdmYS1icmFuZHMgZmEtY2VudG9zJyxcclxuICAgICAgICAgICAgICAgICdDaHJvbWl1bSBPUyc6ICdmYS1icmFuZHMgZmEtY2hyb21lJyxcclxuICAgICAgICAgICAgICAgICdGaXJlZm94IE9TJzogJ2ZhLWJyYW5kcyBmYS1maXJlZm94LWJyb3dzZXInLFxyXG4gICAgICAgICAgICAgICAgJ0ZlZG9yYSc6ICdmYS1icmFuZHMgZmEtZmVkb3JhJyxcclxuICAgICAgICAgICAgICAgICdpT1MnOiAnZmEtYnJhbmRzIGZhLWFwcGxlJyxcclxuICAgICAgICAgICAgICAgICdMaW51eCc6ICdmYS1icmFuZHMgZmEtbGludXgnLFxyXG4gICAgICAgICAgICAgICAgJ01pbnQnOiAnZmEtYnJhbmRzIGZhLWxpbnV4JyxcclxuICAgICAgICAgICAgICAgICdNYWMgT1MnOiAnZmEtYnJhbmRzIGZhLWFwcGxlJyxcclxuICAgICAgICAgICAgICAgICdNYWMnOiAnZmEtYnJhbmRzIGZhLWFwcGxlJyxcclxuICAgICAgICAgICAgICAgICdVYnVudHUnOiAnZmEtYnJhbmRzIGZhLXVidW50dScsXHJcbiAgICAgICAgICAgICAgICAnV2luZG93cyc6ICdmYS1icmFuZHMgZmEtd2luZG93cycsXHJcbiAgICAgICAgICAgICAgICAnV2luZG93cyBbUGhvbmUvTW9iaWxlXSc6ICdmYS1icmFuZHMgZmEtd2luZG93cycsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaWNvbnNbc3lzdGVtTmFtZV0gIT09IHVuZGVmaW5lZCA/IGljb25zW3N5c3RlbU5hbWVdIDogJ2ZhLXNvbGlkIGZhLWxhcHRvcCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJhZGdlIG1lLTFcIiA6Y2xhc3M9XCJbbWV0aG9kc0NsYXNzXVwiPlxyXG4gICAgICAgIHt7IG1ldGhvZCB9fVxyXG4gICAgPC9zcGFuPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJNZXRob2RcIixcclxuXHJcbiAgICBwcm9wczogWydtZXRob2QnXSxcclxuXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIG1ldGhvZHNDbGFzcygpe1xyXG4gICAgICAgICAgICBsZXQgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgICdHRVQnOiAnYmctbGFiZWwtaW5mbycsXHJcbiAgICAgICAgICAgICAgICAnUE9TVCc6ICdiZy1sYWJlbC1zdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICdQVVQnOiAnYmctbGFiZWwtd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAnUEFUQ0gnOiAnYmctbGFiZWwtd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAnREVMRVRFJzogJ2JnLWxhYmVsLWRhbmdlcicsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlc1t0aGlzLm1ldGhvZF0gIT09IHVuZGVmaW5lZCA/IGNsYXNzZXNbdGhpcy5tZXRob2RdIDogJ2JnLWxhYmVsLXNlY29uZGFyeSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD4iLCJpbXBvcnQgQWN0aXZpdHlCcm93c2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0FjdGl2aXR5QnJvd3Nlci52dWVcIjtcclxuaW1wb3J0IEFjdGl2aXR5U3lzdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0FjdGl2aXR5U3lzdGVtLnZ1ZVwiO1xyXG5pbXBvcnQgJ3Z1ZS1qc29uLXByZXR0eS9saWIvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBWdWVKc29uUHJldHR5IGZyb20gJ3Z1ZS1qc29uLXByZXR0eSc7XHJcblxyXG52YXIgYWN0aXZpdHlMb2cgPSB7XHJcblxyXG4gICAgY29tcG9uZW50czoge0FjdGl2aXR5QnJvd3NlciwgQWN0aXZpdHlTeXN0ZW0sIFZ1ZUpzb25QcmV0dHl9LFxyXG5cclxuICAgIGNyZWF0ZWQoKXt9LFxyXG5cclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhY3Rpdml0eUxvZzoge1xyXG4gICAgICAgICAgICAgICAgbW9kYWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogYWN0aXZpdHlMb2dHZXRSb3V0ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvcGVuRGV0YWlsc01vZGFsKGlkLCBldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgd2luZG93LlNwaW5uZXIub24oKS5idXR0b24oYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3V0ZSA9IGAke3RoaXMuYWN0aXZpdHlMb2cucm91dGV9LyR7aWR9YDtcclxuXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChyb3V0ZSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5TcGlubmVyLm9mZigpLmJ1dHRvbihidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuYWN0aXZpdHlMb2cuaXRlbSA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmFjdGl2aXR5TG9nTW9kYWwoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhY3Rpdml0eUxvZ01vZGFsKCl7XHJcbiAgICAgICAgICAgIHZhciBteU1vZGFsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQWN0aXZpdHlMb2dEZXRhaWxzTW9kYWwnKVxyXG4gICAgICAgICAgICByZXR1cm4gYm9vdHN0cmFwLk1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobXlNb2RhbEVsKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFjdGl2aXR5QnJvd3Nlcigpe1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhY3Rpdml0eU9zKCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWN0aXZpdHlMb2c7IiwidmFyIENvbW1vbiA9IHtcclxuXHJcbiAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgZGF0ZUZvcm1hdDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcclxuICAgICAgICAgICAgdmFyIGNvbXBpbGVkICA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVkLnRvTG9jYWxlU3RyaW5nKFwiZW4tR0JcIik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudmpzLXRyZWUtYnJhY2tldHN7Y3Vyc29yOnBvaW50ZXJ9LnZqcy10cmVlLWJyYWNrZXRzOmhvdmVye2NvbG9yOiMxODkwZmZ9LnZqcy1jaGVjay1jb250cm9sbGVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MH0udmpzLWNoZWNrLWNvbnRyb2xsZXIuaXMtY2hlY2tlZCAudmpzLWNoZWNrLWNvbnRyb2xsZXItaW5uZXJ7YmFja2dyb3VuZC1jb2xvcjojMTg5MGZmO2JvcmRlci1jb2xvcjojMDA3NmU0fS52anMtY2hlY2stY29udHJvbGxlci5pcy1jaGVja2VkIC52anMtY2hlY2stY29udHJvbGxlci1pbm5lci5pcy1jaGVja2JveDphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHNjYWxlWSgxKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSBzY2FsZVkoMSl9LnZqcy1jaGVjay1jb250cm9sbGVyLmlzLWNoZWNrZWQgLnZqcy1jaGVjay1jb250cm9sbGVyLWlubmVyLmlzLXJhZGlvOmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKX0udmpzLWNoZWNrLWNvbnRyb2xsZXIgLnZqcy1jaGVjay1jb250cm9sbGVyLWlubmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlcjoxcHggc29saWQgI2JmY2JkOTtib3JkZXItcmFkaXVzOjJweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6MTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yNXMgY3ViaWMtYmV6aWVyKC43MSwtLjQ2LC4yOSwxLjQ2KSxiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgY3ViaWMtYmV6aWVyKC43MSwtLjQ2LC4yOSwxLjQ2KTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMjVzIGN1YmljLWJlemllciguNzEsLS40NiwuMjksMS40NiksYmFja2dyb3VuZC1jb2xvciAuMjVzIGN1YmljLWJlemllciguNzEsLS40NiwuMjksMS40Nil9LnZqcy1jaGVjay1jb250cm9sbGVyIC52anMtY2hlY2stY29udHJvbGxlci1pbm5lcjphZnRlcnstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OlxcXCJcXFwiO2JvcmRlcjoycHggc29saWQgI2ZmZjtib3JkZXItbGVmdDowO2JvcmRlci10b3A6MDtoZWlnaHQ6OHB4O2xlZnQ6NHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSBzY2FsZVkoMCk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGVZKDApO3dpZHRoOjRweDstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBjdWJpYy1iZXppZXIoLjcxLC0uNDYsLjg4LC42KSAuMDVzO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBjdWJpYy1iZXppZXIoLjcxLC0uNDYsLjg4LC42KSAuMDVzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xNXMgY3ViaWMtYmV6aWVyKC43MSwtLjQ2LC44OCwuNikgLjA1czt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMTVzIGN1YmljLWJlemllciguNzEsLS40NiwuODgsLjYpIC4wNXMsIC13ZWJraXQtdHJhbnNmb3JtIC4xNXMgY3ViaWMtYmV6aWVyKC43MSwtLjQ2LC44OCwuNikgLjA1czstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyfS52anMtY2hlY2stY29udHJvbGxlciAudmpzLWNoZWNrLWNvbnRyb2xsZXItaW5uZXIuaXMtcmFkaW97Ym9yZGVyLXJhZGl1czoxMDAlfS52anMtY2hlY2stY29udHJvbGxlciAudmpzLWNoZWNrLWNvbnRyb2xsZXItaW5uZXIuaXMtcmFkaW86YWZ0ZXJ7Ym9yZGVyLXJhZGl1czoxMDAlO2hlaWdodDo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2xlZnQ6NTAlO3RvcDo1MCV9LnZqcy1jaGVjay1jb250cm9sbGVyIC52anMtY2hlY2stY29udHJvbGxlci1vcmlnaW5hbHtvcGFjaXR5OjA7b3V0bGluZTpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6LTE7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWFyZ2luOjB9LnZqcy1jYXJldHN7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtjdXJzb3I6cG9pbnRlcn0udmpzLWNhcmV0cyBzdmd7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAuM3N9LnZqcy1jYXJldHM6aG92ZXJ7Y29sb3I6IzE4OTBmZn0udmpzLWNhcmV0cy1jbG9zZXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9LnZqcy10cmVlLW5vZGV7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtsaW5lLWhlaWdodDoyMHB4fS52anMtdHJlZS1ub2RlLmhhcy1jYXJldHN7cGFkZGluZy1sZWZ0OjE1cHh9LnZqcy10cmVlLW5vZGUuaGFzLWNhcmV0cy5oYXMtc2VsZWN0b3IsLnZqcy10cmVlLW5vZGUuaGFzLXNlbGVjdG9ye3BhZGRpbmctbGVmdDozMHB4fS52anMtdHJlZS1ub2RlLmlzLWhpZ2hsaWdodCwudmpzLXRyZWUtbm9kZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlNmY3ZmZ9LnZqcy10cmVlLW5vZGUgLnZqcy1pbmRlbnR7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0udmpzLXRyZWUtbm9kZSAudmpzLWluZGVudC11bml0e3dpZHRoOjFlbX0udmpzLXRyZWUtbm9kZSAudmpzLWluZGVudC11bml0Lmhhcy1saW5le2JvcmRlci1sZWZ0OjFweCBkYXNoZWQgI2JmY2JkOX0udmpzLW5vZGUtaW5kZXh7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTAwJTttYXJnaW4tcmlnaHQ6NHB4fS52anMtY29sb257d2hpdGUtc3BhY2U6cHJlfS52anMtY29tbWVudHtjb2xvcjojYmZjYmQ5fS52anMtdmFsdWV7d29yZC1icmVhazpicmVhay13b3JkfS52anMtdmFsdWUtbnVsbCwudmpzLXZhbHVlLXVuZGVmaW5lZHtjb2xvcjojZDU1ZmRlfS52anMtdmFsdWUtYm9vbGVhbiwudmpzLXZhbHVlLW51bWJlcntjb2xvcjojMWQ4Y2UwfS52anMtdmFsdWUtc3RyaW5ne2NvbG9yOiMxM2NlNjZ9LnZqcy10cmVle2ZvbnQtZmFtaWx5Ok1vbmFjbyxNZW5sbyxDb25zb2xhcyxCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNHB4O3RleHQtYWxpZ246bGVmdH0udmpzLXRyZWUuaXMtdmlydHVhbHtvdmVyZmxvdzphdXRvfS52anMtdHJlZS5pcy12aXJ0dWFsIC52anMtdHJlZS1ub2Rle3doaXRlLXNwYWNlOm5vd3JhcH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdnVlLWpzb24tcHJldHR5L2xpYi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQixjQUFjLENBQUMseUJBQXlCLGFBQWEsQ0FBQyxzQkFBc0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDLDZEQUE2RCx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQywrRUFBK0UseUNBQWdDLENBQWhDLGlDQUFpQyxDQUFDLDRFQUE0RSwrQ0FBc0MsQ0FBdEMsdUNBQXVDLENBQUMsa0RBQWtELG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLDZCQUFxQixDQUFyQixxQkFBcUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsMEhBQWlILENBQWpILGtIQUFrSCxDQUFDLHdEQUF3RCw4QkFBc0IsQ0FBdEIsc0JBQXNCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMseUNBQWlDLENBQWpDLGlDQUFpQyxDQUFDLFNBQVMsQ0FBQyw0RUFBNEQsQ0FBNUQsb0VBQTRELENBQTVELDREQUE0RCxDQUE1RCx1SEFBNEQsQ0FBQywrQkFBc0IsQ0FBdEIsdUJBQXVCLENBQUMsMkRBQTJELGtCQUFrQixDQUFDLGlFQUFpRSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsU0FBUyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLHdDQUF1QixDQUF2QixnQ0FBdUIsQ0FBdkIsd0JBQXVCLENBQXZCLCtDQUF3QixDQUFDLGtCQUFrQixhQUFhLENBQUMsa0JBQWtCLGdDQUF1QixDQUF2Qix3QkFBd0IsQ0FBQyxlQUFlLG1CQUFZLENBQVosbUJBQVksQ0FBWixZQUFZLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLGlCQUFpQixDQUFDLG1FQUFtRSxpQkFBaUIsQ0FBQyxpREFBaUQsd0JBQXdCLENBQUMsMkJBQTJCLG1CQUFZLENBQVosbUJBQVksQ0FBWixZQUFZLENBQUMsaUJBQWlCLENBQUMsZ0NBQWdDLFNBQVMsQ0FBQyx5Q0FBeUMsOEJBQThCLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLGVBQWUsQ0FBQyxhQUFhLGFBQWEsQ0FBQyxXQUFXLHFCQUFxQixDQUFDLHFDQUFxQyxhQUFhLENBQUMscUNBQXFDLGFBQWEsQ0FBQyxrQkFBa0IsYUFBYSxDQUFDLFVBQVUsb0VBQW9FLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsYUFBYSxDQUFDLG9DQUFvQyxrQkFBa0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnZqcy10cmVlLWJyYWNrZXRze2N1cnNvcjpwb2ludGVyfS52anMtdHJlZS1icmFja2V0czpob3Zlcntjb2xvcjojMTg5MGZmfS52anMtY2hlY2stY29udHJvbGxlcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjB9LnZqcy1jaGVjay1jb250cm9sbGVyLmlzLWNoZWNrZWQgLnZqcy1jaGVjay1jb250cm9sbGVyLWlubmVye2JhY2tncm91bmQtY29sb3I6IzE4OTBmZjtib3JkZXItY29sb3I6IzAwNzZlNH0udmpzLWNoZWNrLWNvbnRyb2xsZXIuaXMtY2hlY2tlZCAudmpzLWNoZWNrLWNvbnRyb2xsZXItaW5uZXIuaXMtY2hlY2tib3g6YWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGVZKDEpfS52anMtY2hlY2stY29udHJvbGxlci5pcy1jaGVja2VkIC52anMtY2hlY2stY29udHJvbGxlci1pbm5lci5pcy1yYWRpbzphZnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSl9LnZqcy1jaGVjay1jb250cm9sbGVyIC52anMtY2hlY2stY29udHJvbGxlci1pbm5lcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXI6MXB4IHNvbGlkICNiZmNiZDk7Ym9yZGVyLXJhZGl1czoycHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjt6LWluZGV4OjE7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjI1cyBjdWJpYy1iZXppZXIoLjcxLC0uNDYsLjI5LDEuNDYpLGJhY2tncm91bmQtY29sb3IgLjI1cyBjdWJpYy1iZXppZXIoLjcxLC0uNDYsLjI5LDEuNDYpfS52anMtY2hlY2stY29udHJvbGxlciAudmpzLWNoZWNrLWNvbnRyb2xsZXItaW5uZXI6YWZ0ZXJ7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OlxcXCJcXFwiO2JvcmRlcjoycHggc29saWQgI2ZmZjtib3JkZXItbGVmdDowO2JvcmRlci10b3A6MDtoZWlnaHQ6OHB4O2xlZnQ6NHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxcHg7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGVZKDApO3dpZHRoOjRweDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMTVzIGN1YmljLWJlemllciguNzEsLS40NiwuODgsLjYpIC4wNXM7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXJ9LnZqcy1jaGVjay1jb250cm9sbGVyIC52anMtY2hlY2stY29udHJvbGxlci1pbm5lci5pcy1yYWRpb3tib3JkZXItcmFkaXVzOjEwMCV9LnZqcy1jaGVjay1jb250cm9sbGVyIC52anMtY2hlY2stY29udHJvbGxlci1pbm5lci5pcy1yYWRpbzphZnRlcntib3JkZXItcmFkaXVzOjEwMCU7aGVpZ2h0OjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bGVmdDo1MCU7dG9wOjUwJX0udmpzLWNoZWNrLWNvbnRyb2xsZXIgLnZqcy1jaGVjay1jb250cm9sbGVyLW9yaWdpbmFse29wYWNpdHk6MDtvdXRsaW5lOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46MH0udmpzLWNhcmV0c3twb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2N1cnNvcjpwb2ludGVyfS52anMtY2FyZXRzIHN2Z3t0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3N9LnZqcy1jYXJldHM6aG92ZXJ7Y29sb3I6IzE4OTBmZn0udmpzLWNhcmV0cy1jbG9zZXt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9LnZqcy10cmVlLW5vZGV7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjIwcHh9LnZqcy10cmVlLW5vZGUuaGFzLWNhcmV0c3twYWRkaW5nLWxlZnQ6MTVweH0udmpzLXRyZWUtbm9kZS5oYXMtY2FyZXRzLmhhcy1zZWxlY3RvciwudmpzLXRyZWUtbm9kZS5oYXMtc2VsZWN0b3J7cGFkZGluZy1sZWZ0OjMwcHh9LnZqcy10cmVlLW5vZGUuaXMtaGlnaGxpZ2h0LC52anMtdHJlZS1ub2RlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U2ZjdmZn0udmpzLXRyZWUtbm9kZSAudmpzLWluZGVudHtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmV9LnZqcy10cmVlLW5vZGUgLnZqcy1pbmRlbnQtdW5pdHt3aWR0aDoxZW19LnZqcy10cmVlLW5vZGUgLnZqcy1pbmRlbnQtdW5pdC5oYXMtbGluZXtib3JkZXItbGVmdDoxcHggZGFzaGVkICNiZmNiZDl9LnZqcy1ub2RlLWluZGV4e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjEwMCU7bWFyZ2luLXJpZ2h0OjRweH0udmpzLWNvbG9ue3doaXRlLXNwYWNlOnByZX0udmpzLWNvbW1lbnR7Y29sb3I6I2JmY2JkOX0udmpzLXZhbHVle3dvcmQtYnJlYWs6YnJlYWstd29yZH0udmpzLXZhbHVlLW51bGwsLnZqcy12YWx1ZS11bmRlZmluZWR7Y29sb3I6I2Q1NWZkZX0udmpzLXZhbHVlLWJvb2xlYW4sLnZqcy12YWx1ZS1udW1iZXJ7Y29sb3I6IzFkOGNlMH0udmpzLXZhbHVlLXN0cmluZ3tjb2xvcjojMTNjZTY2fS52anMtdHJlZXtmb250LWZhbWlseTpNb25hY28sTWVubG8sQ29uc29sYXMsQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLG1vbm9zcGFjZTtmb250LXNpemU6MTRweDt0ZXh0LWFsaWduOmxlZnR9LnZqcy10cmVlLmlzLXZpcnR1YWx7b3ZlcmZsb3c6YXV0b30udmpzLXRyZWUuaXMtdmlydHVhbCAudmpzLXRyZWUtbm9kZXt3aGl0ZS1zcGFjZTpub3dyYXB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBiYXNpYyBjaGFubmVsLlxyXG4gKi9cbnZhciBDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbm5lbCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwibGlzdGVuRm9yV2hpc3BlclwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhIHdoaXNwZXIgZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5vdGlmaWNhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLklsbHVtaW5hdGVcXFxcTm90aWZpY2F0aW9uc1xcXFxFdmVudHNcXFxcQnJvYWRjYXN0Tm90aWZpY2F0aW9uQ3JlYXRlZCcsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYSB3aGlzcGVyIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nRm9yV2hpc3BlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3BMaXN0ZW5pbmcoJy5jbGllbnQtJyArIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoYW5uZWw7XG59KCk7XG5cbi8qKlxyXG4gKiBFdmVudCBuYW1lIGZvcm1hdHRlclxyXG4gKi9cbnZhciBFdmVudEZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gRXZlbnRGb3JtYXR0ZXIobmFtZXNwYWNlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50Rm9ybWF0dGVyKTtcblxuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlOyAvL1xuICB9XG4gIC8qKlxyXG4gICAqIEZvcm1hdCB0aGUgZ2l2ZW4gZXZlbnQgbmFtZS5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudEZvcm1hdHRlciwgW3tcbiAgICBrZXk6IFwiZm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmNoYXJBdCgwKSA9PT0gJy4nIHx8IGV2ZW50LmNoYXJBdCgwKSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIHJldHVybiBldmVudC5zdWJzdHIoMSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5uYW1lc3BhY2UgKyAnLicgKyBldmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnJlcGxhY2UoL1xcLi9nLCAnXFxcXCcpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgZXZlbnQgbmFtZXNwYWNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXROYW1lc3BhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TmFtZXNwYWNlKHZhbHVlKSB7XG4gICAgICB0aGlzLm5hbWVzcGFjZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudEZvcm1hdHRlcjtcbn0oKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBjaGFubmVsLlxyXG4gKi9cblxudmFyIFB1c2hlckNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gIF9pbmhlcml0cyhQdXNoZXJDaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJDaGFubmVsKTtcblxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXHJcbiAgICovXG4gIGZ1bmN0aW9uIFB1c2hlckNoYW5uZWwocHVzaGVyLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuXG4gICAgX3RoaXMuc3Vic2NyaWJlKCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogU3Vic2NyaWJlIHRvIGEgUHVzaGVyIGNoYW5uZWwuXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgZnJvbSBhIFB1c2hlciBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFsbCBldmVudHMgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblRvQWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlblRvQWxsKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZF9nbG9iYWwoZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmIChldmVudC5zdGFydHNXaXRoKCdwdXNoZXI6JykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gX3RoaXMyLm9wdGlvbnMubmFtZXNwYWNlLnJlcGxhY2UoL1xcLi9nLCAnXFxcXCcpO1xuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRFdmVudCA9IGV2ZW50LnN0YXJ0c1dpdGgobmFtZXNwYWNlKSA/IGV2ZW50LnN1YnN0cmluZyhuYW1lc3BhY2UubGVuZ3RoICsgMSkgOiAnLicgKyBldmVudDtcbiAgICAgICAgY2FsbGJhY2soZm9ybWF0dGVkRXZlbnQsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGFsbCBldmVudHMgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdUb0FsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9BbGwoY2FsbGJhY2spIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZF9nbG9iYWwoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBzdWNjZWVkcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVkKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBlcnJvciBvY2N1cnMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX2Vycm9yJywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICBjYWxsYmFjayhzdGF0dXMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5iaW5kKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBQdXNoZXIgcHJpdmF0ZSBjaGFubmVsLlxyXG4gKi9cblxudmFyIFB1c2hlclByaXZhdGVDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlclByaXZhdGVDaGFubmVsKTtcblxuICBmdW5jdGlvbiBQdXNoZXJQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFB1c2hlclByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGEgd2hpc3BlciBldmVudCB0byBvdGhlciBjbGllbnRzIGluIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcihcImNsaWVudC1cIi5jb25jYXQoZXZlbnROYW1lKSwgZGF0YSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyUHJpdmF0ZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIHByaXZhdGUgY2hhbm5lbC5cclxuICovXG5cbnZhciBQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgX2luaGVyaXRzKFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwid2hpc3BlclwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIHdoaXNwZXIgZXZlbnQgdG8gb3RoZXIgY2xpZW50cyBpbiB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoXCJjbGllbnQtXCIuY29uY2F0KGV2ZW50TmFtZSksIGRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsO1xufShQdXNoZXJDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBwcmVzZW5jZSBjaGFubmVsLlxyXG4gKi9cblxudmFyIFB1c2hlclByZXNlbmNlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgX2luaGVyaXRzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcblxuICBmdW5jdGlvbiBQdXNoZXJQcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJoZXJlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhPYmplY3Qua2V5cyhkYXRhLm1lbWJlcnMpLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBkYXRhLm1lbWJlcnNba107XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImpvaW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHVzaGVyOm1lbWJlcl9hZGRlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGEgd2hpc3BlciBldmVudCB0byBvdGhlciBjbGllbnRzIGluIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoXCJjbGllbnQtXCIuY29uY2F0KGV2ZW50TmFtZSksIGRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHVzaGVyOm1lbWJlcl9yZW1vdmVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXJQcmVzZW5jZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgU29ja2V0SW9DaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoU29ja2V0SW9DaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTb2NrZXRJb0NoYW5uZWwpO1xuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gU29ja2V0SW9DaGFubmVsKHNvY2tldCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0NoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAvKipcclxuICAgICAqIFRoZSBldmVudCBjYWxsYmFja3MgYXBwbGllZCB0byB0aGUgc29ja2V0LlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5ldmVudHMgPSB7fTtcbiAgICAvKipcclxuICAgICAqIFVzZXIgc3VwcGxpZWQgY2FsbGJhY2tzIGZvciBldmVudHMgb24gdGhpcyBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuXG4gICAgX3RoaXMuc3Vic2NyaWJlKCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogU3Vic2NyaWJlIHRvIGEgU29ja2V0LmlvIGNoYW5uZWwuXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU29ja2V0SW9DaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3Vic2NyaWJlJywge1xuICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIGNoYW5uZWwgYW5kIHViaW5kIGV2ZW50IGNhbGxiYWNrcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5zdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndW5zdWJzY3JpYmUnLCB7XG4gICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVuYmluZEV2ZW50KHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBzdWNjZWVkcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVkKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBjYWxsYmFjayhzb2NrZXQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhlIGNoYW5uZWwncyBzb2NrZXQgdG8gYW4gZXZlbnQgYW5kIHN0b3JlIHRoZSBjYWxsYmFjay5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdIHx8IFtdO1xuXG4gICAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBmdW5jdGlvbiAoY2hhbm5lbCwgZGF0YSkge1xuICAgICAgICAgIGlmIChfdGhpczIubmFtZSA9PT0gY2hhbm5lbCAmJiBfdGhpczIubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgX3RoaXMyLmxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNiKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCB0aGlzLmV2ZW50c1tldmVudF0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBVbmJpbmQgdGhlIGNoYW5uZWwncyBzb2NrZXQgZnJvbSBhbGwgc3RvcmVkIGV2ZW50IGNhbGxiYWNrcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMzLnVuYmluZEV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVuYmluZCB0aGUgbGlzdGVuZXJzIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdIHx8IFtdO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZpbHRlcihmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICByZXR1cm4gY2IgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYWxsYmFjayB8fCB0aGlzLmxpc3RlbmVyc1tldmVudF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICB0aGlzLnNvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgdGhpcy5ldmVudHNbZXZlbnRdKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29ja2V0SW9DaGFubmVsO1xufShDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFNvY2tldC5pbyBwcml2YXRlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NvY2tldElvQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgX1NvY2tldElvQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuICBmdW5jdGlvbiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGEgd2hpc3BlciBldmVudCB0byBvdGhlciBjbGllbnRzIGluIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2NsaWVudCBldmVudCcsIHtcbiAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICBldmVudDogXCJjbGllbnQtXCIuY29uY2F0KGV2ZW50TmFtZSksXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldElvUHJpdmF0ZUNoYW5uZWw7XG59KFNvY2tldElvQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBTb2NrZXQuaW8gcHJlc2VuY2UgY2hhbm5lbC5cclxuICovXG5cbnZhciBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NvY2tldElvUHJpdmF0ZUNoYW5uKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgX1NvY2tldElvUHJpdmF0ZUNoYW5uKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcblxuICBmdW5jdGlvbiBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJoZXJlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHJlc2VuY2U6c3Vic2NyaWJlZCcsIGZ1bmN0aW9uIChtZW1iZXJzKSB7XG4gICAgICAgIGNhbGxiYWNrKG1lbWJlcnMubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0udXNlcl9pbmZvO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJqb2luaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmpvaW5pbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIHdoaXNwZXIgZXZlbnQgdG8gb3RoZXIgY2xpZW50cyBpbiB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2hpc3BlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnY2xpZW50IGV2ZW50Jywge1xuICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgIGV2ZW50OiBcImNsaWVudC1cIi5jb25jYXQoZXZlbnROYW1lKSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIHNvbWVvbmUgbGVhdmluZyB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwcmVzZW5jZTpsZWF2aW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVtYmVyLnVzZXJfaW5mbyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbDtcbn0oU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgTnVsbENoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gIF9pbmhlcml0cyhOdWxsQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTnVsbENoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIE51bGxDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVsbENoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlIHRvIGEgY2hhbm5lbC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN1YnNjcmliZSgpIHsvL1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlIGZyb20gYSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHsvL1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFsbCBldmVudHMgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblRvQWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlblRvQWxsKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgYSBzdWJzY3JpcHRpb24gc3VjY2VlZHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN1YnNjcmliZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlZChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhbiBlcnJvciBvY2N1cnMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVsbENoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgbnVsbCBwcml2YXRlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgTnVsbFByaXZhdGVDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTnVsbENoYW5uZWwpIHtcbiAgX2luaGVyaXRzKE51bGxQcml2YXRlQ2hhbm5lbCwgX051bGxDaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE51bGxQcml2YXRlQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByaXZhdGVDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE51bGxQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwid2hpc3BlclwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIHdoaXNwZXIgZXZlbnQgdG8gb3RoZXIgY2xpZW50cyBpbiB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVsbFByaXZhdGVDaGFubmVsO1xufShOdWxsQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIHByZXNlbmNlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgTnVsbFByZXNlbmNlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX051bGxDaGFubmVsKSB7XG4gIF9pbmhlcml0cyhOdWxsUHJlc2VuY2VDaGFubmVsLCBfTnVsbENoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTnVsbFByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbFByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVsbFByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwiaGVyZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSB0aGUgbWVtYmVyIGxpc3QgY2hhbmdlcy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJqb2luaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNlbmQgYSB3aGlzcGVyIGV2ZW50IHRvIG90aGVyIGNsaWVudHMgaW4gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndoaXNwZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdWxsUHJlc2VuY2VDaGFubmVsO1xufShOdWxsQ2hhbm5lbCk7XG5cbnZhciBDb25uZWN0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXHJcbiAgICovXG4gIGZ1bmN0aW9uIENvbm5lY3RvcihvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3Rvcik7XG5cbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgY29ubmVjdG9yIG9wdGlvbnMuXHJcbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgaGVhZGVyczoge31cbiAgICAgIH0sXG4gICAgICBhdXRoRW5kcG9pbnQ6ICcvYnJvYWRjYXN0aW5nL2F1dGgnLFxuICAgICAgdXNlckF1dGhlbnRpY2F0aW9uOiB7XG4gICAgICAgIGVuZHBvaW50OiAnL2Jyb2FkY2FzdGluZy91c2VyLWF1dGgnLFxuICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgfSxcbiAgICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbiAgICAgIGNzcmZUb2tlbjogbnVsbCxcbiAgICAgIGJlYXJlclRva2VuOiBudWxsLFxuICAgICAgaG9zdDogbnVsbCxcbiAgICAgIGtleTogbnVsbCxcbiAgICAgIG5hbWVzcGFjZTogJ0FwcC5FdmVudHMnXG4gICAgfTtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cbiAgLyoqXHJcbiAgICogTWVyZ2UgdGhlIGN1c3RvbSBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHRzLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENvbm5lY3RvciwgW3tcbiAgICBrZXk6IFwic2V0T3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3NyZlRva2VuKCk7XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0aC5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IHRva2VuO1xuICAgICAgICB0aGlzLm9wdGlvbnMudXNlckF1dGhlbnRpY2F0aW9uLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW47XG4gICAgICB9XG5cbiAgICAgIHRva2VuID0gdGhpcy5vcHRpb25zLmJlYXJlclRva2VuO1xuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dGguaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdG9rZW47XG4gICAgICAgIHRoaXMub3B0aW9ucy51c2VyQXV0aGVudGljYXRpb24uaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdG9rZW47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEV4dHJhY3QgdGhlIENTUkYgdG9rZW4gZnJvbSB0aGUgcGFnZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY3NyZlRva2VuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNzcmZUb2tlbigpIHtcbiAgICAgIHZhciBzZWxlY3RvcjtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvd1snTGFyYXZlbCddICYmIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbikge1xuICAgICAgICByZXR1cm4gd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY3NyZlRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3NyZlRva2VuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nICYmIChzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKSkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29ubmVjdG9yO1xufSgpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgY29ubmVjdG9yIHRvIFB1c2hlci5cclxuICovXG5cbnZhciBQdXNoZXJDb25uZWN0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgX2luaGVyaXRzKFB1c2hlckNvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJDb25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlckNvbm5lY3RvcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cclxuICAgICAqL1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZnJlc2ggUHVzaGVyIGNvbm5lY3Rpb24uXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jbGllbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucHVzaGVyID0gdGhpcy5vcHRpb25zLmNsaWVudDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLlB1c2hlcikge1xuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyB0aGlzLm9wdGlvbnMuUHVzaGVyKHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIodGhpcy5vcHRpb25zLmtleSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTaWduIGluIHRoZSB1c2VyIHZpYSBQdXNoZXIgdXNlciBhdXRoZW50aWNhdGlvbiAoaHR0cHM6Ly9wdXNoZXIuY29tL2RvY3MvY2hhbm5lbHMvdXNpbmdfY2hhbm5lbHMvdXNlci1hdXRoZW50aWNhdGlvbi8pLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzaWduaW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbmluKCkge1xuICAgICAgdGhpcy5wdXNoZXIuc2lnbmluKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFB1c2hlckNoYW5uZWwodGhpcy5wdXNoZXIsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcml2YXRlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgZW5jcnlwdGVkIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLWVuY3J5cHRlZC0nICsgbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS1lbmNyeXB0ZWQtJyArIG5hbWVdID0gbmV3IFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS1lbmNyeXB0ZWQtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLWVuY3J5cHRlZC0nICsgbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcmVzZW5jZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcml2YXRlLWVuY3J5cHRlZC0nICsgbmFtZSwgJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgIGNoYW5uZWxzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIF90aGlzMi5sZWF2ZUNoYW5uZWwobmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAodGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zb2NrZXRfaWQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdCBQdXNoZXIgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXJDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNyZWF0ZXMgYSBjb25ubmVjdG9yIHRvIGEgU29ja2V0LmlvIHNlcnZlci5cclxuICovXG5cbnZhciBTb2NrZXRJb0Nvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICBfaW5oZXJpdHMoU29ja2V0SW9Db25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU29ja2V0SW9Db25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIFNvY2tldElvQ29ubmVjdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8qKlxyXG4gICAgICogQWxsIG9mIHRoZSBzdWJzY3JpYmVkIGNoYW5uZWwgbmFtZXMuXHJcbiAgICAgKi9cblxuICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGZyZXNoIFNvY2tldC5pbyBjb25uZWN0aW9uLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldElvQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGlvID0gdGhpcy5nZXRTb2NrZXRJTygpO1xuICAgICAgdGhpcy5zb2NrZXQgPSBpbyh0aGlzLm9wdGlvbnMuaG9zdCwgdGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoX3RoaXMyLmNoYW5uZWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgICAgICAgY2hhbm5lbC5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLnNvY2tldDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgc29ja2V0LmlvIG1vZHVsZSBmcm9tIGdsb2JhbCBzY29wZSBvciBvcHRpb25zLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTb2NrZXRJT1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb2NrZXRJTygpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBpbztcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb2NrZXQuaW8gY2xpZW50IG5vdCBmb3VuZC4gU2hvdWxkIGJlIGdsb2JhbGx5IGF2YWlsYWJsZSBvciBwYXNzZWQgdmlhIG9wdGlvbnMuY2xpZW50Jyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFNvY2tldElvQ2hhbm5lbCh0aGlzLnNvY2tldCwgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByaXZhdGVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByZXNlbmNlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdID0gbmV3IFNvY2tldElvUHJlc2VuY2VDaGFubmVsKHRoaXMuc29ja2V0LCAncHJlc2VuY2UtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGNoYW5uZWxzID0gW25hbWUsICdwcml2YXRlLScgKyBuYW1lLCAncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgY2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBfdGhpczMubGVhdmVDaGFubmVsKG5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LmlkO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgU29ja2V0aW8gY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXRJb0Nvbm5lY3Rvcjtcbn0oQ29ubmVjdG9yKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIG51bGwgY29ubmVjdG9yLlxyXG4gKi9cblxudmFyIE51bGxDb25uZWN0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgX2luaGVyaXRzKE51bGxDb25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTnVsbENvbm5lY3Rvcik7XG5cbiAgZnVuY3Rpb24gTnVsbENvbm5lY3RvcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbENvbm5lY3Rvcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8qKlxyXG4gICAgICogQWxsIG9mIHRoZSBzdWJzY3JpYmVkIGNoYW5uZWwgbmFtZXMuXHJcbiAgICAgKi9cblxuICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGZyZXNoIGNvbm5lY3Rpb24uXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTnVsbENvbm5lY3RvciwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkgey8vXG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcml2YXRlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcml2YXRlQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgZW5jcnlwdGVkIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsUHJpdmF0ZUNoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByZXNlbmNlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsUHJlc2VuY2VDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7Ly9cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlQ2hhbm5lbChuYW1lKSB7Ly9cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuICdmYWtlLXNvY2tldC1pZCc7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdCB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkgey8vXG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE51bGxDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGlzIHRoZSBwcmltYXJ5IEFQSSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBicm9hZGNhc3RpbmcuXHJcbiAqL1xuXG52YXIgRWNobyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gRWNobyhvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVjaG8pO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmNvbm5lY3QoKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLndpdGhvdXRJbnRlcmNlcHRvcnMpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcmNlcHRvcnMoKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEVjaG8sIFt7XG4gICAga2V5OiBcImNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChfY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoX2NoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdwdXNoZXInKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ3NvY2tldC5pbycpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgU29ja2V0SW9Db25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdudWxsJykge1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBOdWxsQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyB0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIodGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IGZyb20gdGhlIEVjaG8gc2VydmVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICB0aGlzLmNvbm5lY3Rvci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJqb2luXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW4oY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByZXNlbmNlQ2hhbm5lbChjaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKGNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlQ2hhbm5lbChjaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSBhbGwgY2hhbm5lbHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlQWxsQ2hhbm5lbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVBbGxDaGFubmVscygpIHtcbiAgICAgIGZvciAodmFyIGNoYW5uZWwgaW4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbHMpIHtcbiAgICAgICAgdGhpcy5sZWF2ZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IubGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByaXZhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3ByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgZW5jcnlwdGVkIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5jcnlwdGVkUHJpdmF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNyeXB0ZWRQcml2YXRlKGNoYW5uZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5lbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbChjaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIFNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnNvY2tldElkKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgM3JkIHBhcnR5IHJlcXVlc3QgaW50ZXJjZXB0aW9ycy4gVGhlc2UgYXJlIHVzZWQgdG8gYXV0b21hdGljYWxseVxyXG4gICAgICogc2VuZCBhIGNvbm5lY3Rpb25zIHNvY2tldCBpZCB0byBhIExhcmF2ZWwgYXBwIHdpdGggYSBYLVNvY2tldC1JZCBoZWFkZXIuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlZ2lzdGVySW50ZXJjZXB0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJjZXB0b3JzKCkge1xuICAgICAgaWYgKHR5cGVvZiBWdWUgPT09ICdmdW5jdGlvbicgJiYgVnVlLmh0dHApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGF4aW9zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgodHlwZW9mIFR1cmJvID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoVHVyYm8pKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlclR1cmJvUmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBWdWUgSFRUUCBpbnRlcmNlcHRvciB0byBhZGQgdGhlIFgtU29ja2V0LUlEIGhlYWRlci5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICBpZiAoX3RoaXMuc29ja2V0SWQoKSkge1xuICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtU29ja2V0LUlEJywgX3RoaXMuc29ja2V0SWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhbiBBeGlvcyBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgaWYgKF90aGlzMi5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtU29ja2V0LUlkJ10gPSBfdGhpczIuc29ja2V0SWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBqUXVlcnkgQWpheFByZWZpbHRlciB0byBhZGQgdGhlIFgtU29ja2V0LUlEIGhlYWRlci5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVnaXN0ZXJqUXVlcnlBamF4U2V0dXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiBqUXVlcnkuYWpheCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBqUXVlcnkuYWpheFByZWZpbHRlcihmdW5jdGlvbiAob3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCB4aHIpIHtcbiAgICAgICAgICBpZiAoX3RoaXMzLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVNvY2tldC1JZCcsIF90aGlzMy5zb2NrZXRJZCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIHRoZSBUdXJibyBSZXF1ZXN0IGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWdpc3RlclR1cmJvUmVxdWVzdEludGVyY2VwdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVHVyYm9SZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86YmVmb3JlLWZldGNoLXJlcXVlc3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZGV0YWlsLmZldGNoT3B0aW9ucy5oZWFkZXJzWydYLVNvY2tldC1JZCddID0gX3RoaXM0LnNvY2tldElkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRWNobztcbn0oKTtcblxuZXhwb3J0IHsgQ2hhbm5lbCwgRWNobyBhcyBkZWZhdWx0IH07XG4iLCIvKiFcbiAqIFB1c2hlciBKYXZhU2NyaXB0IExpYnJhcnkgdjguMy4wXG4gKiBodHRwczovL3B1c2hlci5jb20vXG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFB1c2hlclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbmNlLlxuICovXG5cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlB1c2hlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQdXNoZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBDb3B5cmlnaHQgKEMpIDIwMTYgRG1pdHJ5IENoZXN0bnlraFxuLy8gTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGFja2FnZSBiYXNlNjQgaW1wbGVtZW50cyBCYXNlNjQgZW5jb2RpbmcgYW5kIGRlY29kaW5nLlxuICovXG4vLyBJbnZhbGlkIGNoYXJhY3RlciB1c2VkIGluIGRlY29kaW5nIHRvIGluZGljYXRlXG4vLyB0aGF0IHRoZSBjaGFyYWN0ZXIgdG8gZGVjb2RlIGlzIG91dCBvZiByYW5nZSBvZlxuLy8gYWxwaGFiZXQgYW5kIGNhbm5vdCBiZSBkZWNvZGVkLlxudmFyIElOVkFMSURfQllURSA9IDI1Njtcbi8qKlxuICogSW1wbGVtZW50cyBzdGFuZGFyZCBCYXNlNjQgZW5jb2RpbmcuXG4gKlxuICogT3BlcmF0ZXMgaW4gY29uc3RhbnQgdGltZS5cbiAqL1xudmFyIENvZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE8oZGNoZXN0KTogbWV0aG9kcyB0byBlbmNvZGUgY2h1bmstYnktY2h1bmsuXG4gICAgZnVuY3Rpb24gQ29kZXIoX3BhZGRpbmdDaGFyYWN0ZXIpIHtcbiAgICAgICAgaWYgKF9wYWRkaW5nQ2hhcmFjdGVyID09PSB2b2lkIDApIHsgX3BhZGRpbmdDaGFyYWN0ZXIgPSBcIj1cIjsgfVxuICAgICAgICB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyID0gX3BhZGRpbmdDaGFyYWN0ZXI7XG4gICAgfVxuICAgIENvZGVyLnByb3RvdHlwZS5lbmNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAobGVuZ3RoICogOCArIDUpIC8gNiB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChsZW5ndGggKyAyKSAvIDMgKiA0IHwgMDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgb3V0ID0gXCJcIjtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGRhdGEubGVuZ3RoIC0gMjsgaSArPSAzKSB7XG4gICAgICAgICAgICB2YXIgYyA9IChkYXRhW2ldIDw8IDE2KSB8IChkYXRhW2kgKyAxXSA8PCA4KSB8IChkYXRhW2kgKyAyXSk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMyAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDIgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAxICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMCAqIDYpICYgNjMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZWZ0ID0gZGF0YS5sZW5ndGggLSBpO1xuICAgICAgICBpZiAobGVmdCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjID0gKGRhdGFbaV0gPDwgMTYpIHwgKGxlZnQgPT09IDIgPyBkYXRhW2kgKyAxXSA8PCA4IDogMCk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMyAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDIgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIGlmIChsZWZ0ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDEgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyIHx8IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fcGFkZGluZ0NoYXJhY3RlciB8fCBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUubWF4RGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKGxlbmd0aCAqIDYgKyA3KSAvIDggfCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGggLyA0ICogMyB8IDA7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuZGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heERlY29kZWRMZW5ndGgocy5sZW5ndGggLSB0aGlzLl9nZXRQYWRkaW5nTGVuZ3RoKHMpKTtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAocy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFkZGluZ0xlbmd0aCA9IHRoaXMuX2dldFBhZGRpbmdMZW5ndGgocyk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzLmxlbmd0aCAtIHBhZGRpbmdMZW5ndGg7XG4gICAgICAgIHZhciBvdXQgPSBuZXcgVWludDhBcnJheSh0aGlzLm1heERlY29kZWRMZW5ndGgobGVuZ3RoKSk7XG4gICAgICAgIHZhciBvcCA9IDA7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGhhdmVCYWQgPSAwO1xuICAgICAgICB2YXIgdjAgPSAwLCB2MSA9IDAsIHYyID0gMCwgdjMgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aCAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgdjAgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMCkpO1xuICAgICAgICAgICAgdjEgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMSkpO1xuICAgICAgICAgICAgdjIgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMikpO1xuICAgICAgICAgICAgdjMgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMykpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYwIDw8IDIpIHwgKHYxID4+PiA0KTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MSA8PCA0KSB8ICh2MiA+Pj4gMik7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjIgPDwgNikgfCB2MztcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjAgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYxICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MiAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjMgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB2MCA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgIHYxID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDEpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MCA8PCAyKSB8ICh2MSA+Pj4gNCk7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYwICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MSAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgIHYyID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDIpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MSA8PCA0KSB8ICh2MiA+Pj4gMik7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYyICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMykge1xuICAgICAgICAgICAgdjMgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMykpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYyIDw8IDYpIHwgdjM7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYzICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXZlQmFkICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYXNlNjRDb2RlcjogaW5jb3JyZWN0IGNoYXJhY3RlcnMgZm9yIGRlY29kaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICAvLyBTdGFuZGFyZCBlbmNvZGluZyBoYXZlIHRoZSBmb2xsb3dpbmcgZW5jb2RlZC9kZWNvZGVkIHJhbmdlcyxcbiAgICAvLyB3aGljaCB3ZSBuZWVkIHRvIGNvbnZlcnQgYmV0d2Vlbi5cbiAgICAvL1xuICAgIC8vIEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaIGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6IDAxMjM0NTY3ODkgICsgICAvXG4gICAgLy8gSW5kZXg6ICAgMCAtIDI1ICAgICAgICAgICAgICAgICAgICAyNiAtIDUxICAgICAgICAgICAgICA1MiAtIDYxICAgNjIgIDYzXG4gICAgLy8gQVNDSUk6ICA2NSAtIDkwICAgICAgICAgICAgICAgICAgICA5NyAtIDEyMiAgICAgICAgICAgICA0OCAtIDU3ICAgNDMgIDQ3XG4gICAgLy9cbiAgICAvLyBFbmNvZGUgNiBiaXRzIGluIGIgaW50byBhIG5ldyBjaGFyYWN0ZXIuXG4gICAgQ29kZXIucHJvdG90eXBlLl9lbmNvZGVCeXRlID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgLy8gRW5jb2RpbmcgdXNlcyBjb25zdGFudCB0aW1lIG9wZXJhdGlvbnMgYXMgZm9sbG93czpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMS4gRGVmaW5lIGNvbXBhcmlzb24gb2YgQSB3aXRoIEIgdXNpbmcgKEEgLSBCKSA+Pj4gODpcbiAgICAgICAgLy8gICAgICAgICAgaWYgQSA+IEIsIHRoZW4gcmVzdWx0IGlzIHBvc2l0aXZlIGludGVnZXJcbiAgICAgICAgLy8gICAgICAgICAgaWYgQSA8PSBCLCB0aGVuIHJlc3VsdCBpcyAwXG4gICAgICAgIC8vXG4gICAgICAgIC8vIDIuIERlZmluZSBzZWxlY3Rpb24gb2YgQyBvciAwIHVzaW5nIGJpdHdpc2UgQU5EOiBYICYgQzpcbiAgICAgICAgLy8gICAgICAgICAgaWYgWCA9PSAwLCB0aGVuIHJlc3VsdCBpcyAwXG4gICAgICAgIC8vICAgICAgICAgIGlmIFggIT0gMCwgdGhlbiByZXN1bHQgaXMgQ1xuICAgICAgICAvL1xuICAgICAgICAvLyAzLiBTdGFydCB3aXRoIHRoZSBzbWFsbGVzdCBjb21wYXJpc29uIChiID49IDApLCB3aGljaCBpcyBhbHdheXNcbiAgICAgICAgLy8gICAgdHJ1ZSwgc28gc2V0IHRoZSByZXN1bHQgdG8gdGhlIHN0YXJ0aW5nIEFTQ0lJIHZhbHVlICg2NSkuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIDQuIENvbnRpbnVlIGNvbXBhcmluZyBiIHRvIGhpZ2hlciBBU0NJSSB2YWx1ZXMsIGFuZCBzZWxlY3RpbmdcbiAgICAgICAgLy8gICAgemVybyBpZiBjb21wYXJpc29uIGlzbid0IHRydWUsIG90aGVyd2lzZSBzZWxlY3RpbmcgYSB2YWx1ZVxuICAgICAgICAvLyAgICB0byBhZGQgdG8gcmVzdWx0LCB3aGljaDpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgYSkgdW5kb2VzIHRoZSBwcmV2aW91cyBhZGRpdGlvblxuICAgICAgICAvLyAgICAgICAgICBiKSBwcm92aWRlcyBuZXcgdmFsdWUgdG8gYWRkXG4gICAgICAgIC8vXG4gICAgICAgIHZhciByZXN1bHQgPSBiO1xuICAgICAgICAvLyBiID49IDBcbiAgICAgICAgcmVzdWx0ICs9IDY1O1xuICAgICAgICAvLyBiID4gMjVcbiAgICAgICAgcmVzdWx0ICs9ICgoMjUgLSBiKSA+Pj4gOCkgJiAoKDAgLSA2NSkgLSAyNiArIDk3KTtcbiAgICAgICAgLy8gYiA+IDUxXG4gICAgICAgIHJlc3VsdCArPSAoKDUxIC0gYikgPj4+IDgpICYgKCgyNiAtIDk3KSAtIDUyICsgNDgpO1xuICAgICAgICAvLyBiID4gNjFcbiAgICAgICAgcmVzdWx0ICs9ICgoNjEgLSBiKSA+Pj4gOCkgJiAoKDUyIC0gNDgpIC0gNjIgKyA0Myk7XG4gICAgICAgIC8vIGIgPiA2MlxuICAgICAgICByZXN1bHQgKz0gKCg2MiAtIGIpID4+PiA4KSAmICgoNjIgLSA0MykgLSA2MyArIDQ3KTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocmVzdWx0KTtcbiAgICB9O1xuICAgIC8vIERlY29kZSBhIGNoYXJhY3RlciBjb2RlIGludG8gYSBieXRlLlxuICAgIC8vIE11c3QgcmV0dXJuIDI1NiBpZiBjaGFyYWN0ZXIgaXMgb3V0IG9mIGFscGhhYmV0IHJhbmdlLlxuICAgIENvZGVyLnByb3RvdHlwZS5fZGVjb2RlQ2hhciA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIC8vIERlY29kaW5nIHdvcmtzIHNpbWlsYXIgdG8gZW5jb2Rpbmc6IHVzaW5nIHRoZSBzYW1lIGNvbXBhcmlzb25cbiAgICAgICAgLy8gZnVuY3Rpb24sIGJ1dCBub3cgaXQgd29ya3Mgb24gcmFuZ2VzOiByZXN1bHQgaXMgYWx3YXlzIGluY3JlbWVudGVkXG4gICAgICAgIC8vIGJ5IHZhbHVlLCBidXQgdGhpcyB2YWx1ZSBiZWNvbWVzIHplcm8gaWYgdGhlIHJhbmdlIGlzIG5vdFxuICAgICAgICAvLyBzYXRpc2ZpZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIERlY29kaW5nIHN0YXJ0cyB3aXRoIGludmFsaWQgdmFsdWUsIDI1Niwgd2hpY2ggaXMgdGhlblxuICAgICAgICAvLyBzdWJ0cmFjdGVkIHdoZW4gdGhlIHJhbmdlIGlzIHNhdGlzZmllZC4gSWYgbm9uZSBvZiB0aGUgcmFuZ2VzXG4gICAgICAgIC8vIGFwcGx5LCB0aGUgZnVuY3Rpb24gcmV0dXJucyAyNTYsIHdoaWNoIGlzIHRoZW4gY2hlY2tlZCBieVxuICAgICAgICAvLyB0aGUgY2FsbGVyIHRvIHRocm93IGVycm9yLlxuICAgICAgICB2YXIgcmVzdWx0ID0gSU5WQUxJRF9CWVRFOyAvLyBzdGFydCB3aXRoIGludmFsaWQgY2hhcmFjdGVyXG4gICAgICAgIC8vIGMgPT0gNDMgKGMgPiA0MiBhbmQgYyA8IDQ0KVxuICAgICAgICByZXN1bHQgKz0gKCgoNDIgLSBjKSAmIChjIC0gNDQpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA0MyArIDYyKTtcbiAgICAgICAgLy8gYyA9PSA0NyAoYyA+IDQ2IGFuZCBjIDwgNDgpXG4gICAgICAgIHJlc3VsdCArPSAoKCg0NiAtIGMpICYgKGMgLSA0OCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ3ICsgNjMpO1xuICAgICAgICAvLyBjID4gNDcgYW5kIGMgPCA1OFxuICAgICAgICByZXN1bHQgKz0gKCgoNDcgLSBjKSAmIChjIC0gNTgpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA0OCArIDUyKTtcbiAgICAgICAgLy8gYyA+IDY0IGFuZCBjIDwgOTFcbiAgICAgICAgcmVzdWx0ICs9ICgoKDY0IC0gYykgJiAoYyAtIDkxKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNjUgKyAwKTtcbiAgICAgICAgLy8gYyA+IDk2IGFuZCBjIDwgMTIzXG4gICAgICAgIHJlc3VsdCArPSAoKCg5NiAtIGMpICYgKGMgLSAxMjMpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA5NyArIDI2KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5fZ2V0UGFkZGluZ0xlbmd0aCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHZhciBwYWRkaW5nTGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNbaV0gIT09IHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmxlbmd0aCA8IDQgfHwgcGFkZGluZ0xlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYXNlNjRDb2RlcjogaW5jb3JyZWN0IHBhZGRpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhZGRpbmdMZW5ndGg7XG4gICAgfTtcbiAgICByZXR1cm4gQ29kZXI7XG59KCkpO1xuZXhwb3J0cy5Db2RlciA9IENvZGVyO1xudmFyIHN0ZENvZGVyID0gbmV3IENvZGVyKCk7XG5mdW5jdGlvbiBlbmNvZGUoZGF0YSkge1xuICAgIHJldHVybiBzdGRDb2Rlci5lbmNvZGUoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbmZ1bmN0aW9uIGRlY29kZShzKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmRlY29kZShzKTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuLyoqXG4gKiBJbXBsZW1lbnRzIFVSTC1zYWZlIEJhc2U2NCBlbmNvZGluZy5cbiAqIChTYW1lIGFzIEJhc2U2NCwgYnV0ICcrJyBpcyByZXBsYWNlZCB3aXRoICctJywgYW5kICcvJyB3aXRoICdfJykuXG4gKlxuICogT3BlcmF0ZXMgaW4gY29uc3RhbnQgdGltZS5cbiAqL1xudmFyIFVSTFNhZmVDb2RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVVJMU2FmZUNvZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVSTFNhZmVDb2RlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvLyBVUkwtc2FmZSBlbmNvZGluZyBoYXZlIHRoZSBmb2xsb3dpbmcgZW5jb2RlZC9kZWNvZGVkIHJhbmdlczpcbiAgICAvL1xuICAgIC8vIEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaIGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6IDAxMjM0NTY3ODkgIC0gICBfXG4gICAgLy8gSW5kZXg6ICAgMCAtIDI1ICAgICAgICAgICAgICAgICAgICAyNiAtIDUxICAgICAgICAgICAgICA1MiAtIDYxICAgNjIgIDYzXG4gICAgLy8gQVNDSUk6ICA2NSAtIDkwICAgICAgICAgICAgICAgICAgICA5NyAtIDEyMiAgICAgICAgICAgICA0OCAtIDU3ICAgNDUgIDk1XG4gICAgLy9cbiAgICBVUkxTYWZlQ29kZXIucHJvdG90eXBlLl9lbmNvZGVCeXRlID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGI7XG4gICAgICAgIC8vIGIgPj0gMFxuICAgICAgICByZXN1bHQgKz0gNjU7XG4gICAgICAgIC8vIGIgPiAyNVxuICAgICAgICByZXN1bHQgKz0gKCgyNSAtIGIpID4+PiA4KSAmICgoMCAtIDY1KSAtIDI2ICsgOTcpO1xuICAgICAgICAvLyBiID4gNTFcbiAgICAgICAgcmVzdWx0ICs9ICgoNTEgLSBiKSA+Pj4gOCkgJiAoKDI2IC0gOTcpIC0gNTIgKyA0OCk7XG4gICAgICAgIC8vIGIgPiA2MVxuICAgICAgICByZXN1bHQgKz0gKCg2MSAtIGIpID4+PiA4KSAmICgoNTIgLSA0OCkgLSA2MiArIDQ1KTtcbiAgICAgICAgLy8gYiA+IDYyXG4gICAgICAgIHJlc3VsdCArPSAoKDYyIC0gYikgPj4+IDgpICYgKCg2MiAtIDQ1KSAtIDYzICsgOTUpO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShyZXN1bHQpO1xuICAgIH07XG4gICAgVVJMU2FmZUNvZGVyLnByb3RvdHlwZS5fZGVjb2RlQ2hhciA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBJTlZBTElEX0JZVEU7XG4gICAgICAgIC8vIGMgPT0gNDUgKGMgPiA0NCBhbmQgYyA8IDQ2KVxuICAgICAgICByZXN1bHQgKz0gKCgoNDQgLSBjKSAmIChjIC0gNDYpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA0NSArIDYyKTtcbiAgICAgICAgLy8gYyA9PSA5NSAoYyA+IDk0IGFuZCBjIDwgOTYpXG4gICAgICAgIHJlc3VsdCArPSAoKCg5NCAtIGMpICYgKGMgLSA5NikpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDk1ICsgNjMpO1xuICAgICAgICAvLyBjID4gNDcgYW5kIGMgPCA1OFxuICAgICAgICByZXN1bHQgKz0gKCgoNDcgLSBjKSAmIChjIC0gNTgpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA0OCArIDUyKTtcbiAgICAgICAgLy8gYyA+IDY0IGFuZCBjIDwgOTFcbiAgICAgICAgcmVzdWx0ICs9ICgoKDY0IC0gYykgJiAoYyAtIDkxKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNjUgKyAwKTtcbiAgICAgICAgLy8gYyA+IDk2IGFuZCBjIDwgMTIzXG4gICAgICAgIHJlc3VsdCArPSAoKCg5NiAtIGMpICYgKGMgLSAxMjMpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA5NyArIDI2KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBVUkxTYWZlQ29kZXI7XG59KENvZGVyKSk7XG5leHBvcnRzLlVSTFNhZmVDb2RlciA9IFVSTFNhZmVDb2RlcjtcbnZhciB1cmxTYWZlQ29kZXIgPSBuZXcgVVJMU2FmZUNvZGVyKCk7XG5mdW5jdGlvbiBlbmNvZGVVUkxTYWZlKGRhdGEpIHtcbiAgICByZXR1cm4gdXJsU2FmZUNvZGVyLmVuY29kZShkYXRhKTtcbn1cbmV4cG9ydHMuZW5jb2RlVVJMU2FmZSA9IGVuY29kZVVSTFNhZmU7XG5mdW5jdGlvbiBkZWNvZGVVUkxTYWZlKHMpIHtcbiAgICByZXR1cm4gdXJsU2FmZUNvZGVyLmRlY29kZShzKTtcbn1cbmV4cG9ydHMuZGVjb2RlVVJMU2FmZSA9IGRlY29kZVVSTFNhZmU7XG5leHBvcnRzLmVuY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmVuY29kZWRMZW5ndGgobGVuZ3RoKTtcbn07XG5leHBvcnRzLm1heERlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLm1heERlY29kZWRMZW5ndGgobGVuZ3RoKTtcbn07XG5leHBvcnRzLmRlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzdGRDb2Rlci5kZWNvZGVkTGVuZ3RoKHMpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGFja2FnZSB1dGY4IGltcGxlbWVudHMgVVRGLTggZW5jb2RpbmcgYW5kIGRlY29kaW5nLlxuICovXG52YXIgSU5WQUxJRF9VVEYxNiA9IFwidXRmODogaW52YWxpZCBzdHJpbmdcIjtcbnZhciBJTlZBTElEX1VURjggPSBcInV0Zjg6IGludmFsaWQgc291cmNlIGVuY29kaW5nXCI7XG4vKipcbiAqIEVuY29kZXMgdGhlIGdpdmVuIHN0cmluZyBpbnRvIFVURi04IGJ5dGUgYXJyYXkuXG4gKiBUaHJvd3MgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaGFzIGludmFsaWQgVVRGLTE2IGVuY29kaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUocykge1xuICAgIC8vIENhbGN1bGF0ZSByZXN1bHQgbGVuZ3RoIGFuZCBhbGxvY2F0ZSBvdXRwdXQgYXJyYXkuXG4gICAgLy8gZW5jb2RlZExlbmd0aCgpIGFsc28gdmFsaWRhdGVzIHN0cmluZyBhbmQgdGhyb3dzIGVycm9ycyxcbiAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHJlcGVhdCB2YWxpZGF0aW9uIGhlcmUuXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGVuY29kZWRMZW5ndGgocykpO1xuICAgIHZhciBwb3MgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGMwIHwgYyA+PiA2O1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHhkODAwKSB7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHhlMCB8IGMgPj4gMTI7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDYpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgYyAmIDB4M2Y7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7IC8vIGdldCBvbmUgbW9yZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGMgPSAoYyAmIDB4M2ZmKSA8PCAxMDtcbiAgICAgICAgICAgIGMgfD0gcy5jaGFyQ29kZUF0KGkpICYgMHgzZmY7XG4gICAgICAgICAgICBjICs9IDB4MTAwMDA7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHhmMCB8IGMgPj4gMTg7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDEyKSAmIDB4M2Y7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDYpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgYyAmIDB4M2Y7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnl0ZXMgcmVxdWlyZWQgdG8gZW5jb2RlIHRoZSBnaXZlbiBzdHJpbmcgaW50byBVVEYtOC5cbiAqIFRocm93cyBpZiB0aGUgc291cmNlIHN0cmluZyBoYXMgaW52YWxpZCBVVEYtMTYgZW5jb2RpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZWRMZW5ndGgocykge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPD0gMHhkZmZmKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEYxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7IC8vIFwiZWF0XCIgbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHJlc3VsdCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGMTYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmVuY29kZWRMZW5ndGggPSBlbmNvZGVkTGVuZ3RoO1xuLyoqXG4gKiBEZWNvZGVzIHRoZSBnaXZlbiBieXRlIGFycmF5IGZyb20gVVRGLTggaW50byBhIHN0cmluZy5cbiAqIFRocm93cyBpZiBlbmNvZGluZyBpcyBpbnZhbGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoYXJyKSB7XG4gICAgdmFyIGNoYXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGIgPSBhcnJbaV07XG4gICAgICAgIGlmIChiICYgMHg4MCkge1xuICAgICAgICAgICAgdmFyIG1pbiA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChiIDwgMHhlMCkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgMSBtb3JlIGJ5dGUuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG4xID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgaWYgKChuMSAmIDB4YzApICE9PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiID0gKGIgJiAweDFmKSA8PCA2IHwgKG4xICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHg4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGIgPCAweGYwKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAyIG1vcmUgYnl0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuMSA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMiA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIGlmICgobjEgJiAweGMwKSAhPT0gMHg4MCB8fCAobjIgJiAweGMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiA9IChiICYgMHgwZikgPDwgMTIgfCAobjEgJiAweDNmKSA8PCA2IHwgKG4yICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHg4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiIDwgMHhmOCkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgMyBtb3JlIGJ5dGVzLlxuICAgICAgICAgICAgICAgIGlmIChpID49IGFyci5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbjEgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICB2YXIgbjIgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICB2YXIgbjMgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICBpZiAoKG4xICYgMHhjMCkgIT09IDB4ODAgfHwgKG4yICYgMHhjMCkgIT09IDB4ODAgfHwgKG4zICYgMHhjMCkgIT09IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgPSAoYiAmIDB4MGYpIDw8IDE4IHwgKG4xICYgMHgzZikgPDwgMTIgfCAobjIgJiAweDNmKSA8PCA2IHwgKG4zICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHgxMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIgPCBtaW4gfHwgKGIgPj0gMHhkODAwICYmIGIgPD0gMHhkZmZmKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIgPj0gMHgxMDAwMCkge1xuICAgICAgICAgICAgICAgIC8vIFN1cnJvZ2F0ZSBwYWlyLlxuICAgICAgICAgICAgICAgIGlmIChiID4gMHgxMGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgICAgICBjaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwIHwgKGIgPj4gMTApKSk7XG4gICAgICAgICAgICAgICAgYiA9IDB4ZGMwMCB8IChiICYgMHgzZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiKSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKFwiXCIpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIHJlcXVpcmVkIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gcmVxdWlyZSgncHVzaGVyJykuZGVmYXVsdCBldGMuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMykuZGVmYXVsdDtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLyBFU00gQ09NUEFUIEZMQUdcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9zY3JpcHRfcmVjZWl2ZXJfZmFjdG9yeS50c1xuY2xhc3MgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5sYXN0SWQgPSAwO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgY3JlYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGFzdElkKys7XG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLmxhc3RJZDtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5wcmVmaXggKyBudW1iZXI7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lICsgJ1snICsgbnVtYmVyICsgJ10nO1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjYWxsYmFja1dyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpc1tudW1iZXJdID0gY2FsbGJhY2tXcmFwcGVyO1xuICAgICAgICByZXR1cm4geyBudW1iZXI6IG51bWJlciwgaWQ6IGlkLCBuYW1lOiBuYW1lLCBjYWxsYmFjazogY2FsbGJhY2tXcmFwcGVyIH07XG4gICAgfVxuICAgIHJlbW92ZShyZWNlaXZlcikge1xuICAgICAgICBkZWxldGUgdGhpc1tyZWNlaXZlci5udW1iZXJdO1xuICAgIH1cbn1cbnZhciBTY3JpcHRSZWNlaXZlcnMgPSBuZXcgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KCdfcHVzaGVyX3NjcmlwdF8nLCAnUHVzaGVyLlNjcmlwdFJlY2VpdmVycycpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2RlZmF1bHRzLnRzXG52YXIgRGVmYXVsdHMgPSB7XG4gICAgVkVSU0lPTjogXCI4LjMuMFwiLFxuICAgIFBST1RPQ09MOiA3LFxuICAgIHdzUG9ydDogODAsXG4gICAgd3NzUG9ydDogNDQzLFxuICAgIHdzUGF0aDogJycsXG4gICAgaHR0cEhvc3Q6ICdzb2NranMucHVzaGVyLmNvbScsXG4gICAgaHR0cFBvcnQ6IDgwLFxuICAgIGh0dHBzUG9ydDogNDQzLFxuICAgIGh0dHBQYXRoOiAnL3B1c2hlcicsXG4gICAgc3RhdHNfaG9zdDogJ3N0YXRzLnB1c2hlci5jb20nLFxuICAgIGF1dGhFbmRwb2ludDogJy9wdXNoZXIvYXV0aCcsXG4gICAgYXV0aFRyYW5zcG9ydDogJ2FqYXgnLFxuICAgIGFjdGl2aXR5VGltZW91dDogMTIwMDAwLFxuICAgIHBvbmdUaW1lb3V0OiAzMDAwMCxcbiAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IDEwMDAwLFxuICAgIHVzZXJBdXRoZW50aWNhdGlvbjoge1xuICAgICAgICBlbmRwb2ludDogJy9wdXNoZXIvdXNlci1hdXRoJyxcbiAgICAgICAgdHJhbnNwb3J0OiAnYWpheCdcbiAgICB9LFxuICAgIGNoYW5uZWxBdXRob3JpemF0aW9uOiB7XG4gICAgICAgIGVuZHBvaW50OiAnL3B1c2hlci9hdXRoJyxcbiAgICAgICAgdHJhbnNwb3J0OiAnYWpheCdcbiAgICB9LFxuICAgIGNkbl9odHRwOiBcImh0dHA6Ly9qcy5wdXNoZXIuY29tXCIsXG4gICAgY2RuX2h0dHBzOiBcImh0dHBzOi8vanMucHVzaGVyLmNvbVwiLFxuICAgIGRlcGVuZGVuY3lfc3VmZml4OiBcIlwiXG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVmYXVsdHMgPSAoRGVmYXVsdHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2RlcGVuZGVuY3lfbG9hZGVyLnRzXG5cblxuY2xhc3MgZGVwZW5kZW5jeV9sb2FkZXJfRGVwZW5kZW5jeUxvYWRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnJlY2VpdmVycyA9IG9wdGlvbnMucmVjZWl2ZXJzIHx8IFNjcmlwdFJlY2VpdmVycztcbiAgICAgICAgdGhpcy5sb2FkaW5nID0ge307XG4gICAgfVxuICAgIGxvYWQobmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZi5sb2FkaW5nW25hbWVdICYmIHNlbGYubG9hZGluZ1tuYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLmxvYWRpbmdbbmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmxvYWRpbmdbbmFtZV0gPSBbY2FsbGJhY2tdO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZVNjcmlwdFJlcXVlc3Qoc2VsZi5nZXRQYXRoKG5hbWUsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIHZhciByZWNlaXZlciA9IHNlbGYucmVjZWl2ZXJzLmNyZWF0ZShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2VpdmVycy5yZW1vdmUocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmxvYWRpbmdbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHNlbGYubG9hZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYubG9hZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uICh3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXShlcnJvciwgc3VjY2Vzc0NhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb290KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNkbjtcbiAgICAgICAgdmFyIHByb3RvY29sID0gcnVudGltZS5nZXREb2N1bWVudCgpLmxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICBpZiAoKG9wdGlvbnMgJiYgb3B0aW9ucy51c2VUTFMpIHx8IHByb3RvY29sID09PSAnaHR0cHM6Jykge1xuICAgICAgICAgICAgY2RuID0gdGhpcy5vcHRpb25zLmNkbl9odHRwcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNkbiA9IHRoaXMub3B0aW9ucy5jZG5faHR0cDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2RuLnJlcGxhY2UoL1xcLyokLywgJycpICsgJy8nICsgdGhpcy5vcHRpb25zLnZlcnNpb247XG4gICAgfVxuICAgIGdldFBhdGgobmFtZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSb290KG9wdGlvbnMpICsgJy8nICsgbmFtZSArIHRoaXMub3B0aW9ucy5zdWZmaXggKyAnLmpzJztcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vZGVwZW5kZW5jaWVzLnRzXG5cblxuXG52YXIgRGVwZW5kZW5jaWVzUmVjZWl2ZXJzID0gbmV3IFNjcmlwdFJlY2VpdmVyRmFjdG9yeSgnX3B1c2hlcl9kZXBlbmRlbmNpZXMnLCAnUHVzaGVyLkRlcGVuZGVuY2llc1JlY2VpdmVycycpO1xudmFyIERlcGVuZGVuY2llcyA9IG5ldyBkZXBlbmRlbmN5X2xvYWRlcl9EZXBlbmRlbmN5TG9hZGVyKHtcbiAgICBjZG5faHR0cDogZGVmYXVsdHMuY2RuX2h0dHAsXG4gICAgY2RuX2h0dHBzOiBkZWZhdWx0cy5jZG5faHR0cHMsXG4gICAgdmVyc2lvbjogZGVmYXVsdHMuVkVSU0lPTixcbiAgICBzdWZmaXg6IGRlZmF1bHRzLmRlcGVuZGVuY3lfc3VmZml4LFxuICAgIHJlY2VpdmVyczogRGVwZW5kZW5jaWVzUmVjZWl2ZXJzXG59KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy91cmxfc3RvcmUudHNcbmNvbnN0IHVybFN0b3JlID0ge1xuICAgIGJhc2VVcmw6ICdodHRwczovL3B1c2hlci5jb20nLFxuICAgIHVybHM6IHtcbiAgICAgICAgYXV0aGVudGljYXRpb25FbmRwb2ludDoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2NoYW5uZWxzL3NlcnZlcl9hcGkvYXV0aGVudGljYXRpbmdfdXNlcnMnXG4gICAgICAgIH0sXG4gICAgICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2NoYW5uZWxzL3NlcnZlcl9hcGkvYXV0aG9yaXppbmctdXNlcnMvJ1xuICAgICAgICB9LFxuICAgICAgICBqYXZhc2NyaXB0UXVpY2tTdGFydDoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2phdmFzY3JpcHRfcXVpY2tfc3RhcnQnXG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJpbmdDbGllbnRFdmVudHM6IHtcbiAgICAgICAgICAgIHBhdGg6ICcvZG9jcy9jbGllbnRfYXBpX2d1aWRlL2NsaWVudF9ldmVudHMjdHJpZ2dlci1ldmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIGVuY3J5cHRlZENoYW5uZWxTdXBwb3J0OiB7XG4gICAgICAgICAgICBmdWxsVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3B1c2hlci9wdXNoZXItanMvdHJlZS9jYzQ5MTAxNTM3MWE0YmRlNTc0M2QxYzg3YTBmYmFjMGZlYjUzMTk1I2VuY3J5cHRlZC1jaGFubmVsLXN1cHBvcnQnXG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgYnVpbGRMb2dTdWZmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgY29uc3QgdXJsUHJlZml4ID0gJ1NlZTonO1xuICAgIGNvbnN0IHVybE9iaiA9IHVybFN0b3JlLnVybHNba2V5XTtcbiAgICBpZiAoIXVybE9iailcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIGxldCB1cmw7XG4gICAgaWYgKHVybE9iai5mdWxsVXJsKSB7XG4gICAgICAgIHVybCA9IHVybE9iai5mdWxsVXJsO1xuICAgIH1cbiAgICBlbHNlIGlmICh1cmxPYmoucGF0aCkge1xuICAgICAgICB1cmwgPSB1cmxTdG9yZS5iYXNlVXJsICsgdXJsT2JqLnBhdGg7XG4gICAgfVxuICAgIGlmICghdXJsKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAke3VybFByZWZpeH0gJHt1cmx9YDtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB1cmxfc3RvcmUgPSAoeyBidWlsZExvZ1N1ZmZpeCB9KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9hdXRoL29wdGlvbnMudHNcbnZhciBBdXRoUmVxdWVzdFR5cGU7XG4oZnVuY3Rpb24gKEF1dGhSZXF1ZXN0VHlwZSkge1xuICAgIEF1dGhSZXF1ZXN0VHlwZVtcIlVzZXJBdXRoZW50aWNhdGlvblwiXSA9IFwidXNlci1hdXRoZW50aWNhdGlvblwiO1xuICAgIEF1dGhSZXF1ZXN0VHlwZVtcIkNoYW5uZWxBdXRob3JpemF0aW9uXCJdID0gXCJjaGFubmVsLWF1dGhvcml6YXRpb25cIjtcbn0pKEF1dGhSZXF1ZXN0VHlwZSB8fCAoQXV0aFJlcXVlc3RUeXBlID0ge30pKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9lcnJvcnMudHNcbmNsYXNzIEJhZEV2ZW50TmFtZSBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBCYWRDaGFubmVsTmFtZSBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBSZXF1ZXN0VGltZWRPdXQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICAgIHN1cGVyKG1zZyk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuY2xhc3MgVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3cgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICAgIHN1cGVyKG1zZyk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuY2xhc3MgVHJhbnNwb3J0Q2xvc2VkIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3VwcG9ydGVkRmVhdHVyZSBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBVbnN1cHBvcnRlZFRyYW5zcG9ydCBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5jbGFzcyBVbnN1cHBvcnRlZFN0cmF0ZWd5IGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZykge1xuICAgICAgICBzdXBlcihtc2cpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpO1xuICAgIH1cbn1cbmNsYXNzIEhUVFBBdXRoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzLCBtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2F1dGgveGhyX2F1dGgudHNcblxuXG5cblxuY29uc3QgYWpheCA9IGZ1bmN0aW9uIChjb250ZXh0LCBxdWVyeSwgYXV0aE9wdGlvbnMsIGF1dGhSZXF1ZXN0VHlwZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB4aHIgPSBydW50aW1lLmNyZWF0ZVhIUigpO1xuICAgIHhoci5vcGVuKCdQT1NUJywgYXV0aE9wdGlvbnMuZW5kcG9pbnQsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgZm9yICh2YXIgaGVhZGVyTmFtZSBpbiBhdXRoT3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGF1dGhPcHRpb25zLmhlYWRlcnNbaGVhZGVyTmFtZV0pO1xuICAgIH1cbiAgICBpZiAoYXV0aE9wdGlvbnMuaGVhZGVyc1Byb3ZpZGVyICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGR5bmFtaWNIZWFkZXJzID0gYXV0aE9wdGlvbnMuaGVhZGVyc1Byb3ZpZGVyKCk7XG4gICAgICAgIGZvciAodmFyIGhlYWRlck5hbWUgaW4gZHluYW1pY0hlYWRlcnMpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGR5bmFtaWNIZWFkZXJzW2hlYWRlck5hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBIVFRQQXV0aEVycm9yKDIwMCwgYEpTT04gcmV0dXJuZWQgZnJvbSAke2F1dGhSZXF1ZXN0VHlwZS50b1N0cmluZygpfSBlbmRwb2ludCB3YXMgaW52YWxpZCwgeWV0IHN0YXR1cyBjb2RlIHdhcyAyMDAuIERhdGEgd2FzOiAke3hoci5yZXNwb25zZVRleHR9YCksIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzdWZmaXggPSAnJztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGF1dGhSZXF1ZXN0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEF1dGhSZXF1ZXN0VHlwZS5Vc2VyQXV0aGVudGljYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2F1dGhlbnRpY2F0aW9uRW5kcG9pbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEF1dGhSZXF1ZXN0VHlwZS5DaGFubmVsQXV0aG9yaXphdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeCA9IGBDbGllbnRzIG11c3QgYmUgYXV0aG9yaXplZCB0byBqb2luIHByaXZhdGUgb3IgcHJlc2VuY2UgY2hhbm5lbHMuICR7dXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdhdXRob3JpemF0aW9uRW5kcG9pbnQnKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBIVFRQQXV0aEVycm9yKHhoci5zdGF0dXMsIGBVbmFibGUgdG8gcmV0cmlldmUgYXV0aCBzdHJpbmcgZnJvbSAke2F1dGhSZXF1ZXN0VHlwZS50b1N0cmluZygpfSBlbmRwb2ludCAtIGAgK1xuICAgICAgICAgICAgICAgICAgICBgcmVjZWl2ZWQgc3RhdHVzOiAke3hoci5zdGF0dXN9IGZyb20gJHthdXRoT3B0aW9ucy5lbmRwb2ludH0uICR7c3VmZml4fWApLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgeGhyLnNlbmQocXVlcnkpO1xuICAgIHJldHVybiB4aHI7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgeGhyX2F1dGggPSAoYWpheCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvYmFzZTY0LnRzXG5mdW5jdGlvbiBlbmNvZGUocykge1xuICAgIHJldHVybiBidG9hKHV0b2IocykpO1xufVxudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG52YXIgYjY0Y2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG52YXIgYjY0dGFiID0ge307XG5mb3IgKHZhciBiYXNlNjRfaSA9IDAsIGwgPSBiNjRjaGFycy5sZW5ndGg7IGJhc2U2NF9pIDwgbDsgYmFzZTY0X2krKykge1xuICAgIGI2NHRhYltiNjRjaGFycy5jaGFyQXQoYmFzZTY0X2kpXSA9IGJhc2U2NF9pO1xufVxudmFyIGNiX3V0b2IgPSBmdW5jdGlvbiAoYykge1xuICAgIHZhciBjYyA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICByZXR1cm4gY2MgPCAweDgwXG4gICAgICAgID8gY1xuICAgICAgICA6IGNjIDwgMHg4MDBcbiAgICAgICAgICAgID8gZnJvbUNoYXJDb2RlKDB4YzAgfCAoY2MgPj4+IDYpKSArIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpXG4gICAgICAgICAgICA6IGZyb21DaGFyQ29kZSgweGUwIHwgKChjYyA+Pj4gMTIpICYgMHgwZikpICtcbiAgICAgICAgICAgICAgICBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+IDYpICYgMHgzZikpICtcbiAgICAgICAgICAgICAgICBmcm9tQ2hhckNvZGUoMHg4MCB8IChjYyAmIDB4M2YpKTtcbn07XG52YXIgdXRvYiA9IGZ1bmN0aW9uICh1KSB7XG4gICAgcmV0dXJuIHUucmVwbGFjZSgvW15cXHgwMC1cXHg3Rl0vZywgY2JfdXRvYik7XG59O1xudmFyIGNiX2VuY29kZSA9IGZ1bmN0aW9uIChjY2MpIHtcbiAgICB2YXIgcGFkbGVuID0gWzAsIDIsIDFdW2NjYy5sZW5ndGggJSAzXTtcbiAgICB2YXIgb3JkID0gKGNjYy5jaGFyQ29kZUF0KDApIDw8IDE2KSB8XG4gICAgICAgICgoY2NjLmxlbmd0aCA+IDEgPyBjY2MuY2hhckNvZGVBdCgxKSA6IDApIDw8IDgpIHxcbiAgICAgICAgKGNjYy5sZW5ndGggPiAyID8gY2NjLmNoYXJDb2RlQXQoMikgOiAwKTtcbiAgICB2YXIgY2hhcnMgPSBbXG4gICAgICAgIGI2NGNoYXJzLmNoYXJBdChvcmQgPj4+IDE4KSxcbiAgICAgICAgYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDEyKSAmIDYzKSxcbiAgICAgICAgcGFkbGVuID49IDIgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gNikgJiA2MyksXG4gICAgICAgIHBhZGxlbiA+PSAxID8gJz0nIDogYjY0Y2hhcnMuY2hhckF0KG9yZCAmIDYzKVxuICAgIF07XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xufTtcbnZhciBidG9hID0gd2luZG93LmJ0b2EgfHxcbiAgICBmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5yZXBsYWNlKC9bXFxzXFxTXXsxLDN9L2csIGNiX2VuY29kZSk7XG4gICAgfTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy90aW1lcnMvYWJzdHJhY3RfdGltZXIudHNcbmNsYXNzIFRpbWVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXQsIGNsZWFyLCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jbGVhciA9IGNsZWFyO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IGNhbGxiYWNrKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuICAgIGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXIgIT09IG51bGw7XG4gICAgfVxuICAgIGVuc3VyZUFib3J0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhYnN0cmFjdF90aW1lciA9IChUaW1lcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvdGltZXJzL2luZGV4LnRzXG5cbmZ1bmN0aW9uIHRpbWVyc19jbGVhclRpbWVvdXQodGltZXIpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbn1cbmZ1bmN0aW9uIHRpbWVyc19jbGVhckludGVydmFsKHRpbWVyKSB7XG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xufVxuY2xhc3MgdGltZXJzX09uZU9mZlRpbWVyIGV4dGVuZHMgYWJzdHJhY3RfdGltZXIge1xuICAgIGNvbnN0cnVjdG9yKGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICBzdXBlcihzZXRUaW1lb3V0LCB0aW1lcnNfY2xlYXJUaW1lb3V0LCBkZWxheSwgZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIHRpbWVyc19QZXJpb2RpY1RpbWVyIGV4dGVuZHMgYWJzdHJhY3RfdGltZXIge1xuICAgIGNvbnN0cnVjdG9yKGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICBzdXBlcihzZXRJbnRlcnZhbCwgdGltZXJzX2NsZWFySW50ZXJ2YWwsIGRlbGF5LCBmdW5jdGlvbiAodGltZXIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlsLnRzXG5cbnZhciBVdGlsID0ge1xuICAgIG5vdygpIHtcbiAgICAgICAgaWYgKERhdGUubm93KSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVmZXIoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aW1lcnNfT25lT2ZmVGltZXIoMCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgbWV0aG9kKG5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIGJvdW5kQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RbbmFtZV0uYXBwbHkob2JqZWN0LCBib3VuZEFyZ3VtZW50cy5jb25jYXQoYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHV0aWwgPSAoVXRpbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvY29sbGVjdGlvbnMudHNcblxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBleHRlbnNpb25zID0gc291cmNlc1tpXTtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbnNbcHJvcGVydHldICYmXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uc1twcm9wZXJ0eV0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGV4dGVuZCh0YXJnZXRbcHJvcGVydHldIHx8IHt9LCBleHRlbnNpb25zW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gZXh0ZW5zaW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeSgpIHtcbiAgICB2YXIgbSA9IFsnUHVzaGVyJ107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG0ucHVzaChzYWZlSlNPTlN0cmluZ2lmeShhcmd1bWVudHNbaV0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbS5qb2luKCcgOiAnKTtcbn1cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZihhcnJheSwgaXRlbSkge1xuICAgIHZhciBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG4gICAgaWYgKGFycmF5ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgYXJyYXkuaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikge1xuICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5W2ldID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBvYmplY3RBcHBseShvYmplY3QsIGYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICBmKG9iamVjdFtrZXldLCBrZXksIG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAoXywga2V5KSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBrZXlzO1xufVxuZnVuY3Rpb24gdmFsdWVzKG9iamVjdCkge1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cbmZ1bmN0aW9uIGFwcGx5KGFycmF5LCBmLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmLmNhbGwoY29udGV4dCB8fCB3aW5kb3csIGFycmF5W2ldLCBpLCBhcnJheSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwKGFycmF5LCBmKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZihhcnJheVtpXSwgaSwgYXJyYXksIHJlc3VsdCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbWFwT2JqZWN0KG9iamVjdCwgZikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gZih2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICAgIHRlc3QgPVxuICAgICAgICB0ZXN0IHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRlc3QoYXJyYXlbaV0sIGksIGFycmF5LCByZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGZpbHRlck9iamVjdChvYmplY3QsIHRlc3QpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoKHRlc3QgJiYgdGVzdCh2YWx1ZSwga2V5LCBvYmplY3QsIHJlc3VsdCkpIHx8IEJvb2xlYW4odmFsdWUpKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqZWN0KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gYW55KGFycmF5LCB0ZXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGVzdChhcnJheVtpXSwgaSwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBjb2xsZWN0aW9uc19hbGwoYXJyYXksIHRlc3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghdGVzdChhcnJheVtpXSwgaSwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBlbmNvZGVQYXJhbXNPYmplY3QoZGF0YSkge1xuICAgIHJldHVybiBtYXBPYmplY3QoZGF0YSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHNhZmVKU09OU3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGVuY29kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBidWlsZFF1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICB2YXIgcGFyYW1zID0gZmlsdGVyT2JqZWN0KGRhdGEsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICB2YXIgcXVlcnkgPSBtYXAoZmxhdHRlbihlbmNvZGVQYXJhbXNPYmplY3QocGFyYW1zKSksIHV0aWwubWV0aG9kKCdqb2luJywgJz0nKSkuam9pbignJicpO1xuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIGRlY3ljbGVPYmplY3Qob2JqZWN0KSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXSwgcGF0aHMgPSBbXTtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIGRlcmV6KHZhbHVlLCBwYXRoKSB7XG4gICAgICAgIHZhciBpLCBuYW1lLCBudTtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdHNbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAkcmVmOiBwYXRoc1tpXSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iamVjdHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICAgICAgbnUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudVtpXSA9IGRlcmV6KHZhbHVlW2ldLCBwYXRoICsgJ1snICsgaSArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudVtuYW1lXSA9IGRlcmV6KHZhbHVlW25hbWVdLCBwYXRoICsgJ1snICsgSlNPTi5zdHJpbmdpZnkobmFtZSkgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSkob2JqZWN0LCAnJCcpO1xufVxuZnVuY3Rpb24gc2FmZUpTT05TdHJpbmdpZnkoc291cmNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNvdXJjZSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkZWN5Y2xlT2JqZWN0KHNvdXJjZSkpO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9sb2dnZXIudHNcblxuXG5jbGFzcyBsb2dnZXJfTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxMb2cgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZGVidWcoLi4uYXJncykge1xuICAgICAgICB0aGlzLmxvZyh0aGlzLmdsb2JhbExvZywgYXJncyk7XG4gICAgfVxuICAgIHdhcm4oLi4uYXJncykge1xuICAgICAgICB0aGlzLmxvZyh0aGlzLmdsb2JhbExvZ1dhcm4sIGFyZ3MpO1xuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubG9nKHRoaXMuZ2xvYmFsTG9nRXJyb3IsIGFyZ3MpO1xuICAgIH1cbiAgICBnbG9iYWxMb2dXYXJuKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbExvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxMb2dFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbExvZ1dhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9nKGRlZmF1bHRMb2dnaW5nRnVuY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBzdHJpbmdpZnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKGNvcmVfcHVzaGVyLmxvZykge1xuICAgICAgICAgICAgY29yZV9wdXNoZXIubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvcmVfcHVzaGVyLmxvZ1RvQ29uc29sZSkge1xuICAgICAgICAgICAgY29uc3QgbG9nID0gZGVmYXVsdExvZ2dpbmdGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgbG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgbG9nZ2VyID0gKG5ldyBsb2dnZXJfTG9nZ2VyKCkpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvYXV0aC9qc29ucF9hdXRoLnRzXG5cbnZhciBqc29ucCA9IGZ1bmN0aW9uIChjb250ZXh0LCBxdWVyeSwgYXV0aE9wdGlvbnMsIGF1dGhSZXF1ZXN0VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoYXV0aE9wdGlvbnMuaGVhZGVycyAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIGF1dGhPcHRpb25zLmhlYWRlcnNQcm92aWRlciAhPSBudWxsKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKGBUbyBzZW5kIGhlYWRlcnMgd2l0aCB0aGUgJHthdXRoUmVxdWVzdFR5cGUudG9TdHJpbmcoKX0gcmVxdWVzdCwgeW91IG11c3QgdXNlIEFKQVgsIHJhdGhlciB0aGFuIEpTT05QLmApO1xuICAgIH1cbiAgICB2YXIgY2FsbGJhY2tOYW1lID0gY29udGV4dC5uZXh0QXV0aENhbGxiYWNrSUQudG9TdHJpbmcoKTtcbiAgICBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRCsrO1xuICAgIHZhciBkb2N1bWVudCA9IGNvbnRleHQuZ2V0RG9jdW1lbnQoKTtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29udGV4dC5hdXRoX2NhbGxiYWNrc1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfTtcbiAgICB2YXIgY2FsbGJhY2tfbmFtZSA9IFwiUHVzaGVyLmF1dGhfY2FsbGJhY2tzWydcIiArIGNhbGxiYWNrTmFtZSArIFwiJ11cIjtcbiAgICBzY3JpcHQuc3JjID1cbiAgICAgICAgYXV0aE9wdGlvbnMuZW5kcG9pbnQgK1xuICAgICAgICAgICAgJz9jYWxsYmFjaz0nICtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChjYWxsYmFja19uYW1lKSArXG4gICAgICAgICAgICAnJicgK1xuICAgICAgICAgICAgcXVlcnk7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIganNvbnBfYXV0aCA9IChqc29ucCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vc2NyaXB0X3JlcXVlc3QudHNcbmNsYXNzIFNjcmlwdFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHNyYykge1xuICAgICAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB9XG4gICAgc2VuZChyZWNlaXZlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBlcnJvclN0cmluZyA9ICdFcnJvciBsb2FkaW5nICcgKyBzZWxmLnNyYztcbiAgICAgICAgc2VsZi5zY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2VsZi5zY3JpcHQuaWQgPSByZWNlaXZlci5pZDtcbiAgICAgICAgc2VsZi5zY3JpcHQuc3JjID0gc2VsZi5zcmM7XG4gICAgICAgIHNlbGYuc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2VsZi5zY3JpcHQuY2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICAgIGlmIChzZWxmLnNjcmlwdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKGVycm9yU3RyaW5nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNjcmlwdC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuc2NyaXB0LmFzeW5jID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50ICYmXG4gICAgICAgICAgICAvb3BlcmEvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0LmlkID0gcmVjZWl2ZXIuaWQgKyAnX2Vycm9yJztcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQudGV4dCA9IHJlY2VpdmVyLm5hbWUgKyBcIignXCIgKyBlcnJvclN0cmluZyArIFwiJyk7XCI7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5hc3luYyA9IHNlbGYuZXJyb3JTY3JpcHQuYXN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNlbGYuc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgICAgICBpZiAoc2VsZi5lcnJvclNjcmlwdCkge1xuICAgICAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc2VsZi5lcnJvclNjcmlwdCwgc2VsZi5zY3JpcHQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQub25sb2FkID0gdGhpcy5zY3JpcHQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcmlwdCAmJiB0aGlzLnNjcmlwdC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lcnJvclNjcmlwdCAmJiB0aGlzLmVycm9yU2NyaXB0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JTY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVycm9yU2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3JTY3JpcHQgPSBudWxsO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9qc29ucF9yZXF1ZXN0LnRzXG5cblxuY2xhc3MganNvbnBfcmVxdWVzdF9KU09OUFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgZGF0YSkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgc2VuZChyZWNlaXZlcikge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gYnVpbGRRdWVyeVN0cmluZyh0aGlzLmRhdGEpO1xuICAgICAgICB2YXIgdXJsID0gdGhpcy51cmwgKyAnLycgKyByZWNlaXZlci5udW1iZXIgKyAnPycgKyBxdWVyeTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcnVudGltZS5jcmVhdGVTY3JpcHRSZXF1ZXN0KHVybCk7XG4gICAgICAgIHRoaXMucmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICB9XG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3RpbWVsaW5lL2pzb25wX3RpbWVsaW5lLnRzXG5cblxudmFyIGdldEFnZW50ID0gZnVuY3Rpb24gKHNlbmRlciwgdXNlVExTKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2NoZW1lID0gJ2h0dHAnICsgKHVzZVRMUyA/ICdzJyA6ICcnKSArICc6Ly8nO1xuICAgICAgICB2YXIgdXJsID0gc2NoZW1lICsgKHNlbmRlci5ob3N0IHx8IHNlbmRlci5vcHRpb25zLmhvc3QpICsgc2VuZGVyLm9wdGlvbnMucGF0aDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZUpTT05QUmVxdWVzdCh1cmwsIGRhdGEpO1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSBydW50aW1lLlNjcmlwdFJlY2VpdmVycy5jcmVhdGUoZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgIFNjcmlwdFJlY2VpdmVycy5yZW1vdmUocmVjZWl2ZXIpO1xuICAgICAgICAgICAgcmVxdWVzdC5jbGVhbnVwKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgc2VuZGVyLmhvc3QgPSByZXN1bHQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICB9O1xufTtcbnZhciBqc29ucF90aW1lbGluZV9qc29ucCA9IHtcbiAgICBuYW1lOiAnanNvbnAnLFxuICAgIGdldEFnZW50XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIganNvbnBfdGltZWxpbmUgPSAoanNvbnBfdGltZWxpbmVfanNvbnApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdXJsX3NjaGVtZXMudHNcblxuZnVuY3Rpb24gZ2V0R2VuZXJpY1VSTChiYXNlU2NoZW1lLCBwYXJhbXMsIHBhdGgpIHtcbiAgICB2YXIgc2NoZW1lID0gYmFzZVNjaGVtZSArIChwYXJhbXMudXNlVExTID8gJ3MnIDogJycpO1xuICAgIHZhciBob3N0ID0gcGFyYW1zLnVzZVRMUyA/IHBhcmFtcy5ob3N0VExTIDogcGFyYW1zLmhvc3ROb25UTFM7XG4gICAgcmV0dXJuIHNjaGVtZSArICc6Ly8nICsgaG9zdCArIHBhdGg7XG59XG5mdW5jdGlvbiBnZXRHZW5lcmljUGF0aChrZXksIHF1ZXJ5U3RyaW5nKSB7XG4gICAgdmFyIHBhdGggPSAnL2FwcC8nICsga2V5O1xuICAgIHZhciBxdWVyeSA9ICc/cHJvdG9jb2w9JyArXG4gICAgICAgIGRlZmF1bHRzLlBST1RPQ09MICtcbiAgICAgICAgJyZjbGllbnQ9anMnICtcbiAgICAgICAgJyZ2ZXJzaW9uPScgK1xuICAgICAgICBkZWZhdWx0cy5WRVJTSU9OICtcbiAgICAgICAgKHF1ZXJ5U3RyaW5nID8gJyYnICsgcXVlcnlTdHJpbmcgOiAnJyk7XG4gICAgcmV0dXJuIHBhdGggKyBxdWVyeTtcbn1cbnZhciB3cyA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIHBhdGggPSAocGFyYW1zLmh0dHBQYXRoIHx8ICcnKSArIGdldEdlbmVyaWNQYXRoKGtleSwgJ2ZsYXNoPWZhbHNlJyk7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCd3cycsIHBhcmFtcywgcGF0aCk7XG4gICAgfVxufTtcbnZhciBodHRwID0ge1xuICAgIGdldEluaXRpYWw6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuICAgICAgICB2YXIgcGF0aCA9IChwYXJhbXMuaHR0cFBhdGggfHwgJy9wdXNoZXInKSArIGdldEdlbmVyaWNQYXRoKGtleSk7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCdodHRwJywgcGFyYW1zLCBwYXRoKTtcbiAgICB9XG59O1xudmFyIHNvY2tqcyA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNVUkwoJ2h0dHAnLCBwYXJhbXMsIHBhcmFtcy5odHRwUGF0aCB8fCAnL3B1c2hlcicpO1xuICAgIH0sXG4gICAgZ2V0UGF0aDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljUGF0aChrZXkpO1xuICAgIH1cbn07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LnRzXG5cbmNsYXNzIGNhbGxiYWNrX3JlZ2lzdHJ5X0NhbGxiYWNrUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xuICAgIH1cbiAgICBhZGQobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHByZWZpeGVkRXZlbnROYW1lID0gcHJlZml4KG5hbWUpO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdID1cbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0ucHVzaCh7XG4gICAgICAgICAgICBmbjogY2FsbGJhY2ssXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmUobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDoga2V5cyh0aGlzLl9jYWxsYmFja3MpO1xuICAgICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBhcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSA9IGZpbHRlcih0aGlzLl9jYWxsYmFja3NbbmFtZV0gfHwgW10sIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgoY2FsbGJhY2sgJiYgY2FsbGJhY2sgIT09IGJpbmRpbmcuZm4pIHx8XG4gICAgICAgICAgICAgICAgICAgIChjb250ZXh0ICYmIGNvbnRleHQgIT09IGJpbmRpbmcuY29udGV4dCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgICByZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpIHtcbiAgICAgICAgYXBwbHkobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xuICAgIHJldHVybiAnXycgKyBuYW1lO1xufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2V2ZW50cy9kaXNwYXRjaGVyLnRzXG5cblxuY2xhc3MgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihmYWlsVGhyb3VnaCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBjYWxsYmFja19yZWdpc3RyeV9DYWxsYmFja1JlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhaWxUaHJvdWdoID0gZmFpbFRocm91Z2g7XG4gICAgfVxuICAgIGJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gZmlsdGVyKHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyB8fCBbXSwgYyA9PiBjICE9PSBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1bmJpbmRfYWxsKCkge1xuICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhLCBtZXRhZGF0YSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBpZiAobWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChkYXRhLCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmZuLmFwcGx5KGNhbGxiYWNrc1tpXS5jb250ZXh0IHx8IHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5mYWlsVGhyb3VnaCkge1xuICAgICAgICAgICAgdGhpcy5mYWlsVGhyb3VnaChldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3RyYW5zcG9ydF9jb25uZWN0aW9uLnRzXG5cblxuXG5cblxuY2xhc3MgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fVHJhbnNwb3J0Q29ubmVjdGlvbiBleHRlbmRzIGRpc3BhdGNoZXJfRGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoaG9va3MsIG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplID0gcnVudGltZS50cmFuc3BvcnRDb25uZWN0aW9uSW5pdGlhbGl6ZXI7XG4gICAgICAgIHRoaXMuaG9va3MgPSBob29rcztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICduZXcnO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gb3B0aW9ucy50aW1lbGluZTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVvdXQgPSBvcHRpb25zLmFjdGl2aXR5VGltZW91dDtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMudGltZWxpbmUuZ2VuZXJhdGVVbmlxdWVJRCgpO1xuICAgIH1cbiAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3MoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaG9va3MuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKTtcbiAgICB9XG4gICAgc3VwcG9ydHNQaW5nKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmhvb2tzLnN1cHBvcnRzUGluZyk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCB8fCB0aGlzLnN0YXRlICE9PSAnaW5pdGlhbGl6ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVybCA9IHRoaXMuaG9va3MudXJscy5nZXRJbml0aWFsKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSB0aGlzLmhvb2tzLmdldFNvY2tldCh1cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHV0aWwuZGVmZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdjbG9zZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZExpc3RlbmVycygpO1xuICAgICAgICBsb2dnZXIuZGVidWcoJ0Nvbm5lY3RpbmcnLCB7IHRyYW5zcG9ydDogdGhpcy5uYW1lLCB1cmwgfSk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nvbm5lY3RpbmcnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZW5kKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdXRpbC5kZWZlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ29wZW4nICYmIHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LnBpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmhvb2tzLmJlZm9yZU9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3MuYmVmb3JlT3Blbih0aGlzLnNvY2tldCwgdGhpcy5ob29rcy51cmxzLmdldFBhdGgodGhpcy5rZXksIHRoaXMub3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB7IHR5cGU6ICdXZWJTb2NrZXRFcnJvcicsIGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5lcnJvcih0aGlzLmJ1aWxkVGltZWxpbmVNZXNzYWdlKHsgZXJyb3I6IGVycm9yLnRvU3RyaW5nKCkgfSkpO1xuICAgIH1cbiAgICBvbkNsb3NlKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBjbG9zZUV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgcmVhc29uOiBjbG9zZUV2ZW50LnJlYXNvbixcbiAgICAgICAgICAgICAgICB3YXNDbGVhbjogY2xvc2VFdmVudC53YXNDbGVhblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdjbG9zZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNvY2tldCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgfVxuICAgIG9uQWN0aXZpdHkoKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aXZpdHknKTtcbiAgICB9XG4gICAgYmluZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBjbG9zZUV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZShjbG9zZUV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gbWVzc2FnZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uYWN0aXZpdHkgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFjdGl2aXR5KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHVuYmluZExpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub25hY3Rpdml0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShzdGF0ZSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmVtaXQoc3RhdGUsIHBhcmFtcyk7XG4gICAgfVxuICAgIGJ1aWxkVGltZWxpbmVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7IGNpZDogdGhpcy5pZCB9LCBtZXNzYWdlKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy90cmFuc3BvcnQudHNcblxuY2xhc3MgdHJhbnNwb3J0X1RyYW5zcG9ydCB7XG4gICAgY29uc3RydWN0b3IoaG9va3MpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZChlbnZpcm9ubWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob29rcy5pc1N1cHBvcnRlZChlbnZpcm9ubWVudCk7XG4gICAgfVxuICAgIGNyZWF0ZUNvbm5lY3Rpb24obmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IHRyYW5zcG9ydF9jb25uZWN0aW9uX1RyYW5zcG9ydENvbm5lY3Rpb24odGhpcy5ob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucyk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL3RyYW5zcG9ydHMvdHJhbnNwb3J0cy50c1xuXG5cblxuXG52YXIgV1NUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0X1RyYW5zcG9ydCh7XG4gICAgdXJsczogd3MsXG4gICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiBmYWxzZSxcbiAgICBzdXBwb3J0c1Bpbmc6IGZhbHNlLFxuICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVudGltZS5nZXRXZWJTb2NrZXRBUEkoKSk7XG4gICAgfSxcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihydW50aW1lLmdldFdlYlNvY2tldEFQSSgpKTtcbiAgICB9LFxuICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5jcmVhdGVXZWJTb2NrZXQodXJsKTtcbiAgICB9XG59KTtcbnZhciBodHRwQ29uZmlndXJhdGlvbiA9IHtcbiAgICB1cmxzOiBodHRwLFxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogZmFsc2UsXG4gICAgc3VwcG9ydHNQaW5nOiB0cnVlLFxuICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbnZhciBzdHJlYW1pbmdDb25maWd1cmF0aW9uID0gZXh0ZW5kKHtcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuSFRUUEZhY3RvcnkuY3JlYXRlU3RyZWFtaW5nU29ja2V0KHVybCk7XG4gICAgfVxufSwgaHR0cENvbmZpZ3VyYXRpb24pO1xudmFyIHBvbGxpbmdDb25maWd1cmF0aW9uID0gZXh0ZW5kKHtcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuSFRUUEZhY3RvcnkuY3JlYXRlUG9sbGluZ1NvY2tldCh1cmwpO1xuICAgIH1cbn0sIGh0dHBDb25maWd1cmF0aW9uKTtcbnZhciB4aHJDb25maWd1cmF0aW9uID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLmlzWEhSU3VwcG9ydGVkKCk7XG4gICAgfVxufTtcbnZhciBYSFJTdHJlYW1pbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0X1RyYW5zcG9ydCgoZXh0ZW5kKHt9LCBzdHJlYW1pbmdDb25maWd1cmF0aW9uLCB4aHJDb25maWd1cmF0aW9uKSkpO1xudmFyIFhIUlBvbGxpbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0X1RyYW5zcG9ydChleHRlbmQoe30sIHBvbGxpbmdDb25maWd1cmF0aW9uLCB4aHJDb25maWd1cmF0aW9uKSk7XG52YXIgVHJhbnNwb3J0cyA9IHtcbiAgICB3czogV1NUcmFuc3BvcnQsXG4gICAgeGhyX3N0cmVhbWluZzogWEhSU3RyZWFtaW5nVHJhbnNwb3J0LFxuICAgIHhocl9wb2xsaW5nOiBYSFJQb2xsaW5nVHJhbnNwb3J0XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0cyA9IChUcmFuc3BvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3RyYW5zcG9ydHMvdHJhbnNwb3J0cy50c1xuXG5cblxuXG5cblxudmFyIFNvY2tKU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfVHJhbnNwb3J0KHtcbiAgICBmaWxlOiAnc29ja2pzJyxcbiAgICB1cmxzOiBzb2NranMsXG4gICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiB0cnVlLFxuICAgIHN1cHBvcnRzUGluZzogZmFsc2UsXG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBpc0luaXRpYWxpemVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuU29ja0pTICE9PSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuU29ja0pTKHVybCwgbnVsbCwge1xuICAgICAgICAgICAganNfcGF0aDogRGVwZW5kZW5jaWVzLmdldFBhdGgoJ3NvY2tqcycsIHtcbiAgICAgICAgICAgICAgICB1c2VUTFM6IG9wdGlvbnMudXNlVExTXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGlnbm9yZV9udWxsX29yaWdpbjogb3B0aW9ucy5pZ25vcmVOdWxsT3JpZ2luXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYmVmb3JlT3BlbjogZnVuY3Rpb24gKHNvY2tldCwgcGF0aCkge1xuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pKTtcbiAgICB9XG59KTtcbnZhciB4ZHJDb25maWd1cmF0aW9uID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgdmFyIHllcyA9IHJ1bnRpbWUuaXNYRFJTdXBwb3J0ZWQoZW52aXJvbm1lbnQudXNlVExTKTtcbiAgICAgICAgcmV0dXJuIHllcztcbiAgICB9XG59O1xudmFyIFhEUlN0cmVhbWluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfVHJhbnNwb3J0KChleHRlbmQoe30sIHN0cmVhbWluZ0NvbmZpZ3VyYXRpb24sIHhkckNvbmZpZ3VyYXRpb24pKSk7XG52YXIgWERSUG9sbGluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfVHJhbnNwb3J0KGV4dGVuZCh7fSwgcG9sbGluZ0NvbmZpZ3VyYXRpb24sIHhkckNvbmZpZ3VyYXRpb24pKTtcbnRyYW5zcG9ydHMueGRyX3N0cmVhbWluZyA9IFhEUlN0cmVhbWluZ1RyYW5zcG9ydDtcbnRyYW5zcG9ydHMueGRyX3BvbGxpbmcgPSBYRFJQb2xsaW5nVHJhbnNwb3J0O1xudHJhbnNwb3J0cy5zb2NranMgPSBTb2NrSlNUcmFuc3BvcnQ7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRzX3RyYW5zcG9ydHMgPSAodHJhbnNwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9uZXRfaW5mby50c1xuXG5jbGFzcyBuZXRfaW5mb19OZXRJbmZvIGV4dGVuZHMgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29ubGluZScpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdvZmZsaW5lJyk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNPbmxpbmUoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm9uTGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLm9uTGluZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnZhciBuZXRfaW5mb19OZXR3b3JrID0gbmV3IG5ldF9pbmZvX05ldEluZm8oKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL2Fzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXIudHNcblxuXG5jbGFzcyBhc3Npc3RhbnRfdG9fdGhlX3RyYW5zcG9ydF9tYW5hZ2VyX0Fzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICB0aGlzLm1pblBpbmdEZWxheSA9IG9wdGlvbnMubWluUGluZ0RlbGF5O1xuICAgICAgICB0aGlzLm1heFBpbmdEZWxheSA9IG9wdGlvbnMubWF4UGluZ0RlbGF5O1xuICAgICAgICB0aGlzLnBpbmdEZWxheSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY3JlYXRlQ29ubmVjdGlvbihuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBleHRlbmQoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogdGhpcy5waW5nRGVsYXlcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy50cmFuc3BvcnQuY3JlYXRlQ29ubmVjdGlvbihuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgdmFyIG9wZW5UaW1lc3RhbXAgPSBudWxsO1xuICAgICAgICB2YXIgb25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29ubmVjdGlvbi51bmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5iaW5kKCdjbG9zZWQnLCBvbkNsb3NlZCk7XG4gICAgICAgICAgICBvcGVuVGltZXN0YW1wID0gdXRpbC5ub3coKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uQ2xvc2VkID0gY2xvc2VFdmVudCA9PiB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA9PT0gMTAwMiB8fCBjbG9zZUV2ZW50LmNvZGUgPT09IDEwMDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZXIucmVwb3J0RGVhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFjbG9zZUV2ZW50Lndhc0NsZWFuICYmIG9wZW5UaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlmZXNwYW4gPSB1dGlsLm5vdygpIC0gb3BlblRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBpZiAobGlmZXNwYW4gPCAyICogdGhpcy5tYXhQaW5nRGVsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLnJlcG9ydERlYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGluZ0RlbGF5ID0gTWF0aC5tYXgobGlmZXNwYW4gLyAyLCB0aGlzLm1pblBpbmdEZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25uZWN0aW9uLmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5pc0FsaXZlKCkgJiYgdGhpcy50cmFuc3BvcnQuaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25uZWN0aW9uL3Byb3RvY29sL3Byb3RvY29sLnRzXG5jb25zdCBQcm90b2NvbCA9IHtcbiAgICBkZWNvZGVNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VFdmVudC5kYXRhKTtcbiAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudERhdGEgPSBtZXNzYWdlRGF0YS5kYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwdXNoZXJFdmVudERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaGVyRXZlbnREYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlRGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHB1c2hlckV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBtZXNzYWdlRGF0YS5ldmVudCxcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBtZXNzYWdlRGF0YS5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHB1c2hlckV2ZW50RGF0YVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS51c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgcHVzaGVyRXZlbnQudXNlcl9pZCA9IG1lc3NhZ2VEYXRhLnVzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHVzaGVyRXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IHsgdHlwZTogJ01lc3NhZ2VQYXJzZUVycm9yJywgZXJyb3I6IGUsIGRhdGE6IG1lc3NhZ2VFdmVudC5kYXRhIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVuY29kZU1lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZlbnQpO1xuICAgIH0sXG4gICAgcHJvY2Vzc0hhbmRzaGFrZTogZnVuY3Rpb24gKG1lc3NhZ2VFdmVudCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IFByb3RvY29sLmRlY29kZU1lc3NhZ2UobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT09ICdwdXNoZXI6Y29ubmVjdGlvbl9lc3RhYmxpc2hlZCcpIHtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZS5kYXRhLmFjdGl2aXR5X3RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnTm8gYWN0aXZpdHkgdGltZW91dCBzcGVjaWZpZWQgaW4gaGFuZHNoYWtlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnY29ubmVjdGVkJyxcbiAgICAgICAgICAgICAgICBpZDogbWVzc2FnZS5kYXRhLnNvY2tldF9pZCxcbiAgICAgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IG1lc3NhZ2UuZGF0YS5hY3Rpdml0eV90aW1lb3V0ICogMTAwMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmV2ZW50ID09PSAncHVzaGVyOmVycm9yJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuZ2V0Q2xvc2VBY3Rpb24obWVzc2FnZS5kYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdGhpcy5nZXRDbG9zZUVycm9yKG1lc3NhZ2UuZGF0YSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyAnSW52YWxpZCBoYW5kc2hha2UnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRDbG9zZUFjdGlvbjogZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQwMDApIHtcbiAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPj0gMTAwMiAmJiBjbG9zZUV2ZW50LmNvZGUgPD0gMTAwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYmFja29mZic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPT09IDQwMDApIHtcbiAgICAgICAgICAgIHJldHVybiAndGxzX29ubHknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQxMDApIHtcbiAgICAgICAgICAgIHJldHVybiAncmVmdXNlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdiYWNrb2ZmJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JldHJ5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAncmVmdXNlZCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldENsb3NlRXJyb3I6IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgIT09IDEwMDAgJiYgY2xvc2VFdmVudC5jb2RlICE9PSAxMDAxKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQdXNoZXJFcnJvcicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBjbG9zZUV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNsb3NlRXZlbnQucmVhc29uIHx8IGNsb3NlRXZlbnQubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwcm90b2NvbF9wcm90b2NvbCA9IChQcm90b2NvbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29ubmVjdGlvbi9jb25uZWN0aW9uLnRzXG5cblxuXG5cbmNsYXNzIGNvbm5lY3Rpb25fQ29ubmVjdGlvbiBleHRlbmRzIGRpc3BhdGNoZXJfRGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRyYW5zcG9ydCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGltZW91dCA9IHRyYW5zcG9ydC5hY3Rpdml0eVRpbWVvdXQ7XG4gICAgICAgIHRoaXMuYmluZExpc3RlbmVycygpO1xuICAgIH1cbiAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5oYW5kbGVzQWN0aXZpdHlDaGVja3MoKTtcbiAgICB9XG4gICAgc2VuZChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKGRhdGEpO1xuICAgIH1cbiAgICBzZW5kX2V2ZW50KG5hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0geyBldmVudDogbmFtZSwgZGF0YTogZGF0YSB9O1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgZXZlbnQuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdFdmVudCBzZW50JywgZXZlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKHByb3RvY29sX3Byb3RvY29sLmVuY29kZU1lc3NhZ2UoZXZlbnQpKTtcbiAgICB9XG4gICAgcGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0LnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5waW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRfZXZlbnQoJ3B1c2hlcjpwaW5nJywge30pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIH1cbiAgICBiaW5kTGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwdXNoZXJFdmVudCA9IHByb3RvY29sX3Byb3RvY29sLmRlY29kZU1lc3NhZ2UobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdNZXNzYWdlUGFyc2VFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2VFdmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHVzaGVyRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0V2ZW50IHJlY2QnLCBwdXNoZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHVzaGVyRXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjplcnJvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1B1c2hlckVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcHVzaGVyRXZlbnQuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOnBpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOnBvbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncG9uZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIHB1c2hlckV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZpdHk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGl2aXR5Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlZDogY2xvc2VFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNsb3NlRXZlbnQgJiYgY2xvc2VFdmVudC5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFdmVudChjbG9zZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xvc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bmJpbmRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBvYmplY3RBcHBseShsaXN0ZW5lcnMsIChsaXN0ZW5lciwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC51bmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvYmplY3RBcHBseShsaXN0ZW5lcnMsIChsaXN0ZW5lciwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUNsb3NlRXZlbnQoY2xvc2VFdmVudCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VBY3Rpb24oY2xvc2VFdmVudCk7XG4gICAgICAgIHZhciBlcnJvciA9IHByb3RvY29sX3Byb3RvY29sLmdldENsb3NlRXJyb3IoY2xvc2VFdmVudCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoYWN0aW9uLCB7IGFjdGlvbjogYWN0aW9uLCBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29ubmVjdGlvbi9oYW5kc2hha2UvaW5kZXgudHNcblxuXG5cbmNsYXNzIGhhbmRzaGFrZV9IYW5kc2hha2Uge1xuICAgIGNvbnN0cnVjdG9yKHRyYW5zcG9ydCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIH1cbiAgICBiaW5kTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm9uTWVzc2FnZSA9IG0gPT4ge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb3RvY29sX3Byb3RvY29sLnByb2Nlc3NIYW5kc2hha2UobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoKCdlcnJvcicsIHsgZXJyb3I6IGUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0LmFjdGlvbiA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaCgnY29ubmVjdGVkJywge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uOiBuZXcgY29ubmVjdGlvbl9Db25uZWN0aW9uKHJlc3VsdC5pZCwgdGhpcy50cmFuc3BvcnQpLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHJlc3VsdC5hY3Rpdml0eVRpbWVvdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoKHJlc3VsdC5hY3Rpb24sIHsgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2xvc2VkID0gY2xvc2VFdmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHByb3RvY29sX3Byb3RvY29sLmdldENsb3NlQWN0aW9uKGNsb3NlRXZlbnQpIHx8ICdiYWNrb2ZmJztcbiAgICAgICAgICAgIHZhciBlcnJvciA9IHByb3RvY29sX3Byb3RvY29sLmdldENsb3NlRXJyb3IoY2xvc2VFdmVudCk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaChhY3Rpb24sIHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5iaW5kKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5iaW5kKCdjbG9zZWQnLCB0aGlzLm9uQ2xvc2VkKTtcbiAgICB9XG4gICAgdW5iaW5kTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC51bmJpbmQoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZCgnY2xvc2VkJywgdGhpcy5vbkNsb3NlZCk7XG4gICAgfVxuICAgIGZpbmlzaChhY3Rpb24sIHBhcmFtcykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKGV4dGVuZCh7IHRyYW5zcG9ydDogdGhpcy50cmFuc3BvcnQsIGFjdGlvbjogYWN0aW9uIH0sIHBhcmFtcykpO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90aW1lbGluZS90aW1lbGluZV9zZW5kZXIudHNcblxuY2xhc3MgdGltZWxpbmVfc2VuZGVyX1RpbWVsaW5lU2VuZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0aW1lbGluZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgfVxuICAgIHNlbmQodXNlVExTLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVsaW5lLnNlbmQocnVudGltZS5UaW1lbGluZVRyYW5zcG9ydC5nZXRBZ2VudCh0aGlzLCB1c2VUTFMpLCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL2NoYW5uZWwudHNcblxuXG5cblxuXG5jbGFzcyBjaGFubmVsX0NoYW5uZWwgZXh0ZW5kcyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xuICAgICAgICBzdXBlcihmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnTm8gY2FsbGJhY2tzIG9uICcgKyBuYW1lICsgJyBmb3IgJyArIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF1dGhvcml6ZShzb2NrZXRJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHsgYXV0aDogJycgfSk7XG4gICAgfVxuICAgIHRyaWdnZXIoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKGV2ZW50LmluZGV4T2YoJ2NsaWVudC0nKSAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhZEV2ZW50TmFtZShcIkV2ZW50ICdcIiArIGV2ZW50ICsgXCInIGRvZXMgbm90IHN0YXJ0IHdpdGggJ2NsaWVudC0nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCd0cmlnZ2VyaW5nQ2xpZW50RXZlbnRzJyk7XG4gICAgICAgICAgICBsb2dnZXIud2FybihgQ2xpZW50IGV2ZW50IHRyaWdnZXJlZCBiZWZvcmUgY2hhbm5lbCAnc3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcgZXZlbnQgLiAke3N1ZmZpeH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wdXNoZXIuc2VuZF9ldmVudChldmVudCwgZGF0YSwgdGhpcy5uYW1lKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3B1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lID09PSAncHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9jb3VudCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uQ291bnRFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSAhPT0gMCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnROYW1lLCBkYXRhLCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlU3Vic2NyaXB0aW9uU3VjY2VlZGVkRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBldmVudC5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVTdWJzY3JpcHRpb25Db3VudEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhLnN1YnNjcmlwdGlvbl9jb3VudCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25Db3VudCA9IGV2ZW50LmRhdGEuc3Vic2NyaXB0aW9uX2NvdW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOnN1YnNjcmlwdGlvbl9jb3VudCcsIGV2ZW50LmRhdGEpO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dGhvcml6ZSh0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZCwgKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6c3Vic2NyaXB0aW9uX2Vycm9yJywgT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQXV0aEVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9LCBlcnJvciBpbnN0YW5jZW9mIEhUVFBBdXRoRXJyb3IgPyB7IHN0YXR1czogZXJyb3Iuc3RhdHVzIH0gOiB7fSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZF9ldmVudCgncHVzaGVyOnN1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogZGF0YS5hdXRoLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2RhdGE6IGRhdGEuY2hhbm5lbF9kYXRhLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZF9ldmVudCgncHVzaGVyOnVuc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYW5jZWxTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVpbnN0YXRlU3Vic2NyaXB0aW9uKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwudHNcblxuY2xhc3MgcHJpdmF0ZV9jaGFubmVsX1ByaXZhdGVDaGFubmVsIGV4dGVuZHMgY2hhbm5lbF9DaGFubmVsIHtcbiAgICBhdXRob3JpemUoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25maWcuY2hhbm5lbEF1dGhvcml6ZXIoe1xuICAgICAgICAgICAgY2hhbm5lbE5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHNvY2tldElkOiBzb2NrZXRJZFxuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL21lbWJlcnMudHNcblxuY2xhc3MgbWVtYmVyc19NZW1iZXJzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICBnZXQoaWQpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLm1lbWJlcnMsIGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgaW5mbzogdGhpcy5tZW1iZXJzW2lkXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgb2JqZWN0QXBwbHkodGhpcy5tZW1iZXJzLCAobWVtYmVyLCBpZCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5nZXQoaWQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldE15SUQoaWQpIHtcbiAgICAgICAgdGhpcy5teUlEID0gaWQ7XG4gICAgfVxuICAgIG9uU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5oYXNoO1xuICAgICAgICB0aGlzLmNvdW50ID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5jb3VudDtcbiAgICAgICAgdGhpcy5tZSA9IHRoaXMuZ2V0KHRoaXMubXlJRCk7XG4gICAgfVxuICAgIGFkZE1lbWJlcihtZW1iZXJEYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZW1iZXJzW21lbWJlckRhdGEudXNlcl9pZF0gPSBtZW1iZXJEYXRhLnVzZXJfaW5mbztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCk7XG4gICAgfVxuICAgIHJlbW92ZU1lbWJlcihtZW1iZXJEYXRhKSB7XG4gICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5tZW1iZXJzW21lbWJlckRhdGEudXNlcl9pZF07XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbWJlcjtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5teUlEID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZSA9IG51bGw7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwudHNcbnZhciBfX2F3YWl0ZXIgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcblxuXG5cblxuY2xhc3MgcHJlc2VuY2VfY2hhbm5lbF9QcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBwcml2YXRlX2NoYW5uZWxfUHJpdmF0ZUNoYW5uZWwge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xuICAgICAgICBzdXBlcihuYW1lLCBwdXNoZXIpO1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBuZXcgbWVtYmVyc19NZW1iZXJzKCk7XG4gICAgfVxuICAgIGF1dGhvcml6ZShzb2NrZXRJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgc3VwZXIuYXV0aG9yaXplKHNvY2tldElkLCAoZXJyb3IsIGF1dGhEYXRhKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgYXV0aERhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aERhdGEuY2hhbm5lbF9kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxEYXRhID0gSlNPTi5wYXJzZShhdXRoRGF0YS5jaGFubmVsX2RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbWJlcnMuc2V0TXlJRChjaGFubmVsRGF0YS51c2VyX2lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucHVzaGVyLnVzZXIuc2lnbmluRG9uZVByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hlci51c2VyLnVzZXJfZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbWJlcnMuc2V0TXlJRCh0aGlzLnB1c2hlci51c2VyLnVzZXJfZGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdhdXRob3JpemF0aW9uRW5kcG9pbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgSW52YWxpZCBhdXRoIHJlc3BvbnNlIGZvciBjaGFubmVsICcke3RoaXMubmFtZX0nLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZXhwZWN0ZWQgJ2NoYW5uZWxfZGF0YScgZmllbGQuICR7c3VmZml4fSwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYG9yIHRoZSB1c2VyIHNob3VsZCBiZSBzaWduZWQgaW4uYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnSW52YWxpZCBhdXRoIHJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYXV0aERhdGEpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW50ZXJuYWxFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGEgPSB7fTtcbiAgICAgICAgICAgIGlmIChldmVudC51c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEudXNlcl9pZCA9IGV2ZW50LnVzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnROYW1lLCBkYXRhLCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlSW50ZXJuYWxFdmVudChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3B1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblN1Y2NlZWRlZEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3B1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fY291bnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uQ291bnRFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXNoZXJfaW50ZXJuYWw6bWVtYmVyX2FkZGVkJzpcbiAgICAgICAgICAgICAgICB2YXIgYWRkZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMuYWRkTWVtYmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOm1lbWJlcl9hZGRlZCcsIGFkZGVkTWVtYmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3B1c2hlcl9pbnRlcm5hbDptZW1iZXJfcmVtb3ZlZCc6XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMucmVtb3ZlTWVtYmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOm1lbWJlcl9yZW1vdmVkJywgcmVtb3ZlZE1lbWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVN1YnNjcmlwdGlvblN1Y2NlZWRlZEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbWJlcnMub25TdWJzY3JpcHRpb24oZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgdGhpcy5tZW1iZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMucmVzZXQoKTtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbn1cblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL3V0ZjgvbGliL3V0ZjguanNcbnZhciB1dGY4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2Jhc2U2NC9saWIvYmFzZTY0LmpzXG52YXIgYmFzZTY0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9lbmNyeXB0ZWRfY2hhbm5lbC50c1xuXG5cblxuXG5cbmNsYXNzIGVuY3J5cHRlZF9jaGFubmVsX0VuY3J5cHRlZENoYW5uZWwgZXh0ZW5kcyBwcml2YXRlX2NoYW5uZWxfUHJpdmF0ZUNoYW5uZWwge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlciwgbmFjbCkge1xuICAgICAgICBzdXBlcihuYW1lLCBwdXNoZXIpO1xuICAgICAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgICAgIHRoaXMubmFjbCA9IG5hY2w7XG4gICAgfVxuICAgIGF1dGhvcml6ZShzb2NrZXRJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgc3VwZXIuYXV0aG9yaXplKHNvY2tldElkLCAoZXJyb3IsIGF1dGhEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYXV0aERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzaGFyZWRTZWNyZXQgPSBhdXRoRGF0YVsnc2hhcmVkX3NlY3JldCddO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRTZWNyZXQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoYE5vIHNoYXJlZF9zZWNyZXQga2V5IGluIGF1dGggcGF5bG9hZCBmb3IgZW5jcnlwdGVkIGNoYW5uZWw6ICR7dGhpcy5uYW1lfWApLCBudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtleSA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKHNoYXJlZFNlY3JldCk7XG4gICAgICAgICAgICBkZWxldGUgYXV0aERhdGFbJ3NoYXJlZF9zZWNyZXQnXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGF1dGhEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRyaWdnZXIoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3VwcG9ydGVkRmVhdHVyZSgnQ2xpZW50IGV2ZW50cyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgZm9yIGVuY3J5cHRlZCBjaGFubmVscycpO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgPT09IDAgfHxcbiAgICAgICAgICAgIGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXI6JykgPT09IDApIHtcbiAgICAgICAgICAgIHN1cGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUVuY3J5cHRlZEV2ZW50KGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgfVxuICAgIGhhbmRsZUVuY3J5cHRlZEV2ZW50KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5rZXkpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgZW5jcnlwdGVkIGV2ZW50IGJlZm9yZSBrZXkgaGFzIGJlZW4gcmV0cmlldmVkIGZyb20gdGhlIGF1dGhFbmRwb2ludCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YS5jaXBoZXJ0ZXh0IHx8ICFkYXRhLm5vbmNlKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ1VuZXhwZWN0ZWQgZm9ybWF0IGZvciBlbmNyeXB0ZWQgZXZlbnQsIGV4cGVjdGVkIG9iamVjdCB3aXRoIGBjaXBoZXJ0ZXh0YCBhbmQgYG5vbmNlYCBmaWVsZHMsIGdvdDogJyArXG4gICAgICAgICAgICAgICAgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNpcGhlclRleHQgPSBPYmplY3QoYmFzZTY0W1wiZGVjb2RlXCJdKShkYXRhLmNpcGhlcnRleHQpO1xuICAgICAgICBpZiAoY2lwaGVyVGV4dC5sZW5ndGggPCB0aGlzLm5hY2wuc2VjcmV0Ym94Lm92ZXJoZWFkTGVuZ3RoKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEV4cGVjdGVkIGVuY3J5cHRlZCBldmVudCBjaXBoZXJ0ZXh0IGxlbmd0aCB0byBiZSAke3RoaXMubmFjbC5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGh9LCBnb3Q6ICR7Y2lwaGVyVGV4dC5sZW5ndGh9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vbmNlID0gT2JqZWN0KGJhc2U2NFtcImRlY29kZVwiXSkoZGF0YS5ub25jZSk7XG4gICAgICAgIGlmIChub25jZS5sZW5ndGggPCB0aGlzLm5hY2wuc2VjcmV0Ym94Lm5vbmNlTGVuZ3RoKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEV4cGVjdGVkIGVuY3J5cHRlZCBldmVudCBub25jZSBsZW5ndGggdG8gYmUgJHt0aGlzLm5hY2wuc2VjcmV0Ym94Lm5vbmNlTGVuZ3RofSwgZ290OiAke25vbmNlLmxlbmd0aH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnl0ZXMgPSB0aGlzLm5hY2wuc2VjcmV0Ym94Lm9wZW4oY2lwaGVyVGV4dCwgbm9uY2UsIHRoaXMua2V5KTtcbiAgICAgICAgaWYgKGJ5dGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0ZhaWxlZCB0byBkZWNyeXB0IGFuIGV2ZW50LCBwcm9iYWJseSBiZWNhdXNlIGl0IHdhcyBlbmNyeXB0ZWQgd2l0aCBhIGRpZmZlcmVudCBrZXkuIEZldGNoaW5nIGEgbmV3IGtleSBmcm9tIHRoZSBhdXRoRW5kcG9pbnQuLi4nKTtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXplKHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkLCAoZXJyb3IsIGF1dGhEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRmFpbGVkIHRvIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhdXRoRW5kcG9pbnQ6ICR7YXV0aERhdGF9LiBVbmFibGUgdG8gZmV0Y2ggbmV3IGtleSwgc28gZHJvcHBpbmcgZW5jcnlwdGVkIGV2ZW50YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnl0ZXMgPSB0aGlzLm5hY2wuc2VjcmV0Ym94Lm9wZW4oY2lwaGVyVGV4dCwgbm9uY2UsIHRoaXMua2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gZGVjcnlwdCBldmVudCB3aXRoIG5ldyBrZXkuIERyb3BwaW5nIGVuY3J5cHRlZCBldmVudGApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChldmVudCwgdGhpcy5nZXREYXRhVG9FbWl0KGJ5dGVzKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCB0aGlzLmdldERhdGFUb0VtaXQoYnl0ZXMpKTtcbiAgICB9XG4gICAgZ2V0RGF0YVRvRW1pdChieXRlcykge1xuICAgICAgICBsZXQgcmF3ID0gT2JqZWN0KHV0ZjhbXCJkZWNvZGVcIl0pKGJ5dGVzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJhdyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF3O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vY29ubmVjdGlvbl9tYW5hZ2VyLnRzXG5cblxuXG5cblxuY2xhc3MgY29ubmVjdGlvbl9tYW5hZ2VyX0Nvbm5lY3Rpb25NYW5hZ2VyIGV4dGVuZHMgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsaXplZCc7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5vcHRpb25zLnRpbWVsaW5lO1xuICAgICAgICB0aGlzLnVzaW5nVExTID0gdGhpcy5vcHRpb25zLnVzZVRMUztcbiAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrcyA9IHRoaXMuYnVpbGRFcnJvckNhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MgPSB0aGlzLmJ1aWxkQ29ubmVjdGlvbkNhbGxiYWNrcyh0aGlzLmVycm9yQ2FsbGJhY2tzKTtcbiAgICAgICAgdGhpcy5oYW5kc2hha2VDYWxsYmFja3MgPSB0aGlzLmJ1aWxkSGFuZHNoYWtlQ2FsbGJhY2tzKHRoaXMuZXJyb3JDYWxsYmFja3MpO1xuICAgICAgICB2YXIgTmV0d29yayA9IHJ1bnRpbWUuZ2V0TmV0d29yaygpO1xuICAgICAgICBOZXR3b3JrLmJpbmQoJ29ubGluZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IG5ldGluZm86ICdvbmxpbmUnIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjb25uZWN0aW5nJyB8fCB0aGlzLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXRyeUluKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgTmV0d29yay5iaW5kKCdvZmZsaW5lJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgbmV0aW5mbzogJ29mZmxpbmUnIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RyYXRlZ3koKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbiB8fCB0aGlzLnJ1bm5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdmYWlsZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdjb25uZWN0aW5nJyk7XG4gICAgICAgIHRoaXMuc3RhcnRDb25uZWN0aW5nKCk7XG4gICAgICAgIHRoaXMuc2V0VW5hdmFpbGFibGVUaW1lcigpO1xuICAgIH1cbiAgICBzZW5kKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbmRfZXZlbnQobmFtZSwgZGF0YSwgY2hhbm5lbCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmRfZXZlbnQobmFtZSwgZGF0YSwgY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0SW50ZXJuYWxseSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdkaXNjb25uZWN0ZWQnKTtcbiAgICB9XG4gICAgaXNVc2luZ1RMUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNpbmdUTFM7XG4gICAgfVxuICAgIHN0YXJ0Q29ubmVjdGluZygpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gKGVycm9yLCBoYW5kc2hha2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmVyID0gdGhpcy5zdHJhdGVneS5jb25uZWN0KDAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UuYWN0aW9uID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSGFuZHNoYWtlRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGhhbmRzaGFrZS5lcnJvclxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZS5lcnJvcih7IGhhbmRzaGFrZUVycm9yOiBoYW5kc2hha2UuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0Q29ubmVjdGluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRzaGFrZUNhbGxiYWNrc1toYW5kc2hha2UuYWN0aW9uXShoYW5kc2hha2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSB0aGlzLnN0cmF0ZWd5LmNvbm5lY3QoMCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBhYm9ydENvbm5lY3RpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5lcikge1xuICAgICAgICAgICAgdGhpcy5ydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucnVubmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0SW50ZXJuYWxseSgpIHtcbiAgICAgICAgdGhpcy5hYm9ydENvbm5lY3RpbmcoKTtcbiAgICAgICAgdGhpcy5jbGVhclJldHJ5VGltZXIoKTtcbiAgICAgICAgdGhpcy5jbGVhclVuYXZhaWxhYmxlVGltZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLmFiYW5kb25Db25uZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU3RyYXRlZ3koKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSB0aGlzLm9wdGlvbnMuZ2V0U3RyYXRlZ3koe1xuICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLnRpbWVsaW5lLFxuICAgICAgICAgICAgdXNlVExTOiB0aGlzLnVzaW5nVExTXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXRyeUluKGRlbGF5KSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IGFjdGlvbjogJ3JldHJ5JywgZGVsYXk6IGRlbGF5IH0pO1xuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3RpbmdfaW4nLCBNYXRoLnJvdW5kKGRlbGF5IC8gMTAwMCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmV0cnlUaW1lciA9IG5ldyB0aW1lcnNfT25lT2ZmVGltZXIoZGVsYXkgfHwgMCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0SW50ZXJuYWxseSgpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhclJldHJ5VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJldHJ5VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgICAgICB0aGlzLnJldHJ5VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFVuYXZhaWxhYmxlVGltZXIoKSB7XG4gICAgICAgIHRoaXMudW5hdmFpbGFibGVUaW1lciA9IG5ldyB0aW1lcnNfT25lT2ZmVGltZXIodGhpcy5vcHRpb25zLnVuYXZhaWxhYmxlVGltZW91dCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyVW5hdmFpbGFibGVUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudW5hdmFpbGFibGVUaW1lcikge1xuICAgICAgICAgICAgdGhpcy51bmF2YWlsYWJsZVRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZW5kQWN0aXZpdHlDaGVjaygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucGluZygpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIgPSBuZXcgdGltZXJzX09uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy5wb25nVGltZW91dCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5lcnJvcih7IHBvbmdfdGltZWRfb3V0OiB0aGlzLm9wdGlvbnMucG9uZ1RpbWVvdXQgfSk7XG4gICAgICAgICAgICB0aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXNldEFjdGl2aXR5Q2hlY2soKSB7XG4gICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbiAmJiAhdGhpcy5jb25uZWN0aW9uLmhhbmRsZXNBY3Rpdml0eUNoZWNrcygpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIgPSBuZXcgdGltZXJzX09uZU9mZlRpbWVyKHRoaXMuYWN0aXZpdHlUaW1lb3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcEFjdGl2aXR5Q2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnVpbGRDb25uZWN0aW9uQ2FsbGJhY2tzKGVycm9yQ2FsbGJhY2tzKSB7XG4gICAgICAgIHJldHVybiBleHRlbmQoe30sIGVycm9yQ2FsbGJhY2tzLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpbmc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRfZXZlbnQoJ3B1c2hlcjpwb25nJywge30pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2aXR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hYmFuZG9uQ29ubmVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJldHJ5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRyeUluKDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJ1aWxkSGFuZHNoYWtlQ2FsbGJhY2tzKGVycm9yQ2FsbGJhY2tzKSB7XG4gICAgICAgIHJldHVybiBleHRlbmQoe30sIGVycm9yQ2FsbGJhY2tzLCB7XG4gICAgICAgICAgICBjb25uZWN0ZWQ6IChoYW5kc2hha2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5VGltZW91dCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5jb25uZWN0aW9uLmFjdGl2aXR5VGltZW91dCB8fCBJbmZpbml0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclVuYXZhaWxhYmxlVGltZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbm5lY3Rpb24oaGFuZHNoYWtlLmNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0X2lkID0gdGhpcy5jb25uZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ2Nvbm5lY3RlZCcsIHsgc29ja2V0X2lkOiB0aGlzLnNvY2tldF9pZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJ1aWxkRXJyb3JDYWxsYmFja3MoKSB7XG4gICAgICAgIGxldCB3aXRoRXJyb3JFbWl0dGVkID0gY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB7IHR5cGU6ICdXZWJTb2NrZXRFcnJvcicsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGxzX29ubHk6IHdpdGhFcnJvckVtaXR0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNpbmdUTFMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RyYXRlZ3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlZnVzZWQ6IHdpdGhFcnJvckVtaXR0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBiYWNrb2ZmOiB3aXRoRXJyb3JFbWl0dGVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJ5SW4oMTAwMCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJldHJ5OiB3aXRoRXJyb3JFbWl0dGVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzZXRDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcbiAgICAgICAgZm9yICh2YXIgZXZlbnQgaW4gdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZChldmVudCwgdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzW2V2ZW50XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldEFjdGl2aXR5Q2hlY2soKTtcbiAgICB9XG4gICAgYWJhbmRvbkNvbm5lY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi51bmJpbmQoZXZlbnQsIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrc1tldmVudF0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9XG4gICAgdXBkYXRlU3RhdGUobmV3U3RhdGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBuZXdTdGF0ZSkge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlRGVzY3JpcHRpb24gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZURlc2NyaXB0aW9uID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlRGVzY3JpcHRpb24gKz0gJyB3aXRoIG5ldyBzb2NrZXQgSUQgJyArIGRhdGEuc29ja2V0X2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdTdGF0ZSBjaGFuZ2VkJywgcHJldmlvdXNTdGF0ZSArICcgLT4gJyArIG5ld1N0YXRlRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgc3RhdGU6IG5ld1N0YXRlLCBwYXJhbXM6IGRhdGEgfSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YXRlX2NoYW5nZScsIHsgcHJldmlvdXM6IHByZXZpb3VzU3RhdGUsIGN1cnJlbnQ6IG5ld1N0YXRlIH0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0KG5ld1N0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG91bGRSZXRyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdjb25uZWN0aW5nJyB8fCB0aGlzLnN0YXRlID09PSAnY29ubmVjdGVkJztcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvY2hhbm5lbHMudHNcblxuXG5cblxuY2xhc3MgY2hhbm5lbHNfQ2hhbm5lbHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuICAgIGFkZChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgICBhbGwoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXModGhpcy5jaGFubmVscyk7XG4gICAgfVxuICAgIGZpbmQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gICAgcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIG9iamVjdEFwcGx5KHRoaXMuY2hhbm5lbHMsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgICAgICAgICBjaGFubmVsLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLWVuY3J5cHRlZC0nKSA9PT0gMCkge1xuICAgICAgICBpZiAocHVzaGVyLmNvbmZpZy5uYWNsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVFbmNyeXB0ZWRDaGFubmVsKG5hbWUsIHB1c2hlciwgcHVzaGVyLmNvbmZpZy5uYWNsKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXJyTXNnID0gJ1RyaWVkIHRvIHN1YnNjcmliZSB0byBhIHByaXZhdGUtZW5jcnlwdGVkLSBjaGFubmVsIGJ1dCBubyBuYWNsIGltcGxlbWVudGF0aW9uIGF2YWlsYWJsZSc7XG4gICAgICAgIGxldCBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2VuY3J5cHRlZENoYW5uZWxTdXBwb3J0Jyk7XG4gICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZEZlYXR1cmUoYCR7ZXJyTXNnfS4gJHtzdWZmaXh9YCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJpdmF0ZS0nKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVQcml2YXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZVByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgQmFkQ2hhbm5lbE5hbWUoJ0Nhbm5vdCBjcmVhdGUgYSBjaGFubmVsIHdpdGggbmFtZSBcIicgKyBuYW1lICsgJ1wiLicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy9mYWN0b3J5LnRzXG5cblxuXG5cblxuXG5cblxuXG52YXIgRmFjdG9yeSA9IHtcbiAgICBjcmVhdGVDaGFubmVscygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjaGFubmVsc19DaGFubmVscygpO1xuICAgIH0sXG4gICAgY3JlYXRlQ29ubmVjdGlvbk1hbmFnZXIoa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgY29ubmVjdGlvbl9tYW5hZ2VyX0Nvbm5lY3Rpb25NYW5hZ2VyKGtleSwgb3B0aW9ucyk7XG4gICAgfSxcbiAgICBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxfQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH0sXG4gICAgY3JlYXRlUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgcHJpdmF0ZV9jaGFubmVsX1ByaXZhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgcHJlc2VuY2VfY2hhbm5lbF9QcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9LFxuICAgIGNyZWF0ZUVuY3J5cHRlZENoYW5uZWwobmFtZSwgcHVzaGVyLCBuYWNsKSB7XG4gICAgICAgIHJldHVybiBuZXcgZW5jcnlwdGVkX2NoYW5uZWxfRW5jcnlwdGVkQ2hhbm5lbChuYW1lLCBwdXNoZXIsIG5hY2wpO1xuICAgIH0sXG4gICAgY3JlYXRlVGltZWxpbmVTZW5kZXIodGltZWxpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aW1lbGluZV9zZW5kZXJfVGltZWxpbmVTZW5kZXIodGltZWxpbmUsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY3JlYXRlSGFuZHNoYWtlKHRyYW5zcG9ydCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBoYW5kc2hha2VfSGFuZHNoYWtlKHRyYW5zcG9ydCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgY3JlYXRlQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKG1hbmFnZXIsIHRyYW5zcG9ydCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXJfQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKG1hbmFnZXIsIHRyYW5zcG9ydCwgb3B0aW9ucyk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGZhY3RvcnkgPSAoRmFjdG9yeSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy90cmFuc3BvcnRfbWFuYWdlci50c1xuXG5jbGFzcyB0cmFuc3BvcnRfbWFuYWdlcl9UcmFuc3BvcnRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMubGl2ZXNMZWZ0ID0gdGhpcy5vcHRpb25zLmxpdmVzIHx8IEluZmluaXR5O1xuICAgIH1cbiAgICBnZXRBc3Npc3RhbnQodHJhbnNwb3J0KSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZUFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcih0aGlzLCB0cmFuc3BvcnQsIHtcbiAgICAgICAgICAgIG1pblBpbmdEZWxheTogdGhpcy5vcHRpb25zLm1pblBpbmdEZWxheSxcbiAgICAgICAgICAgIG1heFBpbmdEZWxheTogdGhpcy5vcHRpb25zLm1heFBpbmdEZWxheVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNBbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGl2ZXNMZWZ0ID4gMDtcbiAgICB9XG4gICAgcmVwb3J0RGVhdGgoKSB7XG4gICAgICAgIHRoaXMubGl2ZXNMZWZ0IC09IDE7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvc2VxdWVudGlhbF9zdHJhdGVneS50c1xuXG5cblxuY2xhc3Mgc2VxdWVudGlhbF9zdHJhdGVneV9TZXF1ZW50aWFsU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWdpZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcbiAgICAgICAgdGhpcy5sb29wID0gQm9vbGVhbihvcHRpb25zLmxvb3ApO1xuICAgICAgICB0aGlzLmZhaWxGYXN0ID0gQm9vbGVhbihvcHRpb25zLmZhaWxGYXN0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgICB0aGlzLnRpbWVvdXRMaW1pdCA9IG9wdGlvbnMudGltZW91dExpbWl0O1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGFueSh0aGlzLnN0cmF0ZWdpZXMsIHV0aWwubWV0aG9kKCdpc1N1cHBvcnRlZCcpKTtcbiAgICB9XG4gICAgY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0cmF0ZWdpZXMgPSB0aGlzLnN0cmF0ZWdpZXM7XG4gICAgICAgIHZhciBjdXJyZW50ID0gMDtcbiAgICAgICAgdmFyIHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQ7XG4gICAgICAgIHZhciBydW5uZXIgPSBudWxsO1xuICAgICAgICB2YXIgdHJ5TmV4dFN0cmF0ZWd5ID0gKGVycm9yLCBoYW5kc2hha2UpID0+IHtcbiAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgJSBzdHJhdGVnaWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBzdHJhdGVnaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHRpbWVvdXQgKiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dExpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IE1hdGgubWluKHRpbWVvdXQsIHRoaXMudGltZW91dExpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSB0aGlzLnRyeVN0cmF0ZWd5KHN0cmF0ZWdpZXNbY3VycmVudF0sIG1pblByaW9yaXR5LCB7IHRpbWVvdXQsIGZhaWxGYXN0OiB0aGlzLmZhaWxGYXN0IH0sIHRyeU5leHRTdHJhdGVneSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJ1bm5lciA9IHRoaXMudHJ5U3RyYXRlZ3koc3RyYXRlZ2llc1tjdXJyZW50XSwgbWluUHJpb3JpdHksIHsgdGltZW91dDogdGltZW91dCwgZmFpbEZhc3Q6IHRoaXMuZmFpbEZhc3QgfSwgdHJ5TmV4dFN0cmF0ZWd5KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBtaW5Qcmlvcml0eSA9IHA7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5lcikge1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyeVN0cmF0ZWd5KHN0cmF0ZWd5LCBtaW5Qcmlvcml0eSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHRpbWVyID0gbnVsbDtcbiAgICAgICAgdmFyIHJ1bm5lciA9IG51bGw7XG4gICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICB0aW1lciA9IG5ldyB0aW1lcnNfT25lT2ZmVGltZXIob3B0aW9ucy50aW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBydW5uZXIgPSBzdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIHRpbWVyICYmIHRpbWVyLmlzUnVubmluZygpICYmICFvcHRpb25zLmZhaWxGYXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGhhbmRzaGFrZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2Jlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3kudHNcblxuXG5jbGFzcyBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5X0Jlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWdpZXMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiBhbnkodGhpcy5zdHJhdGVnaWVzLCB1dGlsLm1ldGhvZCgnaXNTdXBwb3J0ZWQnKSk7XG4gICAgfVxuICAgIGNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjb25uZWN0KHRoaXMuc3RyYXRlZ2llcywgbWluUHJpb3JpdHksIGZ1bmN0aW9uIChpLCBydW5uZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICBydW5uZXJzW2ldLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxSdW5uZXJzRmFpbGVkKHJ1bm5lcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFwcGx5KHJ1bm5lcnMsIGZ1bmN0aW9uIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkoaGFuZHNoYWtlLnRyYW5zcG9ydC5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFuZHNoYWtlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbm5lY3Qoc3RyYXRlZ2llcywgbWluUHJpb3JpdHksIGNhbGxiYWNrQnVpbGRlcikge1xuICAgIHZhciBydW5uZXJzID0gbWFwKHN0cmF0ZWdpZXMsIGZ1bmN0aW9uIChzdHJhdGVneSwgaSwgXywgcnMpIHtcbiAgICAgICAgcmV0dXJuIHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrQnVpbGRlcihpLCBycykpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHBseShydW5uZXJzLCBhYm9ydFJ1bm5lcik7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBhcHBseShydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBhbGxSdW5uZXJzRmFpbGVkKHJ1bm5lcnMpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbnNfYWxsKHJ1bm5lcnMsIGZ1bmN0aW9uIChydW5uZXIpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVubmVyLmVycm9yKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFib3J0UnVubmVyKHJ1bm5lcikge1xuICAgIGlmICghcnVubmVyLmVycm9yICYmICFydW5uZXIuYWJvcnRlZCkge1xuICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgcnVubmVyLmFib3J0ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3dlYnNvY2tldF9wcmlvcml0aXplZF9jYWNoZWRfc3RyYXRlZ3kudHNcblxuXG5cblxuY2xhc3Mgd2Vic29ja2V0X3ByaW9yaXRpemVkX2NhY2hlZF9zdHJhdGVneV9XZWJTb2NrZXRQcmlvcml0aXplZENhY2hlZFN0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3RvcihzdHJhdGVneSwgdHJhbnNwb3J0cywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0cyA9IHRyYW5zcG9ydHM7XG4gICAgICAgIHRoaXMudHRsID0gb3B0aW9ucy50dGwgfHwgMTgwMCAqIDEwMDA7XG4gICAgICAgIHRoaXMudXNpbmdUTFMgPSBvcHRpb25zLnVzZVRMUztcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IG9wdGlvbnMudGltZWxpbmU7XG4gICAgfVxuICAgIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgICBjb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgdXNpbmdUTFMgPSB0aGlzLnVzaW5nVExTO1xuICAgICAgICB2YXIgaW5mbyA9IGZldGNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICB2YXIgY2FjaGVTa2lwQ291bnQgPSBpbmZvICYmIGluZm8uY2FjaGVTa2lwQ291bnQgPyBpbmZvLmNhY2hlU2tpcENvdW50IDogMDtcbiAgICAgICAgdmFyIHN0cmF0ZWdpZXMgPSBbdGhpcy5zdHJhdGVneV07XG4gICAgICAgIGlmIChpbmZvICYmIGluZm8udGltZXN0YW1wICsgdGhpcy50dGwgPj0gdXRpbC5ub3coKSkge1xuICAgICAgICAgICAgdmFyIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1tpbmZvLnRyYW5zcG9ydF07XG4gICAgICAgICAgICBpZiAodHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFsnd3MnLCAnd3NzJ10uaW5jbHVkZXMoaW5mby50cmFuc3BvcnQpIHx8IGNhY2hlU2tpcENvdW50ID4gMykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0OiBpbmZvLnRyYW5zcG9ydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVuY3k6IGluZm8ubGF0ZW5jeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ2llcy5wdXNoKG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneShbdHJhbnNwb3J0XSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogaW5mby5sYXRlbmN5ICogMiArIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsRmFzdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVNraXBDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnRUaW1lc3RhbXAgPSB1dGlsLm5vdygpO1xuICAgICAgICB2YXIgcnVubmVyID0gc3RyYXRlZ2llc1xuICAgICAgICAgICAgLnBvcCgpXG4gICAgICAgICAgICAuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gY2IoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZmx1c2hUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUyk7XG4gICAgICAgICAgICAgICAgaWYgKHN0cmF0ZWdpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWVzdGFtcCA9IHV0aWwubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lciA9IHN0cmF0ZWdpZXMucG9wKCkuY29ubmVjdChtaW5Qcmlvcml0eSwgY2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JlVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMsIGhhbmRzaGFrZS50cmFuc3BvcnQubmFtZSwgdXRpbC5ub3coKSAtIHN0YXJ0VGltZXN0YW1wLCBjYWNoZVNraXBDb3VudCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFuZHNoYWtlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKSB7XG4gICAgcmV0dXJuICdwdXNoZXJUcmFuc3BvcnQnICsgKHVzaW5nVExTID8gJ1RMUycgOiAnTm9uVExTJyk7XG59XG5mdW5jdGlvbiBmZXRjaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZENhY2hlID0gc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleSh1c2luZ1RMUyldO1xuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDYWNoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRDYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc3RvcmVUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUywgdHJhbnNwb3J0LCBsYXRlbmN5LCBjYWNoZVNraXBDb3VudCkge1xuICAgIHZhciBzdG9yYWdlID0gcnVudGltZS5nZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleSh1c2luZ1RMUyldID0gc2FmZUpTT05TdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdXRpbC5ub3coKSxcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQ6IHRyYW5zcG9ydCxcbiAgICAgICAgICAgICAgICBsYXRlbmN5OiBsYXRlbmN5LFxuICAgICAgICAgICAgICAgIGNhY2hlU2tpcENvdW50OiBjYWNoZVNraXBDb3VudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2RlbGF5ZWRfc3RyYXRlZ3kudHNcblxuY2xhc3MgZGVsYXllZF9zdHJhdGVneV9EZWxheWVkU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5LCB7IGRlbGF5OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHsgZGVsYXk6IG51bWJlciB9O1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9XG4gICAgY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0cmF0ZWd5ID0gdGhpcy5zdHJhdGVneTtcbiAgICAgICAgdmFyIHJ1bm5lcjtcbiAgICAgICAgdmFyIHRpbWVyID0gbmV3IHRpbWVyc19PbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMuZGVsYXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5lciA9IHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9pZl9zdHJhdGVneS50c1xuY2xhc3MgSWZTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3IodGVzdCwgdHJ1ZUJyYW5jaCwgZmFsc2VCcmFuY2gpIHtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy50cnVlQnJhbmNoID0gdHJ1ZUJyYW5jaDtcbiAgICAgICAgdGhpcy5mYWxzZUJyYW5jaCA9IGZhbHNlQnJhbmNoO1xuICAgIH1cbiAgICBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgdmFyIGJyYW5jaCA9IHRoaXMudGVzdCgpID8gdGhpcy50cnVlQnJhbmNoIDogdGhpcy5mYWxzZUJyYW5jaDtcbiAgICAgICAgcmV0dXJuIGJyYW5jaC5pc1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgICBjb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgYnJhbmNoID0gdGhpcy50ZXN0KCkgPyB0aGlzLnRydWVCcmFuY2ggOiB0aGlzLmZhbHNlQnJhbmNoO1xuICAgICAgICByZXR1cm4gYnJhbmNoLmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9maXJzdF9jb25uZWN0ZWRfc3RyYXRlZ3kudHNcbmNsYXNzIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5KSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfVxuICAgIGNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBydW5uZXIgPSB0aGlzLnN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgaGFuZHNoYWtlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZGVmYXVsdF9zdHJhdGVneS50c1xuXG5cblxuXG5cblxuXG5mdW5jdGlvbiB0ZXN0U3VwcG9ydHNTdHJhdGVneShzdHJhdGVneSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzdHJhdGVneS5pc1N1cHBvcnRlZCgpO1xuICAgIH07XG59XG52YXIgZ2V0RGVmYXVsdFN0cmF0ZWd5ID0gZnVuY3Rpb24gKGNvbmZpZywgYmFzZU9wdGlvbnMsIGRlZmluZVRyYW5zcG9ydCkge1xuICAgIHZhciBkZWZpbmVkVHJhbnNwb3J0cyA9IHt9O1xuICAgIGZ1bmN0aW9uIGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KG5hbWUsIHR5cGUsIHByaW9yaXR5LCBvcHRpb25zLCBtYW5hZ2VyKSB7XG4gICAgICAgIHZhciB0cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnQoY29uZmlnLCBuYW1lLCB0eXBlLCBwcmlvcml0eSwgb3B0aW9ucywgbWFuYWdlcik7XG4gICAgICAgIGRlZmluZWRUcmFuc3BvcnRzW25hbWVdID0gdHJhbnNwb3J0O1xuICAgICAgICByZXR1cm4gdHJhbnNwb3J0O1xuICAgIH1cbiAgICB2YXIgd3Nfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VPcHRpb25zLCB7XG4gICAgICAgIGhvc3ROb25UTFM6IGNvbmZpZy53c0hvc3QgKyAnOicgKyBjb25maWcud3NQb3J0LFxuICAgICAgICBob3N0VExTOiBjb25maWcud3NIb3N0ICsgJzonICsgY29uZmlnLndzc1BvcnQsXG4gICAgICAgIGh0dHBQYXRoOiBjb25maWcud3NQYXRoXG4gICAgfSk7XG4gICAgdmFyIHdzc19vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgd3Nfb3B0aW9ucywge1xuICAgICAgICB1c2VUTFM6IHRydWVcbiAgICB9KTtcbiAgICB2YXIgc29ja2pzX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlT3B0aW9ucywge1xuICAgICAgICBob3N0Tm9uVExTOiBjb25maWcuaHR0cEhvc3QgKyAnOicgKyBjb25maWcuaHR0cFBvcnQsXG4gICAgICAgIGhvc3RUTFM6IGNvbmZpZy5odHRwSG9zdCArICc6JyArIGNvbmZpZy5odHRwc1BvcnQsXG4gICAgICAgIGh0dHBQYXRoOiBjb25maWcuaHR0cFBhdGhcbiAgICB9KTtcbiAgICB2YXIgdGltZW91dHMgPSB7XG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHRpbWVvdXQ6IDE1MDAwLFxuICAgICAgICB0aW1lb3V0TGltaXQ6IDYwMDAwXG4gICAgfTtcbiAgICB2YXIgd3NfbWFuYWdlciA9IG5ldyB0cmFuc3BvcnRfbWFuYWdlcl9UcmFuc3BvcnRNYW5hZ2VyKHtcbiAgICAgICAgbWluUGluZ0RlbGF5OiAxMDAwMCxcbiAgICAgICAgbWF4UGluZ0RlbGF5OiBjb25maWcuYWN0aXZpdHlUaW1lb3V0XG4gICAgfSk7XG4gICAgdmFyIHN0cmVhbWluZ19tYW5hZ2VyID0gbmV3IHRyYW5zcG9ydF9tYW5hZ2VyX1RyYW5zcG9ydE1hbmFnZXIoe1xuICAgICAgICBsaXZlczogMixcbiAgICAgICAgbWluUGluZ0RlbGF5OiAxMDAwMCxcbiAgICAgICAgbWF4UGluZ0RlbGF5OiBjb25maWcuYWN0aXZpdHlUaW1lb3V0XG4gICAgfSk7XG4gICAgdmFyIHdzX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd3cycsICd3cycsIDMsIHdzX29wdGlvbnMsIHdzX21hbmFnZXIpO1xuICAgIHZhciB3c3NfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3dzcycsICd3cycsIDMsIHdzc19vcHRpb25zLCB3c19tYW5hZ2VyKTtcbiAgICB2YXIgc29ja2pzX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCdzb2NranMnLCAnc29ja2pzJywgMSwgc29ja2pzX29wdGlvbnMpO1xuICAgIHZhciB4aHJfc3RyZWFtaW5nX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd4aHJfc3RyZWFtaW5nJywgJ3hocl9zdHJlYW1pbmcnLCAxLCBzb2NranNfb3B0aW9ucywgc3RyZWFtaW5nX21hbmFnZXIpO1xuICAgIHZhciB4ZHJfc3RyZWFtaW5nX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd4ZHJfc3RyZWFtaW5nJywgJ3hkcl9zdHJlYW1pbmcnLCAxLCBzb2NranNfb3B0aW9ucywgc3RyZWFtaW5nX21hbmFnZXIpO1xuICAgIHZhciB4aHJfcG9sbGluZ190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgneGhyX3BvbGxpbmcnLCAneGhyX3BvbGxpbmcnLCAxLCBzb2NranNfb3B0aW9ucyk7XG4gICAgdmFyIHhkcl9wb2xsaW5nX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd4ZHJfcG9sbGluZycsICd4ZHJfcG9sbGluZycsIDEsIHNvY2tqc19vcHRpb25zKTtcbiAgICB2YXIgd3NfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneShbd3NfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciB3c3NfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneShbd3NzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgc29ja2pzX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneV9TZXF1ZW50aWFsU3RyYXRlZ3koW3NvY2tqc190cmFuc3BvcnRdLCB0aW1lb3V0cyk7XG4gICAgdmFyIHN0cmVhbWluZ19sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3lfU2VxdWVudGlhbFN0cmF0ZWd5KFtcbiAgICAgICAgbmV3IElmU3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koeGhyX3N0cmVhbWluZ190cmFuc3BvcnQpLCB4aHJfc3RyZWFtaW5nX3RyYW5zcG9ydCwgeGRyX3N0cmVhbWluZ190cmFuc3BvcnQpXG4gICAgXSwgdGltZW91dHMpO1xuICAgIHZhciBwb2xsaW5nX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneV9TZXF1ZW50aWFsU3RyYXRlZ3koW1xuICAgICAgICBuZXcgSWZTdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneSh4aHJfcG9sbGluZ190cmFuc3BvcnQpLCB4aHJfcG9sbGluZ190cmFuc3BvcnQsIHhkcl9wb2xsaW5nX3RyYW5zcG9ydClcbiAgICBdLCB0aW1lb3V0cyk7XG4gICAgdmFyIGh0dHBfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneShbXG4gICAgICAgIG5ldyBJZlN0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHN0cmVhbWluZ19sb29wKSwgbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneShbXG4gICAgICAgICAgICBzdHJlYW1pbmdfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5X0RlbGF5ZWRTdHJhdGVneShwb2xsaW5nX2xvb3AsIHsgZGVsYXk6IDQwMDAgfSlcbiAgICAgICAgXSksIHBvbGxpbmdfbG9vcClcbiAgICBdLCB0aW1lb3V0cyk7XG4gICAgdmFyIGh0dHBfZmFsbGJhY2tfbG9vcCA9IG5ldyBJZlN0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KGh0dHBfbG9vcCksIGh0dHBfbG9vcCwgc29ja2pzX2xvb3ApO1xuICAgIHZhciB3c1N0cmF0ZWd5O1xuICAgIGlmIChiYXNlT3B0aW9ucy51c2VUTFMpIHtcbiAgICAgICAgd3NTdHJhdGVneSA9IG5ldyBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5X0Jlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3koW1xuICAgICAgICAgICAgd3NfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5X0RlbGF5ZWRTdHJhdGVneShodHRwX2ZhbGxiYWNrX2xvb3AsIHsgZGVsYXk6IDIwMDAgfSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3c1N0cmF0ZWd5ID0gbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneShbXG4gICAgICAgICAgICB3c19sb29wLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5KHdzc19sb29wLCB7IGRlbGF5OiAyMDAwIH0pLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5KGh0dHBfZmFsbGJhY2tfbG9vcCwgeyBkZWxheTogNTAwMCB9KVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyB3ZWJzb2NrZXRfcHJpb3JpdGl6ZWRfY2FjaGVkX3N0cmF0ZWd5X1dlYlNvY2tldFByaW9yaXRpemVkQ2FjaGVkU3RyYXRlZ3kobmV3IEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kobmV3IElmU3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3kod3NfdHJhbnNwb3J0KSwgd3NTdHJhdGVneSwgaHR0cF9mYWxsYmFja19sb29wKSksIGRlZmluZWRUcmFuc3BvcnRzLCB7XG4gICAgICAgIHR0bDogMTgwMDAwMCxcbiAgICAgICAgdGltZWxpbmU6IGJhc2VPcHRpb25zLnRpbWVsaW5lLFxuICAgICAgICB1c2VUTFM6IGJhc2VPcHRpb25zLnVzZVRMU1xuICAgIH0pO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGRlZmF1bHRfc3RyYXRlZ3kgPSAoZ2V0RGVmYXVsdFN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3RyYW5zcG9ydHMvdHJhbnNwb3J0X2Nvbm5lY3Rpb25faW5pdGlhbGl6ZXIudHNcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb25faW5pdGlhbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLnRpbWVsaW5lLmluZm8oc2VsZi5idWlsZFRpbWVsaW5lTWVzc2FnZSh7XG4gICAgICAgIHRyYW5zcG9ydDogc2VsZi5uYW1lICsgKHNlbGYub3B0aW9ucy51c2VUTFMgPyAncycgOiAnJylcbiAgICB9KSk7XG4gICAgaWYgKHNlbGYuaG9va3MuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoJ2luaXRpYWxpemVkJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNlbGYuaG9va3MuZmlsZSkge1xuICAgICAgICBzZWxmLmNoYW5nZVN0YXRlKCdpbml0aWFsaXppbmcnKTtcbiAgICAgICAgRGVwZW5kZW5jaWVzLmxvYWQoc2VsZi5ob29rcy5maWxlLCB7IHVzZVRMUzogc2VsZi5vcHRpb25zLnVzZVRMUyB9LCBmdW5jdGlvbiAoZXJyb3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5ob29rcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZVN0YXRlKCdpbml0aWFsaXplZCcpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZWxmLm9uQ2xvc2UoKTtcbiAgICB9XG59KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2h0dHAvaHR0cF94ZG9tYWluX3JlcXVlc3QudHNcblxudmFyIGh0dHBfeGRvbWFpbl9yZXF1ZXN0X2hvb2tzID0ge1xuICAgIGdldFJlcXVlc3Q6IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgdmFyIHhkciA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgICAgeGRyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdlcnJvcicsIG5ldyBSZXF1ZXN0VGltZWRPdXQoKSk7XG4gICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGRyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGRyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGRyLnJlc3BvbnNlVGV4dCAmJiB4ZHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuaygyMDAsIHhkci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4ZHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhkci5yZXNwb25zZVRleHQgJiYgeGRyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoMjAwLCB4ZHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdmaW5pc2hlZCcsIDIwMCk7XG4gICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHhkcjtcbiAgICB9LFxuICAgIGFib3J0UmVxdWVzdDogZnVuY3Rpb24gKHhkcikge1xuICAgICAgICB4ZHIub250aW1lb3V0ID0geGRyLm9uZXJyb3IgPSB4ZHIub25wcm9ncmVzcyA9IHhkci5vbmxvYWQgPSBudWxsO1xuICAgICAgICB4ZHIuYWJvcnQoKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF94ZG9tYWluX3JlcXVlc3QgPSAoaHR0cF94ZG9tYWluX3JlcXVlc3RfaG9va3MpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvaHR0cF9yZXF1ZXN0LnRzXG5cblxuY29uc3QgTUFYX0JVRkZFUl9MRU5HVEggPSAyNTYgKiAxMDI0O1xuY2xhc3MgaHR0cF9yZXF1ZXN0X0hUVFBSZXF1ZXN0IGV4dGVuZHMgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihob29rcywgbWV0aG9kLCB1cmwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuICAgIHN0YXJ0KHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMueGhyID0gdGhpcy5ob29rcy5nZXRSZXF1ZXN0KHRoaXMpO1xuICAgICAgICB0aGlzLnVubG9hZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICBydW50aW1lLmFkZFVubG9hZExpc3RlbmVyKHRoaXMudW5sb2FkZXIpO1xuICAgICAgICB0aGlzLnhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueGhyLnNlbmQocGF5bG9hZCk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy51bmxvYWRlcikge1xuICAgICAgICAgICAgcnVudGltZS5yZW1vdmVVbmxvYWRMaXN0ZW5lcih0aGlzLnVubG9hZGVyKTtcbiAgICAgICAgICAgIHRoaXMudW5sb2FkZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnhocikge1xuICAgICAgICAgICAgdGhpcy5ob29rcy5hYm9ydFJlcXVlc3QodGhpcy54aHIpO1xuICAgICAgICAgICAgdGhpcy54aHIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2h1bmsoc3RhdHVzLCBkYXRhKSB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmFkdmFuY2VCdWZmZXIoZGF0YSk7XG4gICAgICAgICAgICBpZiAoY2h1bmspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NodW5rJywgeyBzdGF0dXM6IHN0YXR1cywgZGF0YTogY2h1bmsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0J1ZmZlclRvb0xvbmcoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYnVmZmVyX3Rvb19sb25nJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWR2YW5jZUJ1ZmZlcihidWZmZXIpIHtcbiAgICAgICAgdmFyIHVucmVhZERhdGEgPSBidWZmZXIuc2xpY2UodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHZhciBlbmRPZkxpbmVQb3NpdGlvbiA9IHVucmVhZERhdGEuaW5kZXhPZignXFxuJyk7XG4gICAgICAgIGlmIChlbmRPZkxpbmVQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gKz0gZW5kT2ZMaW5lUG9zaXRpb24gKyAxO1xuICAgICAgICAgICAgcmV0dXJuIHVucmVhZERhdGEuc2xpY2UoMCwgZW5kT2ZMaW5lUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNCdWZmZXJUb29Mb25nKGJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gYnVmZmVyLmxlbmd0aCAmJiBidWZmZXIubGVuZ3RoID4gTUFYX0JVRkZFUl9MRU5HVEg7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvc3RhdGUudHNcbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNPTk5FQ1RJTkdcIl0gPSAwXSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIFN0YXRlW1N0YXRlW1wiT1BFTlwiXSA9IDFdID0gXCJPUEVOXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJDTE9TRURcIl0gPSAzXSA9IFwiQ0xPU0VEXCI7XG59KShTdGF0ZSB8fCAoU3RhdGUgPSB7fSkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3RhdGUgPSAoU3RhdGUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvaHR0cF9zb2NrZXQudHNcblxuXG5cbnZhciBhdXRvSW5jcmVtZW50ID0gMTtcbmNsYXNzIGh0dHBfc29ja2V0X0hUVFBTb2NrZXQge1xuICAgIGNvbnN0cnVjdG9yKGhvb2tzLCB1cmwpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICB0aGlzLnNlc3Npb24gPSByYW5kb21OdW1iZXIoMTAwMCkgKyAnLycgKyByYW5kb21TdHJpbmcoOCk7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBnZXRMb2NhdGlvbih1cmwpO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZS5DT05ORUNUSU5HO1xuICAgICAgICB0aGlzLm9wZW5TdHJlYW0oKTtcbiAgICB9XG4gICAgc2VuZChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRSYXcoSlNPTi5zdHJpbmdpZnkoW3BheWxvYWRdKSk7XG4gICAgfVxuICAgIHBpbmcoKSB7XG4gICAgICAgIHRoaXMuaG9va3Muc2VuZEhlYXJ0YmVhdCh0aGlzKTtcbiAgICB9XG4gICAgY2xvc2UoY29kZSwgcmVhc29uKSB7XG4gICAgICAgIHRoaXMub25DbG9zZShjb2RlLCByZWFzb24sIHRydWUpO1xuICAgIH1cbiAgICBzZW5kUmF3KHBheWxvYWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGUuT1BFTikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBydW50aW1lLmNyZWF0ZVNvY2tldFJlcXVlc3QoJ1BPU1QnLCBnZXRVbmlxdWVVUkwoZ2V0U2VuZFVSTCh0aGlzLmxvY2F0aW9uLCB0aGlzLnNlc3Npb24pKSkuc3RhcnQocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5vcGVuU3RyZWFtKCk7XG4gICAgfVxuICAgIG9uQ2xvc2UoY29kZSwgcmVhc29uLCB3YXNDbGVhbikge1xuICAgICAgICB0aGlzLmNsb3NlU3RyZWFtKCk7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlLkNMT1NFRDtcbiAgICAgICAgaWYgKHRoaXMub25jbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uLFxuICAgICAgICAgICAgICAgIHdhc0NsZWFuOiB3YXNDbGVhblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaHVuayhjaHVuaykge1xuICAgICAgICBpZiAoY2h1bmsuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5PUEVOKSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGF5bG9hZDtcbiAgICAgICAgdmFyIHR5cGUgPSBjaHVuay5kYXRhLnNsaWNlKDAsIDEpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ3t9Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wZW4ocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdbXScpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF5bG9hZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnQocGF5bG9hZFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHRoaXMuaG9va3Mub25IZWFydGJlYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdbXScpO1xuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZShwYXlsb2FkWzBdLCBwYXlsb2FkWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk9wZW4ob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5DT05ORUNUSU5HKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5iYXNlID0gcmVwbGFjZUhvc3QodGhpcy5sb2NhdGlvbi5iYXNlLCBvcHRpb25zLmhvc3RuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlLk9QRU47XG4gICAgICAgICAgICBpZiAodGhpcy5vbm9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKDEwMDYsICdTZXJ2ZXIgbG9zdCBzZXNzaW9uJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25FdmVudChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5PUEVOICYmIHRoaXMub25tZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm9ubWVzc2FnZSh7IGRhdGE6IGV2ZW50IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQWN0aXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uYWN0aXZpdHkpIHtcbiAgICAgICAgICAgIHRoaXMub25hY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKHRoaXMub25lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcGVuU3RyZWFtKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IHJ1bnRpbWUuY3JlYXRlU29ja2V0UmVxdWVzdCgnUE9TVCcsIGdldFVuaXF1ZVVSTCh0aGlzLmhvb2tzLmdldFJlY2VpdmVVUkwodGhpcy5sb2NhdGlvbiwgdGhpcy5zZXNzaW9uKSkpO1xuICAgICAgICB0aGlzLnN0cmVhbS5iaW5kKCdjaHVuaycsIGNodW5rID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DaHVuayhjaHVuayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0cmVhbS5iaW5kKCdmaW5pc2hlZCcsIHN0YXR1cyA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvb2tzLm9uRmluaXNoZWQodGhpcywgc3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2J1ZmZlcl90b29fbG9uZycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHV0aWwuZGVmZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKDEwMDYsICdDb3VsZCBub3Qgc3RhcnQgc3RyZWFtaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xvc2VTdHJlYW0oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0udW5iaW5kX2FsbCgpO1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0uY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKHVybCkge1xuICAgIHZhciBwYXJ0cyA9IC8oW15cXD9dKilcXC8qKFxcPz8uKikvLmV4ZWModXJsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBwYXJ0c1sxXSxcbiAgICAgICAgcXVlcnlTdHJpbmc6IHBhcnRzWzJdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFNlbmRVUkwodXJsLCBzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyX3NlbmQnO1xufVxuZnVuY3Rpb24gZ2V0VW5pcXVlVVJMKHVybCkge1xuICAgIHZhciBzZXBhcmF0b3IgPSB1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcbiAgICByZXR1cm4gdXJsICsgc2VwYXJhdG9yICsgJ3Q9JyArICtuZXcgRGF0ZSgpICsgJyZuPScgKyBhdXRvSW5jcmVtZW50Kys7XG59XG5mdW5jdGlvbiByZXBsYWNlSG9zdCh1cmwsIGhvc3RuYW1lKSB7XG4gICAgdmFyIHVybFBhcnRzID0gLyhodHRwcz86XFwvXFwvKShbXlxcLzpdKykoKFxcL3w6KT8uKikvLmV4ZWModXJsKTtcbiAgICByZXR1cm4gdXJsUGFydHNbMV0gKyBob3N0bmFtZSArIHVybFBhcnRzWzNdO1xufVxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCkge1xuICAgIHJldHVybiBydW50aW1lLnJhbmRvbUludChtYXgpO1xufVxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJhbmRvbU51bWJlcigzMikudG9TdHJpbmcoMzIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfc29ja2V0ID0gKGh0dHBfc29ja2V0X0hUVFBTb2NrZXQpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvaHR0cF9zdHJlYW1pbmdfc29ja2V0LnRzXG52YXIgaHR0cF9zdHJlYW1pbmdfc29ja2V0X2hvb2tzID0ge1xuICAgIGdldFJlY2VpdmVVUkw6IGZ1bmN0aW9uICh1cmwsIHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyX3N0cmVhbWluZycgKyB1cmwucXVlcnlTdHJpbmc7XG4gICAgfSxcbiAgICBvbkhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIHNlbmRIZWFydGJlYXQ6IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgc29ja2V0LnNlbmRSYXcoJ1tdJyk7XG4gICAgfSxcbiAgICBvbkZpbmlzaGVkOiBmdW5jdGlvbiAoc29ja2V0LCBzdGF0dXMpIHtcbiAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgJ0Nvbm5lY3Rpb24gaW50ZXJydXB0ZWQgKCcgKyBzdGF0dXMgKyAnKScsIGZhbHNlKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9zdHJlYW1pbmdfc29ja2V0ID0gKGh0dHBfc3RyZWFtaW5nX3NvY2tldF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3BvbGxpbmdfc29ja2V0LnRzXG52YXIgaHR0cF9wb2xsaW5nX3NvY2tldF9ob29rcyA9IHtcbiAgICBnZXRSZWNlaXZlVVJMOiBmdW5jdGlvbiAodXJsLCBzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiB1cmwuYmFzZSArICcvJyArIHNlc3Npb24gKyAnL3hocicgKyB1cmwucXVlcnlTdHJpbmc7XG4gICAgfSxcbiAgICBvbkhlYXJ0YmVhdDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChzb2NrZXQsIHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHNvY2tldC5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNvY2tldC5vbkNsb3NlKDEwMDYsICdDb25uZWN0aW9uIGludGVycnVwdGVkICgnICsgc3RhdHVzICsgJyknLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9wb2xsaW5nX3NvY2tldCA9IChodHRwX3BvbGxpbmdfc29ja2V0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvaXNvbW9ycGhpYy9odHRwL2h0dHBfeGhyX3JlcXVlc3QudHNcblxudmFyIGh0dHBfeGhyX3JlcXVlc3RfaG9va3MgPSB7XG4gICAgZ2V0UmVxdWVzdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBydW50aW1lLmdldFhIUkFQSSgpO1xuICAgICAgICB2YXIgeGhyID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoeGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCAmJiB4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdmaW5pc2hlZCcsIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB4aHI7XG4gICAgfSxcbiAgICBhYm9ydFJlcXVlc3Q6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3hocl9yZXF1ZXN0ID0gKGh0dHBfeGhyX3JlcXVlc3RfaG9va3MpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2h0dHAvaHR0cC50c1xuXG5cblxuXG5cbnZhciBIVFRQID0ge1xuICAgIGNyZWF0ZVN0cmVhbWluZ1NvY2tldCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU29ja2V0KGh0dHBfc3RyZWFtaW5nX3NvY2tldCwgdXJsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVBvbGxpbmdTb2NrZXQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNvY2tldChodHRwX3BvbGxpbmdfc29ja2V0LCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlU29ja2V0KGhvb2tzLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBodHRwX3NvY2tldChob29rcywgdXJsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVhIUihtZXRob2QsIHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KGh0dHBfeGhyX3JlcXVlc3QsIG1ldGhvZCwgdXJsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVJlcXVlc3QoaG9va3MsIG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgaHR0cF9yZXF1ZXN0X0hUVFBSZXF1ZXN0KGhvb2tzLCBtZXRob2QsIHVybCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfaHR0cCA9IChIVFRQKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2h0dHAvaHR0cC50c1xuXG5cbmh0dHBfaHR0cC5jcmVhdGVYRFIgPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KGh0dHBfeGRvbWFpbl9yZXF1ZXN0LCBtZXRob2QsIHVybCk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgd2ViX2h0dHBfaHR0cCA9IChodHRwX2h0dHApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvcnVudGltZS50c1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIFJ1bnRpbWUgPSB7XG4gICAgbmV4dEF1dGhDYWxsYmFja0lEOiAxLFxuICAgIGF1dGhfY2FsbGJhY2tzOiB7fSxcbiAgICBTY3JpcHRSZWNlaXZlcnM6IFNjcmlwdFJlY2VpdmVycyxcbiAgICBEZXBlbmRlbmNpZXNSZWNlaXZlcnM6IERlcGVuZGVuY2llc1JlY2VpdmVycyxcbiAgICBnZXREZWZhdWx0U3RyYXRlZ3k6IGRlZmF1bHRfc3RyYXRlZ3ksXG4gICAgVHJhbnNwb3J0czogdHJhbnNwb3J0c190cmFuc3BvcnRzLFxuICAgIHRyYW5zcG9ydENvbm5lY3Rpb25Jbml0aWFsaXplcjogdHJhbnNwb3J0X2Nvbm5lY3Rpb25faW5pdGlhbGl6ZXIsXG4gICAgSFRUUEZhY3Rvcnk6IHdlYl9odHRwX2h0dHAsXG4gICAgVGltZWxpbmVUcmFuc3BvcnQ6IGpzb25wX3RpbWVsaW5lLFxuICAgIGdldFhIUkFQSSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcbiAgICB9LFxuICAgIGdldFdlYlNvY2tldEFQSSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5XZWJTb2NrZXQgfHwgd2luZG93Lk1veldlYlNvY2tldDtcbiAgICB9LFxuICAgIHNldHVwKFB1c2hlckNsYXNzKSB7XG4gICAgICAgIHdpbmRvdy5QdXNoZXIgPSBQdXNoZXJDbGFzcztcbiAgICAgICAgdmFyIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudEJvZHkoUHVzaGVyQ2xhc3MucmVhZHkpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXdpbmRvdy5KU09OKSB7XG4gICAgICAgICAgICBEZXBlbmRlbmNpZXMubG9hZCgnanNvbjInLCB7fSwgaW5pdGlhbGl6ZU9uRG9jdW1lbnRCb2R5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXREb2N1bWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0sXG4gICAgZ2V0UHJvdG9jb2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50KCkubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgfSxcbiAgICBnZXRBdXRob3JpemVycygpIHtcbiAgICAgICAgcmV0dXJuIHsgYWpheDogeGhyX2F1dGgsIGpzb25wOiBqc29ucF9hdXRoIH07XG4gICAgfSxcbiAgICBvbkRvY3VtZW50Qm9keShjYWxsYmFjaykge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudEJvZHkoY2FsbGJhY2spO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZUpTT05QUmVxdWVzdCh1cmwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBqc29ucF9yZXF1ZXN0X0pTT05QUmVxdWVzdCh1cmwsIGRhdGEpO1xuICAgIH0sXG4gICAgY3JlYXRlU2NyaXB0UmVxdWVzdChzcmMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTY3JpcHRSZXF1ZXN0KHNyYyk7XG4gICAgfSxcbiAgICBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlWEhSKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRYSFJBUEkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1pY3Jvc29mdFhIUigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdCgpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRYSFJBUEkoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgIH0sXG4gICAgY3JlYXRlTWljcm9zb2Z0WEhSKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgfSxcbiAgICBnZXROZXR3b3JrKCkge1xuICAgICAgICByZXR1cm4gbmV0X2luZm9fTmV0d29yaztcbiAgICB9LFxuICAgIGNyZWF0ZVdlYlNvY2tldCh1cmwpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRXZWJTb2NrZXRBUEkoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlU29ja2V0UmVxdWVzdChtZXRob2QsIHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1hIUlN1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5IVFRQRmFjdG9yeS5jcmVhdGVYSFIobWV0aG9kLCB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNYRFJTdXBwb3J0ZWQodXJsLmluZGV4T2YoJ2h0dHBzOicpID09PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSFRUUEZhY3RvcnkuY3JlYXRlWERSKG1ldGhvZCwgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93ICdDcm9zcy1vcmlnaW4gSFRUUCByZXF1ZXN0cyBhcmUgbm90IHN1cHBvcnRlZCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGlzWEhSU3VwcG9ydGVkKCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuICAgICAgICByZXR1cm4gKEJvb2xlYW4oQ29uc3RydWN0b3IpICYmIG5ldyBDb25zdHJ1Y3RvcigpLndpdGhDcmVkZW50aWFscyAhPT0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGlzWERSU3VwcG9ydGVkKHVzZVRMUykge1xuICAgICAgICB2YXIgcHJvdG9jb2wgPSB1c2VUTFMgPyAnaHR0cHM6JyA6ICdodHRwOic7XG4gICAgICAgIHZhciBkb2N1bWVudFByb3RvY29sID0gdGhpcy5nZXRQcm90b2NvbCgpO1xuICAgICAgICByZXR1cm4gKEJvb2xlYW4od2luZG93WydYRG9tYWluUmVxdWVzdCddKSAmJiBkb2N1bWVudFByb3RvY29sID09PSBwcm90b2NvbCk7XG4gICAgfSxcbiAgICBhZGRVbmxvYWRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmF0dGFjaEV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb251bmxvYWQnLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZVVubG9hZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuZGV0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmFuZG9tSW50KG1heCkge1xuICAgICAgICBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvIHx8IHdpbmRvd1snbXNDcnlwdG8nXTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbSA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXTtcbiAgICAgICAgICAgIHJldHVybiByYW5kb20gLyBNYXRoLnBvdygyLCAzMik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbSgpICogbWF4KTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcnVudGltZSA9IChSdW50aW1lKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90aW1lbGluZS9sZXZlbC50c1xudmFyIFRpbWVsaW5lTGV2ZWw7XG4oZnVuY3Rpb24gKFRpbWVsaW5lTGV2ZWwpIHtcbiAgICBUaW1lbGluZUxldmVsW1RpbWVsaW5lTGV2ZWxbXCJFUlJPUlwiXSA9IDNdID0gXCJFUlJPUlwiO1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIklORk9cIl0gPSA2XSA9IFwiSU5GT1wiO1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkRFQlVHXCJdID0gN10gPSBcIkRFQlVHXCI7XG59KShUaW1lbGluZUxldmVsIHx8IChUaW1lbGluZUxldmVsID0ge30pKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRpbWVsaW5lX2xldmVsID0gKFRpbWVsaW5lTGV2ZWwpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RpbWVsaW5lL3RpbWVsaW5lLnRzXG5cblxuXG5jbGFzcyB0aW1lbGluZV9UaW1lbGluZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCBzZXNzaW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLnNlbnQgPSAwO1xuICAgICAgICB0aGlzLnVuaXF1ZUlEID0gMDtcbiAgICB9XG4gICAgbG9nKGxldmVsLCBldmVudCkge1xuICAgICAgICBpZiAobGV2ZWwgPD0gdGhpcy5vcHRpb25zLmxldmVsKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKGV4dGVuZCh7fSwgZXZlbnQsIHsgdGltZXN0YW1wOiB1dGlsLm5vdygpIH0pKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXQgJiYgdGhpcy5ldmVudHMubGVuZ3RoID4gdGhpcy5vcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlcnJvcihldmVudCkge1xuICAgICAgICB0aGlzLmxvZyh0aW1lbGluZV9sZXZlbC5FUlJPUiwgZXZlbnQpO1xuICAgIH1cbiAgICBpbmZvKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKHRpbWVsaW5lX2xldmVsLklORk8sIGV2ZW50KTtcbiAgICB9XG4gICAgZGVidWcoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sb2codGltZWxpbmVfbGV2ZWwuREVCVUcsIGV2ZW50KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgc2VuZChzZW5kZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkYXRhID0gZXh0ZW5kKHtcbiAgICAgICAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcbiAgICAgICAgICAgIGJ1bmRsZTogdGhpcy5zZW50ICsgMSxcbiAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgICAgICBsaWI6ICdqcycsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLm9wdGlvbnMudmVyc2lvbixcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMub3B0aW9ucy5jbHVzdGVyLFxuICAgICAgICAgICAgZmVhdHVyZXM6IHRoaXMub3B0aW9ucy5mZWF0dXJlcyxcbiAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLmV2ZW50c1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgc2VuZGZuKGRhdGEsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZW5lcmF0ZVVuaXF1ZUlEKCkge1xuICAgICAgICB0aGlzLnVuaXF1ZUlEKys7XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZUlEO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3RyYW5zcG9ydF9zdHJhdGVneS50c1xuXG5cblxuXG5jbGFzcyB0cmFuc3BvcnRfc3RyYXRlZ3lfVHJhbnNwb3J0U3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaW9yaXR5LCB0cmFuc3BvcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5pc1N1cHBvcnRlZCh7XG4gICAgICAgICAgICB1c2VUTFM6IHRoaXMub3B0aW9ucy51c2VUTFNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbEF0dGVtcHQobmV3IFVuc3VwcG9ydGVkU3RyYXRlZ3koKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJpb3JpdHkgPCBtaW5Qcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhaWxBdHRlbXB0KG5ldyBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdygpLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnQuY3JlYXRlQ29ubmVjdGlvbih0aGlzLm5hbWUsIHRoaXMucHJpb3JpdHksIHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciBoYW5kc2hha2UgPSBudWxsO1xuICAgICAgICB2YXIgb25Jbml0aWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ2luaXRpYWxpemVkJywgb25Jbml0aWFsaXplZCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuY29ubmVjdCgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGFuZHNoYWtlID0gZmFjdG9yeS5jcmVhdGVIYW5kc2hha2UodHJhbnNwb3J0LCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZFRyYW5zcG9ydDtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc3BvcnQgPSBzYWZlSlNPTlN0cmluZ2lmeSh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IFRyYW5zcG9ydENsb3NlZChzZXJpYWxpemVkVHJhbnNwb3J0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdpbml0aWFsaXplZCcsIG9uSW5pdGlhbGl6ZWQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICB9O1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnaW5pdGlhbGl6ZWQnLCBvbkluaXRpYWxpemVkKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgdHJhbnNwb3J0LmluaXRpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogcCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaW9yaXR5IDwgcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kc2hha2UuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZhaWxBdHRlbXB0KGVycm9yLCBjYWxsYmFjaykge1xuICAgIHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKCkgeyB9XG4gICAgfTtcbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3N0cmF0ZWd5X2J1aWxkZXIudHNcblxuXG5cblxuXG5jb25zdCB7IFRyYW5zcG9ydHM6IHN0cmF0ZWd5X2J1aWxkZXJfVHJhbnNwb3J0cyB9ID0gcnVudGltZTtcbnZhciBzdHJhdGVneV9idWlsZGVyX2RlZmluZVRyYW5zcG9ydCA9IGZ1bmN0aW9uIChjb25maWcsIG5hbWUsIHR5cGUsIHByaW9yaXR5LCBvcHRpb25zLCBtYW5hZ2VyKSB7XG4gICAgdmFyIHRyYW5zcG9ydENsYXNzID0gc3RyYXRlZ3lfYnVpbGRlcl9UcmFuc3BvcnRzW3R5cGVdO1xuICAgIGlmICghdHJhbnNwb3J0Q2xhc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3VwcG9ydGVkVHJhbnNwb3J0KHR5cGUpO1xuICAgIH1cbiAgICB2YXIgZW5hYmxlZCA9ICghY29uZmlnLmVuYWJsZWRUcmFuc3BvcnRzIHx8XG4gICAgICAgIGFycmF5SW5kZXhPZihjb25maWcuZW5hYmxlZFRyYW5zcG9ydHMsIG5hbWUpICE9PSAtMSkgJiZcbiAgICAgICAgKCFjb25maWcuZGlzYWJsZWRUcmFuc3BvcnRzIHx8XG4gICAgICAgICAgICBhcnJheUluZGV4T2YoY29uZmlnLmRpc2FibGVkVHJhbnNwb3J0cywgbmFtZSkgPT09IC0xKTtcbiAgICB2YXIgdHJhbnNwb3J0O1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgaWdub3JlTnVsbE9yaWdpbjogY29uZmlnLmlnbm9yZU51bGxPcmlnaW4gfSwgb3B0aW9ucyk7XG4gICAgICAgIHRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRfc3RyYXRlZ3lfVHJhbnNwb3J0U3RyYXRlZ3kobmFtZSwgcHJpb3JpdHksIG1hbmFnZXIgPyBtYW5hZ2VyLmdldEFzc2lzdGFudCh0cmFuc3BvcnRDbGFzcykgOiB0cmFuc3BvcnRDbGFzcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0cmFuc3BvcnQgPSBzdHJhdGVneV9idWlsZGVyX1Vuc3VwcG9ydGVkU3RyYXRlZ3k7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc3BvcnQ7XG59O1xudmFyIHN0cmF0ZWd5X2J1aWxkZXJfVW5zdXBwb3J0ZWRTdHJhdGVneSA9IHtcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBjb25uZWN0OiBmdW5jdGlvbiAoXywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgVW5zdXBwb3J0ZWRTdHJhdGVneSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAoKSB7IH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL29wdGlvbnMudHNcblxuZnVuY3Rpb24gdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIHRocm93ICdZb3UgbXVzdCBwYXNzIGFuIG9wdGlvbnMgb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY2x1c3RlciA9PSBudWxsKSB7XG4gICAgICAgIHRocm93ICdPcHRpb25zIG9iamVjdCBtdXN0IHByb3ZpZGUgYSBjbHVzdGVyJztcbiAgICB9XG4gICAgaWYgKCdkaXNhYmxlU3RhdHMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oJ1RoZSBkaXNhYmxlU3RhdHMgb3B0aW9uIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZW5hYmxlU3RhdHMnKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvYXV0aC91c2VyX2F1dGhlbnRpY2F0b3IudHNcblxuXG5jb25zdCBjb21wb3NlQ2hhbm5lbFF1ZXJ5ID0gKHBhcmFtcywgYXV0aE9wdGlvbnMpID0+IHtcbiAgICB2YXIgcXVlcnkgPSAnc29ja2V0X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zLnNvY2tldElkKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXV0aE9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgICAnJicgK1xuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICtcbiAgICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChhdXRoT3B0aW9ucy5wYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIGlmIChhdXRoT3B0aW9ucy5wYXJhbXNQcm92aWRlciAhPSBudWxsKSB7XG4gICAgICAgIGxldCBkeW5hbWljUGFyYW1zID0gYXV0aE9wdGlvbnMucGFyYW1zUHJvdmlkZXIoKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGR5bmFtaWNQYXJhbXMpIHtcbiAgICAgICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgICAgICAgJyYnICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xuICAgICAgICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoZHluYW1pY1BhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59O1xuY29uc3QgVXNlckF1dGhlbnRpY2F0b3IgPSAoYXV0aE9wdGlvbnMpID0+IHtcbiAgICBpZiAodHlwZW9mIHJ1bnRpbWUuZ2V0QXV0aG9yaXplcnMoKVthdXRoT3B0aW9ucy50cmFuc3BvcnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBgJyR7YXV0aE9wdGlvbnMudHJhbnNwb3J0fScgaXMgbm90IGEgcmVjb2duaXplZCBhdXRoIHRyYW5zcG9ydGA7XG4gICAgfVxuICAgIHJldHVybiAocGFyYW1zLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGNvbXBvc2VDaGFubmVsUXVlcnkocGFyYW1zLCBhdXRoT3B0aW9ucyk7XG4gICAgICAgIHJ1bnRpbWUuZ2V0QXV0aG9yaXplcnMoKVthdXRoT3B0aW9ucy50cmFuc3BvcnRdKHJ1bnRpbWUsIHF1ZXJ5LCBhdXRoT3B0aW9ucywgQXV0aFJlcXVlc3RUeXBlLlVzZXJBdXRoZW50aWNhdGlvbiwgY2FsbGJhY2spO1xuICAgIH07XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdXNlcl9hdXRoZW50aWNhdG9yID0gKFVzZXJBdXRoZW50aWNhdG9yKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9hdXRoL2NoYW5uZWxfYXV0aG9yaXplci50c1xuXG5cbmNvbnN0IGNoYW5uZWxfYXV0aG9yaXplcl9jb21wb3NlQ2hhbm5lbFF1ZXJ5ID0gKHBhcmFtcywgYXV0aE9wdGlvbnMpID0+IHtcbiAgICB2YXIgcXVlcnkgPSAnc29ja2V0X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zLnNvY2tldElkKTtcbiAgICBxdWVyeSArPSAnJmNoYW5uZWxfbmFtZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtcy5jaGFubmVsTmFtZSk7XG4gICAgZm9yICh2YXIga2V5IGluIGF1dGhPcHRpb25zLnBhcmFtcykge1xuICAgICAgICBxdWVyeSArPVxuICAgICAgICAgICAgJyYnICtcbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArXG4gICAgICAgICAgICAgICAgJz0nICtcbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoYXV0aE9wdGlvbnMucGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICBpZiAoYXV0aE9wdGlvbnMucGFyYW1zUHJvdmlkZXIgIT0gbnVsbCkge1xuICAgICAgICBsZXQgZHluYW1pY1BhcmFtcyA9IGF1dGhPcHRpb25zLnBhcmFtc1Byb3ZpZGVyKCk7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkeW5hbWljUGFyYW1zKSB7XG4gICAgICAgICAgICBxdWVyeSArPVxuICAgICAgICAgICAgICAgICcmJyArXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICtcbiAgICAgICAgICAgICAgICAgICAgJz0nICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGR5bmFtaWNQYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufTtcbmNvbnN0IENoYW5uZWxBdXRob3JpemVyID0gKGF1dGhPcHRpb25zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBydW50aW1lLmdldEF1dGhvcml6ZXJzKClbYXV0aE9wdGlvbnMudHJhbnNwb3J0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgYCcke2F1dGhPcHRpb25zLnRyYW5zcG9ydH0nIGlzIG5vdCBhIHJlY29nbml6ZWQgYXV0aCB0cmFuc3BvcnRgO1xuICAgIH1cbiAgICByZXR1cm4gKHBhcmFtcywgY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBjaGFubmVsX2F1dGhvcml6ZXJfY29tcG9zZUNoYW5uZWxRdWVyeShwYXJhbXMsIGF1dGhPcHRpb25zKTtcbiAgICAgICAgcnVudGltZS5nZXRBdXRob3JpemVycygpW2F1dGhPcHRpb25zLnRyYW5zcG9ydF0ocnVudGltZSwgcXVlcnksIGF1dGhPcHRpb25zLCBBdXRoUmVxdWVzdFR5cGUuQ2hhbm5lbEF1dGhvcml6YXRpb24sIGNhbGxiYWNrKTtcbiAgICB9O1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNoYW5uZWxfYXV0aG9yaXplciA9IChDaGFubmVsQXV0aG9yaXplcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvYXV0aC9kZXByZWNhdGVkX2NoYW5uZWxfYXV0aG9yaXplci50c1xuY29uc3QgQ2hhbm5lbEF1dGhvcml6ZXJQcm94eSA9IChwdXNoZXIsIGF1dGhPcHRpb25zLCBjaGFubmVsQXV0aG9yaXplckdlbmVyYXRvcikgPT4ge1xuICAgIGNvbnN0IGRlcHJlY2F0ZWRBdXRob3JpemVyT3B0aW9ucyA9IHtcbiAgICAgICAgYXV0aFRyYW5zcG9ydDogYXV0aE9wdGlvbnMudHJhbnNwb3J0LFxuICAgICAgICBhdXRoRW5kcG9pbnQ6IGF1dGhPcHRpb25zLmVuZHBvaW50LFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICBwYXJhbXM6IGF1dGhPcHRpb25zLnBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGF1dGhPcHRpb25zLmhlYWRlcnNcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChwYXJhbXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSBwdXNoZXIuY2hhbm5lbChwYXJhbXMuY2hhbm5lbE5hbWUpO1xuICAgICAgICBjb25zdCBjaGFubmVsQXV0aG9yaXplciA9IGNoYW5uZWxBdXRob3JpemVyR2VuZXJhdG9yKGNoYW5uZWwsIGRlcHJlY2F0ZWRBdXRob3JpemVyT3B0aW9ucyk7XG4gICAgICAgIGNoYW5uZWxBdXRob3JpemVyLmF1dGhvcml6ZShwYXJhbXMuc29ja2V0SWQsIGNhbGxiYWNrKTtcbiAgICB9O1xufTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25maWcudHNcblxuXG5cblxuXG5mdW5jdGlvbiBnZXRDb25maWcob3B0cywgcHVzaGVyKSB7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiBvcHRzLmFjdGl2aXR5VGltZW91dCB8fCBkZWZhdWx0cy5hY3Rpdml0eVRpbWVvdXQsXG4gICAgICAgIGNsdXN0ZXI6IG9wdHMuY2x1c3RlcixcbiAgICAgICAgaHR0cFBhdGg6IG9wdHMuaHR0cFBhdGggfHwgZGVmYXVsdHMuaHR0cFBhdGgsXG4gICAgICAgIGh0dHBQb3J0OiBvcHRzLmh0dHBQb3J0IHx8IGRlZmF1bHRzLmh0dHBQb3J0LFxuICAgICAgICBodHRwc1BvcnQ6IG9wdHMuaHR0cHNQb3J0IHx8IGRlZmF1bHRzLmh0dHBzUG9ydCxcbiAgICAgICAgcG9uZ1RpbWVvdXQ6IG9wdHMucG9uZ1RpbWVvdXQgfHwgZGVmYXVsdHMucG9uZ1RpbWVvdXQsXG4gICAgICAgIHN0YXRzSG9zdDogb3B0cy5zdGF0c0hvc3QgfHwgZGVmYXVsdHMuc3RhdHNfaG9zdCxcbiAgICAgICAgdW5hdmFpbGFibGVUaW1lb3V0OiBvcHRzLnVuYXZhaWxhYmxlVGltZW91dCB8fCBkZWZhdWx0cy51bmF2YWlsYWJsZVRpbWVvdXQsXG4gICAgICAgIHdzUGF0aDogb3B0cy53c1BhdGggfHwgZGVmYXVsdHMud3NQYXRoLFxuICAgICAgICB3c1BvcnQ6IG9wdHMud3NQb3J0IHx8IGRlZmF1bHRzLndzUG9ydCxcbiAgICAgICAgd3NzUG9ydDogb3B0cy53c3NQb3J0IHx8IGRlZmF1bHRzLndzc1BvcnQsXG4gICAgICAgIGVuYWJsZVN0YXRzOiBnZXRFbmFibGVTdGF0c0NvbmZpZyhvcHRzKSxcbiAgICAgICAgaHR0cEhvc3Q6IGdldEh0dHBIb3N0KG9wdHMpLFxuICAgICAgICB1c2VUTFM6IHNob3VsZFVzZVRMUyhvcHRzKSxcbiAgICAgICAgd3NIb3N0OiBnZXRXZWJzb2NrZXRIb3N0KG9wdHMpLFxuICAgICAgICB1c2VyQXV0aGVudGljYXRvcjogYnVpbGRVc2VyQXV0aGVudGljYXRvcihvcHRzKSxcbiAgICAgICAgY2hhbm5lbEF1dGhvcml6ZXI6IGJ1aWxkQ2hhbm5lbEF1dGhvcml6ZXIob3B0cywgcHVzaGVyKVxuICAgIH07XG4gICAgaWYgKCdkaXNhYmxlZFRyYW5zcG9ydHMnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMgPSBvcHRzLmRpc2FibGVkVHJhbnNwb3J0cztcbiAgICBpZiAoJ2VuYWJsZWRUcmFuc3BvcnRzJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuZW5hYmxlZFRyYW5zcG9ydHMgPSBvcHRzLmVuYWJsZWRUcmFuc3BvcnRzO1xuICAgIGlmICgnaWdub3JlTnVsbE9yaWdpbicgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmlnbm9yZU51bGxPcmlnaW4gPSBvcHRzLmlnbm9yZU51bGxPcmlnaW47XG4gICAgaWYgKCd0aW1lbGluZVBhcmFtcycgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLnRpbWVsaW5lUGFyYW1zID0gb3B0cy50aW1lbGluZVBhcmFtcztcbiAgICBpZiAoJ25hY2wnIGluIG9wdHMpIHtcbiAgICAgICAgY29uZmlnLm5hY2wgPSBvcHRzLm5hY2w7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59XG5mdW5jdGlvbiBnZXRIdHRwSG9zdChvcHRzKSB7XG4gICAgaWYgKG9wdHMuaHR0cEhvc3QpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMuaHR0cEhvc3Q7XG4gICAgfVxuICAgIGlmIChvcHRzLmNsdXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGBzb2NranMtJHtvcHRzLmNsdXN0ZXJ9LnB1c2hlci5jb21gO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdHMuaHR0cEhvc3Q7XG59XG5mdW5jdGlvbiBnZXRXZWJzb2NrZXRIb3N0KG9wdHMpIHtcbiAgICBpZiAob3B0cy53c0hvc3QpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMud3NIb3N0O1xuICAgIH1cbiAgICByZXR1cm4gZ2V0V2Vic29ja2V0SG9zdEZyb21DbHVzdGVyKG9wdHMuY2x1c3Rlcik7XG59XG5mdW5jdGlvbiBnZXRXZWJzb2NrZXRIb3N0RnJvbUNsdXN0ZXIoY2x1c3Rlcikge1xuICAgIHJldHVybiBgd3MtJHtjbHVzdGVyfS5wdXNoZXIuY29tYDtcbn1cbmZ1bmN0aW9uIHNob3VsZFVzZVRMUyhvcHRzKSB7XG4gICAgaWYgKHJ1bnRpbWUuZ2V0UHJvdG9jb2woKSA9PT0gJ2h0dHBzOicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdHMuZm9yY2VUTFMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBnZXRFbmFibGVTdGF0c0NvbmZpZyhvcHRzKSB7XG4gICAgaWYgKCdlbmFibGVTdGF0cycgaW4gb3B0cykge1xuICAgICAgICByZXR1cm4gb3B0cy5lbmFibGVTdGF0cztcbiAgICB9XG4gICAgaWYgKCdkaXNhYmxlU3RhdHMnIGluIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuICFvcHRzLmRpc2FibGVTdGF0cztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYnVpbGRVc2VyQXV0aGVudGljYXRvcihvcHRzKSB7XG4gICAgY29uc3QgdXNlckF1dGhlbnRpY2F0aW9uID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy51c2VyQXV0aGVudGljYXRpb24pLCBvcHRzLnVzZXJBdXRoZW50aWNhdGlvbik7XG4gICAgaWYgKCdjdXN0b21IYW5kbGVyJyBpbiB1c2VyQXV0aGVudGljYXRpb24gJiZcbiAgICAgICAgdXNlckF1dGhlbnRpY2F0aW9uWydjdXN0b21IYW5kbGVyJ10gIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdXNlckF1dGhlbnRpY2F0aW9uWydjdXN0b21IYW5kbGVyJ107XG4gICAgfVxuICAgIHJldHVybiB1c2VyX2F1dGhlbnRpY2F0b3IodXNlckF1dGhlbnRpY2F0aW9uKTtcbn1cbmZ1bmN0aW9uIGJ1aWxkQ2hhbm5lbEF1dGgob3B0cywgcHVzaGVyKSB7XG4gICAgbGV0IGNoYW5uZWxBdXRob3JpemF0aW9uO1xuICAgIGlmICgnY2hhbm5lbEF1dGhvcml6YXRpb24nIGluIG9wdHMpIHtcbiAgICAgICAgY2hhbm5lbEF1dGhvcml6YXRpb24gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLmNoYW5uZWxBdXRob3JpemF0aW9uKSwgb3B0cy5jaGFubmVsQXV0aG9yaXphdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjaGFubmVsQXV0aG9yaXphdGlvbiA9IHtcbiAgICAgICAgICAgIHRyYW5zcG9ydDogb3B0cy5hdXRoVHJhbnNwb3J0IHx8IGRlZmF1bHRzLmF1dGhUcmFuc3BvcnQsXG4gICAgICAgICAgICBlbmRwb2ludDogb3B0cy5hdXRoRW5kcG9pbnQgfHwgZGVmYXVsdHMuYXV0aEVuZHBvaW50XG4gICAgICAgIH07XG4gICAgICAgIGlmICgnYXV0aCcgaW4gb3B0cykge1xuICAgICAgICAgICAgaWYgKCdwYXJhbXMnIGluIG9wdHMuYXV0aClcbiAgICAgICAgICAgICAgICBjaGFubmVsQXV0aG9yaXphdGlvbi5wYXJhbXMgPSBvcHRzLmF1dGgucGFyYW1zO1xuICAgICAgICAgICAgaWYgKCdoZWFkZXJzJyBpbiBvcHRzLmF1dGgpXG4gICAgICAgICAgICAgICAgY2hhbm5lbEF1dGhvcml6YXRpb24uaGVhZGVycyA9IG9wdHMuYXV0aC5oZWFkZXJzO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnYXV0aG9yaXplcicgaW4gb3B0cylcbiAgICAgICAgICAgIGNoYW5uZWxBdXRob3JpemF0aW9uLmN1c3RvbUhhbmRsZXIgPSBDaGFubmVsQXV0aG9yaXplclByb3h5KHB1c2hlciwgY2hhbm5lbEF1dGhvcml6YXRpb24sIG9wdHMuYXV0aG9yaXplcik7XG4gICAgfVxuICAgIHJldHVybiBjaGFubmVsQXV0aG9yaXphdGlvbjtcbn1cbmZ1bmN0aW9uIGJ1aWxkQ2hhbm5lbEF1dGhvcml6ZXIob3B0cywgcHVzaGVyKSB7XG4gICAgY29uc3QgY2hhbm5lbEF1dGhvcml6YXRpb24gPSBidWlsZENoYW5uZWxBdXRoKG9wdHMsIHB1c2hlcik7XG4gICAgaWYgKCdjdXN0b21IYW5kbGVyJyBpbiBjaGFubmVsQXV0aG9yaXphdGlvbiAmJlxuICAgICAgICBjaGFubmVsQXV0aG9yaXphdGlvblsnY3VzdG9tSGFuZGxlciddICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxBdXRob3JpemF0aW9uWydjdXN0b21IYW5kbGVyJ107XG4gICAgfVxuICAgIHJldHVybiBjaGFubmVsX2F1dGhvcml6ZXIoY2hhbm5lbEF1dGhvcml6YXRpb24pO1xufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3dhdGNobGlzdC50c1xuXG5cbmNsYXNzIHdhdGNobGlzdF9XYXRjaGxpc3RGYWNhZGUgZXh0ZW5kcyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1c2hlcikge1xuICAgICAgICBzdXBlcihmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYE5vIGNhbGxiYWNrcyBvbiB3YXRjaGxpc3QgZXZlbnRzIGZvciAke2V2ZW50TmFtZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICB0aGlzLmJpbmRXYXRjaGxpc3RJbnRlcm5hbEV2ZW50KCk7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KHB1c2hlckV2ZW50KSB7XG4gICAgICAgIHB1c2hlckV2ZW50LmRhdGEuZXZlbnRzLmZvckVhY2god2F0Y2hsaXN0RXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KHdhdGNobGlzdEV2ZW50Lm5hbWUsIHdhdGNobGlzdEV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJpbmRXYXRjaGxpc3RJbnRlcm5hbEV2ZW50KCkge1xuICAgICAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ21lc3NhZ2UnLCBwdXNoZXJFdmVudCA9PiB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gcHVzaGVyRXZlbnQuZXZlbnQ7XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAncHVzaGVyX2ludGVybmFsOndhdGNobGlzdF9ldmVudHMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFdmVudChwdXNoZXJFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy9mbGF0X3Byb21pc2UudHNcbmZ1bmN0aW9uIGZsYXRQcm9taXNlKCkge1xuICAgIGxldCByZXNvbHZlLCByZWplY3Q7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICByZWplY3QgPSByZWo7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgcHJvbWlzZSwgcmVzb2x2ZSwgcmVqZWN0IH07XG59XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBmbGF0X3Byb21pc2UgPSAoZmxhdFByb21pc2UpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3VzZXIudHNcblxuXG5cblxuXG5jbGFzcyB1c2VyX1VzZXJGYWNhZGUgZXh0ZW5kcyBkaXNwYXRjaGVyX0Rpc3BhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1c2hlcikge1xuICAgICAgICBzdXBlcihmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ05vIGNhbGxiYWNrcyBvbiB1c2VyIGZvciAnICsgZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2lnbmluX3JlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXJfZGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VydmVyVG9Vc2VyQ2hhbm5lbCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2lnbmluRG9uZVByb21pc2UgPSBudWxsO1xuICAgICAgICB0aGlzLl9zaWduaW5Eb25lUmVzb2x2ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX29uQXV0aG9yaXplID0gKGVyciwgYXV0aERhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgRXJyb3IgZHVyaW5nIHNpZ25pbjogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnNlbmRfZXZlbnQoJ3B1c2hlcjpzaWduaW4nLCB7XG4gICAgICAgICAgICAgICAgYXV0aDogYXV0aERhdGEuYXV0aCxcbiAgICAgICAgICAgICAgICB1c2VyX2RhdGE6IGF1dGhEYXRhLnVzZXJfZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ3N0YXRlX2NoYW5nZScsICh7IHByZXZpb3VzLCBjdXJyZW50IH0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2aW91cyAhPT0gJ2Nvbm5lY3RlZCcgJiYgY3VycmVudCA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWduaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2aW91cyA9PT0gJ2Nvbm5lY3RlZCcgJiYgY3VycmVudCAhPT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmV3U2lnbmluUHJvbWlzZUlmTmVlZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndhdGNobGlzdCA9IG5ldyB3YXRjaGxpc3RfV2F0Y2hsaXN0RmFjYWRlKHB1c2hlcik7XG4gICAgICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnbWVzc2FnZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdwdXNoZXI6c2lnbmluX3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25TaWduaW5TdWNjZXNzKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyVG9Vc2VyQ2hhbm5lbCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyVG9Vc2VyQ2hhbm5lbC5uYW1lID09PSBldmVudC5jaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2lnbmluX3JlcXVlc3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2lnbmluX3JlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NpZ25pbigpO1xuICAgIH1cbiAgICBfc2lnbmluKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2lnbmluX3JlcXVlc3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX25ld1NpZ25pblByb21pc2VJZk5lZWRlZCgpO1xuICAgICAgICBpZiAodGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zdGF0ZSAhPT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2hlci5jb25maWcudXNlckF1dGhlbnRpY2F0b3Ioe1xuICAgICAgICAgICAgc29ja2V0SWQ6IHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkXG4gICAgICAgIH0sIHRoaXMuX29uQXV0aG9yaXplKTtcbiAgICB9XG4gICAgX29uU2lnbmluU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJfZGF0YSA9IEpTT04ucGFyc2UoZGF0YS51c2VyX2RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEZhaWxlZCBwYXJzaW5nIHVzZXIgZGF0YSBhZnRlciBzaWduaW46ICR7ZGF0YS51c2VyX2RhdGF9YCk7XG4gICAgICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVzZXJfZGF0YS5pZCAhPT0gJ3N0cmluZycgfHwgdGhpcy51c2VyX2RhdGEuaWQgPT09ICcnKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYHVzZXJfZGF0YSBkb2Vzbid0IGNvbnRhaW4gYW4gaWQuIHVzZXJfZGF0YTogJHt0aGlzLnVzZXJfZGF0YX1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaWduaW5Eb25lUmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVDaGFubmVscygpO1xuICAgIH1cbiAgICBfc3Vic2NyaWJlQ2hhbm5lbHMoKSB7XG4gICAgICAgIGNvbnN0IGVuc3VyZV9zdWJzY3JpYmVkID0gY2hhbm5lbCA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmIGNoYW5uZWwuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbC5yZWluc3RhdGVTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnN0YXRlID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VydmVyVG9Vc2VyQ2hhbm5lbCA9IG5ldyBjaGFubmVsX0NoYW5uZWwoYCNzZXJ2ZXItdG8tdXNlci0ke3RoaXMudXNlcl9kYXRhLmlkfWAsIHRoaXMucHVzaGVyKTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsLmJpbmRfZ2xvYmFsKChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUuaW5kZXhPZigncHVzaGVyX2ludGVybmFsOicpID09PSAwIHx8XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcjonKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgZW5zdXJlX3N1YnNjcmliZWQodGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsKTtcbiAgICB9XG4gICAgX2NsZWFudXAoKSB7XG4gICAgICAgIHRoaXMudXNlcl9kYXRhID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyVG9Vc2VyQ2hhbm5lbCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJUb1VzZXJDaGFubmVsLnVuYmluZF9hbGwoKTtcbiAgICAgICAgICAgIHRoaXMuc2VydmVyVG9Vc2VyQ2hhbm5lbC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnNlcnZlclRvVXNlckNoYW5uZWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNpZ25pbl9yZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpZ25pbkRvbmVSZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX25ld1NpZ25pblByb21pc2VJZk5lZWRlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNpZ25pbl9yZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaWduaW5Eb25lUHJvbWlzZSAmJiAhdGhpcy5zaWduaW5Eb25lUHJvbWlzZS5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBwcm9taXNlLCByZXNvbHZlLCByZWplY3Q6IF8gfSA9IGZsYXRfcHJvbWlzZSgpO1xuICAgICAgICBwcm9taXNlLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgc2V0RG9uZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UuZG9uZSA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHByb21pc2UudGhlbihzZXREb25lKS5jYXRjaChzZXREb25lKTtcbiAgICAgICAgdGhpcy5zaWduaW5Eb25lUHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMuX3NpZ25pbkRvbmVSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvcHVzaGVyLnRzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNsYXNzIHB1c2hlcl9QdXNoZXIge1xuICAgIHN0YXRpYyByZWFkeSgpIHtcbiAgICAgICAgcHVzaGVyX1B1c2hlci5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwdXNoZXJfUHVzaGVyLmluc3RhbmNlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHB1c2hlcl9QdXNoZXIuaW5zdGFuY2VzW2ldLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q2xpZW50RmVhdHVyZXMoKSB7XG4gICAgICAgIHJldHVybiBrZXlzKGZpbHRlck9iamVjdCh7IHdzOiBydW50aW1lLlRyYW5zcG9ydHMud3MgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmlzU3VwcG9ydGVkKHt9KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihhcHBfa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIGNoZWNrQXBwS2V5KGFwcF9rZXkpO1xuICAgICAgICB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMua2V5ID0gYXBwX2tleTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBnZXRDb25maWcob3B0aW9ucywgdGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBmYWN0b3J5LmNyZWF0ZUNoYW5uZWxzKCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIgPSBuZXcgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklEID0gcnVudGltZS5yYW5kb21JbnQoMTAwMDAwMDAwMCk7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSBuZXcgdGltZWxpbmVfVGltZWxpbmUodGhpcy5rZXksIHRoaXMuc2Vzc2lvbklELCB7XG4gICAgICAgICAgICBjbHVzdGVyOiB0aGlzLmNvbmZpZy5jbHVzdGVyLFxuICAgICAgICAgICAgZmVhdHVyZXM6IHB1c2hlcl9QdXNoZXIuZ2V0Q2xpZW50RmVhdHVyZXMoKSxcbiAgICAgICAgICAgIHBhcmFtczogdGhpcy5jb25maWcudGltZWxpbmVQYXJhbXMgfHwge30sXG4gICAgICAgICAgICBsaW1pdDogNTAsXG4gICAgICAgICAgICBsZXZlbDogdGltZWxpbmVfbGV2ZWwuSU5GTyxcbiAgICAgICAgICAgIHZlcnNpb246IGRlZmF1bHRzLlZFUlNJT05cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5lbmFibGVTdGF0cykge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlciA9IGZhY3RvcnkuY3JlYXRlVGltZWxpbmVTZW5kZXIodGhpcy50aW1lbGluZSwge1xuICAgICAgICAgICAgICAgIGhvc3Q6IHRoaXMuY29uZmlnLnN0YXRzSG9zdCxcbiAgICAgICAgICAgICAgICBwYXRoOiAnL3RpbWVsaW5lL3YyLycgKyBydW50aW1lLlRpbWVsaW5lVHJhbnNwb3J0Lm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnZXRTdHJhdGVneSA9IChvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcnVudGltZS5nZXREZWZhdWx0U3RyYXRlZ3kodGhpcy5jb25maWcsIG9wdGlvbnMsIHN0cmF0ZWd5X2J1aWxkZXJfZGVmaW5lVHJhbnNwb3J0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gZmFjdG9yeS5jcmVhdGVDb25uZWN0aW9uTWFuYWdlcih0aGlzLmtleSwge1xuICAgICAgICAgICAgZ2V0U3RyYXRlZ3k6IGdldFN0cmF0ZWd5LFxuICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMudGltZWxpbmUsXG4gICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHRoaXMuY29uZmlnLmFjdGl2aXR5VGltZW91dCxcbiAgICAgICAgICAgIHBvbmdUaW1lb3V0OiB0aGlzLmNvbmZpZy5wb25nVGltZW91dCxcbiAgICAgICAgICAgIHVuYXZhaWxhYmxlVGltZW91dDogdGhpcy5jb25maWcudW5hdmFpbGFibGVUaW1lb3V0LFxuICAgICAgICAgICAgdXNlVExTOiBCb29sZWFuKHRoaXMuY29uZmlnLnVzZVRMUylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUFsbCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZWxpbmVTZW5kZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyLnNlbmQodGhpcy5jb25uZWN0aW9uLmlzVXNpbmdUTFMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnbWVzc2FnZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgICAgIHZhciBpbnRlcm5hbCA9IGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgPT09IDA7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVsKGV2ZW50LmNoYW5uZWwpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWwuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLmVtaXQoZXZlbnQuZXZlbnQsIGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RpbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdkaXNjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdlcnJvcicsIGVyciA9PiB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHVzaGVyX1B1c2hlci5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgaW5zdGFuY2VzOiBwdXNoZXJfUHVzaGVyLmluc3RhbmNlcy5sZW5ndGggfSk7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyB1c2VyX1VzZXJGYWNhZGUodGhpcyk7XG4gICAgICAgIGlmIChwdXNoZXJfUHVzaGVyLmlzUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5uZWwobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5maW5kKG5hbWUpO1xuICAgIH1cbiAgICBhbGxDaGFubmVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWxsKCk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lU2VuZGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZWxpbmVTZW5kZXJUaW1lcikge1xuICAgICAgICAgICAgICAgIHZhciB1c2luZ1RMUyA9IHRoaXMuY29ubmVjdGlvbi5pc1VzaW5nVExTKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVsaW5lU2VuZGVyID0gdGhpcy50aW1lbGluZVNlbmRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIgPSBuZXcgdGltZXJzX1BlcmlvZGljVGltZXIoNjAwMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVTZW5kZXIuc2VuZCh1c2luZ1RMUyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmVTZW5kZXJUaW1lcikge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXJUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmluZChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLmJpbmQoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdW5iaW5kKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdW5iaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdW5iaW5kX2FsbChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZF9hbGwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN1YnNjcmliZUFsbCgpIHtcbiAgICAgICAgdmFyIGNoYW5uZWxOYW1lO1xuICAgICAgICBmb3IgKGNoYW5uZWxOYW1lIGluIHRoaXMuY2hhbm5lbHMuY2hhbm5lbHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzLmNoYW5uZWxzLmhhc093blByb3BlcnR5KGNoYW5uZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKGNoYW5uZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmUoY2hhbm5lbF9uYW1lKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVscy5hZGQoY2hhbm5lbF9uYW1lLCB0aGlzKTtcbiAgICAgICAgaWYgKGNoYW5uZWwuc3Vic2NyaXB0aW9uUGVuZGluZyAmJiBjaGFubmVsLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY2hhbm5lbC5yZWluc3RhdGVTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3RhdGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICBjaGFubmVsLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH1cbiAgICB1bnN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLmZpbmQoY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgaWYgKGNoYW5uZWwgJiYgY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nKSB7XG4gICAgICAgICAgICBjaGFubmVsLmNhbmNlbFN1YnNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMucmVtb3ZlKGNoYW5uZWxfbmFtZSk7XG4gICAgICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VuZF9ldmVudChldmVudF9uYW1lLCBkYXRhLCBjaGFubmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChldmVudF9uYW1lLCBkYXRhLCBjaGFubmVsKTtcbiAgICB9XG4gICAgc2hvdWxkVXNlVExTKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudXNlVExTO1xuICAgIH1cbiAgICBzaWduaW4oKSB7XG4gICAgICAgIHRoaXMudXNlci5zaWduaW4oKTtcbiAgICB9XG59XG5wdXNoZXJfUHVzaGVyLmluc3RhbmNlcyA9IFtdO1xucHVzaGVyX1B1c2hlci5pc1JlYWR5ID0gZmFsc2U7XG5wdXNoZXJfUHVzaGVyLmxvZ1RvQ29uc29sZSA9IGZhbHNlO1xucHVzaGVyX1B1c2hlci5SdW50aW1lID0gcnVudGltZTtcbnB1c2hlcl9QdXNoZXIuU2NyaXB0UmVjZWl2ZXJzID0gcnVudGltZS5TY3JpcHRSZWNlaXZlcnM7XG5wdXNoZXJfUHVzaGVyLkRlcGVuZGVuY2llc1JlY2VpdmVycyA9IHJ1bnRpbWUuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzO1xucHVzaGVyX1B1c2hlci5hdXRoX2NhbGxiYWNrcyA9IHJ1bnRpbWUuYXV0aF9jYWxsYmFja3M7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb3JlX3B1c2hlciA9IF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHB1c2hlcl9QdXNoZXIpO1xuZnVuY3Rpb24gY2hlY2tBcHBLZXkoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCBrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyAnWW91IG11c3QgcGFzcyB5b3VyIGFwcCBrZXkgd2hlbiB5b3UgaW5zdGFudGlhdGUgUHVzaGVyLic7XG4gICAgfVxufVxucnVudGltZS5zZXR1cChwdXNoZXJfUHVzaGVyKTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1c2hlci5qcy5tYXAiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qIFVBUGFyc2VyLmpzIHYxLjAuMzVcbiAgIENvcHlyaWdodCDCqSAyMDEyLTIwMjEgRmFpc2FsIFNhbG1hbiA8ZkBmYWlzYWxtYW4uY29tPlxuICAgTUlUIExpY2Vuc2UgKi8vKlxuICAgRGV0ZWN0IEJyb3dzZXIsIEVuZ2luZSwgT1MsIENQVSwgYW5kIERldmljZSB0eXBlL21vZGVsIGZyb20gVXNlci1BZ2VudCBkYXRhLlxuICAgU3VwcG9ydHMgYnJvd3NlciAmIG5vZGUuanMgZW52aXJvbm1lbnQuIFxuICAgRGVtbyAgIDogaHR0cHM6Ly9mYWlzYWxtYW4uZ2l0aHViLmlvL3VhLXBhcnNlci1qc1xuICAgU291cmNlIDogaHR0cHM6Ly9naXRodWIuY29tL2ZhaXNhbG1hbi91YS1wYXJzZXItanMgKi9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4oZnVuY3Rpb24gKHdpbmRvdywgdW5kZWZpbmVkKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLy8vLy8vLy8vLy8vL1xuICAgIC8vIENvbnN0YW50c1xuICAgIC8vLy8vLy8vLy8vLy9cblxuXG4gICAgdmFyIExJQlZFUlNJT04gID0gJzEuMC4zNScsXG4gICAgICAgIEVNUFRZICAgICAgID0gJycsXG4gICAgICAgIFVOS05PV04gICAgID0gJz8nLFxuICAgICAgICBGVU5DX1RZUEUgICA9ICdmdW5jdGlvbicsXG4gICAgICAgIFVOREVGX1RZUEUgID0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIE9CSl9UWVBFICAgID0gJ29iamVjdCcsXG4gICAgICAgIFNUUl9UWVBFICAgID0gJ3N0cmluZycsXG4gICAgICAgIE1BSk9SICAgICAgID0gJ21ham9yJyxcbiAgICAgICAgTU9ERUwgICAgICAgPSAnbW9kZWwnLFxuICAgICAgICBOQU1FICAgICAgICA9ICduYW1lJyxcbiAgICAgICAgVFlQRSAgICAgICAgPSAndHlwZScsXG4gICAgICAgIFZFTkRPUiAgICAgID0gJ3ZlbmRvcicsXG4gICAgICAgIFZFUlNJT04gICAgID0gJ3ZlcnNpb24nLFxuICAgICAgICBBUkNISVRFQ1RVUkU9ICdhcmNoaXRlY3R1cmUnLFxuICAgICAgICBDT05TT0xFICAgICA9ICdjb25zb2xlJyxcbiAgICAgICAgTU9CSUxFICAgICAgPSAnbW9iaWxlJyxcbiAgICAgICAgVEFCTEVUICAgICAgPSAndGFibGV0JyxcbiAgICAgICAgU01BUlRUViAgICAgPSAnc21hcnR0dicsXG4gICAgICAgIFdFQVJBQkxFICAgID0gJ3dlYXJhYmxlJyxcbiAgICAgICAgRU1CRURERUQgICAgPSAnZW1iZWRkZWQnLFxuICAgICAgICBVQV9NQVhfTEVOR1RIID0gMzUwO1xuXG4gICAgdmFyIEFNQVpPTiAgPSAnQW1hem9uJyxcbiAgICAgICAgQVBQTEUgICA9ICdBcHBsZScsXG4gICAgICAgIEFTVVMgICAgPSAnQVNVUycsXG4gICAgICAgIEJMQUNLQkVSUlkgPSAnQmxhY2tCZXJyeScsXG4gICAgICAgIEJST1dTRVIgPSAnQnJvd3NlcicsXG4gICAgICAgIENIUk9NRSAgPSAnQ2hyb21lJyxcbiAgICAgICAgRURHRSAgICA9ICdFZGdlJyxcbiAgICAgICAgRklSRUZPWCA9ICdGaXJlZm94JyxcbiAgICAgICAgR09PR0xFICA9ICdHb29nbGUnLFxuICAgICAgICBIVUFXRUkgID0gJ0h1YXdlaScsXG4gICAgICAgIExHICAgICAgPSAnTEcnLFxuICAgICAgICBNSUNST1NPRlQgPSAnTWljcm9zb2Z0JyxcbiAgICAgICAgTU9UT1JPTEEgID0gJ01vdG9yb2xhJyxcbiAgICAgICAgT1BFUkEgICA9ICdPcGVyYScsXG4gICAgICAgIFNBTVNVTkcgPSAnU2Ftc3VuZycsXG4gICAgICAgIFNIQVJQICAgPSAnU2hhcnAnLFxuICAgICAgICBTT05ZICAgID0gJ1NvbnknLFxuICAgICAgICBWSUVSQSAgID0gJ1ZpZXJhJyxcbiAgICAgICAgWElBT01JICA9ICdYaWFvbWknLFxuICAgICAgICBaRUJSQSAgID0gJ1plYnJhJyxcbiAgICAgICAgRkFDRUJPT0sgICAgPSAnRmFjZWJvb2snLFxuICAgICAgICBDSFJPTUlVTV9PUyA9ICdDaHJvbWl1bSBPUycsXG4gICAgICAgIE1BQ19PUyAgPSAnTWFjIE9TJztcblxuICAgIC8vLy8vLy8vLy8vXG4gICAgLy8gSGVscGVyXG4gICAgLy8vLy8vLy8vL1xuXG4gICAgdmFyIGV4dGVuZCA9IGZ1bmN0aW9uIChyZWdleGVzLCBleHRlbnNpb25zKSB7XG4gICAgICAgICAgICB2YXIgbWVyZ2VkUmVnZXhlcyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZWdleGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbnNbaV0gJiYgZXh0ZW5zaW9uc1tpXS5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZFJlZ2V4ZXNbaV0gPSBleHRlbnNpb25zW2ldLmNvbmNhdChyZWdleGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWRSZWdleGVzW2ldID0gcmVnZXhlc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkUmVnZXhlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyaXplID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgdmFyIGVudW1zID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW51bXNbYXJyW2ldLnRvVXBwZXJDYXNlKCldID0gYXJyW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVudW1zO1xuICAgICAgICB9LFxuICAgICAgICBoYXMgPSBmdW5jdGlvbiAoc3RyMSwgc3RyMikge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHIxID09PSBTVFJfVFlQRSA/IGxvd2VyaXplKHN0cjIpLmluZGV4T2YobG93ZXJpemUoc3RyMSkpICE9PSAtMSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBsb3dlcml6ZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFqb3JpemUgPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZih2ZXJzaW9uKSA9PT0gU1RSX1RZUEUgPyB2ZXJzaW9uLnJlcGxhY2UoL1teXFxkXFwuXS9nLCBFTVBUWSkuc3BsaXQoJy4nKVswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgdHJpbSA9IGZ1bmN0aW9uIChzdHIsIGxlbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihzdHIpID09PSBTVFJfVFlQRSkge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFxzXFxzKi8sIEVNUFRZKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mKGxlbikgPT09IFVOREVGX1RZUEUgPyBzdHIgOiBzdHIuc3Vic3RyaW5nKDAsIFVBX01BWF9MRU5HVEgpO1xuICAgICAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBNYXAgaGVscGVyXG4gICAgLy8vLy8vLy8vLy8vLy9cblxuICAgIHZhciByZ3hNYXBwZXIgPSBmdW5jdGlvbiAodWEsIGFycmF5cykge1xuXG4gICAgICAgICAgICB2YXIgaSA9IDAsIGosIGssIHAsIHEsIG1hdGNoZXMsIG1hdGNoO1xuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHJlZ2V4ZXMgbWFwc1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheXMubGVuZ3RoICYmICFtYXRjaGVzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVnZXggPSBhcnJheXNbaV0sICAgICAgIC8vIGV2ZW4gc2VxdWVuY2UgKDAsMiw0LC4uKVxuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IGFycmF5c1tpICsgMV07ICAgLy8gb2RkIHNlcXVlbmNlICgxLDMsNSwuLilcbiAgICAgICAgICAgICAgICBqID0gayA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyB0cnkgbWF0Y2hpbmcgdWFzdHJpbmcgd2l0aCByZWdleGVzXG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPCByZWdleC5sZW5ndGggJiYgIW1hdGNoZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4W2pdKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSByZWdleFtqKytdLmV4ZWModWEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIW1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBwcm9wcy5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbWF0Y2hlc1srK2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEgPSBwcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBnaXZlbiBwcm9wZXJ0eSBpcyBhY3R1YWxseSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcSA9PT0gT0JKX1RZUEUgJiYgcS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBxWzFdID09IEZVTkNfVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBtb2RpZmllZCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBxWzFdLmNhbGwodGhpcywgbWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhc3NpZ24gZ2l2ZW4gdmFsdWUsIGlnbm9yZSByZWdleCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBxWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHEubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGZ1bmN0aW9uIG9yIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHFbMV0gPT09IEZVTkNfVFlQRSAmJiAhKHFbMV0uZXhlYyAmJiBxWzFdLnRlc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiAodXN1YWxseSBzdHJpbmcgbWFwcGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBtYXRjaCA/IHFbMV0uY2FsbCh0aGlzLCBtYXRjaCwgcVsyXSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhbml0aXplIG1hdGNoIHVzaW5nIGdpdmVuIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1txWzBdXSA9IG1hdGNoID8gbWF0Y2gucmVwbGFjZShxWzFdLCBxWzJdKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBtYXRjaCA/IHFbM10uY2FsbCh0aGlzLCBtYXRjaC5yZXBsYWNlKHFbMV0sIHFbMl0pKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcV0gPSBtYXRjaCA/IG1hdGNoIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RyTWFwcGVyID0gZnVuY3Rpb24gKHN0ciwgbWFwKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCB2YWx1ZSBpcyBhcnJheVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWFwW2ldID09PSBPQkpfVFlQRSAmJiBtYXBbaV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hcFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhcyhtYXBbaV1bal0sIHN0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGkgPT09IFVOS05PV04pID8gdW5kZWZpbmVkIDogaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzKG1hcFtpXSwgc3RyKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGkgPT09IFVOS05PV04pID8gdW5kZWZpbmVkIDogaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBTdHJpbmcgbWFwXG4gICAgLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFNhZmFyaSA8IDMuMFxuICAgIHZhciBvbGRTYWZhcmlNYXAgPSB7XG4gICAgICAgICAgICAnMS4wJyAgIDogJy84JyxcbiAgICAgICAgICAgICcxLjInICAgOiAnLzEnLFxuICAgICAgICAgICAgJzEuMycgICA6ICcvMycsXG4gICAgICAgICAgICAnMi4wJyAgIDogJy80MTInLFxuICAgICAgICAgICAgJzIuMC4yJyA6ICcvNDE2JyxcbiAgICAgICAgICAgICcyLjAuMycgOiAnLzQxNycsXG4gICAgICAgICAgICAnMi4wLjQnIDogJy80MTknLFxuICAgICAgICAgICAgJz8nICAgICA6ICcvJ1xuICAgICAgICB9LFxuICAgICAgICB3aW5kb3dzVmVyc2lvbk1hcCA9IHtcbiAgICAgICAgICAgICdNRScgICAgICAgIDogJzQuOTAnLFxuICAgICAgICAgICAgJ05UIDMuMTEnICAgOiAnTlQzLjUxJyxcbiAgICAgICAgICAgICdOVCA0LjAnICAgIDogJ05UNC4wJyxcbiAgICAgICAgICAgICcyMDAwJyAgICAgIDogJ05UIDUuMCcsXG4gICAgICAgICAgICAnWFAnICAgICAgICA6IFsnTlQgNS4xJywgJ05UIDUuMiddLFxuICAgICAgICAgICAgJ1Zpc3RhJyAgICAgOiAnTlQgNi4wJyxcbiAgICAgICAgICAgICc3JyAgICAgICAgIDogJ05UIDYuMScsXG4gICAgICAgICAgICAnOCcgICAgICAgICA6ICdOVCA2LjInLFxuICAgICAgICAgICAgJzguMScgICAgICAgOiAnTlQgNi4zJyxcbiAgICAgICAgICAgICcxMCcgICAgICAgIDogWydOVCA2LjQnLCAnTlQgMTAuMCddLFxuICAgICAgICAgICAgJ1JUJyAgICAgICAgOiAnQVJNJ1xuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJlZ2V4IG1hcFxuICAgIC8vLy8vLy8vLy8vLy9cblxuICAgIHZhciByZWdleGVzID0ge1xuXG4gICAgICAgIGJyb3dzZXIgOiBbW1xuXG4gICAgICAgICAgICAvXFxiKD86Y3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUgZm9yIEFuZHJvaWQvaU9TXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdDaHJvbWUnXV0sIFtcbiAgICAgICAgICAgIC9lZGcoPzplfGlvc3xhKT9cXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWljcm9zb2Z0IEVkZ2VcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0VkZ2UnXV0sIFtcblxuICAgICAgICAgICAgLy8gUHJlc3RvIGJhc2VkXG4gICAgICAgICAgICAvKG9wZXJhIG1pbmkpXFwvKFstXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIE1pbmlcbiAgICAgICAgICAgIC8ob3BlcmEgW21vYmlsZXRhYl17Myw2fSlcXGIuK3ZlcnNpb25cXC8oWy1cXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgIC8vIE9wZXJhIE1vYmkvVGFibGV0XG4gICAgICAgICAgICAvKG9wZXJhKSg/Oi4rdmVyc2lvblxcL3xbXFwvIF0rKShbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvb3Bpb3NbXFwvIF0rKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIG1pbmkgb24gaXBob25lID49IDguMFxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCBPUEVSQSsnIE1pbmknXV0sIFtcbiAgICAgICAgICAgIC9cXGJvcHJcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIFdlYmtpdFxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCBPUEVSQV1dLCBbXG5cbiAgICAgICAgICAgIC8vIE1peGVkXG4gICAgICAgICAgICAvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtpbmRsZVxuICAgICAgICAgICAgLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvIF0/KFtcXHdcXC5dKikvaSwgICAgICAvLyBMdW5hc2NhcGUvTWF4dGhvbi9OZXRmcm9udC9KYXNtaW5lL0JsYXplclxuICAgICAgICAgICAgLy8gVHJpZGVudCBiYXNlZFxuICAgICAgICAgICAgLyhhdmFudCB8aWVtb2JpbGV8c2xpbSkoPzpicm93c2VyKT9bXFwvIF0/KFtcXHdcXC5dKikvaSwgICAgICAgICAgICAgICAvLyBBdmFudC9JRU1vYmlsZS9TbGltQnJvd3NlclxuICAgICAgICAgICAgLyhiYT9pZHVicm93c2VyKVtcXC8gXT8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCYWlkdSBCcm93c2VyXG4gICAgICAgICAgICAvKD86bXN8XFwoKShpZSkgKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEludGVybmV0IEV4cGxvcmVyXG5cbiAgICAgICAgICAgIC8vIFdlYmtpdC9LSFRNTCBiYXNlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmxvY2svUm9ja01lbHQvTWlkb3JpL0VwaXBoYW55L1NpbGsvU2t5ZmlyZS9Cb2x0L0lyb24vSXJpZGl1bS9QaGFudG9tSlMvQm93c2VyL1F1cFppbGxhL0ZhbGtvblxuICAgICAgICAgICAgLyhmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfGJvbHR8aXJvbnx2aXZhbGRpfGlyaWRpdW18cGhhbnRvbWpzfGJvd3NlcnxxdWFya3xxdXB6aWxsYXxmYWxrb258cmVrb25xfHB1ZmZpbnxicmF2ZXx3aGFsZSg/IS4rbmF2ZXIpfHFxYnJvd3NlcmxpdGV8cXF8ZHVja2R1Y2tnbylcXC8oWy1cXHdcXC5dKykvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVrb25xL1B1ZmZpbi9CcmF2ZS9XaGFsZS9RUUJyb3dzZXJMaXRlL1FRLCBha2EgU2hvdVFcbiAgICAgICAgICAgIC8oaGV5dGFwfG92aSlicm93c2VyXFwvKFtcXGRcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGV5dGFwL092aVxuICAgICAgICAgICAgLyh3ZWlibylfXyhbXFxkXFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlaWJvXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcbiAgICAgICAgICAgIC8oPzpcXGJ1Yz8gP2Jyb3dzZXJ8KD86anVjLispdWN3ZWIpW1xcLyBdPyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgIC8vIFVDQnJvd3NlclxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnVUMnK0JST1dTRVJdXSwgW1xuICAgICAgICAgICAgL21pY3JvbS4rXFxicWJjb3JlXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2VDaGF0IERlc2t0b3AgZm9yIFdpbmRvd3MgQnVpbHQtaW4gQnJvd3NlclxuICAgICAgICAgICAgL1xcYnFiY29yZVxcLyhbXFx3XFwuXSspLittaWNyb20vaVxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnV2VDaGF0KFdpbikgRGVza3RvcCddXSwgW1xuICAgICAgICAgICAgL21pY3JvbWVzc2VuZ2VyXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZUNoYXRcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ1dlQ2hhdCddXSwgW1xuICAgICAgICAgICAgL2tvbnF1ZXJvclxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLb25xdWVyb3JcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0tvbnF1ZXJvciddXSwgW1xuICAgICAgICAgICAgL3RyaWRlbnQuK3J2WzogXShbXFx3XFwuXXsxLDl9KVxcYi4rbGlrZSBnZWNrby9pICAgICAgICAgICAgICAgICAgICAgICAvLyBJRTExXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdJRSddXSwgW1xuICAgICAgICAgICAgL3lhKD86c2VhcmNoKT9icm93c2VyXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBZYW5kZXhcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ1lhbmRleCddXSwgW1xuICAgICAgICAgICAgLyhhdmFzdHxhdmcpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdmFzdC9BVkcgU2VjdXJlIEJyb3dzZXJcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgLyguKykvLCAnJDEgU2VjdXJlICcrQlJPV1NFUl0sIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvXFxiZm9jdXNcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IEZvY3VzXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsIEZJUkVGT1grJyBGb2N1cyddXSwgW1xuICAgICAgICAgICAgL1xcYm9wdFxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgVG91Y2hcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgT1BFUkErJyBUb3VjaCddXSwgW1xuICAgICAgICAgICAgL2NvY19jb2NcXHcrXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29jIENvYyBCcm93c2VyXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdDb2MgQ29jJ11dLCBbXG4gICAgICAgICAgICAvZG9sZmluXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbHBoaW5cbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0RvbHBoaW4nXV0sIFtcbiAgICAgICAgICAgIC9jb2FzdFxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgQ29hc3RcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgT1BFUkErJyBDb2FzdCddXSwgW1xuICAgICAgICAgICAgL21pdWlicm93c2VyXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNSVVJIEJyb3dzZXJcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ01JVUkgJytCUk9XU0VSXV0sIFtcbiAgICAgICAgICAgIC9meGlvc1xcLyhbLVxcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBmb3IgaU9TXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsIEZJUkVGT1hdXSwgW1xuICAgICAgICAgICAgL1xcYnFpaHV8KHFpP2hvP28/fDM2MClicm93c2VyL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMzYwXG4gICAgICAgICAgICBdLCBbW05BTUUsICczNjAgJytCUk9XU0VSXV0sIFtcbiAgICAgICAgICAgIC8ob2N1bHVzfHNhbXN1bmd8c2FpbGZpc2h8aHVhd2VpKWJyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXG4gICAgICAgICAgICBdLCBbW05BTUUsIC8oLispLywgJyQxICcrQlJPV1NFUl0sIFZFUlNJT05dLCBbICAgICAgICAgICAgICAgICAgICAgIC8vIE9jdWx1cy9TYW1zdW5nL1NhaWxmaXNoL0h1YXdlaSBCcm93c2VyXG4gICAgICAgICAgICAvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW9kbyBEcmFnb25cbiAgICAgICAgICAgIF0sIFtbTkFNRSwgL18vZywgJyAnXSwgVkVSU0lPTl0sIFtcbiAgICAgICAgICAgIC8oZWxlY3Ryb24pXFwvKFtcXHdcXC5dKykgc2FmYXJpL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWxlY3Ryb24tYmFzZWQgQXBwXG4gICAgICAgICAgICAvKHRlc2xhKSg/OiBxdGNhcmJyb3dzZXJ8XFwvKDIwXFxkXFxkXFwuWy1cXHdcXC5dKykpL2ksICAgICAgICAgICAgICAgICAgIC8vIFRlc2xhXG4gICAgICAgICAgICAvbT8ocXFicm93c2VyfGJhaWR1Ym94YXBwfDIzNDVFeHBsb3JlcilbXFwvIF0/KFtcXHdcXC5dKykvaSAgICAgICAgICAgIC8vIFFRQnJvd3Nlci9CYWlkdSBBcHAvMjM0NSBCcm93c2VyXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcbiAgICAgICAgICAgIC8obWV0YXNyKVtcXC8gXT8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU291R291QnJvd3NlclxuICAgICAgICAgICAgLyhsYmJyb3dzZXIpL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaWVCYW8gQnJvd3NlclxuICAgICAgICAgICAgL1xcWyhsaW5rZWRpbilhcHBcXF0vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExpbmtlZEluIEFwcCBmb3IgaU9TICYgQW5kcm9pZFxuICAgICAgICAgICAgXSwgW05BTUVdLCBbXG5cbiAgICAgICAgICAgIC8vIFdlYlZpZXdcbiAgICAgICAgICAgIC8oKD86ZmJhblxcL2ZiaW9zfGZiX2lhYlxcL2ZiNGEpKD8hLitmYmF2KXw7ZmJhdlxcLyhbXFx3XFwuXSspOykvaSAgICAgICAvLyBGYWNlYm9vayBBcHAgZm9yIGlPUyAmIEFuZHJvaWRcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgRkFDRUJPT0tdLCBWRVJTSU9OXSwgW1xuICAgICAgICAgICAgLyhrYWthbyg/OnRhbGt8c3RvcnkpKVtcXC8gXShbXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLYWthbyBBcHBcbiAgICAgICAgICAgIC8obmF2ZXIpXFwoLio/KFxcZCtcXC5bXFx3XFwuXSspLipcXCkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmF2ZXIgSW5BcHBcbiAgICAgICAgICAgIC9zYWZhcmkgKGxpbmUpXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGluZSBBcHAgZm9yIGlPU1xuICAgICAgICAgICAgL1xcYihsaW5lKVxcLyhbXFx3XFwuXSspXFwvaWFiL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExpbmUgQXBwIGZvciBBbmRyb2lkXG4gICAgICAgICAgICAvKGNocm9taXVtfGluc3RhZ3JhbSlbXFwvIF0oWy1cXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENocm9taXVtL0luc3RhZ3JhbVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvXFxiZ3NhXFwvKFtcXHdcXC5dKykgLipzYWZhcmlcXC8vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR29vZ2xlIFNlYXJjaCBBcHBsaWFuY2Ugb24gaU9TXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdHU0EnXV0sIFtcbiAgICAgICAgICAgIC9tdXNpY2FsX2x5KD86LithcHBfP3ZlcnNpb25cXC98XykoW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGlrVG9rXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdUaWtUb2snXV0sIFtcblxuICAgICAgICAgICAgL2hlYWRsZXNzY2hyb21lKD86XFwvKFtcXHdcXC5dKyl8ICkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUgSGVhZGxlc3NcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgQ0hST01FKycgSGVhZGxlc3MnXV0sIFtcblxuICAgICAgICAgICAgLyB3dlxcKS4rKGNocm9tZSlcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hyb21lIFdlYlZpZXdcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgQ0hST01FKycgV2ViVmlldyddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvZHJvaWQuKyB2ZXJzaW9uXFwvKFtcXHdcXC5dKylcXGIuKyg/Om1vYmlsZSBzYWZhcml8c2FmYXJpKS9pICAgICAgICAgICAvLyBBbmRyb2lkIEJyb3dzZXJcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0FuZHJvaWQgJytCUk9XU0VSXV0sIFtcblxuICAgICAgICAgICAgLyhjaHJvbWV8b21uaXdlYnxhcm9yYXxbdGl6ZW5va2FdezV9ID9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaSAgICAgICAvLyBDaHJvbWUvT21uaVdlYi9Bcm9yYS9UaXplbi9Ob2tpYVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC92ZXJzaW9uXFwvKFtcXHdcXC5cXCxdKykgLiptb2JpbGVcXC9cXHcrIChzYWZhcmkpL2kgICAgICAgICAgICAgICAgICAgICAgLy8gTW9iaWxlIFNhZmFyaVxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnTW9iaWxlIFNhZmFyaSddXSwgW1xuICAgICAgICAgICAgL3ZlcnNpb25cXC8oW1xcdyhcXC58XFwsKV0rKSAuKihtb2JpbGUgP3NhZmFyaXxzYWZhcmkpL2kgICAgICAgICAgICAgICAgLy8gU2FmYXJpICYgU2FmYXJpIE1vYmlsZVxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIE5BTUVdLCBbXG4gICAgICAgICAgICAvd2Via2l0Lis/KG1vYmlsZSA/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8IDMuMFxuICAgICAgICAgICAgXSwgW05BTUUsIFtWRVJTSU9OLCBzdHJNYXBwZXIsIG9sZFNhZmFyaU1hcF1dLCBbXG5cbiAgICAgICAgICAgIC8od2Via2l0fGtodG1sKVxcLyhbXFx3XFwuXSspL2lcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvLyBHZWNrbyBiYXNlZFxuICAgICAgICAgICAgLyhuYXZpZ2F0b3J8bmV0c2NhcGVcXGQ/KVxcLyhbLVxcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV0c2NhcGVcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ05ldHNjYXBlJ10sIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvbW9iaWxlIHZyOyBydjooW1xcd1xcLl0rKVxcKS4rZmlyZWZveC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggUmVhbGl0eVxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCBGSVJFRk9YKycgUmVhbGl0eSddXSwgW1xuICAgICAgICAgICAgL2VraW9oZi4rKGZsb3cpXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGbG93XG4gICAgICAgICAgICAvKHN3aWZ0Zm94KS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN3aWZ0Zm94XG4gICAgICAgICAgICAvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vIGJyb3dzZXJ8bWluaW1vfGNvbmtlcm9yfGtsYXIpW1xcLyBdPyhbXFx3XFwuXFwrXSspL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEljZURyYWdvbi9JY2V3ZWFzZWwvQ2FtaW5vL0NoaW1lcmEvRmVubmVjL01hZW1vL01pbmltby9Db25rZXJvci9LbGFyXG4gICAgICAgICAgICAvKHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXh8cGFsZW1vb258YmFzaWxpc2t8d2F0ZXJmb3gpXFwvKFstXFx3XFwuXSspJC9pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94L1NlYU1vbmtleS9LLU1lbGVvbi9JY2VDYXQvSWNlQXBlL0ZpcmViaXJkL1Bob2VuaXhcbiAgICAgICAgICAgIC8oZmlyZWZveClcXC8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgRmlyZWZveC1iYXNlZFxuICAgICAgICAgICAgLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspIC4rcnZcXDouK2dlY2tvXFwvXFxkKy9pLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ppbGxhXG5cbiAgICAgICAgICAgIC8vIE90aGVyXG4gICAgICAgICAgICAvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyfG9iaWdvfG1vc2FpY3woPzpnb3xpY2V8dXApW1xcLiBdP2Jyb3dzZXIpWy1cXC8gXT92PyhbXFx3XFwuXSspL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBvbGFyaXMvTHlueC9EaWxsby9pQ2FiL0RvcmlzL0FtYXlhL3czbS9OZXRTdXJmL1NsZWlwbmlyL09iaWdvL01vc2FpYy9Hby9JQ0UvVVAuQnJvd3NlclxuICAgICAgICAgICAgLyhsaW5rcykgXFwoKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaW5rc1xuICAgICAgICAgICAgL3BhbmFzb25pYzsodmllcmEpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYW5hc29uaWMgVmllcmFcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKGNvYmFsdClcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvYmFsdFxuICAgICAgICAgICAgXSwgW05BTUUsIFtWRVJTSU9OLCAvbWFzdGVyLnxsdHMuLywgXCJcIl1dXG4gICAgICAgIF0sXG5cbiAgICAgICAgY3B1IDogW1tcblxuICAgICAgICAgICAgLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVstX10pP3x3b3d8d2luKTY0KVs7XFwpXS9pICAgICAgICAgICAgICAgICAgICAgLy8gQU1ENjQgKHg2NClcbiAgICAgICAgICAgIF0sIFtbQVJDSElURUNUVVJFLCAnYW1kNjQnXV0sIFtcblxuICAgICAgICAgICAgLyhpYTMyKD89OykpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJQTMyIChxdWlja3RpbWUpXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgbG93ZXJpemVdXSwgW1xuXG4gICAgICAgICAgICAvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJQTMyICh4ODYpXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgJ2lhMzInXV0sIFtcblxuICAgICAgICAgICAgL1xcYihhYXJjaDY0fGFybSh2PzhlP2w/fF8/NjQpKVxcYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQVJNNjRcbiAgICAgICAgICAgIF0sIFtbQVJDSElURUNUVVJFLCAnYXJtNjQnXV0sIFtcblxuICAgICAgICAgICAgL1xcYihhcm0oPzp2WzY3XSk/aHQ/bj9bZmxdcD8pXFxiL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFSTUhGXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgJ2FybWhmJ11dLCBbXG5cbiAgICAgICAgICAgIC8vIFBvY2tldFBDIG1pc3Rha2VubHkgaWRlbnRpZmllZCBhcyBQb3dlclBDXG4gICAgICAgICAgICAvd2luZG93cyAoY2V8bW9iaWxlKTsgcHBjOy9pXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgJ2FybSddXSwgW1xuXG4gICAgICAgICAgICAvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86IG1hY3w7fFxcKSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQb3dlclBDXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgL293ZXIvLCBFTVBUWSwgbG93ZXJpemVdXSwgW1xuXG4gICAgICAgICAgICAvKHN1bjRcXHcpWztcXCldL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1BBUkNcbiAgICAgICAgICAgIF0sIFtbQVJDSElURUNUVVJFLCAnc3BhcmMnXV0sIFtcblxuICAgICAgICAgICAgLygoPzphdnIzMnxpYTY0KD89OykpfDY4ayg/PVxcKSl8XFxiYXJtKD89dig/OlsxLTddfFs1LTddMSlsP3w7fGVhYmkpfCg/PWF0bWVsIClhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT9cXGJ8cGEtcmlzYykvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJQTY0LCA2OEssIEFSTS82NCwgQVZSLzMyLCBJUklYLzY0LCBNSVBTLzY0LCBTUEFSQy82NCwgUEEtUklTQ1xuICAgICAgICAgICAgXSwgW1tBUkNISVRFQ1RVUkUsIGxvd2VyaXplXV1cbiAgICAgICAgXSxcblxuICAgICAgICBkZXZpY2UgOiBbW1xuXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgLy8gTU9CSUxFUyAmIFRBQkxFVFNcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgLy8gU2Ftc3VuZ1xuICAgICAgICAgICAgL1xcYihzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xzbS1bcHR4XVxcd3syLDR9fGd0LVtwbl1cXGR7Miw0fXxzZ2gtdDhbNTZdOXxuZXh1cyAxMCkvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBTQU1TVU5HXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvXFxiKCg/OnNbY2dwXWh8Z3R8c20pLVxcdyt8c2NbZy1dP1tcXGRdK2E/fGdhbGF4eSBuZXh1cykvaSxcbiAgICAgICAgICAgIC9zYW1zdW5nWy0gXShbLVxcd10rKS9pLFxuICAgICAgICAgICAgL3NlYy0oc2doXFx3KykvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBTQU1TVU5HXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8vIEFwcGxlXG4gICAgICAgICAgICAvKD86XFwvfFxcKCkoaXAoPzpob25lfG9kKVtcXHcsIF0qKSg/OlxcL3w7KS9pICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpUG9kL2lQaG9uZVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBBUFBMRV0sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL1xcKChpcGFkKTtbLVxcd1xcKSw7IF0rYXBwbGUvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpUGFkXG4gICAgICAgICAgICAvYXBwbGVjb3JlbWVkaWFcXC9bXFx3XFwuXSsgXFwoKGlwYWQpL2ksXG4gICAgICAgICAgICAvXFxiKGlwYWQpXFxkXFxkPyxcXGRcXGQ/WztcXF1dLitpb3MvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBBUFBMRV0sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgLyhtYWNpbnRvc2gpOy9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsIEFQUExFXV0sIFtcblxuICAgICAgICAgICAgLy8gU2hhcnBcbiAgICAgICAgICAgIC9cXGIoc2gtP1thbHR2el0/XFxkXFxkW2EtZWttXT8pL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgU0hBUlBdLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLy8gSHVhd2VpXG4gICAgICAgICAgICAvXFxiKCg/OmFnW3JzXVsyM10/fGJhaDI/fHNodD98YnR2KS1hP1tsd11cXGR7Mn0pXFxiKD8hLitkXFwvcykvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBIVUFXRUldLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC8oPzpodWF3ZWl8aG9ub3IpKFstXFx3IF0rKVs7XFwpXS9pLFxuICAgICAgICAgICAgL1xcYihuZXh1cyA2cHxcXHd7Miw0fWU/LVthdHVdP1tsbl1bXFxkeF1bMDEyMzU5Y11bYWRuXT8pXFxiKD8hLitkXFwvcykvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBIVUFXRUldLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLy8gWGlhb21pXG4gICAgICAgICAgICAvXFxiKHBvY29bXFx3IF0rKSg/OiBidWl8XFwpKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFhpYW9taSBQT0NPXG4gICAgICAgICAgICAvXFxiOyAoXFx3KykgYnVpbGRcXC9obVxcMS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBYaWFvbWkgSG9uZ21pICdudW1lcmljJyBtb2RlbHNcbiAgICAgICAgICAgIC9cXGIoaG1bLV8gXT9ub3RlP1tfIF0/KD86XFxkXFx3KT8pIGJ1aS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWGlhb21pIEhvbmdtaVxuICAgICAgICAgICAgL1xcYihyZWRtaVtcXC1fIF0/KD86bm90ZXxrKT9bXFx3XyBdKykoPzogYnVpfFxcKSkvaSwgICAgICAgICAgICAgICAgICAgLy8gWGlhb21pIFJlZG1pXG4gICAgICAgICAgICAvXFxiKG1pWy1fIF0/KD86YVxcZHxvbmV8b25lW18gXXBsdXN8bm90ZSBsdGV8bWF4fGNjKT9bXyBdPyg/OlxcZD9cXHc/KVtfIF0/KD86cGx1c3xzZXxsaXRlKT8pKD86IGJ1aXxcXCkpL2kgLy8gWGlhb21pIE1pXG4gICAgICAgICAgICBdLCBbW01PREVMLCAvXy9nLCAnICddLCBbVkVORE9SLCBYSUFPTUldLCBbVFlQRSwgTU9CSUxFXV0sIFtcbiAgICAgICAgICAgIC9cXGIobWlbLV8gXT8oPzpwYWQpKD86W1xcd18gXSspKSg/OiBidWl8XFwpKS9pICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWkgUGFkIHRhYmxldHNcbiAgICAgICAgICAgIF0sW1tNT0RFTCwgL18vZywgJyAnXSwgW1ZFTkRPUiwgWElBT01JXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8vIE9QUE9cbiAgICAgICAgICAgIC87IChcXHcrKSBidWkuKyBvcHBvL2ksXG4gICAgICAgICAgICAvXFxiKGNwaFsxMl1cXGR7M318cCg/OmFmfGNbYWxdfGRcXHd8ZVthcl0pW210XVxcZDB8eDkwMDd8YTEwMW9wKVxcYi9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdPUFBPJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvLyBWaXZvXG4gICAgICAgICAgICAvdml2byAoXFx3KykoPzogYnVpfFxcKSkvaSxcbiAgICAgICAgICAgIC9cXGIodlsxMl1cXGR7M31cXHc/W2F0XSkoPzogYnVpfDspL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1Zpdm8nXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8vIFJlYWxtZVxuICAgICAgICAgICAgL1xcYihybXhbMTJdXFxkezN9KSg/OiBidWl8O3xcXCkpL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1JlYWxtZSddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLy8gTW90b3JvbGFcbiAgICAgICAgICAgIC9cXGIobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfCAoPzpiaW9uaWN8eDJ8cHJvfHJhenIpKT86PyggNGcpPylcXGJbXFx3IF0rYnVpbGRcXC8vaSxcbiAgICAgICAgICAgIC9cXGJtb3QoPzpvcm9sYSk/Wy0gXShcXHcqKS9pLFxuICAgICAgICAgICAgLygoPzptb3RvW1xcd1xcKFxcKSBdK3x4dFxcZHszLDR9fG5leHVzIDYpKD89IGJ1aXxcXCkpKS9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsIE1PVE9ST0xBXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvXFxiKG16NjBcXGR8eG9vbVsyIF17MCwyfSkgYnVpbGRcXC8vaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBNT1RPUk9MQV0sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvLyBMR1xuICAgICAgICAgICAgLygoPz1sZyk/W3ZsXWtcXC0/XFxkezN9KSBidWl8IDNcXC5bLVxcdzsgXXsxMH1sZz8tKFswNmN2OV17Myw0fSkvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBMR10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgLyhsbSg/Oi0/ZjEwMFtudl0/fC1bXFx3XFwuXSspKD89IGJ1aXxcXCkpfG5leHVzIFs0NV0pL2ksXG4gICAgICAgICAgICAvXFxibGdbLWU7XFwvIF0rKCg/IWJyb3dzZXJ8bmV0Y2FzdHxhbmRyb2lkIHR2KVxcdyspL2ksXG4gICAgICAgICAgICAvXFxibGctPyhbXFxkXFx3XSspIGJ1aS9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsIExHXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8vIExlbm92b1xuICAgICAgICAgICAgLyhpZGVhdGFiWy1cXHcgXSspL2ksXG4gICAgICAgICAgICAvbGVub3ZvID8oc1s1Nl0wMDBbLVxcd10rfHRhYig/OltcXHcgXSspfHl0Wy1cXGRcXHddezZ9fHRiWy1cXGRcXHddezZ9KS9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdMZW5vdm8nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8vIE5va2lhXG4gICAgICAgICAgICAvKD86bWFlbW98bm9raWEpLioobjkwMHxsdW1pYSBcXGQrKS9pLFxuICAgICAgICAgICAgL25va2lhWy1fIF0/KFstXFx3XFwuXSopL2lcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsIC9fL2csICcgJ10sIFtWRU5ET1IsICdOb2tpYSddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLy8gR29vZ2xlXG4gICAgICAgICAgICAvKHBpeGVsIGMpXFxiL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgUGl4ZWwgQ1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBHT09HTEVdLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC9kcm9pZC4rOyAocGl4ZWxbXFxkYXhsIF17MCw2fSkoPzogYnVpfFxcKSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgUGl4ZWxcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgR09PR0xFXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8vIFNvbnlcbiAgICAgICAgICAgIC9kcm9pZC4rIChhP1xcZFswLTJdezJ9c298W2MtZ11cXGR7NH18c29bLWdsXVxcdyt8eHEtYVxcd1s0LTddWzEyXSkoPz0gYnVpfFxcKS4rY2hyb21lXFwvKD8hWzEtNl17MCwxfVxcZFxcLikpL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgU09OWV0sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL3NvbnkgdGFibGV0IFtwc10vaSxcbiAgICAgICAgICAgIC9cXGIoPzpzb255KT9zZ3BcXHcrKD86IGJ1aXxcXCkpL2lcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsICdYcGVyaWEgVGFibGV0J10sIFtWRU5ET1IsIFNPTlldLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgLy8gT25lUGx1c1xuICAgICAgICAgICAgLyAoa2IyMDA1fGluMjBbMTJdNXxiZTIwWzEyXVs1OV0pXFxiL2ksXG4gICAgICAgICAgICAvKD86b25lKT8oPzpwbHVzKT8gKGFcXGQwXFxkXFxkKSg/OiBifFxcKSkvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnT25lUGx1cyddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLy8gQW1hem9uXG4gICAgICAgICAgICAvKGFsZXhhKXdlYm0vaSxcbiAgICAgICAgICAgIC8oa2ZbYS16XXsyfXdpfGFlb1tjLXJdezJ9KSggYnVpfFxcKSkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtpbmRsZSBGaXJlIHdpdGhvdXQgU2lsayAvIEVjaG8gU2hvd1xuICAgICAgICAgICAgLyhrZlthLXpdKykoIGJ1aXxcXCkpLitzaWxrXFwvL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtpbmRsZSBGaXJlIEhEXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsIEFNQVpPTl0sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgLygoPzpzZHxrZilbMDM0OWhpam9yc3R1d10rKSggYnVpfFxcKSkuK3NpbGtcXC8vaSAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgUGhvbmVcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsIC8oLispL2csICdGaXJlIFBob25lICQxJ10sIFtWRU5ET1IsIEFNQVpPTl0sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvLyBCbGFja0JlcnJ5XG4gICAgICAgICAgICAvKHBsYXlib29rKTtbLVxcd1xcKSw7IF0rKHJpbSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmxhY2tCZXJyeSBQbGF5Qm9va1xuICAgICAgICAgICAgXSwgW01PREVMLCBWRU5ET1IsIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYigoPzpiYlthLWZdfHN0W2h2XSkxMDAtXFxkKS9pLFxuICAgICAgICAgICAgL1xcKGJiMTA7IChcXHcrKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJsYWNrQmVycnkgMTBcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgQkxBQ0tCRVJSWV0sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvLyBBc3VzXG4gICAgICAgICAgICAvKD86XFxifGFzdXNfKSh0cmFuc2ZvW3ByaW1lIF17NCwxMH0gXFx3K3xlZWVwY3xzbGlkZXIgXFx3K3xuZXh1cyA3fHBhZGZvbmV8cDAwW2NqXSkvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBBU1VTXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvICh6W2Jlc102WzAyN11bMDEyXVtrbV1bbHNdfHplbmZvbmUgXFxkXFx3PylcXGIvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBBU1VTXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8vIEhUQ1xuICAgICAgICAgICAgLyhuZXh1cyA5KS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIVEMgTmV4dXMgOVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnSFRDJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgLyhodGMpWy07XyBdezEsMn0oW1xcdyBdKyg/PVxcKXwgYnVpKXxcXHcrKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIVENcblxuICAgICAgICAgICAgLy8gWlRFXG4gICAgICAgICAgICAvKHp0ZSlbLSBdKFtcXHcgXSs/KSg/OiBidWl8XFwvfFxcKSkvaSxcbiAgICAgICAgICAgIC8oYWxjYXRlbHxnZWVrc3Bob25lfG5leGlhbnxwYW5hc29uaWMoPyEoPzo7fFxcLikpfHNvbnkoPyEtYnJhKSlbLV8gXT8oWy1cXHddKikvaSAgICAgICAgIC8vIEFsY2F0ZWwvR2Vla3NQaG9uZS9OZXhpYW4vUGFuYXNvbmljL1NvbnlcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIFtNT0RFTCwgL18vZywgJyAnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8vIEFjZXJcbiAgICAgICAgICAgIC9kcm9pZC4rOyAoW2FiXVsxLTddLT9bMDE3OGFdXFxkXFxkPykvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnQWNlciddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgLy8gTWVpenVcbiAgICAgICAgICAgIC9kcm9pZC4rOyAobVsxLTVdIG5vdGUpIGJ1aS9pLFxuICAgICAgICAgICAgL1xcYm16LShbLVxcd117Mix9KS9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdNZWl6dSddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLy8gTUlYRURcbiAgICAgICAgICAgIC8oYmxhY2tiZXJyeXxiZW5xfHBhbG0oPz1cXC0pfHNvbnllcmljc3NvbnxhY2VyfGFzdXN8ZGVsbHxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbLV8gXT8oWy1cXHddKikvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmxhY2tCZXJyeS9CZW5RL1BhbG0vU29ueS1Fcmljc3Nvbi9BY2VyL0FzdXMvRGVsbC9NZWl6dS9Nb3Rvcm9sYS9Qb2x5dHJvblxuICAgICAgICAgICAgLyhocCkgKFtcXHcgXStcXHcpL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhQIGlQQVFcbiAgICAgICAgICAgIC8oYXN1cyktPyhcXHcrKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzdXNcbiAgICAgICAgICAgIC8obWljcm9zb2Z0KTsgKGx1bWlhW1xcdyBdKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1pY3Jvc29mdCBMdW1pYVxuICAgICAgICAgICAgLyhsZW5vdm8pWy1fIF0/KFstXFx3XSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVub3ZvXG4gICAgICAgICAgICAvKGpvbGxhKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEpvbGxhXG4gICAgICAgICAgICAvKG9wcG8pID8oW1xcdyBdKykgYnVpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPUFBPXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8oa29ibylcXHMoZXJlYWRlcnx0b3VjaCkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtvYm9cbiAgICAgICAgICAgIC8oYXJjaG9zKSAoZ2FtZXBhZDI/KS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJjaG9zXG4gICAgICAgICAgICAvKGhwKS4rKHRvdWNocGFkKD8hLit0YWJsZXQpfHRhYmxldCkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhQIFRvdWNoUGFkXG4gICAgICAgICAgICAvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtpbmRsZVxuICAgICAgICAgICAgLyhub29rKVtcXHcgXStidWlsZFxcLyhcXHcrKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb29rXG4gICAgICAgICAgICAvKGRlbGwpIChzdHJlYVtrcHJcXGQgXSpbXFxka29dKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsbCBTdHJlYWtcbiAgICAgICAgICAgIC8obGVbLSBdK3BhbilbLSBdKyhcXHd7MSw5fSkgYnVpL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlIFBhbiBUYWJsZXRzXG4gICAgICAgICAgICAvKHRyaW5pdHkpWy0gXSoodFxcZHszfSkgYnVpL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmluaXR5IFRhYmxldHNcbiAgICAgICAgICAgIC8oZ2lnYXNldClbLSBdKyhxXFx3ezEsOX0pIGJ1aS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdpZ2FzZXQgVGFibGV0c1xuICAgICAgICAgICAgLyh2b2RhZm9uZSkgKFtcXHcgXSspKD86XFwpfCBidWkpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZvZGFmb25lXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8oc3VyZmFjZSBkdW8pL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VyZmFjZSBEdW9cbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgTUlDUk9TT0ZUXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvZHJvaWQgW1xcZFxcLl0rOyAoZnBcXGR1PykoPzogYnxcXCkpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGYWlycGhvbmVcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0ZhaXJwaG9uZSddLCBbVFlQRSwgTU9CSUxFXV0sIFtcbiAgICAgICAgICAgIC8odTMwNGFhKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQVQmVFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnQVQmVCddLCBbVFlQRSwgTU9CSUxFXV0sIFtcbiAgICAgICAgICAgIC9cXGJzaWUtKFxcdyopL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaWVtZW5zXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdTaWVtZW5zJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL1xcYihyY3RcXHcrKSBiL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJDQSBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdSQ0EnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvXFxiKHZlbnVlW1xcZCBdezIsN30pIGIvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsbCBWZW51ZSBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdEZWxsJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYihxKD86bXZ8dGEpXFx3KykgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcml6b24gVGFibGV0XG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdWZXJpem9uJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYig/OmJhcm5lc1smIF0rbm9ibGUgfGJuW3J0XSkoW1xcd1xcKyBdKikgYi9pICAgICAgICAgICAgICAgICAgICAgICAvLyBCYXJuZXMgJiBOb2JsZSBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0Jhcm5lcyAmIE5vYmxlJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYih0bVxcZHszfVxcdyspIGIvaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTnVWaXNpb24nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvXFxiKGs4OCkgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBaVEUgSyBTZXJpZXMgVGFibGV0XG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdaVEUnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvXFxiKG54XFxkezN9aikgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWlRFIE51YmlhXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdaVEUnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvXFxiKGdlblxcZHszfSkgYi4rNDloL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3dpc3MgR0VOIE1vYmlsZVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnU3dpc3MnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvXFxiKHp1clxcZHszfSkgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3dpc3MgWlVSIFRhYmxldFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnU3dpc3MnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvXFxiKCh6ZWtpKT90Yi4qXFxiKSBiL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWmVraSBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdaZWtpJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYihbeXJdXFxkezJ9KSBiL2ksXG4gICAgICAgICAgICAvXFxiKGRyYWdvblstIF0rdG91Y2ggfGR0KShcXHd7NX0pIGIvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhZ29uIFRvdWNoIFRhYmxldFxuICAgICAgICAgICAgXSwgW1tWRU5ET1IsICdEcmFnb24gVG91Y2gnXSwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYihucy0/XFx3ezAsOX0pIGIvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluc2lnbmlhIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0luc2lnbmlhJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYigobnhhfG5leHQpLT9cXHd7MCw5fSkgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5leHRCb29rIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ05leHRCb29rJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL1xcYih4dHJlbWVcXF8pPyh2KDFbMDQ1XXwyWzAxNV18WzM0NjldMHw3WzA1XSkpIGIvaSAgICAgICAgICAgICAgICAgIC8vIFZvaWNlIFh0cmVtZSBQaG9uZXNcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnVm9pY2UnXSwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL1xcYihsdnRlbFxcLSk/KHYxWzEyXSkgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEx2VGVsIFBob25lc1xuICAgICAgICAgICAgXSwgW1tWRU5ET1IsICdMdlRlbCddLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvXFxiKHBoLTEpIC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFc3NlbnRpYWwgUEgtMVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnRXNzZW50aWFsJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL1xcYih2KDEwMG1kfDcwMG5hfDcwMTF8OTE3ZykuKlxcYikgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVudml6ZW4gVGFibGV0c1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnRW52aXplbiddLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC9cXGIodHJpb1stXFx3XFwuIF0rKSBiL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFjaFNwZWVkIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ01hY2hTcGVlZCddLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC9cXGJ0dV8oMTQ5MSkgYi9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJvdG9yIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1JvdG9yJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgLyhzaGllbGRbXFx3IF0rKSBiL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTnZpZGlhIFNoaWVsZCBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdOdmlkaWEnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvKHNwcmludCkgKFxcdyspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTcHJpbnQgUGhvbmVzXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvKGtpblxcLltvbmV0d117M30pL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaWNyb3NvZnQgS2luXG4gICAgICAgICAgICBdLCBbW01PREVMLCAvXFwuL2csICcgJ10sIFtWRU5ET1IsIE1JQ1JPU09GVF0sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL2Ryb2lkLis7IChjYzY2NjY/fGV0NVsxNl18bWNbMjM5XVsyM114P3x2YzhbMDNdeD8pXFwpL2kgICAgICAgICAgICAgLy8gWmVicmFcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgWkVCUkFdLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC9kcm9pZC4rOyAoZWMzMHxwczIwfHRjWzItOF1cXGRba3hdKVxcKS9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsIFpFQlJBXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgIC8vIFNNQVJUVFZTXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgIC9zbWFydC10di4rKHNhbXN1bmcpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2Ftc3VuZ1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuICAgICAgICAgICAgL2hiYnR2LittYXBsZTsoXFxkKykvaVxuICAgICAgICAgICAgXSwgW1tNT0RFTCwgL14vLCAnU21hcnRUViddLCBbVkVORE9SLCBTQU1TVU5HXSwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuICAgICAgICAgICAgLyhudXg7IG5ldGNhc3QuK3NtYXJ0dHZ8bGcgKG5ldGNhc3RcXC50di0yMDFcXGR8YW5kcm9pZCB0dikpL2kgICAgICAgIC8vIExHIFNtYXJ0VFZcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCBMR10sIFtUWVBFLCBTTUFSVFRWXV0sIFtcbiAgICAgICAgICAgIC8oYXBwbGUpID90di9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbGUgVFZcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIFtNT0RFTCwgQVBQTEUrJyBUViddLCBbVFlQRSwgU01BUlRUVl1dLCBbXG4gICAgICAgICAgICAvY3JrZXkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdvb2dsZSBDaHJvbWVjYXN0XG4gICAgICAgICAgICBdLCBbW01PREVMLCBDSFJPTUUrJ2Nhc3QnXSwgW1ZFTkRPUiwgR09PR0xFXSwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuICAgICAgICAgICAgL2Ryb2lkLithZnQoXFx3KSggYnVpfFxcKSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgVFZcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgQU1BWk9OXSwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuICAgICAgICAgICAgL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pLFxuICAgICAgICAgICAgLyhhcXVvcy10dltcXHcgXSspXFwpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNoYXJwXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsIFNIQVJQXSwgW1RZUEUsIFNNQVJUVFZdXSxbXG4gICAgICAgICAgICAvKGJyYXZpYVtcXHcgXSspKCBidWl8XFwpKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbnlcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgU09OWV0sIFtUWVBFLCBTTUFSVFRWXV0sIFtcbiAgICAgICAgICAgIC8obWl0di1cXHd7NX0pIGJ1aS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFhpYW9taVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBYSUFPTUldLCBbVFlQRSwgU01BUlRUVl1dLCBbXG4gICAgICAgICAgICAvSGJidHYuKih0ZWNobmlzYXQpICguKik7L2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlY2huaVNBVFxuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBTTUFSVFRWXV0sIFtcbiAgICAgICAgICAgIC9cXGIocm9rdSlbXFxkeF0qW1xcKVxcL10oKD86ZHZwLSk/W1xcZFxcLl0qKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUm9rdVxuICAgICAgICAgICAgL2hiYnR2XFwvXFxkK1xcLlxcZCtcXC5cXGQrICtcXChbXFx3XFwrIF0qOyAqKFtcXHdcXGRdW147XSopOyhbXjtdKikvaSAgICAgICAgIC8vIEhiYlRWIGRldmljZXNcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCB0cmltXSwgW01PREVMLCB0cmltXSwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuICAgICAgICAgICAgL1xcYihhbmRyb2lkIHR2fHNtYXJ0Wy0gXT90dnxvcGVyYSB0dnx0djsgcnY6KVxcYi9pICAgICAgICAgICAgICAgICAgIC8vIFNtYXJ0VFYgZnJvbSBVbmlkZW50aWZpZWQgVmVuZG9yc1xuICAgICAgICAgICAgXSwgW1tUWVBFLCBTTUFSVFRWXV0sIFtcblxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgLy8gQ09OU09MRVNcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgLyhvdXlhKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdXlhXG4gICAgICAgICAgICAvKG5pbnRlbmRvKSAoW3dpZHMzdXRjaF0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5pbnRlbmRvXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIENPTlNPTEVdXSwgW1xuICAgICAgICAgICAgL2Ryb2lkLis7IChzaGllbGQpIGJ1aS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOdmlkaWFcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ052aWRpYSddLCBbVFlQRSwgQ09OU09MRV1dLCBbXG4gICAgICAgICAgICAvKHBsYXlzdGF0aW9uIFszNDVwb3J0YWJsZXZpXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXlzdGF0aW9uXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsIFNPTlldLCBbVFlQRSwgQ09OU09MRV1dLCBbXG4gICAgICAgICAgICAvXFxiKHhib3goPzogb25lKT8oPyE7IHhib3gpKVtcXCk7IF0vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWljcm9zb2Z0IFhib3hcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgTUlDUk9TT0ZUXSwgW1RZUEUsIENPTlNPTEVdXSwgW1xuXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAvLyBXRUFSQUJMRVNcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgLygocGViYmxlKSlhcHAvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQZWJibGVcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgV0VBUkFCTEVdXSwgW1xuICAgICAgICAgICAgLyh3YXRjaCkoPzogP29zWyxcXC9dfFxcZCxcXGRcXC8pW1xcZFxcLl0rL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBsZSBXYXRjaFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCBBUFBMRV0sIFtUWVBFLCBXRUFSQUJMRV1dLCBbXG4gICAgICAgICAgICAvZHJvaWQuKzsgKGdsYXNzKSBcXGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgR2xhc3NcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgR09PR0xFXSwgW1RZUEUsIFdFQVJBQkxFXV0sIFtcbiAgICAgICAgICAgIC9kcm9pZC4rOyAod3Q2Mz8wezIsM30pXFwpL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgWkVCUkFdLCBbVFlQRSwgV0VBUkFCTEVdXSwgW1xuICAgICAgICAgICAgLyhxdWVzdCggMnwgcHJvKT8pL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPY3VsdXMgUXVlc3RcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgRkFDRUJPT0tdLCBbVFlQRSwgV0VBUkFCTEVdXSwgW1xuXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAvLyBFTUJFRERFRFxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICAvKHRlc2xhKSg/OiBxdGNhcmJyb3dzZXJ8XFwvWy1cXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc2xhXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBbVFlQRSwgRU1CRURERURdXSwgW1xuICAgICAgICAgICAgLyhhZW9iYylcXGIvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWNobyBEb3RcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgQU1BWk9OXSwgW1RZUEUsIEVNQkVEREVEXV0sIFtcblxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgIC8vIE1JWEVEIChHRU5FUklDKVxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICAvZHJvaWQgLis/OyAoW147XSs/KSg/OiBidWl8XFwpIGFwcGxldykuKz8gbW9iaWxlIHNhZmFyaS9pICAgICAgICAgICAvLyBBbmRyb2lkIFBob25lcyBmcm9tIFVuaWRlbnRpZmllZCBWZW5kb3JzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL2Ryb2lkIC4rPzsgKFteO10rPykoPzogYnVpfFxcKSBhcHBsZXcpLis/KD8hIG1vYmlsZSkgc2FmYXJpL2kgICAgICAgLy8gQW5kcm9pZCBUYWJsZXRzIGZyb20gVW5pZGVudGlmaWVkIFZlbmRvcnNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvXFxiKCh0YWJsZXR8dGFiKVs7XFwvXXxmb2N1c1xcL1xcZCg/IS4rbW9iaWxlKSkvaSAgICAgICAgICAgICAgICAgICAgICAvLyBVbmlkZW50aWZpYWJsZSBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC8ocGhvbmV8bW9iaWxlKD86WztcXC9dfCBbIFxcd1xcL1xcLl0qc2FmYXJpKXxwZGEoPz0uK3dpbmRvd3MgY2UpKS9pICAgIC8vIFVuaWRlbnRpZmlhYmxlIE1vYmlsZVxuICAgICAgICAgICAgXSwgW1tUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgLyhhbmRyb2lkWy1cXHdcXC4gXXswLDl9KTsuK2J1aWwvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyaWMgQW5kcm9pZCBEZXZpY2VcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0dlbmVyaWMnXV1cbiAgICAgICAgXSxcblxuICAgICAgICBlbmdpbmUgOiBbW1xuXG4gICAgICAgICAgICAvd2luZG93cy4rIGVkZ2VcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWRnZUhUTUxcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgRURHRSsnSFRNTCddXSwgW1xuXG4gICAgICAgICAgICAvd2Via2l0XFwvNTM3XFwuMzYuK2Nocm9tZVxcLyg/ITI3KShbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmxpbmtcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0JsaW5rJ11dLCBbXG5cbiAgICAgICAgICAgIC8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJlc3RvXG4gICAgICAgICAgICAvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M218Z29hbm5hKVxcLyhbXFx3XFwuXSspL2ksIC8vIFdlYktpdC9UcmlkZW50L05ldEZyb250L05ldFN1cmYvQW1heWEvTHlueC93M20vR29hbm5hXG4gICAgICAgICAgICAvZWtpb2goZmxvdylcXC8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZsb3dcbiAgICAgICAgICAgIC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC8gXVxcKD8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtIVE1ML1Rhc21hbi9MaW5rc1xuICAgICAgICAgICAgLyhpY2FiKVtcXC8gXShbMjNdXFwuW1xcZFxcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaUNhYlxuICAgICAgICAgICAgL1xcYihsaWJ3ZWIpL2lcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvcnZcXDooW1xcd1xcLl17MSw5fSlcXGIuKyhnZWNrbykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZWNrb1xuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIE5BTUVdXG4gICAgICAgIF0sXG5cbiAgICAgICAgb3MgOiBbW1xuXG4gICAgICAgICAgICAvLyBXaW5kb3dzXG4gICAgICAgICAgICAvbWljcm9zb2Z0ICh3aW5kb3dzKSAodmlzdGF8eHApL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpbmRvd3MgKGlUdW5lcylcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuICAgICAgICAgICAgLyh3aW5kb3dzKSBudCA2XFwuMjsgKGFybSkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2luZG93cyBSVFxuICAgICAgICAgICAgLyh3aW5kb3dzICg/OnBob25lKD86IG9zKT98bW9iaWxlKSlbXFwvIF0/KFtcXGRcXC5cXHcgXSopL2ksICAgICAgICAgICAgLy8gV2luZG93cyBQaG9uZVxuICAgICAgICAgICAgLyh3aW5kb3dzKVtcXC8gXT8oW250Y2VcXGRcXC4gXStcXHcpKD8hLit4Ym94KS9pXG4gICAgICAgICAgICBdLCBbTkFNRSwgW1ZFUlNJT04sIHN0ck1hcHBlciwgd2luZG93c1ZlcnNpb25NYXBdXSwgW1xuICAgICAgICAgICAgLyh3aW4oPz0zfDl8bil8d2luIDl4ICkoW250XFxkXFwuXSspL2lcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ1dpbmRvd3MnXSwgW1ZFUlNJT04sIHN0ck1hcHBlciwgd2luZG93c1ZlcnNpb25NYXBdXSwgW1xuXG4gICAgICAgICAgICAvLyBpT1MvbWFjT1NcbiAgICAgICAgICAgIC9pcFtob25lYWRdezIsNH1cXGIoPzouKm9zIChbXFx3XSspIGxpa2UgbWFjfDsgb3BlcmEpL2ksICAgICAgICAgICAgICAvLyBpT1NcbiAgICAgICAgICAgIC9pb3M7ZmJzdlxcLyhbXFxkXFwuXSspL2ksXG4gICAgICAgICAgICAvY2ZuZXR3b3JrXFwvLitkYXJ3aW4vaVxuICAgICAgICAgICAgXSwgW1tWRVJTSU9OLCAvXy9nLCAnLiddLCBbTkFNRSwgJ2lPUyddXSwgW1xuICAgICAgICAgICAgLyhtYWMgb3MgeCkgPyhbXFx3XFwuIF0qKS9pLFxuICAgICAgICAgICAgLyhtYWNpbnRvc2h8bWFjX3Bvd2VycGNcXGIpKD8hLitoYWlrdSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFjIE9TXG4gICAgICAgICAgICBdLCBbW05BTUUsIE1BQ19PU10sIFtWRVJTSU9OLCAvXy9nLCAnLiddXSwgW1xuXG4gICAgICAgICAgICAvLyBNb2JpbGUgT1Nlc1xuICAgICAgICAgICAgL2Ryb2lkIChbXFx3XFwuXSspXFxiLisoYW5kcm9pZFstIF14ODZ8aGFybW9ueW9zKS9pICAgICAgICAgICAgICAgICAgICAvLyBBbmRyb2lkLXg4Ni9IYXJtb255T1NcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBOQU1FXSwgWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW5kcm9pZC9XZWJPUy9RTlgvQmFkYS9SSU0vTWFlbW8vTWVlR28vU2FpbGZpc2ggT1NcbiAgICAgICAgICAgIC8oYW5kcm9pZHx3ZWJvc3xxbnh8YmFkYXxyaW0gdGFibGV0IG9zfG1hZW1vfG1lZWdvfHNhaWxmaXNoKVstXFwvIF0/KFtcXHdcXC5dKikvaSxcbiAgICAgICAgICAgIC8oYmxhY2tiZXJyeSlcXHcqXFwvKFtcXHdcXC5dKikvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJsYWNrYmVycnlcbiAgICAgICAgICAgIC8odGl6ZW58a2Fpb3MpW1xcLyBdKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGl6ZW4vS2FpT1NcbiAgICAgICAgICAgIC9cXCgoc2VyaWVzNDApOy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlcmllcyA0MFxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvXFwoYmIoMTApOy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCbGFja0JlcnJ5IDEwXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsIEJMQUNLQkVSUlldXSwgW1xuICAgICAgICAgICAgLyg/OnN5bWJpYW4gP29zfHN5bWJvc3xzNjAoPz07KXxzZXJpZXM2MClbLVxcLyBdPyhbXFx3XFwuXSopL2kgICAgICAgICAvLyBTeW1iaWFuXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdTeW1iaWFuJ11dLCBbXG4gICAgICAgICAgICAvbW96aWxsYVxcL1tcXGRcXC5dKyBcXCgoPzptb2JpbGV8dGFibGV0fHR2fG1vYmlsZTsgW1xcdyBdKyk7IHJ2Oi4rIGdlY2tvXFwvKFtcXHdcXC5dKykvaSAvLyBGaXJlZm94IE9TXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsIEZJUkVGT1grJyBPUyddXSwgW1xuICAgICAgICAgICAgL3dlYjBzOy4rcnQodHYpL2ksXG4gICAgICAgICAgICAvXFxiKD86aHApP3dvcyg/OmJyb3dzZXIpP1xcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZWJPU1xuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnd2ViT1MnXV0sIFtcbiAgICAgICAgICAgIC93YXRjaCg/OiA/b3NbLFxcL118XFxkLFxcZFxcLykoW1xcZFxcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2F0Y2hPU1xuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnd2F0Y2hPUyddXSwgW1xuXG4gICAgICAgICAgICAvLyBHb29nbGUgQ2hyb21lY2FzdFxuICAgICAgICAgICAgL2Nya2V5XFwvKFtcXGRcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgQ2hyb21lY2FzdFxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCBDSFJPTUUrJ2Nhc3QnXV0sIFtcbiAgICAgICAgICAgIC8oY3JvcykgW1xcd10rKD86XFwpfCAoW1xcd1xcLl0rKVxcYikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWl1bSBPU1xuICAgICAgICAgICAgXSwgW1tOQU1FLCBDSFJPTUlVTV9PU10sIFZFUlNJT05dLFtcblxuICAgICAgICAgICAgLy8gU21hcnQgVFZzXG4gICAgICAgICAgICAvcGFuYXNvbmljOyh2aWVyYSkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhbmFzb25pYyBWaWVyYVxuICAgICAgICAgICAgLyhuZXRyYW5nZSltbWgvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXRyYW5nZVxuICAgICAgICAgICAgLyhuZXR0dilcXC8oXFxkK1xcLltcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5ldFRWXG5cbiAgICAgICAgICAgIC8vIENvbnNvbGVcbiAgICAgICAgICAgIC8obmludGVuZG98cGxheXN0YXRpb24pIChbd2lkczM0NXBvcnRhYmxldnVjaF0rKS9pLCAgICAgICAgICAgICAgICAgLy8gTmludGVuZG8vUGxheXN0YXRpb25cbiAgICAgICAgICAgIC8oeGJveCk7ICt4Ym94IChbXlxcKTtdKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1pY3Jvc29mdCBYYm94ICgzNjAsIE9uZSwgWCwgUywgU2VyaWVzIFgsIFNlcmllcyBTKVxuXG4gICAgICAgICAgICAvLyBPdGhlclxuICAgICAgICAgICAgL1xcYihqb2xpfHBhbG0pXFxiID8oPzpvcyk/XFwvPyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEpvbGkvUGFsbVxuICAgICAgICAgICAgLyhtaW50KVtcXC9cXChcXCkgXT8oXFx3KikvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWludFxuICAgICAgICAgICAgLyhtYWdlaWF8dmVjdG9ybGludXgpWzsgXS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWdlaWEvVmVjdG9yTGludXhcbiAgICAgICAgICAgIC8oW2t4bG5dP3VidW50dXxkZWJpYW58c3VzZXxvcGVuc3VzZXxnZW50b298YXJjaCg/PSBsaW51eCl8c2xhY2t3YXJlfGZlZG9yYXxtYW5kcml2YXxjZW50b3N8cGNsaW51eG9zfHJlZCA/aGF0fHplbndhbGt8bGlucHVzfHJhc3BiaWFufHBsYW4gOXxtaW5peHxyaXNjIG9zfGNvbnRpa2l8ZGVlcGlufG1hbmphcm98ZWxlbWVudGFyeSBvc3xzYWJheW9ufGxpbnNwaXJlKSg/OiBnbnVcXC9saW51eCk/KD86IGVudGVycHJpc2UpPyg/OlstIF1saW51eCk/KD86LWdudSk/Wy1cXC8gXT8oPyFjaHJvbXxwYWNrYWdlKShbLVxcd1xcLl0qKS9pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVYnVudHUvRGViaWFuL1NVU0UvR2VudG9vL0FyY2gvU2xhY2t3YXJlL0ZlZG9yYS9NYW5kcml2YS9DZW50T1MvUENMaW51eE9TL1JlZEhhdC9aZW53YWxrL0xpbnB1cy9SYXNwYmlhbi9QbGFuOS9NaW5peC9SSVNDT1MvQ29udGlraS9EZWVwaW4vTWFuamFyby9lbGVtZW50YXJ5L1NhYmF5b24vTGluc3BpcmVcbiAgICAgICAgICAgIC8oaHVyZHxsaW51eCkgPyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIdXJkL0xpbnV4XG4gICAgICAgICAgICAvKGdudSkgPyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR05VXG4gICAgICAgICAgICAvXFxiKFstZnJlbnRvcGNnaHNdezAsNX1ic2R8ZHJhZ29uZmx5KVtcXC8gXT8oPyFhbWR8W2l4MzQ2XXsxLDJ9ODYpKFtcXHdcXC5dKikvaSwgLy8gRnJlZUJTRC9OZXRCU0QvT3BlbkJTRC9QQy1CU0QvR2hvc3RCU0QvRHJhZ29uRmx5XG4gICAgICAgICAgICAvKGhhaWt1KSAoXFx3KykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIYWlrdVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvKHN1bm9zKSA/KFtcXHdcXC5cXGRdKikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbGFyaXNcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ1NvbGFyaXMnXSwgVkVSU0lPTl0sIFtcbiAgICAgICAgICAgIC8oKD86b3Blbik/c29sYXJpcylbLVxcLyBdPyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29sYXJpc1xuICAgICAgICAgICAgLyhhaXgpICgoXFxkKSg/PVxcLnxcXCl8IClbXFx3XFwuXSkqL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFJWFxuICAgICAgICAgICAgL1xcYihiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8b3BlbnZtc3xmdWNoc2lhfGhwLXV4fHNlcmVuaXR5b3MpL2ksIC8vIEJlT1MvT1MyL0FtaWdhT1MvTW9ycGhPUy9PcGVuVk1TL0Z1Y2hzaWEvSFAtVVgvU2VyZW5pdHlPU1xuICAgICAgICAgICAgLyh1bml4KSA/KFtcXHdcXC5dKikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVOSVhcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXVxuICAgICAgICBdXG4gICAgfTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ29uc3RydWN0b3JcbiAgICAvLy8vLy8vLy8vLy8vLy8vXG5cbiAgICB2YXIgVUFQYXJzZXIgPSBmdW5jdGlvbiAodWEsIGV4dGVuc2lvbnMpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHVhID09PSBPQkpfVFlQRSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9ucyA9IHVhO1xuICAgICAgICAgICAgdWEgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVUFQYXJzZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVBUGFyc2VyKHVhLCBleHRlbnNpb25zKS5nZXRSZXN1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbmF2aWdhdG9yID0gKHR5cGVvZiB3aW5kb3cgIT09IFVOREVGX1RZUEUgJiYgd2luZG93Lm5hdmlnYXRvcikgPyB3aW5kb3cubmF2aWdhdG9yIDogdW5kZWZpbmVkO1xuICAgICAgICB2YXIgX3VhID0gdWEgfHwgKChfbmF2aWdhdG9yICYmIF9uYXZpZ2F0b3IudXNlckFnZW50KSA/IF9uYXZpZ2F0b3IudXNlckFnZW50IDogRU1QVFkpO1xuICAgICAgICB2YXIgX3VhY2ggPSAoX25hdmlnYXRvciAmJiBfbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEpID8gX25hdmlnYXRvci51c2VyQWdlbnREYXRhIDogdW5kZWZpbmVkO1xuICAgICAgICB2YXIgX3JneG1hcCA9IGV4dGVuc2lvbnMgPyBleHRlbmQocmVnZXhlcywgZXh0ZW5zaW9ucykgOiByZWdleGVzO1xuICAgICAgICB2YXIgX2lzU2VsZk5hdiA9IF9uYXZpZ2F0b3IgJiYgX25hdmlnYXRvci51c2VyQWdlbnQgPT0gX3VhO1xuXG4gICAgICAgIHRoaXMuZ2V0QnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYnJvd3NlciA9IHt9O1xuICAgICAgICAgICAgX2Jyb3dzZXJbTkFNRV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBfYnJvd3NlcltWRVJTSU9OXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJneE1hcHBlci5jYWxsKF9icm93c2VyLCBfdWEsIF9yZ3htYXAuYnJvd3Nlcik7XG4gICAgICAgICAgICBfYnJvd3NlcltNQUpPUl0gPSBtYWpvcml6ZShfYnJvd3NlcltWRVJTSU9OXSk7XG4gICAgICAgICAgICAvLyBCcmF2ZS1zcGVjaWZpYyBkZXRlY3Rpb25cbiAgICAgICAgICAgIGlmIChfaXNTZWxmTmF2ICYmIF9uYXZpZ2F0b3IgJiYgX25hdmlnYXRvci5icmF2ZSAmJiB0eXBlb2YgX25hdmlnYXRvci5icmF2ZS5pc0JyYXZlID09IEZVTkNfVFlQRSkge1xuICAgICAgICAgICAgICAgIF9icm93c2VyW05BTUVdID0gJ0JyYXZlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfYnJvd3NlcjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRDUFUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2NwdSA9IHt9O1xuICAgICAgICAgICAgX2NwdVtBUkNISVRFQ1RVUkVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmd4TWFwcGVyLmNhbGwoX2NwdSwgX3VhLCBfcmd4bWFwLmNwdSk7XG4gICAgICAgICAgICByZXR1cm4gX2NwdTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXREZXZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2RldmljZSA9IHt9O1xuICAgICAgICAgICAgX2RldmljZVtWRU5ET1JdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgX2RldmljZVtNT0RFTF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBfZGV2aWNlW1RZUEVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmd4TWFwcGVyLmNhbGwoX2RldmljZSwgX3VhLCBfcmd4bWFwLmRldmljZSk7XG4gICAgICAgICAgICBpZiAoX2lzU2VsZk5hdiAmJiAhX2RldmljZVtUWVBFXSAmJiBfdWFjaCAmJiBfdWFjaC5tb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBfZGV2aWNlW1RZUEVdID0gTU9CSUxFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaVBhZE9TLXNwZWNpZmljIGRldGVjdGlvbjogaWRlbnRpZmllZCBhcyBNYWMsIGJ1dCBoYXMgc29tZSBpT1Mtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBpZiAoX2lzU2VsZk5hdiAmJiBfZGV2aWNlW01PREVMXSA9PSAnTWFjaW50b3NoJyAmJiBfbmF2aWdhdG9yICYmIHR5cGVvZiBfbmF2aWdhdG9yLnN0YW5kYWxvbmUgIT09IFVOREVGX1RZUEUgJiYgX25hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAmJiBfbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMikge1xuICAgICAgICAgICAgICAgIF9kZXZpY2VbTU9ERUxdID0gJ2lQYWQnO1xuICAgICAgICAgICAgICAgIF9kZXZpY2VbVFlQRV0gPSBUQUJMRVQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2RldmljZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRFbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2VuZ2luZSA9IHt9O1xuICAgICAgICAgICAgX2VuZ2luZVtOQU1FXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIF9lbmdpbmVbVkVSU0lPTl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZ3hNYXBwZXIuY2FsbChfZW5naW5lLCBfdWEsIF9yZ3htYXAuZW5naW5lKTtcbiAgICAgICAgICAgIHJldHVybiBfZW5naW5lO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldE9TID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9vcyA9IHt9O1xuICAgICAgICAgICAgX29zW05BTUVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgX29zW1ZFUlNJT05dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmd4TWFwcGVyLmNhbGwoX29zLCBfdWEsIF9yZ3htYXAub3MpO1xuICAgICAgICAgICAgaWYgKF9pc1NlbGZOYXYgJiYgIV9vc1tOQU1FXSAmJiBfdWFjaCAmJiBfdWFjaC5wbGF0Zm9ybSAhPSAnVW5rbm93bicpIHtcbiAgICAgICAgICAgICAgICBfb3NbTkFNRV0gPSBfdWFjaC5wbGF0Zm9ybSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvY2hyb21lIG9zL2ksIENIUk9NSVVNX09TKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL21hY29zL2ksIE1BQ19PUyk7ICAgICAgICAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX29zO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdWEgICAgICA6IHRoaXMuZ2V0VUEoKSxcbiAgICAgICAgICAgICAgICBicm93c2VyIDogdGhpcy5nZXRCcm93c2VyKCksXG4gICAgICAgICAgICAgICAgZW5naW5lICA6IHRoaXMuZ2V0RW5naW5lKCksXG4gICAgICAgICAgICAgICAgb3MgICAgICA6IHRoaXMuZ2V0T1MoKSxcbiAgICAgICAgICAgICAgICBkZXZpY2UgIDogdGhpcy5nZXREZXZpY2UoKSxcbiAgICAgICAgICAgICAgICBjcHUgICAgIDogdGhpcy5nZXRDUFUoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRVQSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdWE7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0VUEgPSBmdW5jdGlvbiAodWEpIHtcbiAgICAgICAgICAgIF91YSA9ICh0eXBlb2YgdWEgPT09IFNUUl9UWVBFICYmIHVhLmxlbmd0aCA+IFVBX01BWF9MRU5HVEgpID8gdHJpbSh1YSwgVUFfTUFYX0xFTkdUSCkgOiB1YTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFVBKF91YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBVQVBhcnNlci5WRVJTSU9OID0gTElCVkVSU0lPTjtcbiAgICBVQVBhcnNlci5CUk9XU0VSID0gIGVudW1lcml6ZShbTkFNRSwgVkVSU0lPTiwgTUFKT1JdKTtcbiAgICBVQVBhcnNlci5DUFUgPSBlbnVtZXJpemUoW0FSQ0hJVEVDVFVSRV0pO1xuICAgIFVBUGFyc2VyLkRFVklDRSA9IGVudW1lcml6ZShbTU9ERUwsIFZFTkRPUiwgVFlQRSwgQ09OU09MRSwgTU9CSUxFLCBTTUFSVFRWLCBUQUJMRVQsIFdFQVJBQkxFLCBFTUJFRERFRF0pO1xuICAgIFVBUGFyc2VyLkVOR0lORSA9IFVBUGFyc2VyLk9TID0gZW51bWVyaXplKFtOQU1FLCBWRVJTSU9OXSk7XG5cbiAgICAvLy8vLy8vLy8vL1xuICAgIC8vIEV4cG9ydFxuICAgIC8vLy8vLy8vLy9cblxuICAgIC8vIGNoZWNrIGpzIGVudmlyb25tZW50XG4gICAgaWYgKHR5cGVvZihleHBvcnRzKSAhPT0gVU5ERUZfVFlQRSkge1xuICAgICAgICAvLyBub2RlanMgZW52XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSBVTkRFRl9UWVBFICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBVQVBhcnNlcjtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlVBUGFyc2VyID0gVUFQYXJzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVxdWlyZWpzIGVudiAob3B0aW9uYWwpXG4gICAgICAgIGlmICh0eXBlb2YoZGVmaW5lKSA9PT0gRlVOQ19UWVBFICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVBUGFyc2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gVU5ERUZfVFlQRSkge1xuICAgICAgICAgICAgLy8gYnJvd3NlciBlbnZcbiAgICAgICAgICAgIHdpbmRvdy5VQVBhcnNlciA9IFVBUGFyc2VyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8galF1ZXJ5L1plcHRvIHNwZWNpZmljIChvcHRpb25hbClcbiAgICAvLyBOb3RlOlxuICAgIC8vICAgSW4gQU1EIGVudiB0aGUgZ2xvYmFsIHNjb3BlIHNob3VsZCBiZSBrZXB0IGNsZWFuLCBidXQgalF1ZXJ5IGlzIGFuIGV4Y2VwdGlvbi5cbiAgICAvLyAgIGpRdWVyeSBhbHdheXMgZXhwb3J0cyB0byBnbG9iYWwgc2NvcGUsIHVubGVzcyBqUXVlcnkubm9Db25mbGljdCh0cnVlKSBpcyB1c2VkLFxuICAgIC8vICAgYW5kIHdlIHNob3VsZCBjYXRjaCB0aGF0LlxuICAgIHZhciAkID0gdHlwZW9mIHdpbmRvdyAhPT0gVU5ERUZfVFlQRSAmJiAod2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG8pO1xuICAgIGlmICgkICYmICEkLnVhKSB7XG4gICAgICAgIHZhciBwYXJzZXIgPSBuZXcgVUFQYXJzZXIoKTtcbiAgICAgICAgJC51YSA9IHBhcnNlci5nZXRSZXN1bHQoKTtcbiAgICAgICAgJC51YS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VyLmdldFVBKCk7XG4gICAgICAgIH07XG4gICAgICAgICQudWEuc2V0ID0gZnVuY3Rpb24gKHVhKSB7XG4gICAgICAgICAgICBwYXJzZXIuc2V0VUEodWEpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlci5nZXRSZXN1bHQoKTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJC51YVtwcm9wXSA9IHJlc3VsdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbn0pKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gd2luZG93IDogdGhpcyk7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZUpzb25QcmV0dHk9dCgpOmUuVnVlSnNvblByZXR0eT10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9ezIyODpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxvPW5ldyBBcnJheSh0KTtuPHQ7bisrKW9bbl09ZVtuXTtyZXR1cm4gb319LDg1ODpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX19LDY0NjpmdW5jdGlvbihlLHQsbil7dmFyIG89bigyMjgpO2UuZXhwb3J0cz1mdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBvKGUpfX0sNzEzOmZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1uLGV9fSw4NjA6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpcmV0dXJuIEFycmF5LmZyb20oZSl9fSw4ODQ6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSl7dmFyIG49W10sbz0hMCxpPSExLGw9dm9pZCAwO3RyeXtmb3IodmFyIGEscj1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKG89KGE9ci5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO289ITApO31jYXRjaChlKXtpPSEwLGw9ZX1maW5hbGx5e3RyeXtvfHxudWxsPT1yLnJldHVybnx8ci5yZXR1cm4oKX1maW5hbGx5e2lmKGkpdGhyb3cgbH19cmV0dXJuIG59fX0sNTIxOmZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1mdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9fSwyMDY6ZnVuY3Rpb24oZSl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9fSwzODpmdW5jdGlvbihlLHQsbil7dmFyIG89big4NTgpLGk9big4ODQpLGw9bigzNzkpLGE9big1MjEpO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBvKGUpfHxpKGUsdCl8fGwoZSx0KXx8YSgpfX0sMzE5OmZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1uKDY0NiksaT1uKDg2MCksbD1uKDM3OSksYT1uKDIwNik7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBvKGUpfHxpKGUpfHxsKGUpfHxhKCl9fSw4OmZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2UuZXhwb3J0cz10PWZ1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZS5leHBvcnRzPXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sdChuKX1lLmV4cG9ydHM9dH0sMzc5OmZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1uKDIyOCk7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIG8oZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP28oZSx0KTp2b2lkIDB9fX0sNjI5OmZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCksbi5kKHQse2RlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gU319KTt2YXIgbz1uKDM4KSxpPW4ubihvKSxsPW4oMzE5KSxhPW4ubihsKSxyPW4oNzEzKSxzPW4ubihyKTtmdW5jdGlvbiBjKGUsdCxuLG8saSxsLGEscil7dmFyIHMsYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2Uub3B0aW9uczplO2lmKHQmJihjLnJlbmRlcj10LGMuc3RhdGljUmVuZGVyRm5zPW4sYy5fY29tcGlsZWQ9ITApLG8mJihjLmZ1bmN0aW9uYWw9ITApLGwmJihjLl9zY29wZUlkPVwiZGF0YS12LVwiK2wpLGE/KHM9ZnVuY3Rpb24oZSl7KGU9ZXx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fChlPV9fVlVFX1NTUl9DT05URVhUX18pLGkmJmkuY2FsbCh0aGlzLGUpLGUmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQoYSl9LGMuX3NzclJlZ2lzdGVyPXMpOmkmJihzPXI/ZnVuY3Rpb24oKXtpLmNhbGwodGhpcywoYy5mdW5jdGlvbmFsP3RoaXMucGFyZW50OnRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpfTppKSxzKWlmKGMuZnVuY3Rpb25hbCl7Yy5faW5qZWN0U3R5bGVzPXM7dmFyIHU9Yy5yZW5kZXI7Yy5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gcy5jYWxsKHQpLHUoZSx0KX19ZWxzZXt2YXIgZD1jLmJlZm9yZUNyZWF0ZTtjLmJlZm9yZUNyZWF0ZT1kP1tdLmNvbmNhdChkLHMpOltzXX1yZXR1cm57ZXhwb3J0czplLG9wdGlvbnM6Y319dmFyIHU9Yyh7cHJvcHM6e2RhdGE6e3JlcXVpcmVkOiEwLHR5cGU6U3RyaW5nfX0sbWV0aG9kczp7dG9nZ2xlQnJhY2tldHM6ZnVuY3Rpb24oZSl7dGhpcy4kZW1pdChcImNsaWNrXCIsZSl9fX0sKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQ7cmV0dXJuKGUuX3NlbGYuX2N8fHQpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZqcy10cmVlLWJyYWNrZXRzXCIsb246e2NsaWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0LnN0b3BQcm9wYWdhdGlvbigpLGUudG9nZ2xlQnJhY2tldHModCl9fX0sW2UuX3YoZS5fcyhlLmRhdGEpKV0pfSksW10sITEsbnVsbCxudWxsLG51bGwpLmV4cG9ydHMsZD1jKHtwcm9wczp7Y2hlY2tlZDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGlzTXVsdGlwbGU6Qm9vbGVhbn0sY29tcHV0ZWQ6e3VpVHlwZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlzTXVsdGlwbGU/XCJjaGVja2JveFwiOlwicmFkaW9cIn0sbW9kZWw6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoZWNrZWR9LHNldDpmdW5jdGlvbihlKXt0aGlzLiRlbWl0KFwiaW5wdXRcIixlKX19fX0sKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwibGFiZWxcIix7Y2xhc3M6W1widmpzLWNoZWNrLWNvbnRyb2xsZXJcIixlLmNoZWNrZWQ/XCJpcy1jaGVja2VkXCI6XCJcIl0sb246e2NsaWNrOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9fX0sW24oXCJzcGFuXCIse2NsYXNzOlwidmpzLWNoZWNrLWNvbnRyb2xsZXItaW5uZXIgaXMtXCIrZS51aVR5cGV9KSxuKFwiaW5wdXRcIix7Y2xhc3M6XCJ2anMtY2hlY2stY29udHJvbGxlci1vcmlnaW5hbCBpcy1cIitlLnVpVHlwZSxhdHRyczp7dHlwZTplLnVpVHlwZX0sZG9tUHJvcHM6e2NoZWNrZWQ6ZS5tb2RlbH0sb246e2NoYW5nZTpmdW5jdGlvbih0KXtyZXR1cm4gZS4kZW1pdChcImNoYW5nZVwiLGUubW9kZWwpfX19KV0pfSksW10sITEsbnVsbCxudWxsLG51bGwpLmV4cG9ydHMsaD1jKHtwcm9wczp7bm9kZVR5cGU6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOiEwfX0sY29tcHV0ZWQ6e2lzT3BlbjpmdW5jdGlvbigpe3JldHVyblwib2JqZWN0U3RhcnRcIj09PXRoaXMubm9kZVR5cGV8fFwiYXJyYXlTdGFydFwiPT09dGhpcy5ub2RlVHlwZX0saXNDbG9zZTpmdW5jdGlvbigpe3JldHVyblwib2JqZWN0Q29sbGFwc2VkXCI9PT10aGlzLm5vZGVUeXBlfHxcImFycmF5Q29sbGFwc2VkXCI9PT10aGlzLm5vZGVUeXBlfX0sbWV0aG9kczp7aGFuZGxlQ2xpY2s6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwiY2xpY2tcIil9fX0sKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBlLmlzT3Blbnx8ZS5pc0Nsb3NlP24oXCJzcGFuXCIse2NsYXNzOlwidmpzLWNhcmV0cyB2anMtY2FyZXRzLVwiKyhlLmlzT3Blbj9cIm9wZW5cIjpcImNsb3NlXCIpLG9uOntjbGljazplLmhhbmRsZUNsaWNrfX0sW24oXCJzdmdcIix7YXR0cnM6e3ZpZXdCb3g6XCIwIDAgMTAyNCAxMDI0XCIsZm9jdXNhYmxlOlwiZmFsc2VcIixcImRhdGEtaWNvblwiOlwiY2FyZXQtZG93blwiLHdpZHRoOlwiMWVtXCIsaGVpZ2h0OlwiMWVtXCIsZmlsbDpcImN1cnJlbnRDb2xvclwiLFwiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk04NDAuNCAzMDBIMTgzLjZjLTE5LjcgMC0zMC43IDIwLjgtMTguNSAzNWwzMjguNCAzODAuOGM5LjQgMTAuOSAyNy41IDEwLjkgMzcgMEw4NTguOSAzMzVjMTIuMi0xNC4yIDEuMi0zNS0xOC41LTM1elwifX0pXSldKTplLl9lKCl9KSxbXSwhMSxudWxsLG51bGwsbnVsbCkuZXhwb3J0cyxwPW4oOCksZj1uLm4ocCk7ZnVuY3Rpb24geShlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZyhlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJyb290XCIsbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MCxvPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTp7fSxpPW8ua2V5LGw9by5pbmRleCxhPW8udHlwZSxyPXZvaWQgMD09PWE/XCJjb250ZW50XCI6YSxzPW8uc2hvd0NvbW1hLGM9dm9pZCAwIT09cyYmcyx1PW8ubGVuZ3RoLGQ9dm9pZCAwPT09dT8xOnUsaD15KGUpO2lmKFwiYXJyYXlcIj09PWgpe3ZhciBwPXYoZS5tYXAoKGZ1bmN0aW9uKGUsbyxpKXtyZXR1cm4gZyhlLFwiXCIuY29uY2F0KHQsXCJbXCIpLmNvbmNhdChvLFwiXVwiKSxuKzEse2luZGV4Om8sc2hvd0NvbW1hOm8hPT1pLmxlbmd0aC0xLGxlbmd0aDpkLHR5cGU6cn0pfSkpKTtyZXR1cm5bZyhcIltcIix0LG4se2tleTppLGxlbmd0aDplLmxlbmd0aCx0eXBlOlwiYXJyYXlTdGFydFwifSlbMF1dLmNvbmNhdChwLGcoXCJdXCIsdCxuLHtzaG93Q29tbWE6YyxsZW5ndGg6ZS5sZW5ndGgsdHlwZTpcImFycmF5RW5kXCJ9KVswXSl9aWYoXCJvYmplY3RcIj09PWgpe3ZhciBmPU9iamVjdC5rZXlzKGUpLGI9dihmLm1hcCgoZnVuY3Rpb24obyxpLGwpe3JldHVybiBnKGVbb10sL15bYS16QS1aX11cXHcqJC8udGVzdChvKT9cIlwiLmNvbmNhdCh0LFwiLlwiKS5jb25jYXQobyk6XCJcIi5jb25jYXQodCwnW1wiJykuY29uY2F0KG8sJ1wiXScpLG4rMSx7a2V5Om8sc2hvd0NvbW1hOmkhPT1sLmxlbmd0aC0xLGxlbmd0aDpkLHR5cGU6cn0pfSkpKTtyZXR1cm5bZyhcIntcIix0LG4se2tleTppLGluZGV4OmwsbGVuZ3RoOmYubGVuZ3RoLHR5cGU6XCJvYmplY3RTdGFydFwifSlbMF1dLmNvbmNhdChiLGcoXCJ9XCIsdCxuLHtzaG93Q29tbWE6YyxsZW5ndGg6Zi5sZW5ndGgsdHlwZTpcIm9iamVjdEVuZFwifSlbMF0pfXJldHVyblt7Y29udGVudDplLGxldmVsOm4sa2V5OmksaW5kZXg6bCxwYXRoOnQsc2hvd0NvbW1hOmMsbGVuZ3RoOmQsdHlwZTpyfV19ZnVuY3Rpb24gdihlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUuZmxhdClyZXR1cm4gZS5mbGF0KCk7Zm9yKHZhciB0PWEoKShlKSxuPVtdO3QubGVuZ3RoOyl7dmFyIG89dC5zaGlmdCgpO0FycmF5LmlzQXJyYXkobyk/dC51bnNoaWZ0LmFwcGx5KHQsYSgpKG8pKTpuLnB1c2gobyl9cmV0dXJuIG59ZnVuY3Rpb24gYihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bmV3IFdlYWtNYXA7aWYobnVsbD09ZSlyZXR1cm4gZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoZSBpbnN0YW5jZW9mIFJlZ0V4cClyZXR1cm4gbmV3IFJlZ0V4cChlKTtpZihcIm9iamVjdFwiIT09ZigpKGUpKXJldHVybiBlO2lmKHQuZ2V0KGUpKXJldHVybiB0LmdldChlKTtpZihBcnJheS5pc0FycmF5KGUpKXt2YXIgbj1lLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGIoZSx0KX0pKTtyZXR1cm4gdC5zZXQoZSxuKSxufXZhciBvPXt9O2Zvcih2YXIgaSBpbiBlKW9baV09YihlW2ldLHQpO3JldHVybiB0LnNldChlLG8pLG99dmFyIG09Yyh7Y29tcG9uZW50czp7QnJhY2tldHM6dSxDaGVja0NvbnRyb2xsZXI6ZCxDYXJldHM6aH0scHJvcHM6e25vZGU6e3JlcXVpcmVkOiEwLHR5cGU6T2JqZWN0fSxjb2xsYXBzZWQ6Qm9vbGVhbixzaG93RG91YmxlUXVvdGVzOkJvb2xlYW4sc2hvd0xlbmd0aDpCb29sZWFuLGNoZWNrZWQ6Qm9vbGVhbixzZWxlY3RhYmxlVHlwZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlwifSxzaG93U2VsZWN0Q29udHJvbGxlcjp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHNob3dMaW5lOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sc2hvd0xpbmVOdW1iZXI6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxzZWxlY3RPbkNsaWNrTm9kZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LG5vZGVTZWxlY3RhYmxlOnt0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH19LGhpZ2hsaWdodFNlbGVjdGVkTm9kZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LHNob3dJY29uOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sc2hvd0tleVZhbHVlU3BhY2U6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxlZGl0YWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGVkaXRhYmxlVHJpZ2dlcjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImNsaWNrXCJ9fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2VkaXRpbmc6ITF9fSxjb21wdXRlZDp7dmFsdWVDbGFzczpmdW5jdGlvbigpe3JldHVyblwidmpzLXZhbHVlIHZqcy12YWx1ZS1cIi5jb25jYXQodGhpcy5kYXRhVHlwZSl9LGRhdGFUeXBlOmZ1bmN0aW9uKCl7cmV0dXJuIHkodGhpcy5ub2RlLmNvbnRlbnQpfSxwcmV0dHlLZXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zaG93RG91YmxlUXVvdGVzPydcIicuY29uY2F0KHRoaXMubm9kZS5rZXksJ1wiJyk6dGhpcy5ub2RlLmtleX0sc2VsZWN0YWJsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGVTZWxlY3RhYmxlKHRoaXMubm9kZSkmJih0aGlzLmlzTXVsdGlwbGV8fHRoaXMuaXNTaW5nbGUpfSxpc011bHRpcGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJtdWx0aXBsZVwiPT09dGhpcy5zZWxlY3RhYmxlVHlwZX0saXNTaW5nbGU6ZnVuY3Rpb24oKXtyZXR1cm5cInNpbmdsZVwiPT09dGhpcy5zZWxlY3RhYmxlVHlwZX0sZGVmYXVsdFZhbHVlOmZ1bmN0aW9uKCl7dmFyIGUsdD1udWxsPT09KGU9dGhpcy5ub2RlKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5jb250ZW50O3JldHVybiBudWxsPT10JiYodCs9XCJcIiksXCJzdHJpbmdcIj09PXRoaXMuZGF0YVR5cGU/J1wiJy5jb25jYXQodCwnXCInKTp0fX0sbWV0aG9kczp7aGFuZGxlSW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7dmFyIHQsbixvPVwibnVsbFwiPT09KG49bnVsbD09PSh0PWUudGFyZ2V0KXx8dm9pZCAwPT09dD92b2lkIDA6dC52YWx1ZSk/bnVsbDpcInVuZGVmaW5lZFwiPT09bj92b2lkIDA6XCJ0cnVlXCI9PT1ufHxcImZhbHNlXCIhPT1uJiYoblswXStuW24ubGVuZ3RoLTFdPT09J1wiXCInfHxuWzBdK25bbi5sZW5ndGgtMV09PT1cIicnXCI/bi5zbGljZSgxLC0xKTpcIm51bWJlclwiPT10eXBlb2YgTnVtYmVyKG4pJiYhaXNOYU4oTnVtYmVyKG4pKXx8XCJOYU5cIj09PW4/TnVtYmVyKG4pOm4pO3RoaXMuJGVtaXQoXCJ2YWx1ZS1jaGFuZ2VcIixvLHRoaXMubm9kZS5wYXRoKX0saGFuZGxlSWNvbkNsaWNrOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcImljb24tY2xpY2tcIiwhdGhpcy5jb2xsYXBzZWQsdGhpcy5ub2RlLnBhdGgpfSxoYW5kbGVCcmFja2V0c0NsaWNrOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcImJyYWNrZXRzLWNsaWNrXCIsIXRoaXMuY29sbGFwc2VkLHRoaXMubm9kZS5wYXRoKX0saGFuZGxlU2VsZWN0ZWRDaGFuZ2U6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwic2VsZWN0ZWQtY2hhbmdlXCIsdGhpcy5ub2RlKX0saGFuZGxlTm9kZUNsaWNrOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcIm5vZGUtY2xpY2tcIix0aGlzLm5vZGUpLHRoaXMuc2VsZWN0YWJsZSYmdGhpcy5zZWxlY3RPbkNsaWNrTm9kZSYmdGhpcy4kZW1pdChcInNlbGVjdGVkLWNoYW5nZVwiLHRoaXMubm9kZSl9LGhhbmRsZVZhbHVlRWRpdDpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKHRoaXMuZWRpdGFibGUmJiF0aGlzLmVkaXRpbmcpe3RoaXMuZWRpdGluZz0hMDt2YXIgbj1mdW5jdGlvbiBuKG8pe3ZhciBpO28udGFyZ2V0IT09ZS50YXJnZXQmJihudWxsPT09KGk9by50YXJnZXQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLnBhcmVudEVsZW1lbnQpIT09ZS50YXJnZXQmJih0LmVkaXRpbmc9ITEsZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbikpfTtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuKX19fX0sKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse2NsYXNzOntcInZqcy10cmVlLW5vZGVcIjohMCxcImhhcy1zZWxlY3RvclwiOmUuc2hvd1NlbGVjdENvbnRyb2xsZXIsXCJoYXMtY2FyZXRzXCI6ZS5zaG93SWNvbixcImlzLWhpZ2hsaWdodFwiOmUuaGlnaGxpZ2h0U2VsZWN0ZWROb2RlJiZlLmNoZWNrZWR9LG9uOntjbGljazplLmhhbmRsZU5vZGVDbGlja319LFtlLnNob3dMaW5lTnVtYmVyP24oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidmpzLW5vZGUtaW5kZXhcIn0sW2UuX3YoXCJcXG4gICAgXCIrZS5fcyhlLm5vZGUuaWQrMSkrXCJcXG4gIFwiKV0pOmUuX2UoKSxlLnNob3dTZWxlY3RDb250cm9sbGVyJiZlLnNlbGVjdGFibGUmJlwib2JqZWN0RW5kXCIhPT1lLm5vZGUudHlwZSYmXCJhcnJheUVuZFwiIT09ZS5ub2RlLnR5cGU/bihcImNoZWNrLWNvbnRyb2xsZXJcIix7YXR0cnM6e1wiaXMtbXVsdGlwbGVcIjplLmlzTXVsdGlwbGUsY2hlY2tlZDplLmNoZWNrZWR9LG9uOntjaGFuZ2U6ZS5oYW5kbGVTZWxlY3RlZENoYW5nZX19KTplLl9lKCksbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZqcy1pbmRlbnRcIn0sW2UuX2woZS5ub2RlLmxldmVsLChmdW5jdGlvbih0LG8pe3JldHVybiBuKFwiZGl2XCIse2tleTpvLGNsYXNzOntcInZqcy1pbmRlbnQtdW5pdFwiOiEwLFwiaGFzLWxpbmVcIjplLnNob3dMaW5lfX0pfSkpLGUuc2hvd0ljb24/bihcImNhcmV0c1wiLHthdHRyczp7XCJub2RlLXR5cGVcIjplLm5vZGUudHlwZX0sb246e2NsaWNrOmUuaGFuZGxlSWNvbkNsaWNrfX0pOmUuX2UoKV0sMiksZS5ub2RlLmtleT9uKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZqcy1rZXlcIn0sW2UuX3QoXCJrZXlcIixbZS5fdihlLl9zKGUucHJldHR5S2V5KSldLHtub2RlOmUubm9kZSxkZWZhdWx0S2V5OmUucHJldHR5S2V5fSksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2anMtY29sb25cIn0sW2UuX3YoZS5fcyhcIjpcIisoZS5zaG93S2V5VmFsdWVTcGFjZT9cIiBcIjpcIlwiKSkpXSldLDIpOmUuX2UoKSxuKFwic3BhblwiLFtcImNvbnRlbnRcIiE9PWUubm9kZS50eXBlP24oXCJicmFja2V0c1wiLHthdHRyczp7ZGF0YTplLm5vZGUuY29udGVudH0sb246e2NsaWNrOmUuaGFuZGxlQnJhY2tldHNDbGlja319KTpuKFwic3BhblwiLHtjbGFzczplLnZhbHVlQ2xhc3Msb246e2NsaWNrOmZ1bmN0aW9uKHQpeyFlLmVkaXRhYmxlfHxlLmVkaXRhYmxlVHJpZ2dlciYmXCJjbGlja1wiIT09ZS5lZGl0YWJsZVRyaWdnZXJ8fGUuaGFuZGxlVmFsdWVFZGl0KHQpfSxkYmxjbGljazpmdW5jdGlvbih0KXtlLmVkaXRhYmxlJiZcImRibGNsaWNrXCI9PT1lLmVkaXRhYmxlVHJpZ2dlciYmZS5oYW5kbGVWYWx1ZUVkaXQodCl9fX0sW2UuZWRpdGFibGUmJmUuZWRpdGluZz9uKFwiaW5wdXRcIix7c3R5bGU6e3BhZGRpbmc6XCIzcHggOHB4XCIsYm9yZGVyOlwiMXB4IHNvbGlkICNlZWVcIixib3hTaGFkb3c6XCJub25lXCIsYm94U2l6aW5nOlwiYm9yZGVyLWJveFwiLGJvcmRlclJhZGl1czo1LGZvbnRGYW1pbHk6XCJpbmhlcml0XCJ9LGRvbVByb3BzOnt2YWx1ZTplLmRlZmF1bHRWYWx1ZX0sb246e2NoYW5nZTplLmhhbmRsZUlucHV0Q2hhbmdlfX0pOmUuX3QoXCJ2YWx1ZVwiLFtlLl92KGUuX3MoZS5kZWZhdWx0VmFsdWUpKV0se25vZGU6ZS5ub2RlLGRlZmF1bHRWYWx1ZTplLmRlZmF1bHRWYWx1ZX0pXSwyKSxlLm5vZGUuc2hvd0NvbW1hP24oXCJzcGFuXCIsW2UuX3YoXCIsXCIpXSk6ZS5fZSgpLGUuc2hvd0xlbmd0aCYmZS5jb2xsYXBzZWQ/bihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2anMtY29tbWVudFwifSxbZS5fdihcIiAvLyBcIitlLl9zKGUubm9kZS5sZW5ndGgpK1wiIGl0ZW1zIFwiKV0pOmUuX2UoKV0sMSldLDEpfSksW10sITEsbnVsbCxudWxsLG51bGwpO2Z1bmN0aW9uIGsoZSx0KXt2YXIgbj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihvPW8uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLG8pfXJldHVybiBufWZ1bmN0aW9uIEMoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/ayhPYmplY3QobiksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3MoKShlLHQsblt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSk6ayhPYmplY3QobikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpKX0pKX1yZXR1cm4gZX12YXIgdz1jKHtuYW1lOlwiVnVlSnNvblByZXR0eVwiLGNvbXBvbmVudHM6e1RyZWVOb2RlOm0uZXhwb3J0c30sbW9kZWw6e3Byb3A6XCJkYXRhXCJ9LHByb3BzOntkYXRhOnt0eXBlOltTdHJpbmcsTnVtYmVyLEJvb2xlYW4sQXJyYXksT2JqZWN0XSxkZWZhdWx0Om51bGx9LGRlZXA6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MS8wfSxyb290UGF0aDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcInJvb3RcIn0sdmlydHVhbDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDo0MDB9LGl0ZW1IZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MjB9LHNob3dMZW5ndGg6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxzaG93RG91YmxlUXVvdGVzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sc2VsZWN0YWJsZVR5cGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJcIn0sc2hvd1NlbGVjdENvbnRyb2xsZXI6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxzaG93TGluZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LHNob3dMaW5lTnVtYmVyOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sc2VsZWN0T25DbGlja05vZGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxzZWxlY3RlZFZhbHVlOnt0eXBlOltBcnJheSxTdHJpbmddLGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifX0sbm9kZVNlbGVjdGFibGU6e3R5cGU6RnVuY3Rpb24sZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiEwfX0saGlnaGxpZ2h0U2VsZWN0ZWROb2RlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sY29sbGFwc2VkT25DbGlja0JyYWNrZXRzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sc2hvd0ljb246e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxzaG93S2V5VmFsdWVTcGFjZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGVkaXRhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZWRpdGFibGVUcmlnZ2VyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiY2xpY2tcIn19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57dHJhbnNsYXRlWTowLHZpc2libGVEYXRhOm51bGwsaGlkZGVuUGF0aHM6dGhpcy5pbml0SGlkZGVuUGF0aHMoZyh0aGlzLmRhdGEsdGhpcy5yb290UGF0aCksdGhpcy5kZWVwKX19LGNvbXB1dGVkOntvcmlnaW5GbGF0RGF0YTpmdW5jdGlvbigpe3JldHVybiBnKHRoaXMuZGF0YSx0aGlzLnJvb3RQYXRoKX0sZmxhdERhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUub3JpZ2luRmxhdERhdGEsbj1lLmhpZGRlblBhdGhzLG89bnVsbCxpPVtdLGw9dC5sZW5ndGgsYT0wO2E8bDthKyspe3ZhciByPUMoQyh7fSx0W2FdKSx7fSx7aWQ6YX0pLHM9bltyLnBhdGhdO2lmKG8mJm8ucGF0aD09PXIucGF0aCl7dmFyIGM9XCJvYmplY3RTdGFydFwiPT09by50eXBlLHU9QyhDKEMoe30sciksbykse30se3Nob3dDb21tYTpyLnNob3dDb21tYSxjb250ZW50OmM/XCJ7Li4ufVwiOlwiWy4uLl1cIix0eXBlOmM/XCJvYmplY3RDb2xsYXBzZWRcIjpcImFycmF5Q29sbGFwc2VkXCJ9KTtvPW51bGwsaS5wdXNoKHUpfWVsc2V7aWYocyYmIW8pe289cjtjb250aW51ZX1pZihvKWNvbnRpbnVlO2kucHVzaChyKX19cmV0dXJuIGl9LHNlbGVjdGVkUGF0aHM6e2dldDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0ZWRWYWx1ZTtyZXR1cm4gZSYmXCJtdWx0aXBsZVwiPT09dGhpcy5zZWxlY3RhYmxlVHlwZSYmQXJyYXkuaXNBcnJheShlKT9lOltlXX0sc2V0OmZ1bmN0aW9uKGUpe3RoaXMuJGVtaXQoXCJ1cGRhdGU6c2VsZWN0ZWRWYWx1ZVwiLGUpfX0scHJvcHNFcnJvcjpmdW5jdGlvbigpe3JldHVybiF0aGlzLnNlbGVjdGFibGVUeXBlfHx0aGlzLnNlbGVjdE9uQ2xpY2tOb2RlfHx0aGlzLnNob3dTZWxlY3RDb250cm9sbGVyP1wiXCI6XCJXaGVuIHNlbGVjdGFibGVUeXBlIGlzIG5vdCBudWxsLCBzZWxlY3RPbkNsaWNrTm9kZSBhbmQgc2hvd1NlbGVjdENvbnRyb2xsZXIgY2Fubm90IGJlIGZhbHNlIGF0IHRoZSBzYW1lIHRpbWUsIGJlY2F1c2UgdGhpcyB3aWxsIGNhdXNlIHRoZSBzZWxlY3Rpb24gdG8gZmFpbC5cIn19LHdhdGNoOntwcm9wc0Vycm9yOntoYW5kbGVyOmZ1bmN0aW9uKGUpe2lmKGUpdGhyb3cgbmV3IEVycm9yKFwiW1Z1ZUpzb25QcmV0dHldIFwiLmNvbmNhdChlKSl9LGltbWVkaWF0ZTohMH0sZmxhdERhdGE6e2hhbmRsZXI6ZnVuY3Rpb24oZSl7dGhpcy51cGRhdGVWaXNpYmxlRGF0YShlKX0saW1tZWRpYXRlOiEwfSxkZWVwOntoYW5kbGVyOmZ1bmN0aW9uKGUpe3RoaXMuaGlkZGVuUGF0aHM9dGhpcy5pbml0SGlkZGVuUGF0aHModGhpcy5vcmlnaW5GbGF0RGF0YSxlKX19fSxtZXRob2RzOntpbml0SGlkZGVuUGF0aHM6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5yZWR1Y2UoKGZ1bmN0aW9uKGUsbil7dmFyIG89bi5sZXZlbD49dDtyZXR1cm5cIm9iamVjdFN0YXJ0XCIhPT1uLnR5cGUmJlwiYXJyYXlTdGFydFwiIT09bi50eXBlfHwhbz9lOkMoQyh7fSxlKSx7fSxzKCkoe30sbi5wYXRoLDEpKX0pLHt9KX0sdXBkYXRlVmlzaWJsZURhdGE6ZnVuY3Rpb24oZSl7aWYodGhpcy52aXJ0dWFsKXt2YXIgdD10aGlzLmhlaWdodC90aGlzLml0ZW1IZWlnaHQsbj10aGlzLiRyZWZzLnRyZWUmJnRoaXMuJHJlZnMudHJlZS5zY3JvbGxUb3B8fDAsbz1NYXRoLmZsb29yKG4vdGhpcy5pdGVtSGVpZ2h0KSxpPW88MD8wOm8rdD5lLmxlbmd0aD9lLmxlbmd0aC10Om87aTwwJiYoaT0wKTt2YXIgbD1pK3Q7dGhpcy50cmFuc2xhdGVZPWkqdGhpcy5pdGVtSGVpZ2h0LHRoaXMudmlzaWJsZURhdGE9ZS5maWx0ZXIoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ+PWkmJnQ8bH0pKX1lbHNlIHRoaXMudmlzaWJsZURhdGE9ZX0saGFuZGxlVHJlZVNjcm9sbDpmdW5jdGlvbigpe3RoaXMudXBkYXRlVmlzaWJsZURhdGEodGhpcy5mbGF0RGF0YSl9LGhhbmRsZVNlbGVjdGVkQ2hhbmdlOmZ1bmN0aW9uKGUpe3ZhciB0PWUucGF0aCxuPXRoaXMuc2VsZWN0YWJsZVR5cGU7aWYoXCJtdWx0aXBsZVwiPT09bil7dmFyIG89dGhpcy5zZWxlY3RlZFBhdGhzLmZpbmRJbmRleCgoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10fSkpLGw9YSgpKHRoaXMuc2VsZWN0ZWRQYXRocyk7LTEhPT1vP3RoaXMuc2VsZWN0ZWRQYXRocy5zcGxpY2UobywxKTp0aGlzLnNlbGVjdGVkUGF0aHMucHVzaCh0KSx0aGlzLiRlbWl0KFwic2VsZWN0ZWQtY2hhbmdlXCIsdGhpcy5zZWxlY3RlZFBhdGhzLGwpfWVsc2UgaWYoXCJzaW5nbGVcIj09PW4mJnRoaXMuc2VsZWN0ZWRQYXRoc1swXSE9PXQpe3ZhciByPWkoKSh0aGlzLnNlbGVjdGVkUGF0aHMsMSlbMF0scz10O3RoaXMuc2VsZWN0ZWRQYXRocz1zLHRoaXMuJGVtaXQoXCJzZWxlY3RlZC1jaGFuZ2VcIixzLHIpfX0saGFuZGxlTm9kZUNsaWNrOmZ1bmN0aW9uKGUpe3RoaXMuJGVtaXQoXCJub2RlLWNsaWNrXCIsZSl9LHVwZGF0ZUNvbGxhcHNlZFBhdGhzOmZ1bmN0aW9uKGUsdCl7aWYoZSl0aGlzLmhpZGRlblBhdGhzPUMoQyh7fSx0aGlzLmhpZGRlblBhdGhzKSx7fSxzKCkoe30sdCwxKSk7ZWxzZXt2YXIgbj1DKHt9LHRoaXMuaGlkZGVuUGF0aHMpO2RlbGV0ZSBuW3RdLHRoaXMuaGlkZGVuUGF0aHM9bn19LGhhbmRsZUJyYWNrZXRzQ2xpY2s6ZnVuY3Rpb24oZSx0KXt0aGlzLmNvbGxhcHNlZE9uQ2xpY2tCcmFja2V0cyYmdGhpcy51cGRhdGVDb2xsYXBzZWRQYXRocyhlLHQpLHRoaXMuJGVtaXQoXCJicmFja2V0cy1jbGlja1wiLGUpfSxoYW5kbGVJY29uQ2xpY2s6ZnVuY3Rpb24oZSx0KXt0aGlzLnVwZGF0ZUNvbGxhcHNlZFBhdGhzKGUsdCksdGhpcy4kZW1pdChcImljb24tY2xpY2tcIixlKX0saGFuZGxlVmFsdWVDaGFuZ2U6ZnVuY3Rpb24oZSx0KXt2YXIgbj1iKHRoaXMuZGF0YSksbz10aGlzLnJvb3RQYXRoO25ldyBGdW5jdGlvbihcImRhdGFcIixcInZhbFwiLFwiZGF0YVwiLmNvbmNhdCh0LnNsaWNlKG8ubGVuZ3RoKSxcIj12YWxcIikpKG4sZSksdGhpcy4kZW1pdChcImlucHV0XCIsbil9fX0sKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3JlZjpcInRyZWVcIixjbGFzczp7XCJ2anMtdHJlZVwiOiEwLFwiaXMtdmlydHVhbFwiOmUudmlydHVhbH0sc3R5bGU6ZS5zaG93TGluZU51bWJlcj97cGFkZGluZ0xlZnQ6MTIqTnVtYmVyKGUub3JpZ2luRmxhdERhdGEubGVuZ3RoLnRvU3RyaW5nKCkubGVuZ3RoKStcInB4XCJ9Ont9LG9uOntzY3JvbGw6ZnVuY3Rpb24odCl7ZS52aXJ0dWFsJiZlLmhhbmRsZVRyZWVTY3JvbGwoKX19fSxbbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInZqcy10cmVlLWxpc3RcIixzdHlsZTplLnZpcnR1YWwmJntoZWlnaHQ6ZS5oZWlnaHQrXCJweFwifX0sW24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2anMtdHJlZS1saXN0LWhvbGRlclwiLHN0eWxlOmUudmlydHVhbCYme2hlaWdodDplLmZsYXREYXRhLmxlbmd0aCplLml0ZW1IZWlnaHQrXCJweFwifX0sW24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2anMtdHJlZS1saXN0LWhvbGRlci1pbm5lclwiLHN0eWxlOmUudmlydHVhbCYme3RyYW5zZm9ybTpcInRyYW5zbGF0ZVkoXCIrZS50cmFuc2xhdGVZK1wicHgpXCJ9fSxlLl9sKGUudmlzaWJsZURhdGEsKGZ1bmN0aW9uKHQpe3JldHVybiBuKFwidHJlZS1ub2RlXCIse2tleTp0LmlkLHN0eWxlOmUuaXRlbUhlaWdodCYmMjAhPT1lLml0ZW1IZWlnaHQ/e2xpbmVIZWlnaHQ6ZS5pdGVtSGVpZ2h0K1wicHhcIn06e30sYXR0cnM6e25vZGU6dCxjb2xsYXBzZWQ6ISFlLmhpZGRlblBhdGhzW3QucGF0aF0sXCJzaG93LWRvdWJsZS1xdW90ZXNcIjplLnNob3dEb3VibGVRdW90ZXMsXCJzaG93LWxlbmd0aFwiOmUuc2hvd0xlbmd0aCxcImNvbGxhcHNlZC1vbi1jbGljay1icmFja2V0c1wiOmUuY29sbGFwc2VkT25DbGlja0JyYWNrZXRzLGNoZWNrZWQ6ZS5zZWxlY3RlZFBhdGhzLmluY2x1ZGVzKHQucGF0aCksXCJzZWxlY3RhYmxlLXR5cGVcIjplLnNlbGVjdGFibGVUeXBlLFwic2hvdy1saW5lXCI6ZS5zaG93TGluZSxcInNob3ctbGluZS1udW1iZXJcIjplLnNob3dMaW5lTnVtYmVyLFwic2hvdy1zZWxlY3QtY29udHJvbGxlclwiOmUuc2hvd1NlbGVjdENvbnRyb2xsZXIsXCJzZWxlY3Qtb24tY2xpY2stbm9kZVwiOmUuc2VsZWN0T25DbGlja05vZGUsXCJub2RlLXNlbGVjdGFibGVcIjplLm5vZGVTZWxlY3RhYmxlLFwiaGlnaGxpZ2h0LXNlbGVjdGVkLW5vZGVcIjplLmhpZ2hsaWdodFNlbGVjdGVkTm9kZSxcInNob3ctaWNvblwiOmUuc2hvd0ljb24sXCJzaG93LWtleS12YWx1ZS1zcGFjZVwiOmUuc2hvd0tleVZhbHVlU3BhY2UsZWRpdGFibGU6ZS5lZGl0YWJsZSxcImVkaXRhYmxlLXRyaWdnZXJcIjplLmVkaXRhYmxlVHJpZ2dlcn0sb246e1wibm9kZS1jbGlja1wiOmUuaGFuZGxlTm9kZUNsaWNrLFwiYnJhY2tldHMtY2xpY2tcIjplLmhhbmRsZUJyYWNrZXRzQ2xpY2ssXCJpY29uLWNsaWNrXCI6ZS5oYW5kbGVJY29uQ2xpY2ssXCJzZWxlY3RlZC1jaGFuZ2VcIjplLmhhbmRsZVNlbGVjdGVkQ2hhbmdlLFwidmFsdWUtY2hhbmdlXCI6ZS5oYW5kbGVWYWx1ZUNoYW5nZX0sc2NvcGVkU2xvdHM6ZS5fdShbe2tleTpcImtleVwiLGZuOmZ1bmN0aW9uKHQpe3JldHVybltlLl90KFwibm9kZUtleVwiLG51bGwse25vZGU6dC5ub2RlLGRlZmF1bHRLZXk6dC5kZWZhdWx0S2V5fSldfX0se2tleTpcInZhbHVlXCIsZm46ZnVuY3Rpb24odCl7cmV0dXJuW2UuX3QoXCJub2RlVmFsdWVcIixudWxsLHtub2RlOnQubm9kZSxkZWZhdWx0VmFsdWU6dC5kZWZhdWx0VmFsdWV9KV19fV0sbnVsbCwhMCl9KX0pKSwxKV0pXSldKX0pLFtdLCExLG51bGwsbnVsbCxudWxsKS5leHBvcnRzLFM9T2JqZWN0LmFzc2lnbih7fSx3LHt2ZXJzaW9uOlwiMS45LjRcIn0pfX0sdD17fTtmdW5jdGlvbiBuKG8pe2lmKHRbb10pcmV0dXJuIHRbb10uZXhwb3J0czt2YXIgaT10W29dPXtleHBvcnRzOnt9fTtyZXR1cm4gZVtvXShpLGkuZXhwb3J0cyxuKSxpLmV4cG9ydHN9cmV0dXJuIG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQse2E6dH0pLHR9LG4uZD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbyBpbiB0KW4ubyh0LG8pJiYhbi5vKGUsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8se2VudW1lcmFibGU6ITAsZ2V0OnRbb119KX0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbig2MjkpfSgpfSkpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWN0aXZpdHlCcm93c2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTkyMzA5YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BY3Rpdml0eUJyb3dzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BY3Rpdml0eUJyb3dzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxBbGxlblxcXFxwcm9qZWN0c1xcXFxjbWNcXFxccGFja2FnZXNcXFxcYWxsZW5raG91cnlcXFxcdXNlci1hY3Rpdml0eVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZTkyMzA5YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZTkyMzA5YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZTkyMzA5YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWN0aXZpdHlCcm93c2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTkyMzA5YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZTkyMzA5YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FjdGl2aXR5QnJvd3Nlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FjdGl2aXR5U3lzdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YjRkZGRkNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BY3Rpdml0eVN5c3RlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FjdGl2aXR5U3lzdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcQWxsZW5cXFxccHJvamVjdHNcXFxcY21jXFxcXHBhY2thZ2VzXFxcXGFsbGVua2hvdXJ5XFxcXHVzZXItYWN0aXZpdHlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGI0ZGRkZDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGI0ZGRkZDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGI0ZGRkZDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FjdGl2aXR5U3lzdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YjRkZGRkNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4YjRkZGRkNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FjdGl2aXR5U3lzdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWV0aG9kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzFjMGQ1OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZXRob2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZXRob2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxBbGxlblxcXFxwcm9qZWN0c1xcXFxjbWNcXFxccGFja2FnZXNcXFxcYWxsZW5raG91cnlcXFxcdXNlci1hY3Rpdml0eVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3YzFjMGQ1OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YzFjMGQ1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YzFjMGQ1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWV0aG9kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzFjMGQ1OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YzFjMGQ1OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01ldGhvZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aXZpdHlCcm93c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2aXR5QnJvd3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aXZpdHlTeXN0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aXZpdHlTeXN0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ldGhvZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZXRob2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2aXR5QnJvd3Nlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U5MjMwOWMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aXZpdHlTeXN0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThiNGRkZGQ2JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNwYW5cIixcbiAgICB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uYnJvd3Nlck5hbWUgKyBcIiAtIFwiICsgX3ZtLmJyb3dzZXJWZXJzaW9uIH0gfSxcbiAgICBbXG4gICAgICBfdm0uYnJvd3Nlckljb24gPyBbX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5icm93c2VySWNvbiB9KV0gOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmljb25Pbmx5XG4gICAgICAgID8gW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmJyb3dzZXJOYW1lKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNwYW5cIixcbiAgICB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uc3lzdGVtTmFtZSArIFwiIC0gXCIgKyBfdm0uc3lzdGVtVmVyc2lvbiB9IH0sXG4gICAgW1xuICAgICAgX3ZtLnN5c3RlbUljb24gPyBbX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5zeXN0ZW1JY29uIH0pXSA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0uaWNvbk9ubHlcbiAgICAgICAgPyBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uc3lzdGVtTmFtZSkgKyBcIlxcbiAgICBcIildXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgbWUtMVwiLCBjbGFzczogW192bS5tZXRob2RzQ2xhc3NdIH0sIFtcbiAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLm1ldGhvZCkgKyBcIlxcblwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcbmltcG9ydCBNZXRob2QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0aG9kLnZ1ZVwiO1xyXG5pbXBvcnQgYWN0aXZpdHlMb2cgZnJvbSBcIi4uL21peGlucy9hY3Rpdml0eS1sb2dcIjtcclxuaW1wb3J0IENvbW1vbiBmcm9tIFwiLi4vbWl4aW5zL2NvbW1vblwiO1xyXG5cclxud2luZG93LlB1c2hlciA9IFB1c2hlcjtcclxud2luZG93LkVjaG8gPSBuZXcgRWNobyh7XHJcbiAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXHJcbiAgICBrZXk6IGJyb2FkY2FzdGluZ0RhdGEua2V5LFxyXG4gICAgY2x1c3RlcjogYnJvYWRjYXN0aW5nRGF0YS5vcHRpb25zLmNsdXN0ZXIgPz8gJ210MScsXHJcbiAgICB3c0hvc3Q6IGJyb2FkY2FzdGluZ0hvc3QgPyBicm9hZGNhc3RpbmdIb3N0IDogYHdzLSR7YnJvYWRjYXN0aW5nRGF0YS5vcHRpb25zLmNsdXN0ZXJ9LnB1c2hlci5jb21gLFxyXG4gICAgd3NQb3J0OiBicm9hZGNhc3RpbmdEYXRhLm9wdGlvbnMucG9ydCA/PyA4MCxcclxuICAgIHdzc1BvcnQ6IGJyb2FkY2FzdGluZ0RhdGEub3B0aW9ucy5wb3J0ID8/IDQ0MyxcclxuICAgIGZvcmNlVExTOiAoYnJvYWRjYXN0aW5nRGF0YS5vcHRpb25zLnNjaGVtZSA/PyAnaHR0cHMnKSA9PT0gJ2h0dHBzJyxcclxuICAgIGVuYWJsZWRUcmFuc3BvcnRzOiBbJ3dzJywgJ3dzcyddLFxyXG59KTtcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgZWw6ICcjTWFzdGVyQXBwJyxcclxuICAgIG1peGluczogW2FjdGl2aXR5TG9nLCBDb21tb25dLFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtNZXRob2R9LFxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5pbmcoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZWQ6e1xyXG4gICAgICAgIHVzZXJzRmlsdGVyZWQoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcnMuZmlsdGVyKGZ1bmN0aW9uICh1c2VyKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLmlkICE9IHRoaXNVc2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGE6e1xyXG4gICAgICAgIHJlY2VudEFjdGl2aXR5OiByZWNlbnRBY3Rpdml0eSxcclxuICAgICAgICB1c2VyTmFtZUZpZWxkOiB1c2VyTmFtZUZpZWxkLFxyXG4gICAgICAgIHVzZXJzOiBbXSxcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGxpc3RlbmluZygpe1xyXG4gICAgICAgICAgICB3aW5kb3cuRWNoby5qb2luKCdhbC50cmFja2luZy51c2VycycpXHJcbiAgICAgICAgICAgICAgICAuaGVyZSgodXNlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gdXNlcnM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW5pbmcoKHVzZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy51c2Vycy5maW5kSW5kZXgoZnVuY3Rpb24gKHNpbmdsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzaW5nbGUuaWQgPT09IHVzZXIuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleCA+IDAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc1tpbmRleF0gPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMucHVzaCh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5sZWF2aW5nKCh1c2VyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMudXNlcnMuZmluZEluZGV4KGZ1bmN0aW9uIChzaW5nbGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2luZ2xlLmlkID09PSB1c2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXggPiAwIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5lcnJvcigoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il0sIm5hbWVzIjpbInVhcCIsInJlcXVpcmUiLCJuYW1lIiwicHJvcHMiLCJ1c2VyQWdlbnQiLCJpY29uT25seSIsIl9kZWZhdWx0IiwiY29tcHV0ZWQiLCJicm93c2VyTmFtZSIsInBhcnNlZCIsImJyb3dzZXIiLCJicm93c2VyVmVyc2lvbiIsInZlcnNpb24iLCJicm93c2VySWNvbiIsImdldEljb24iLCJtZXRob2RzIiwiaWNvbnMiLCJ1bmRlZmluZWQiLCJzeXN0ZW1OYW1lIiwib3MiLCJzeXN0ZW1WZXJzaW9uIiwic3lzdGVtSWNvbiIsIm1ldGhvZHNDbGFzcyIsImNsYXNzZXMiLCJtZXRob2QiLCJBY3Rpdml0eUJyb3dzZXIiLCJBY3Rpdml0eVN5c3RlbSIsIlZ1ZUpzb25QcmV0dHkiLCJhY3Rpdml0eUxvZyIsImNvbXBvbmVudHMiLCJjcmVhdGVkIiwiZGF0YSIsIm1vZGFsIiwicm91dGUiLCJhY3Rpdml0eUxvZ0dldFJvdXRlIiwiaXRlbSIsIm9wZW5EZXRhaWxzTW9kYWwiLCJpZCIsImV2ZW50IiwiaW5zdGFuY2UiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0Iiwid2luZG93IiwiU3Bpbm5lciIsIm9uIiwiY29uY2F0IiwiYXhpb3MiLCJnZXQiLCJvZmYiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJhY3Rpdml0eUxvZ01vZGFsIiwic2hvdyIsImVycm9yIiwiY29uc29sZSIsIm15TW9kYWxFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJvb3RzdHJhcCIsIk1vZGFsIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsImFjdGl2aXR5QnJvd3NlciIsImFjdGl2aXR5T3MiLCJDb21tb24iLCJmaWx0ZXJzIiwiZGF0ZUZvcm1hdCIsInZhbHVlIiwib3B0aW9ucyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJjb21waWxlZCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIkVjaG8iLCJQdXNoZXIiLCJNZXRob2QiLCJicm9hZGNhc3RlciIsImtleSIsImJyb2FkY2FzdGluZ0RhdGEiLCJjbHVzdGVyIiwiX2Jyb2FkY2FzdGluZ0RhdGEkb3B0Iiwid3NIb3N0IiwiYnJvYWRjYXN0aW5nSG9zdCIsIndzUG9ydCIsIl9icm9hZGNhc3RpbmdEYXRhJG9wdDIiLCJwb3J0Iiwid3NzUG9ydCIsIl9icm9hZGNhc3RpbmdEYXRhJG9wdDMiLCJmb3JjZVRMUyIsIl9icm9hZGNhc3RpbmdEYXRhJG9wdDQiLCJzY2hlbWUiLCJlbmFibGVkVHJhbnNwb3J0cyIsIlZ1ZSIsImVsIiwibWl4aW5zIiwibGlzdGVuaW5nIiwidXNlcnNGaWx0ZXJlZCIsInVzZXJzIiwiZmlsdGVyIiwidXNlciIsInRoaXNVc2VyIiwicmVjZW50QWN0aXZpdHkiLCJ1c2VyTmFtZUZpZWxkIiwiX3RoaXMiLCJqb2luIiwiaGVyZSIsImpvaW5pbmciLCJpbmRleCIsImZpbmRJbmRleCIsInNpbmdsZSIsInB1c2giLCJsZWF2aW5nIiwic3BsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==