// ws is a simple websocket backend client which we will use for this demo app
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: "8080" });
const responseMessage = "Hi! I'm a server!";

// listening for a connection, getting access to a socket object
// used for communication with the client
server.on("connection", (socket) => {
  console.log(
    "Connection with client is established.\n" +
      "Now listening for client messages...\n"
  );

  // listening for a message from a client
  socket.on("message", (message) => {
    console.log(`Received message from client: \n${message}`);
    console.log("Sent a message to client in response\n");

    // sending message to the client in response
    socket.send(responseMessage);
  });
});
