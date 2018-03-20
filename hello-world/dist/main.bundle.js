webpackJsonp(["main"],{

/***/ "../../../../../assignment/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\ninput.form-control {\n  margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n  margin-bottom: 2em;\n}\na:hover{\n  text-decoration: none;\n}\n.cl-container-padding {\n  /*padding-top: 10%;*/\n  padding-bottom: 10%;\n}\n.cl-blue-navbar{\n  background-color: #337ab7;\n}\n.cl-text-white{\n  color: #fff;\n}\n.cl-text-black{\n  color: #000000;\n}\n.cl-text-bold{\n  font-weight: bold;\n}\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cl-header-padding{\n  padding-left: 5%;\n}\n.cl-full-width{\n  width: 100%;\n}\n.cl-widget-list-item{\n  padding-bottom: 20px;\n}\n.cl-v-divider{\n  border-right: 1px solid #808080;\n  height: 100%;\n}\n.cl-widget-heading{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.cl-height{\n  height: 100%;\n  min-height: 100%;\n}\n.cl-relative-position{\n  position: relative;\n}\n.cl-absolute-position{\n\n  position: absolute;\n}\n.cl-widget-list-icons{\n  top: 0px;\n  right: 0px;\n  z-index: 10;\n  background-color: white;\n}\n.cl-zero-right-padding{\n  padding-right: 0px;\n}\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n.cl-widget-images{\n  display: inline;\n  width: 85%;\n  z-index: 100;\n  position: relative;\n}\n.borders {\n  border-left: 2px solid #ddd;\n  margin: -20px;\n  height: 90vh;\n  left: 20px;\n}\n.cl-group-padding {\n  padding-top: 1.5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <!--<meta charset=\"utf-8\">-->\n  <!--<title>HelloWorld</title>-->\n  <!--<base href=\"/\">-->\n\n  <!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">-->\n  <!--<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">-->\n\n  <meta charset=\"UTF-8\">\n  <title>Login Page</title>\n  <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n</head>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

// add root defined here


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_users_login_login_component__ = __webpack_require__("../../../../../src/app/views/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_users_profile_profile_component__ = __webpack_require__("../../../../../src/app/views/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_users_register_register_component__ = __webpack_require__("../../../../../src/app/views/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__assignment_directives_sortable_directive__ = __webpack_require__("../../../../../assignment/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__views_users_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_users_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__views_users_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__assignment_directives_sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_28__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26_ngx_quill_editor__["a" /* QuillEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_22__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_23__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_24__services_widget_service_client__["a" /* WidgetService */], { provide: __WEBPACK_IMPORTED_MODULE_25__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__ = __webpack_require__("../../../../../src/app/views/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_users_profile_profile_component__ = __webpack_require__("../../../../../src/app/views/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_users_register_register_component__ = __webpack_require__("../../../../../src/app/views/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__views_users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_2__views_users_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_5__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_4__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__views_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgId', component: __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(pid, name, websiteId, title) {
        this.pid = pid;
        this.name = name;
        this.websiteId = websiteId;
        this.title = title;
    }
    return Page;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    // constructor(uid, username, password, firstName = '', lastName = '', email = '') {
    function User(uid, username, password, firstName, lastName, email) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(wid, name, developerId, description) {
        this.wid = wid;
        this.name = name;
        this.developId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = /** @class */ (function () {
    // constructor(wgId, widgetType, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
    function Widget(wgId, widgetType, pageId, size, text, width, url, formatted) {
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        if (formatted === void 0) { formatted = false; }
        this.wgId = wgId;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.url = url;
        this.width = width;
        this.formatted = formatted;
    }
    return Widget;
}());



/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting Http service into PageService
var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page').map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (page) {
        return this.http.put(this.baseUrl + '/api/page/' + page.pid, page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId).map(function (res) {
            return res.json();
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting Http service into UserService
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user/', user).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + '/api/user/' + user.uid, user).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting Http service into WebsiteService
var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website').map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (website) {
        return this.http.put(this.baseUrl + '/api/website/' + website.wid, website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId).map(function (res) {
            return res.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting Http service into WidgetService
var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetByPage = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget').map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widget.wgId, widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.reorderWidget = function (pageId, initial, final) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + initial + '&final=' + final;
        return this.http.put(url, '').map(function (res) {
            return res.json();
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "../../../../../src/app/views/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"../\" class=\"btn btn-link cl-icon-padding cl-text-black\" (click)=\"f.ngSubmit.emit()\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Edit Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit)=\"updatePage()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\"\n             name=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"{{page.name}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\"\n             name=\"title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"{{page.title}}\"/>\n    </div>\n  </form>\n  <a routerLink=\"../\" (click)=\"deletePage()\" class=\"btn btn-danger  btn-block\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <!--<div class=\"pull-right navbar-text\">-->\n      <!--<a href=\"../../..\" class=\"cl-icon-padding\">-->\n        <!--<span class=\"glyphicon glyphicon-user\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(router, pageService, route) {
        this.router = router;
        this.pageService = pageService;
        this.route = route;
        this.pages = [];
        this.page = new __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__["a" /* Page */]('', '', '', '');
    }
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.pageService.updatePage(this.page).subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.page.pid).subscribe(function (page) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pid = params['pid'];
            // this.uid = params['uid'];
            // this.wid = params['wid'];
            return _this.pageService.findPageById(_this.pid).subscribe(function (page) {
                _this.page = page;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("../../../../../src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"./new\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-plus\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Pages\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <div *ngFor=\"let page of pages\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"./{{page.pid}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n        <a routerLink=\"./{{page.pid}}/widget\">{{page.name}}</a>\n      </li>\n    </div>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wid = params['wid'];
            return _this.pageService.findPageByWebsiteId(_this.wid).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("../../../../../src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"../\" class=\"cl-icon-padding cl-text-black\" (click)=\"f.ngSubmit.emit()\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      New Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit)=\"createPage()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\"\n             name=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\"\n             name=\"title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <!--<div class=\"pull-right navbar-text\">-->\n      <!--<a href=\"../../../..\" class=\"cl-icon-padding\">-->\n        <!--<span class=\"glyphicon glyphicon-user\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(router, pageService, route) {
        this.router = router;
        this.pageService = pageService;
        this.route = route;
        this.pages = [];
    }
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.pageService.createPage(this.wid, this.page).subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
        // this.page.name = this.pageForm.value.name;
        // this.page.title = this.pageForm.value.title;
        // this.page.websiteId = this.websiteId;
        // this.pageService.createPage(this.websiteId, this.page);
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.page = new __WEBPACK_IMPORTED_MODULE_2__models_page_model_client__["a" /* Page */]('', '', _this.wid, '');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("../../../../../src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <!--<label>Username</label>-->\n    <input type=\"text\"\n           class=\"form-control\"\n           placeholder=\"username\"\n           name=\"username\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Username missing!\n    </span>\n\n    <!--<label>Password</label>-->\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"password\"\n           name=\"password\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Password missing!\n    </span>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <button class=\"btn btn-success btn-block\" type=\"button\" (click)=\"register()\">Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        // alert(this.username);
        this.userService.findUserByCredentials(this.username, this.password).subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['/user', user.uid]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/views/users/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-blue-navbar\">\n  <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n    Profile\n  </a>\n\n  <button  class=\"btn btn-link navbar-link navbar-text pull-right cl-text-white cl-icon-padding\" (click)=\"f.ngSubmit.emit()\">\n    <span class=\"glyphicon glyphicon-ok\"></span>\n  </button>\n</nav>\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"updateUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\"\n             type=\"text\"\n             name=\"username\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder=\"Username\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)]=\"user.email\"\n             name=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder=\"xxxxxx@xxx.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             type=\"text\"\n             name=\"firstName\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder=\"Russel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder=\"Westbrook\">\n    </div>\n\n    <button routerLink=\"/user/{{user.uid}}/website\" class=\"btn btn-success btn-block\" type=\"button\">Website</button>\n    <button (click)=\"logout()\" class=\"btn btn-primary btn-block\" type=\"button\">Logout</button>\n    <button (click)=\"deleteUser()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService, route) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('', '', '', '', '', '');
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.user).subscribe(function (user) {
            _this.user = user;
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.userService.deleteUser(_this.uid).subscribe(function (data) {
                _this.router.navigate(['/login']);
            });
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            return _this.userService.findUserById(_this.uid).subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */])
    ], ProfileComponent.prototype, "LoginForm", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/views/users/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"pwNotMatch\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <!--<label>UserName</label>-->\n    <input type=\"text\"\n           class=\"form-control\"\n           placeholder=\"username\"\n           name=\"username\"\n           id=\"username\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n\n    <!--<label>Password</label>-->\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"password\"\n           name=\"password\"\n           id=\"password\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n\n    <!--<label>Verify Password</label>-->\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"verify password\"\n           name=\"verifypw\"\n           id=\"verifypw\"\n           ngModel\n           required\n           #verifypw=\"ngModel\"/>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\n    <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"login()\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.pwNotMatch = false;
        this.errorMsg = 'Passwords don\'t match!';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifypw = this.registerForm.value.verifypw;
        if (this.password !== this.verifypw) {
            this.pwNotMatch = true;
            return;
        }
        var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', this.username, this.password, '', '', '');
        this.userService.createUser(newUser).subscribe(function (user) {
            _this.router.navigate(['/user', user.uid]);
        });
    };
    RegisterComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/views/users/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-blue-navbar\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"../\" class=\"navbar-link cl-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Websites\n        </a>\n        <a routerLink=\"../new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Edit Websites\n        </a>\n        <button routerLink=\"../\" class=\"btn btn-link navbar-link navbar-text pull-right cl-text-white cl-icon-padding\"\n                (click)=\"f.ngSubmit.emit()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"contain-fluid\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group cl-list-group-borderless\" >\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink=\"../{{website.wid}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          <a routerLink=\"../{{website.wid}}/page\">{{website.name}}</a>\n        </li>\n      </div>\n    </ul>\n  </div>\n\n\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 borders cl-group-padding\">\n    <form (ngSubmit)=\"updateWebsite()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"website.name\"\n               name=\"name\"\n               type=\"text\"\n               class=\"form-control\"\n               id=\"website-name\"\n               placeholder=\"{{website.name}}\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\"\n                  id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  name=\"description\"\n                  placeholder=\"{{website.description}}\"></textarea>\n      </div>\n      <a routerLink=\"../\" (click)=\"deleteWebsite()\" class=\"btn btn-danger  btn-block\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(router, websiteService, route) {
        this.router = router;
        this.websiteService = websiteService;
        this.route = route;
        this.websites = [];
        this.website = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */]('', '', '', '');
    }
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.website).subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.website.wid).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.websiteService.findWebsitesById(_this.wid).subscribe(function (website) {
                _this.website = website;
            });
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(params['uid']).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("../../../../../src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar cl-blue-navbar\">\n    <!--nav bar 改下-->\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-left\">\n        <a routerLink=\"../\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-white\"></span>\n        </a>\n      </p>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        <span style=\"color: white; \">Website</span>\n      </a>\n      <a routerLink=\"./new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink=\"./{{website.wid}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          <a routerLink=\"./{{website.wid}}/page\">{{website.name}}</a>\n        </li>\n      </div>\n    </ul>\n  </div>\n\n  <nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fuild\">\n      <a routerLink=\"../\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(domSanitizer, websiteService, activatedRoute) {
        this.domSanitizer = domSanitizer;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            return _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("../../../../../src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-blue-navbar\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"../\" class=\"navbar-link cl-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Website\n        </a>\n        <a routerLink=\"../new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          New Websites\n        </a>\n        <button routerLink=\"../\" class=\"btn btn-link navbar-link navbar-text pull-right cl-text-white cl-icon-padding\"\n                (click)=\"f.ngSubmit.emit()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink=\"../{{website.uid}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          <a routerLink=\"../{{website.uid}}/page\">{{website.name}}</a>\n        </li>\n      </div>\n    </ul>\n  </div>\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 borders cl-group-padding\">\n    <form (ngSubmit)=\"createWebsite()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input [(ngModel)]=\"website.name\"\n               name=\"name\"\n               type=\"text\"\n               class=\"form-control\"\n               id=\"website-name\"\n               placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea [(ngModel)]=\"website.description\"\n                  name=\"description\"\n                  id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Description\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(router, websiteService, route) {
        this.router = router;
        this.websiteService = websiteService;
        this.route = route;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.websiteService.createWebsite(this.uid, this.website).subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.website = new __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__["a" /* Website */]('', '', _this.uid, '');
            return _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("../../../../../src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./header\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./html\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./text\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./image\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./youtube\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\".\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a href=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () { };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());

/*
export class WidgetChooserComponent implements OnInit {
  widget: Widget;
  widgets = [];
  pid: String;
  uid: String;
  wid: String;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {}

  createWidget() {
    this.widgetService.createWidget(this.pid, this.widget).subscribe(
      (widget: Widget) => {
        this.widget = widget;
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.widget.wgId]);
      }
    );
  }



  // create(widgetType: String) {
  //   this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pageId, 'widget', 'new', widgetType ]);
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pid = params['pid'];
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.widget = new Widget('', '', this.pid, '', '', '', '');
      return this.widgetService.findWidgetByPage(this.pid).subscribe(
        (widgets: Widget[]) => {
          this.widgets = widgets;
      });
    });

    //
    // this.activatedRoute.params.subscribe(params => {
    //   this.pageId = params['pid'];
    // });
    // this.widgets = this.widgetService.findWidgetByPage(this.pageId);
  }
}
*/


/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADER'\"> <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\"> <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\"> <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'TEXT'\"> <app-widget-text></app-widget-text>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\"> <app-widget-html></app-widget-html>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', '', '', '', '', '', '', false);
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgId = params['wgId'];
            return _this.widgetService.findWidgetById(_this.wgId).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"../\" class=\"btn btn-link cl-icon-padding cl-text-black\" (click)=\"f.ngSubmit.emit()\" [disabled]=\"!f.valid\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             name=\"text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-text\"\n             placeholder=\"{{widget.text}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget.size\"\n             name=\"size\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-size\"\n             placeholder=\"{{widget.size}}\">\n    </div>\n  </form>\n  <a routerLink=\"../\" (click)=\"delete()\" class=\"btn btn-danger  btn-block\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'HEADER', this.pid, '', '', '', '', false);
    }
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        if (this.wgId === undefined) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
        else {
            this.widgetService.updateWidget(this.widget).subscribe(function () {
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
    };
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgId = params['wgId'];
            if (_this.wgId !== undefined) {
                return _this.widgetService.findWidgetById(_this.wgId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"../\" class=\"btn btn-link cl-icon-padding cl-text-black\" (click)=\"f.ngSubmit.emit()\" [disabled]=\"!f.valid\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </button>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"updateHtml()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"text-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"text-name\"\n             placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"html-editor\">HTML</label>\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"text\" id=\"html-editor\" [ngModelOptions]=\"{standalone: true}\"></quill-editor>\n    </div>\n\n    <div class=\"from-group\">\n      <button (click)=\"deleteHtml()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'HTML', this.pid, '', '', '', '', false);
    }
    WidgetHtmlComponent.prototype.updateHtml = function () {
        var _this = this;
        if (this.wgId === undefined) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
        else {
            this.widgetService.updateWidget(this.widget).subscribe(function () {
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
    };
    WidgetHtmlComponent.prototype.deleteHtml = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgId = params['wgId'];
            if (_this.wgId === undefined) {
                _this.widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'HTML', _this.pid, '', '', '', '', false);
            }
            else {
                return _this.widgetService.findWidgetById(_this.wgId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], WidgetHtmlComponent.prototype, "widgetForm", void 0);
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"../\" (click)=\"f.ngSubmit.emit()\" [disabled]=\"!f.valid\" class=\"btn btn-link cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             name=\"text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-text\"\n             placeholder=\"{{widget.text}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\"\n             name=\"url\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             required\n             placeholder=\"{{widget.url}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\"\n             name=\"width\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-width\"\n             placeholder=\"{{widget.width}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myFile\">Upload</label>\n      <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\" id=\"myFile\"  type=\"file\" class=\"form-control\"/>\n        <input  name=\"widgetId\" value=\"{{wgId}}\" style=\"display: none\"/>\n        <input  name=\"pageId\" value=\"{{pid}}\" style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{wid}}\" style=\"display: none\"/>\n        <input  name=\"userId\" value=\"{{uid}}\" style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      </form>\n    </div>\n  </form>\n  <button (click)=\"delete()\" class=\"btn btn-link btn btn-danger btn-block\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a href=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', 'IMAGE', this.pid, '', '', '', '', false);
    }
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        if (this.wgId === undefined) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
        else {
            this.widgetService.updateWidget(this.widget).subscribe(function () {
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.pid = params['pid'];
            _this.wid = params['wid'];
            _this.wgId = params['wgId'];
            if (_this.wgId !== undefined) {
                return _this.widgetService.findWidgetById(_this.wgId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    // 多余？
    WidgetImageComponent.prototype.upload = function () {
        var _this = this;
        this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            console.log(_this.widget);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"../\" class=\"btn btn-link cl-icon-padding cl-text-black\" (click)=\"f.ngSubmit.emit()\" [disabled]=\"!f.valid\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </button>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"updateText()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"text-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"text-name\"\n             placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             name=\"text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"text-text\"\n             placeholder=\"{{widget.text}}\"\n             [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text-rows\">Rows</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"text-rows\"\n             placeholder=\"Rows\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"text-placeholder\">Placeholder</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"text-placeholder\"\n             placeholder=\"Placeholder\">\n    </div>\n\n    <div class=\"input-group\">\n      <input type=\"text\"\n             readonly\n             value=\"Formatted\"\n             class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"/></span>\n    </div>\n\n    <div class=\"from-group\">\n      <button (click)=\"deleteText()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'TEXT', this.pid, '', '', '', '', false);
    }
    WidgetTextComponent.prototype.updateText = function () {
        var _this = this;
        if (this.wgId === undefined) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
        else {
            this.widgetService.updateWidget(this.widget).subscribe(function () {
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
    };
    WidgetTextComponent.prototype.deleteText = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgId = params['wgId'];
            if (_this.wgId !== undefined) {
                return _this.widgetService.findWidgetById(_this.wgId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], WidgetTextComponent.prototype, "widgetForm", void 0);
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <button routerLink=\"../\" (click)=\"f.ngSubmit.emit()\" [disabled]=\"!f.valid\" class=\"btn btn-link cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n      </button>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit)=\"update()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             name=\"text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-text\"\n             placeholder=\"{{widget.text}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\"\n             name=\"url\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-URL\"\n             placeholder=\"{{widget.url}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\"\n             name=\"width\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-width\"\n             placeholder=\"{{widget.width}}\">\n    </div>\n  </form>\n  <button routerLink=\"../\" (click)=\"delete()\" class=\"btn btn-danger btn-block\" href=\"#\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a href=\"../../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__["a" /* Widget */]('', 'YOUTUBE', this.pid, '', '', '', '', false);
    }
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        if (this.wgId === undefined) {
            this.widgetService.createWidget(this.pid, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
        else {
            this.widgetService.updateWidget(this.widget).subscribe(function () {
                _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
                // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            });
        }
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget.wgId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgId = params['wgId'];
            _this.pid = params['pid'];
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            if (_this.wgId !== undefined) {
                _this.activatedRoute.params.subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"./new\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-plus\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container container-padding\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n<div *ngFor=\"let widget of widgets\" class=\"container cl-container-padding\">\n  <div [ngSwitch]=\"widget.widgetType\">\n\n    <div *ngSwitchCase=\"'HEADER'\">\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"./{{widget.wgId}}\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n        <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n        <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n        <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <div>\n        <a class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"./{{widget.wgId}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <img class=\"img-responsive img-rounded cl-widget-images\"\n             src=\"{{widget.url}}\">\n      </div>\n    </div>\n\n\n    <div *ngSwitchCase=\"'YOUTUBE'\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe width=\"640\" height=\"360\" [src]=getURL(widget.url) frameborder=\"0\" allowfullscreen></iframe>\n        <a class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\" style=\"background-color: white\"></span>\n        </a>\n        <a routerLink=\"./{{widget.wgId}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\" style=\"background-color: white\"></span>\n        </a>\n      </div>\n    </div>\n\n\n    <div *ngSwitchCase=\"'TEXT'\">\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"./{{widget.wgId}}\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      {{widget.text}}\n    </div>\n\n    <div *ngSwitchCase=\"'HTML'\">\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"./{{widget.wgId}}\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <div [innerHTML]=\"widget.text\"></div>\n    </div>\n\n  </div>\n</div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"../../../../..\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n\n    <div class=\"pull-left navbar-text\">\n      <a routerLink=\".\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n      <a routerLink=\".\" class=\"cl-icon-padding cl-text-black\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(domSanitizer, activatedRoute, widgetService) {
        this.domSanitizer = domSanitizer;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widgets = [];
    }
    WidgetListComponent.prototype.getURL = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pid = params['pid'];
            return _this.widgetService.findWidgetByPage(_this.pid).subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        this.widgetService.reorderWidget(this.pid, indexes.startIndex, indexes.endIndex)
            .subscribe(function (data) { return console.log(data); });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:4200'
    // baseUrl: 'https://cs5610-webdev-jiawei-zhang.herokuapp.com';
};
// ng build
// node server.js


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map