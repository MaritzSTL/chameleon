# `chameleon-accordion`

#### `renders !expanded correctly`

```html
<div class="header">
  <div class="header-toggle">
    <span class="toggle-icon">
    </span>
    <slot name="header">
    </slot>
  </div>
  <slot name="subheader">
  </slot>
</div>
<div class="collapsed panel">
  <slot name="panel">
  </slot>
</div>

```

```html
<div class="header">
  <div class="header-toggle">
    <span class="toggle-icon">
    </span>
    <slot name="header">
    </slot>
  </div>
  <slot name="subheader">
  </slot>
</div>
<div class="collapsed panel">
  <slot name="panel">
  </slot>
</div>
```

#### `renders expanded correctly`

```html
<div class="header">
  <div class="header-toggle">
    <span class="rotate toggle-icon">
    </span>
    <slot name="header">
    </slot>
  </div>
  <slot name="subheader">
  </slot>
</div>
<div class="expanded panel">
  <slot name="panel">
  </slot>
</div>

```

```html
<div class="header">
  <div class="header-toggle">
    <span class="rotate toggle-icon">
    </span>
    <slot name="header">
    </slot>
  </div>
  <slot name="subheader">
  </slot>
</div>
<div class="expanded panel">
  <slot name="panel">
  </slot>
</div>
```

