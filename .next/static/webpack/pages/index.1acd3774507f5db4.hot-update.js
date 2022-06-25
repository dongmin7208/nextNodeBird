/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/AppLayout.js":
/*!***************************************!*\
  !*** ./pages/components/AppLayout.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserProfile */ \"./pages/components/UserProfile.js\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_UserProfile__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginForm */ \"./pages/components/LoginForm.js\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AppLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = _slicedToArray(useState(false), 2), isLoggedIn = ref[0], setIsLoggedIn = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                mode: \"horizontal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"NordBird\"\n                        }, void 0, false, {\n                            fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.Search, {\n                            enterButton: true,\n                            style: {\n                                verticalAlign: \"middle\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/signup\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"signup\"\n                            }, void 0, false, {\n                                fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                gutter: 8,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        xs: 24,\n                        md: 6,\n                        children: isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_UserProfile__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                            fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                            lineNumber: 34,\n                            columnNumber: 35\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_LoginForm__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                            fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                            lineNumber: 34,\n                            columnNumber: 53\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        xs: 24,\n                        md: 12,\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        xs: 24,\n                        md: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/dongmin7208/nextNodeBird\",\n                            target: \"_blank\",\n                            rel: \"noreferrer noopener\",\n                            children: \"Made by park\"\n                        }, void 0, false, {\n                            fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parkdongmin/Downloads/github/nextNodeBird/prepare/front/pages/components/AppLayout.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n_s(AppLayout, \"g0MSgNVZk+vKiEFnDJ9VPEfswFA=\");\n_c = AppLayout;\nAppLayout.prototype = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ047QUFDZ0I7QUFFTztBQUNKOztBQUNoRCxJQUFNUSxTQUFTLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDekIsSUFBb0NDLEdBQWUsa0JBQWZBLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBNUNDLFVBQVUsR0FBbUJELEdBQWUsR0FBbEMsRUFBRUUsYUFBYSxHQUFJRixHQUFlLEdBQW5CO0lBQ2hDLHFCQUNJLDhEQUFDRyxLQUFHOzswQkFDQSw4REFBQ1gsc0NBQUk7Z0JBQUNZLElBQUksRUFBQyxZQUFZOztrQ0FDbkIsOERBQUNaLDJDQUFTO2tDQUNOLDRFQUFDRCxrREFBSTs0QkFBQ2UsSUFBSSxFQUFDLEdBQUc7c0NBQUMsVUFBUTs7Ozs7aUNBQU87Ozs7OzZCQUN0QjtrQ0FDWiw4REFBQ2QsMkNBQVM7a0NBQ04sNEVBQUNELGtEQUFJOzRCQUFDZSxJQUFJLEVBQUMsVUFBVTtzQ0FDakIsNEVBQUNDLEdBQUM7MENBQUMsU0FBTzs7Ozs7cUNBQUk7Ozs7O2lDQUNYOzs7Ozs2QkFDQztrQ0FDWiw4REFBQ2YsMkNBQVM7a0NBQ04sNEVBQUNDLDhDQUFZOzRCQUNUZ0IsV0FBVzs0QkFDWEMsS0FBSyxFQUFFO2dDQUFFQyxhQUFhLEVBQUUsUUFBUTs2QkFBRTs7Ozs7aUNBQ3BDOzs7Ozs2QkFDTTtrQ0FDWiw4REFBQ25CLDJDQUFTO2tDQUNOLDRFQUFDRCxrREFBSTs0QkFBQ2UsSUFBSSxFQUFDLFNBQVM7c0NBQ2hCLDRFQUFDQyxHQUFDOzBDQUFDLFFBQU07Ozs7O3FDQUFJOzs7OztpQ0FDVjs7Ozs7NkJBQ0M7Ozs7OztxQkFDVDswQkFDUCw4REFBQ2IscUNBQUc7Z0JBQUNrQixNQUFNLEVBQUUsQ0FBQzs7a0NBQ1YsOERBQUNqQixxQ0FBRzt3QkFBQ2tCLEVBQUUsRUFBRSxFQUFFO3dCQUFFQyxFQUFFLEVBQUUsQ0FBQztrQ0FDYmIsVUFBVSxpQkFBRyw4REFBQ0wsZ0VBQVc7Ozs7aUNBQUcsaUJBQUcsOERBQUNDLDhEQUFTOzs7O2lDQUFHOzs7Ozs2QkFDM0M7a0NBQ04sOERBQUNGLHFDQUFHO3dCQUFDa0IsRUFBRSxFQUFFLEVBQUU7d0JBQUVDLEVBQUUsRUFBRSxFQUFFO2tDQUNkZixRQUFROzs7Ozs2QkFDUDtrQ0FDTiw4REFBQ0oscUNBQUc7d0JBQUNrQixFQUFFLEVBQUUsRUFBRTt3QkFBRUMsRUFBRSxFQUFFLENBQUM7a0NBQ2QsNEVBQUNQLEdBQUM7NEJBQ0VELElBQUksRUFBQyw2Q0FBNkM7NEJBQ2xEUyxNQUFNLEVBQUMsUUFBUTs0QkFDZkMsR0FBRyxFQUFDLHFCQUFxQjtzQ0FDNUIsY0FFRDs7Ozs7aUNBQUk7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ1I7Q0FDTDtHQTVDS2xCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQThDZkEsU0FBUyxDQUFDbUIsU0FBUyxHQUFHO0lBQ2xCbEIsUUFBUSxFQUFFVCxtRUFBeUI7Q0FDdEMsQ0FBQztBQUVGLCtEQUFlUSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9BcHBMYXlvdXQuanM/NDEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGVcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5Gb3JtXCI7XG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+Tm9yZEJpcmQ8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5wcm9maWxlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+c2lnbnVwPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZG9uZ21pbjcyMDgvbmV4dE5vZGVCaXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWFkZSBieSBwYXJrXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQXBwTGF5b3V0LnByb3RvdHlwZSA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJMaW5rIiwiTWVudSIsIklucHV0IiwiUm93IiwiQ29sIiwiVXNlclByb2ZpbGUiLCJMb2dpbkZvcm0iLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJkaXYiLCJtb2RlIiwiSXRlbSIsImhyZWYiLCJhIiwiU2VhcmNoIiwiZW50ZXJCdXR0b24iLCJzdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGFyZ2V0IiwicmVsIiwicHJvdG90eXBlIiwibm9kZSIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/AppLayout.js\n");

/***/ }),

/***/ "./pages/components/LoginForm.js":
/*!***************************************!*\
  !*** ./pages/components/LoginForm.js ***!
  \***************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/components/UserProfile.js":
/*!*****************************************!*\
  !*** ./pages/components/UserProfile.js ***!
  \*****************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});