## DRY JavaScript

Much like CSS, and basically every programming language, it's important to make sure that your code does not unnecessarily repeat itself. This not only helps with memory usage (although with simple JavaScript, it won't help a noticeable amount), but it will also immensely help with code legibility.

In most cases this is done by extrapolating out snippets of code into reusable functions (assuming that x might not always be 39). Take the below for example:

```javascript
let x = 39;
if (x % 2 == 0) {
  console.log("X is evenly divisible by 2");
} else {
  console.log("X is not evenly divisible by 2");
}

if (x % 3 == 0) {
  console.log("X is evenly divisible by 3");
} else {
  console.log("X is not evenly divisible by 3");
}

if (x % 4 == 0) {
  console.log("X is evenly divisible by 4");
} else {
  console.log("X is not evenly divisible by 4");
}

if (x % 5 == 0) {
  console.log("X is evenly divisible by 5");
} else {
  console.log("X is not evenly divisible by 5");
}

if (x % 6 == 0) {
  console.log("X is evenly divisible by 6");
} else {
  console.log("X is not evenly divisible by 6");
}

if (x % 7 == 0) {
  console.log("X is evenly divisible by 7");
} else {
  console.log("X is not evenly divisible by 7");
}
```

How could we make this better? It doesn't need to be something this repetitive to extrapolate out a smaller function, but this is an extreme example where we'd want to. Think ahead for something you might want to use and create a reusable function ahead of time. Much like the CSS rules we went over before, doing work up front can save you a ton of code.

```javascript
let ourNum = 39;
function isEvenlyDivisible(x, y) {
  if (x % y == 0) {
    console.log(`${x} is evenly divisible by ${y}`);
  } else {
    console.log(`${x} is not evenly divisible by ${y}`);
  }
}
for (let i = 1; i < 8; i++) {
  isEvenlyDivisible(ourNum, i);
}
```
