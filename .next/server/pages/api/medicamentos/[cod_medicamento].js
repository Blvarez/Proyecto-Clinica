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
exports.id = "pages/api/medicamentos/[cod_medicamento]";
exports.ids = ["pages/api/medicamentos/[cod_medicamento]"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool)({\n    host: \"localhost\",\n    user: \"root\",\n    port: 3306,\n    database: \"bdclinica\"\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLE9BQVFELDBEQUFVQSxDQUFDO0lBQ3JCRSxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0FBQ2Q7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0by1jbGluaWNhLy4vY29uZmlnL2RiLmpzP2I0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUG9vbCB9IGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xyXG5cclxuY29uc3QgcG9vbCAgPSBjcmVhdGVQb29sKHtcclxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXHJcbiAgICB1c2VyOiBcInJvb3RcIixcclxuICAgIHBvcnQ6IDMzMDYsXHJcbiAgICBkYXRhYmFzZTogXCJiZGNsaW5pY2FcIlxyXG59KTtcclxuXHJcbmV4cG9ydCB7IHBvb2wgfTsiXSwibmFtZXMiOlsiY3JlYXRlUG9vbCIsInBvb2wiLCJob3N0IiwidXNlciIsInBvcnQiLCJkYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/medicamentos/[cod_medicamento].js":
/*!*****************************************************!*\
  !*** ./pages/api/medicamentos/[cod_medicamento].js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    const { cod_medicamento  } = req.query;\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM medicamento where cod_medicamento = ?\", [\n        cod_medicamento\n    ]);\n    return res.status(200).json(result[0]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVkaWNhbWVudG9zL1tjb2RfbWVkaWNhbWVudG9dLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBRUMsZ0JBQWUsRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBRXJDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLE1BQU1OLGtEQUFVLENBQUMsdURBQXVEO1FBQUNJO0tBQWdCO0lBRTFHLE9BQU9ELElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNGLE1BQU0sQ0FBQyxFQUFFO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0by1jbGluaWNhLy4vcGFnZXMvYXBpL21lZGljYW1lbnRvcy9bY29kX21lZGljYW1lbnRvXS5qcz83NTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvb2wgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGNvZF9tZWRpY2FtZW50byB9ID0gcmVxLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBtZWRpY2FtZW50byB3aGVyZSBjb2RfbWVkaWNhbWVudG8gPSA/XCIsIFtjb2RfbWVkaWNhbWVudG9dKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRbMF0pXHJcbn0iXSwibmFtZXMiOlsicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb2RfbWVkaWNhbWVudG8iLCJxdWVyeSIsInJlc3VsdCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/medicamentos/[cod_medicamento].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/medicamentos/[cod_medicamento].js"));
module.exports = __webpack_exports__;

})();