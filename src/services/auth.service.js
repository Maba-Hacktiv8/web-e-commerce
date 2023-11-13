import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};

export const register = (data, callback) => {
  const { email, username, password, fullname } = data;

  const userData = {
    email,
    username,
    password,
    name: {
      firstname: fullname.split(" ")[0],
      lastname: fullname.split(" ")[1],
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "1-570-236-7033",
  };

  axios
    .post("https://fakestoreapi.com/users", userData)
    .then((res) => {
      callback(true, res);
    })
    .catch((err) => {
      callback(false, err);
    });
};
