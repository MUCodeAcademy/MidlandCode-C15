# useReducer Hook

One of the nice things about hooks in React is that there are usually easier ways to do things with a Hook. If we were to look at the redux and flux pattern, you can use a very similar pattern to implement flux with a simple Hook. Let's say we have a parent component that handles state which is then passed down to props. While one of the standard ways to do that would be to have all of the functions you would need live in the parent and then pass down functions and state to the needed children. This is perfectly acceptable if you have small amounts of information or not too many things to track. What happens though if your state has tons of different pieces of data, or you have complex functionality to update state?

Let's assume for a moment that we have a page that is a store. We need to be able to remove items from a cart, add items, clear the cart, and change quantities of an item in the cart. We need to keep track of the state of the cart but also pass that and any needed functions down to child components. A partial version might look something like:

```javascript
export function App() {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart((cart) => [...cart, item]);
  }

  function updateQuantity(itemId, newQty) {
    setCart((cart) => {
      return cart.map((i) => (i.itemId === itemId ? { ...i, qty: newQty } : i));
    });
  }

  function removeItem(itemId) {
    // ...
  }

  function clearCart() {
    // ...
  }

  return (
    <>
      <Child1 cart={cart} clearCart={clearCart} />
      <Child2 cart={cart} clearCart={clearCart} addItem={addItem} />
      <Child3
        cart={cart}
        clearCart={clearCart}
        updateQuantity={updateQuantity}
      />
    </>
  );
}
```

As you can see in the above, you're using a lot of lines of code to declare the functions and then you have to pass them down individually. In each of the children, you need to invoke the actual function name and pass it the needed parameters. If we need to update something or add another function to a child, you have to update props and make sure you're using the right function name. It can lead to a lot of confusion and/or, at the very least, a cluttered parent. This is when you would strip out the above code into a separate reducer file. That file would then follow a very similar pattern to Redux and look something like:

```javascript
// It takes two arguments, the current state, and the action to do

// Constants help avoid mistyping items
export const ADD_ITEM = "Add item";
export const UPDATE_QUANTITY = "Update Quantity";
export const REMOVE_ITEM = "Remove Item";

export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      // The action object HAS to have a "type" key but otherwise it can have any keys needed for that action in state management
      return [...state, action.newItem];
    case UPDATE_QUANTITY:
      return state.map((i) =>
        i.itemId === action.itemId ? { ...i, qty: action.newQty } : i
      );
    case REMOVE_ITEM:
    // ...

    // ALWAYS have a default. Some patterns have this thrown an error so you know you implemented something incorrectly, others just return state as it currently is.
    default:
      return state; // return it exactly and not a new copy, otherwise it will trigger a re-render
  }
}
```

With the above, most of the code itself is identical to what it was except it isn't using the `useState` hook anymore. With our new reducer, implementing it in the parent is incredibly easy:

```javascript
import cartReducer from "fileLocation";
export function App() {
  const initialState = [];
  // The useReducer hook requires two arguments (it can take a third but we'll ignore that for now)
  // The arguments in order are: The reducer function you created and your initialState. The initial state could be a set value or something you retrieved from somewhere
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <Child1 cart={cart} dispatch={dispatch} />
      <Child2 cart={cart} dispatch={dispatch} />
      <Child3 cart={cart} dispatch={dispatch} />
    </>
  );
}
```

The only difference is that the child now needs to call the dispatch function and pass any data it needs to in an action. You WON'T pass any state as it is automatically grabbed by React as part of the `useReducer` hook:

```javascript
// CORRECT version in the Child:
// Requires an action object with AT LEAST the type
dispatch({ type: ADD_ITEM, newItem });

// As mentioned, DO NOT pass the current state
// INCORRECT Version in Child
dispatch(cart, { type: ADD_ITEM, newItem });
```

You can also create helper functions like this (in some place that has access to dispatch):

```javascript
function addItem(item) {
  dispatch({ type: ADD_ITEM, newItem: item });
}
```
