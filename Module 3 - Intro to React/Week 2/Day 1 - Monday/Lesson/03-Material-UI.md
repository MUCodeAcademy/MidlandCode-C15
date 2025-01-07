# Material-UI

So what if you don't want to go through the hassle of creating your own styled components? Much like we talked about using Bootstrap for pre-built styling with vanilla html, there are options for you to use with React as well. In fact Bootstrap has a [React specific package](https://react-bootstrap.github.io/) which functions very similar to Material UI. There is not one that is "better" or worse, they are all there to use, but generally speaking, if you pick one either stick with that for everything (outside of creating your own custom styled components).

One of the coolest parts of using a styling library built for React is that all of the styled elements are actually just components. With Material UI they're actually also ALL built off the `emotion` library. So if you think of something like the old version of bootstrap we used, we might have:

```html
<button class="btn btn-primary">Text Here</button>
```

Where we just add classes to normal HTML elements. Instead with MUI as per [the docs](https://mui.com/material-ui/getting-started/overview/) you could do something like (if you wanted the "contained" style):

```javascript
<Button variant="contained">Contained</Button>
```

This will render a button with pre-built styling. You can also set up a custom theme for the entire application so you can overwrite the default styling as needed.

We're not going to go in depth about how to remake the whole app with Material UI, but let's take a couple minutes and walk through some of the documentation.
