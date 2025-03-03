# OAuth

OAuth is an open authorization framework that allows for services to share assets or information across multiple sites. You're almost assuredly already using it in your everyday use. If you've ever logged into a site with Facebook/Google/X, or if you've ever used some sort of single sign on tech, you've already used OAuth. Think of it as if you're letting a valet drive your car. This can make the authentication process for your app/site MUCH easier. The biggest downside is that if you're using SSO for multiple sites and your credentials are leaked/ found, get ready to have a ton of sites now be accessible.

# Passport.js

[Passport](https://www.passportjs.org/) is a library for node.js that provides authentication middleware options. It has built in functionality for OAuth, OAuth 2.0 AND Facebook, Twitter, Google, and many others.

## Setting it up can be a bit tricky the first Time

In order to configure passport you need 3 things.

1. Authentication Strategy
2. Application Middleware
3. Sessions (this is optional, especially with JWT Authorization)

First you need to create your LocalStrategy. A strategy is just a method of authenticating a user; a 'LocalStrategy' is used for authenticating users with a username/password. Here's an example using mysql:

```javascript
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    connection.query(
      "SELECT * FROM USERS WHERE USERNAME = ?",
      [username],
      function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user[0]) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!bcrypt.compareSync(password, user[0].password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user[0]);
      }
    );
  })
);
```

You then (with express) need to initialize the use of passport as a middle ware. You would want to put this at the beginning of the server, before you declare any routes.
An example is below:

```javascript
app.use(passport.initialize());
// Initializes passport.
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true}));
app.use(passport.session());
// Session will store data between HTTP requests, so that it will know the user is logged in between requests.
// secret is the secret key to sign the session (in a real app you would use a long, random string for security).
// resave: false means it will not save the session if it has not been modified.
// saveUninitialized: true saves it to the store if it's a new session but not modified.
```

From there you can implement it either in a route directly OR as middle ware as below:

```javascript
// passport.authenticate("local") tells the server to handle the request at /login with the 'local' strategy.
app.post("/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect("/users/" + req.user.username);
});
```
