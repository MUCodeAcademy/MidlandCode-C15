# API Calls in React

One of the nice things about react is that any tools you can use in raw JavaScript, you can use in React. There are no differences in the calls themselves if you want to go a very simple route. That being said however, there are a couple rules you need to follow to make sure you're keeping your code clean and reusable. When you're handling calls, there are 4 main approaches:

1. Inline in the component fetch/axios (not recommended)
2. Centralized functions
3. Custom Hook
4. Library

Number one is not recommended due to the lack of reusability and scalability, so we will not be covering that, but in essence it is no different that using a standard fetch or axios call in the component's logic. We will also not be talking about third party libraries (not including axios) as there are too any options to cover easily. We will be talking about how to use centralized functions, custom hooks, and taking advantage of the `useEffect` hook to make your calls easier, cleaner, and more reusable.

## Services (Centralized Functions)

When you're talking about API calls, one of the nice things you can do is to simply pull your API call out into a file called a `service`. While this name isn't used everywhere it is common in a lot of design patterns. In fact, the Angular framework requires you to use what they actually call Services to make your API calls.

So what does a service look like and how do you use them? First, you'd have a folder for your services then create a file for each type of data you need. Let's say we need to get movies from the OMDBApi. We might create a file named `movieService` and have your code in that service. You would then import that function where you needed it. This is problematic though as it just removes the function out of the component itself. You can however create your own custom hook to help with this.

## Custom Hooks for API Calls

We'll get more into custom hooks as the weeks progress, but why would we want to use a custom hook instead of a normal function? Simply, the main reason is because normal functions cannot manage state. This is because functions re-render, while hooks do not. So, if you were to try to manage state inside a regular function, that state would be reset everytime the component re-renders, since the function is also re-rendering.

Let's look at an example of a custom hook. This would be held in a separate file and the bonus is that it could be reused regardless of where the API call was made to. Reusability is key with clean code.

```javascript
// In some sort of custom hook file such as 'useFetch' or 'useAPI'
import { useState, useEffect } from "react";

const baseUrl = "..."; // If all of them go to something like https://www.omdb.api you could put that link for this variable

export default function useFetch(url) {
  // This hook uses state management AND hooks
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      // This is with fetch, but it could just as easily be with axios
      try {
        // Even though we initalized these pieces of state above, 
        // we reset them here in case this is not the first API call.
        setData(null);
        setError(null);
        setLoading(true);
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  // Exposes the data, any error, and whether or not it was loading
  return { data, error, loading };
}
```

You would then import that Hook into any needed component and utilize it like:

```javascript
const [query, setQuery] = useState("");
// Since useFetch returns an object, we will need to destructure the data. 
// This means that we will extract the values from the object and assign them to new variables.
const { data: product, loading, error } = useFetch(`search?=${query}`);
// Breakdown:
// 'data: product' extracts the 'data' property and assigns it to a new variable called 'product'
// 'loading' extracts the loading 'property' and assigns it to a new variable called 'loading'
// 'error' extracts the 'error' property and assigns it to a new variable called 'error'
```
