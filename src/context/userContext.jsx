import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({children}){
    const [userName, setUserName] = useState("Katya");
    const [avatar, setAvatar] = useState(() => {
        return localStorage.getItem("avatar") || "";
    });

    useEffect(() => {
        try{
            if(avatar) {
                localStorage.setItem('avatar', avatar);
            } else {
                localStorage.removeItem('avatar');
            }
        } catch (error){
            console.error("Не удалось сохранить аватарку", error);
        }
    }, [avatar]);

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

