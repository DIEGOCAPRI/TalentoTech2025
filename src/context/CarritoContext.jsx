import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{

    const [carrito, setCarrito] = useState([]);

    const [montoCarrito, setMontoCarrito] = useState(0);

    const agregarCarrito = (producto)=> {
        setCarrito(carritoActual=> {
            const existeCarrito = carritoActual.find(carr=> carr.id == producto.id);

            if(existeCarrito) {
                return carritoActual.map(car=>
                    car.id == producto.id ? {...car, cantidad: car.cantidad + 1}
                    : car
                )
            }
            else {
                return [...carritoActual, {...producto, cantidad: 1}]
            }
        });
        setMontoCarrito(Number(montoCarrito) + Number(producto.price));
    }

    const eliminarCarrito = (id)=> {

    }

    return(
        <CarritoContext.Provider value={{carrito, setCarrito, montoCarrito, setMontoCarrito, agregarCarrito, eliminarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}