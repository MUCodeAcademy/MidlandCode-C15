# Internet Security and Authentication

What all can you do to secure your application?

## Cookies

Cookies are typically used for storing stateful information for the session, such as whether the user is logged in, user's preferences/settings, items in a shopping cart, etc.

### Benefits

- The biggest benefit is the persistence of cookies. It can easily be used to store information for repeat visitors and are stored locally as opposed to on the server itself.
- They work without the user having to know anything about their use.
- Because they are local, they reduce server memory impact.
- Uses a database to store session information which allows messages to be pushed directly to all users without any other information.

### Downsides

- If a user disables cookies, it can cause problems or even break the application if the cookies are relied upon for authentication.
- Each cookie is limited in information stored; about 4 kilobytes per cookie.
- Because of the above they're almost always limited to string information.
- Easily accessible and readable if the user finds them.
- Most browsers limit the number of cookies per site. This, combined with the small amount of data sent, can cause problems if you need to send a lot of data via cookies.
- Make sure you're following the law: https://www.osano.com/articles/cookie-laws

## Using Session based authentication with Express

If you want to implement cookies and session based storage, the defacto is [Express-session](https://www.npmjs.com/package/express-session) and is one of the most used for express. It allows for the easy setup of session based authentication and is well documented. The one problem is that you have to setup another database/table for keeping track of all of your sessions.

## JWT Stateless Authentication

JSON Web Tokens are a way to securely transmit information between two parties as a JSON object. JWTs can be signed using a secret key, meaning you can be sure that the senders are who they say they are.

### Benefits

- Since most web apps stateless, they continue that usage and can make things a bit easier.
- Allows more complex data to be stored in the JWT.
- Allows for a separate authentication server to handle the load of all authentication requests.
- Much better cross platform compatibility with mobile and other devices.
- Hashes information to keep it secure.

### Downsides

- Vulnerable to Corss-Site Scripting attacks - someone injecting malicious scripts into your website.
- If a JWT is compromised, the attacker can generate their own valid tokens, leading to mass security breaches.
- If you set up response or requests incorrectly on your app/server, you can inadvertently break parts of your application.
- Since they contain a payload of data, they can become quite large and slow down the application.
