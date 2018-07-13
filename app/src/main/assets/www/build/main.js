webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_no__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_folha__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, speechRecognition, toastCtrl) {
        this.navCtrl = navCtrl;
        this.speechRecognition = speechRecognition;
        this.toastCtrl = toastCtrl;
        var consulta = new __WEBPACK_IMPORTED_MODULE_2__modules_no__["a" /* No */]("PROCESSO", "nav > consulta");
        var processo = new __WEBPACK_IMPORTED_MODULE_2__modules_no__["a" /* No */]("NÚMERO", "pesquisa o processo pelo numero");
        var oab = new __WEBPACK_IMPORTED_MODULE_2__modules_no__["a" /* No */]("OAB", "pesquisa o processo pelo oab ");
        var parte = new __WEBPACK_IMPORTED_MODULE_2__modules_no__["a" /* No */]("PARTE", "pesquisa o processo pelo nome");
        var detalhe = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("DETALHE", "nav > detalhe", "PROCESSO");
        var nome = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("PARTES", "nav > parte", "PROCESSO");
        var movimentacao = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("MOVIMENTAÇÃO", "nav > movimentação", "PROCESSO");
        var oab_detalhe = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("DETALHE", "nav > detalhe", "OAB");
        var oab_nome = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("PARTES", "nav > parte", "OAB");
        var oab_movimentacao = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("MOVIMENTAÇÃO", "nav > movimentação", "OAB");
        var parte_detalhe = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("DETALHE", "nav > detalhe", "PARTE");
        var parte_nome = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("PARTES", "nav > parte", "PARTE");
        var parte_movimentacao = new __WEBPACK_IMPORTED_MODULE_3__modules_folha__["a" /* Folha */]("MOVIMENTAÇÃO", "nav > movimentação", "PARTE");
        processo.add(movimentacao);
        processo.add(detalhe);
        processo.add(parte);
        oab.add(oab_detalhe);
        oab.add(oab_movimentacao);
        oab.add(oab_nome);
        parte.add(parte_movimentacao);
        parte.add(parte_detalhe);
        parte.add(parte_nome);
        consulta.add(processo);
        consulta.add(oab);
        consulta.add(nome);
        this.composite = consulta;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission()
                    .then(function () { return console.log("Feito"); }, function () { return console.log("Erro"); });
            }
        });
    };
    HomePage.prototype.start = function () {
        var _this = this;
        console.log(this.composite.mensagem("Processo"));
        this.speechRecognition.startListening()
            .subscribe(function (matches) {
            var mens = matches[0];
            console.log();
            _this.texte = matches[0];
            _this.composite.mensagem(mens.toUpperCase());
            _this.toastShow(matches[0]);
        }, function (onerror) { return console.log('error', onerror); });
    };
    HomePage.prototype.toastShow = function (ob) {
        var toast = this.toastCtrl.create({
            message: ob,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/mnt/0eae5fa5-5056-473f-b019-9a2791ca5196/ionic/arvore-decisao/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Teste de Árvore de decisão\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="bar bar-header item-input-inset">\n    <label class="item-input-wrapper">\n      <i class="icon ion-ios-search placeholder-icon"></i>\n      <input type="search" [(ngModel)]=texte placeholder="Pesquisar">\n    </label>\n    <button class="button button-clear" (click)="start()">\n      Buscar\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/mnt/0eae5fa5-5056-473f-b019-9a2791ca5196/ionic/arvore-decisao/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Composite; });
var Composite = /** @class */ (function () {
    function Composite() {
        this.codigo = "";
    }
    Composite.prototype.add = function (composite) { };
    ;
    return Composite;
}());

//# sourceMappingURL=composite.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__ = __webpack_require__(195);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/mnt/0eae5fa5-5056-473f-b019-9a2791ca5196/ionic/arvore-decisao/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/mnt/0eae5fa5-5056-473f-b019-9a2791ca5196/ionic/arvore-decisao/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return No; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composite__ = __webpack_require__(194);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var No = /** @class */ (function (_super) {
    __extends(No, _super);
    function No(palavra, acao) {
        var _this = _super.call(this) || this;
        _this.no = new Array();
        _this.palavra = palavra.toUpperCase();
        _this.acao = acao.toUpperCase();
        return _this;
    }
    No.prototype.mensagem = function (obj) {
        this.texto = obj.toUpperCase();
        if ((obj.search(this.palavra) == -1)) {
            for (var _i = 0, _a = this.no; _i < _a.length; _i++) {
                var x = _a[_i];
                var composite = x;
                composite.mensagem(obj);
            }
        }
        else {
            console.log("Exculta acao nó: " + this.acao);
            for (var _b = 0, _c = this.no; _b < _c.length; _b++) {
                var x = _c[_b];
                var composite = x;
                composite.mensagem(this.texto);
            }
        }
    };
    No.prototype.add = function (composite) {
        this.no.push(composite);
        return this.no;
    };
    ;
    return No;
}(__WEBPACK_IMPORTED_MODULE_0__composite__["a" /* Composite */]));

//# sourceMappingURL=no.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Folha; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composite__ = __webpack_require__(194);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Folha = /** @class */ (function (_super) {
    __extends(Folha, _super);
    function Folha(palavra, acao, no) {
        var _this = _super.call(this) || this;
        _this.palavra = palavra.toUpperCase();
        _this.acao = acao.toUpperCase();
        _this.no = no;
        return _this;
    }
    Folha.prototype.mensagem = function (mensagem) {
        if (((mensagem.search(this.palavra)) != -1) && mensagem.search(this.no) != -1) {
            console.log("Acao: " + this.acao);
        }
    };
    return Folha;
}(__WEBPACK_IMPORTED_MODULE_0__composite__["a" /* Composite */]));

//# sourceMappingURL=folha.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map