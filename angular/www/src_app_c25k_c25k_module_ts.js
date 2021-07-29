(self["webpackChunktreadmill_web"] = self["webpackChunktreadmill_web"] || []).push([["src_app_c25k_c25k_module_ts"],{

/***/ 8617:
/*!*********************************************!*\
  !*** ./src/app/c25k/c25k-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C25KPageRoutingModule": () => (/* binding */ C25KPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _c25k_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c25k.page */ 7118);




const routes = [
    {
        path: '',
        component: _c25k_page__WEBPACK_IMPORTED_MODULE_0__.C25KPage,
    }
];
let C25KPageRoutingModule = class C25KPageRoutingModule {
};
C25KPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], C25KPageRoutingModule);



/***/ }),

/***/ 482:
/*!*************************************!*\
  !*** ./src/app/c25k/c25k.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C25KPageModule": () => (/* binding */ C25KPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _c25k_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c25k.page */ 7118);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _c25k_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c25k-routing.module */ 8617);








let C25KPageModule = class C25KPageModule {
};
C25KPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _c25k_routing_module__WEBPACK_IMPORTED_MODULE_2__.C25KPageRoutingModule
        ],
        declarations: [_c25k_page__WEBPACK_IMPORTED_MODULE_0__.C25KPage]
    })
], C25KPageModule);



/***/ }),

/***/ 7118:
/*!***********************************!*\
  !*** ./src/app/c25k/c25k.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C25KPage": () => (/* binding */ C25KPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_c25k_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./c25k.page.html */ 1946);
/* harmony import */ var _c25k_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c25k.page.scss */ 7322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let C25KPage = class C25KPage {
    constructor() { }
};
C25KPage.ctorParameters = () => [];
C25KPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-c25k',
        template: _raw_loader_c25k_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_c25k_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], C25KPage);



/***/ }),

/***/ 7322:
/*!*************************************!*\
  !*** ./src/app/c25k/c25k.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjMjVrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1946:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c25k/c25k.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      C25K\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">C25K</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"C25K page\"></app-explore-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_c25k_c25k_module_ts.js.map