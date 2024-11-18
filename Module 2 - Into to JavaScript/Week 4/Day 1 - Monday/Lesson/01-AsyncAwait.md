# Async Await w/ Try Catch

With the addition of the Async/Await pattern in ES6, some of the asynchronous functionality can be written in a much cleaner way and it is then easier to avoid what is referred to as `callback hell`. With this pattern, it removes the need for promise chaining and can easily be used to clean up code by clearly keeping error handling in a try catch block. First let's take a look at the `try/catch` mechanic.

## Try Catch

Try/catch is a very straightforward concept to understand. When an error happens in your code, it could actually crash the whole program as you no doubt have already seen. But what happens if you want the app keep running if an error happens? Let's say you're calling an API and it's response triggered an error. Well, you wouldn't want to just crash your app; you'd want a custom error handler to maybe display an error to the page so the user knows something happened. Maybe you have an app that, when an error occurs, you want to log that error to a file so you can review those error later. This is considered 'gracefully' handling errors, and the ideal method of dealing with them. While you could use it for any piece of code, it should ONLY be used on a block of code that might (in it's normal workable state) trigger an error. It shouldn't be used as a band-aid so you don't have to worry about errors. It follows this simple pattern:

```javascript
try {
  // Code that might trigger an error here
} catch (error) {
  // the error argument is automatically passed if an error occurs. This catch block is COMPLETELY ignored if no error was triggered in the try block
} finally {
  // Finally is optional but it will run last and will ALWAYS run whether there was an error or not
}
```

### Using that pattern, the flow could be something like:

1. Try block runs it's code
2. Code triggers an error and the code in the catch block runs
3. The finally block runs

#### OR

1. Try block runs it's code
2. No error is triggered in the try block and the finally block runs

## Async / Await

From Mozilla docs:

`Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.`

Since certain functions can potentially take a long time, those functions are asynchronous. Some examples:

- HTTP Requests with `fetch()`
- Accessing a user's camera or microphone with `getUserMedia()`
- Asking a user to select files with `showOpenFilePicker()`

Currently we're used to promise chaining for any asynchronous code. Take the example from last week (I've added an error handler to the end):

```javascript
fetch("/someURL")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
```

As you can see that is a lot of code but not _too_ hard to read. The problem though is what happens if you need to trigger a promise IN one of the then blocks? You could have a whole chain in a `.then()`. It might look like:

```javascript
function getResponse() {
    fetch("/someURL")
    .then((response) => response.json();
    )
    .then((data) => {
        somePromise(data)
            .then(v => console.log(v))
            .catch(err => {})
    })
    .catch((error) => {
      console.log(error);
    })
}
```

Sure you could pull the internal promise out to a function, but that can cause some potentially weird issues. Let's also say that the internal promise would never cause an error - what then? As you can see above, that whole call is inside of the function `getResponse`. In order to use an async/await pattern, you must first let the code know it will be an asynchronous function. This is done by pre-pending it with the keyword `async` like: `async function getResponse() {}`. From there you can use a try/catch block and the await keyword. The await keyword basically tells the code to wait to use that variable until it has received asynchronous data. With that pattern, the second example above could be cleared up to:

```javascript
async function getResponse() {
  try {
    let response = await fetch("/someURL");
    let data = await response.json();
    let internalPromiseData = await somePromise(data);
  } catch (err) {
    console.log(err);
  }
};
```

As you can see it can clear up the code massively and help you avoid callback hell.
