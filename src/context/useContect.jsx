import { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const ContextProvider = ({children}) => {
  
    const [isOpen, setIsOpen] = useState(false);

    const handelSide = ()=> {
        setIsOpen((isOpen) => !isOpen);

    }

    return (
        <StateContext.Provider value={{isOpen, handelSide}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
