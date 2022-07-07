import React, { useState } from 'react';

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(0)

    const handleUser = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider
            value={{
                user, handleUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;

export const useUser = () => {
    const { user, handleUser } = React.useUser(UserContext)

    return {
        user, handleUser
    }
}