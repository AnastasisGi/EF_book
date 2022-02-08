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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return withAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nlet globalUser = null;\nfunction withAuth(BaseComponent, {\n  loginRequired = true,\n  logoutRequired = false\n} = {}) {\n  class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    static async getInitialProps(ctx) {\n      // 1. getInitialProps\n      const isFromServer = true;\n      const user = ctx.req ? ctx.req.user && ctx.req.user.toObject() : globalUser;\n\n      if (isFromServer && user) {\n        console.log('before', typeof user._id, user._id);\n        user._id = user._id.toString();\n        console.log('after', typeof user._id, user._id);\n      }\n\n      const props = {\n        user,\n        isFromServer\n      };\n\n      if (BaseComponent.getInitialProps) {\n        Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});\n      }\n\n      return props;\n    }\n\n    componentDidMount() {\n      // 2. componentDidMount\n      // if(loginRequired&&!logoutRequired&&!user){\n      //     Router.push('/public/login','/login');\n      //     return;\n      // }\n      if (logoutRequired) {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');\n      }\n    }\n\n    render() {\n      const {\n        user\n      } = this.props; // 3. render\n\n      if (loginRequired && !logoutRequired && !user) {\n        return null;\n      }\n\n      if (logoutRequired && user) {\n        return null;\n      }\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(BaseComponent, this.props));\n    }\n\n  }\n\n  const propTypes = {\n    user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n      isAdmin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n    }),\n    isFromServer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired\n  };\n  const defaultProps = {\n    user: null\n  };\n  App.propTypes = propTypes;\n  App.defaultProps = defaultProps;\n  return App;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd2l0aEF1dGguanN4PzM2ZmUiXSwibmFtZXMiOlsiZ2xvYmFsVXNlciIsIndpdGhBdXRoIiwiQmFzZUNvbXBvbmVudCIsImxvZ2luUmVxdWlyZWQiLCJsb2dvdXRSZXF1aXJlZCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiaXNGcm9tU2VydmVyIiwidXNlciIsInJlcSIsInRvT2JqZWN0IiwiY29uc29sZSIsImxvZyIsIl9pZCIsInRvU3RyaW5nIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb25lbnREaWRNb3VudCIsIlJvdXRlciIsInB1c2giLCJyZW5kZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImlkIiwic3RyaW5nIiwiaXNBZG1pbiIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUcsSUFBakI7QUFFZSxTQUFTQyxRQUFULENBQ1hDLGFBRFcsRUFFWDtBQUFFQyxlQUFhLEdBQUcsSUFBbEI7QUFBd0JDLGdCQUFjLEdBQUc7QUFBekMsSUFBbUQsRUFGeEMsRUFHYjtBQUdFLFFBQU1DLEdBQU4sU0FBa0JDLDRDQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQzlCLGlCQUFhQyxlQUFiLENBQTZCQyxHQUE3QixFQUFrQztBQUM5QjtBQUNBLFlBQU1DLFlBQVksT0FBbEI7QUFDQSxZQUFNQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csR0FBSixHQUFVSCxHQUFHLENBQUNHLEdBQUosQ0FBUUQsSUFBUixJQUFnQkYsR0FBRyxDQUFDRyxHQUFKLENBQVFELElBQVIsQ0FBYUUsUUFBYixFQUExQixHQUFvRGIsVUFBakU7O0FBRUEsVUFBSVUsWUFBWSxJQUFHQyxJQUFuQixFQUF3QjtBQUNsQkcsZUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQixPQUFPSixJQUFJLENBQUNLLEdBQWxDLEVBQXVDTCxJQUFJLENBQUNLLEdBQTVDO0FBRUZMLFlBQUksQ0FBQ0ssR0FBTCxHQUFTTCxJQUFJLENBQUNLLEdBQUwsQ0FBU0MsUUFBVCxFQUFUO0FBQ0dILGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUIsT0FBT0osSUFBSSxDQUFDSyxHQUFqQyxFQUFzQ0wsSUFBSSxDQUFDSyxHQUEzQztBQUVOOztBQUVELFlBQU1FLEtBQUssR0FBRztBQUFDUCxZQUFEO0FBQU1EO0FBQU4sT0FBZDs7QUFHQSxVQUFJUixhQUFhLENBQUNNLGVBQWxCLEVBQWtDO0FBQzlCVyxjQUFNLENBQUNDLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQixPQUFNaEIsYUFBYSxDQUFDTSxlQUFkLENBQThCQyxHQUE5QixDQUFOLEtBQTBDLEVBQS9EO0FBQ0g7O0FBQ0QsYUFBT1MsS0FBUDtBQUNIOztBQUVERyxxQkFBaUIsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsVUFBR2pCLGNBQUgsRUFBa0I7QUFDZGtCLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFLSjs7QUFFREMsVUFBTSxHQUFHO0FBRUwsWUFBTTtBQUFDYjtBQUFELFVBQU8sS0FBS08sS0FBbEIsQ0FGSyxDQUdMOztBQUdBLFVBQUlmLGFBQWEsSUFBSSxDQUFDQyxjQUFsQixJQUFvQyxDQUFDTyxJQUF6QyxFQUErQztBQUMvQyxlQUFPLElBQVA7QUFDQzs7QUFFRCxVQUFJUCxjQUFjLElBQUlPLElBQXRCLEVBQTRCO0FBQzVCLGVBQU8sSUFBUDtBQUNDOztBQUVELGFBQ0ksbUVBQ0ksTUFBQyxhQUFELEVBQW1CLEtBQUtPLEtBQXhCLENBREosQ0FESjtBQUtIOztBQTFENkI7O0FBOERsQyxRQUFNTyxTQUFTLEdBQUc7QUFDZGQsUUFBSSxFQUFFZSxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ2xCQyxRQUFFLEVBQUVGLGlEQUFTLENBQUNHLE1BREk7QUFFbEJDLGFBQU8sRUFBRUosaURBQVMsQ0FBQ0s7QUFGRCxLQUFoQixDQURRO0FBS2RyQixnQkFBWSxFQUFFZ0IsaURBQVMsQ0FBQ0ssSUFBVixDQUFlQztBQUxmLEdBQWxCO0FBUUEsUUFBTUMsWUFBWSxHQUFHO0FBQ2pCdEIsUUFBSSxFQUFFO0FBRFcsR0FBckI7QUFHQU4sS0FBRyxDQUFDb0IsU0FBSixHQUFnQkEsU0FBaEI7QUFDQXBCLEtBQUcsQ0FBQzRCLFlBQUosR0FBbUJBLFlBQW5CO0FBRUEsU0FBTzVCLEdBQVA7QUFDSCIsImZpbGUiOiIuL2xpYi93aXRoQXV0aC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5sZXQgZ2xvYmFsVXNlciA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBdXRoKFxuICAgIEJhc2VDb21wb25lbnQsXG4gICAgeyBsb2dpblJlcXVpcmVkID0gdHJ1ZSwgbG9nb3V0UmVxdWlyZWQgPSBmYWxzZSB9ID0ge30sXG4pIHtcbiAgICBcblxuICAgIGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgICAgICAgICAvLyAxLiBnZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICAgIGNvbnN0IGlzRnJvbVNlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGN0eC5yZXEgPyBjdHgucmVxLnVzZXIgJiYgY3R4LnJlcS51c2VyLnRvT2JqZWN0KCkgOiBnbG9iYWxVc2VyO1xuXG4gICAgICAgICAgICBpZiAoaXNGcm9tU2VydmVyJiYgdXNlcil7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlJywgdHlwZW9mIHVzZXIuX2lkLCB1c2VyLl9pZCk7XG5cbiAgICAgICAgICAgICAgICB1c2VyLl9pZD11c2VyLl9pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlcicsIHR5cGVvZiB1c2VyLl9pZCwgdXNlci5faWQpO1xuICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge3VzZXIsaXNGcm9tU2VydmVyfTtcblxuXG4gICAgICAgICAgICBpZiAoQmFzZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvcHMsIGF3YWl0IEJhc2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCl8fHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgLy8gMi4gY29tcG9uZW50RGlkTW91bnRcbiAgICAgICAgICAgIC8vIGlmKGxvZ2luUmVxdWlyZWQmJiFsb2dvdXRSZXF1aXJlZCYmIXVzZXIpe1xuICAgICAgICAgICAgLy8gICAgIFJvdXRlci5wdXNoKCcvcHVibGljL2xvZ2luJywnL2xvZ2luJyk7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBpZihsb2dvdXRSZXF1aXJlZCl7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuXG4gICAgICAgICAgICBjb25zdCB7dXNlcn09dGhpcy5wcm9wcztcbiAgICAgICAgICAgIC8vIDMuIHJlbmRlclxuXG5cbiAgICAgICAgICAgIGlmIChsb2dpblJlcXVpcmVkICYmICFsb2dvdXRSZXF1aXJlZCAmJiAhdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsb2dvdXRSZXF1aXJlZCAmJiB1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QmFzZUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgaXNBZG1pbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIH0pLFxuICAgICAgICBpc0Zyb21TZXJ2ZXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgfTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdXNlcjogbnVsbCxcbiAgICB9O1xuICAgIEFwcC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4gICAgQXBwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICAgIHJldHVybiBBcHA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/withAuth.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/withAuth */ \"./lib/withAuth.jsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst propTypes = {\n  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n    displayName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n    email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired\n  })\n};\nconst defaultProps = {\n  user: null\n};\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const {\n      user\n    } = this.props;\n    return __jsx(\"div\", {\n      style: {\n        padding: '10px 45px'\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"title\", null, \"Dashboard\"), __jsx(\"meta\", {\n      name: \"description\",\n      content: \"This is a description of the Index page\"\n    })), __jsx(\"p\", null, \"List of purchased books\"), __jsx(\"p\", null, \"Email:\", user.email));\n  }\n\n}\n\nIndex.propTypes = propTypes;\nIndex.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1c2VyIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJkaXNwbGF5TmFtZSIsInN0cmluZyIsImVtYWlsIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInBhZGRpbmciLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLE1BQUksRUFBRUMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNwQkMsZUFBVyxFQUFFRixpREFBUyxDQUFDRyxNQURIO0FBRXBCQyxTQUFLLEVBQUVKLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJFO0FBRkosR0FBaEI7QUFEVSxDQUFsQjtBQU9BLE1BQU1DLFlBQVksR0FBRztBQUNuQlAsTUFBSSxFQUFFO0FBRGEsQ0FBckI7O0FBS0EsTUFBTVEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBbUM7QUFDakNDLFFBQU0sR0FBRTtBQUNOLFVBQU07QUFBRVg7QUFBRixRQUFXLEtBQUtZLEtBQXRCO0FBRUEsV0FFSTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0EsTUFBQyxnREFBRCxRQUNBLGlDQURBLEVBRUE7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUM7QUFBakMsTUFGQSxDQURBLEVBS0EsMkNBTEEsRUFNQSwyQkFBVWIsSUFBSSxDQUFDSyxLQUFmLENBTkEsQ0FGSjtBQWFEOztBQWpCZ0M7O0FBcUJuQ0csS0FBSyxDQUFDVCxTQUFOLEdBQWtCQSxTQUFsQjtBQUNBUyxLQUFLLENBQUNELFlBQU4sR0FBcUJBLFlBQXJCO0FBRWVPLDRIQUFRLENBQUNOLEtBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9saWIvd2l0aEF1dGgnO1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICB1c2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICB1c2VyOiBudWxsLFxufTtcblxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuKFxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggNDVweCcgfX0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGFzaGJvYXJkPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgaXMgYSBkZXNjcmlwdGlvbiBvZiB0aGUgSW5kZXggcGFnZVwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHA+TGlzdCBvZiBwdXJjaGFzZWQgYm9va3M8L3A+XG4gICAgICAgIDxwPkVtYWlsOnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIClcbiAgfVxufVxuXG5cbkluZGV4LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkluZGV4LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

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