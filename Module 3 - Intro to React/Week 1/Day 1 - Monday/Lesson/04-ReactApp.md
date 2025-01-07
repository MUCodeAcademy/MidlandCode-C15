# Creating a React App

The legacy command to create a React application is:
```javascript
npx create-react-app
```
It's very quickly being replaced by alternatives. One such alternative is the one I've personally fallen in love with, and the one we'll be using for this class: vite

```javascript
npx create vite@latest
```

This will create a React application with some starter code, and put it into a folder called project-name (you can name it whatever you want).

You will then have to go into the folder in the terminal with the 'cd' command:

```javascript
cd project-name
```

Now you can start the app with this command:

```javascript
npm run dev
```
As a side note, your `package.json` file will have a "scripts" section. Each key in that object is a runnable command when you type `npm run <CommandName>`

# React with TypeScript

With the newer updates to the `create-react-app` package, you are able to create a React project directly in TypeScript. While this isn't required, it can be a great tool to help you keep track of your code and make sure you're using types whenever possible. There are some phenomenal resources available for learning TypeScript with React including [React TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets).

# Other Tools

One great tool you can use to help troubleshoot issues is the React dev tools extension for chrome. It is great to look at components and props / state. While it is not used by everyone, it might be useful to take a look at if you're running into issues troubleshooting an application that compiled with no errors.

If you want to just play around with React without having to create a whole folder structure, there are some great resources here:

[React Playground](https://jscomplete.com/playground)

[Commonly Faced Problems](https://jscomplete.com/react-cfp)
