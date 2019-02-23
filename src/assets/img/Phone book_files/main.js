(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _important_important_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./important/important.component */ "./src/app/important/important.component.ts");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-page/book-page.component */ "./src/app/book-page/book-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    },
    {
        path: "Important numbers", component: _important_important_component__WEBPACK_IMPORTED_MODULE_3__["ImportantComponent"]
    },
    {
        path: "My phone book", component: _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_4__["BookPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--The content below is only a placeholder and can be replaced.-->\n  <div style=\"text-align: center\">\n \n\n  <navbar></navbar>\n  <header>\n    <hero></hero>\n  </header>\n  <div class=\"container-fluid\">\n\n<router-outlet></router-outlet>\n\n</div>\n<foot>\n  \t\t\n  \t</foot>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'phone';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _important_important_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./important/important.component */ "./src/app/important/important.component.ts");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-page/book-page.component */ "./src/app/book-page/book-page.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _shared_book_page_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/book-page.service */ "./src/app/shared/book-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _important_important_component__WEBPACK_IMPORTED_MODULE_8__["ImportantComponent"],
                _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_9__["BookPageComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_14__["BookListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"]
            ],
            providers: [_shared_book_page_service__WEBPACK_IMPORTED_MODULE_15__["BookPageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookListComponent = /** @class */ (function () {
    function BookListComponent() {
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-page/book-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-page/book-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-page/book-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-page/book-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-lg-2 col-md-2\">\n                <!-- We will build this form using ReactiveForm based on the property \"form\" inside customerservice.ts  -->\n                \n                <form [formGroup]=\"this.BookPageService.form\">\n                        <input type=\"hidden\" formControlName=\"$key\"><!-- this is a primary key for each record of customer and after that we can display the active form control-->\n                        <div class=\"form-group\">\n                                <label>First Name</label>\n                                <input formControlName=\"fullName\" class=\"form-control\"><!-- the value of the formControlName must match the name that we provided inside FormGroup in CustomerService class -->\n\n                        </div>\n                        <div class=\"form-group\">\n                                <label>Last Name</label>\n                                <input formControlName=\"email\" class=\"form-control\">\n                        </div>\n                    \n\n                    \t\n                        <div class=\"form-group\">\n                                <label>Phone Number</label>\n                                <input formControlName=\"mobile\" class=\"form-control\">\n                        </div>\n                        \n                        <div class=\"form-group\">\n                                <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"><!-- the value of the formControlName must match the name that we provided inside FormGroup in CustomerService class -->\n\n                        </div>\n                    </div>\n                </form>\n        \n        <div class=\"col-lg-7 col-md-2\">\n                <app-book-list></app-book-list>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/book-page/book-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-page/book-page.component.ts ***!
  \**************************************************/
/*! exports provided: BookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageComponent", function() { return BookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/book-page.service */ "./src/app/shared/book-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookPageComponent = /** @class */ (function () {
    function BookPageComponent(BookPageService) {
        this.BookPageService = BookPageService;
    }
    BookPageComponent.prototype.ngOnInit = function () {
    };
    BookPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'book-page',
            template: __webpack_require__(/*! ./book-page.component.html */ "./src/app/book-page/book-page.component.html"),
            styles: [__webpack_require__(/*! ./book-page.component.css */ "./src/app/book-page/book-page.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_book_page_service__WEBPACK_IMPORTED_MODULE_1__["BookPageService"]])
    ], BookPageComponent);
    return BookPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFoot{\n\tbackground-color: #222222;\n\tcolor: white;\n\tpadding-bottom: 50px;\n\tpadding-top: 20px;\n}\n\n#myFoot p{\n\tfont-size: 12pt\n}\n\n/* animation effect for Icons in the footer */\n\n.icons{\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding-top: 50px;\n}\n\n.icons li{\n\tlist-style: none;\n\twidth: 60px;\n\theight: 60px;\n\tmargin: 0 30px;\n\t-webkit-transform: rotate(-30deg) skew(25deg);\n\t        transform: rotate(-30deg) skew(25deg);\n\tbackground: #222222;\n}\n\nul li span{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #000;\n\ttransition: 0.5s;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tfont-size: 30pt !important;\n}\n\nul li:hover span:nth-child(5)\n{\n\t-webkit-transform: translate(40px,-40px);\n\t        transform: translate(40px,-40px);\n\topacity: 1;\n}\n\nul li:hover span:nth-child(4)\n{\n\t-webkit-transform: translate(30px,-30px);\n\t        transform: translate(30px,-30px);\n\topacity: 0.8;\n}\n\nul li:hover span:nth-child(3)\n{\n\t-webkit-transform: translate(20px,-20px);\n\t        transform: translate(20px,-20px);\n\topacity: 0.6;\n}\n\nul li:hover span:nth-child(2)\n{\n\t-webkit-transform: translate(10px,-10px);\n\t        transform: translate(10px,-10px);\n\topacity: 0.4;\n}\n\nul li:hover span:nth-child(1)\n{\n\t-webkit-transform: translate(0,0);\n\t        transform: translate(0,0);\n\topacity: 0.2;\n}\n\nul li:nth-child(1) span{\n\tbackground:  #3b5999;\n}\n\nul li:nth-child(2) span{\n\t  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n          /* Also define standard property for compatibility */\n  background-clip: background;\n  \n \n}\n\nul li:nth-child(3) span{\n\tbackground:  #3AA1F2;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer  id=\"myFoot\" class=\"footer-wrapper\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div id=\"CF\" class=\"col-lg-6 col-lg-offset-3\">\n                            \n                        </div>\n                    </div>\n                        <div class=\"row\">\n                        <div class=\"col-md-12 col-sm-2\">\n                            <p class=\"copy\">&copy; Anes. <br>All rights reserved.</p>\n                            <ul class=\"icons\">\n                                <li>\n                                    <a href=\"#\">\n                                        <span></span>\n                                        <span></span>\n                                        <span></span>\n                                        <span class=\"fa fa-facebook\" aria-hidden=\"true\"></span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        <span></span>\n                                        <span></span>\n                                        <span></span>\n                                        <span class=\"fa fa-instagram\" aria-hidden=\"true\"></span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        <span></span>\n                                        <span></span>\n                                        <span></span>\n                                        <span class=\"fa fa-twitter\" aria-hidden=\"true\"></span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        </div>\n                </div>\n            </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'foot',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero/hero.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n\tposition: relative;\n\tbackground: url('telefon.jpg') no-repeat center center;\n\theight: 900px;\t \n    color: #EBEBEB;\n    background-size: cover;\n    margin: 0;\n    padding: 0;\n}\n/* rain animations inserted*/\n.rain{\n\theight: 900px;\n\tbackground: url('rain.png');\n\t-webkit-animation: rain .3s linear infinite;\n\t        animation: rain .3s linear infinite;\n}\n.rain:before{\n\twidth: 100%;\n\theight: 100%;\n}\n@-webkit-keyframes rain{\n\t0%{\n\t\tbackground-position: 0% 0%;\n\t}\n\t100%{\n\t\tbackground-position: 20% 100%;\n\t}\n}\n@keyframes rain{\n\t0%{\n\t\tbackground-position: 0% 0%;\n\t}\n\t100%{\n\t\tbackground-position: 20% 100%;\n\t}\n}\nh1{\n\t\n\t-webkit-transform: translateY(-600px);\n\t\n\t        transform: translateY(-600px);\n\tfont-size: 50pt;\n\t text-shadow: 4px 4px red;\n\t transition: ease-in 0.5s;\n}\nh1:hover{\n\t\n\ttransition: ease-out 0.5s;\n\tfont-size: 60pt;\n}\n"

/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"container-fluid\">\n    <div class=\"rain\"></div>\n <h1><i class=\"fa fa-address-book\" aria-hidden=\"true\"></i> Phone book</h1>\n \n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/hero/hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail img{\n\twidth: 320px;\n\theight: 250px;\n\n}\n\n.thumbnail{\n\tbox-shadow: 4px 4px 4px 4px darkgrey;\n\tpadding-bottom: 50px;\n}\n\nh1{\n\tpadding-top: 20px;\n\tpadding-bottom: 50px;\n}\n\n.thumbnail img:hover{\n\ttransition: ease-in-out 0.5s;\n\t-webkit-transform:scale(1.2);\n\t        transform:scale(1.2);\n\n}\n\n.container-fluid{\n\tpadding-top: 50px;\n\tpadding-bottom: 60px;\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t\n\n<div class=\"row\">\n\t<h1>The new generation of phone books</h1>\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"src/assets/img/iphone.jpg\" alt=\"\">\n      <div class=\"caption\">\n        <h3>IOS Phone book</h3>\n        <p>Most people pack the default iPhone address book app — called Contacts — with tons of contact information. \tFrom phone numbers and mailing addresses to email addresses and instant messaging screen names, there's a lot of information to manage. While the Contacts app may seem pretty straightforward, there are some less well-known features that you should get to know...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Read more</a> \n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"src/assets/img/samsung.jpg\"  alt=\"\">\n      <div class=\"caption\">\n        <h3>Android Phone book</h3>\n        <p>To peruse your Android phone’s address book, open the People or Contacts app. You may find a launcher icon on the Home screen, but you’ll certainly find the app in the apps drawer.\n\n\t\tThe figure shows the People app on a typical Android phone. The address book on your phone may look subtly different, but most of the items illustrated in the figure should be there...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Read more</a> \n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"src/assets/img/telefonbuch.jpg\"  alt=\"...\">\n      <div class=\"caption\">\n        <h3>Old but gold</h3>\n        <p>WhitePages service covers over 90% of the US Adult population and includes more than 200M individuals. We just about have every US resident available to people online. If you have access to the internet, you don’t need a phone book.\nWe’ve been expanding our services into cell phones. You can now access our information on all iPhone, Android and BlackBerry phones...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Read more</a> \n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/important/important.component.css":
/*!***************************************************!*\
  !*** ./src/app/important/important.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n}\n.panel-info{\n\tbox-shadow: 4px 5px 5px 4px lightblue;\n}\n.table th{\n\ttext-align: center;\n}"

/***/ }),

/***/ "./src/app/important/important.component.html":
/*!****************************************************!*\
  !*** ./src/app/important/important.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\n<div class=\"panel panel-info\">\n  \n  <div class=\"panel-heading\"><h1>Important Numbers</h1></div>\n  <div class=\"panel-body\">\n    <h3>Emergency Phone Numbers</h3>\n  </div>\n\n  <!-- Table -->\n  <table class=\"table\">\n    <tr>\n    \t<th><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>Name</th>\n    \t<th><span class=\"glyphicon glyphicon-phone-alt\" aria-hidden=\"true\"></span> Number</th>\n    </tr>\n    <tr>\n    \t<td>Police</td>\n    \t<td>+43 133</td>\n    </tr>\n    <tr>\n    \t<td>Fire department</td>\n    \t<td>+43 122</td>\n    </tr>\n    <tr>\n    \t<td>Ambulance</td>\n    \t<td>+43 144</td>\n    </tr>\n    <tr>\n    \t<td>Air-Glaciers</td>\n    \t<td>+43 1414</td>\n    </tr>\n  </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/important/important.component.ts":
/*!**************************************************!*\
  !*** ./src/app/important/important.component.ts ***!
  \**************************************************/
/*! exports provided: ImportantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportantComponent", function() { return ImportantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImportantComponent = /** @class */ (function () {
    function ImportantComponent() {
    }
    ImportantComponent.prototype.ngOnInit = function () {
    };
    ImportantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'important-page',
            template: __webpack_require__(/*! ./important.component.html */ "./src/app/important/important.component.html"),
            styles: [__webpack_require__(/*! ./important.component.css */ "./src/app/important/important.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImportantComponent);
    return ImportantComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar navbar-inverse navbar{\n\tfont-size:20pt;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n   <div class=\"container-fluid\">\n       <div class=\"navbar-header\">\n           <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n               <span class=\"sr-only\">Toggle navigation</span>\n               <span class=\"icon-bar\"></span>\n               <span class=\"icon-bar\"></span>\n               <span class=\"icon-bar\"></span>\n           </button>\n           <a class=\"navbar-brand\" routerLink=\"/\">{{projectName}}</a>\n       </div>\n       <div id=\"navbar\" class=\"collapse navbar-collapse\">\n           <ul class=\"nav navbar-nav\">\n               <li><a routerLink=\"/\">Home</a></li>\n               <li><a routerLink=\"/Important numbers\">Important numbers</a></li>\n               <li><a routerLink=\"/My phone book\">My phone book</a></li>\n           </ul>\n       </div>\n       <!--/.nav-collapse -->\n   </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.projectName = "Phonebook Agency";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/book-page.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/book-page.service.ts ***!
  \*********************************************/
/*! exports provided: BookPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageService", function() { return BookPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookPageService = /** @class */ (function () {
    function BookPageService() {
    }
    BookPageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BookPageService);
    return BookPageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB9uJdYw-Xktmh78S4Z93n8phBNPSqobkQ",
        authDomain: "codereview07.firebaseapp.com",
        databaseURL: "https://codereview07.firebaseio.com",
        projectId: "codereview07",
        storageBucket: "codereview07.appspot.com",
        messagingSenderId: "758524494360"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/macbookair/Desktop/CodeReview07/FSWD60-Anes-CodeReview-07-Angular-Firebase/phone/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/macbookair/Desktop/CodeReview07/FSWD60-Anes-CodeReview-07-Angular-Firebase/phone/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map