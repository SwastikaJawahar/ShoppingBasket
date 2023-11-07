import React, {createContext, useState, useContext} from 'react';
import {} from 'react-native';

const UserContext = createContext();

export function UserContextProvider({children}) {
  const [isLogin, setIsLogin] = useState(false);
  const updatedData = value => {
    setIsLogin(value);
  };
  return (
    <UserContext.Provider value={{isLogin, updatedData}}>
      {children}
    </UserContext.Provider>
  );
}
export function useUserContext() {
  return useContext(UserContext);
}
