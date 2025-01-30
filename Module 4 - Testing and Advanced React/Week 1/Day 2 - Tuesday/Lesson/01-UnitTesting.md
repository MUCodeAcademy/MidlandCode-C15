# Unit Testing

Now that we know some basics for testing, let's take a look at what we need to do to add testing to all of our code. When you're writing tests, we need to first think about what all we need to test. Let's think about our todo application or more specifically some of the components for it. We need to remember to keep track of ONLY the things that make sense to test that only that component has. Once we know what we need to test, let's get to testing. First, lets install one of the more preferred testing libraries with `npm install --save-dev @testing-library/react`. Here are the [docs](https://testing-library.com/docs/react-testing-library/intro/) for future reference.

## Steps

Conceptually, you want to think of testing in these steps:

1. Create a test file for the part of the app you want to test.
2. Render the page you want to test.
3. Mock the functionality of the page (for example, if you're testing a login page, you will write a test which will type in the username/password inputs, and click the login button).
4. See if the test was successful.

Basically all of our tests are going to follow that same pattern, but with different functions.

## Testing Rendering

When you're trying to see what kind of things are rendered, you need to be able to grab different elements and see what content is inside of them and rendered to the browser. There are several ways to grab different elements, but they are all done by grabbing the needed key off of the `render` function built into the testing library. One thing to note is that ideally you should be grabbing by text or element or something the user will actually see. Sometimes, however, that is not possible. One option is to use `getByTestId` which can be implemented by the following two steps:

```javascript
// In the test file
const { getByTestId } = render(THING_TO_RENDER);
```

```html
<!-- In the actual component's JSX -->
<div data-testid="test-id-name">...</div>
```

As you can see with the above, we have to manually add an attribute to the element in the component. If you're asking yourself why would you go through that extra work, then you're not alone. This should only be done as a last resort when there is no easier way to grab the element / content for testing. An example of a render test for a component might look like this:

```javascript
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("ExampleComponent", () => {
    it("should return a container", () => {
      const { container } = render(<ExampleComponent prop1="value" />);
      expect(container).toBeDefined();
      expect(container.outerHTML).toBe("EXPECTED HTML HERE");
    });

    it("should display the correct prop", () => {
      const { getByTestID } = render(<ExampleComponent prop1="value" />);
      const prop1Value = getByTestId("prop-display");
      expect(prop1Value).toHaveTextContent("Value Expected");
    });
});
```

## Testing With Test Utilities

Testing that things are rendered is incredibly important. More than that though, we need to make sure that once it is rendered, we test other things in the component. As we discussed before, making sure that your component is properly tested is important. One of the things you can do for testing is setup some form of functionality before each test. This can be done with something such as:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";

// ... Inside the describe
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  ReactTestUtils.act(() => {
    ReactDOM.render(<ExampleComponent prop1={"value"} />, container);
  });
  someElement = container.querySelector("someElement");
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
```

In the above example if you need to render a component and grab some element (such as an input or similar) that will be used in every test, this allows you to set up those elements / render the component and then clean it up before each test. Functionally all this does is reduce the repetition of code.

## Testing Events

Being able to test events is incredibly important. This will allow you to test ACTUAL human interaction without having to actually interact with the component. All of these events will be triggered programmatically. Let's say you have a simple component that allows for a element to be clicked and then have a counter change values. This could be done with something as simple as:

```javascript
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should start at zero", () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/Counter is:/);
    expect(paragraph.textContent).toBe("Counter is: 0");
  });

  it("should increment on click", () => {
    const { queryByText } = render(<Counter />);
    const paragraph = queryByText(/Counter is:/);
    expect(paragraph.textContent).toBe("Counter is: 0");
    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe("Counter is: 1");
    fireEvent.click(paragraph);
    expect(paragraph.textContent).toBe("Counter is: 2");
  });
});
```

As you can see, you can simply trigger the functionality directly with the `fireEvent` functionality built into `@testing-library/react`.

## Mocking Tests

Jest allows you to mock functions. Simply put this allows you to "pretend" to call a function and hard-code a value and/or see how many times it was called and what the arguments were. This can be incredibly useful to make sure that your functions are called appropriately. You can create a simple mock with `const fn = jest.fn();` and then access any mocked data with it or see how many times it was called, what arguments were passed. Assume for a moment you have a function that gets passed an argument and you want to make sure it was actually called and or passed correct data. You can simply access the values it has been passed (assuming you mocked it correctly) with:

```javascript
// if you just want to see if the function was called at all
expect(fn).toHaveBeenCalled();

// if it should be called with a certain argument
expect(fn).toHaveBeenCalledWith(username);

// if it should have been called 3 times
expect(fn).toHaveBeenCalledTimes(3);
```
