import { storiesOf } from "@storybook/polymer";
import { html } from "lit-html";
import { withKnobs, text } from "@storybook/addon-knobs";
import "@chameleon-ds/sheet/src/chameleon-sheet";
import "@chameleon-ds/sheet/src/sheet-content";

const stories = storiesOf("Sheet", module);

stories.addParameters({
  backgrounds: [
    { name: "gray", value: "#f5f5f8", default: true },
    { name: "black", value: "#252a33" },
  ],
});

stories.addDecorator(withKnobs);

stories.add(
  "Sheet",
  () => {
    const width = text("Width", "75vw");

    return html`
      <chameleon-sheet>
        <span slot="invoker">
          <button>Click me to see the sheet!</button>
        </span>
        <sheet-content .width="${width}" slot="content">
          <style>
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
          </style>
          <span class="head-container">
            <h1 class="header">Header</h1>
            <h2 class="sub-header">Subheader</h1>
          </span>
          <section>
            <p>City: Saint Louis</p>
            <p>Parks: Forest Park</p>
          </section>
          <section>
            <p>Food: Blue Ocean Sushi</p>
            <p>Art: Saint Louis Art Gallery</p>
          </section>
          <section>
            <p>Hockey: Blues</p>
            <p>Baseball: Cards</p>
            <p>Famous People: Nelly</p>
          </section>
        </sheet-content>
      </chameleon-sheet>
    `;
  },
  { info: { inline: true } }
);
