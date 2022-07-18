import axios from "axios";
import { BASE_URL } from "../config";

const publicAxios = axios.create({
  baseURL: BASE_URL,
});
export const proAxios = axios.create({
  baseURL: BASE_URL,
});

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

export const addProduct = (product: {
  name: string;
  description: string;
  inStock: boolean;
}) => {
  return proAxios.post("/products/", product);
};
