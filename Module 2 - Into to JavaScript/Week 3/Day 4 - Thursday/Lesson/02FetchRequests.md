# Format of Fetch Requests

```javascript
fetch(api.link) // This returns a promise - an object that represents the eventual completion (or failure) of an operation
    .then((response) => { // This handles the promise from the fetch request
        if (!response.ok) { // If the promise fails... (usually a 4xx or 5xx status code)
        // Do something if the promise does not succeed
        }
        // Processes the successful response (usually a 2xx status code)
        return response.json(); // This also returns a promise that resolves to the JSON object when parsing is complete
    })
    .then((response) => {
        // handles the promise that was given by the return statement
    });
```

## Different methods for fetch

Fetch requests support various HTTP methods to perform different actions on the server. These methods are specified in the 'method' property of the fetch request. Here are the most common ones:

1. GET: This is the default method that retrieves data from the server. Should only be used to request data.
2. POST: This submits data to the server.
3. PUT: This updates an existing resource on the server with provided data.
4. PATCH: This partially updates an existing resource. Instead of sending the entire updated resource, PATCH requests only include specific changes to be applied.
5. DELETE: This method deletes a resource on the server

Often times, you will use JSON objects to transmit data between a server and a web application. A JSON is an object with a collection of key-value pairs. Here's an example:

```javascript
{
  "name": "Justin Luce",
  "age": 24,
  "isStudent": false,
  "courses": ["computer science", "physics", "english"],
  "contact": {
    "email": "luce@midlandu.edu",
    "phone": "123-456-7890"
  }
}
```
