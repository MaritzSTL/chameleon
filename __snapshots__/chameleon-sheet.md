# `chameleon-sheet`

#### `renders slotted content in default slot`

```html
<article>
  <slot name="close-icon">
    <chameleon-button
      aria-role="button"
      class="close-icon"
      data-sheet-close=""
      icon-only=""
      target="_top"
      theme="text"
    >
    </chameleon-button>
  </slot>
  <slot>
  </slot>
</article>

```

#### `can slot new close button`

```html
<article>
  <slot name="close-icon">
    <chameleon-button
      aria-role="button"
      class="close-icon"
      data-sheet-close=""
      icon-only=""
      target="_top"
      theme="text"
    >
    </chameleon-button>
  </slot>
  <slot>
  </slot>
</article>

```

#### `updatesSlot`

```html
<section slot="content">
  <div>
    test
  </div>
</section>
```

