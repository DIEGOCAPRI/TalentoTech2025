import { createContext, useState } from "react";

import {  agregarItem, eliminarItem,  limpiarCarritoId, chequeaStock } from "./handleCarrito";
import Swal from 'sweetalert2';

export const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{

    const [carrito, setCarrito] = useState([]);

    const [montoCarrito, setMontoCarrito] = useState(0);

    const agregarCarrito = (producto)=> {

       const verificaStock = chequeaStock(producto); 

       if(verificaStock) {
        agregarItem(producto);
        const carritoActualizado = JSON.parse(localStorage.getItem('productosCarrito'));
        setCarrito(carritoActualizado);
        const montoActualizado = carritoActualizado.reduce ((total, carr)=>{
            return total + (carr.producto.price * carr.cantidad);
        },0);
        setMontoCarrito(montoActualizado);
       }
       else {
        Swal.fire({
        icon: "error",
        title: "Error",
        text: "No tenemos el stock solicitado para el producto",
    });
    }       
    }

    const eliminarCarrito = (id)=> {

        eliminarItem(id);
        const carritoActualizado = JSON.parse(localStorage.getItem('productosCarrito'));
        setCarrito(carritoActualizado);
        const montoActualizado = carritoActualizado.reduce ((total, carr)=>{
            return total + (carr.producto.price * carr.cantidad);
        },0);
        setMontoCarrito(montoActualizado);
      
    }

    const vaciarCarritoId = (id) => {
        
         limpiarCarritoId(id);
         const carritoActualizado = JSON.parse(localStorage.getItem('productosCarrito'));
         setCarrito(carritoActualizado);
         const montoActualizado = carritoActualizado.reduce ((total, carr)=>{
            return total + (carr.producto.price * carr.cantidad);
        },0);
        setMontoCarrito(montoActualizado);
    }

    const vaciarTotalCarrito = () => {
        localStorage.removeItem('productosCarrito');
        const carritoActualizado = [];
        setCarrito(carritoActualizado);
        setMontoCarrito(0);
    }

    return(
        <CarritoContext.Provider value={{carrito, setCarrito, montoCarrito, setMontoCarrito, agregarCarrito, eliminarCarrito,vaciarCarritoId, vaciarTotalCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}