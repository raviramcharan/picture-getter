import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID SRZDW-H6oDACUcdPJdG6SXqWIBOTcUR0RdPV5DgogbY",
  },
});
