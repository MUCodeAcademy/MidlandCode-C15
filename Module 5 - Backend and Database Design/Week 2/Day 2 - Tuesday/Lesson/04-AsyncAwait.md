# Async/Await

Let's look again at the previous file's example:

```javascript
let mysql = require("mysql");
let pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();
  return;
});

module.exports = pool;
```

- Then any route can access it with the following code:

  ```javascript
  //At the top
  let pool = require("../mysql.conf.js"); // Or path to above code.

  //Obviously the query can be anything you want it to be this is just an example.
  pool.query(
    "SELECT * FROM POSTS WHERE userId = ?",
    req.params.userId,
    (err, results, field) => {
      res.send(results);
    }
  );
  ```

- The above, while currently fine, _could_ lead to callback hell. Let's think about if we have to query for a user by id THEN if there is a user, based off that user returned get their posts. That would look something like:

```javascript
let pool = require("../mysql.conf.js"); // Or path to above code.

//Obviously the query can be anything you want it to be this is just an example.
pool.query(
  "SELECT * FROM users WHERE username = ?",
  req.params.username,
  (err, results, field) => {
    if (results.length === 0) {
      return res.send("No User Found");
    }
    pool.query(
      "SELECT * FROM POSTS WHERE user_id = ?",
      results[0].user_id,
      (err, posts, field) => {
        res.send(posts);
      }
    );
  }
);
```

It become hard to see what is going on with the above. ESPECIALLY if there is another call inside the internal one. If we want to clean it up, we can then setup our connection to utilize and `async/await` pattern.

The config file would now look like:

```javascript
const mysql = require("mysql");
const util = require("util");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database connection limit exceeded");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
  }
  if (connection) connection.release();
});

const query = util.promisify(pool.query).bind(pool);

module.exports = query;
```

`util.promisify` Is a built in tool for node that turns any asynchronous function with a standard callback of `(error, result)=>` into a promise which can then use `async/await` in a `try/catch` pattern. Because of this, the query object is now usable with `async/await`. We can clean up the previous callback hell example with (as long as its inside an `async` function):

```javascript
let query = require("../mysql.conf.js"); // Or path to above code.

//Obviously the query can be anything you want it to be this is just an example.
try {
  const [user] = await query(
    "SELECT * FROM users WHERE username = ?",
    req.params.username
  );
  if (!user) {
    return res.send("No User Found");
  }
  const posts = await query(
    "SELECT * FROM POSTS WHERE user_id = ?",
    user.user_id
  );
  res.send(posts);
} catch (err) {
  return res.send(err);
}
```

You'll notice that user is in `[]` Remember, any `SELECT` query ALWAYS returns an array even if it's only one item. By using array destructuring, this allows you to grab the first entry the query found. It's useful for logging in to because it will either be the user with the username provided OR undefined meaning there wasn't any user found with that name.
