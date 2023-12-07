import { useState, createContext } from 'react';

const defaultValue = {
    isToggle: false,
    onToggle: () => { }
};

export const SwitchContext = createContext(defaultValue);

export const SwitchContextProvider = ({ children }) => {
    const [isToggle, setIsToggle] = useState(false);

    const onToggle = () => {
        setIsToggle(prev => !prev);
    };

    return (
        <SwitchContext.Provider value={{
            isToggle,
            onToggle
        }}>
            {children}
        </SwitchContext.Provider>
    );
};
