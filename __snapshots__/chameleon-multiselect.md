# `chameleon-multiselect`

## `render`

####   `renders data`

```html
<div class="multiselect-box">
  <div class="tags">
    <input
      class="multiselect-input"
      name="multiselect-input"
      placeholder="Type to filter..."
      type="text"
    >
  </div>
  <div class="options">
    <ul class="options__list">
      <li
        class="options__option"
        data-value="arch"
      >
        <div class="options__option-group">
          <span class="options__option-label">
            Gateway Arch
          </span>
        </div>
      </li>
      <li
        class="options__option"
        data-value="union-station"
      >
        <div class="options__option-group">
          <span class="options__option-label">
            Union Station
          </span>
        </div>
      </li>
      <li
        class="options__option"
        data-value="scott-joplin-house"
      >
        <div class="options__option-group">
          <span class="options__option-label">
            Scott Joplin House
          </span>
        </div>
      </li>
    </ul>
  </div>
  <slot name="icon">
  </slot>
</div>

```

####   `renders data with labels`

```html
<div class="multiselect-box">
  <div class="tags">
    <input
      class="multiselect-input"
      name="multiselect-input"
      placeholder="Type to filter..."
      type="text"
    >
  </div>
  <div class="options">
    <ul class="options__list">
      <li
        class="options__option"
        data-value="arch"
      >
        <div class="options__option-preLabel">
          asdf
        </div>
        <div class="options__option-group">
          <span class="options__option-label">
            Gateway Arch
          </span>
          <span class="options__option-subLabel">
            Historical Landmark
          </span>
        </div>
        <span class="options__option-postLabel">
          asdf
        </span>
      </li>
      <li
        class="options__option"
        data-value="union-station"
      >
        <div class="options__option-preLabel">
          asdf
        </div>
        <div class="options__option-group">
          <span class="options__option-label">
            Union Station
          </span>
          <span class="options__option-subLabel">
            Historical Landmark
          </span>
        </div>
        <span class="options__option-postLabel">
          asdf
        </span>
      </li>
      <li
        class="options__option"
        data-value="scott-joplin-house"
      >
        <div class="options__option-preLabel">
          asdf
        </div>
        <div class="options__option-group">
          <span class="options__option-label">
            Scott Joplin House
          </span>
          <span class="options__option-subLabel">
            Historical Landmark
          </span>
        </div>
        <span class="options__option-postLabel">
          asdf
        </span>
      </li>
    </ul>
  </div>
  <slot name="icon">
  </slot>
</div>

```

####   `renders filtered options`

```html
<div class="multiselect-box">
  <div class="tags">
    <input
      class="multiselect-input"
      name="multiselect-input"
      placeholder="Type to filter..."
      type="text"
    >
  </div>
  <div class="options">
    <ul class="options__list">
      <li
        class="options__option"
        data-value="arch"
      >
        <div class="options__option-group">
          <span class="options__option-label">
            Gateway Arch
          </span>
        </div>
      </li>
    </ul>
  </div>
  <slot name="icon">
  </slot>
</div>

```

