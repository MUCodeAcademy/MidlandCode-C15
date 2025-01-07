# State With Components

One of the biggest things that state lets you do is clean up your components to reuse values / state across multiple components. While there are multiple ways to do this, and we will be going into the implementation shortly, let's take a look at some simple examples.

If we take an example of user input, we can now think about a different way to do it. Before we had the following steps:

1. User enters data into the input fields
2. Some local variable gets updated in the component
3. The user clicks a button
4. That value could be used but only if we use document.getElementById or something similar
5. Nothing else happens.

Looking at step 5, because you are using simple variables that React doesn't keep track of, you need to utilize state to get anything done. This does however add some extra steps:

1. Create starting point for state
2. Bind that state value to the input field(s)
3. In the event listener, update state instead of a local variable.
4. User enters data into the input fields
5. State gets updated (triggering react to do anything it needs to with that updated data)
6. User clicks button
7. React can now see a change and therefore update things accordingly

# How it impacts design

Because state allows you to actually make changes to the way things are displayed and trigger when you send out updated props etc, it can make you think about how you might actually want your application to be laid out. We'll get more into atomic design principles tomorrow but think about how granular you'd need to make items.
