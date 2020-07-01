# Chameleon Textarea

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, number, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-textarea.js";

export default {
  title: "Components|Form Elements/Textarea",
  component: "chameleon-textarea",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name       | Type(s) | Default Value    | Description                                                                                              |
| ------------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| `autocomplete`      | Boolean | `false`          | A string indicating the type of autocomplete functionality, if any, to allow on the textarea             |
| `spellcheck`        | Boolean | `false`          | Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS             |
| `name`              | String  | `"cha-textarea"` | The textarea's form name                                                                                 |
| `autofocus`         | Boolean | `false`          | A Boolean which, if present, makes the textarea take focus when the form is presented                    |
| `cols`              | Number  | `20`             | The visible width of the text control, in average character widths                                       |
| `rows`              | Number  | `2`              | The number of visible text lines for the control                                                         |
| `disabled`          | Boolean | `false`          | A Boolean attribute which is present if the textarea should be disabled                                  |
| `readonly`          | Boolean | `false`          | A Boolean attribute which, if true, indicates that the textarea cannot be edited                         |
| `required`          | Boolean | `false`          | A Boolean which, if true, indicates that the textarea must have a value before the form can be submitted |
| `placeholder`       | String  | `""`             | The textarea's placeholder value                                                                         |
| `value`             | String  | `""`             | The textarea's current value                                                                             |
| `maxLength`         | Number  | `null`           | The textarea's maximum length                                                                            |
| `minxLength`        | Number  | `null`           | The textarea's minimum length                                                                            |
| `label`             | String  | `""`             | The textarea's label text                                                                                |
| `invalid`           | Boolean | `false`          | Invalid boolean to allow validity access from higher level form errors                                   |
| `validationMessage` | String  | `""`             | The textarea's error message                                                                             |
| `nonresizeable`     | Boolean | `false`          | Prevents users from manualy changing the size of the textarea                                            |

## Examples

### Default

```js preview-story
export const Default = () => {
  const disabled = boolean("Disabled", false);
  const label = text("Label", "Description");
  const error = text("Error", "");
  const placeholder = text("Placeholder", "Text...");
  const minlength = number("minlength", 0);
  const maxlength = number("maxlength", 500);
  const rows = number("Rows", 2);
  const cols = number("Columns", 20);
  const nonresizeable = boolean("non-resizeable", false);
  const value = text("Value", "");
  const invalid = boolean("Invalid", false);
  const required = boolean("Required", false);

  return html`
    <chameleon-textarea
      ?disabled="${disabled}"
      ?required="${required}"
      .placeholder="${placeholder}"
      value="${value}"
      .label="${label}"
      .validationMessage="${error}"
      .minlength="${minlength}"
      .maxlength="${maxlength}"
      .rows="${rows}"
      .cols="${cols}"
      ?invalid="${invalid}"
      .nonresizeable="${nonresizeable}"
    ></chameleon-textarea>
  `;
};
```

### Error State

```js preview-story
export const ErrorState = () => html`
  <chameleon-textarea
    label="Description"
    validationMessage="Field cannot be left blank"
    ?invalid="${true}"
  ></chameleon-textarea>
`;
```
