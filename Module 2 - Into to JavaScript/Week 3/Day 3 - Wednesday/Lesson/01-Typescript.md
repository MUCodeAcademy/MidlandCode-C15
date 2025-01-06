# Typescript

## What is TypeScript?

It might sound incredibly simple, but TypeScript is basically JavaScript with types. So what does that mean? If we declare a variable in JS we would usually use: `let x = 5` or simply `let x` if we didn't know a starting value. JavaScript, however, doesn't care what value or type of value is going to be stored. We could do all of the following in order and get no errors:

```javascript
let x = 5;
x = [1, 2, 3, 4];
x = { name: "Bob" };
x = "Bob";
x = false;
x = undefined;
```

This is because without types it will never know what kind of value to expect and also doesn't care. This is where TypeScript comes into play. With normal JS, it might break your application if you're expecting x to be a boolean but you accidentally assign it a string value. In TypeScript, you won't even be able to do that. There are some extra steps involved that we'll go into below though. Let's say we wanted x to only be a string. In TS that would simply be: `let x: string;` the colon and type tells it what type to expect.

## How to Use TypeScript

First and foremost, browsers and node do not know how to handle TypeScript. We'll be getting more into other tools once we start with React next module. In the meantime, we need to turn the typescript into something that can be read and compiled before we can use it. We can do that with the following steps:

1. Install typescript globally via the command line: `npm install -g typescript` (this only needs to be done the first time you start using typescript)
2. Create a TS file and start coding. Instead of using the `.js` extension you need to use the `.ts` extension instead.
3. When you're done coding, compile the .ts file into JavaScript with the command: `tsc FILENAME`. This will create a `.js` file which you can then attach to an HTML file or run via node.

## Importing and Exporting Files

You can separate out your TS code quite nicely via importing and exporting things as needed. Lets take a look at some of the examples from the documentation below.

## Resources

There is a lot more to learn about TS and we will be using it extensively with React so you'll have plenty of time to learn but in the meantime:

- [Basic TS Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
