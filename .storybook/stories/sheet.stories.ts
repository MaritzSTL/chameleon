import { storiesOf } from "@storybook/polymer";
import { html } from "lit-html";
import "@chameleon-ds/sheet/src/chameleon-sheet";
import "@chameleon-ds/sheet/src/sheet-content";

const stories = storiesOf("Sheet", module);

stories.addParameters({
  backgrounds: [
    { name: "gray", value: "#f5f5f8", default: true },
    { name: "black", value: "#252a33" },
  ],
});

stories.add(
  "Sheet",
  () => {
    return html`
      <chameleon-sheet>
        <span slot="invoker">
          <button>Standard Sheet</button>
        </span>
        <sheet-content slot="content">
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
  },
  { info: { inline: true } }
);
