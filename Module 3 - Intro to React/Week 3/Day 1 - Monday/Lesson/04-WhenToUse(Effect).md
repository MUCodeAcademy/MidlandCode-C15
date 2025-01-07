# You might not need an effect

There's a good article in the React docs talking about when you might need to use useEffect and when you don't (https://react.dev/learn/you-might-not-need-an-effect).

The TL;DR is that you don't need a useEffect if:

1. You're trying to manipulate data to re-render it.
2. To handle user events. 

You do, however, need a useEffect to synchronize with external systems like fetching data from an API.