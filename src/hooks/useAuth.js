// import {useState} from 'react';

// export function useAuth() {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [admin, setAdmin] = useState(() => {
//     const stored = localStorage.getItem('admin');
//     return stored ? JSON.parse(stored) : null;
//   });

//   const login = (token, adminData) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('admin', JSON.stringify(adminData));
//     setToken(token);
//     setAdmin(adminData);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('admin');
//     setToken(null);
//     setAdmin(null);
//   };

//   return {token, admin, login, logout};
// }

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem("admin");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (newToken, newAdmin) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("admin", JSON.stringify(newAdmin));
    setToken(newToken);
    setAdmin(newAdmin);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ token, admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
