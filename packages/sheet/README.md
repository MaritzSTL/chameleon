# Chameleon Sheet

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text } from "@open-wc/demoing-storybook";
import "./chameleon-sheet.js";
import "./sheet-content.js";

export default {
  title: "Components|Overlays/Sheet",
  component: "chameleon-sheet",
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: "gray", value: "#f5f5f8", default: true },
      { name: "black", value: "#252a33" },
    ],
  },
  options: { selectedPanel: "storybookjs/dovs/panel" },
};
```

## Properties

### chameleon-card

| Property Name         | Type(s) | Default Value | Description                                       |
| --------------------- | ------- | ------------- | ------------------------------------------------- |
| `trapsKeyboardFocus`  | Boolean | `true`        | Whether or not the sheet will trap keyboard focus |
| `hasBackdrop`         | Boolean | `true`        | If the sheet has an overlay backdrop              |
| `hidesOnOutsideClick` | Boolean | `true`        | If the sheet hides when clicked outside of        |
| `hidesOnEsc`          | Boolean | `true`        | If the sheet hides when the ESC key is pressed    |
| `preventsScroll`      | Boolean | `true`        | If the sheet prevents page scrolling when open    |

### sheet-content

| Property Name | Type(s) | Default Value | Description               |
| ------------- | ------- | ------------- | ------------------------- |
| `dismissable` | Boolean | `true`        | The card header title     |
| `width`       | String  | `"320px"`     | The sheet content's width |

## How the Sheet Works

`chameleon-sheet` now uses [@lion/overlays](https://github.com/ing-bank/lion/tree/master/packages/overlays) to power behavior. This lets us keep an extremely simple, declaratively composed approach:

```html
<chameleon-sheet>
  <button slot="invoker">Open Sheet</button>
  <p slot="content">Your content here!</p>
</chameleon-sheet>
```

There are now just two slots to understand:

- the `invoker` slot is the content a user interacts with in order to open the sheet (for example the enticing "..." icon inside a table row).
- the `content` slot is the content which shows inside the sheet. If you want something to show up in the sheet, throw it in here.

The `content` node itself is moved outside Chameleon Sheet's shadow dom, and relocated top-level onto `document.body`. This lets us ensure people can see it/interact with it, that it's accessible, and other reasons.

How do we ensure relocated content doesn't leak styles, while still getting all the benefits of our existing system? Simple! - build the content that should be relocated as it's own custom element. This lets us relocate a single node, and maintain full encapsulation of styles.

To streamline this, there's another component made available: `sheet-content`. You don't have to use `sheet-content`, you can put whatever you'd like into `chameleon-sheet`. However, `sheet-content` streamlines the look and feel of `chameleon-sheet` to be like v1, with some other enhancements:

- You can customize the `width` (to set it, for example to '75vw' for a "big sheet").
- You can apply other instance-specific styling to each component by specifying local `<style>`'s.

## Understanding Bindings

As stated above, the _entire_ node is moved. This means, any bindings you use when creating it are brought along.

## Event Redispatching

Oftimes, it will make sense to encapsulate your sheet content inside it's own custom element. In situations like this, you might want to use events as though you were mounted inside the portion of the dom tree you initially placed it in. In the _event_ you'd like to do this, here's a pseudo-scenario walking through some event redispatch approaches.

Pseudo-structure

```js
<budgets-container>
  <budgets-table>
    ${budget.map(budget => html`
      <chameleon-sheet>
        <span class="details-icon" slot="invoker"></span>
        <app-sheet-content-wrapper slot="content">
          <budget-sheet-content>
          </budget-sheet-content>
        </app-sheet-content-wrapper>
      </chameleon-sheet>
    `)}
  <budgets-table>
</budgets-container>
```

- You have a top-level `budgets-container` which negotiates interactions with state management
- Inside that, you render a `budgets-table`
- This budgets table exposes a sheet for every table entry, so you can see details at will
- These budget-sheets contain some functionality for interacting with a budget (for ex: adding/removing funds)
- This means it makes sense to have an encapsulated `budget-sheet-content`, to which you can simply pass a budget and it figures out the rest (in case you wanted to use this in other areas, too)

If you do this:

```js
class BudgetSheetContent extends LitElement {
  @querySelector("input[name='add-funds']") addFundsInput;
  @querySelector("input[name='remove-funds']") removeFundsInput;

  render() {
    return html`
      /* snip! */
      <input name="add-funds">
      <button add type="submit" @click="this._dispatchFundsTransfer">

      <input name="remove-funds">
      <button remove type="submit" @click="this._dispatchFundsTransfer">
      /* snip! */
    `
  }

  _dispatchFundsTransfer() {
    const event = new CustomEvent("funds-transfer",
      bubbles: true,
      composed: true,
      detail: {
        addFundsAmount: this.addFundsInput.value,
        removeFundsAmount: this.removeFundsInput.value,
        budget: this.budget;
      }
    );
  }
}
```

You'd expect `<budgets-container>` to be able to catch it, right? This won't happen as you might initially expect becuase the entire `budget-sheet-content` node is relocated up onto `body`. This means it's `composedPath` would look more like this:

```
[ budget-sheet-content, slot, ShadowRoot, app-sheet-content-wrapper.global-overlays__overlay, div.global-overlays__overlay-container.global-overlays__overlay-container--right, div.global-overlays, body.global-overlays-scroll-lock, html, HTMLDocument http://localhost:9000/admin/budgets, Window ]
```

At no point would the `budgets-container` be able to handle the event. Instead, we're going to want to capture the event, and redispatch it inside portion of the dom tree inside `<budgets-container>`. We can do this because before the node is relocated, we can access it directly from the declaring `<budgets-table>`, which is a descendant of `<budgets-container>`.

Here, we will wil do it manually, although this is a great candidate for a mixin.

```js
class BudgetsTable extends LitElement {

  // approach 1
  constructor() {
    super();
    this.addEventListener("funds-transfer", this._redispatchEvent)
  }

  // approach 2
  render() {
    return html`
      /* snip! */
      ${budgets.map(budget => html`
        <chameleon-sheet>
          <span class="details-icon" slot="invoker"></span>
          <app-sheet-content-wrapper slot="content">
            <budget-sheet-content @funds-transfer="${this.redispatchEvent}">
            </budget-sheet-content>
          </app-sheet-content-wrapper>
        </chameleon-sheet>
      `)}
      /* snip! */
    `
  }

  _redispatchEvent(e) {
    e.stopPropagation();
    const newEvent = new CustomEvent(e.type, {
      bubbles: true,
      composed: true // see note 1
      detail: {
        ...e.detail,
        element: e.target // see note 2,
      }
    });
    this.dispatchEvent(newEvent);
  }
}
```

- Note 1: `composed` is only necessary because in this example, we hop through several shadow roots to get to `budgets-container`.
- Note 2: Wouldn't recommend overwriting browser defaults like `e.target`, and instead passing along this information in `detail`.

Now, the information we need will reach `budgets-container`:

```js
class BudgetsContainer extends LitElement {
  // approach 1
  constructor() {
    super();
    this.addEventListener("funds-transfer", this.handleFundsTransfer);
  }

  // approach 2
  render() {
    return html`
      /* snip! */
      <budgets-table @funds-transfer="${this.handleFundsTransfer}">
      </budgets-table>
      /* snip! */
    `;
  }

  handleFundsTransfer(e) {
    e.stopPropagation();
    const budget = e.detail.budget;
    let amount;

    if (e.detail.element.hasAttribute("add")) {
      amount = e.detail.addFunds;
    }

    if (e.detail.element.hasAttribute("remove")) {
      amount = -e.detail.removeFunds;
    }

    this.transferFunds(budget, amount);
  }

  transferFunds(budget, amount) {
    /* snip! */
  }
}
```

Some other notes:

- Make sure to call `e.stopPropagation()` to prevent leaking an event past it's intended path (which could potentially cause unintended side-effects)
- This example is slightly contrived - we attach `element` to demonstrate how to pass references to specific components

## Breaking Changes:

- `v1.x.x` -> `v2.x.x`: Removed `.header`, `.subheader`, added use of `@lion/overlays`.

## Migrating from V1 -> V2

You should be able to include your same content, along with the styling it used, as-is inside `sheet-content`.

## Examples

### Default

```js preview-story
export const Default = () => {
  const width = text("Width", "320px");

  return html`
    <chameleon-sheet>
      <span slot="invoker">
        <button>Standard Sheet</button>
      </span>
      <sheet-content slot="content" width="${width}">
        <style>
          section {
            padding: 20px;
            font-size: 0.938rem;
          }

          .divider-top {
            border-top: solid 2px #e1e3e4;
          }

          .divider-bottom {
            border-bottom: solid 2px #e1e3e4;
          }

          .header {
            font-family: var(--app-heading-font, sans-serif);
            color: var(--primary-color, #2c6fb7);
            font-size: 1.4rem;
            font-weight: 400;
            margin-top: 0;
          }

          .sub-header {
            display: block;
            font-family: var(--app-heading-font, sans-serif);
            color: var(--primary-color, #2c6fb7);
            letter-spacing: normal;
            line-height: 21px;
            font-size: 18px;
            font-weight: 400;
          }

          label,
          .label {
            font-family: var(--app-body-font, Arial);
            color: var(--gray-darkest, #6c737a);
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0;
            margin-bottom: 8px;
            display: block;
          }
        </style>
        <section>
          <h1 class="header">Header</h1>
          <h2 class="sub-header">Subheader</h1>
        </section>
        <section class="divider-top">
          <p>City: Saint Louis</p>
          <p>Parks: Forest Park</p>
        </section>
        <section class="divider-top">
          <p>Food: Blue Ocean Sushi</p>
          <p>Art: Saint Louis Art Gallery</p>
        </section>
        <section class="divider-top divider-bottom">
          <p>Hockey: Blues</p>
          <p>Baseball: Cards</p>
          <p>Famous People: Nelly</p>
        </section>
      </sheet-content>
    </chameleon-sheet>
  `;
};
```
