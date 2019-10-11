(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32);__webpack_exports__.a=lit_element__WEBPACK_IMPORTED_MODULE_0__.a`
  :host {
    --border-radius: 0.5em;
    --border-radius-input: 0.313em;
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
    --font-family: Arial, Helvetica, sans-serif;
  }
`},350:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(152),base=__webpack_require__(34),skeleton=__webpack_require__(32).a`
  .rectangle {
    fill: var(--color-gray-lightest);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_skeleton_ChameleonSkeleton=class ChameleonSkeleton extends lit_element.a{constructor(){super(...arguments),this.disabled=!1,this.theme="primary",this.height="100%",this.width="100%"}render(){return lit_element.c`
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
    `}};chameleon_skeleton_ChameleonSkeleton.styles=[base.a,skeleton],__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"disabled",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"theme",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"height",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"width",void 0);chameleon_skeleton_ChameleonSkeleton=__decorate([Object(lit_element.b)("chameleon-skeleton")],chameleon_skeleton_ChameleonSkeleton)},353:function(module,exports,__webpack_require__){__webpack_require__(354),__webpack_require__(454),module.exports=__webpack_require__(455)},455:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33);const req=__webpack_require__(599);Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(req)},module)}.call(this,__webpack_require__(92)(module))},599:function(module,exports,__webpack_require__){var map={"./button.stories.ts":600,"./card.stories.ts":615,"./checkbox.stories.ts":616,"./chip.stories.ts":617,"./hero.stories.ts":618,"./input.stories.ts":619,"./loader.stories.ts":620,"./radio.stories.ts":621,"./rice-ball-dessert.stories.ts":622,"./skeleton.stories.ts":623,"./switch.stories.ts":624,"./tabs.stories.ts":625,"./textarea.stories.ts":627};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=599},600:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(628);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Primary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="primary"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Secondary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="secondary"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Text",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="text"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},615:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(629),__webpack_require__(630),__webpack_require__(631);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Card",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.addParameters({backgrounds:[{name:"gray",value:"#f5f5f8",default:!0},{name:"black",value:"#252a33"}]}),stories.add("Basic",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
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
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(632);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Checkbox",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Checkbox",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-checkbox
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-checkbox>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(633);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Chip",module),searchIcon=lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Chip",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-chip>Crunchy</chameleon-chip>
    `,{info:{inline:!0}}),stories.add("With Icon",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-chip closeable>Crunchy ${searchIcon}</chameleon-chip>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(634);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Hero",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("CSS Gradient",()=>{const title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),heroText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Viverra adipiscing at in tellus integer feugiat."),gradientColors=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Hex Colors","#B72126, #14264B"),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
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
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(635);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Input",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);const searchIcon=slot=>lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`
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
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},620:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(636);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Loader",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Loader",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-loader></chameleon-loader>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(637);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Radio",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Radio",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-radio
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?disabled=${disabled}
      ></chameleon-radio>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},622:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(638);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Rice Ball Dessert",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Basic",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-rice-ball-dessert></chameleon-rice-ball-dessert>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},623:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(350);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Skeleton",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Skeleton",()=>{const height=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Height","100%"),width=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Width","100%");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-skeleton height="${height}" width="${width}">
      </chameleon-skeleton>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},624:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(639);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Switch",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Switch",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-switch
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-switch>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},625:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(640),__webpack_require__(626);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Tabs",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Tabs",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
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
    `,{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},626:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(140);let ChameleonTab=class ChameleonTab extends lit_element__WEBPACK_IMPORTED_MODULE_0__.a{constructor(){super(),this.addEventListener("click",this.handleToggle)}render(){return lit_element__WEBPACK_IMPORTED_MODULE_0__.c`
      <slot></slot>
    `}handleToggle(){this.dispatchEvent(new CustomEvent("selected-changed",{detail:{value:this.dataset.index},bubbles:!0,composed:!0}))}};ChameleonTab=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__.b)("chameleon-tab")],ChameleonTab)},627:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28);__webpack_require__(641);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Textarea",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Textarea",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),minlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("minlength",0),maxlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxlength",500),rows=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Rows",2),cols=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Columns",20);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
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
    `},{info:{inline:!0}})}.call(this,__webpack_require__(92)(module))},628:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(184),class_map=__webpack_require__(351),base=__webpack_require__(34),base_button=__webpack_require__(32).a`
  :host {
    display: inline;
  }

  :host([full-width]) button {
    width: 100%;
  }

  button[disabled] {
    background-color: var(--color-gray-lightest);
    border-color: var(--color-gray-lightest);
    color: var(--color-gray-darkest);
    pointer-events: none;
  }

  button {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-input);
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
    `}};chameleon_button_ChameleonButton.styles=[base.a,base_button],__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"disabled",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_button_ChameleonButton.prototype,"theme",void 0);chameleon_button_ChameleonButton=__decorate([Object(lit_element.b)("chameleon-button")],chameleon_button_ChameleonButton)},629:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(228),base=__webpack_require__(34),card=__webpack_require__(32).a`
  :host {
    background-color: var(--color-surface);
    display: inline-block;
    max-width: 344px;
    padding: 16px;
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest);
  }

  :host([rounded]) {
    border-radius: var(--border-radius);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_ChameleonCard=class ChameleonCard extends lit_element.a{render(){return lit_element.c`
      <slot></slot>
    `}};chameleon_card_ChameleonCard.styles=[base.a,card];chameleon_card_ChameleonCard=__decorate([Object(lit_element.b)("chameleon-card")],chameleon_card_ChameleonCard)},630:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(153),lit_html=__webpack_require__(93),base=__webpack_require__(34),card_header=__webpack_require__(32).a`
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
    `}};chameleon_card_header_ChameleonCardHeader.styles=[base.a,card_header],__decorate([Object(lit_element.d)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"title",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"subtitle",void 0);chameleon_card_header_ChameleonCardHeader=__decorate([Object(lit_element.b)("chameleon-card-header")],chameleon_card_header_ChameleonCardHeader)},631:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(183),base=__webpack_require__(34),card_image=__webpack_require__(32).a`
  :host {
    display: inline-block;
  }

  img {
    border-radius: var(--border-radius);
    vertical-align: top;
    width: 100%;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_image_ChameleonCardImage=class ChameleonCardImage extends lit_element.a{constructor(){super(...arguments),this.src="",this.alt=""}render(){return lit_element.c`
      <img src="${this.src}" alt="${this.alt}" />
    `}};chameleon_card_image_ChameleonCardImage.styles=[base.a,card_image],__decorate([Object(lit_element.d)({type:String})],chameleon_card_image_ChameleonCardImage.prototype,"src",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_card_image_ChameleonCardImage.prototype,"alt",void 0);chameleon_card_image_ChameleonCardImage=__decorate([Object(lit_element.b)("chameleon-card-image")],chameleon_card_image_ChameleonCardImage)},632:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(173),lit_html=__webpack_require__(104),base=__webpack_require__(34),base_checkbox=__webpack_require__(32).a`
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
    `}get labelText(){return""!==this.label?this.label:lit_html.c}};chameleon_checkbox_ChameleonCheckbox.styles=[base.a,base_checkbox],__decorate([Object(lit_element.d)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_checkbox_ChameleonCheckbox.prototype,"checked",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"value",void 0);chameleon_checkbox_ChameleonCheckbox=__decorate([Object(lit_element.b)("chameleon-checkbox")],chameleon_checkbox_ChameleonCheckbox)},633:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(229),base=__webpack_require__(34),chip=__webpack_require__(32).a`
  :host {
    background-color: var(--color-primary);
    border-radius: 12px;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  :host([closeable]:hover) {
    background-color: var(--color-primary-dark);
    cursor: pointer;
  }

  span {
    align-items: center;
    color: var(--color-surface);
    display: flex;
    flex-direction: row;
    font-size: var(--font-size-input);
    padding: 3px 14px;
  }

  ::slotted(svg) {
    padding-left: 10px;
    height: 12px;
    width: auto;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_chip_ChameleonChip=class ChameleonChip extends lit_element.a{render(){return lit_element.c`
      <span>
        <slot></slot>
      </span>
    `}};chameleon_chip_ChameleonChip.styles=[base.a,chip];chameleon_chip_ChameleonChip=__decorate([Object(lit_element.b)("chameleon-chip")],chameleon_chip_ChameleonChip)},634:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(79),style_map=__webpack_require__(352),lit_html=__webpack_require__(54),base=__webpack_require__(34),hero=__webpack_require__(32).a`
  :host {
    --font-size-hero-title: 3em;
    --font-size-hero-subtitle: 1.375em;
    --color-hero-text: var(--color-surface);
  }

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
    font-size: var(--font-size-hero-title);
    font-weight: normal;
    letter-spacing: -0.72px;
    margin: 0 0 8px;
  }

  .hero-subtitle {
    font-size: var(--font-size-hero-subtitle);
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
    color: var(--color-hero-text);
  }
`,__decorate=(__webpack_require__(350),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_hero_ChameleonHero=class ChameleonHero extends lit_element.a{constructor(){super(...arguments),this.title="",this.subTitle="",this.heroText="",this.imageUrl="",this.type="gradient",this.gradient="var(--color-primary-dark), var(--color-secondary-dark)",this.gradientAlpha=.5,this.loading=!1}render(){return lit_element.c`
      ${this.loading?lit_element.c`
            <chameleon-skeleton height="${400}"></chameleon-skeleton>
          `:lit_element.c`
            <div class="hero" style="${Object(style_map.a)(this.backgroundImageStyles)}">
              <header class="heading">
                ${this.title?lit_element.c`
                      <h1 class="hero-title surface-color">${this.title}</h1>
                    `:lit_html.f}
                ${this.subTitle?lit_element.c`
                      <h3 class="hero-subtitle surface-color">
                        ${this.subTitle}
                      </h3>
                    `:lit_html.f}
                ${this.heroText?lit_element.c`
                      <p class="hero-text surface-color">
                        ${this.heroText}
                      </p>
                    `:lit_html.f}
                <slot></slot>
              </header>
            </div>
          `}
    `}get backgroundImageStyles(){switch(this.type){case"imageGradient":return{backgroundImage:`linear-gradient(to right, ${this.gradientOverlay}), url(${this.imageUrl})`};case"gradient":return{backgroundImage:`linear-gradient(to right, ${this.gradientHex})`};case"image":return{backgroundImage:`url(${this.imageUrl})`};default:return{backgroundImage:`linear-gradient(to right, ${this.gradientHex})`}}}get gradientHex(){return this.gradient.split(",").map(h=>h.trim())}get gradientOverlay(){return this.gradient.split(",").map(h=>this.hex2rgba(h.trim(),this.gradientAlpha))}hex2rgba(hex,alpha=.5){const[r,g,b]=hex.match(/\w\w/g).map(x=>parseInt(x,16));return`rgba(${r},${g},${b},${alpha})`}};chameleon_hero_ChameleonHero.styles=[base.a,hero],__decorate([Object(lit_element.d)({type:String})],chameleon_hero_ChameleonHero.prototype,"title",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_hero_ChameleonHero.prototype,"subTitle",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_hero_ChameleonHero.prototype,"heroText",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_hero_ChameleonHero.prototype,"imageUrl",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_hero_ChameleonHero.prototype,"type",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_hero_ChameleonHero.prototype,"gradient",void 0),__decorate([Object(lit_element.d)({type:Number})],chameleon_hero_ChameleonHero.prototype,"gradientAlpha",void 0),__decorate([Object(lit_element.d)({type:Boolean})],chameleon_hero_ChameleonHero.prototype,"loading",void 0);chameleon_hero_ChameleonHero=__decorate([Object(lit_element.b)("chameleon-hero")],chameleon_hero_ChameleonHero)},635:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(47),lit_html=__webpack_require__(55),class_map=__webpack_require__(267),base=__webpack_require__(34),input=__webpack_require__(32).a`
  :host {
    display: inline-flex;
    flex-direction: column;
    font-family: var(--font-family);
  }

  input {
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius-input);
    box-sizing: border-box;
    font-size: var(--font-size-input);
    font-family: var(--font-family);
    max-width: 100%;
    padding: var(--input-padding);
  }

  .invalid input {
    border-color: var(--color-error);
  }

  .invalid ::slotted(svg) {
    color: var(--color-error);
  }

  label {
    color: var(--color-gray-darkest);
    font-size: var(--font-size-label);
    margin-bottom: 10px;
  }

  label.invalid {
    color: var(--color-error);
  }

  .error {
    color: var(--color-error);
    font-size: var(--font-size-label);
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
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_input_ChameleonInput=class ChameleonInput extends lit_element.a{constructor(){super(...arguments),this.autocomplete=!1,this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.type="text",this.placeholder="",this.value="",this.min=null,this.max=null,this.label="",this.validationMessage="",this["icon-left"]=!1,this["icon-right"]=!1}firstUpdated(){this.requestUpdate()}render(){return lit_element.c`
      ${this.labelText}
      <div
        class="
        ${Object(class_map.a)({invalid:this._invalidState,"input-wrapper":!0,"icon-left":this["icon-left"],"icon-right":this["icon-right"]})}"
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
        <label
          for="cha-input"
          class="${Object(class_map.a)({invalid:this._invalidState})}"
          >${this.label}</label
        >
      `:lit_html.f}get errorText(){return""!==this.validationMessage?lit_element.c`
        <span class="error">${this.warningIcon} ${this.validationMessage}</span>
      `:lit_html.f}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}get _invalidState(){if(null!==this._el)return!this.checkValidity()||this.validationMessage.length>0}_handleInput(e){this.value=e.target.value}_handleBlur(){this.checkValidity()&&(this.validationMessage="")}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}get warningIcon(){return lit_html.g`
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
  `}};chameleon_input_ChameleonInput.styles=[base.a,input],__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autocomplete",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autofocus",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"disabled",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"readonly",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"required",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"type",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"placeholder",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_input_ChameleonInput.prototype,"value",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"min",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"max",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_input_ChameleonInput.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_input_ChameleonInput.prototype,"validationMessage",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-left",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-right",void 0);chameleon_input_ChameleonInput=__decorate([Object(lit_element.b)("chameleon-input")],chameleon_input_ChameleonInput)},636:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(230),base=__webpack_require__(34),loader=__webpack_require__(32).a`
  :host {
    --loader-color: var(--color-primary);
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
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_loader_ChameleonLoader=class ChameleonLoader extends lit_element.a{render(){return lit_element.c`
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `}};chameleon_loader_ChameleonLoader.styles=[base.a,loader];chameleon_loader_ChameleonLoader=__decorate([Object(lit_element.b)("chameleon-loader")],chameleon_loader_ChameleonLoader)},637:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(154),lit_html=__webpack_require__(105),base=__webpack_require__(34),base_radio=__webpack_require__(32).a`
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
    `}get labelText(){return""!==this.label?this.label:lit_html.c}};chameleon_radio_ChameleonRadio.styles=[base.a,base_radio],__decorate([Object(lit_element.d)({type:String})],chameleon_radio_ChameleonRadio.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"checked",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_radio_ChameleonRadio.prototype,"value",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"disabled",void 0);chameleon_radio_ChameleonRadio=__decorate([Object(lit_element.b)("chameleon-radio")],chameleon_radio_ChameleonRadio)},638:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(182);const styles=lit_element.b`
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
`;var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_rice_ball_dessert_ChameleonCard=class ChameleonCard extends lit_element.a{render(){return lit_element.d`
      <div class="bowl">
        <div class="back"></div>
        <div class="spoon">
          <div class="scoop"></div>
        </div>
        <div class="contents">
          <div class="syrup"></div>
          <div class="riceball uno">
            <div class="face"></div>
          </div>
          <div class="riceball dos">
            <div class="face"></div>
          </div>
          <div class="riceball tres">
            <div class="face"></div>
          </div>
        </div>
      </div>
    `}};chameleon_rice_ball_dessert_ChameleonCard.styles=[styles];chameleon_rice_ball_dessert_ChameleonCard=__decorate([Object(lit_element.c)("chameleon-rice-ball-dessert")],chameleon_rice_ball_dessert_ChameleonCard)},639:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(174),lit_html=__webpack_require__(106),base=__webpack_require__(34),base_switch=__webpack_require__(32).a`
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
    `}get labelText(){return""!==this.label?this.label:lit_html.c}};chameleon_switch_ChameleonSwitch.styles=[base.a,base_switch],__decorate([Object(lit_element.d)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_switch_ChameleonSwitch.prototype,"checked",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"value",void 0);chameleon_switch_ChameleonSwitch=__decorate([Object(lit_element.b)("chameleon-switch")],chameleon_switch_ChameleonSwitch)},640:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(140),base=__webpack_require__(34),tabs=__webpack_require__(32).a`
  :host {
    box-shadow: inset 0 -1px 0 0 rgba(26, 57, 96, 0.1);
    display: flex;
    justify-content: space-around;
  }

  ::slotted(chameleon-tab) {
    align-items: center;
    box-sizing: border-box;
    color: var(--color-secondary);
    display: flex;
    flex-grow: 1;
    font-size: 1.125em;
    height: 65px;
    justify-content: center;
    padding: 8px 12px;
  }

  ::slotted(chameleon-tab:hover) {
    cursor: pointer;
  }

  ::slotted([active]) {
    border-bottom: solid 1px var(--color-secondary);
    box-shadow: inset 0 -2px 0 0 var(--color-secondary);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_tabs_ChameleonTabs=class ChameleonTabs extends lit_element.a{constructor(){super(),this.selected=0,this.addEventListener("selected-changed",this._handleSelectedChanged)}firstUpdated(){const tabs=Array.from(this.querySelectorAll("chameleon-tab"));if(tabs.length<=0)throw new Error("<chameleon-tabs> must have at least one <chameleon-tab> element");tabs.forEach((tab,i)=>tab.setAttribute("data-index",i.toString()))}updated(changedProperties){if(changedProperties.has("selected")){Array.from(this.querySelectorAll("chameleon-tab")).forEach((tab,i)=>{tab.removeAttribute("active"),i===this.selected&&tab.setAttribute("active","true")})}}render(){return lit_element.c`
      <slot></slot>
    `}_handleSelectedChanged(e){e.preventDefault(),this.selected=parseInt(e.detail.value)}};chameleon_tabs_ChameleonTabs.styles=[base.a,tabs],__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_tabs_ChameleonTabs.prototype,"selected",void 0);chameleon_tabs_ChameleonTabs=__decorate([Object(lit_element.b)("chameleon-tabs")],chameleon_tabs_ChameleonTabs)},641:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(48),lit_html=__webpack_require__(94),base=__webpack_require__(34),base_textarea=__webpack_require__(32).a`
  :host {
    display: inline-flex;
    flex-direction: column;
  }

  textarea {
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius-input);
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
      `:lit_html.c}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}_handleBlur(){this.checkValidity()}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}};chameleon_textarea_ChameleonTextarea.styles=[base.a,base_textarea],__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autocomplete",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autofocus",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"cols",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"disabled",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"maxlength",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"minlength",void 0),__decorate([Object(lit_element.d)({type:String,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"placeholder",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"readonly",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"required",void 0),__decorate([Object(lit_element.d)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"rows",void 0),__decorate([Object(lit_element.d)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"spellcheck",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"value",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"label",void 0),__decorate([Object(lit_element.d)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"validationMessage",void 0);chameleon_textarea_ChameleonTextarea=__decorate([Object(lit_element.b)("chameleon-textarea")],chameleon_textarea_ChameleonTextarea)}},[[353,1,2]]]);
//# sourceMappingURL=main.3f08f1b05509bd966554.bundle.js.map