import { io } from "socket.io-client";

const Socket = io("http://localhost:4000", {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  timeout: 10000,
  allowEIO3: true,
  addTrailingSlash: false,
});

Socket.on("connect", () => {
  console.log("Connected to server");
});

Socket.on("connect_error", (err) => {
  console.error("Connection Error:", err.message);
});
export default Socket;
