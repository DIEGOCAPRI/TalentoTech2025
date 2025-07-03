import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{

    const [carrito, setCarrito] = useState([]);

    const [montoCarrito, setMontoCarrito] = useState(0);

    useEffect(() => {
        if(localStorage.getItem("carrito")){
            setCarrito( JSON.parse(localStorage.getItem("carrito")) );
        }
    }, []);

    const addItem = (p_item, cantidad) => {
        const carrito_temp = [carrito];
        carrito_temp.push({
            ID: p_item.ID,
            precio: p_item.precio,
            nombre: p_item.nombre,
            cantidad: cantidad
        });
        setCarrito(...carrito, carrito);


        //localStorage.setItem("carrito", JSON.stringify(carrito));

    }

    const someItem = (p_item) => {

    }

    return(
        <CarritoContext.Provider value={{carrito, setCarrito, montoCarrito, setMontoCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}