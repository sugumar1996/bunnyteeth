import axios from "config";
import { API_VERSION } from "../../src/config";

const headers = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const login = (credentials) =>
  axios.post("/users/sign_in", credentials, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
// export const getSinglePost = (id) => {
//   return axios.get(API_VERSION + `posts/${id}`, headers);
// };
export const getSinglePost = (id) => {
  return axios.get(API_VERSION + `posts/${id}`, headers);
};


export const getCategoriesList = () => { 
  return axios.get(API_VERSION + `posts`, headers);
};