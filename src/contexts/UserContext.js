import React, {createContext, useState, useContext} from 'react';
import {} from 'react-native';

const UserContext = createContext();

export function UserContextProvider({children}) {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin + '  context.js');
  const updatedData = value => {
    setIsLogin(value);
  };

  console.log('Context is running');
  return (
    <UserContext.Provider value={{isLogin, updatedData}}>
      {children}
    </UserContext.Provider>
  );
}
export function useUserContext() {
  return useContext(UserContext);
}
