module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Shops/index.js":
/*!***********************************!*\
  !*** ./components/Shops/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/product */ "./components/product/index.js");


var _jsxFileName = "C:\\Users\\ACER\\Desktop\\next.js_61113858\\components\\Shops\\index.js";



function index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col-sm-12 padding-right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "features_items",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              class: "title text-center",
              children: "Features Items"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "single-shop-product",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: props.data.map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_product__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  data: data
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ACER\\Desktop\\next.js_61113858\\components\\footer\\footer.js";


function footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      id: "footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "footer-top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "col-sm-5",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "companyinfo",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "suwi"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 21
                  }, this), "-shopper"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "col-sm-5",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "companyinfo",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "Prepared by"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Suwijak Pitsupan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "61113858"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Software Engineering"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "col-sm-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "video-gallery text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "iframe-img",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/home/logo.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: "Create by"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Suwijak Pitsupan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/jquery.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/bootstrap.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/jquery.scrollUp.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/price-range.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/jquery.prettyPhoto.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/main.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/head/head.js":
/*!*********************************!*\
  !*** ./components/head/head.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ACER\\Desktop\\next.js_61113858\\components\\head\\head.js";


function head() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("head", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charset: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "author",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "/css/bootstrap.min.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "/css/font-awesome.min.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "/css/prettyPhoto.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "/css/price-range.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "/css/animate.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "/css/main.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "/css/responsive.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "js/html5shiv.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "js/respond.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/images/ico/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon-precomposed",
        sizes: "144x144",
        href: "images/ico/apple-touch-icon-144-precomposed.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon-precomposed",
        sizes: "114x114",
        href: "images/ico/apple-touch-icon-114-precomposed.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon-precomposed",
        sizes: "72x72",
        href: "images/ico/apple-touch-icon-72-precomposed.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon-precomposed",
        href: "images/ico/apple-touch-icon-57-precomposed.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (head);

/***/ }),

/***/ "./components/product/index.js":
/*!*************************************!*\
  !*** ./components/product/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ACER\\Desktop\\next.js_61113858\\components\\product\\index.js";


function index(props) {
  const {
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "col-sm-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "product-image-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "single-products",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "productinfo text-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: data.product_img,
              width: "200",
              height: "360"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: [data.product_price, " \u0E3F"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [data.product_name, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "<%- '/products/detail/'+product._id%>",
              class: "btn btn-default add-to-cart",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                class: "fa fa-search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this), "Go to Details"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _components_Shops__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Shops */ "./components/Shops/index.js");
/* harmony import */ var _components_head_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head/head */ "./components/head/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\ACER\\Desktop\\next.js_61113858\\pages\\index.js";




const PRODUCT_LISTS = [{
  product_id: 1,
  product_name: "NMD_R1 ",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d5a344f7dcc644e58e71ac6400b31c52_9366/NMD_R1_FX6794_01_standard.jpg",
  product_price: 4600
}, {
  product_id: 2,
  product_name: "DURAMO SL",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/196640be9cbc4770854bab5000f84a78_9366/Duramo_SL_FW7393_01_standard.jpg",
  product_price: 2000
}, {
  product_id: 3,
  product_name: "STAN SMITH",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/72a5d34bfe39473cb9a9ac1d01054432_9366/STAN_SMITH_FX5523_01_standard.jpg",
  product_price: 3200
}, {
  product_id: 4,
  product_name: "ZX 2K BOOST",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7f27a2e86b44440b9bbbac3e00994a26_9366/ZX_2K_Boost_FX7036_01_standard.jpg",
  product_price: 4600
}, {
  product_id: 5,
  product_name: "PRO BOOST GCA LOW",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/96531b75aea64636a46aabbc00ed1161_9366/PRO_BOOST_GCA_Low_FX9235_01_standard.jpg",
  product_price: 4000
}, {
  product_id: 6,
  product_name: "LITE RACER",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b4840395b3724be292f1abac009b7f95_9366/Lite_Racer_FX3793_01_standard.jpg",
  product_price: 1500
}, {
  product_id: 7,
  product_name: "RESPONSE SR",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8b767e03ac18488a946aab4a00a000b4_9366/Response_SR_FX3625_01_standard.jpg",
  product_price: 1750
}, {
  product_id: 8,
  product_name: "ULTRABOOST 1 DNA",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/cdc1b857ece14be9bed8abfd01701c50_9366/Ultraboost_1_DNA_H68156_01_standard.jpg",
  product_price: 7800
}, {
  product_id: 9,
  product_name: "LAVARUN",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38c2ff49788d41a4a623aca7010a707e_9366/Lavarun_H03125_01_standard.jpg",
  product_price: 4500
}, {
  product_id: 10,
  product_name: "NMD_R1 PK",
  product_img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/879bbd4ac95c43279cc8acd300f5ddb1_9366/NMD_R1_PK_GZ0066_01_standard.jpg",
  product_price: 5800
}];
function Home(props) {
  const {
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head_head__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Shops__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
async function getStaticProps() {
  return {
    props: {
      data: PRODUCT_LISTS
    }
  };
}

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG9wcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkL2hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvSGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJmb290ZXIiLCJoZWFkIiwicHJvZHVjdF9pbWciLCJwcm9kdWN0X3ByaWNlIiwicHJvZHVjdF9uYW1lIiwiUFJPRFVDVF9MSVNUUyIsInByb2R1Y3RfaWQiLCJIb21lIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUhoQjtBQUlFRixhQUFXLEVBQ1QsdUpBTEo7QUFNRUMsZUFBYSxFQUFFO0FBTmpCLENBdERvQixFQThEcEI7QUFDRUcsWUFBVSxFQUFFLENBRGQ7QUFHRUYsY0FBWSxFQUFFLFNBSGhCO0FBSUVGLGFBQVcsRUFDVCw4SUFMSjtBQU1FQyxlQUFhLEVBQUU7QUFOakIsQ0E5RG9CLEVBc0VwQjtBQUNFRyxZQUFVLEVBQUUsRUFEZDtBQUVFRixjQUFZLEVBQUUsV0FGaEI7QUFHRUYsYUFBVyxFQUNULGdKQUpKO0FBS0VDLGVBQWEsRUFBRTtBQUxqQixDQXRFb0IsQ0FBdEI7QUErRWUsU0FBU0ksSUFBVCxDQUFjVixLQUFkLEVBQXFCO0FBQ2xDLFFBQU07QUFBRUM7QUFBRixNQUFXRCxLQUFqQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMseURBQUQ7QUFBTyxVQUFJLEVBQUVDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUEsa0JBREY7QUFPRDtBQUVNLGVBQWVVLGNBQWYsR0FBZ0M7QUFDckMsU0FBTztBQUNMWCxTQUFLLEVBQUU7QUFDTEMsVUFBSSxFQUFFTztBQUREO0FBREYsR0FBUDtBQUtELEM7Ozs7Ozs7Ozs7O0FDckdELHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmRTaG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3RcIjtcclxuZnVuY3Rpb24gaW5kZXgocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgcGFkZGluZy1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXNfaXRlbXNcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSB0ZXh0LWNlbnRlclwiPkZlYXR1cmVzIEl0ZW1zPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXNob3AtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIGNhcmQgb25lICovfVxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFNob3AgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gZm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci10b3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zdXdpPC9zcGFuPi1zaG9wcGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55aW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+UHJlcGFyZWQgYnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TdXdpamFrIFBpdHN1cGFuPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD42MTExMzg1ODwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+U29mdHdhcmUgRW5naW5lZXJpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1nYWxsZXJ5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlmcmFtZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9ob21lL2xvZ28ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5DcmVhdGUgYnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TdXdpamFrIFBpdHN1cGFuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJqcy9qcXVlcnkuanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJqcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwianMvanF1ZXJ5LnNjcm9sbFVwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImpzL3ByaWNlLXJhbmdlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwianMvanF1ZXJ5LnByZXR0eVBob3RvLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwianMvbWFpbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9IZWFkXCI7XHJcbmZ1bmN0aW9uIGhlYWQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlwiIC8+XHJcblxyXG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvcHJldHR5UGhvdG8uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvcHJpY2UtcmFuZ2UuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvYW5pbWF0ZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9tYWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL3Jlc3BvbnNpdmUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgey8qIDwhLS1baWYgbHQgSUUgOV0+ICovfVxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwianMvaHRtbDVzaGl2LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJqcy9yZXNwb25kLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIHsvKiA8IVtlbmRpZl0tLT4gICAgICAgICovfVxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltYWdlcy9pY28vZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkXCJcclxuICAgICAgICAgIHNpemVzPVwiMTQ0eDE0NFwiXHJcbiAgICAgICAgICBocmVmPVwiaW1hZ2VzL2ljby9hcHBsZS10b3VjaC1pY29uLTE0NC1wcmVjb21wb3NlZC5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWRcIlxyXG4gICAgICAgICAgc2l6ZXM9XCIxMTR4MTE0XCJcclxuICAgICAgICAgIGhyZWY9XCJpbWFnZXMvaWNvL2FwcGxlLXRvdWNoLWljb24tMTE0LXByZWNvbXBvc2VkLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZFwiXHJcbiAgICAgICAgICBzaXplcz1cIjcyeDcyXCJcclxuICAgICAgICAgIGhyZWY9XCJpbWFnZXMvaWNvL2FwcGxlLXRvdWNoLWljb24tNzItcHJlY29tcG9zZWQucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkXCJcclxuICAgICAgICAgIGhyZWY9XCJpbWFnZXMvaWNvL2FwcGxlLXRvdWNoLWljb24tNTctcHJlY29tcG9zZWQucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgocHJvcHMpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0aW5mbyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnByb2R1Y3RfaW1nfSB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjM2MFwiIC8+XHJcbiAgICAgICAgICAgICAgPGgyPntkYXRhLnByb2R1Y3RfcHJpY2V9IOC4vzwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+e2RhdGEucHJvZHVjdF9uYW1lfSA8L3A+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCI8JS0gJy9wcm9kdWN0cy9kZXRhaWwvJytwcm9kdWN0Ll9pZCU+XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGFkZC10by1jYXJ0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT5HbyB0byBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IFNob3BzIGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3BzXCI7XHJcbmltcG9ydCBTZXRIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBQUk9EVUNUX0xJU1RTID0gW1xyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDEsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiTk1EX1IxIFwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly9hc3NldHMuYWRpZGFzLmNvbS9pbWFnZXMvaF84NDAsZl9hdXRvLHFfYXV0bzpzZW5zaXRpdmUsZmxfbG9zc3kvZDVhMzQ0ZjdkY2M2NDRlNThlNzFhYzY0MDBiMzFjNTJfOTM2Ni9OTURfUjFfRlg2Nzk0XzAxX3N0YW5kYXJkLmpwZ1wiLFxyXG4gICAgcHJvZHVjdF9wcmljZTogNDYwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDIsXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiRFVSQU1PIFNMXCIsXHJcbiAgICBwcm9kdWN0X2ltZzpcclxuICAgICAgXCJodHRwczovL2Fzc2V0cy5hZGlkYXMuY29tL2ltYWdlcy9oXzg0MCxmX2F1dG8scV9hdXRvOnNlbnNpdGl2ZSxmbF9sb3NzeS8xOTY2NDBiZTljYmM0NzcwODU0YmFiNTAwMGY4NGE3OF85MzY2L0R1cmFtb19TTF9GVzczOTNfMDFfc3RhbmRhcmQuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiAyMDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZHVjdF9pZDogMyxcclxuICAgIHByb2R1Y3RfbmFtZTogXCJTVEFOIFNNSVRIXCIsXHJcbiAgICBwcm9kdWN0X2ltZzpcclxuICAgICAgXCJodHRwczovL2Fzc2V0cy5hZGlkYXMuY29tL2ltYWdlcy9oXzg0MCxmX2F1dG8scV9hdXRvOnNlbnNpdGl2ZSxmbF9sb3NzeS83MmE1ZDM0YmZlMzk0NzNjYjlhOWFjMWQwMTA1NDQzMl85MzY2L1NUQU5fU01JVEhfRlg1NTIzXzAxX3N0YW5kYXJkLmpwZ1wiLFxyXG4gICAgcHJvZHVjdF9wcmljZTogMzIwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDQsXHJcblxyXG4gICAgcHJvZHVjdF9uYW1lOiBcIlpYIDJLIEJPT1NUXCIsXHJcbiAgICBwcm9kdWN0X2ltZzpcclxuICAgICAgXCJodHRwczovL2Fzc2V0cy5hZGlkYXMuY29tL2ltYWdlcy9oXzg0MCxmX2F1dG8scV9hdXRvOnNlbnNpdGl2ZSxmbF9sb3NzeS83ZjI3YTJlODZiNDQ0NDBiOWJiYmFjM2UwMDk5NGEyNl85MzY2L1pYXzJLX0Jvb3N0X0ZYNzAzNl8wMV9zdGFuZGFyZC5qcGdcIixcclxuICAgIHByb2R1Y3RfcHJpY2U6IDQ2MDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9kdWN0X2lkOiA1LFxyXG5cclxuICAgIHByb2R1Y3RfbmFtZTogXCJQUk8gQk9PU1QgR0NBIExPV1wiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly9hc3NldHMuYWRpZGFzLmNvbS9pbWFnZXMvaF84NDAsZl9hdXRvLHFfYXV0bzpzZW5zaXRpdmUsZmxfbG9zc3kvOTY1MzFiNzVhZWE2NDYzNmE0NmFhYmJjMDBlZDExNjFfOTM2Ni9QUk9fQk9PU1RfR0NBX0xvd19GWDkyMzVfMDFfc3RhbmRhcmQuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiA0MDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZHVjdF9pZDogNixcclxuXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiTElURSBSQUNFUlwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly9hc3NldHMuYWRpZGFzLmNvbS9pbWFnZXMvaF84NDAsZl9hdXRvLHFfYXV0bzpzZW5zaXRpdmUsZmxfbG9zc3kvYjQ4NDAzOTViMzcyNGJlMjkyZjFhYmFjMDA5YjdmOTVfOTM2Ni9MaXRlX1JhY2VyX0ZYMzc5M18wMV9zdGFuZGFyZC5qcGdcIixcclxuICAgIHByb2R1Y3RfcHJpY2U6IDE1MDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9kdWN0X2lkOiA3LFxyXG5cclxuICAgIHByb2R1Y3RfbmFtZTogXCJSRVNQT05TRSBTUlwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly9hc3NldHMuYWRpZGFzLmNvbS9pbWFnZXMvaF84NDAsZl9hdXRvLHFfYXV0bzpzZW5zaXRpdmUsZmxfbG9zc3kvOGI3NjdlMDNhYzE4NDg4YTk0NmFhYjRhMDBhMDAwYjRfOTM2Ni9SZXNwb25zZV9TUl9GWDM2MjVfMDFfc3RhbmRhcmQuanBnXCIsXHJcbiAgICBwcm9kdWN0X3ByaWNlOiAxNzUwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvZHVjdF9pZDogOCxcclxuXHJcbiAgICBwcm9kdWN0X25hbWU6IFwiVUxUUkFCT09TVCAxIEROQVwiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly9hc3NldHMuYWRpZGFzLmNvbS9pbWFnZXMvaF84NDAsZl9hdXRvLHFfYXV0bzpzZW5zaXRpdmUsZmxfbG9zc3kvY2RjMWI4NTdlY2UxNGJlOWJlZDhhYmZkMDE3MDFjNTBfOTM2Ni9VbHRyYWJvb3N0XzFfRE5BX0g2ODE1Nl8wMV9zdGFuZGFyZC5qcGdcIixcclxuICAgIHByb2R1Y3RfcHJpY2U6IDc4MDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9kdWN0X2lkOiA5LFxyXG5cclxuICAgIHByb2R1Y3RfbmFtZTogXCJMQVZBUlVOXCIsXHJcbiAgICBwcm9kdWN0X2ltZzpcclxuICAgICAgXCJodHRwczovL2Fzc2V0cy5hZGlkYXMuY29tL2ltYWdlcy9oXzg0MCxmX2F1dG8scV9hdXRvOnNlbnNpdGl2ZSxmbF9sb3NzeS8zOGMyZmY0OTc4OGQ0MWE0YTYyM2FjYTcwMTBhNzA3ZV85MzY2L0xhdmFydW5fSDAzMTI1XzAxX3N0YW5kYXJkLmpwZ1wiLFxyXG4gICAgcHJvZHVjdF9wcmljZTogNDUwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2R1Y3RfaWQ6IDEwLFxyXG4gICAgcHJvZHVjdF9uYW1lOiBcIk5NRF9SMSBQS1wiLFxyXG4gICAgcHJvZHVjdF9pbWc6XHJcbiAgICAgIFwiaHR0cHM6Ly9hc3NldHMuYWRpZGFzLmNvbS9pbWFnZXMvaF84NDAsZl9hdXRvLHFfYXV0bzpzZW5zaXRpdmUsZmxfbG9zc3kvODc5YmJkNGFjOTVjNDMyNzljYzhhY2QzMDBmNWRkYjFfOTM2Ni9OTURfUjFfUEtfR1owMDY2XzAxX3N0YW5kYXJkLmpwZ1wiLFxyXG4gICAgcHJvZHVjdF9wcmljZTogNTgwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZXRIZWFkIC8+XHJcbiAgICAgIDxTaG9wcyBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGE6IFBST0RVQ1RfTElTVFMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9IZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==