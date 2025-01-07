# Refs

Refs are simply references to some sort of item or element. They can be used to keep track of rendered data or things you need to keep track of more easily. The most important reason why you would want to use this hook, is because 'useRef' can store values that persist across renders without actually causing a re-render itself. 'useRef' creates an object with a 'current' property that is not tied to the React component's state or lifecycle. So, when you update the 'current' property of the ref, React doesn't treat it as a state change, and it doesn't trigger a re-render.

To implement them you simply utilize the `useRef()` hook and then pass in the starting value for the reference. When referencing an HTML element, you could start the value at null and then simply use the `ref` attribute in the JSX for the element itself. Let's say you have a button that when clicked, focuses on an input element. That code might look something like:

```javascript
import React, { useRef } from "React";

function TextInputWithFocusButton() {
  const inputElement = useRef(null);

  // The .current key on the reference is whatever the current value is. In this case it would be the element we used the ref attribute on
  const onButtonClick = () => inputElement.current.focus();

  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input </button>
    </>
  );
}
```
You could use 'useState' for this, but the problem is that 'useState' will cause a re-render of the component every time the input value changes. With 'useRef', we avoid unnecessary re-renders which improves performance.

While the most common use case is to reference DOM elements, you can reference other things including

- State that isn't rendered or doesn't change
- "Instance variable" in function components which can include but is not limited to:
  - Tracking if the component was mounted
  - Storing a previous value
  - Keeping data between renders (Because refs don't actually change and also don't trigger re-renders themselves)
  - Store a value used in useEffect