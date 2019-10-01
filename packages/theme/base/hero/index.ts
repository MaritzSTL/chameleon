import { css } from "lit-element";

export default css`
.hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  min-height: 400px;
  width:100%; /*full width*/
  display: flex;
  align-items: center;
  --btn-width: 120px;
}

.title-subtitle {
  display: flex;
  align-items: center;
}

.hero-text {
  font-size: var(--font-size-paragraph-medium);
}

singularity-header {
  display: inline-block;
}

.landing-subtitle {
  font-size: 22px;
}

.surface-color {
  color: var(--color-surface);
}

.heading {
  padding-left: 112px;
}

.row {
  display: flex;
}

.justify-end {
  justify-content: flex-end;
}

@media (min-width: 768px) {
  .row_reponsive {
    display: flex;
  }
  .row_reponsive > .widget {
    flex: 1;
  }
}

@media (max-width: 960px) {
  .heading {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 480px) {
  .hero {
      height:240px;
      min-height:initial;
      padding-top: 150px;
      padding-bottom: 150px;
  }

  .gd {
      z-index:1;
  }`;
