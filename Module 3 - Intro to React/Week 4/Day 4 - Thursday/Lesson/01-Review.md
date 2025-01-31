# Review Module 3 Part 2

## State Management

1. What are some key ways to handle global state?

- useState at the top causes a few things to happen:
  - Rerenders all children when it changes
  - Needs to be passed down as props/context
- There are pattern specifically for managing global state, the 'singleton', for example

2. What is Context and what is flux?

- Context: helps us avoid prop drilling, another way to pass state and things to child react components
- Fulx: It's a pattern, and built in a common library like Flux and Redux, it's for managing complex state

3. What is the general pattern for context?

- Parents pass values to any descendant without the need for prop drilling

4. How could you implement the flux pattern with a hook?

- useReducer

5. What is a good folder structure for Context?

- Anything goes? Sortof
- It's good practice to keep you context files in a context folder, though not required
- It's good practice to create context file, though not required

6. What is wrong with the following bit of code:

```javascript
const [arr, setArr] = useState([1, 2, 3]);
setArr([...arr, 4]);
```

- Calling state setters in the render method / function body / body of a component

7. What is a dispatch function with a flux/useReducer pattern?

- dispatch is setState with extra bells an whistles, namely, the reducer function

8. What is a context provider?

- It's the JSX that takes a value. That value then becomes available to child components that call useContext(ContextName)

9. Assume you have an application with 30 pieces of state that could be shared across 15 different components. What would be the worst and best ways to track state in that application?

- Worst - Pass props... yuck!, 30 individual calls to useState
- Best - Some! Context, group shared ideas in a single state object

## Routing

1. How would you create routes and why would you want to in a React application?

- Page navigation, specifically that interfaces with the url path

2. How would you declare and access route parameters and why might they be useful?

- It adds flexibility

3. What does the 'exact' do in the following code: `<Route exact path="/">`

- It make the path require an exact match to show the route

4. How would you implement sub-routes for an application?

- Nesting of routs. Routes in Routes in Routes

5. How do you handle Authentication with routes?

- Help from google

## API Calls in React

1. Is there any difference between API calls in React and normal JavaScript? If so, what are they?

- useEffect needs to wrap an API call if it's tied to a component
- Run the call onMount is a good idea
- Vanilla JS doesn't have that issue

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
       function cleanup = () => {
          // Do stuff to stop the API call if it hasn't completed yet
          // This runs onUnMount
       }
       init();
       return cleanup;
     }, [url]);

     return { data, loading };
   }
   ```

-

## Hooks

1. What does the useEffect Hook do and when should you use it?

- onMount
- onUnmount
- derriving state from state, which is VERY VERY BAD!!!!

2. What is memoization and how could you use it with Hooks?

- useMemo, useCallback

3. What is the difference between a custom hook and a custom function?

- hooks start with "use", components start with "capital letter"

4. Where can you use hooks in a React project?

- within components, and within other hooks

5. What is missing from the following code:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

- missing dependency array

6. What (if anything) is wrong with the following custom Hook:

```javascript
  export function customUserHook(data){
    [user, setUser] = useState({});
    // ... hook functionality
  }
```

- it was missing "use" at the beginning

# React Query

1. What is React Query?

- An advanced library topic for the purposes of writing queries (aka, network requests/api calls/communication with the outside world)

2. When should you or should you not use React Query?

- Personal preference, but it's rather involved

3. What benefits does React Query have over a custom hook?

- A lot of heavy lifting
