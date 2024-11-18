# What is the Axios Library?

Axios is a node package that allows you to utilize easier functions to make API calls. It utilizes a pattern similar to `fetch` but you can use it in either a browser OR in a node application. Some key things to know about it are:

- Allows for either promise chaining or async/await patterns
- Has more concise named functions to cover all main HTTP requests
- Well [documented](https://axios-http.com/docs/intro) and heavily used in production applications
- Creates much cleaner code that has all of the same functionality as a standard `fetch` or `xhr` request.

Let's take a look at a live example of it in action on a web page (would look nearly identical when used in a node application). If you would need to use it in a node application, the code would be the same as in the `.html` file, the only difference would be you would need to add one of the following to the top of the javascript file:

```javascript
// If not using ES6
const axios = require("axios");

// With ES6
import axios from "axios";
```
