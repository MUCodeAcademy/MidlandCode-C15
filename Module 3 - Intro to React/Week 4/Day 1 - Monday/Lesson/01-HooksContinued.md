# Custom Hooks

We already saw last week an example of a custom hook, but API calls are not the only thing you can use them for. One of the best options for custom hooks is to repeat functionality of some sort in an abstracted way. For example. let's assume for a second you have some sort of application that deals with multiple arrays of objects. The application has the following:

- Multiple different components with arrays
- Each of those components have different items in the arrays (users in one, recipes in another, etc)
- Although they are different elements, each element has an id key regardless of what other keys they might have. This is fairly common practice.
- All of the components might need to do at least some of the following things (although some components might not need all of them):
  - Set a starting value (from an API or hardcoded or anything else)
  - Add an element to the array
  - Clear the entire array
  - Remove an element by it's id
  - Remove an element at a specific index
  - Sort the elements by some key

With all of the above, you might want to create the different functions needed for each of the components, you'd also need to create state for each of the components to track the array. This would be a lot of repeated code. You can instead create a custom hook that allows you to include ALL of the functionality that _might_ be needed and expose it and the state to all possible components. That might look something like:

```javascript
// We will need the callback to handle any functions adjusting the state from inside the hook
import { useCallback, useState } from "react";

// ALL custom hooks need to be started with use. After that you can name it whatever you want.
// Since we're using arrays, useArray makes sense, you could have it something else though
// useArray will be a function that takes in an initial value and then does something with it.
export const useArray = (initialValue) => {
  // Because we'll be using this hook across all components, the state is contained inside of it
  const [value, setValue] = useState(initialValue);

  // We now return an object with all of the keys we need. This will include all of the functions we listed above
  // Not that we will be using generic names. If we called the sort function "sortUsersById" it would be confusing for the components that deal with recipes or something else
  return {
    value,
    setValue,
    // this is no different than a standard function, we just need to useCallback for it to work as well as possible
    add: useCallback((toAdd) => setValue((value) => [...v, toAdd])),
    clear: useCallback(() => setValue([])),
    // Sets the new value state as the old array filtered out to exclude items with the id provided
    removeById: useCallback((id) =>
      setValue((arr) => arr.filter((v) => v && v.id !== id))
    ),
    removeByIndex: useCallback((idx) => setValue((arr) => arr.splice(idx, 1))),
    // This sort would breakdown if the key was a string but that could be adjusted as needed
    sortByKey: useCallback((key) =>
      setValue((arr) => arr.sort((a, b) => a[key] - b[key]))
    ),
  };
};
```

So the above might seem like a lot of work but now the useArray hook can be provided an initial value then give you an object with ALL of the needed functionality / keys. It's also incredibly simple to use. In ANY of our components we would need to use arrays in we could do the following:

```javascript
// could be users / recipes / anything
const users = useArray([]) // Empty array or array of starting users

// From this point you could access anything with the following JSX:

{users.value.map(v => (
    <div>Id: {v.id}</div>
    <div>Any other keys: {v.otherKeys}
    <button onClick={users.removeById(v.id)}>Delete</button>
))}
```

That is just a simple example, but you could do anything by accessing the needed key off of the users constant. The beautiful part about creating the custom hook is the centralized functionality. What happens if you want to add another function to do something with arrays? Without the hook, you would have to add the function to ALL the components. Here you add it to the hook and then just add the implementation to the components. It greatly reduces the risk of errors as you're not trying to edit functions in multiple components, instead you're only editing implementation which is MUCH easier to troubleshoot.

# useCallback

A note about useCallback in the example above. We spoke earlier about memoization for functions. We do this here so it doesn't create a new instance of the function each time something happens thereby creating unnecessary renders. Normally you would need to provide any sort of dependencies so the callback would know WHEN to change values. This is not needed though if the callback takes arguments directly like above:

```javascript
// If the callback itself takes arguments in directly, you provide them as above like:
const memoizedWithArguments = useCallback((a, b) => {
  console.log(a + b);
});
// You would invoke the function like:
memoizedWithArguments(1, 2);
```

Remember that hooks can be told when to do something again, this is done by providing an array of dependencies as a second argument to the hook. In the case above there are no external dependencies not provided as arguments so that isn't needed. If you wanted to do something like invoke a function inside of the using external dependencies (such as state or a calculated value) this would need the dependency array. It could look like:

```javascript
const [val1, setVal1] = useState(1);
const [val2, setVal2] = useState(2);

const logAdd = (a, b) => console.log(a + b);

const memoizedWithDeps = useCallback(() => logAdd(val1, val2), [val1, val2]);
```

This might seem confusing and it kind of is, but the main thing to think about is that you probably won't need this pattern unless you KNOW you need it.
