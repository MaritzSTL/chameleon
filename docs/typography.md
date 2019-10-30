---
layout: page
title: Typography
permalink: /design/typography
---

<style type="text/css">
  p {
    margin: 0;
  }

  .post-content p {
    color: #252a33;
  }

  .section-header {
    color: #679dea;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 70px;
  }

  section p {
    letter-spacing: 0.52px;
    line-height: 28px;
  }

  .lato {
    font-family: "Lato";
  }

  .lato.light p {
    font-weight: 300;
  }

  .lato.bold p {
    font-weight: bold;
  }

  .source-sans-pro.italic p {
    font-style: italic;
  }

  .source-sans-pro.bold p {
    font-weight: bold;
  }

  .headlines h1,
  .headlines h2,
  .headlines h3,
  .headlines h4,
  .headlines h5,
  .headlines h6 {
    margin: 0;
  }

  .section-class,
  .section-description {
    font-size: 15px;
    letter-spacing: 0.25px;
  }

  .section-class {
    color: #d00081;
    margin-right: 5px;
  }

  .section-description {
    color: #6c737a;
  }

  h1.lato {
    font-size: 48px;
    letter-spacing: -0.72px;
    font-weight: 300;
  }

  h2.lato {
    font-size: 32px;
    letter-spacing: -0.26px;
    font-weight: 300;
    color: #252a33;
  }

  h3.lato {
    font-size: 26px;
    font-weight: normal;
  }

  h4.lato {
    font-size: 22.4px;
    font-weight: normal;
  }

  h5.lato {
    font-size: 18px;
    font-weight: normal;
  }

  h6.lato {
    font-size: 16px;
    font-weight: normal;
  }

  h1.admin {
    font-size: 26px;
    font-weight: normal;
  }

  h2.admin {
    color: #252a33;
    font-size: 22px;
    font-weight: normal;
  }

  h3.admin {
    font-size: 18px;
    font-weight: normal;
  }

  h4.admin {
    font-size: 16px;
    font-weight: normal;
  }

  .paragraph.large p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.52px;
  }

  .paragraph.medium p {
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.25px;
  }

  .paragraph.small p {
    font-size: 14px;
    line-height: 18px;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    font-size: 15px;
  }

  li {
    margin: 3px 0;
  }

  .unstyled ul {
    list-style: none;
  }
</style>

Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.

## Typefaces

### Primary Typeface

# Lato

<div class="row">
  <section class="lato regular">
    <span class="section-header">Lato Regular</span>
    <p>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p>
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p>
      1234567890!@#$%&
    </p>
  </section>
  <section class="lato light">
    <span class="section-header">Lato Light</span>
    <p>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p>
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p>
      1234567890!@#$%&
    </p>
  </section>
  <section class="lato bold">
    <span class="section-header">Lato Bold</span>
    <p>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p>
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p>
      1234567890!@#$%&
    </p>
  </section>
</div>

### Secondary Typeface

# Source Sans Pro

<div class="row">
  <section class="source-sans-pro regular">
    <span class="section-header">Source Sans Pro Regular</span>
    <p>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p>
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p>
      1234567890!@#$%&
    </p>
  </section>
  <section class="source-sans-pro italic">
    <span class="section-header">Source Sans Pro Italic</span>
    <p>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p>
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p>
      1234567890!@#$%&
    </p>
  </section>
  <section class="source-sans-pro bold">
    <span class="section-header">Source Sans Pro Bold</span>
    <p>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p>
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p>
      1234567890!@#$%&
    </p>
  </section>
</div>

## Text Sizes

#### Participant Headlines

<div class="row">
  <section class="headlines">
    <span class="section-header">H1</span>
    <h1 class="lato">Headline One</h1>
    <span class="section-class">h1.pax</span>
    <span class="section-description">Lato / Light / 48px</span>
  </section>
  <section class="headlines">
    <span class="section-header">H2</span>
    <h2 class="lato">Headline Two</h2>
    <span class="section-class">h2.pax</span>
    <span class="section-description">Lato / Light / 32px</span>
  </section>
  <section class="headlines">
    <span class="section-header">H3</span>
    <h3 class="lato">Headline Three</h3>
    <span class="section-class">h3.pax</span>
    <span class="section-description">Lato / Regular / 26px / Black</span>
  </section>
</div>

<div class="row">
  <section class="headlines">
    <span class="section-header">H4</span>
    <h4 class="lato">Headline Four</h4>
    <span class="section-class">h4.pax</span>
    <span class="section-description">Lato / Regular / 22.4px / Black</span>
  </section>
  <section class="headlines">
    <span class="section-header">H5</span>
    <h5 class="lato">Headline Five</h5>
    <span class="section-class">h5.pax</span>
    <span class="section-description">Lato / Regular / 18px / Black</span>
  </section>
  <section class="headlines">
    <span class="section-header">H6</span>
    <h6 class="lato">Headline Six</h6>
    <span class="section-class">h6.pax</span>
    <span class="section-description">Lato / Regular / 18px / Black</span>
  </section>
</div>

#### Admin Headlines

<div class="row">
  <section class="headlines">
    <span class="section-header">H1</span>
    <h1 class="admin">Headline One</h1>
    <span class="section-class">h1.admin</span>
    <span class="section-description">Lato / Light / 26px</span>
  </section>
  <section class="headlines">
    <span class="section-header">H2</span>
    <h2 class="admin">Headline Two</h2>
    <span class="section-class">h2.admin</span>
    <span class="section-description">Lato / Light / 22px</span>
  </section>
  <section class="headlines">
    <span class="section-header">H3</span>
    <h3 class="admin">Headline Three</h3>
    <span class="section-class">h3.admin</span>
    <span class="section-description">Lato / Regular / 18px</span>
  </section>
</div>

<div class="row">
  <section class="headlines">
    <span class="section-header">H4</span>
    <h4 class="admin">Headline Four</h4>
    <span class="section-class">h4.admin</span>
    <span class="section-description">Lato / Regular / 16px</span>
  </section>
</div>

#### Paragraph Text

<div class="row">
  <section class="paragraph large">
    <span class="section-header">Large</span>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    </p>
    <span class="section-class">p-large</span>
    <span class="section-description">Source Sans Pro / Regular / 18px</span>
  </section>
  <section class="paragraph medium">
    <span class="section-header">Medium</span>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    </p>
    <span class="section-class">p-medium</span>
    <span class="section-description">Source Sans Pro / Regular / 15px</span>
  </section>
  <section class="paragraph small">
    <span class="section-header">Small</span>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    </p>
    <span class="section-class">p-small</span>
    <span class="section-description">Source Sans Pro / Regular / 14px</span>
  </section>
</div>

#### Lists

<div class="row">
  <section class="list ordered">
    <span class="section-header">Ordered</span>
    <ol>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
    <span class="section-class">ol</span>
  </section>
  <section class="list unordered">
    <span class="section-header">Unordered</span>
    <ul>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
    <span class="section-class">ul</span>
  </section>
  <section class="list unstyled">
    <span class="section-header">Unstyled</span>
    <ul>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
    <span class="section-class">.list-unstyled</span>
  </section>
</div>
