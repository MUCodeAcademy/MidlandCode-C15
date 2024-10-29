# FLEX OPTIONS

## Container

- `display: flex` - makes it so the children can actually flex.
- `flex-direction` - `row`, `column`, `row-reverse`, `column-reverse` layout you want.
- `flex-wrap` - `nowrap`, `wrap` whether or not the rows move onto a new line or not based off sizing.
- `flex-flow` - combines the previous two in that order `flex-flow: row wrap` for example.
- `justify-content` - allows you to distribute space in certain ways: `center`, `space-between`, `space-evenly`

## Children

- `flex-grow` - 0 doesn't allow it to grow, 1 allows it grow to fill any excess space on that row
- `flex-shrink` - 0 doesn't allow it to shrink if the screen goes below the width of that element 1 allows it to
- `flex-basis` - Starting point for width (row) or height (column)
- `flex` - Allows the previous options to be declared all at once `flex: 1 1 100px`

Good cheat sheet for the different properties: https://yoksel.github.io/flex-cheatsheet/#section-flex-direction
