(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "./src/app/keyboard/keyboard.component.ts");



class AppComponent {
    constructor() {
        this.title = 'EJ-ANG-900';
        this.description = 'A simple sythesizer built in Angular for your enjoyment';
    }
    onUpdate(e) {
        console.log(e);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 2, consts: [[3, "update"], ["href", "https://github.com/eljamez/EJ-ANG-900"], ["href", ""], ["href", "https://www.jamescript.com"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-keyboard", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function AppComponent_Template_app_keyboard_update_6_listener($event) { return ctx.onUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " keys will go in here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View On Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JameScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
    } }, directives: [_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_1__["KeyboardComponent"]], styles: ["[_nghost-%COMP%] {\n      }\n\n      footer[_ngcontent-%COMP%] {\n        color: white;\n        box-sizing: border-box;\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        max-height: 160px;\n      }\n\n      ul[_ngcontent-%COMP%] {\n        list-style: none;\n        padding: 0;\n      }\n\n      li[_ngcontent-%COMP%] {\n        display: inline-block;\n      }\n\n      p[_ngcontent-%COMP%] {\n      }\n\n      section[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        display: grid;\n        padding: 40px;\n        border-radius: 10px;\n        background-color: white;\n        background: linear-gradient(\n            to top,\n            rgba(128, 128, 128, 0.8) 0%,\n            rgba(230, 230, 250, 0.2) 2%,\n            rgba(230, 230, 250, 0.2) 98%,\n            rgba(128, 128, 128, 0.8) 100%\n          ),\n          linear-gradient(\n            to left,\n            rgba(128, 128, 128, 0.8) 0%,\n            rgba(230, 230, 250, 0.8) 1%,\n            rgba(230, 230, 250, 0.8) 99%,\n            rgba(128, 128, 128, 0.8) 100%\n          );\n        box-shadow: 0 1px 5px 0 black;\n      }\n\n      h1[_ngcontent-%COMP%] {\n        color: white;\n        text-shadow: 1px 1px 1px black;\n        margin: 0 0 10px;\n      }\n\n      p[_ngcontent-%COMP%] {\n        margin-top: 0;\n        margin-bottom: 20px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <main>
      <section>
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ description }}
        </p>
        <app-keyboard (update)="onUpdate($event)">
          keys will go in here
        </app-keyboard>
      </section>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/eljamez/EJ-ANG-900">View On Github</a>
          </li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
        <p>Built with <a href="https://www.jamescript.com">JameScript</a></p>
      </footer>
    </main>
  `,
                styles: [
                    `
      :host {
      }

      footer {
        color: white;
        box-sizing: border-box;
        display: grid;
        align-items: center;
        justify-items: center;
        max-height: 160px;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        display: inline-block;
      }

      p {
      }

      section {
        box-sizing: border-box;
        display: grid;
        padding: 40px;
        border-radius: 10px;
        background-color: white;
        background: linear-gradient(
            to top,
            rgba(128, 128, 128, 0.8) 0%,
            rgba(230, 230, 250, 0.2) 2%,
            rgba(230, 230, 250, 0.2) 98%,
            rgba(128, 128, 128, 0.8) 100%
          ),
          linear-gradient(
            to left,
            rgba(128, 128, 128, 0.8) 0%,
            rgba(230, 230, 250, 0.8) 1%,
            rgba(230, 230, 250, 0.8) 99%,
            rgba(128, 128, 128, 0.8) 100%
          );
        box-shadow: 0 1px 5px 0 black;
      }

      h1 {
        color: white;
        text-shadow: 1px 1px 1px black;
        margin: 0 0 10px;
      }

      p {
        margin-top: 0;
        margin-bottom: 20px;
      }
    `,
                ],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "./src/app/keyboard/keyboard.component.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes.service */ "./src/app/notes.service.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: 'notes', useClass: _notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"] }], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_3__["KeyboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_3__["KeyboardComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
                providers: [{ provide: 'notes', useClass: _notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/keyboard/keyboard.component.ts":
/*!************************************************!*\
  !*** ./src/app/keyboard/keyboard.component.ts ***!
  \************************************************/
/*! exports provided: KeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardComponent", function() { return KeyboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/Tone.js");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a2) { return { mousedown: a0, key: true, natural: a2 }; };
function KeyboardComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function KeyboardComponent_button_1_Template_button_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const key_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleMouseDown(key_r1); })("mouseup", function KeyboardComponent_button_1_Template_button_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleMouseUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.getGridStyles(key_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.isMouseDown(key_r1), ctx_r0.isNatural(key_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r1, " ");
} }
class KeyboardComponent {
    constructor(notes) {
        this.notes = notes;
        this.synthOptions = {
            oscillator: {
                frequency: 440,
                detune: 0,
                type: 'sine',
                phase: 0,
            },
            envelope: {
                attack: 0.005,
                decay: 0.1,
                sustain: 0.3,
                release: 1,
            },
        };
        this.synth = new tone__WEBPACK_IMPORTED_MODULE_1__["Synth"](this.synthOptions).toMaster();
        this.keyNoteMap = {
            a: 'c',
            w: 'cS',
            s: 'd',
            e: 'dS',
            d: 'e',
            f: 'f',
            t: 'fS',
            g: 'g',
            y: 'gS',
            h: 'a',
            u: 'aS',
            j: 'b',
        };
        this.gcsMap = {
            c: 1,
            cS: 3,
            d: 4,
            dS: 6,
            e: 7,
            f: 10,
            fS: 12,
            g: 13,
            gS: 15,
            a: 16,
            aS: 18,
            b: 19,
        };
        this.toneMap = {
            c: 'C4',
            cS: 'C#4',
            d: 'D4',
            dS: 'D#4',
            e: 'E4',
            f: 'F4',
            fS: 'F#4',
            g: 'G4',
            gS: 'G#4',
            a: 'A4',
            aS: 'A#4',
            b: 'B4',
        };
        this.activeKeys = [];
    }
    handleKeyboardEvent(event) {
        const pressedKey = this.keyNoteMap[event.key];
        const isActive = this.isNoteActive(pressedKey);
        if (event.type === 'keydown' && !isActive) {
            this.activeKeys.push(pressedKey);
            this.playNote(this.toneMap[pressedKey]);
        }
        if (event.type === 'keyup' && isActive) {
            this.activeKeys = this.activeKeys.filter((key) => key !== pressedKey);
        }
    }
    playNote(note) {
        this.synth.triggerAttackRelease(note, '8n');
    }
    isNatural(key) {
        return key.length === 1;
    }
    getGridStyles(key) {
        const isNatural = this.isNatural(key);
        const gs = isNatural ? '3' : '2';
        return `
    grid-column-start: ${this.gcsMap[key]};
    grid-row: 1 / ${gs};
    grid-column-end: span ${gs};
    z-index: ${!isNatural ? 10 : 1};
    `;
    }
    isNoteActive(activeKey) {
        return this.activeKeys.some((key) => activeKey === key);
    }
    isMouseDown(isDownKey) {
        return this.isNoteActive(isDownKey);
    }
    handleMouseDown(downKey) {
        this.playNote(this.toneMap[downKey]);
        this.activeKeys.push(downKey);
    }
    handleMouseUp() {
        this.activeKeys = [];
    }
    ngOnInit() { }
}
KeyboardComponent.ɵfac = function KeyboardComponent_Factory(t) { return new (t || KeyboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('notes')); };
KeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardComponent, selectors: [["app-keyboard"]], hostBindings: function KeyboardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function KeyboardComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup", function KeyboardComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 2, vars: 1, consts: [[1, "keyboard"], [3, "ngClass", "style", "mousedown", "mouseup", 4, "ngFor", "ngForOf"], [3, "ngClass", "mousedown", "mouseup"]], template: function KeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyboardComponent_button_1_Template, 2, 7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes.keys);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".keyboard[_ngcontent-%COMP%] {\n        display: grid;\n        padding: 0;\n        margin: 0;\n        min-height: 40vh;\n        grid-template-rows: 2fr 1fr;\n        grid-template-columns: repeat(21, 1fr);\n      }\n\n      .key[_ngcontent-%COMP%] {\n        border: none;\n        border-bottom: 2px solid gray;\n        border-radius: 0 0 10px 10px;\n        background-color: DimGray;\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        transition: all 0.2s ease;\n        box-shadow: inset 0 3px 1px 0 rgba(0, 0, 0, 0.5);\n        transform-origin: top center;\n        perspective: 500px;\n      }\n\n      .natural[_ngcontent-%COMP%] {\n        background-color: WhiteSmoke;\n      }\n\n      .mousedown[_ngcontent-%COMP%] {\n        box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 1);\n        background-color: hotpink;\n        border-bottom: 1px solid Gainsboro;\n        transform: rotateX(8deg);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-keyboard',
                template: `
    <section class="keyboard">
      <button
        *ngFor="let key of notes.keys"
        [ngClass]="{
          mousedown: isMouseDown(key),
          key: true,
          natural: isNatural(key)
        }"
        [style]="getGridStyles(key)"
        (mousedown)="handleMouseDown(key)"
        (mouseup)="handleMouseUp()"
      >
        {{ key }}
      </button>
    </section>
  `,
                styles: [
                    `
      .keyboard {
        display: grid;
        padding: 0;
        margin: 0;
        min-height: 40vh;
        grid-template-rows: 2fr 1fr;
        grid-template-columns: repeat(21, 1fr);
      }

      .key {
        border: none;
        border-bottom: 2px solid gray;
        border-radius: 0 0 10px 10px;
        background-color: DimGray;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        transition: all 0.2s ease;
        box-shadow: inset 0 3px 1px 0 rgba(0, 0, 0, 0.5);
        transform-origin: top center;
        perspective: 500px;
      }

      .natural {
        background-color: WhiteSmoke;
      }

      .mousedown {
        box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 1);
        background-color: hotpink;
        border-bottom: 1px solid Gainsboro;
        transform: rotateX(8deg);
      }
    `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['notes']
            }] }]; }, { handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/notes.service.ts":
/*!**********************************!*\
  !*** ./src/app/notes.service.ts ***!
  \**********************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotesService {
    constructor() {
        this.keys = ['c', 'cS', 'd', 'dS', 'e', 'f', 'fS', 'g', 'gS', 'a', 'aS', 'b'];
    }
    getNote() { }
}
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameshall/Workspaces/EJ-ANG-900/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map