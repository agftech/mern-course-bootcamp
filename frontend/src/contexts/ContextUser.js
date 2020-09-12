import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const ContextWrapper = (props) => {
  const defaultValueHandler = () => {
    const user = localStorage.getItem('user');
    if (user) return true;
    return false;
  };

  const [IsLoggedIn, setIsloggedIn] = useState(defaultValueHandler());
  const user = {
    IsLoggedIn,
    setIsloggedIn,
  };

  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};
