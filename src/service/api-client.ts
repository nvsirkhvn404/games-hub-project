import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "80b4115144cf429c9be9cd6fd1b71120",
  },
});