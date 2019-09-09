(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{334:function(module,exports,__webpack_require__){__webpack_require__(335),__webpack_require__(435),module.exports=__webpack_require__(436)},436:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65);const req=__webpack_require__(580);Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(req)},module)}.call(this,__webpack_require__(132)(module))},580:function(module,exports,__webpack_require__){var map={"./button.stories.ts":581,"./card.stories.ts":596,"./checkbox.stories.ts":597,"./input.stories.ts":598,"./radio.stories.ts":599,"./switch.stories.ts":600,"./textarea.stories.ts":601};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=580},581:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);__webpack_require__(602);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Primary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button ?disabled="${disabled}" theme="primary"
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Secondary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button ?disabled="${disabled}" theme="secondary"
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Text",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button ?disabled="${disabled}" theme="text"
        >Button</chameleon-button
      >
    `},{info:{inline:!0}})}.call(this,__webpack_require__(132)(module))},596:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);__webpack_require__(603),__webpack_require__(604);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Card",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Basic",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-card>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `},{info:{inline:!0}}),stories.add("Outline",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-card outline>
        <h3>Card</h3>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(132)(module))},597:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);__webpack_require__(605);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Checkbox",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Checkbox",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-checkbox
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-checkbox>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(132)(module))},598:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);__webpack_require__(606);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Input",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);const searchIcon=slot=>lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`
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
    slot="${slot}"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
`;stories.add("Basic",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-input
        ?disabled="${disabled}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      ></chameleon-input>
    `},{info:{inline:!0}}),stories.add("Icon Left",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-input
        ?disabled="${disabled}"
        icon-left
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        ${searchIcon("icon-left")}
      </chameleon-input>
    `},{info:{inline:!0}}),stories.add("Icon Right",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-input
        ?disabled="${disabled}"
        icon-right
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        ${searchIcon("icon-right")}
      </chameleon-input>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(132)(module))},599:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);__webpack_require__(607);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Radio",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Radio",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-radio
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?disabled=${disabled}
      ></chameleon-radio>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(132)(module))},600:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);__webpack_require__(608);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Switch",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Switch",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-switch
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-switch>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(132)(module))},601:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);__webpack_require__(609);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Textarea",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Textarea",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),minlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("minlength",0),maxlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxlength",500),rows=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Rows",2),cols=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Columns",20);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-textarea
        ?disabled="${disabled}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        .minlength="${minlength}"
        .maxlength="${maxlength}"
        .rows="${rows}"
        .cols="${cols}"
      ></chameleon-textarea>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(132)(module))},602:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(169),class_map=__webpack_require__(332),base=__webpack_require__(66),base_button=__webpack_require__(57).a`
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
    cursor: pointer;
    font-size: var(--font-size-paragraph-medium);
    letter-spacing: var(--font-letter-spacing);
    padding: var(--button-padding);
    transition: all 150ms linear;
  }

  button:hover {
    background-color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
  }

  .secondary {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }

  .secondary:hover {
    color: var(--color-surface);
  }

  .text {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary);
    text-decoration: underline;
  }

  .text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary-dark);
  }

  button[disabled].text {
    background-color: transparent;
    border-color: transparent;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_button_ChameleonButton=class ChameleonButton extends lit_element.a{constructor(){super(...arguments),this.disabled=!1,this.theme="primary"}render(){return lit_element.c`
      <button
        class="${Object(class_map.a)({[this.theme]:!0})}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `}};chameleon_button_ChameleonButton.styles=[base.a,base_button],__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"disabled",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_button_ChameleonButton.prototype,"theme",void 0);chameleon_button_ChameleonButton=__decorate([Object(lit_element.b)("chameleon-button")],chameleon_button_ChameleonButton)},603:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(213),base=__webpack_require__(66),card=__webpack_require__(57).a`
  :host {
    background-color: var(--color-surface);
    display: inline-block;
    max-width: 344px;
    padding: 10px;
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_ChameleonCard=class ChameleonCard extends lit_element.a{render(){return lit_element.c`
      <slot></slot>
    `}};chameleon_card_ChameleonCard.styles=[base.a,card];chameleon_card_ChameleonCard=__decorate([Object(lit_element.b)("chameleon-card")],chameleon_card_ChameleonCard)},604:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(141),lit_html=__webpack_require__(72),base=__webpack_require__(66),card_header=__webpack_require__(57).a`
  :host {
    display: block;
  }

  h3,
  h2 {
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
  }

  h3 {
    color: var(--color-secondary-dark);
    font-size: var(--font-size-subtitle);
    line-height: 21px;
    white-space: nowrap;
  }

  h2 {
    font-size: var(--font-size-title);
    line-height: 27px;
    max-height: 52px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_header_ChameleonCardHeader=class ChameleonCardHeader extends lit_element.a{constructor(){super(...arguments),this.title="",this.subtitle=""}render(){return lit_element.c`
      ${""!==this.subtitle?lit_element.c`
            <h3>${this.subtitle}</h3>
          `:lit_html.c}
      ${""!==this.title?lit_element.c`
            <h2>${this.title}</h2>
          `:lit_html.c}
    `}};chameleon_card_header_ChameleonCardHeader.styles=[base.a,card_header],__decorate([Object(lit_element.d)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"title",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"subtitle",void 0);chameleon_card_header_ChameleonCardHeader=__decorate([Object(lit_element.b)("chameleon-card-header")],chameleon_card_header_ChameleonCardHeader)},605:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(160),lit_html=__webpack_require__(82),base=__webpack_require__(66),base_checkbox=__webpack_require__(57).a`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    cursor: pointer;
    display: none;
  }

  .checkmark {
    background-color: transparent;
    border: 2px solid var(--color-gray-lightest);
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary);
    border: none;
  }

  .checkmark:after {
    border-bottom: 2px solid var(--color-surface);
    border-right: 2px solid var(--color-surface);
    content: "";
    display: none;
    height: 13px;
    margin-left: 7px;
    margin-top: 1px;
    transform: rotate(45deg);
    width: 4px;
  }

  input:checked ~ .checkmark::after {
    display: inline-block;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_checkbox_ChameleonCheckbox=class ChameleonCheckbox extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value=""}render(){return lit_element.c`
      <input type="checkbox" ?checked="${this.checked}" value="${this.value}" />
      <span class="checkmark"></span>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.c}};chameleon_checkbox_ChameleonCheckbox.styles=[base.a,base_checkbox],__decorate([Object(lit_element.d)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_checkbox_ChameleonCheckbox.prototype,"checked",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"value",void 0);chameleon_checkbox_ChameleonCheckbox=__decorate([Object(lit_element.b)("chameleon-checkbox")],chameleon_checkbox_ChameleonCheckbox)},606:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(39),lit_html=__webpack_require__(56),class_map=__webpack_require__(333),base=__webpack_require__(66),input=__webpack_require__(57).a`
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
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_input_ChameleonInput=class ChameleonInput extends lit_element.a{constructor(){super(...arguments),this.autocomplete=!1,this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.type="text",this.placeholder="",this.value="",this.min=null,this.max=null,this.label="",this.validationMessage="",this["icon-left"]=!1,this["icon-right"]=!1}render(){return lit_element.c`
      ${this.labelText}
      <div
        class="${Object(class_map.a)({"input-wrapper":!0,"icon-left":this["icon-left"],"icon-right":this["icon-right"]})}"
      >
        <slot name="icon-left"></slot>
        ${this._inputEl}
        <slot name="icon-right"></slot>
      </div>
      ${this.errorText}
    `}get _inputEl(){switch(this.type){case"text":return lit_element.c`
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
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `;case"number":return lit_element.c`
          <input
            name="cha-input"
            .type="${this.type}"
            .placeholder="${this.placeholder}"
            .value="${this.value}"
            .min="${this.min}"
            .max="${this.max}"
            ?autocomplete="${this.autocomplete}"
            ?autofocus="${this.autofocus}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `;default:return lit_element.c`
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
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `}}get _el(){return null!==this.shadowRoot?this.shadowRoot.querySelector("input"):null}get labelText(){return""!==this.label?lit_element.c`
        <label for="cha-input">${this.label}</label>
      `:lit_html.f}get errorText(){return""!==this.validationMessage?lit_element.c`
        <span class="error">${this.validationMessage}</span>
      `:lit_html.f}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}_handleInput(e){this.value=e.target.value}_handleBlur(){this.checkValidity()}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}};chameleon_input_ChameleonInput.styles=[base.a,input],__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autocomplete",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autofocus",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"disabled",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"readonly",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"required",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"type",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"placeholder",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_input_ChameleonInput.prototype,"value",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"min",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"max",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_input_ChameleonInput.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_input_ChameleonInput.prototype,"validationMessage",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-left",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-right",void 0);chameleon_input_ChameleonInput=__decorate([Object(lit_element.b)("chameleon-input")],chameleon_input_ChameleonInput)},607:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(142),lit_html=__webpack_require__(83),base=__webpack_require__(66),base_radio=__webpack_require__(57).a`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    cursor: pointer;
    display: none;
  }

  .checkmark {
    background-color: var(--color-surface);
    border: 2px solid var(--color-gray-lightest);
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary);
    border: none;
  }

  .checkmark:after {
    content: "";
    display: none;
    position: absolute;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    background: var(--color-surface);
    border-radius: 50%;
    height: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
  }

  :host([disabled]),
  input[disabled] {
    pointer-events: none;
  }

  input:checked ~ .checkmark.disabled {
    background-color: var(--color-gray-lightest);
    pointer-events: none;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_radio_ChameleonRadio=class ChameleonRadio extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value="",this.disabled=!1}render(){return lit_element.c`
      <input
        type="radio"
        ?checked="${this.checked}"
        value="${this.value}"
        ?disabled="${this.disabled}"
      />
      <span class="checkmark ${this.disabled?"disabled":""}"></span>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.c}};chameleon_radio_ChameleonRadio.styles=[base.a,base_radio],__decorate([Object(lit_element.d)({type:String})],chameleon_radio_ChameleonRadio.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"checked",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_radio_ChameleonRadio.prototype,"value",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"disabled",void 0);chameleon_radio_ChameleonRadio=__decorate([Object(lit_element.b)("chameleon-radio")],chameleon_radio_ChameleonRadio)},608:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(161),lit_html=__webpack_require__(84),base=__webpack_require__(66),base_switch=__webpack_require__(57).a`
  :host {
    align-items: center;
    display: inline-flex;
    font-size: var(--font-size-input);
  }

  .switch {
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 32px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: var(--color-gray-lightest);
    border-radius: 10px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: var(--color-surface);
    border-radius: 50%;
    bottom: 2px;
    box-shadow: 1px 0 3px var(--color-box-shadow);
    content: "";
    height: 16px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: var(--color-primary);
  }

  input:focus + .slider {
    box-shadow: 0 0 3px var(--color-gray-dark);
  }

  input:checked + .slider:before {
    box-shadow: none;
    transform: translateX(12px);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_switch_ChameleonSwitch=class ChameleonSwitch extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value=""}render(){return lit_element.c`
      <div class="switch">
        <input type="radio" ?checked="${this.checked}" value="${this.value}" />
        <span class="slider"></span>
      </div>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.c}};chameleon_switch_ChameleonSwitch.styles=[base.a,base_switch],__decorate([Object(lit_element.d)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_switch_ChameleonSwitch.prototype,"checked",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"value",void 0);chameleon_switch_ChameleonSwitch=__decorate([Object(lit_element.b)("chameleon-switch")],chameleon_switch_ChameleonSwitch)},609:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(43),lit_html=__webpack_require__(73),base=__webpack_require__(66),base_textarea=__webpack_require__(57).a`
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
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_textarea_ChameleonTextarea=class ChameleonTextarea extends lit_element.a{constructor(){super(...arguments),this.autocomplete=!1,this.autofocus=!1,this.cols=20,this.disabled=!1,this.maxlength=null,this.minlength=null,this.placeholder="",this.readonly=!1,this.required=!1,this.rows=2,this.spellcheck=!1,this.value="",this.label="",this.validationMessage=""}render(){return lit_element.c`
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
    `}get _el(){return null!==this.shadowRoot?this.shadowRoot.querySelector("textarea"):null}get labelText(){return""!==this.label?lit_element.c`
        <label for="cha-textarea">${this.label}</label>
      `:lit_html.c}get errorText(){return""!==this.validationMessage?lit_element.c`
        <span class="error">${this.validationMessage}</span>
      `:lit_html.c}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}_handleBlur(){this.checkValidity()}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}};chameleon_textarea_ChameleonTextarea.styles=[base.a,base_textarea],__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autocomplete",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autofocus",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"cols",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"disabled",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"maxlength",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"minlength",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"placeholder",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"readonly",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"required",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"rows",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"spellcheck",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"value",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"validationMessage",void 0);chameleon_textarea_ChameleonTextarea=__decorate([Object(lit_element.b)("chameleon-textarea")],chameleon_textarea_ChameleonTextarea)},66:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(57);__webpack_exports__.a=lit_element__WEBPACK_IMPORTED_MODULE_0__.a`
  :host {
    --border-radius: 0.313em;
    --button-padding: 0.75em 1.375em;
    --input-padding: 0.625em 0.5em;
    --textarea-padding: 0.438em 0.813em;

    --color-surface: #ffffff;
    --color-black: #000000;
    --color-primary: #2c6fb7;
    --color-primary-dark: #004587;
    --color-secondary: #69c9b9;
    --color-secondary-dark: #349889;
    --color-error: #bc1c16;
    --color-gray-lightest: #e1e3e4;
    --color-gray-light: #c4c7ca;
    --color-gray-darkest: #6c737a;
    --color-box-shadow: rgba(159, 164, 168, 0.6);

    --font-letter-spacing: 0.018em;
    --font-size-paragraph-medium: 0.938em;
    --font-size-subtitle: 0.938em;
    --font-size-title: 1.4em;
    --font-size-input: 0.938em;
    --font-size-label: 0.875em;
  }
`}},[[334,1,2]]]);
//# sourceMappingURL=main.751d816da79ecd0757d7.bundle.js.map