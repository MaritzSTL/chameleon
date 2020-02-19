# `chameleon-sheet`

#### `updatesSlot`

```html
<section slot="content">
  <div>
    test
  </div>
</section>

```

#### `renders subheader`

```html
<header class="head-container">
  <chameleon-button
    class="close-icon"
    icon-only=""
    theme="text"
  >
  </chameleon-button>
  <h3 class="header">
  </h3>
  <slot name="details">
  </slot>
</header>
<slot name="actions">
</slot>
<span class="sub-header">
  chameleon
</span>
<slot name="content">
</slot>
```

