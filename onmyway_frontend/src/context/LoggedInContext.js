import React, { useState } from 'react';

const AuthenticationContext = React.createContext()

const AuthenticationProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLoggedIn = (e) => {
        setLoggedIn(e)
    }

    return (
        <AuthenticationContext.Provider
            value={{
                loggedIn, handleLoggedIn
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
};

export default AuthenticationProvider;

export const useLoggedIn = () => {
    const { loggedIn, handleLoggedIn } = React.useContext(AuthenticationContext)

    return {
        loggedIn, handleLoggedIn
    }
}