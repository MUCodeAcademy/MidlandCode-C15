## Guidelines

### Project

You will be taking what you have learned so far this week to build a mobile responsive movie database search engine. Taking the following steps, allow for a user to search for a movie on OMDB to see what movies share that title.

- Sign up for a personal API key from [OMDBAPI](http://www.omdbapi.com/)
- Utilize the information on the page to see what kind of format a request needs to be made in to return correct information.
- Create a simple search box that allows for the user to search for a movie. They should be able to enter ANY of the following information but a search field is required for you to send a request to the API:
  - Search Field (title) - Do not allow for an API call without at least 3 characters in this field
  - Type (Make a select box for this)
  - Year - Your choice of input type
- If an error occurred, let the user know. Otherwise display the data to the page.
- Since only 10 items are returned, figure out how many items WOULD have been sent and let the user know.

## BONUS GOALS

- Let the user pick a page out of that many to select to. This will be a lesson in the wonders / frustrations of pagination.
- Add styling and additional functionality as time permits.

## General steps to complete:

1. Come up with layout
2. Build elements / containers / etc
3. Event listener to submit button to do the things
4. Count amount of letters they input and do appropriate action
5. Read API Documentation to see what format you will get a response in / what you need to send
6. Fetch data from the API
7. Display error message to DOM if something went wrong
8. Use data to display to DOM
