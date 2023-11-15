import React from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      if (token === "admin") {
        setUsername(token);
      } else {
        setUsername(getUsername(token));
      }
    }
  }, []);

  return username;
};
