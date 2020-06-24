# Chameleon Accordions

```js script
import { html, svg } from "lit-html";
import "./chameleon-accordion.js";
import "./chameleon-accordions.js";

export default {
  title: "Components|Data and Visualizations/Accordions",
  component: "chameleon-accordions",
  options: { selectedPanel: "storybook/docs/panel" },
};
```

## Properties

### chameleon-accordions

| Property Name | Type(s) | Default Value | Description                                |
| ------------- | ------- | ------------- | ------------------------------------------ |
| `accordions`  | Array   | []            | Stores references to registered accordions |

### chameleon-accordion

| Property Name | Type(s) | Default Value | Description                                           |
| ------------- | ------- | ------------- | ----------------------------------------------------- |
| `expanded`    | Boolean | `false`       | Determines if the accordion appears expanded          |
| `caret`       | Boolean | `true`        | When false, the caret icon will not display           |
| `accentColor` | String  | `null`        | The CSS color value to be applied to the accent color |
| `uid`         | String  | `""`          | A random/unique identifier for this accordion         |

## CSS Properties

### chameleon-accordions

| Property Name       | Default Value |
| ------------------- | ------------- |
| `--accordion-width` | `100%`        |

### chameleon-accordion

| Property Name                  | Default Value |
| ------------------------------ | ------------- |
| `--accordion-background-color` | `#ffffff`     |

## Examples

### Default

`<chameleon-accordions>` will automatically register any `<chameleon-accordion>` descendant and make sure only one accordion can be open at a time.

```js preview-story
export const Default = () => html`
  <chameleon-accordions>
    <chameleon-accordion>
      <h4 slot="header">Tower Grove</h4>
      <section slot="panel">
        Tower Grove South is a neighborhood of south St. Louis, Missouri.
        Formerly known as Oak Hill, Tower Grove South is bounded by Arsenal
        Street on the north, Chippewa Street on the south, Kingshighway
        Boulevard on the west, and Grand Boulevard on the east.
      </section>
    </chameleon-accordion>
    <chameleon-accordion>
      <h4 slot="header">Benton Park</h4>
      <section slot="panel">
        Benton Park is a neighborhood in southside St. Louis, Missouri, just
        west of the Soulard neighborhood. The official boundaries of the area
        are Gravois Avenue on the north, Cherokee Street on the south, I-55 on
        the east, and Jefferson Avenue on the west.
      </section>
    </chameleon-accordion>
    <chameleon-accordion>
      <h4 slot="header">Soulard</h4>
      <section slot="panel">
        Known for its blues scene, buzzing Soulard has raucous bars with live
        music alongside casual pizzerias, down-to-earth Southern restaurants and
        seafood spots serving oysters and crawfish. Established in 1779, Soulard
        Farmers Market displays a colorful spread of produce, meats and cheeses,
        while the huge, 19th-century Anheuser-Busch Brewery offers tours. The
        area’s lively annual Mardi Gras parade draws big crowds.
      </section>
    </chameleon-accordion>
  </chameleon-accordions>
`;
```

### Individual Accordions

If you don't want that, you can use `<chameleon-accordion>` on it's own!

```js preview-story
export const IndividualAccordions = () => html`
  <chameleon-accordion>
    <h4 slot="header">Tower Grove</h4>
    <section slot="panel">
      Tower Grove South is a neighborhood of south St. Louis, Missouri. Formerly
      known as Oak Hill, Tower Grove South is bounded by Arsenal Street on the
      north, Chippewa Street on the south, Kingshighway Boulevard on the west,
      and Grand Boulevard on the east.
    </section>
  </chameleon-accordion>
  <chameleon-accordion>
    <h4 slot="header">Benton Park</h4>
    <section slot="panel">
      Benton Park is a neighborhood in southside St. Louis, Missouri, just west
      of the Soulard neighborhood. The official boundaries of the area are
      Gravois Avenue on the north, Cherokee Street on the south, I-55 on the
      east, and Jefferson Avenue on the west.
    </section>
  </chameleon-accordion>
  <chameleon-accordion>
    <h4 slot="header">Soulard</h4>
    <section slot="panel">
      Known for its blues scene, buzzing Soulard has raucous bars with live
      music alongside casual pizzerias, down-to-earth Southern restaurants and
      seafood spots serving oysters and crawfish. Established in 1779, Soulard
      Farmers Market displays a colorful spread of produce, meats and cheeses,
      while the huge, 19th-century Anheuser-Busch Brewery offers tours. The
      area’s lively annual Mardi Gras parade draws big crowds.
    </section>
  </chameleon-accordion>
`;
```

### Accent Color

```js preview-story
export const AccentColor = () => html`
  <chameleon-accordions>
    <chameleon-accordion accentColor>
      <h4 slot="header">Tower Grove</h4>
      <section slot="panel">
        Tower Grove South is a neighborhood of south St. Louis, Missouri.
        Formerly known as Oak Hill, Tower Grove South is bounded by Arsenal
        Street on the north, Chippewa Street on the south, Kingshighway
        Boulevard on the west, and Grand Boulevard on the east.
      </section>
    </chameleon-accordion>
    <chameleon-accordion accentColor>
      <h4 slot="header">Benton Park</h4>
      <section slot="panel">
        Benton Park is a neighborhood in southside St. Louis, Missouri, just
        west of the Soulard neighborhood. The official boundaries of the area
        are Gravois Avenue on the north, Cherokee Street on the south, I-55 on
        the east, and Jefferson Avenue on the west.
      </section>
    </chameleon-accordion>
    <chameleon-accordion accentColor>
      <h4 slot="header">Soulard</h4>
      <section slot="panel">
        Known for its blues scene, buzzing Soulard has raucous bars with live
        music alongside casual pizzerias, down-to-earth Southern restaurants and
        seafood spots serving oysters and crawfish. Established in 1779, Soulard
        Farmers Market displays a colorful spread of produce, meats and cheeses,
        while the huge, 19th-century Anheuser-Busch Brewery offers tours. The
        area’s lively annual Mardi Gras parade draws big crowds.
      </section>
    </chameleon-accordion>
  </chameleon-accordions>
`;
```

### No Caret

```js preview-story
export const NoCaret = () => html`
  <chameleon-accordions>
    <chameleon-accordion .caret="${false}">
      <h4 slot="header">Tower Grove</h4>
      <section slot="panel">
        Tower Grove South is a neighborhood of south St. Louis, Missouri.
        Formerly known as Oak Hill, Tower Grove South is bounded by Arsenal
        Street on the north, Chippewa Street on the south, Kingshighway
        Boulevard on the west, and Grand Boulevard on the east.
      </section>
    </chameleon-accordion>
    <chameleon-accordion .caret="${false}">
      <h4 slot="header">Benton Park</h4>
      <section slot="panel">
        Benton Park is a neighborhood in southside St. Louis, Missouri, just
        west of the Soulard neighborhood. The official boundaries of the area
        are Gravois Avenue on the north, Cherokee Street on the south, I-55 on
        the east, and Jefferson Avenue on the west.
      </section>
    </chameleon-accordion>
    <chameleon-accordion .caret="${false}">
      <h4 slot="header">Soulard</h4>
      <section slot="panel">
        Known for its blues scene, buzzing Soulard has raucous bars with live
        music alongside casual pizzerias, down-to-earth Southern restaurants and
        seafood spots serving oysters and crawfish. Established in 1779, Soulard
        Farmers Market displays a colorful spread of produce, meats and cheeses,
        while the huge, 19th-century Anheuser-Busch Brewery offers tours. The
        area’s lively annual Mardi Gras parade draws big crowds.
      </section>
    </chameleon-accordion>
  </chameleon-accordions>
`;
```

### Custom Icon

```js preview-story
const heartIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;

export const CustomIcon = () => html`
  <chameleon-accordions>
    <chameleon-accordion>
      <span slot="toggle-icon">${heartIcon}</span>
      <h4 slot="header">Tower Grove</h4>
      <section slot="panel">
        Tower Grove South is a neighborhood of south St. Louis, Missouri.
        Formerly known as Oak Hill, Tower Grove South is bounded by Arsenal
        Street on the north, Chippewa Street on the south, Kingshighway
        Boulevard on the west, and Grand Boulevard on the east.
      </section>
    </chameleon-accordion>
    <chameleon-accordion>
      <span slot="toggle-icon">${heartIcon}</span>
      <h4 slot="header">Benton Park</h4>
      <section slot="panel">
        Benton Park is a neighborhood in southside St. Louis, Missouri, just
        west of the Soulard neighborhood. The official boundaries of the area
        are Gravois Avenue on the north, Cherokee Street on the south, I-55 on
        the east, and Jefferson Avenue on the west.
      </section>
    </chameleon-accordion>
    <chameleon-accordion>
      <span slot="toggle-icon">${heartIcon}</span>
      <h4 slot="header">Soulard</h4>
      <section slot="panel">
        Known for its blues scene, buzzing Soulard has raucous bars with live
        music alongside casual pizzerias, down-to-earth Southern restaurants and
        seafood spots serving oysters and crawfish. Established in 1779, Soulard
        Farmers Market displays a colorful spread of produce, meats and cheeses,
        while the huge, 19th-century Anheuser-Busch Brewery offers tours. The
        area’s lively annual Mardi Gras parade draws big crowds.
      </section>
    </chameleon-accordion>
  </chameleon-accordions>
`;
```
