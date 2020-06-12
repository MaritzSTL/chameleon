import { css } from "lit-element";

export const ChameleonAccordionStyle = css`
  :host {
    display: block;
  }

  .header {
    background-color: var(--accordion-background-color, #ffffff);
    border: 1px solid var(--color-gray-dark, #9fa4a8);
    border-radius: var(--border-radius, 0.5rem);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 13px;
  }

  :host([expanded]) .header {
    border-radius: var(--border-radius, 0.5rem) var(--border-radius, 0.5rem) 0 0;
  }

  .header-toggle {
    align-items: center;
    display: flex;
  }

  .header-toggle chameleon-button {
    margin: 0 15px;
  }

  .panel {
    border: 1px solid var(--color-gray-dark, #9fa4a8);
    border-radius: 0 0 var(--border-radius, 0.5rem) var(--border-radius, 0.5rem);
    border-top: none;
    padding: 13px;
  }

  .panel.collapsed {
    display: none;
  }

  .panel.expanded {
    display: block;
  }

  .toggle-icon {
    margin: 0 30px 0 17px;
  }

  .toggle-icon svg {
    transition: transform 0.2s ease-in-out;
  }

  .toggle-icon.rotate svg {
    transform: rotate(90deg);
  }
`;
