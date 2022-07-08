import React, { useState } from 'react';

const LoadingContext = React.createContext()

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const handleLoading = (e) => {
        setLoading(e)
    }

    return (
        <LoadingContext.Provider
            value={{
                loading, handleLoading
            }}
        >
            {children}
        </LoadingContext.Provider>
    )
};

export default LoadingProvider;

export const useLoading = () => {
    const { loading, handleLoading } = React.useContext(LoadingContext)

    return {
        loading, handleLoading
    }
}