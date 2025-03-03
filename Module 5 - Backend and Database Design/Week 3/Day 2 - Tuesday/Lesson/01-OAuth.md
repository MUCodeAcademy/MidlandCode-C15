# OAuth 2.0 and 3rd Party Authentication

We already talked a little bit about different methods of authentication. One thing we have not used though is something like OAuth. Similar to how we mentioned with JWTs yesterday we can leverage a completely different server for authentication. This can help us out immensely. We'll be using it with Google FireAuth in a little bit, but let's cover the basics.

Boiled down, OAuth is a standard so client apps can have secure delegated access. It works over HTTPS and authorizes devices, APIs, servers, and applications with access tokens in lieu of credentials.

OAuth can be broken down into the following main parts:

- Scopes and Consent - Permissions asked for by the app. Things like "This app would like to read your contacts etc". What is the scope of the permissions and do you give consent?
- Actors - The actual applications acting within the OAuth sphere which are:
  - Owner: Who controls the data. You're the owner of your GitHub account etc.
  - Resource Server: The API which stores data the application wants to access
  - Client: The app or tool or whatever that wants access to the resource
  - Authorization Server: The main engine of OAuth
- Tokens
  - Access Tokens - They grant access and are short lived. They aren't revoked and instead have to expire after a time.
  - Refresh Tokens - Utilized to refresh an access token. Since the access tokens expire this can keep a user with access for MUCH longer

Some APIs actually require OAuth 2.0 to use them. Because they can give an app the ability to change a users account or something similar you have to link it to your app AND give the user the option (your consent and scope) to say no.

While some of this might all seem complicated and unneeded what it really allows you to do is gain access (with consent) to information in a user's account without ever actually knowing that user's password or potentially login information at all! Let's take a look at the implementation for Google Fire Auth.
