# Chameleon Accordions

## Properties

| Property Name | Type(s) | Default Value | Description                                           |
| ------------- | ------- | ------------- | ----------------------------------------------------- |
| `expanded`    | Boolean | `false`       | Determines if the accordion appears expanded          |
| `caret`       | Boolean | `true`        | When false, the caret icon will not display           |
| `accentColor` | String  | `null`        | The CSS color value to be applied to the accent color |

## CSS Properties

| Property Name                  | Default Value |
| ------------------------------ | ------------- |
| `--accordion-background-color` | `#ffffff`     |
| `--accordion-width`            | `100%`        |

## Example Usage

```html
<chameleon-accordions>
  <chameleon-accordion>
    <h3 slot="header">Hi there!</h3>
    <div slot="panel">Here is some nice content.</div>
  </chameleon-accordion>
</chameleon-accordions>
```
