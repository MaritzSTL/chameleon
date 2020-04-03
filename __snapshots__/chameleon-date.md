# `chameleon-date`

#### `prevIcon() returns default icon if none is supplied`

```html
<circle
  cx="12"
  cy="12"
  r="10"
>
</circle>
<polyline points="12 8 8 12 12 16">
</polyline>
<line
  x1="16"
  x2="8"
  y1="12"
  y2="12"
>
</line>

```

#### `prevIcon() returns the slot if one is provided`

```html
<slot name="prev-icon">
</slot>

```

#### `nextIcon() returns default icon if none is supplied`

```html
<circle
  cx="12"
  cy="12"
  r="10"
>
</circle>
<polyline points="12 16 16 12 12 8">
</polyline>
<line
  x1="8"
  x2="16"
  y1="12"
  y2="12"
>
</line>

```

#### `nextIcon() returns the slot if one is provided`

```html
<slot name="next-icon">
</slot>

```

