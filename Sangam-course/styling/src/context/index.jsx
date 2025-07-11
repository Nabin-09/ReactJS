import { createContext } from "react";



export const GlobalContext = createContext(null);

function GlobalState({children}){
    return<GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

export default GlobalState;


