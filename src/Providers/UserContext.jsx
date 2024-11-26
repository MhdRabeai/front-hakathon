/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/checkToken", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        console.log("User logged in:", data.user);
      }
    } catch (err) {
      console.error("Error logging in:", err);
    }
  };
  const logoutUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
        console.log("User logged out");
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };
  useEffect(() => {
    console.log("ContextPage");
    const checkUserStatus = async () => {
      try {
        const response = await fetch("http://localhost:4000/checkToken", {
          credentials: "include",
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("Error checking user status:", err.message);
        setUser(null);
      }
    };

    checkUserStatus();
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserInfo = () => {
  return useContext(UserContext);
};
