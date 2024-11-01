import { createContext, useContext, useState, useEffect } from "react";


 const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({ });

    const putUserDate = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('a&edogs:userData', JSON.stringify(userInfo));
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('a&edogs:userData');
    };

    useEffect(() => {
      const userInfolocalStorage = localStorage.getItem('a&edogs:userData')

      if ( userInfolocalStorage){
           setUserInfo(JSON.parse(userInfolocalStorage));
      }
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserDate, logout}}>
            {children}
            </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be a valid context');
    }

    return context;
};