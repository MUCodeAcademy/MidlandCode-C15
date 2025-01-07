# Component Communication

When we're talking about components in general, one thing we need to think about is HOW do all of these components talk to each other? Well, the answer is: "It depends". By default, parents can send information down to their children through the use of props and can _kind of_ get information sent back up through a similar method but it is definitely not the ideal way to go. Sibling components can't easily talk to each other without the use of state management though. We'll put a pin in sibling and child to parent communication for now since they're more complex topics. That being said, let's look at how parents can send information to their children.

# Component Props

When you talk about component communication without state, you can start talking about using props. So what are props then? Simply put, they are properties that are sent to the component at time of creation that allow for you to use that data in some way. They can be any name you want and can do just about anything as long as it is valid JSX / JS. Let's say we have a parent component with a variable that is someone's name and then a child component we want to display that name in. We'll write these as a functional components since those are the standard, but they could also be class based components (pre-pended with `this` since you're referring to a class attribute):

```javascript
const ChildComponent = () => {
  return <div>Display Name here</div>;
};

const Parent = () => {
  const parentUser = "Justin";
  return (
    <div>
      <ChildComponent />
    </div>
  );
};
```

Currently there would be no way to send the variable `parentUser` into the child. In the real world, if the Child is the ONLY one that needs that variable we could declare it in the child and be done with it. But let's say we had ChildComponent1 and ChildComponent2 that BOTH need that username. First, in the parent, we would need to bind that property to some custom HTML attribute we decide. Let's call it `childUser`. We would give it the value of the variable we created. Now with both Child components it would look like:

```javascript
const Parent = () => {
  const parentUser = "Justin";
  return (
    <div>
      <ChildComponent1 childUser={parentUser} />
      <ChildComponent2 childUser={parentUser} />
    </div>
  );
};
```

For simplicity sake, the attribute and variable name could be the same `username={username}` but they don't have to be. Likewise, the attribute for each of the children could be different `childUser1={parentUser}` and `childUser2={parentUser}`. You can do it in any way that makes sense for you / your code base. From here it is actually quite simple. Any of these props are passed to the child and added as a key to the `props` object which you can then use. A total implementation might look like:

```javascript
const ChildComponent1 = (props) => {
  return <div>Hello {props.childUser}</div>;
};

const ChildComponent2 = (props) => {
  return <div>Greetings {props.childUser}!</div>;
};

const Parent = () => {
  const parentUser = "Justin";
  return (
    <div>
      <ChildComponent1 childUser={parentUser} />
      <ChildComponent2 childUser={parentUser} />
    </div>
  );
};
```

One important thing to note is that whenever the parent component changes the `parentUser` value THROUGH React methods, the newly updated value will be passed again to the children. The previous note of `through React methods` is where state comes into play which we'll get into shortly.

Something else to look at is the pattern of what are called presentational vs container components. Basically you have a component that handles the logic and state and then a child that has the job of JUST displaying said data.

Basically you could have a component that pulls movies from an API and stores them in local state, then a child component that is given just a single movie to render. The child component has basically ZERO logic, it's only job is to present information

A fantastic example and more in depth explanation can be found [here](https://www.patterns.dev/posts/presentational-container-pattern/)
