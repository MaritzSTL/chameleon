# `chameleon-select`

#### `renders the loading spinner when loading is set to true`

```html
<div class="label-container">
  <label>
    chameleon
  </label>
</div>
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
      class="options__option"
      data-value="asdf"
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
      class="options__option"
      data-value="asdf"
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

