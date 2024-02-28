// Imports
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

// Create Context
const AppContext = createContext({
    user: null,
    token: null,
    notification: null,
    selectQuoteCategory: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
    setSelectQuoteCategory: () => {},
    scrollToTop: () => {}
});

// Context Provider
export const AppProvider = ({ children }) => {
    
    // Context State
    const [user, setUser] = useState([])
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [notification, _setNotification] = useState('')
    const [selectQuoteCategory, _setSelectQuoteCategory] = useState('Auto');

    // Context Methods
    const setToken = (token) => {
        _setToken(token)

        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    const setNotification = (message) => {
        _setNotification(message)
        
        setTimeout(() => {
            _setNotification('')
        }, 5000)
    }

    const setSelectQuoteCategory = (category) => {
        _setSelectQuoteCategory(category);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    // Context Object
    const contextValue = {
        user, 
        token,
        setUser,
        setToken,
        notification,
        setNotification,
        scrollToTop,
        selectQuoteCategory,
        setSelectQuoteCategory
    }

    // Return Context
    return (
        <AppContext.Provider value={contextValue}>
            { children }
        </AppContext.Provider>
    )
}

// Export Context
export const useAppContext = () => {
    return useContext(AppContext)
}

// Prop Validation
AppProvider.propTypes = {
    children: PropTypes.node,
}