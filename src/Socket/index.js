import io from "socket.io-client";

const socket = io.connect("http://localhost:5000", {
    query: { user_id: localStorage.getItem("id") },
  });

export default socket