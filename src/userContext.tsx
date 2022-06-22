import React, { createContext, useState } from 'react';

export type OuthUser = {
    name: string,
    email: string,
}
export type UserContectType = {
    user: null,
    setUser: React.Dispatch<React.SetStateAction<null>>
}

export const UserContext = createContext<UserContectType | null>(null);

export const userContextProvider = (porps: { children: React.ReactNode }) => {
    const [user, setUser] = useState(null);
    return <UserContext.Provider value={{ user, setUser }}>
        {porps.children}
    </UserContext.Provider>
}