# useMemo

One of the problems with React is that it can end up re-rendering a page when a value doesn't actually change. One of the bigger problems though is that because it tries to re-render EVERYTHING in the component which can lead to memory problems. Let's take our Todo App for a moment and say we want a derived state to see the number of tasks that are not yet completed. So we might have a todo that has a completed key, which is a boolean, and we want to see the total number AND then we need to see which the next one coming due is. Normally we could simply have:

```javascript
const [todos, setTodos] = useState([]);
// We can chain prototypical functions together
const numIncomplete = todos.filter((t) => !t.completed).length;
const nextDue = todos.sort((a, b) => a.dueDate - b.dueDate)[0];
```

So the above isn't too complicated at all but what happens if there are other pieces of state or something else that might trigger a re-render in that component. Sure, we would want the `numIncomplete` and the `nextDue` to re-calculate if the todos array changed in some way. We WOULDN'T want them to recalculate if something else triggered a re-render and the todos stayed the same. While you might think, what's the harm in them getting recalculated? If we have only a max of 50 todos, the memory impact is little to nothing; however, if you have a lot, it has to run those functions on EACH render and can cause unneeded memory problems. You can instead create a memoized value that will only be recalculated when it's dependencies change. This is perfect for what we want to use here. This could then look like:

```javascript
const [todos, setTodos] = useState([]);
// useMemo requires two arguments:
// 1. The function to run that returns the value you need
// 2. The dependencies that trigger a recalculation if they, and ONLY if they, change.

const memoNumIncomplete = useMemo(
  () => todos.filter((t) => !t.completed).length,
  [todos]
);
const memoNextDue = useMemo(
  () => todos.sort((a, b) => a.dueDate - b.dueDate)[0],
  [todos]
);
```

Now with the above those values will only be re-calculated when the todos array itself changes. Remember when we talked about the importance of immutability? That is because by having immutability, the memo will be able to make a reference comparison and thereby tell when it needs to re-calculate those derived pieces of state.
