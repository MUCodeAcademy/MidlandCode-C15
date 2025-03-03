# What if I want my SPA AND server code in the same folder?

- First you want to create the SPA folder in React this can be a new React app via `create-react-app` or a preexisting app.
- Next you could copy over all of the server code into the folder. Make sure you don't copy over `package.json` or `package-lock.json`.

# How to test in development

If you're using both your SPA and backend at the same time, you're usually best off doing the following:

1. In your `package.json` set a `proxy` key to be your backend's port:

```javascript
"proxy": "http://localhost:SERVER_PORT"
```

The above allows for it proxy any requests from port 3000 (where React runs) to your backend.

2. Set up any backend bundling or nodemon style code to ignore any changes to the `src` folder to prevent the server from restarting unnecessarily.
