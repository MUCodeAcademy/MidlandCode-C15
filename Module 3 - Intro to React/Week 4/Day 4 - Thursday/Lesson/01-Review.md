# Review Module 3 Part 2

## State Management

1. What are some key ways to handle global state?

-

2. What is Context and what is flux?

-

3. What is the general pattern for context?

-

4. How could you implement the flux pattern with a hook?

-

5. What is a good folder structure for Context?

-

6. What is wrong with the following bit of code:

```javascript
const [arr, setArr] = useState([1, 2, 3]);
setArr([...arr, 4]);
```

-

7. What is a dispatch function with a flux pattern?

-

8. What is a context provider?

-

9. Assume you have an application with 30 pieces of state that could be shared across 15 different components. What would be the worst and best ways to track state in that application?

- Worst -
- Best -

## Routing

1. How would you create routes and why would you want to in a React application?

-

2. How would you declare and access route parameters and why might they be useful?

-

3. What does the 'exact' do in the following code: `<Route exact path="/">`

-

4. How would you implement sub-routes for an application?

-

5. How do you handle Authentication with routes?

-

## API Calls in React

1. Is there any difference between API calls in React and normal JavaScript? If so, what are they?

-

2. Explain what is (and what might be) wrong with the following piece of code:

   ```javascript
   import { useState, useEffect } from "react";

   const baseUrl = "...";

   export default function useFetch(url) {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       function init() {
         const response = await fetch(baseUrl + url);
         const json = await response.json();
         setData(json);
         setLoading(false);
       }
       init();
     }, [url]);

     return { data, loading };
   }
   ```

-

## Hooks

1. What does the useEffect Hook do and when should you use it?

-

2. What is memoization and how could you use it with Hooks?

-

3. What is the difference between a custom hook and a custom function?

-

4. Where can you use hooks in a React project?

- 

5. What is missing from the following code:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

-

6. What (if anything) is wrong with the following custom Hook:

```javascript
  export function customUserHook(data){
    [user, setUser] = useState({});
    // ... hook functionality
  }
```

-

# React Query

1. What is React Query?

-

2. When should you or should you not use React Query?

-

3. What benefits does React Query have over a custom hook?

-
