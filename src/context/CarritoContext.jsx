import { createContext, useState, useEffect } from "react";

import { obtenerTodo, agregarItem, eliminarItem } from "./handleCarrito";

export const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{

    const [carrito, setCarrito] = useState([]);

    const [montoCarrito, setMontoCarrito] = useState(0);

    const agregarCarrito = (producto)=> {

        agregarItem(producto);
        const carritoActualizado = JSON.parse(localStorage.getItem('productosCarrito'));
        setCarrito(carritoActualizado);
        const montoActualizado = carritoActualizado.reduce ((total, carr)=>{
            return total + (carr.producto.price * carr.cantidad);
        },0);
        setMontoCarrito(montoActualizado);

    }

    const eliminarCarrito = (id)=> {

        eliminarItem(id);
        const carritoActualizado = JSON.parse(localStorage.getItem('productosCarrito'));
        setCarrito(carritoActualizado);
      /*  const montoActualizado = carritoActualizado.reduce ((total, carr)=>{
            return total + (carr.producto.price * carr.cantidad);
        },0);
        setMontoCarrito(montoActualizado);*/
       
    }

    return(
        <CarritoContext.Provider value={{carrito, setCarrito, montoCarrito, setMontoCarrito, agregarCarrito, eliminarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}