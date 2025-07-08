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

    }

    const eliminarCarrito = (id)=> {

        eliminarItem(id);
        const carritoActualizado = JSON.parse(localStorage.getItem('productosCarrito'));
        setCarrito(carritoActualizado);
        /*
        setCarrito(carritoActual=>{
            const existeCarrito = carritoActual.find(carr=> carr.id == id);

            if (existeCarrito){
                return carritoActual.map(car=>
                    car.id == id ? {...car, cantidad: car.cantidad - 1}
                     : console.log('error')
                )
            }
            
        })*/
    }

    return(
        <CarritoContext.Provider value={{carrito, setCarrito, montoCarrito, setMontoCarrito, agregarCarrito, eliminarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}