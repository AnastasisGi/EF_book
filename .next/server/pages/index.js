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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst propTypes = {\n  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n  })\n};\nconst defaultProps = {\n  user: null\n};\n\nconst Index = ({\n  user\n}) => __jsx(\"div\", {\n  style: {\n    padding: '10px 45px'\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"title\", null, \"Index page\"), __jsx(\"meta\", {\n  name: \"description\",\n  content: \"This is a description of the Index page\"\n})), __jsx(\"p\", null, \"Content on Index page!!!\"), __jsx(\"p\", null, \"Email:\", user.email), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n  variant: \"contained\"\n}, \"MUI button\"));\n\nIndex.getInitialProps = async ctx => ({\n  user: ctx.query.user\n});\n\nIndex.propTypes = propTypes;\nIndex.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1c2VyIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJkaXNwbGF5TmFtZSIsInN0cmluZyIsImVtYWlsIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsIkluZGV4IiwicGFkZGluZyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBRztBQUNoQkMsTUFBSSxFQUFFQyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3BCQyxlQUFXLEVBQUVGLGlEQUFTLENBQUNHLE1BREg7QUFFcEJDLFNBQUssRUFBRUosaURBQVMsQ0FBQ0csTUFBVixDQUFpQkU7QUFGSixHQUFoQjtBQURVLENBQWxCO0FBT0EsTUFBTUMsWUFBWSxHQUFHO0FBQ25CUCxNQUFJLEVBQUU7QUFEYSxDQUFyQjs7QUFJQSxNQUFNUSxLQUFLLEdBQUcsQ0FBQztBQUFDUjtBQUFELENBQUQsS0FDWjtBQUFLLE9BQUssRUFBRTtBQUFFUyxXQUFPLEVBQUU7QUFBWDtBQUFaLEdBQ0UsTUFBQyxnREFBRCxRQUNFLGtDQURGLEVBRUU7QUFBTSxNQUFJLEVBQUMsYUFBWDtBQUF5QixTQUFPLEVBQUM7QUFBakMsRUFGRixDQURGLEVBS0UsNENBTEYsRUFNRSwyQkFFQ1QsSUFBSSxDQUFDSyxLQUZOLENBTkYsRUFXRSxNQUFDLCtEQUFEO0FBQVEsU0FBTyxFQUFDO0FBQWhCLGdCQVhGLENBREY7O0FBZUVHLEtBQUssQ0FBQ0UsZUFBTixHQUF3QixNQUFPQyxHQUFQLEtBQWdCO0FBQUVYLE1BQUksRUFBRVcsR0FBRyxDQUFDQyxLQUFKLENBQVVaO0FBQWxCLENBQWhCLENBQXhCOztBQUVGUSxLQUFLLENBQUNULFNBQU4sR0FBa0JBLFNBQWxCO0FBQ0FTLEtBQUssQ0FBQ0QsWUFBTixHQUFxQkEsWUFBckI7QUFDZUMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB1c2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLFxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHVzZXI6IG51bGwsXG59O1xuXG5jb25zdCBJbmRleCA9ICh7dXNlcn0pID0+IChcbiAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCA0NXB4JyB9fT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5JbmRleCBwYWdlPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGlzIGEgZGVzY3JpcHRpb24gb2YgdGhlIEluZGV4IHBhZ2VcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8cD5Db250ZW50IG9uIEluZGV4IHBhZ2UhISE8L3A+XG4gICAgPHA+XG4gICAgRW1haWw6XG4gICAge3VzZXIuZW1haWx9XG5cbiAgICA8L3A+XG4gICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+TVVJIGJ1dHRvbjwvQnV0dG9uPlxuICA8L2Rpdj5cbik7XG4gIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+ICh7IHVzZXI6IGN0eC5xdWVyeS51c2VyIH0pO1xuXG5JbmRleC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5JbmRleC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });