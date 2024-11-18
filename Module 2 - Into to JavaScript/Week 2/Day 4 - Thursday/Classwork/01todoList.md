# To-Do List Requirements

The objective of this project is to create a simple to-do list application using HTML, CSS, and JavaScript.

- The HTML should include a form for adding new to-dos, an input element for the to-do text, and an unordered list (`<ul>`) for the to-dos.
- Use CSS to style the page to your liking. This could include custom fonts, colors, or layout styles.
- The JavaScript should select the necessary elements from the DOM using `document.getElementById` or similar methods.
- When the button is clicked, create a new `<li>` element, set its text to the value of the input, and append it to the `<ul>`.
- The input should be cleared after a new to-do is added.
- When a to-do `<li>` is clicked, it should be removed from the `<ul>`.

### Bonus Requirements

- Instead of removing to-dos when they're clicked, add a "Complete" button to each to-do. When this button is clicked, the to-do's text should be crossed out.
- Add a "Delete" button to each to-do. When this button is clicked, the to-do should be removed from the list.
- Add the ability to edit existing to-dos.