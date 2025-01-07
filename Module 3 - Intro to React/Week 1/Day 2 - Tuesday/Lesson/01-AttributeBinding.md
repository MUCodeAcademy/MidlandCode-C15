# Attribute Binding in React

When you want to change the attributes of something programmatically with the DOM you can do so with things like: `element.style.backgroundColor = ???`. You can still do those things with React but you do NOT select the element as you normally would. Instead it is all done when you create the HTML in the JSX.

## How to bind

When you bind values in React you do so with the `{}` that we briefly mentioned yesterday. These curly brackets are used in React to use JavaScript expressions, like variables and functions, in JSX. So let's say you wanted to bind someone's name to a div based off some provided value. Assuming you had that value stored in a variable you would have to do it in the old way like:

```html
<div id="name">Hello,</div>
```

```js
let name = "Justin";
let nameDiv = document.getElementById("name");
nameDiv.innerText = `${nameDiv.innerText} ${name}`;
```

With React binding you can simply declare the JSX like this:

```jsx
<div>Hello, {name}</div>
```

By using binding, you can skip element selecting and overwriting as it happens behind the scenes. You can even use things like `arr.map(...)` to easily render loops or even some sort of conditional to decide whether or not to render a specific part of the page. We'll look at both in more detail here with the classwork. Something to note is that if the variable `name` referenced above changes, it WILL not live update the page. Why though? The big reason is that the variable doesn't live in the `state` of React. We'll get more into state as we progress but one of the reasons that React is performative is because it only pays attention to certain updates. The variable above isn't in the React ecosystem so any changes to it will be ignored.
