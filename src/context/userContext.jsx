import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({children}){
    const [userName, setUserName] = useState("Katya");

    return (
        <UserContext.Provider value={{userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(){
    const context = useContext(UserContext);
    if(context == null){
        throw new Error("useUser должен использоваться в UserProvider")
    }
    return context;
}

