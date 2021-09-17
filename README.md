# WebSockets
Working with WebSockets using the <a href="https://github.com/websockets/ws">WS library</a>.

## How to launch a project
- Open the `\server` directory and run `npm install` and `npm start` to launch the server side of the app.

- Go into the `\app` directory and open the `index.html` to launch the client side of the app (JS and CSS are inlined in the html, so it could be used without Live Server or other similar tools).

- Click the button in the client side app to send a message to server via a web socket. After the message is received the server will log the received message and send a reply to the client which will be shown in the browser.

