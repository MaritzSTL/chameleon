(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),class_map=__webpack_require__(52),chameleon_button_style=lit_element.b`
  :host {
    display: inline;
  }

  :host([full-width]) {
    flex: 1;
  }

  :host([full-width]) a,
  :host([full-width]) button {
    flex: 1;
    width: 100%;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  button[disabled] {
    background-color: var(--color-gray-lightest, #e1e3e4);
    border-color: var(--color-gray-lightest, #e1e3e4);
    color: var(--color-gray-darkest, #6c737a);
    pointer-events: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    border: 1px solid var(--color-primary, #2c6fb7);
    border-radius: var(--border-radius-input, 0.313rem);
    color: var(--color-surface, #ffffff);
    cursor: pointer;
    font-size: var(--font-size-paragraph-medium, 0.938rem);
    font-family: var(--font-family, sans-serif);
    letter-spacing: var(--font-letter-spacing, 0.018rem);
    padding: var(--button-padding, 0.75rem 1.375rem);
    transition: all 150ms linear;
  }

  button:hover {
    background-color: var(--color-primary-dark, #004587);
    border-color: var(--color-primary-dark, #004587);
  }

  .secondary {
    background-color: var(--color-surface, #ffffff);
    color: var(--color-primary, #2c6fb7);
  }

  .secondary:hover {
    color: var(--color-surface, #ffffff);
  }

  .text {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary, #2c6fb7);
    text-decoration: underline;
    align-self: center;
  }

  .text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary-dark, #004587);
  }

  button[disabled].text {
    background-color: transparent;
    border-color: transparent;
  }

  ::slotted([slot="icon-left"]) {
    margin-right: 0.1875rem;
  }

  ::slotted([slot="icon-right"]) {
    margin-left: 0.1875rem;
  }

  ::slotted([slot="icon-only"]) {
    padding: 0.1875rem;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_button_ChameleonButton=class ChameleonButton extends lit_element.a{constructor(){super(...arguments),this.disabled=!1,this.theme="primary",this["icon-left"]=!1,this["icon-right"]=!1,this["icon-only"]=!1,this.href="",this["new-tab"]=!1}render(){return lit_element.d`
      ${this.href&&!this.disabled?lit_element.d`
            <a
              href=${this.href}
              target=${this.getTarget()}
              rel=${this.getRel()}
            >
              ${this.renderButton()}
            </a>
          `:lit_element.d`
            ${this.renderButton()}
          `}
    `}renderButton(){return lit_element.d`
      <button
        class="${Object(class_map.a)({[this.theme]:!0})}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
        <slot name="icon-only"></slot>
      </button>
    `}getTarget(){return this["new-tab"]?"_blank":"_top"}getRel(){return this["new-tab"]?"noopener noreferrer":""}};chameleon_button_ChameleonButton.styles=[chameleon_button_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_button_ChameleonButton.prototype,"theme",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"icon-left",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"icon-right",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"icon-only",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_button_ChameleonButton.prototype,"href",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"new-tab",void 0);chameleon_button_ChameleonButton=__decorate([Object(lit_element.c)("chameleon-button")],chameleon_button_ChameleonButton)},269:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_skeleton_style=lit_element.b`
  .rectangle {
    fill: var(--color-gray-lightest, #e1e3e4);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_skeleton_ChameleonSkeleton=class ChameleonSkeleton extends lit_element.a{constructor(){super(...arguments),this.disabled=!1,this.theme="primary",this.height="100%",this.width="100%"}render(){return lit_element.d`
      <svg height="${this.height}" width="${this.width}">
        <rect
          class="rectangle"
          height="100%"
          width="100%"
          x="0"
          y="0"
          rx="10"
          ry="10"
        />
      </svg>
    `}};chameleon_skeleton_ChameleonSkeleton.styles=[chameleon_skeleton_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"theme",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"height",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"width",void 0);chameleon_skeleton_ChameleonSkeleton=__decorate([Object(lit_element.c)("chameleon-skeleton")],chameleon_skeleton_ChameleonSkeleton)},270:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),class_map=__webpack_require__(52),chameleon_toast_style=lit_element.b`
  /* The toast - position it at the bottom and in the middle of the screen */
  #toast {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 28%; /* Set a default minimum width */
    max-width: 28%; /* Set a default max width */
    background-color: #333; /* Black background color */
    color: #f5f5f8; /* off white text color */
    text-align: left; /* left-aligned text */
    border-radius: 10px; /* Rounded borders */
    padding: 1rem; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    bottom: 30px; /* 30px from the bottom */
    font-size: 14px;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
  }

  .toast-text {
    margin: 0 5px;
  }

  @media (max-width: 768px) {
    #toast {
      min-width: 90%;
      max-width: 90%;
    }
  }

  @media (max-width: 420px) {
    #toast {
      bottom: 70px;
      min-width: 0px;
    }
  }

  /* Show the toast */
  #toast.show-closeable {
    visibility: visible; /* Show the toast */
    /* Add animation: Take 0.5 seconds to fade in the toast.*/
    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }

  /* Hide the toast */
  #toast.hide-closeable {
    visibility: visible;
    -webkit-animation: fadeout 0.5s forwards;
    animation: fadeout 0.5s forwards;
    /* Show the toast */
    /* Add animation: Take 0.5 seconds to fade out the toast. */
  }

  .closed-icon {
    align-self: center;
    display: flex;
  }

  ::slotted(*) {
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  /* Animations to fade the toast in */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }
  /* Animations to fade the toast out */
  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @media (max-width: 420px) {
    @-webkit-keyframes fadeout {
      from {
        bottom: 70px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
    @keyframes fadeout {
      from {
        bottom: 70px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_toast_ChameleonToast=class ChameleonToast extends lit_element.a{constructor(){super(...arguments),this.color="",this.showCloseable=!0,this.backgroundColor=""}render(){return lit_element.d`
      <div
        id="toast"
        class="
        ${Object(class_map.a)({"show-closeable":this.showCloseable,"hide-closeable":!this.showCloseable})}"
        style="background-color: ${this.backgroundColor}"
      >
        <div class="toast-text" style="color: ${this.color};">
          <slot name="toast-text">
            This website uses cookies to remember you and improve your
            experience. By using our site, you accept our use of cookies.
          </slot>
        </div>
        <a class="closed-icon" @click="${this.closeToast}">
          <slot name="closed-icon">x</slot>
        </a>
      </div>
    `}closeToast(){const x=this.shadowRoot.getElementById("toast");x.className=x.className.replace("show-closeable",""),this.showCloseable=!this.showCloseable,this.dispatchEvent(new CustomEvent("close-toast",{bubbles:!0,composed:!0}))}};chameleon_toast_ChameleonToast.styles=[chameleon_toast_style],__decorate([Object(lit_element.e)({type:String})],chameleon_toast_ChameleonToast.prototype,"color",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_toast_ChameleonToast.prototype,"showCloseable",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_toast_ChameleonToast.prototype,"backgroundColor",void 0);chameleon_toast_ChameleonToast=__decorate([Object(lit_element.c)("chameleon-toast")],chameleon_toast_ChameleonToast)},272:function(module,exports,__webpack_require__){__webpack_require__(273),__webpack_require__(386),module.exports=__webpack_require__(387)},294:function(module,exports){},387:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);const req=__webpack_require__(567);Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach(req)}),module)}.call(this,__webpack_require__(17)(module))},567:function(module,exports,__webpack_require__){var map={"./button.stories.ts":568,"./card.stories.ts":578,"./checkbox.stories.ts":579,"./chip.stories.ts":580,"./hero.stories.ts":581,"./input.stories.ts":582,"./loader.stories.ts":583,"./paginator.stories.ts":584,"./radio.stories.ts":585,"./rice-ball-dessert.stories.ts":586,"./sheet.stories.ts":587,"./skeleton.stories.ts":588,"./switch.stories.ts":589,"./tabs.stories.ts":590,"./textarea.stories.ts":592,"./toast.stories.ts":593};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=567},568:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(173);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);stories.add("Primary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <div style="display: flex;">
        <chameleon-button
          ?disabled="${disabled}"
          theme="primary"
          ?full-width="${fullWidth}"
          href=${href}
          ?new-tab=${newTab}
          >Button</chameleon-button
        >
      </div>
    `},{info:{inline:!0}}),stories.add("Secondary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="secondary"
        ?full-width="${fullWidth}"
        href=${href}
        ?new-tab=${newTab}
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Text",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="text"
        ?full-width="${fullWidth}"
        href=${href}
        ?new-tab=${newTab}
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Text with Icon",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="text"
        ?full-width="${fullWidth}"
        icon-left
        href=${href}
        ?new-tab=${newTab}
        >${(slot=>lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus" slot="${slot}"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
`)("icon-left")}Add</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Icon Only",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled="${disabled}"
        icon-only
        theme="text"
        href=${href}
        ?new-tab=${newTab}
        >${(slot=>lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right" slot="${slot}"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
`)("icon-only")}</chameleon-button
      >
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},578:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(595),__webpack_require__(596),__webpack_require__(597),__webpack_require__(598),__webpack_require__(173);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Card",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.addParameters({backgrounds:[{name:"gray",value:"#f5f5f8",default:!0},{name:"black",value:"#252a33"}]}),stories.add("Basic",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
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
    `,{info:{inline:!0}}),stories.add("Image",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO"),imageSrc=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image Source","https://images.unsplash.com/photo-1474644746397-786f431dc663?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80"),altText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("ALT Text","St. Louis Landscape");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-card rounded>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <chameleon-card-image
          src="${imageSrc}"
          alt="${altText}"
        ></chameleon-card-image>
        <p>
          Sample text…Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
          turpis.
        </p>
      </chameleon-card>
    `},{info:{inline:!0}}),stories.add("Border",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO"),rounded=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Rounded",!0),accentColorSelected=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Top Border","green");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-card
        ?rounded="${rounded}"
        accentColor="${accentColorSelected}"
      >
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `},{info:{inline:!0}}),stories.add("Footer",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-card>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
        <chameleon-card-footer>
          <chameleon-button theme="secondary">Button</chameleon-button>
        </chameleon-card-footer>
      </chameleon-card>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},579:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(599);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Checkbox",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Checkbox",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-checkbox
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-checkbox>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},580:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(600);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Chip",module),searchIcon=lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Chip",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-chip>Crunchy</chameleon-chip>
    `,{info:{inline:!0}}),stories.add("With Icon",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-chip closeable>Crunchy ${searchIcon}</chameleon-chip>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},581:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(601);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Hero",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("CSS Gradient",()=>{const title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),heroText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Viverra adipiscing at in tellus integer feugiat."),gradientColors=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Hex Colors","#B72126, #14264B"),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        gradient="${gradientColors}"
        type="${"gradient"}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `},{info:{inline:!0}}),stories.add("Background Image",()=>{const title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Washington, DC"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),heroText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Cursus eget nunc scelerisque viverra mauris in. Tellus integer feugiat scelerisque varius. Nisl purus in mollis nunc sed id. Risus viverra adipiscing at in tellus."),imageUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image URL","https://picsum.photos/id/122/2100/856"),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        imageUrl="${imageUrl}"
        type="${"image"}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `},{info:{inline:!0}}),stories.add("Image Gradient",()=>{const title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","New York, NY"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),heroText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Cursus eget nunc scelerisque viverra mauris in. Tellus integer feugiat scelerisque varius. Nisl purus in mollis nunc sed id. Risus viverra adipiscing at in tellus."),imageUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image URL","https://picsum.photos/id/703/2100/856"),gradientColors=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Hex Colors","#B72126, #14264B"),gradientAlpha=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Gradient Alpha",.5),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        imageUrl="${imageUrl}"
        type="${"imageGradient"}"
        gradient="${gradientColors}"
        gradientAlpha="${gradientAlpha}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},582:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(602);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Input",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);const searchIcon=slot=>lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`
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
`;stories.add("Basic",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),toggleable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggleable password visibility",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-input
        ?disabled="${disabled}"
        ?toggleable="${toggleable}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      ></chameleon-input>
    `},{info:{inline:!0}}),stories.add("Icon Left",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),toggleable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggleable password visibility",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-input
        ?disabled="${disabled}"
        ?toggleable="${toggleable}"
        icon-left
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        ${searchIcon("icon-left")}
      </chameleon-input>
    `},{info:{inline:!0}}),stories.add("Icon Right",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),toggleable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggleable password visibility",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-input
        ?disabled="${disabled}"
        ?toggleable="${toggleable}"
        icon-right
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        ${searchIcon("icon-right")}
      </chameleon-input>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},583:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(594);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Loader",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Spinner (Default)",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-loader loader="spinner"></chameleon-loader>
    `,{info:{inline:!0}}),stories.add("Ellipsis",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-loader loader="ellipsis"></chameleon-loader>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},584:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(603);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Paginator",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Paginator",()=>{const totalItems=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Total Items",100),pageSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Page Size",10);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-paginator
        totalItems="${totalItems||0}"
        pageSize="${pageSize||0}"
      ></chameleon-paginator>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},585:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(604);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Radio",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Radio",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-radio
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?disabled=${disabled}
      ></chameleon-radio>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},586:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(605);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Rice Ball Dessert",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Basic",()=>{const ballColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Ball Color","");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-rice-ball-dessert
        riceBallColor=${ballColor}
      ></chameleon-rice-ball-dessert>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},587:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(606);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Sheet",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.addParameters({backgrounds:[{name:"gray",value:"#f5f5f8",default:!0},{name:"black",value:"#252a33"}]}),stories.add("Sheet",()=>{const header=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label","Missouri"),subHeader=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Sub Label","Tour Guide"),sheetOpened=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-sheet
        header="${header}"
        subHeader="${subHeader}"
        ?sheetOpened="${sheetOpened}"
      >
        <section slot="details">
          <p>City: Saint Louis</p>
          <p>Parks: Forest Park</p>
        </section>
        <section slot="content">
          <p>Food: Blue Ocean Sushi</p>
          <p>Art: Saint Louis Art Gallery</p>
        </section>
        <section slot="actions">
          <p>Hockey: Blues</p>
          <p>Baseball: Cards</p>
          <p>Famous People: Nelly</p>
        </section></chameleon-sheet
      >
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},588:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(269);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Skeleton",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Skeleton",()=>{const height=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Height","100%"),width=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Width","100%");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-skeleton height="${height}" width="${width}">
      </chameleon-skeleton>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},589:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(607);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Switch",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Switch",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-switch
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-switch>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},590:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(608),__webpack_require__(591);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Tabs",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Tabs",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-tabs selected="0">
        <chameleon-tab>
          Tab One
        </chameleon-tab>
        <chameleon-tab>
          Tab Two
        </chameleon-tab>
        <chameleon-tab>
          Tab Three
        </chameleon-tab>
      </chameleon-tabs>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},591:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);let ChameleonTab=class ChameleonTab extends lit_element__WEBPACK_IMPORTED_MODULE_0__.a{constructor(){super(),this.addEventListener("click",this.handleToggle)}render(){return lit_element__WEBPACK_IMPORTED_MODULE_0__.d`
      <slot></slot>
    `}handleToggle(){this.dispatchEvent(new CustomEvent("selected-changed",{detail:{value:this.dataset.index},bubbles:!0,composed:!0}))}};ChameleonTab=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__.c)("chameleon-tab")],ChameleonTab)},592:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(609);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Textarea",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Textarea",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),minlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("minlength",0),maxlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxlength",500),rows=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Rows",2),cols=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Columns",20);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
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
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},593:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(270);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Toast",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Toast",()=>{const color=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Color",""),backgroundColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Background Color",""),showCloseable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Show",!0),imageUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image Url","https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=6&m=517109442&s=612x612&w=0&h=NvQ5y8ENWZvpr84vEFWmxUgV2rCgtOGEsjJXa3IYsZ4="),toastText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","This website uses cookies to remember you and improve your experience. By using our site, you accept our use of cookies.");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-toast
        color="${color}"
        backgroundColor="${backgroundColor}"
        ?showCloseable="${showCloseable}"
      >
        <span slot="toast-text">${toastText}</span>
        <img slot="closed-icon" src="${imageUrl}" />
      </chameleon-toast>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(17)(module))},594:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_loader_style=lit_element.b`
  :host {
    box-sizing: border-box;
    --loader-color: var(--color-primary, #2c6fb7);
  }

  :host * {
    box-sizing: border-box;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--loader-color);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`,materialize_loader_style=lit_element.b`
  /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
  /* Document
   ========================================================================== */
  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */
  .preloader-wrapper {
    line-height: 1.15;
    /* 1 */
    -ms-text-size-adjust: 100%;
    /* 2 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  /*********************
  Transition Classes
**********************/

  @-webkit-keyframes indeterminate {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }

  @-webkit-keyframes indeterminate-short {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }

  @keyframes indeterminate-short {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }

  .left {
    float: left !important;
  }

  .right {
    float: right !important;
  }

  .circle {
    border-radius: 50%;
  }

  /*
    @license
    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
  /**************************/
  /* STYLES FOR THE SPINNER */
  /**************************/
  /*
 * Constants:
 *      STROKEWIDTH = 3px
 *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
 *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
 *      ARCSTARTROT = 216 degrees (how much the start location of the arc
 *                                should rotate each time, 216 gives us a
 *                                5 pointed star shape (it's 360/5 * 3).
 *                                For a 7 pointed star, we might do
 *                                360/7 * 3 = 154.286)
 *      CONTAINERWIDTH = 28px
 *      SHRINK_TIME = 400ms
 */
  .preloader-wrapper {
    display: inline-block;
    position: relative;
    width: 21px;
    height: 21px;
  }

  .preloader-wrapper.active {
    /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
    -webkit-animation: container-rotate 1568ms linear infinite;
    animation: container-rotate 1568ms linear infinite;
  }

  @-webkit-keyframes container-rotate {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes container-rotate {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spinner-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-color: var(--primary-color, #2c6fb7);
  }

  /**
 * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
 *
 * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
 * guarantee that the animation will start _exactly_ after that value. So we avoid using
 * animation-delay and instead set custom keyframes for each color (as redundant as it
 * seems).
 *
 * We write out each animation in full (instead of separating animation-name,
 * animation-duration, etc.) because under the polyfill, Safari does not recognize those
 * specific properties properly, treats them as -webkit-animation, and overrides the
 * other animation rules. See https://github.com/Polymer/platform/issues/53.
 */

  .active .spinner-layer {
    /* durations: 4 * ARCTIME */
    opacity: 1;
    -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1)
      infinite both;
    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite
      both;
  }

  @-webkit-keyframes fill-unfill-rotate {
    12.5% {
      -webkit-transform: rotate(135deg);
    }
    /* 0.5 * ARCSIZE */
    25% {
      -webkit-transform: rotate(270deg);
    }
    /* 1   * ARCSIZE */
    37.5% {
      -webkit-transform: rotate(405deg);
    }
    /* 1.5 * ARCSIZE */
    50% {
      -webkit-transform: rotate(540deg);
    }
    /* 2   * ARCSIZE */
    62.5% {
      -webkit-transform: rotate(675deg);
    }
    /* 2.5 * ARCSIZE */
    75% {
      -webkit-transform: rotate(810deg);
    }
    /* 3   * ARCSIZE */
    87.5% {
      -webkit-transform: rotate(945deg);
    }
    /* 3.5 * ARCSIZE */
    to {
      -webkit-transform: rotate(1080deg);
    }
    /* 4   * ARCSIZE */
  }

  @keyframes fill-unfill-rotate {
    12.5% {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    /* 0.5 * ARCSIZE */
    25% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
    /* 1   * ARCSIZE */
    37.5% {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg);
    }
    /* 1.5 * ARCSIZE */
    50% {
      -webkit-transform: rotate(540deg);
      transform: rotate(540deg);
    }
    /* 2   * ARCSIZE */
    62.5% {
      -webkit-transform: rotate(675deg);
      transform: rotate(675deg);
    }
    /* 2.5 * ARCSIZE */
    75% {
      -webkit-transform: rotate(810deg);
      transform: rotate(810deg);
    }
    /* 3   * ARCSIZE */
    87.5% {
      -webkit-transform: rotate(945deg);
      transform: rotate(945deg);
    }
    /* 3.5 * ARCSIZE */
    to {
      -webkit-transform: rotate(1080deg);
      transform: rotate(1080deg);
    }
    /* 4   * ARCSIZE */
  }

  /**
 * Patch the gap that appear between the two adjacent div.circle-clipper while the
 * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
 */
  .gap-patch {
    position: absolute;
    top: 0;
    left: 45%;
    width: 10%;
    height: 100%;
    overflow: hidden;
    border-color: var(--primary-color, #2c6fb7);
  }

  .gap-patch .circle {
    width: 1000%;
    left: -450%;
  }

  .circle-clipper {
    display: inline-block;
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    border-color: var(--primary-color, #2c6fb7);
  }

  .circle-clipper .circle {
    width: 200%;
    height: 100%;
    border-width: 2px;
    /* STROKEWIDTH */
    border-style: solid;
    border-bottom-color: transparent !important;
    border-color: #2c6fb7;
    border-radius: 50%;
    -webkit-animation: none;
    animation: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .circle-clipper.left .circle {
    left: 0;
    border-right-color: transparent !important;
    -webkit-transform: rotate(129deg);
    transform: rotate(129deg);
  }

  .circle-clipper.right .circle {
    left: -100%;
    border-left-color: transparent !important;
    -webkit-transform: rotate(-129deg);
    transform: rotate(-129deg);
  }

  .active .circle-clipper.left .circle {
    /* duration: ARCTIME */
    -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
      both;
    animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }

  .active .circle-clipper.right .circle {
    /* duration: ARCTIME */
    -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
      both;
    animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }

  @-webkit-keyframes left-spin {
    from {
      -webkit-transform: rotate(130deg);
    }
    50% {
      -webkit-transform: rotate(-5deg);
    }
    to {
      -webkit-transform: rotate(130deg);
    }
  }

  @keyframes left-spin {
    from {
      -webkit-transform: rotate(130deg);
      transform: rotate(130deg);
    }
    50% {
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    to {
      -webkit-transform: rotate(130deg);
      transform: rotate(130deg);
    }
  }

  @-webkit-keyframes right-spin {
    from {
      -webkit-transform: rotate(-130deg);
    }
    50% {
      -webkit-transform: rotate(5deg);
    }
    to {
      -webkit-transform: rotate(-130deg);
    }
  }

  @keyframes right-spin {
    from {
      -webkit-transform: rotate(-130deg);
      transform: rotate(-130deg);
    }
    50% {
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    to {
      -webkit-transform: rotate(-130deg);
      transform: rotate(-130deg);
    }
  }

  #spinnerContainer.cooldown {
    /* duration: SHRINK_TIME */
    -webkit-animation: container-rotate 1568ms linear infinite,
      fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);
    animation: container-rotate 1568ms linear infinite,
      fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @-webkit-keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_loader_ChameleonLoader=class ChameleonLoader extends lit_element.a{constructor(){super(...arguments),this.loader="spinner"}render(){switch(this.loader){case"ellipsis":return this.renderEllipsisLoader();case"spinner":default:return this.renderSpinnerLoader()}}renderEllipsisLoader(){return lit_element.d`
      <div class="ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `}renderSpinnerLoader(){return lit_element.d`
      <style>
        ${materialize_loader_style}
      </style>
      <div class="spinner preloader-wrapper active">
        <div class="spinner-layer">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    `}};chameleon_loader_ChameleonLoader.styles=[chameleon_loader_style],__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_loader_ChameleonLoader.prototype,"loader",void 0);chameleon_loader_ChameleonLoader=__decorate([Object(lit_element.c)("chameleon-loader")],chameleon_loader_ChameleonLoader)},595:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_card_style=lit_element.b`
  :host {
    background-color: var(--color-surface, #ffffff);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 344px;
    padding: 16px;
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest, #e1e3e4);
  }

  :host([rounded]) {
    border-radius: var(--border-radius, 0.5rem);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_ChameleonCard=class ChameleonCard extends lit_element.a{constructor(){super(...arguments),this.accentColor=null}render(){return lit_element.d`
      <slot></slot>
    `}updated(changedProperties){changedProperties.has("accentColor")&&""!==this.accentColor&&(this.style.borderTop=`7px solid ${this.accentColor}`),changedProperties.has("accentColor")&&""===this.accentColor&&void 0!==this.accentColor&&(this.style.borderTop="7px solid var(--color-primary)")}};chameleon_card_ChameleonCard.styles=[chameleon_card_style],__decorate([Object(lit_element.e)({type:String})],chameleon_card_ChameleonCard.prototype,"accentColor",void 0);chameleon_card_ChameleonCard=__decorate([Object(lit_element.c)("chameleon-card")],chameleon_card_ChameleonCard)},596:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_card_header_style=lit_element.b`
  :host {
    display: block;
    margin-bottom: 11px;
  }

  h3,
  h2 {
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
  }

  h3 {
    color: var(--color-secondary-dark, #349889);
    font-size: var(--font-size-subtitle, 0.938rem);
    line-height: 21px;
    white-space: nowrap;
  }

  h2 {
    font-size: var(--font-size-title, 1.4rem);
    line-height: 27px;
    max-height: 52px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_header_ChameleonCardHeader=class ChameleonCardHeader extends lit_element.a{constructor(){super(...arguments),this.title="",this.subtitle=""}render(){return lit_element.d`
      ${""!==this.subtitle?lit_element.d`
            <h3>${this.subtitle}</h3>
          `:lit_html.nothing}
      ${""!==this.title?lit_element.d`
            <h2>${this.title}</h2>
          `:lit_html.nothing}
    `}};chameleon_card_header_ChameleonCardHeader.styles=[chameleon_card_header_style],__decorate([Object(lit_element.e)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"title",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"subtitle",void 0);chameleon_card_header_ChameleonCardHeader=__decorate([Object(lit_element.c)("chameleon-card-header")],chameleon_card_header_ChameleonCardHeader)},597:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_card_image_style=lit_element.b`
  :host {
    display: inline-block;
  }

  img {
    border-radius: var(--border-radius, 0.5rem);
    vertical-align: top;
    width: 100%;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_image_ChameleonCardImage=class ChameleonCardImage extends lit_element.a{constructor(){super(...arguments),this.src="",this.alt=""}render(){return lit_element.d`
      <img src="${this.src}" alt="${this.alt}" />
    `}};chameleon_card_image_ChameleonCardImage.styles=[chameleon_card_image_style],__decorate([Object(lit_element.e)({type:String})],chameleon_card_image_ChameleonCardImage.prototype,"src",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_card_image_ChameleonCardImage.prototype,"alt",void 0);chameleon_card_image_ChameleonCardImage=__decorate([Object(lit_element.c)("chameleon-card-image")],chameleon_card_image_ChameleonCardImage)},598:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_card_footer_style=lit_element.b`
  :host {
    display: flex;
    margin: 1.5rem 0 0.625rem 0;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_footer_ChameleonCardFooter=class ChameleonCardFooter extends lit_element.a{render(){return lit_element.d`
      <slot></slot>
    `}};chameleon_card_footer_ChameleonCardFooter.styles=[chameleon_card_footer_style];chameleon_card_footer_ChameleonCardFooter=__decorate([Object(lit_element.c)("chameleon-card-footer")],chameleon_card_footer_ChameleonCardFooter)},599:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_checkbox_style=lit_element.b`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input, 0.938rem);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: top;
  }

  input {
    cursor: pointer;
    display: none;
  }

  .checkmark {
    background-color: transparent;
    border: 2px solid var(--color-gray-lightest, #e1e3e4);
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface, #ffffff);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary, #2c6fb7);
    border: none;
  }

  .checkmark:after {
    border-bottom: 2px solid var(--color-surface, #ffffff);
    border-right: 2px solid var(--color-surface, #ffffff);
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
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_checkbox_ChameleonCheckbox=class ChameleonCheckbox extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value=""}render(){return lit_element.d`
      <input type="checkbox" ?checked="${this.checked}" value="${this.value}" />
      <span class="checkmark"></span>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.nothing}};chameleon_checkbox_ChameleonCheckbox.styles=[chameleon_checkbox_style],__decorate([Object(lit_element.e)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_checkbox_ChameleonCheckbox.prototype,"checked",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"value",void 0);chameleon_checkbox_ChameleonCheckbox=__decorate([Object(lit_element.c)("chameleon-checkbox")],chameleon_checkbox_ChameleonCheckbox)},600:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_chip_style=lit_element.b`
  :host {
    background-color: var(--color-primary, #2c6fb7);
    border-radius: 0.75em;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  :host([closeable]:hover) {
    background-color: var(--color-primary-dark, #004587);
    cursor: pointer;
  }

  span {
    align-items: center;
    color: var(--color-surface, #ffffff);
    display: flex;
    flex-direction: row;
    font-size: var(--font-size-input, 0.938rem);
    padding: 3px 14px;
  }

  ::slotted(svg) {
    padding-left: 10px;
    height: 12px;
    width: auto;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_chip_ChameleonChip=class ChameleonChip extends lit_element.a{render(){return lit_element.d`
      <span>
        <slot></slot>
      </span>
    `}};chameleon_chip_ChameleonChip.styles=[chameleon_chip_style];chameleon_chip_ChameleonChip=__decorate([Object(lit_element.c)("chameleon-chip")],chameleon_chip_ChameleonChip)},601:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),style_map=__webpack_require__(271),lit_html=__webpack_require__(2),chameleon_hero_style=lit_element.b`
  header {
    padding: 0 5em;
  }

  .hero {
    align-items: center;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    min-height: 400px;
    width: 100%;
  }

  .hero-title {
    font-size: var(--font-size-hero-title, 3rem);
    font-weight: normal;
    letter-spacing: -0.72px;
    margin: 0 0 8px;
  }

  .hero-subtitle {
    font-size: var(--font-size-hero-subtitle, 1.375rem);
    font-weight: normal;
    margin: 0 0 16px;
  }

  .hero-text {
    font-size: var(--font-size-paragraph-medium);
    letter-spacing: 0.25px;
    margin: 0;
  }

  .hero-title,
  .hero-subtitle,
  .hero-text {
    color: var(--color-hero-text, #ffffff);
  }
`,__decorate=(__webpack_require__(269),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_hero_ChameleonHero=class ChameleonHero extends lit_element.a{constructor(){super(...arguments),this.title="",this.subTitle="",this.heroText="",this.imageUrl="",this.type="gradient",this.gradient="var(--color-primary-dark), var(--color-secondary-dark)",this.gradientAlpha=.5,this.loading=!1}render(){return lit_element.d`
      ${this.loading?lit_element.d`
            <chameleon-skeleton height="${400}"></chameleon-skeleton>
          `:lit_element.d`
            <div class="hero" style="${Object(style_map.a)(this.backgroundImageStyles)}">
              <header class="heading">
                ${this.title?lit_element.d`
                      <h1 class="hero-title surface-color">${this.title}</h1>
                    `:lit_html.nothing}
                ${this.subTitle?lit_element.d`
                      <h3 class="hero-subtitle surface-color">
                        ${this.subTitle}
                      </h3>
                    `:lit_html.nothing}
                ${this.heroText?lit_element.d`
                      <p class="hero-text surface-color">
                        ${this.heroText}
                      </p>
                    `:lit_html.nothing}
                <slot></slot>
              </header>
            </div>
          `}
    `}get backgroundImageStyles(){switch(this.type){case"imageGradient":return{backgroundImage:`linear-gradient(to right, ${this.gradientOverlay}), url(${this.imageUrl})`};case"gradient":return{backgroundImage:`linear-gradient(to right, ${this.gradientHex})`};case"image":return{backgroundImage:`url(${this.imageUrl})`};default:return{backgroundImage:`linear-gradient(to right, ${this.gradientHex})`}}}get gradientHex(){return this.gradient.split(",").map(h=>h.trim())}get gradientOverlay(){return this.gradient.split(",").map(h=>this.hex2rgba(h.trim(),this.gradientAlpha))}hex2rgba(hex,alpha=.5){const[r,g,b]=hex.match(/\w\w/g).map(x=>parseInt(x,16));return`rgba(${r},${g},${b},${alpha})`}};chameleon_hero_ChameleonHero.styles=[chameleon_hero_style],__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"title",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"subTitle",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"heroText",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"imageUrl",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"type",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"gradient",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_hero_ChameleonHero.prototype,"gradientAlpha",void 0),__decorate([Object(lit_element.e)({type:Boolean})],chameleon_hero_ChameleonHero.prototype,"loading",void 0);chameleon_hero_ChameleonHero=__decorate([Object(lit_element.c)("chameleon-hero")],chameleon_hero_ChameleonHero)},602:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),class_map=__webpack_require__(52),chameleon_input_style=lit_element.b`
  :host {
    font-family: var(--font-family, sans-serif);
  }

  .component-wrapper {
    display: inline-flex;
    flex-direction: column;
  }

  input {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: var(--border-radius-input, 0.313rem);
    box-sizing: border-box;
    font-size: var(--font-size-input, 0.938rem);
    font-family: var(--font-family, sans-serif);
    max-width: 100%;
    padding: var(--input-padding, 0.625rem 0.5rem);
  }

  .invalid input {
    border-color: var(--color-error, #bc1c16);
  }

  .component-wrapper:hover:not(.invalid) input:not([disabled]),
  .component-wrapper:active:not(.invalid) input:not([disabled]) {
    border-color: var(--color-primary, #2c6fb7);
    color: var(--color-primary, #2c6fb7);
  }

  .label-row {
    display: flex;
  }

  label,
  .label-row span {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }

  .component-wrapper.invalid .label-row span,
  label.invalid {
    color: var(--color-error, #bc1c16);
  }

  .label-row span {
    flex: 1;
    align-self: flex-end;
    display: flex;
    justify-content: end;
  }

  .label-row span svg {
    padding-right: 3px;
  }

  .component-wrapper:hover:not(.invalid):not(.disabled) label,
  .component-wrapper:active:not(.invalid):not(.disabled) label,
  .component-wrapper:hover:not(.invalid):not(.disabled) .label-row span,
  .component-wrapper:active:not(.invalid):not(.disabled) .label-row span {
    color: var(--color-primary, #2c6fb7);
  }

  .error {
    color: var(--color-error, #bc1c16);
    font-size: var(--font-size-label, 0.875rem);
    margin-top: 3px;
    display: flex;
    align-items: center;
  }

  .error svg {
    padding-right: 0.5rem;
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
    color: var(--color-gray-darkest, #6c737a);
  }

  ::slotted(*) {
    color: var(--color-gray-darkest, #6c737a);
    height: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  .invalid ::slotted(svg) {
    color: var(--color-error, #bc1c16);
  }

  ::slotted([slot="icon-left"]) {
    left: 13px;
  }

  ::slotted([slot="icon-right"]) {
    right: 13px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_input_ChameleonInput=class ChameleonInput extends lit_element.a{constructor(){super(...arguments),this.autocomplete=!1,this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.toggleable=!1,this.type="text",this.placeholder="",this.value="",this.min=null,this.max=null,this.label="",this.validationMessage="",this["icon-left"]=!1,this["icon-right"]=!1}firstUpdated(){this.requestUpdate()}render(){return lit_element.d`
      <div
        class="
      ${Object(class_map.a)({"component-wrapper":!0,invalid:this._invalidState,disabled:this.disabled})}"
      >
        <div
          class="${Object(class_map.a)({"label-row":!0})}"
        >
          ${this.labelText}${this.toggleText}
        </div>
        <div
          class="
        ${Object(class_map.a)({"input-wrapper":!0,"icon-left":this["icon-left"],"icon-right":this["icon-right"]})}"
        >
          <slot name="icon-left"></slot>
          ${this._inputEl}
          <slot name="icon-right"></slot>
        </div>
        ${this.errorText}
      </div>
    `}get _inputEl(){switch(this.type){case"text":return lit_element.d`
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
        `;case"number":return lit_element.d`
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
        `;default:return lit_element.d`
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
        `}}get _el(){return null!==this.shadowRoot?this.shadowRoot.querySelector("input"):null}get labelText(){return""!==this.label?lit_element.d`
        <label
          for="cha-input"
          class="${Object(class_map.a)({invalid:this._invalidState})}"
          >${this.label}</label
        >
      `:lit_html.nothing}get toggleText(){return this.toggleable?lit_element.d`
        <span @click="${this._toggleType}">
          ${"password"==this.type?this.eyeIcon:this.eyeOffIcon}
          ${"password"==this.type?"Show":"Hide"}
        </span>
      `:lit_html.nothing}_toggleType(){"password"==this.type?this.type="text":this.type="password"}get errorText(){return""!==this.validationMessage?lit_element.d`
        <span class="error">${this.warningIcon} ${this.validationMessage}</span>
      `:lit_html.nothing}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}get _invalidState(){return null===this._el||(!this.checkValidity()||this.validationMessage.length>0)}_handleInput(e){this.value=e.target.value}_handleBlur(){this.checkValidity()&&(this.validationMessage="")}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}get warningIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
  `}get eyeIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    `}get eyeOffIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>  
    `}};chameleon_input_ChameleonInput.styles=[chameleon_input_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autocomplete",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autofocus",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"readonly",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"required",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"toggleable",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"type",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"placeholder",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_input_ChameleonInput.prototype,"value",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"min",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"max",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_input_ChameleonInput.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_input_ChameleonInput.prototype,"validationMessage",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-left",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-right",void 0);chameleon_input_ChameleonInput=__decorate([Object(lit_element.c)("chameleon-input")],chameleon_input_ChameleonInput)},603:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_paginator_style=lit_element.b`
  :host {
    align-items: center;
    display: flex;
  }

  .pages {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .page {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    margin: 18px;
  }

  .separator {
    cursor: auto;
    margin: 14px;
  }

  .current,
  .page:not(.separator):hover {
    color: var(--color-surface, #ffffff);
    margin: 0 4px;
  }

  .current span,
  .page:not(.separator):hover {
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    border-radius: 50%;
    display: inline-flex;
    height: 36px;
    justify-content: center;
    width: 36px;
  }

  .placeholder {
    width: 68px;
  }
`,__decorate=(__webpack_require__(173),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_paginator_ChameleonPaginator=class ChameleonPaginator extends lit_element.a{constructor(){super(...arguments),this.totalItems=null,this.pageSize=null,this.currentPage=1,this.maxLength=7,this.separator="..."}render(){return lit_element.d`
      ${this.isFirstPage?lit_element.d`
            <div class="placeholder"></div>
          `:lit_element.d`
            <chameleon-button
              theme="text"
              name="prev"
              @click="${this._previous}"
              >${this.iconLeftCircle}</chameleon-button
            >
          `}
      <ul class="pages">
        ${this.pages.map(page=>page===this.currentPage?lit_element.d`
              <li
                class="page current"
                data-page="${page}"
                @click="${this._goToPage}"
              >
                <span>${page}</span>
              </li>
            `:page!==this.separator?lit_element.d`
              <li class="page" data-page="${page}" @click="${this._goToPage}">
                <span>${page}</span>
              </li>
            `:lit_element.d`
              <li class="page separator"><span>${page}</span></li>
            `)}
      </ul>
      ${this.isLastPage?lit_html.nothing:lit_element.d`
            <chameleon-button theme="text" name="next" @click="${this._next}">
              ${this.iconRightCircle}
            </chameleon-button>
          `}
    `}get iconLeftCircle(){return lit_element.f`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`}get iconRightCircle(){return lit_element.f`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`}get isFirstPage(){return 1===this.currentPage}get isLastPage(){return this.currentPage===this.totalPages}get totalPages(){const totalItems=this.totalItems,pageSize=this.pageSize;return null===totalItems||null===pageSize?0:Math.ceil(totalItems/pageSize)}get pages(){const result=[],midPoint=Math.round(this.maxLength/2);if(this.currentPage=Math.max(1,Math.min(this.currentPage,this.totalPages)),this.totalPages<=this.maxLength)for(let i=1;i<=this.totalPages;i++)result.push(i);else if(this.currentPage<midPoint&&this.currentPage<this.maxLength){const highestNum=Math.max(midPoint,this.maxLength-1);for(let i=1;i<highestNum;i++)result.push(i);result.push(this.separator),result.push(this.totalPages)}else if(this.currentPage>this.totalPages-this.maxLength+3){result.push(1),result.push(this.separator);const offset=3;for(let i=this.totalPages-this.maxLength+offset;i<=this.totalPages;i++)result.push(i)}else{result.push(1),result.push(this.separator);const midPages=this.maxLength-4,first=this.currentPage-Math.ceil(midPages/2)+1;for(let i=0;i<midPages;i++)result.push(first+i);result.push(this.separator),result.push(this.totalPages)}return result}_previous(){this.currentPage--,this.dispatchChange()}_next(){this.currentPage++,this.dispatchChange()}_goToPage(e){const page=e.target.closest("[data-page]").dataset.page,currentPage=parseInt(String(page));this.currentPage=isNaN(currentPage)?1:currentPage,this.dispatchChange()}dispatchChange(){this.dispatchEvent(new CustomEvent("page-change",{detail:{currentPage:this.currentPage},composed:!0,bubbles:!0}))}};chameleon_paginator_ChameleonPaginator.styles=[chameleon_paginator_style],__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"totalItems",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"pageSize",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"currentPage",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"maxLength",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_paginator_ChameleonPaginator.prototype,"separator",void 0);chameleon_paginator_ChameleonPaginator=__decorate([Object(lit_element.c)("chameleon-paginator")],chameleon_paginator_ChameleonPaginator)},604:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_radio_style=lit_element.b`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input, 0.938rem);
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
    background-color: var(--color-surface, #ffffff);
    border: 2px solid var(--color-gray-lightest, #e1e3e4);
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface, #ffffff);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary, #2c6fb7);
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
    background: var(--color-surface, #ffffff);
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
    background-color: var(--color-gray-lightest, #e1e3e4);
    pointer-events: none;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_radio_ChameleonRadio=class ChameleonRadio extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value="",this.disabled=!1}render(){return lit_element.d`
      <input
        type="radio"
        ?checked="${this.checked}"
        value="${this.value}"
        ?disabled="${this.disabled}"
      />
      <span class="checkmark ${this.disabled?"disabled":""}"></span>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.nothing}};chameleon_radio_ChameleonRadio.styles=[chameleon_radio_style],__decorate([Object(lit_element.e)({type:String})],chameleon_radio_ChameleonRadio.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"checked",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_radio_ChameleonRadio.prototype,"value",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"disabled",void 0);chameleon_radio_ChameleonRadio=__decorate([Object(lit_element.c)("chameleon-radio")],chameleon_radio_ChameleonRadio)},605:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_rice_ball_dessert_style=lit_element.b`
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    background: #f7e5d7;
  }

  .riceball {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em, #fff;
    background-blend-mode: hard-light;
    box-shadow: inset -25px -25px 25px rgba(229, 219, 211, 0.8),
      5px 5px 15px 5px rgba(216, 200, 190, 0.3);
    -webkit-clip-path: inset(-40px -30px 25% -20px);
    clip-path: inset(-40px -30px 25% -20px);
  }

  .riceball .face {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(5deg);
    transform: translate(-50%, -50%) rotate(5deg);
    width: 30px;
    height: 20px;
    background: #000;
    border-radius: 50%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .riceball .face::before,
  .riceball .face::after {
    display: block;
    content: "";
    position: absolute;
    top: -5px;
    width: 12px;
    height: 12px;
    background: #000;
    border-radius: 50%;
  }

  .riceball .face::before {
    left: -40px;
  }

  .riceball .face::after {
    right: -40px;
  }

  .riceball.uno {
    left: 150px;
    bottom: 65px;
    -webkit-animation: 3s rice-up infinite;
    animation: 3s rice-up infinite;
  }

  .riceball.uno .face {
    -webkit-transform: translate(-50%, -50%) rotate(-20deg);
    transform: translate(-50%, -50%) rotate(-20deg);
    -webkit-animation: 3s face-bob infinite;
    animation: 3s face-bob infinite;
  }

  .riceball.uno .face::before,
  .riceball.uno .face::after {
    -webkit-animation: 3s eye-bulge infinite;
    animation: 3s eye-bulge infinite;
  }

  .riceball.dos {
    left: 20px;
    bottom: -35px;
    -webkit-animation: 1s little-bob1 linear infinite;
    animation: 1s little-bob1 linear infinite;
  }

  .riceball.dos .face {
    -webkit-transform: translate(-50%, -50%) rotate(-5deg);
    transform: translate(-50%, -50%) rotate(-5deg);
  }

  .riceball.tres {
    bottom: 0;
    right: 30px;
    -webkit-animation: 1.2s little-bob2 linear infinite;
    animation: 1.2s little-bob2 linear infinite;
  }

  .syrup {
    position: absolute;
    bottom: -50px;
    width: 500px;
    height: 200px;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em,
      radial-gradient(
        ellipse at bottom center,
        #f0ad42 0%,
        #feda90 31%,
        #f0ad42 66%,
        #feda90 86%,
        #f0ad42 100%
      );
    background-blend-mode: hard-light;
  }

  .bowl {
    position: absolute;
    top: calc(50% + 100px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 500px;
    height: 250px;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/15em 15em,
      radial-gradient(
        ellipse at top left,
        #fff 0%,
        #fcfcfc 35%,
        #f1ccbb 60%,
        #fdf1dd 70%,
        #fff 80%
      );
    background-blend-mode: hard-light;
    border-bottom-left-radius: 230px;
    border-bottom-right-radius: 230px;
    box-shadow: 15px 40px 80px -30px #c5ae9f;
  }

  .back {
    position: absolute;
    top: -100px;
    width: 500px;
    height: 200px;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em,
      radial-gradient(
        ellipse at bottom right,
        #fff 0%,
        #fcfcfc 35%,
        #f1ccbb 60%,
        #fdf1dd 75%,
        #fff 90%
      );
    background-blend-mode: hard-light;
  }

  .contents {
    position: fixed;
    bottom: 150px;
    width: 500px;
    height: 400px;
    border-bottom-left-radius: 50% 100px;
    border-bottom-right-radius: 50% 100px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow: hidden;
  }

  .spoon {
    position: absolute;
    top: -60%;
    left: -200px;
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
    width: 300px;
    height: 40px;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/5em 10em,
      linear-gradient(to bottom, #fff 40%, #e2d7cb 100%);
    background-blend-mode: hard-light;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    -webkit-animation: spoon-up 3s infinite;
    animation: spoon-up 3s infinite;
  }

  .spoon .scoop {
    position: absolute;
    top: 50%;
    right: -200px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 220px;
    height: 140px;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em, #fff;
    background-blend-mode: hard-light;
    box-shadow: inset -10px -5px 15px #ceb499, 10px 10px 50px -10px #c5ae9f;
  }

  .spoon .scoop::before {
    display: block;
    content: "";
    position: absolute;
    top: 2px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 200px;
    height: 120px;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em,
      linear-gradient(to bottom, #e2d7cb 20%, #fff 100%);
    background-blend-mode: hard-light;
    border-radius: 50%;
  }

  @-webkit-keyframes spoon-up {
    0% {
      top: -60%;
      left: -200px;
    }

    25% {
      top: -80%;
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    50% {
      top: -90%;
      left: -300px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }

    100% {
      top: -60%;
      left: -200px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }
  }

  @keyframes spoon-up {
    0% {
      top: -60%;
      left: -200px;
    }

    25% {
      top: -80%;
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    50% {
      top: -90%;
      left: -300px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }

    100% {
      top: -60%;
      left: -200px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }
  }

  @-webkit-keyframes rice-up {
    0% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    25% {
      bottom: 160px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    50% {
      left: 20px;
      bottom: 140px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    55% {
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    100% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @keyframes rice-up {
    0% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    25% {
      bottom: 160px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    50% {
      left: 20px;
      bottom: 140px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    55% {
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    100% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @-webkit-keyframes face-bob {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }

    50% {
      height: 10px;
      -webkit-transform: translate(-50%, -50%) rotate(-10deg);
      transform: translate(-50%, -50%) rotate(-10deg);
    }

    100% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }
  }

  @keyframes face-bob {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }

    50% {
      height: 10px;
      -webkit-transform: translate(-50%, -50%) rotate(-10deg);
      transform: translate(-50%, -50%) rotate(-10deg);
    }

    100% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }
  }

  @-webkit-keyframes eye-bulge {
    0% {
      width: 12px;
      height: 12px;
    }

    50% {
      width: 18px;
      height: 18px;
    }

    100% {
      width: 12px;
      height: 12px;
    }
  }

  @keyframes eye-bulge {
    0% {
      width: 12px;
      height: 12px;
    }

    50% {
      width: 18px;
      height: 18px;
    }

    100% {
      width: 12px;
      height: 12px;
    }
  }

  @-webkit-keyframes little-bob1 {
    0% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -33px;
      -webkit-clip-path: inset(-40px -30px 23% -20px);
      clip-path: inset(-40px -30px 23% -20px);
    }

    100% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @keyframes little-bob1 {
    0% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -33px;
      -webkit-clip-path: inset(-40px -30px 23% -20px);
      clip-path: inset(-40px -30px 23% -20px);
    }

    100% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @-webkit-keyframes little-bob2 {
    0% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -2px;
      -webkit-clip-path: inset(-40px -30px 26% -20px);
      clip-path: inset(-40px -30px 26% -20px);
    }

    100% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @keyframes little-bob2 {
    0% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -2px;
      -webkit-clip-path: inset(-40px -30px 26% -20px);
      clip-path: inset(-40px -30px 26% -20px);
    }

    100% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_rice_ball_dessert_ChameleonRiceBallDessert=class ChameleonRiceBallDessert extends lit_element.a{constructor(){super(...arguments),this.riceBallColor="red"}render(){return lit_element.d`
      <div class="bowl">
        <div class="back"></div>
        <div class="spoon">
          <div class="scoop"></div>
        </div>
        <div class="contents">
          <div class="syrup"></div>
          <div class="riceball uno" style="background: ${this.riceBallColor}">
            <div class="face"></div>
          </div>
          <div class="riceball dos" style="background: ${this.riceBallColor}">
            <div class="face"></div>
          </div>
          <div class="riceball tres" style="background: ${this.riceBallColor}">
            <div class="face"></div>
          </div>
        </div>
      </div>
    `}};chameleon_rice_ball_dessert_ChameleonRiceBallDessert.styles=[chameleon_rice_ball_dessert_style],__decorate([Object(lit_element.e)({type:String})],chameleon_rice_ball_dessert_ChameleonRiceBallDessert.prototype,"riceBallColor",void 0);chameleon_rice_ball_dessert_ChameleonRiceBallDessert=__decorate([Object(lit_element.c)("chameleon-rice-ball-dessert")],chameleon_rice_ball_dessert_ChameleonRiceBallDessert)},606:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_sheet_style=lit_element.b`
  :host {
    position: fixed;
    display: inline-block;
    height: 100%;
    right: 0;
    min-width: 320px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    background-color: var(--color-surface, #ffffff);
  }

  :host([sheetopened]) {
    transform: translateX(0);
  }

  .head-container {
    position: relative;
    padding: 20px;
  }

  .header {
    font-family: var(--font-family, sans-serif);
    color: var(--color-primary, #2c6fb7);
    font-size: var(--font-size-title, 1.4rem);
    font-weight: 400;
    margin-top: 0;
  }

  .sub-header {
    display: block;
    font-family: var(--font-family, sans-serif);
    color: var(--color-primary, #2c6fb7);
    font-size: 1rem;
    font-weight: 400;
    margin: 16px 20px 0 20px;
  }

  .close-icon {
    display: flex;
    cursor: pointer;
    margin: 20px 20px 0 0;
    position: absolute;
    top: 0;
    right: 0;
  }

  ::slotted(p) {
    color: var(--color-gray-darkest, #6c737a);
  }

  ::slotted([slot="details"]) {
    font-size: var(--font-size-subtitle, 0.938rem);
  }

  ::slotted([slot="actions"]) {
    border-top: solid 2px #e1e3e4;
    border-bottom: solid 2px #e1e3e4;
    padding: 20px;
    font-size: var(--font-size-subtitle, 0.938rem);
  }

  ::slotted([slot="content"]) {
    padding: 0 20px;
    font-size: var(--font-size-label, 0.875rem);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_sheet_ChameleonSheet=class ChameleonSheet extends lit_element.a{constructor(){super(...arguments),this.header="",this.subHeader="",this.sheetOpened=!1}render(){return lit_element.d`
      <header class="head-container">
        <div class="close-icon" @click="${this._toggleSheet}">
          ${this.closeIcon}
        </div>
        <h3 class="header">${this.header}</h3>

        <slot name="details"></slot>
      </header>

      <slot name="actions"></slot>
      ${this.subHeader?lit_element.d`
            <span class="sub-header">${this.subHeader}</span>
          `:lit_html.nothing}
      <slot name="content"></slot>
    `}_toggleSheet(){this.sheetOpened=!this.sheetOpened;const e=new CustomEvent("toggle-sheet",{bubbles:!0,composed:!0});this.dispatchEvent(e)}get closeIcon(){return void 0===Array.from(this.querySelectorAll("[slot]")).find(slot=>"close-icon"===slot.slot)?lit_html.svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`:lit_element.d`
        <slot name="close-icon"></slot>
      `}};chameleon_sheet_ChameleonSheet.styles=[chameleon_sheet_style],__decorate([Object(lit_element.e)({type:String})],chameleon_sheet_ChameleonSheet.prototype,"header",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_sheet_ChameleonSheet.prototype,"subHeader",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_sheet_ChameleonSheet.prototype,"sheetOpened",void 0);chameleon_sheet_ChameleonSheet=__decorate([Object(lit_element.c)("chameleon-sheet")],chameleon_sheet_ChameleonSheet)},607:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_switch_style=lit_element.b`
  :host {
    align-items: center;
    display: inline-flex;
    font-size: var(--font-size-input, 0.938rem);
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
    background-color: var(--color-gray-lightest, #e1e3e4);
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
    background-color: var(--color-surface, #ffffff);
    border-radius: 50%;
    bottom: 2px;
    box-shadow: 1px 0 3px var(--color-box-shadow, rgba(159, 164, 168, 0.6));
    content: "";
    height: 16px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: var(--color-primary, #2c6fb7);
  }

  input:focus + .slider {
    box-shadow: 0 0 3px var(--color-gray-dark, #9fa4a8);
  }

  input:checked + .slider:before {
    box-shadow: none;
    transform: translateX(12px);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_switch_ChameleonSwitch=class ChameleonSwitch extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value=""}render(){return lit_element.d`
      <div class="switch">
        <input type="radio" ?checked="${this.checked}" value="${this.value}" />
        <span class="slider"></span>
      </div>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.nothing}};chameleon_switch_ChameleonSwitch.styles=[chameleon_switch_style],__decorate([Object(lit_element.e)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_switch_ChameleonSwitch.prototype,"checked",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"value",void 0);chameleon_switch_ChameleonSwitch=__decorate([Object(lit_element.c)("chameleon-switch")],chameleon_switch_ChameleonSwitch)},608:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_tabs_style=lit_element.b`
  :host {
    box-shadow: inset 0 -1px 0 0 rgba(26, 57, 96, 0.1);
    display: flex;
    justify-content: space-around;
  }

  ::slotted(chameleon-tab) {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    font-size: 1.125em;
    height: 65px;
    justify-content: center;
    padding: 8px 12px;
    color: var(--color-gray-light, #c4c7ca);
  }

  ::slotted(chameleon-tab:hover) {
    cursor: pointer;
    color: var(--color-secondary, #69c9b9);
  }

  ::slotted([active]) {
    border-bottom: solid 1px var(--color-secondary, #69c9b9);
    box-shadow: inset 0 -2px 0 0 var(--color-secondary, #69c9b9);
    color: var(--color-secondary, #69c9b9);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_tabs_ChameleonTabs=class ChameleonTabs extends lit_element.a{constructor(){super(),this.selected=0,this.addEventListener("selected-changed",this._handleSelectedChanged)}firstUpdated(){const tabs=Array.from(this.querySelectorAll("chameleon-tab"));if(tabs.length<=0)throw new Error("<chameleon-tabs> must have at least one <chameleon-tab> element");tabs.forEach((tab,i)=>tab.setAttribute("data-index",i.toString()))}updated(changedProperties){if(changedProperties.has("selected")){Array.from(this.querySelectorAll("chameleon-tab")).forEach((tab,i)=>{tab.removeAttribute("active"),i===this.selected&&tab.setAttribute("active","true")})}}render(){return lit_element.d`
      <slot></slot>
    `}_handleSelectedChanged(e){e.preventDefault(),this.selected=parseInt(e.detail.value)}};chameleon_tabs_ChameleonTabs.styles=[chameleon_tabs_style],__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_tabs_ChameleonTabs.prototype,"selected",void 0);chameleon_tabs_ChameleonTabs=__decorate([Object(lit_element.c)("chameleon-tabs")],chameleon_tabs_ChameleonTabs)},609:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_textarea_style=lit_element.b`
  :host {
    display: inline-flex;
    flex-direction: column;
  }

  textarea {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: var(--border-radius-input, 0.313rem);
    font-size: var(--font-size-input, 0.938rem);
    padding: var(--textarea-padding, 0.438rem 0.813rem);
  }

  label {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }

  .error {
    color: var(--color-error, #bc1c16);
    font-size: var(--font-size-label, 0.875rem);
    margin-top: 3px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_textarea_ChameleonTextarea=class ChameleonTextarea extends lit_element.a{constructor(){super(...arguments),this.autocomplete=!1,this.autofocus=!1,this.cols=20,this.disabled=!1,this.maxlength=null,this.minlength=null,this.placeholder="",this.readonly=!1,this.required=!1,this.rows=2,this.spellcheck=!1,this.value="",this.label="",this.validationMessage=""}render(){return lit_element.d`
      ${this.labelText}
      <textarea
        name="cha-textarea"
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
        @input="${this._handleInput}"
      ></textarea>
      ${this.errorText}
    `}get _el(){return null!==this.shadowRoot?this.shadowRoot.querySelector("textarea"):null}get labelText(){return""!==this.label?lit_element.d`
        <label for="cha-textarea">${this.label}</label>
      `:lit_html.nothing}get errorText(){return""!==this.validationMessage?lit_element.d`
        <span class="error">${this.validationMessage}</span>
      `:lit_html.nothing}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}_handleBlur(){this.checkValidity()}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}_handleInput(e){this.value=e.target.value}};chameleon_textarea_ChameleonTextarea.styles=[chameleon_textarea_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autocomplete",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autofocus",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"cols",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"maxlength",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"minlength",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"placeholder",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"readonly",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"required",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"rows",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"spellcheck",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"value",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"validationMessage",void 0);chameleon_textarea_ChameleonTextarea=__decorate([Object(lit_element.c)("chameleon-textarea")],chameleon_textarea_ChameleonTextarea)}},[[272,1,2]]]);
//# sourceMappingURL=main.e98a9f729964e48ce38d.bundle.js.map