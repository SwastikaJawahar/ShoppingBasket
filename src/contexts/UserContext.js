import {createContext, useState, useContext} from 'react';
import {} from 'react-native';

const UserContext = createContext({state: {}, action: {}});

export function UserContextProvider({children, userName, password}) {
  const value = {
    state: {userName},
    state: {password},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export function useUserContext() {
  return useContext(UserContext);
}
