import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{

    const [carrito, setCarrito] = useState([]);

    const [montoCarrito, setMontoCarrito] = useState(0);

    const agregarCarrito = (producto)=> {
        setCarrito(carritoActual=> [...carritoActual, producto]);
    }

    const eliminarCarrito = (id)=> {

    }

    return(
        <CarritoContext.Provider value={{carrito, setCarrito, montoCarrito, setMontoCarrito, agregarCarrito, eliminarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}