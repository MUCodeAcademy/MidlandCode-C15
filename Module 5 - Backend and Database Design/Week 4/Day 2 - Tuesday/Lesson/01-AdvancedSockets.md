# Advanced Sockets

While we have been using `socket.io` currently, it is not the only way to handle sockets. One of the options you have is to build your own custom socket server and connection. An easy way to do this is with the [`ws`](https://www.npmjs.com/package/ws#simple-server) package. While it isn't as straightforward as `socket.io` it is VERY WIDELY used and can actually allow for a ton more customization.

## Backend

With Socket.io:

```javascript
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", () => {
  /* … */
});
server.listen(3000);
```

With `ws`:

```javascript
import express from "express";
import { WebSocketServer } from "ws";
const app = require("express")();
const server = require("http").createServer(app);
const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
  /* ... */
});
```

## Front End

With `socket.io-client` we would have to import it and utilize it accordingly. Without using it, we can actually implement the native `WebSocket` class to create a connection:

```javascript
const client = new WebSocket("wss://???");
```

From there though one issue is that it only allows for you to send strings. You CAN however send a stringified JSON and then have the server (or front end) handle it similar to a reducer. You could take an object like:

```javascript
{
    type: "Chat",
    body: "text here",
    user: "username here"
}
```

And then have a switch similar to `switch(message.type){}`

While it does require a lot more configuration, it is actually much faster than `socket.io` and gives you access to a TON more tools built into node.
