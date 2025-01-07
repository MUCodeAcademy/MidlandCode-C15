# Classwork

This week, we'll be creating a new application to implement the tools we have learned so far. We'll be utilizing the Giphy API, so you'll need to sign up for a free key here: https://developers.giphy.com. 

1. Make an account
2. Go to API Explorer
3. Click on 'Create an App' at the top
4. Select API
5. Enter the app name (something like 'giphy app'). For the description you can write 'for class', but what you write doesn't matter too much.
6. You should see your API key in the box below.

The application should have the following

- A login page to log in to the application.
- Once logged in, store the user's username into state.
- A search page that allows you to type in a search field and bring up gifs that match that query.
- The ability to add favorites based off search results.
- A favorites page that allows you to see your favorites.

So, you'll have three pages: login, search, and favorites. You should set up routes for each of them.

Now add pre-existing favorites for different users that are hard coded into the application. Once you do that, add the following functionality:

- Allow someone to go to: `/user/username` and based off the username, pull that user's favorites from the pre-built list.

Strip out any code to different files as needed and think about how you might protect against any errors that might pop up.

We'll continue working on this the rest of the week (including the weekend if needed).
