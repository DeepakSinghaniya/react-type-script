import axios from "axios";
import { BASE_URL } from "../config";

// const token = localStorage.getItem(token);

const publicAxios = axios.create({
  baseURL: BASE_URL,
});
// const proAxios = new axios.create({
//   baseURL: BASE_URL,
//   headers: { "x-access-token": token },
// });

type User = {
  name: string;
  email: String;
  password: string;
};

//Signup
export const signup = (user: User) => {
  return publicAxios.post("/users/signup/", {
    name: user.name,
    email: user.email,
    password: user.password,
  });
};
//Signup
export const signIn = (user: { email: string; password: string }) => {
  return publicAxios.post("/users/login/", {
    email: user.email,
    password: user.password,
  });
};
