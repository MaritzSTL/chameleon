import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/accordions/src/index";
import "@chameleon-ds/button";

const stories = storiesOf("Accordions", module);
const faq = [
  { question: "Who are you?", answer: "Who, who" },
  { question: "What is love?", answer: "Baby don't hurt me" },
  {
    question: "Why do birds suddenly appear every time you are near?",
    answer: "Just like me, they long to be close to you"
  }
];

stories.addDecorator(withKnobs);

stories.add("New basic accordions with default icons", () => {
  return html`
    <chameleon-accordions style="--accordion-width: 600px;">
      ${faq.map(
        faq => html`
          <chameleon-accordion>
            <h3 slot="header">${faq.question}</h3>
            <div slot="panel">${faq.answer}</div>
          </chameleon-accordion>
        `
      )}
    </chameleon-accordions>
  `;
});

stories.add(
  "Accordions with clickable headers",
  () => {
    return html`
      <chameleon-accordions style="--accordion-width: 600px;">
        ${faq.map(
          faq => html`
            <chameleon-accordion clickable>
              <h3 slot="header">${faq.question}</h3>
              <div slot="panel">${faq.answer}</div>
            </chameleon-accordion>
          `
        )}
      </chameleon-accordions>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Accordions with custom icons in fixed position",
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
        <chameleon-accordion fixed="true">
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
        <chameleon-accordion fixed="true">
          <chameleon-button slot="toggle-icon" theme="text"
            >Edit</chameleon-button
          >
          <h3 slot="header">Places</h3>
          <div slot="panel">North Pole</div>
        </chameleon-accordion>
        <chameleon-accordion fixed="true">
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
