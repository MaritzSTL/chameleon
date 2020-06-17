# Chameleon Timezone

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-timezone.js";

export default {
  title: "Components|Form Elements/Timezone",
  component: "chameleon-timezone",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name      | Type(s) | Default Value    | Description                                                                                              |
| ------------------ | ------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| `required`         | Boolean | `false`          | A Boolean which, if true, indicates that the timezone must have a value before the form can be submitted |
| `invalid`          | Boolean | `false`          | Invalid boolean to allow validity access from higher level form errors                                   |
| `readonly`         | Boolean | `false`          | A Boolean attribute which, if true, indicates that the timezone cannot be edited                         |
| `disabled`         | Boolean | `false`          | A Boolean attribute which is present if the timezone should be disabled                                  |
| `name`             | String  | `"cha-timezone"` | The timezone's form name                                                                                 |
| `timezoneLabel`    | String  | `""`             | The timezone's label                                                                                     |
| `timezoneSubLabel` | String  | `""`             | The timezone's sub label                                                                                 |
| `errors`           | Array   | `[]`             | The skeleton's circle height                                                                             |

## Examples

### Default

```js preview-story
export const Default = () => {
  const timezoneLabel = text("Label", "Please select your Timezone");
  const timezoneSubLabel = text("Sub Label", "");
  const readonly = boolean("Read Only", false);
  const invalid = boolean("Invalid", false);
  const required = boolean("Required", false);
  const disabled = boolean("Disabled", false);

  return html`
    <chameleon-timezone
      .timezoneLabel="${timezoneLabel}"
      .timezoneSubLabel="${timezoneSubLabel}"
      ?readonly="${readonly}"
      ?required="${required}"
      ?disabled="${disabled}"
      ?invalid="${invalid}"
    ></chameleon-timezone>
  `;
};
```

### Error State

```js preview-story
export const ErrorState = () => html`
  <chameleon-timezone
    timezoneLabel="Please select your Timezone"
    ?invalid="${true}"
    .errors="${["Field cannot be left blank"]}"
  ></chameleon-timezone>
`;
```
