(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-feature-flags-flags-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/flags/components/flags--container/flags.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/flags/components/flags--container/flags.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flags__align\">\n    <div class=\"align__container\">\n        <app-button (action)=\"exit()\" [color]=\"colorEnums.TERTIARY\" [icon]=\"'icon-arrow-left-1'\"\n                    class=\"container__exit\"></app-button>\n\n        <div *ngFor=\"let key of objectKeys(environment.flags)\" class=\"container__flag-control\">\n            <app-button (action)=\"update(key)\" *ngIf=\"key !== 'state'\"\n                        [color]=\"environment.flags[key] ? colorEnums.SENARY : colorEnums.TERTIARY\"\n                        [icon]=\"environment.flags[key] ? 'icon-power' : 'icon-moon-filled' \"\n                        [value]=\"key\"\n                        class=\"flag-control__button\"></app-button>\n        </div>\n        <div class=\"container__divider\"></div>\n        <app-button (action)=\"reset()\" [color]=\"colorEnums.TERTIARY\" [value]=\"'Reset to defaults'\"\n                    class=\"container__reset\"></app-button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/feature/flags/components/flags--container/flags.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/feature/flags/components/flags--container/flags.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flags__align {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #606468;\n  width: 90%;\n  max-width: 320px;\n}\n.flags__align .align__container {\n  color: #eee;\n}\n.flags__align .align__container > *:not(:last-child) {\n  margin-bottom: 10px;\n  display: block;\n}\n.flags__align .align__container .container__divider {\n  padding: 0;\n  border: none;\n  background-color: #707690;\n  height: 1px;\n  margin: 20px 30%;\n}\n.flags__align .align__container .container__divider:before {\n  content: \"more\";\n  margin-top: -10px;\n  color: #fff;\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: absolute;\n  background: #2c3338;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9fX3cvaGFydmVzdGVyL2hhcnZlc3Rlci9hcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9mbGFncy9jb21wb25lbnRzL2ZsYWdzLS1jb250YWluZXIvZmxhZ3MuY29tcG9uZW50LnNjc3MiLCJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9mbGFncy9jb21wb25lbnRzL2ZsYWdzLS1jb250YWluZXIvZmxhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7QUNDSjtBRENJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQVIiLCJmaWxlIjoiYXBwcy9oYXJ2ZXN0ZXIvc3JjL2FwcC9tb2R1bGVzL2ZlYXR1cmUvZmxhZ3MvY29tcG9uZW50cy9mbGFncy0tY29udGFpbmVyL2ZsYWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsYWdzX19hbGlnbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjNjA2NDY4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuXG4gIC5hbGlnbl9fY29udGFpbmVyIHtcbiAgICBjb2xvcjogI2VlZTtcblxuICAgICYgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5jb250YWluZXJfX2RpdmlkZXIge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDc2OTA7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogMjBweCAzMCU7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ21vcmUnOyAvLyBUT0RPOiBNb3ZlIG92ZXIgdG8gSFRNTCB0byBhbGxvdyBUcmFuc2xhdGlvblxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzJjMzMzODtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuIiwiLmZsYWdzX19hbGlnbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjNjA2NDY4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuLmZsYWdzX19hbGlnbiAuYWxpZ25fX2NvbnRhaW5lciB7XG4gIGNvbG9yOiAjZWVlO1xufVxuLmZsYWdzX19hbGlnbiAuYWxpZ25fX2NvbnRhaW5lciA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZsYWdzX19hbGlnbiAuYWxpZ25fX2NvbnRhaW5lciAuY29udGFpbmVyX19kaXZpZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3NjkwO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAyMHB4IDMwJTtcbn1cbi5mbGFnc19fYWxpZ24gLmFsaWduX19jb250YWluZXIgLmNvbnRhaW5lcl9fZGl2aWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIm1vcmVcIjtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMyYzMzMzg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/feature/flags/components/flags--container/flags.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/feature/flags/components/flags--container/flags.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FlagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsComponent", function() { return FlagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_flags_flags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/flags/flags.service */ "./src/app/modules/feature/flags/services/flags/flags.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_error_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/error/error.service */ "./src/app/services/error/error.service.ts");
/* harmony import */ var _enums_color_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../enums/color.enums */ "./src/app/enums/color.enums.ts");







let FlagsComponent = class FlagsComponent {
    constructor(flagsService, location, errorService) {
        this.flagsService = flagsService;
        this.location = location;
        this.errorService = errorService;
        this.objectKeys = Object.keys;
        this.colorEnums = _enums_color_enums__WEBPACK_IMPORTED_MODULE_6__["colorEnums"];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    /**
     * Update Flag
     * @param id Flag ID
     */
    update(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.flagsService.set(id, !_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].flags[id]);
        });
    }
    /**
     * Reset all Flags to default
     */
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.flagsService.reset();
        });
    }
    exit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.location.back();
            }
            catch (err) {
                this.errorService.throw(err, true);
            }
        });
    }
};
FlagsComponent.ctorParameters = () => [
    { type: _services_flags_flags_service__WEBPACK_IMPORTED_MODULE_2__["FlagsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] }
];
FlagsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flags',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./flags.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/flags/components/flags--container/flags.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./flags.component.scss */ "./src/app/modules/feature/flags/components/flags--container/flags.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_flags_flags_service__WEBPACK_IMPORTED_MODULE_2__["FlagsService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _services_error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]])
], FlagsComponent);



/***/ }),

/***/ "./src/app/modules/feature/flags/flags-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/feature/flags/flags-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FlagsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsRoutingModule", function() { return FlagsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_flags_container_flags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/flags--container/flags.component */ "./src/app/modules/feature/flags/components/flags--container/flags.component.ts");




const routes = [
    { path: '', component: _components_flags_container_flags_component__WEBPACK_IMPORTED_MODULE_3__["FlagsComponent"] }
];
let FlagsRoutingModule = class FlagsRoutingModule {
};
FlagsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], FlagsRoutingModule);



/***/ }),

/***/ "./src/app/modules/feature/flags/flags.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/feature/flags/flags.module.ts ***!
  \*******************************************************/
/*! exports provided: FlagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsModule", function() { return FlagsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_flags_container_flags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/flags--container/flags.component */ "./src/app/modules/feature/flags/components/flags--container/flags.component.ts");
/* harmony import */ var _flags_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flags-routing.module */ "./src/app/modules/feature/flags/flags-routing.module.ts");
/* harmony import */ var _services_flags_flags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/flags/flags.service */ "./src/app/modules/feature/flags/services/flags/flags.service.ts");
/* harmony import */ var _shared_button_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/button/button.module */ "./src/app/modules/shared/button/button.module.ts");







let FlagsModule = class FlagsModule {
};
FlagsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_flags_container_flags_component__WEBPACK_IMPORTED_MODULE_3__["FlagsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _flags_routing_module__WEBPACK_IMPORTED_MODULE_4__["FlagsRoutingModule"],
            _shared_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]
        ],
        providers: [
            _services_flags_flags_service__WEBPACK_IMPORTED_MODULE_5__["FlagsService"]
        ]
    })
], FlagsModule);



/***/ })

}]);
//# sourceMappingURL=modules-feature-flags-flags-module-es2015.js.map