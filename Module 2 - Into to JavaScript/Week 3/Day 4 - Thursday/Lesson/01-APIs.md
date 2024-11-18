# What is an API?

API stands for Application Programming Interface. It acts as an intermediary between two or more applications, enabling them to interact and work together. An analogy: imagine you are at a restaurant. You, the customer, want to order food, but you don't have direct access to the kitchen. Instead, you interact with a waiter who takes your order, communicates it to the kitchen, and then brings the food back to you. In this scenario, the waiter represents an API, acting as the intermediary between you and the kitchen.

APIs work like this:

- One application (the client) sends a request to another application (the server) using a specific API.
- The server processes the request according to the rules and protocols defined by the API.
- The server then sends a response back to the client, again following the API's specifications.

APIs are commonly used to allow developers to integrate third-party services or data into their own applications. Some examples of applications that others have made using APIs:

- Twitter (X) bots like @SaveMyVideo that provide users with a link to download Twitter videos.
- Apps that use Spotify to retrieve tracks, playlists, and user data.
- Video game apps that track players' data, such as win-rates. 

## Important Reference

- [Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- HTTP Verbs (think of CRUD)
  - POST/PUT (Create) - if you're logging in to a site or signing up for something that is almost always a POST request
  - GET (Read) generic calls are a simple GET call. Any normal page load is considered a GET request
  - POST/PATCH (Update) - Anytime you're actually changing information to a database such as changing your address or password etc.
  - POST/DELETE (Delete) - Removal of information from a database such as account deletion etc.
- [Postman](https://www.getpostman.com/) is great for playing around with random POST and GET requests.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Useful for testing things with JavaScript for XHR requests
- [JSON](https://en.wikipedia.org/wiki/JSON) file type. Important for using information with some databases, but the bread and butter of JavaScript communication with servers.
- [JSONLint](https://jsonlint.com/) - Easy way to see if you have a JSON file that is a proper format.

## Public Facing APIs with great documentation

- [OMDBApi](http://www.omdbapi.com/) - Great for movie information
- [OpenWeather](https://www.openweathermap.org/api) - Requires an API key, but an awesome resource.
- [Google Maps](https://cloud.google.com/maps-platform/) - Free to use for a set number of pulls and an incredibly robust API.
- [ChatGPT](https://platform.openai.com/docs/guides/gpt) - Requires an API Key, but can be fun to learn how language models work.
- [A Lot More](https://github.com/toddmotto/public-apis) - Great resource for a ton more than what's listed above.
