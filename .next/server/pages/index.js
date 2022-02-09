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

/***/ "./lib/withAuth.jsx":
/*!**************************!*\
  !*** ./lib/withAuth.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return withAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nlet globalUser = null;\nfunction withAuth(BaseComponent, {\n  loginRequired = true,\n  logoutRequired = false\n} = {}) {\n  class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    static async getInitialProps(ctx) {\n      // 1. getInitialProps\n      const isFromServer = true;\n      const user = ctx.req ? ctx.req.user && ctx.req.user.toObject() : globalUser;\n\n      if (isFromServer && user) {\n        console.log('before', typeof user._id, user._id);\n        user._id = user._id.toString();\n        console.log('after', typeof user._id, user._id);\n      }\n\n      const props = {\n        user,\n        isFromServer\n      };\n\n      if (BaseComponent.getInitialProps) {\n        Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});\n      }\n\n      return props;\n    }\n\n    componentDidMount() {// 2. componentDidMount\n      // if(loginRequired&&!logoutRequired&&!user){\n      //     Router.push('/public/login','/login');\n      //     return;\n      // }\n      // if(logoutRequired && user){\n      //     Router.push('/');\n      // }\n    }\n\n    render() {\n      const {\n        user\n      } = this.props; // 3. render\n\n      if (loginRequired && !logoutRequired && !user) {\n        return null;\n      }\n\n      if (logoutRequired && user) {\n        return null;\n      }\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(BaseComponent, this.props));\n    }\n\n  }\n\n  const propTypes = {\n    user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n      isAdmin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n    }),\n    isFromServer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired\n  };\n  const defaultProps = {\n    user: null\n  };\n  App.propTypes = propTypes;\n  App.defaultProps = defaultProps;\n  return App;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd2l0aEF1dGguanN4PzM2ZmUiXSwibmFtZXMiOlsiZ2xvYmFsVXNlciIsIndpdGhBdXRoIiwiQmFzZUNvbXBvbmVudCIsImxvZ2luUmVxdWlyZWQiLCJsb2dvdXRSZXF1aXJlZCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiaXNGcm9tU2VydmVyIiwidXNlciIsInJlcSIsInRvT2JqZWN0IiwiY29uc29sZSIsImxvZyIsIl9pZCIsInRvU3RyaW5nIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiaWQiLCJzdHJpbmciLCJpc0FkbWluIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFVBQVUsR0FBRyxJQUFqQjtBQUVlLFNBQVNDLFFBQVQsQ0FDWEMsYUFEVyxFQUVYO0FBQUVDLGVBQWEsR0FBRyxJQUFsQjtBQUF3QkMsZ0JBQWMsR0FBRztBQUF6QyxJQUFtRCxFQUZ4QyxFQUdiO0FBR0UsUUFBTUMsR0FBTixTQUFrQkMsNENBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDOUIsaUJBQWFDLGVBQWIsQ0FBNkJDLEdBQTdCLEVBQWtDO0FBQzlCO0FBQ0EsWUFBTUMsWUFBWSxPQUFsQjtBQUNBLFlBQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxHQUFKLEdBQVVILEdBQUcsQ0FBQ0csR0FBSixDQUFRRCxJQUFSLElBQWdCRixHQUFHLENBQUNHLEdBQUosQ0FBUUQsSUFBUixDQUFhRSxRQUFiLEVBQTFCLEdBQWtEYixVQUEvRDs7QUFFQSxVQUFJVSxZQUFZLElBQUdDLElBQW5CLEVBQXdCO0FBQ2xCRyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLE9BQU9KLElBQUksQ0FBQ0ssR0FBbEMsRUFBdUNMLElBQUksQ0FBQ0ssR0FBNUM7QUFFRkwsWUFBSSxDQUFDSyxHQUFMLEdBQVNMLElBQUksQ0FBQ0ssR0FBTCxDQUFTQyxRQUFULEVBQVQ7QUFDR0gsZUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQixPQUFPSixJQUFJLENBQUNLLEdBQWpDLEVBQXNDTCxJQUFJLENBQUNLLEdBQTNDO0FBRU47O0FBRUQsWUFBTUUsS0FBSyxHQUFHO0FBQUNQLFlBQUQ7QUFBTUQ7QUFBTixPQUFkOztBQUdBLFVBQUlSLGFBQWEsQ0FBQ00sZUFBbEIsRUFBa0M7QUFDOUJXLGNBQU0sQ0FBQ0MsTUFBUCxDQUFjRixLQUFkLEVBQXFCLE9BQU1oQixhQUFhLENBQUNNLGVBQWQsQ0FBOEJDLEdBQTlCLENBQU4sS0FBMEMsRUFBL0Q7QUFDSDs7QUFDRCxhQUFPUyxLQUFQO0FBQ0g7O0FBRURHLHFCQUFpQixHQUFHLENBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLSDs7QUFFREMsVUFBTSxHQUFHO0FBRUwsWUFBTTtBQUFDWDtBQUFELFVBQU8sS0FBS08sS0FBbEIsQ0FGSyxDQUdMOztBQUdBLFVBQUlmLGFBQWEsSUFBSSxDQUFDQyxjQUFsQixJQUFvQyxDQUFDTyxJQUF6QyxFQUErQztBQUMvQyxlQUFPLElBQVA7QUFDQzs7QUFFRCxVQUFJUCxjQUFjLElBQUlPLElBQXRCLEVBQTRCO0FBQzVCLGVBQU8sSUFBUDtBQUNDOztBQUVELGFBQ0ksbUVBQ0ksTUFBQyxhQUFELEVBQW1CLEtBQUtPLEtBQXhCLENBREosQ0FESjtBQUtIOztBQTFENkI7O0FBOERsQyxRQUFNSyxTQUFTLEdBQUc7QUFDZFosUUFBSSxFQUFFYSxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ2xCQyxRQUFFLEVBQUVGLGlEQUFTLENBQUNHLE1BREk7QUFFbEJDLGFBQU8sRUFBRUosaURBQVMsQ0FBQ0s7QUFGRCxLQUFoQixDQURRO0FBS2RuQixnQkFBWSxFQUFFYyxpREFBUyxDQUFDSyxJQUFWLENBQWVDO0FBTGYsR0FBbEI7QUFRQSxRQUFNQyxZQUFZLEdBQUc7QUFDakJwQixRQUFJLEVBQUU7QUFEVyxHQUFyQjtBQUdBTixLQUFHLENBQUNrQixTQUFKLEdBQWdCQSxTQUFoQjtBQUNBbEIsS0FBRyxDQUFDMEIsWUFBSixHQUFtQkEsWUFBbkI7QUFFQSxTQUFPMUIsR0FBUDtBQUNIIiwiZmlsZSI6Ii4vbGliL3dpdGhBdXRoLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmxldCBnbG9iYWxVc2VyID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEF1dGgoXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICB7IGxvZ2luUmVxdWlyZWQgPSB0cnVlLCBsb2dvdXRSZXF1aXJlZCA9IGZhbHNlIH0gPSB7fSxcbikge1xuICAgIFxuXG4gICAgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgICAgICAgIC8vIDEuIGdldEluaXRpYWxQcm9wc1xuICAgICAgICAgICAgY29uc3QgaXNGcm9tU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gY3R4LnJlcSA/IGN0eC5yZXEudXNlciAmJiBjdHgucmVxLnVzZXIudG9PYmplY3QoKTpnbG9iYWxVc2VyO1xuXG4gICAgICAgICAgICBpZiAoaXNGcm9tU2VydmVyJiYgdXNlcil7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlJywgdHlwZW9mIHVzZXIuX2lkLCB1c2VyLl9pZCk7XG5cbiAgICAgICAgICAgICAgICB1c2VyLl9pZD11c2VyLl9pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlcicsIHR5cGVvZiB1c2VyLl9pZCwgdXNlci5faWQpO1xuICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge3VzZXIsaXNGcm9tU2VydmVyfTtcblxuXG4gICAgICAgICAgICBpZiAoQmFzZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvcHMsIGF3YWl0IEJhc2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCl8fHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgLy8gMi4gY29tcG9uZW50RGlkTW91bnRcbiAgICAgICAgICAgIC8vIGlmKGxvZ2luUmVxdWlyZWQmJiFsb2dvdXRSZXF1aXJlZCYmIXVzZXIpe1xuICAgICAgICAgICAgLy8gICAgIFJvdXRlci5wdXNoKCcvcHVibGljL2xvZ2luJywnL2xvZ2luJyk7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBpZihsb2dvdXRSZXF1aXJlZCAmJiB1c2VyKXtcbiAgICAgICAgICAgIC8vICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgLy8gfVxuXG5cblxuXG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHt1c2VyfT10aGlzLnByb3BzO1xuICAgICAgICAgICAgLy8gMy4gcmVuZGVyXG5cblxuICAgICAgICAgICAgaWYgKGxvZ2luUmVxdWlyZWQgJiYgIWxvZ291dFJlcXVpcmVkICYmICF1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvZ291dFJlcXVpcmVkICYmIHVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNlQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgcHJvcFR5cGVzID0ge1xuICAgICAgICB1c2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICBpc0FkbWluOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgfSksXG4gICAgICAgIGlzRnJvbVNlcnZlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICB9O1xuXG4gICAgY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB1c2VyOiBudWxsLFxuICAgIH07XG4gICAgQXBwLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbiAgICBBcHAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gICAgcmV0dXJuIEFwcDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/withAuth.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/withAuth */ \"./lib/withAuth.jsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst propTypes = {\n  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n    displayName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n    email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired\n  })\n};\nconst defaultProps = {\n  user: null\n};\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const {\n      user\n    } = this.props;\n    return __jsx(\"div\", {\n      style: {\n        padding: '10px 45px'\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"title\", null, \"Dashboard\"), __jsx(\"meta\", {\n      name: \"description\",\n      content: \"This is a description of the Index page\"\n    })), __jsx(\"p\", null, \"List of purchased books\"), __jsx(\"p\", null, \"Email:\", user.email));\n  }\n\n}\n\nIndex.propTypes = propTypes;\nIndex.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1c2VyIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJkaXNwbGF5TmFtZSIsInN0cmluZyIsImVtYWlsIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInBhZGRpbmciLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLE1BQUksRUFBRUMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNwQkMsZUFBVyxFQUFFRixpREFBUyxDQUFDRyxNQURIO0FBRXBCQyxTQUFLLEVBQUVKLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJFO0FBRkosR0FBaEI7QUFEVSxDQUFsQjtBQU9BLE1BQU1DLFlBQVksR0FBRztBQUNuQlAsTUFBSSxFQUFFO0FBRGEsQ0FBckI7O0FBS0EsTUFBTVEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBbUM7QUFDakNDLFFBQU0sR0FBRTtBQUNOLFVBQU07QUFBRVg7QUFBRixRQUFXLEtBQUtZLEtBQXRCO0FBRUEsV0FFSTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0EsTUFBQyxnREFBRCxRQUNBLGlDQURBLEVBRUE7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUM7QUFBakMsTUFGQSxDQURBLEVBS0EsMkNBTEEsRUFNQSwyQkFBVWIsSUFBSSxDQUFDSyxLQUFmLENBTkEsQ0FGSjtBQWFEOztBQWpCZ0M7O0FBcUJuQ0csS0FBSyxDQUFDVCxTQUFOLEdBQWtCQSxTQUFsQjtBQUNBUyxLQUFLLENBQUNELFlBQU4sR0FBcUJBLFlBQXJCO0FBRWVPLDRIQUFRLENBQUNOLEtBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9saWIvd2l0aEF1dGgnO1xuXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdXNlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlcjogbnVsbCxcbn07XG5cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybihcblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4IDQ1cHgnIH19PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRhc2hib2FyZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGlzIGEgZGVzY3JpcHRpb24gb2YgdGhlIEluZGV4IHBhZ2VcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxwPkxpc3Qgb2YgcHVyY2hhc2VkIGJvb2tzPC9wPlxuICAgICAgICA8cD5FbWFpbDp7dXNlci5lbWFpbH08L3A+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICApXG4gIH1cbn1cblxuXG5JbmRleC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5JbmRleC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEluZGV4KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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