## So now the time has come to play around with node.

Here's the download link: https://nodejs.org/en/download/prebuilt-installer

### Basics

Basically, Node is a JavaScript runtime environment that lets you run JavaScript on the server side, outside of a web browser. Here are some things it does:

- Allows you to run (once or continuously) some JavaScript file using `node fileName.js`.
- Allows you to create a server that can be used for interacting with databases, websockets, etc.
- Comes pre-loaded with a ton of different tools to allow you to do all sorts of things.
- Can declare dependencies and install with NPM.
- Will make creating React applications much easier.

### What if we want to keep a file running continuously?

- You can use the `nodemon` package as a workaround for this! With a simple `npm i nodemon` you can now call `nodemon filename` and it will run the file and keep it open, restarting anytime changes have been registered.