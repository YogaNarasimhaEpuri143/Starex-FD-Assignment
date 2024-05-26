import axios, { CanceledError, AxiosError } from "axios";

export default axios.create({
  baseURL: "https://dummyapi.online/api/",
  params: {},
  headers: {},
});

export { CanceledError, AxiosError };

// Reusabe Client
