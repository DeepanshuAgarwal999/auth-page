"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userStatus, setUserStatus] = useState(false);
  const [userAccount, setUserAccount] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // getting user Account info from localstorage
      const values = localStorage.getItem("user");
      // Check if values is a string before parsing
      if (values) {
        setUserAccount(JSON.parse(values));
      }
      // knowing whether user is loggined or not
      const userStatusValue = localStorage.getItem("auth");
      if (userStatusValue) {
        setUserStatus(JSON.parse(userStatusValue));
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ userStatus, setUserStatus, userAccount, setUserAccount }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(UserContext);
  return context;
}

export default AuthProvider;
