# The React Lifecycle

Before we talk about useEffects, we should discuss how React renders components. In React, components go through a lifecycle that allows you to run code at specific points in the component's life, such as when it gets created, updated, or removed from the DOM. This lifecycle is traditionally divided into three main phases: mounting, updating, and unmounting.

![Life Cycle](lifecycle.png)

Mounting 
- The stage where the component gets created and inserted into the DOM.

Updating
- The updating phase occurs when a component's props or state change, prompting a re-render to update the UI accordingly.

Unmounting
- The unmounting phase is when the component is removed from the DOM.

When we run functions in React, we can choose to run them at specific moments in the lifecycle using a useEffect hook.