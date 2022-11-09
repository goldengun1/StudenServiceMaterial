import React, { useCallback, useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  id: null,
  login: (token, expirationTime,Username) => {},
  logut: () => {},
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
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("expirationTime", data.expiration);
      });
  }, [token]);

  const loginHandler = (token, expirationTime, id) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("id", id);
  };

  useEffect(() => {
    if (tokenData) {
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
        logut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
