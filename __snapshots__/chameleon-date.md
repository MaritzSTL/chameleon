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

#### `renders overlay`

```html
<chameleon-input
  placeholder=""
  readonly=""
  type="text"
>
</chameleon-input>
<div class="month overlay">
  <header>
    <chameleon-button
      icon-only=""
      theme="text"
    >
    </chameleon-button>
    <h3>
      January
              2020
    </h3>
    <chameleon-button
      icon-only=""
      theme="text"
    >
    </chameleon-button>
  </header>
  <div class="day-of-week">
    <div>
      Su
    </div>
    <div>
      Mo
    </div>
    <div>
      Tu
    </div>
    <div>
      We
    </div>
    <div>
      Th
    </div>
    <div>
      Fr
    </div>
    <div>
      Sa
    </div>
  </div>
  <div class="date-grid offset-3">
    <div class="active">
      1
    </div>
    <div>
      2
    </div>
    <div>
      3
    </div>
    <div>
      4
    </div>
    <div>
      5
    </div>
    <div>
      6
    </div>
    <div class="current">
      7
    </div>
    <div>
      8
    </div>
    <div>
      9
    </div>
    <div>
      10
    </div>
    <div>
      11
    </div>
    <div>
      12
    </div>
    <div>
      13
    </div>
    <div>
      14
    </div>
    <div>
      15
    </div>
    <div>
      16
    </div>
    <div>
      17
    </div>
    <div>
      18
    </div>
    <div>
      19
    </div>
    <div>
      20
    </div>
    <div>
      21
    </div>
    <div>
      22
    </div>
    <div>
      23
    </div>
    <div>
      24
    </div>
    <div>
      25
    </div>
    <div>
      26
    </div>
    <div>
      27
    </div>
    <div>
      28
    </div>
    <div>
      29
    </div>
    <div>
      30
    </div>
    <div>
      31
    </div>
  </div>
</div>
```

#### `renders year overlay`

```html
<header>
  <chameleon-button
    icon-only=""
    theme="text"
  >
  </chameleon-button>
  <h3>
    2020
  </h3>
  <chameleon-button
    icon-only=""
    theme="text"
  >
  </chameleon-button>
</header>
```

#### `renders date grid with min/max values`

```html
<div class="date-grid offset-3">
  <div class="active">
    1
  </div>
  <div>
    2
  </div>
  <div>
    3
  </div>
  <div>
    4
  </div>
  <div>
    5
  </div>
  <div>
    6
  </div>
  <div class="current">
    7
  </div>
  <div>
    8
  </div>
  <div>
    9
  </div>
  <div>
    10
  </div>
  <div disabled="">
    11
  </div>
  <div disabled="">
    12
  </div>
  <div disabled="">
    13
  </div>
  <div disabled="">
    14
  </div>
  <div disabled="">
    15
  </div>
  <div disabled="">
    16
  </div>
  <div disabled="">
    17
  </div>
  <div disabled="">
    18
  </div>
  <div disabled="">
    19
  </div>
  <div disabled="">
    20
  </div>
  <div disabled="">
    21
  </div>
  <div disabled="">
    22
  </div>
  <div disabled="">
    23
  </div>
  <div disabled="">
    24
  </div>
  <div disabled="">
    25
  </div>
  <div disabled="">
    26
  </div>
  <div disabled="">
    27
  </div>
  <div disabled="">
    28
  </div>
  <div disabled="">
    29
  </div>
  <div disabled="">
    30
  </div>
  <div disabled="">
    31
  </div>
</div>
```

