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
exports.id = "pages/api/medicamentos";
exports.ids = ["pages/api/medicamentos"];
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

/***/ "(api)/./pages/api/medicamentos/index.js":
/*!*****************************************!*\
  !*** ./pages/api/medicamentos/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await obtenerMedicamento(req, res);\n        case \"POST\":\n            return await guardarMedicamento(req, res);\n    }\n}\nconst obtenerMedicamento = async (req, res)=>{\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM medicamento\");\n    return res.status(200).json(result);\n};\nconst guardarMedicamento = async (req, res)=>{\n    const { cod_medicamento , formato , descripcion , stock  } = req.body;\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"INSERT INTO medicamento SET ?\", {\n        cod_medicamento,\n        formato,\n        descripcion,\n        stock\n    });\n    return res.status(200).json({\n        cod_medicamento,\n        formato,\n        descripcion,\n        stock,\n        id: result.insertId\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVkaWNhbWVudG9zL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRTFCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTVDLE9BQVFELElBQUlFLE1BQU07UUFFZCxLQUFLO1lBQ0QsT0FBTyxNQUFNQyxtQkFBbUJILEtBQUtDO1FBQ3pDLEtBQUs7WUFDRCxPQUFPLE1BQU1HLG1CQUFtQkosS0FBSUM7SUFDNUM7QUFDSixDQUFDO0FBRUQsTUFBTUUscUJBQXFCLE9BQU9ILEtBQUtDLE1BQVE7SUFDM0MsTUFBTSxDQUFDSSxPQUFPLEdBQUcsTUFBTVAsa0RBQVUsQ0FBQztJQUNsQyxPQUFPRyxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUNoQztBQUlBLE1BQU1ELHFCQUFxQixPQUFPSixLQUFLQyxNQUFRO0lBQzNDLE1BQU0sRUFBRVEsZ0JBQWUsRUFBRUMsUUFBTyxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRSxHQUFHWixJQUFJYSxJQUFJO0lBRWpFLE1BQU0sQ0FBQ1IsT0FBTyxHQUFHLE1BQU1QLGtEQUFVLENBQUMsaUNBQWlDO1FBQy9EVztRQUNBQztRQUNBQztRQUNBQztJQUNKO0lBRUEsT0FBT1gsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQztRQUFpQkM7UUFBU0M7UUFBYUM7UUFBT0UsSUFBSVQsT0FBT1UsUUFBUTtJQUFBO0FBQ25HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tY2xpbmljYS8uL3BhZ2VzL2FwaS9tZWRpY2FtZW50b3MvaW5kZXguanM/NmM1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9kYlwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcblxyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG9idGVuZXJNZWRpY2FtZW50byhyZXEsIHJlcylcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ3VhcmRhck1lZGljYW1lbnRvKHJlcSxyZXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG9idGVuZXJNZWRpY2FtZW50byA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBtZWRpY2FtZW50b1wiKVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdClcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBndWFyZGFyTWVkaWNhbWVudG8gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgY29kX21lZGljYW1lbnRvLCBmb3JtYXRvLCBkZXNjcmlwY2lvbiwgc3RvY2sgfSA9IHJlcS5ib2R5XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBwb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gbWVkaWNhbWVudG8gU0VUID9cIiwge1xyXG4gICAgICAgIGNvZF9tZWRpY2FtZW50byxcclxuICAgICAgICBmb3JtYXRvLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgICAgIHN0b2NrXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvZF9tZWRpY2FtZW50bywgZm9ybWF0bywgZGVzY3JpcGNpb24sIHN0b2NrLCBpZDogcmVzdWx0Lmluc2VydElkfSk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJwb29sIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm9idGVuZXJNZWRpY2FtZW50byIsImd1YXJkYXJNZWRpY2FtZW50byIsInJlc3VsdCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImNvZF9tZWRpY2FtZW50byIsImZvcm1hdG8iLCJkZXNjcmlwY2lvbiIsInN0b2NrIiwiYm9keSIsImlkIiwiaW5zZXJ0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/medicamentos/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/medicamentos/index.js"));
module.exports = __webpack_exports__;

})();