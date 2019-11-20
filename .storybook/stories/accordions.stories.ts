import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/accordions/src/index";
import "@chameleon-ds/button";

const stories = storiesOf("Accordions", module);

stories.addDecorator(withKnobs);

stories.add(
  "Text-only accordions",
  () => {
    return html`
      <chameleon-accordions style="--accordion-width: 400px;">
        <chameleon-accordion>
          <h3 slot="header">Who are you?</h3>
          <div slot="panel">Who, who</div>
        </chameleon-accordion>
        <chameleon-accordion>
          <h3 slot="header">What is love?</h3>
          <div slot="panel">Baby don't hurt me</div>
        </chameleon-accordion>
        <chameleon-accordion>
          <h3 slot="header">
            Why do birds suddenly appear every time you are near?
          </h3>
          <div slot="panel">Just like me, they long to be close to you</div>
        </chameleon-accordion>
      </chameleon-accordions>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Text button accordions",
  () => {
    return html`
      <style>
        :root {
          background-color: gray;
        }
        chameleon-accordion {
          background-color: white;
          padding-left: 22px;
        }
        chameleon-accordion:not(:last-of-type) {
          margin-bottom: 12px;
        }
        chameleon-accordion div {
          border-top: 1px gray solid;
          padding: 12px;
        }
      </style>
      <chameleon-accordions
        style="--accordion-width: 600px;"
        @expanded-changed=${eventDetails.action("expanded-changed")}
      >
        <chameleon-accordion>
          <h3 slot="header">People</h3>
          <chameleon-button slot="toggle-icon" theme="text"
            >Edit</chameleon-button
          >
          <div slot="panel">
            <ul>
              <li>Jason</li>
              <li>Paul</li>
              <li>June</li>
            </ul>
          </div>
        </chameleon-accordion>
        <chameleon-accordion>
          <chameleon-button slot="toggle-icon" theme="text"
            >Edit</chameleon-button
          >
          <h3 slot="header">Places</h3>
          <div slot="panel">North Pole</div>
        </chameleon-accordion>
        <chameleon-accordion>
          <chameleon-button slot="toggle-icon" theme="text"
            >Edit</chameleon-button
          >
          <h3 slot="header">Things</h3>
          <div slot="panel">Candy canes</div>
        </chameleon-accordion>
      </chameleon-accordions>
    `;
  },
  { info: { inline: true } }
);
