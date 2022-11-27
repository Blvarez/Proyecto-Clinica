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
exports.id = "pages/api/pacientes";
exports.ids = ["pages/api/pacientes"];
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

/***/ "(api)/./pages/api/pacientes/index.js":
/*!**************************************!*\
  !*** ./pages/api/pacientes/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await obtenerPaciente(req, res);\n        case \"POST\":\n            return await guardarPaciente(req, res);\n    }\n}\nconst obtenerPaciente = async (req, res)=>{\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM PACIENTE\");\n    return res.status(200).json(result);\n};\nconst guardarPaciente = async (req, res)=>{\n    const { rut , nombre , fono , edad , diagnostico  } = req.body;\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"INSERT INTO PACIENTE SET ? \", {\n        rut,\n        nombre,\n        fono,\n        edad,\n        diagnostico\n    });\n    console.log(result);\n    return res.status(200).json({\n        rut,\n        nombre,\n        fono,\n        edad,\n        diagnostico\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFjaWVudGVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRTFCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTVDLE9BQVFELElBQUlFLE1BQU07UUFDZCxLQUFLO1lBQ0QsT0FBTyxNQUFNQyxnQkFBZ0JILEtBQUtDO1FBQ3RDLEtBQUs7WUFDRCxPQUFPLE1BQU1HLGdCQUFnQkosS0FBS0M7SUFDMUM7QUFFSixDQUFDO0FBR0QsTUFBTUUsa0JBQWtCLE9BQU9ILEtBQUtDLE1BQVE7SUFDeEMsTUFBTSxDQUFDSSxPQUFPLEdBQUcsTUFBTVAsa0RBQVUsQ0FBQztJQUNsQyxPQUFPRyxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUNoQztBQUVBLE1BQU1ELGtCQUFrQixPQUFPSixLQUFLQyxNQUFRO0lBQ3hDLE1BQU0sRUFBRVEsSUFBRyxFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUUsR0FBR2IsSUFBSWMsSUFBSTtJQUV6RCxNQUFNLENBQUNULE9BQU8sR0FBRyxNQUFNUCxrREFBVSxDQUFDLCtCQUErQjtRQUM3RFc7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7SUFDSjtJQUdBRSxRQUFRQyxHQUFHLENBQUNYO0lBQ1osT0FBT0osSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQztRQUFLQztRQUFRQztRQUFNQztRQUFNQztJQUFXO0FBQ3RFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tY2xpbmljYS8uL3BhZ2VzL2FwaS9wYWNpZW50ZXMvaW5kZXguanM/MmYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9kYlwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgb2J0ZW5lclBhY2llbnRlKHJlcSwgcmVzKVxyXG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBndWFyZGFyUGFjaWVudGUocmVxLCByZXMpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY29uc3Qgb2J0ZW5lclBhY2llbnRlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IHBvb2wucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIFBBQ0lFTlRFXCIpXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KVxyXG59XHJcblxyXG5jb25zdCBndWFyZGFyUGFjaWVudGUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgcnV0LCBub21icmUsIGZvbm8sIGVkYWQsIGRpYWdub3N0aWNvIH0gPSByZXEuYm9keVxyXG5cclxuICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgcG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIFBBQ0lFTlRFIFNFVCA/IFwiLCB7XHJcbiAgICAgICAgcnV0LFxyXG4gICAgICAgIG5vbWJyZSxcclxuICAgICAgICBmb25vLFxyXG4gICAgICAgIGVkYWQsXHJcbiAgICAgICAgZGlhZ25vc3RpY29cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBydXQsIG5vbWJyZSwgZm9ubywgZWRhZCwgZGlhZ25vc3RpY299KTtcclxufSJdLCJuYW1lcyI6WyJwb29sIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm9idGVuZXJQYWNpZW50ZSIsImd1YXJkYXJQYWNpZW50ZSIsInJlc3VsdCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsInJ1dCIsIm5vbWJyZSIsImZvbm8iLCJlZGFkIiwiZGlhZ25vc3RpY28iLCJib2R5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pacientes/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pacientes/index.js"));
module.exports = __webpack_exports__;

})();