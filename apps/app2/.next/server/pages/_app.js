"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "../../node_modules/next/dist/pages/_app.js":
/*!**************************************************!*\
  !*** ../../node_modules/next/dist/pages/_app.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps)));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1pBLDhDQUE2QyxDQUFDO0lBQzFDRyxLQUFLLEVBQUUsSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGSCxtREFBa0QsQ0FBQztJQUMvQ0ksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUNiLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxlQUFlO0lBQ2pDLENBQUM7QUFDTCxDQUFDLEVBQUM7QUFDRlAsdURBQXNELENBQUM7SUFDbkRJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUM7UUFDYixNQUFNLENBQUNDLE1BQU0sQ0FBQ0UsbUJBQW1CO0lBQ3JDLENBQUM7QUFDTCxDQUFDLEVBQUM7QUFDRk4sa0JBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUNRLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU87QUFDbkQsR0FBRyxDQUFDTixNQUFNLEdBQUdNLG1CQUFPLENBQUMsZ0RBQXFCO1NBQ2pDQyxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDeEUsR0FBRyxDQUFDLENBQUM7UUFDRCxHQUFHLENBQUNDLElBQUksR0FBR1AsR0FBRyxDQUFDSyxHQUFHLEVBQUVDLEdBQUc7UUFDdkIsR0FBRyxDQUFDakIsS0FBSyxHQUFHa0IsSUFBSSxDQUFDbEIsS0FBSztJQUMxQixDQUFDLENBQUMsS0FBSyxFQUFFbUIsS0FBSyxFQUFFLENBQUM7UUFDYk4sTUFBTSxDQUFDTSxLQUFLO1FBQ1osTUFBTTtJQUNWLENBQUM7SUFDRCxFQUFFLEVBQUVELElBQUksQ0FBQ0UsSUFBSSxFQUFFLENBQUM7UUFDWlIsT0FBTyxDQUFDWixLQUFLO0lBQ2pCLENBQUMsTUFBTSxDQUFDO1FBQ0pxQixPQUFPLENBQUNULE9BQU8sQ0FBQ1osS0FBSyxFQUFFc0IsSUFBSSxDQUFDUixLQUFLLEVBQUVDLE1BQU07SUFDN0MsQ0FBQztBQUNMLENBQUM7U0FDUVEsaUJBQWlCLENBQUNDLEVBQUUsRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQztRQUNmLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLElBQUksRUFBRUMsSUFBSSxHQUFHQyxTQUFTO1FBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUNULE9BQU8sRUFBRUMsTUFBTSxFQUFFLENBQUM7WUFDMUMsR0FBRyxDQUFDRixHQUFHLEdBQUdhLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDSCxJQUFJLEVBQUVDLElBQUk7cUJBQ3BCWixLQUFLLENBQUNkLEtBQUssRUFBRSxDQUFDO2dCQUNuQlUsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQU0sT0FBRWYsS0FBSztZQUN6RSxDQUFDO3FCQUNRZSxNQUFNLENBQUNjLEdBQUcsRUFBRSxDQUFDO2dCQUNsQm5CLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxDQUFPLFFBQUVjLEdBQUc7WUFDeEUsQ0FBQztZQUNEZixLQUFLLENBQUNnQixTQUFTO1FBQ25CLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztTQUNRdEIsc0JBQXNCLENBQUN1QixHQUFHLEVBQUUsQ0FBQztJQUNsQyxNQUFNLENBQUNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRyxDQUFDO1FBQ2xDekIsT0FBTyxFQUFFeUIsR0FBRztJQUNoQixDQUFDO0FBQ0wsQ0FBQztTQUNRRSxtQkFBbUIsR0FBRyxDQUFDO0lBQzVCQSxtQkFBbUIsR0FBRyxFQUd2Qjs7O0NBQUEsR0FBQ1YsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQ1csU0FBUyxHQUFHQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0MsS0FBSyxDQUFDQyxTQUFTLFVBQVUsQ0FBQyxFQUFFakMsTUFBTSxFQUFFa0MsbUJBQW1CLENBQUNILFNBQVMsRUFBRUMsR0FBRztRQUN0RSxNQUFNLENBQUMsQ0FBQztZQUNKQyxTQUFTO1FBQ2IsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUNILG1CQUFtQixDQUFDTCxLQUFLLENBQUMsSUFBSSxFQUFFRCxTQUFTO0FBQ3BELENBQUM7U0FDUVcsa0JBQWtCLENBQUNDLENBQUMsRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FBQ04sbUJBQW1CLENBQUNMLEtBQUssQ0FBQyxJQUFJLEVBQUVELFNBQVM7QUFDcEQsQ0FBQztNQUNLYSxHQUFHLFNBQVNqQyxNQUFNLENBQUNELE9BQU8sQ0FBQzRCLFNBQVM7SUFDdENPLE1BQU0sR0FBRyxDQUFDO1FBQ04sS0FBSyxDQUFDLENBQUMsQ0FBQ1AsU0FBUyxHQUFHRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQ00sS0FBSztRQUM3QyxNQUFNLENBQUMsRUFBYSxZQUFDbkMsTUFBTSxDQUFDRCxPQUFPLENBQUNxQyxhQUFhLENBQUNULFNBQVMsRUFBRXJDLE1BQU0sQ0FBQytDLE1BQU0sQ0FBQyxDQUFDLENBQzNFLEVBQUVSLFNBQVM7SUFDaEIsQ0FBQzs7QUFFTEksR0FBRyxDQUFDSyxtQkFBbUIsR0FBR1Asa0JBQWtCO0FBQzVDRSxHQUFHLENBQUNNLGVBQWUsR0FBR1Isa0JBQWtCO0FBQ3hDdkMsa0JBQWUsR0FBR3lDLEdBQUcsQ0FFckIsQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAyLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz8xOWE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgX2FwcEdldEluaXRpYWxQcm9wcyA9IC8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("../../node_modules/next/dist/pages/_app.js"));
module.exports = __webpack_exports__;

})();