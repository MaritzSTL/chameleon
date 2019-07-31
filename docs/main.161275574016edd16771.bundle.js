(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    109: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
      __webpack_exports__.a = lit_element__WEBPACK_IMPORTED_MODULE_0__.a`
  :host {
    --border-radius: 0.313em;
    --button-padding: 0.75em 1.375em;
    --input-padding: 0.625em 0.5em;
    --textarea-padding: 0.438em 0.813em;

    --color-surface: #ffffff;
    --color-black: #000000;
    --color-primary: #2c6fb7;
    --color-error: #bc1c16;
    --color-gray-lightest: #e1e3e4;
    --color-gray-light: #c4c7ca;
    --color-gray-darkest: #6c737a;

    --font-letter-spacing: 0.018em;
    --font-size-paragraph-medium: 0.938em;
    --font-size-input: 0.938em;
    --font-size-label: 0.875em;
  }
`;
    },
    288: function(module, exports, __webpack_require__) {
      __webpack_require__(289),
        __webpack_require__(389),
        (module.exports = __webpack_require__(390));
    },
    390: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            159
          );
          const req = __webpack_require__(534);
          Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.configure)(
            function loadStories() {
              req.keys().forEach(req);
            },
            module
          );
        }.call(this, __webpack_require__(232)(module));
    },
    534: function(module, exports, __webpack_require__) {
      var map = { "./primary.stories.ts": 535 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 534);
    },
    535: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              159
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              34
            ),
            lit_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
          __webpack_require__(550),
            __webpack_require__(551),
            __webpack_require__(552);
          const stories = Object(
            _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf
          )("Chameleon", module);
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs
          ),
            stories.add(
              "Button",
              () => {
                const disabled = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean
                  )("Disabled", !1),
                  theme = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios
                  )(
                    "Theme",
                    {
                      Primary: "primary",
                      Secondary: "secondary",
                      Text: "text"
                    },
                    "primary"
                  );
                return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <cha-button ?disabled="${disabled}" theme="${theme}">Button</cha-button>
    `;
              },
              { info: { inline: !0 } }
            ),
            stories.add(
              "Input",
              () => {
                const disabled = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean
                  )("Disabled", !1),
                  label = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                  )("Label", ""),
                  error = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                  )("Error", ""),
                  placeholder = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                  )("Placeholder", "Text..."),
                  typeSelection = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios
                  )(
                    "Type",
                    {
                      Text: "text",
                      Password: "password",
                      Email: "email",
                      Number: "number",
                      Search: "search",
                      Tel: "tel",
                      Url: "url"
                    },
                    "text"
                  );
                return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <h3>Field / Basic</h3>
      <cha-input
        ?disabled="${disabled}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      ></cha-input>
      <h3>Field / Icon Left</h3>
      <cha-input
        ?disabled="${disabled}"
        icon-left
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
          slot="icon-left"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </cha-input>
      <h3>Field / Icon Right</h3>
      <cha-input
        ?disabled="${disabled}"
        icon-right
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
          slot="icon-right"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </cha-input>
    `;
              },
              { info: { inline: !0 } }
            ),
            stories.add(
              "Textarea",
              () => {
                const disabled = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean
                  )("Disabled", !1),
                  label = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                  )("Label", ""),
                  error = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                  )("Error", ""),
                  placeholder = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                  )("Placeholder", "Text..."),
                  minlength = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number
                  )("minlength", 0),
                  maxlength = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number
                  )("maxlength", 500),
                  rows = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number
                  )("Rows", 2),
                  cols = Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number
                  )("Columns", 20);
                return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <cha-textarea
        ?disabled="${disabled}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        .minlength="${minlength}"
        .maxlength="${maxlength}"
        .rows="${rows}"
        .cols="${cols}"
      ></cha-textarea>
    `;
              },
              { info: { inline: !0 } }
            );
        }.call(this, __webpack_require__(232)(module));
    },
    550: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var lit_element = __webpack_require__(110),
        class_map = __webpack_require__(286),
        base = __webpack_require__(109),
        base_button = __webpack_require__(84).a`
  :host {
    display: inline;
  }

  button[disabled] {
    background-color: var(--color-gray-lightest);
    border-color: var(--color-gray-lightest);
    color: var(--color-gray-darkest);
  }

  button {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius);
    color: var(--color-surface);
    font-size: var(--font-size-paragraph-medium);
    letter-spacing: var(--font-letter-spacing);
    padding: var(--button-padding);
  }

  .secondary {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }

  .text {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary);
    text-decoration: underline;
  }

  button[disabled].text {
    background-color: transparent;
    border-color: transparent;
  }
`,
        __decorate = function(decorators, target, key, desc) {
          var d,
            c = arguments.length,
            r =
              c < 3
                ? target
                : null === desc
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              (d = decorators[i]) &&
                (r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r);
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      let cha_button_ChaButton = class ChaButton extends lit_element.a {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.theme = "primary");
        }
        render() {
          return lit_element.c`
      <button
        class="${Object(class_map.a)({ [this.theme]: !0 })}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
        }
      };
      (cha_button_ChaButton.styles = [base.a, base_button]),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_button_ChaButton.prototype,
          "disabled",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String, reflect: !0 })],
          cha_button_ChaButton.prototype,
          "theme",
          void 0
        );
      cha_button_ChaButton = __decorate(
        [Object(lit_element.b)("cha-button")],
        cha_button_ChaButton
      );
    },
    551: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var lit_element = __webpack_require__(29),
        lit_html = __webpack_require__(28),
        class_map = __webpack_require__(287),
        base = __webpack_require__(109),
        input = __webpack_require__(84).a`
  :host {
    display: inline-flex;
    flex-direction: column;
  }

  input {
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
    font-size: var(--font-size-input);
    padding: var(--input-padding);
  }

  label {
    color: var(--color-gray-darkest);
    font-size: var(--font-size-label);
    margin-bottom: 10px;
  }

  .error {
    color: var(--color-error);
    font-size: var(--font-size-label);
    margin-top: 3px;
  }

  .input-wrapper {
    position: relative;
  }

  .input-wrapper.icon-left input {
    padding-left: 45px;
  }

  .input-wrapper.icon-right input {
    padding-right: 45px;
  }

  // We currently only support svg icons
  svg {
    width: 100%;
    height: 100%;
    color: var(--color-gray-darkest);
  }

  ::slotted(*) {
    color: var(--color-gray-darkest);
    height: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  ::slotted([slot="icon-left"]) {
    left: 13px;
  }

  ::slotted([slot="icon-right"]) {
    right: 13px;
  }
`,
        __decorate = function(decorators, target, key, desc) {
          var d,
            c = arguments.length,
            r =
              c < 3
                ? target
                : null === desc
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              (d = decorators[i]) &&
                (r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r);
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      let cha_input_ChaInput = class ChaInput extends lit_element.a {
        constructor() {
          super(...arguments),
            (this.autocomplete = !1),
            (this.autofocus = !1),
            (this.disabled = !1),
            (this.readonly = !1),
            (this.required = !1),
            (this.type = "text"),
            (this.placeholder = ""),
            (this.value = ""),
            (this.label = ""),
            (this.validationMessage = ""),
            (this["icon-left"] = !1),
            (this["icon-right"] = !1);
        }
        render() {
          return lit_element.c`
      ${this.labelText}
      <div
        class="${Object(class_map.a)({
          "input-wrapper": !0,
          "icon-left": this["icon-left"],
          "icon-right": this["icon-right"]
        })}"
      >
        <slot name="icon-left"></slot>
        <input
          name="cha-input"
          .type="${this.type}"
          .placeholder="${this.placeholder}"
          .value="${this.value}"
          ?autocomplete="${this.autocomplete}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          @blur="${this._handleBlur}"
          @invalid="${this._handleInvalid}"
        />
        <slot name="icon-right"></slot>
      </div>
      ${this.errorText}
    `;
        }
        get _el() {
          return null !== this.shadowRoot
            ? this.shadowRoot.querySelector("input")
            : null;
        }
        get labelText() {
          return "" !== this.label
            ? lit_element.c`
        <label for="cha-input">${this.label}</label>
      `
            : lit_html.f;
        }
        get errorText() {
          return "" !== this.validationMessage
            ? lit_element.c`
        <span class="error">${this.validationMessage}</span>
      `
            : lit_html.f;
        }
        get validity() {
          return null !== this._el ? this._el.validity : void 0;
        }
        get willValidate() {
          return null !== this._el && this._el.willValidate;
        }
        checkValidity() {
          return null !== this._el && this._el.checkValidity();
        }
        _handleBlur() {
          this.checkValidity();
        }
        _handleInvalid() {
          this.validationMessage =
            null !== this._el ? this._el.validationMessage : "";
        }
      };
      (cha_input_ChaInput.styles = [base.a, input]),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "autocomplete",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "autofocus",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "disabled",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "readonly",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "required",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "type",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "placeholder",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String })],
          cha_input_ChaInput.prototype,
          "value",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String })],
          cha_input_ChaInput.prototype,
          "label",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String })],
          cha_input_ChaInput.prototype,
          "validationMessage",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "icon-left",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_input_ChaInput.prototype,
          "icon-right",
          void 0
        );
      cha_input_ChaInput = __decorate(
        [Object(lit_element.b)("cha-input")],
        cha_input_ChaInput
      );
    },
    552: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var lit_element = __webpack_require__(17),
        lit_html = __webpack_require__(21),
        base = __webpack_require__(109),
        base_textarea = __webpack_require__(84).a`
  :host {
    display: inline-flex;
    flex-direction: column;
  }

  textarea {
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius);
    font-size: var(--font-size-input);
    padding: var(--textarea-padding);
  }

  label {
    color: var(--color-gray-darkest);
    font-size: var(--font-size-label);
    margin-bottom: 10px;
  }

  .error {
    color: var(--color-error);
    font-size: var(--font-size-label);
    margin-top: 3px;
  }
`,
        __decorate = function(decorators, target, key, desc) {
          var d,
            c = arguments.length,
            r =
              c < 3
                ? target
                : null === desc
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              (d = decorators[i]) &&
                (r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r);
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      let cha_textarea_ChaTextarea = class ChaTextarea extends lit_element.a {
        constructor() {
          super(...arguments),
            (this.autocomplete = !1),
            (this.autofocus = !1),
            (this.cols = 20),
            (this.disabled = !1),
            (this.maxlength = null),
            (this.minlength = null),
            (this.placeholder = ""),
            (this.readonly = !1),
            (this.required = !1),
            (this.rows = 2),
            (this.spellcheck = !1),
            (this.value = ""),
            (this.label = ""),
            (this.validationMessage = "");
        }
        render() {
          return lit_element.c`
      ${this.labelText}
      <textarea
        name="cha-textarea"
        .value="${this.value}"
        ?autocomplete="${this.autocomplete}"
        ?autofocus="${this.autofocus}"
        cols="${this.cols}"
        ?disabled="${this.disabled}"
        maxlength="${this.maxlength}"
        minlength="${this.minlength}"
        placeholder="${this.placeholder}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        rows="${this.rows}"
        spellcheck="${this.spellcheck}"
        @blur="${this._handleBlur}"
        @invalid="${this._handleInvalid}"
      ></textarea>
      ${this.errorText}
    `;
        }
        get _el() {
          return null !== this.shadowRoot
            ? this.shadowRoot.querySelector("textarea")
            : null;
        }
        get labelText() {
          return "" !== this.label
            ? lit_element.c`
        <label for="cha-textarea">${this.label}</label>
      `
            : lit_html.nothing;
        }
        get errorText() {
          return "" !== this.validationMessage
            ? lit_element.c`
        <span class="error">${this.validationMessage}</span>
      `
            : lit_html.nothing;
        }
        get validity() {
          return null !== this._el ? this._el.validity : void 0;
        }
        get willValidate() {
          return null !== this._el && this._el.willValidate;
        }
        checkValidity() {
          return null !== this._el && this._el.checkValidity();
        }
        _handleBlur() {
          this.checkValidity();
        }
        _handleInvalid() {
          this.validationMessage =
            null !== this._el ? this._el.validationMessage : "";
        }
      };
      (cha_textarea_ChaTextarea.styles = [base.a, base_textarea]),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "autocomplete",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "autofocus",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Number, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "cols",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "disabled",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Number, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "maxlength",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Number, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "minlength",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "placeholder",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "readonly",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "required",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Number, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "rows",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: Boolean, reflect: !0 })],
          cha_textarea_ChaTextarea.prototype,
          "spellcheck",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String })],
          cha_textarea_ChaTextarea.prototype,
          "value",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String })],
          cha_textarea_ChaTextarea.prototype,
          "label",
          void 0
        ),
        __decorate(
          [Object(lit_element.d)({ type: String })],
          cha_textarea_ChaTextarea.prototype,
          "validationMessage",
          void 0
        );
      cha_textarea_ChaTextarea = __decorate(
        [Object(lit_element.b)("cha-textarea")],
        cha_textarea_ChaTextarea
      );
    }
  },
  [[288, 1, 2]]
]);
//# sourceMappingURL=main.161275574016edd16771.bundle.js.map
