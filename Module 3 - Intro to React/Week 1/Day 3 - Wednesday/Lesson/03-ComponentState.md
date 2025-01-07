# Component State

We talked about what state is and what it can do, but how is it actually implemented? First, let's talk about generic structure for state in both functional and class components before we dive into the use more today and tomorrow. When you're taking advantage of state management in a component there are a couple things you want to keep in mind:

1. What am I gaining by adding this piece of state?
2. Is there a better way to get this state?
3. Does the state value need to be in this actual component or should it be elsewhere?

Let's take a look at those in order to help you understand this a bit more:

## Is there a better way to get this state?

If you recall from previously, one way to keep track of state is via derived state. Let's say you have an array of todos. Those todos are objects that have a completed key that is either true or false. For the sake of argument let's assume that you HAVE to keep track of that todo state in this component. Now, you also want to keep track of how many todos there are, how many completed todos there are, all the completed todos, and all of the incomplete todos. The naive approach would be to have 4 pieces of state:

1. The array of todos
2. The number of total todos
3. The number of completed todos
4. The number of incomplete todos

While you COULD do that, if all you need to know are those 4, you can get by with just ONE piece of state and derive the other values. This can help immensely with performance as your application might scale. So how would you get the other values then? For simplicities sake, let's say your state of the todos is stored in a variable called todos. With that in mind, you could simply have the following:

1. The `todos` state variable
2. The number of todos would simply be calculated as `todos.length`
3. The number of completed todos could be calculated as `todos.filter(t=> t.complete).length`
4. The number of incomplete todos could be calculated as `todos.filter(t=> !t.complete).length`

By using that pattern, you're simply deriving the other 3 values and de-cluttering your code.
