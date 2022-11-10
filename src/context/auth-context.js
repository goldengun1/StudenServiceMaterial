import React, { useCallback, useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  id: null,
  login: (token, expirationTime, userName) => {},
  logout: () => {},
});

let tokenRenewTimer;
//returns in miliseconds
const calculateRemainingTime = (expirationTime) => {
  const currTime = new Date().getTime();
  const expiration = new Date(expirationTime).getTime();

  return expiration - currTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedTokenExpirationDate = localStorage.getItem("expirationTime");

  const remaining = calculateRemainingTime(storedTokenExpirationDate);

  return { token: storedToken, duration: remaining };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const usrIsLoggedIn = !!token;
  const userId = localStorage.getItem("id");

  const logoutHandler = useCallback(() => {
    setToken(null);
    clearTimeout(tokenRenewTimer);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("id");
  }, []);

  const renewTokenHandler = useCallback(() => {
    fetch("https://localhost:7225/api/accounts/renewtoken", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          setToken(null);
          localStorage.removeItem("token");
          localStorage.removeItem("expirationTime");
          localStorage.removeItem("id");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log("TOKEN RENEWED");
        localStorage.setItem("token", data.token);
        localStorage.setItem("expirationTime", data.expiration);
        setToken(data.token);
      });
  }, [token]);

  const loginHandler = (tokenparam, expirationTime, id) => {
    localStorage.setItem("token", tokenparam);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("id", id);
    setToken(tokenparam);
  };

  useEffect(() => {
    if (tokenData.token) {
      // console.log(tokenData);
      tokenRenewTimer = setTimeout(
        renewTokenHandler,
        tokenData.duration - 5000
      );
    }
    return () => {
      clearTimeout(tokenRenewTimer);
    };
  }, [tokenData, renewTokenHandler]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn: usrIsLoggedIn,
        id: userId,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
