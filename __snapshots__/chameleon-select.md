# `chameleon-select`

#### `renders the loading spinner when loading is set to true`

```html
<div class="container">
  <div class="tags">
    <span class="placeholder">
    </span>
  </div>
  <chameleon-loader
    loader="spinner"
    size="24px"
  >
  </chameleon-loader>
</div>
```

#### `renders filtered options`

```html
<div class="options">
  <ul class="options__list">
    <li
      aria-roledescription="$1"
      class="options__option"
      data-value="asdf"
      label="undefined asdf undefined undefined"
    >
      <div class="options__option-group">
        <span class="options__option-label">
          asdf
        </span>
      </div>
    </li>
  </ul>
</div>

```

#### `renders preLabel, subLabel, and postLabel`

```html
<div class="options">
  <ul class="options__list">
    <li
      aria-roledescription="$1"
      class="options__option"
      data-value="asdf"
      label="asdf asdf asdf asdf"
    >
      <div class="options__option-preLabel">
        asdf
      </div>
      <div class="options__option-group">
        <span class="options__option-label">
          asdf
        </span>
        <span class="options__option-subLabel">
          asdf
        </span>
      </div>
      <span class="options__option-postLabel">
        asdf
      </span>
    </li>
  </ul>
</div>

```

#### `activates selections`

```html
<div class="active container">
  <div class="tags">
    <span class="placeholder">
    </span>
  </div>
  <div class="options">
    <ul class="options__list">
    </ul>
  </div>
</div>
```

#### `activate selections fails if disabled`

```html
<div class="container">
  <div class="tags">
    <span class="placeholder">
    </span>
  </div>
</div>
```

#### `activates searchable selections`

```html
<div class="active container">
  <div class="tags">
    <input
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      placeholder="Type to filter..."
      type="text"
    >
  </div>
  <div class="options">
    <ul class="options__list">
    </ul>
  </div>
</div>
```

## `renders the renderedSelectedOption`

####   `renderedSelectedOption without labels`

```html
<div class="container">
  <div class="tags">
    <div class="options__option view-only">
      <div class="options__option-group">
        <span class="options__option-label">
          asdf
        </span>
      </div>
    </div>
  </div>
</div>
```

####   `renderedSelectedOption with labels`

```html
<div class="container">
  <div class="tags">
    <div class="options__option view-only">
      <div class="options__option-preLabel">
        asdf
      </div>
      <div class="options__option-group">
        <span class="options__option-label">
          asdf
        </span>
        <span class="options__option-subLabel">
          asdf
        </span>
      </div>
      <span class="options__option-postLabel">
        asdf
      </span>
    </div>
  </div>
</div>
```

####   `renders search bar`

```html
<div class="active container">
  <div class="tags">
    <input
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      placeholder="Type to filter..."
      type="text"
    >
  </div>
  <div class="options">
    <ul class="options__list">
    </ul>
  </div>
</div>
```

