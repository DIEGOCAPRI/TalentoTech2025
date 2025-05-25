import { createContext,useState } from "react";


export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    
    const [isLogin, setLogin] = useState(false);
    const [usuarioLogin, setUsuario] = useState([]);

    
    return (
        <LoginContext.Provider value={{isLogin, setLogin, usuarioLogin, setUsuario}}>
            {children}          
        </LoginContext.Provider>
    );
};