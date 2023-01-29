import axios from "axios";

const ENDPOINT_PATH = "https://reqres.in/api/";

export default {
  register(email: string, password: string) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "regiser", user);
  },
  login(email: string, password: string) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  }
    };
