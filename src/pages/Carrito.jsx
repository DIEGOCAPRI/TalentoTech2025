import { useState , useEffect, useContext} from "react";
import ButtonColor from "../components/ButtonColor";
import {Table} from 'react-bootstrap';
import { CarritoContext } from "../context/CarritoContext";


function Carrito (){

     
     const eliminarCarrito = (id)=> {
          console.log(id)
     }
     const {setMontoCarrito, montoCarrito, setCarrito, carrito} = useContext(CarritoContext);
     
     

     return (
     <>
     <h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic', marginBottom: "3%" }}>Mi Carrito </h2>
     <Table striped bordered hover  style={{ width: "80%", margin:"auto", textAlign: "center"}}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Categoria</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Precio Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {carrito.map(carr=>
               <tr key={carr.id}>
                  <td>{carr.title}</td>
                  <td>{carr.description}</td>
                  <td>{carr.category}</td>
                  <td>{carr.price}</td>
                  <td>{carr.cantidad}</td>
                  <td>{carr.price}</td>
                  <td>
                    <ButtonColor 
                         texto ="Eliminar" 
                         color="red"
                         onClick = {()=> eliminarCarrito(carr.id)}>  
                    </ButtonColor >
                  </td>
               </tr>
           )}
           <tr>
               <td>Total</td>
               <td>{montoCarrito}</td>
           </tr>
          </tbody>
      </Table>  
     </>)
}

export default Carrito;