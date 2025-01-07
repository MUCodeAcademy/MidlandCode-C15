# React Query

So we talked a little bit now about how to make API calls with React. We're going to talk a little bit more about how to handle data and keeping data up to date with some form of data source. It should be stressed that this is NOT the only way to do this. It is also not something that is a "if you don't know this you're in trouble". That being said, it can be an incredibly useful tool.

## What is React Query

[React Query](https://tanstack.com/query/v4/) is a for you to handle state in your application asynchronously. One of the biggest things we've seen is that we have to do a lot of extra work in order to set up api calls. Setting up our own hooks, customization and the like can be tedious. One of the other things we didn't even cover is how to handle "stale" data, that is data that is out of date when compared to the server or data source. Sure you could set up a timer to fetch it at some interval or something else, but React Query has that functionality built in.

React Query is a data-fetching and state management library for React applications. It simplifies the process of fetching, caching, and managing asynchronous data in your application, making it easier to work with APIs and other data sources. React Query has gained popularity due to its powerful features, ease of use, and efficient handling of server state.

Reasons to use React Query:

1. Automatic caching and background refetching: React Query automatically caches data, reducing the number of API requests and improving performance. It also intelligently refetches data when necessary, such as when a user revisits a page or when data dependencies change.

2. Real-time updates and optimistic updates: React Query enables real-time data synchronization and optimistic updates, which can improve the user experience.

3. Error and loading state handling: React Query provides built-in mechanisms for handling errors and loading states, making it easier to create robust and responsive applications.

4. Query invalidation and refetching: React Query allows you to easily invalidate and refetch queries when related data changes, ensuring your application's data stays up-to-date.

## How to use it

First, install React Query:

`npm i react-query`

Let's take a look at an example they have on their site:

```javascript
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// Creating a client instance to use within the React Query ecosystem
const queryClient = new QueryClient();

export default function App() {
  return (
    // Pretty much the same as a normal context provider, just their specific one
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  // isLoading, error, and data are built into the useQuery hook
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
```

The React Query package is split up into two main interactions with servers. Queries and mutations. If you want to make a simple `POST` or `GET` request, that would be a query, any updating or changing of data on the server should be handled with a mutation.

## Queries

Let's first break down a simple example of a query:

```javascript
function App() {
  const info = useQuery(["todos"], fetchTodoList);
}
```

["todos"]: An array containing the string "todos", which is the query key. Query keys can be more complex than just a string, but in this case, a simple string is used. The "todos" key represents the list of todo items fetched from the server. This can then be used across the whole app for caching, updating, etc.

fetchTodoList: This is the actual function that is responsible for fetching the todo list data from the server. This function should return a Promise that resolves to the data.

The data that is returned from the query is an object that contains the following keys:

- `isLoading` - If it is currently loading
- `isError` - If there was an error with the query (boolean)
- `isSuccess` - If it was successful
- `error` - Only exists if `isError` and the error information that was encountered
- `data` - The actual data returned by the application
- `status` - In lieu of the first `is` booleans, it will be a string with a value of: `loading`, `error`, or `success`
- `fetchStatus` - String of either `fetching`, `paused`, `idle`

If your query needs a variable to run, then you have to include it in the query. The example they use in the docs is if you need to grab a todo by it's id, which would look like this:

```javascript
function Todos({ todoId }) {
  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
}
```

Something else to note is that if you need the `isError` and `error`, your api call has to throw an error. Some packages do this out of the box, but the `fetch` API does not. So if you're using a `try`/`catch` pattern, the `catch` **must** throw an error.

There are a lot more configuration options such as retrying, refetching, and conditional fetching in the docs.

## Mutations

We'd use mutations to update something or delete something or add something. Basically your `PATCH`, `PUT`, `DELETE` verbs.

Unlike queries that use a reference (which makes sense as you might need to cache data from a `GET`), it is a simpler format. This is how you'd create a basic mutation:

```javascript
// Doesn't have to be called mutation, a good name here would be addTodoMutation or even addTodo
// You also don't need to use axios
const mutation = useMutation((newTodo) => {
  return axios.post("/todos", newTodo);
});
```

It looks like mutation would just be a function you can trigger with the `newTodo` to add. That's not too far off; whenever you want to trigger this, it can be done simply with: 
```javascript
mutation.mutate(newTodo);
```
That's it!

What is the point of a mutation if it's just that straight forward? The power lies in side effects. If you get an error, or you want to reset the data (think clearing out an error message, or a warning/success message) you can do that easily with: `mutation.reset()`. That brings everything back to it's starting point and clears out any of the keys on it.

```javascript
// addTodo is a function that will be triggered
useMutation(addTodo, {
  onMutate: (variables) => {
    // The starting point of the mutation

    // You can return some data if you want
    return { id: 1 };
  },
  // Think of this like a catch in a try/catch
  onError: (error, variables, context) => {
    // It errored!
    console.log(`rolling back optimistic update with id ${context.id}`);
  },
  //  This happens if it worked
  onSuccess: (data, variables, context) => {
    // It succeeded!
  },
  // If you're using a try catch, this is basically a finally
  onSettled: (data, error, variables, context) => {
    // Error or success
  },
});
```

Similar to queries you can also retry:

```javascript
const mutation = useMutation(addTodo, {
  retry: 3,
});
```

There are a lot of other cool things you can do like updating query store from a mutation (if you add or delete an item):

[Doc Examples](https://tanstack.com/query/latest/docs/framework/react/guides/updates-from-mutation-responses)