## Passwords.

Scenerio: you're on a site and you request a password reset. The website then just sends you your current password. You should NEVER use that password again (or the site if you can help it!).

- Best practice (honestly, ONLY practice at this point) is to store passwords in your database as hashed values.
- You can't avoid sending the password to the server as plaintext. You could hash it on the front end, but that's pointless as the end user has access to all of the front end code.

### What is hashing?

- Hashing is basically just taking a value (in this case a password) and transforming it through the magic of math!
- Hashing is one way and one way only. Once it's changed, you can't change it back. The beauty of this is that if you take a set value it will ALWAYS change to the same value (sort of).
- Why is this secure? Well, the problem is that it is only for a set amount of time longer. How long is tough to say. Basically, ANY hash can be cracked, but because you're trying to reverse engineer it, the amount of time it would require to get it right is so ludicrous it just doesn't make sense unless you have access to a super computer and NEED the value.
- Because of this, passwords are converted to a hashed value and then stored in the database. When a plain text password is provided via a login request or equivalent, the order of operations is as follows:
  1. Plain text password is taken from `req` and turned into a hashed value.
  2. User with the username provided is found in the database and the saved hashed password is retrieved.
  3. The two hashed values (one from the DB one form the req) are compared and depending on if they equal or not, the user is allowed access or a wrong password/username message is sent to the front end.

## How to hash

- the `bcryptjs` package is one of the preferred method for hashing. It's slower than the built in `crypto` package in node but is more secure (which is why it's slower). `npm install bcryptjs`
- This can be done synchronously or asynchronously depending on your needs. See the [docs](https://www.npmjs.com/package/bcryptjs) for more info.
- After installing and requiring the bcrypt package, hashing is incredibly straight forward.
- Bcrypt uses salt rounds for more complex hashing
  - Salt rounds increase the time needed to hash but also make it more difficulty to crack.
  - Every increase in salt rounds by 1 DOUBLES the time needed to hash. It'll only be in ms but it can add up.
- Steps for synchronous hashing (why synchronous or asynchronous?):
  ```javascript
  const bcrypt = require("bcryptjs");
  const saltRounds = 10;
  let hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  ```
  That's it!
- Then you can simply compare the two with:
  ```javascript
  bcrypt.compareSync(plainTextPassword, hashedValuedFromDB);
  ```
  That will then be true or false depending on if they match!

Play around with an example [here](https://bcrypt-generator.com/)!

One thing to note is that while the above examples are using the `compareSync` and `hashSync`, the preferred method would be to use async variants. So the hash above could be:

```javascript
let hash = await bcrypt.hash(plainTextPassword, saltRounds)
```
