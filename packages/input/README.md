# Chameleon Input

```js script
import { html, svg } from "lit-html";
import {
  withKnobs,
  text,
  number,
  boolean,
  radios,
} from "@open-wc/demoing-storybook";
import "./src/chameleon-input.js";

const searchIcon = (slot) => svg`
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
`;

export default {
  title: "Components|Input",
  component: "chameleon-input",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name       | Type(s) | Default Value | Description                                                                                                          |
| ------------------- | ------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `autocomplete`      | Boolean | `false`       | A string indicating the type of autocomplete functionality, if any, to allow on the input                            |
| `name`              | String  | `"cha-input"` | The input's form name                                                                                                |
| `autofocus`         | Boolean | `false`       | A Boolean which, if present, makes the input take focus when the form is presented                                   |
| `disabled`          | Boolean | `false`       | A Boolean attribute which is present if the input should be disabled                                                 |
| `noStepper`         | Boolean | `false`       | A Boolean attribute which, if true, indicates that the input with number type will not display increment arrows      |
| `step`              | Number  | `null`        | The input's number interval (available in type="number")                                                             |
| `readonly`          | Boolean | `false`       | A Boolean attribute which, if true, indicates that the input cannot be edited                                        |
| `required`          | Boolean | `false`       | A Boolean which, if true, indicates that the input must have a value before the form can be submitted                |
| `toggleable`        | Boolean | `false`       | A Boolean which, if present and the input type is 'password', allows visibility of password characters to be toggled |
| `touched`           | Boolean | `false`       | A Boolean which, if true, indicates that the input field has had a blur event                                        |
| `type`              | String  | `"text"`      | A string indicating which input type the `<input>` element represents                                                |
| `placeholder`       | String  | `""`          | The input's placeholder value                                                                                        |
| `value`             | String  | `""`          | The input's current value                                                                                            |
| `min`               | Number  | `null`        | The input's min value (available in type="number")                                                                   |
| `max`               | Number  | `null`        | The input's max value (available in type="number")                                                                   |
| `maxLength`         | Number  | `null`        | The input's max length (availabile in all types expect type="number")                                                |
| `label`             | String  | `""`          | The input's label text                                                                                               |
| `invalid`           | Boolean | `false`       | Invalid boolean to allow validity access from higher level form errors                                               |
| `validationMessage` | String  | `""`          | The input's error message                                                                                            |
| `icon-left`         | Boolean | `false`       | Element has a left icon                                                                                              |
| `icon-right`        | Boolean | `false`       | Element has a right icon                                                                                             |

## Examples

### Default

```js preview-story
export const Default = () => {
  const name = text("Name", "input-form-name");
  const disabled = boolean("Disabled", false);
  const readonly = boolean("Read Only", false);
  const toggleable = boolean("Toggleable password visibility", false);
  const label = text("Label", "Name");
  const invalid = boolean("Invalid", false);

  const error = text("Error", "");
  const placeholder = text("Placeholder", "Text...");
  const required = boolean("Required", false);
  const step = number("Step", 0.01);
  const noStepper = boolean(
    "Hide increment arrows/disable incrementing",
    false
  );
  const typeOptions = {
    Text: "text",
    Password: "password",
    Email: "email",
    Number: "number",
    Search: "search",
    Tel: "tel",
    Url: "url",
  };
  const defaultThemeValue = "text";
  const typeSelection = radios("Type", typeOptions, defaultThemeValue);

  return html`
    <chameleon-input
      name="${name}"
      ?required="${required}"
      ?disabled="${disabled}"
      ?readonly="${readonly}"
      ?invalid="${invalid}"
      ?noStepper="${noStepper}"
      ?toggleable="${toggleable}"
      .type="${typeSelection}"
      .placeholder="${placeholder}"
      .label="${label}"
      .validationMessage="${error}"
      .step="${step}"
    ></chameleon-input>
  `;
};
```

### Icon Left

```js preview-story
export const IconLeft = () => html`
  <chameleon-input label="Search" icon-left>
    ${searchIcon("icon-left")}
  </chameleon-input>
`;
```

### Icon Right

```js preview-story
export const IconRight = () => html`
  <chameleon-input label="Search" icon-right>
    ${searchIcon("icon-right")}
  </chameleon-input>
`;
```

### Error State

```js preview-story
export const ErrorState = () => {
  const validationMessage = text("Error", "Field must not be empty");

  return html`
    <chameleon-input
      label="Search *"
      validationMessage="${validationMessage}"
      invalid="true"
      icon-right
    >
      ${searchIcon("icon-right")}
    </chameleon-input>
  `;
};
```
