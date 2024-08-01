import io from "socket.io-client";
import Cookies from "js-cookie";

// Function to get URL parameters
const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

// Get secretKey and isAdmin from URL parameters
const secretKey = getUrlParameter("services");

console.log("Services", secretKey);
// Get authToken from cookies
const authToken = Cookies.get("auth-token");

// Create socket connection
const socket = io("http://localhost:3000", {
  query: {
    secretKey,
    serviceId: secretKey,
    isAdmin: "true",
    authToken,
  },
});

socket.on("connect", () => {
  console.log("Server is connected", socket.id);
});

socket.on("error", (error) => {
  console.error("Connection error:", error);
});

export default socket;
