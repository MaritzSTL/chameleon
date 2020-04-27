# `chameleon-table`

#### `doesn't render pagination if .hidePagination is true`

```html
<table>
  <thead>
    <tr>
      <th>
        <div class="header-container">
          <div class="column-header">
            Column 1
          </div>
          <chameleon-input
            class="search"
            name="someFilter"
            outlined=""
            placeholder="Search"
            type="text"
          >
          </chameleon-input>
        </div>
      </th>
      <th>
        <div class="header-container">
          <div class="column-header">
            Column 2
          </div>
        </div>
      </th>
      <th>
        <div class="header-container">
          <div class="column-header">
            Column 3
          </div>
        </div>
      </th>
      <th class="right">
        <div class="header-container">
          <div class="column-header">
            Column 4
          </div>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr data-row="0">
      <td>
        Row 1 - Field 1
      </td>
      <td>
        Row 1 - Field 2
      </td>
      <td>
        Row 1 - Field 3
      </td>
      <td class="right">
        Row 1 - Field 4
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr
      class="show-details"
      data-row="1"
    >
      <td>
        Row 2 - Field 1
      </td>
      <td>
        Row 2 - Field 2
      </td>
      <td>
        Row 2 - Field 3
      </td>
      <td class="right">
        Row 2 - Field 4
      </td>
    </tr>
    <tr
      class="details-row show-details"
      data-row="0"
    >
    </tr>
  </tbody>
</table>

```

#### `renderColumnSort`

```html
<div class="sort-icons">
  <div class="icon-container sort-ascending">
  </div>
  <div class="icon-container sort-descending">
  </div>
</div>

```

## `icons`

####   `renders chevronUpIcon`

```html
<polyline points="4 18 12 10 20 18">
</polyline>

```

####   `renders chevronDownIcon`

```html
<polyline points="4 6 12 14 20 6">
</polyline>

```

