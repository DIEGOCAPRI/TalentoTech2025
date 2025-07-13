import { useContext} from "react";
import ButtonColor from "../components/ButtonColor";
import {Table} from 'react-bootstrap';
import { CarritoContext } from "../context/CarritoContext";
import Swal from 'sweetalert2';


function Carrito (){

     const { montoCarrito,  carrito, eliminarCarrito, vaciarCarritoId,agregarCarrito, vaciarTotalCarrito} = useContext(CarritoContext);
     
     const eliminarCarritoProducto = (id)=> {
          Swal.fire({
          title: "¿Está seguro que desea eliminar el producto del carrito?",
          showCancelButton: true,
          confirmButtonText: "Eliminar",
          cancelButtonText: "Cancelar"    
          }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Se eliminó el producto del carrito", "", "success");
            vaciarCarritoId(id);
          }
          });       
          
     }

     const eliminarProducto = (id)=> {
          eliminarCarrito(id);
     }
     
     const agregarProducto = (producto) => { 
      
      agregarCarrito(producto);
    }

    const vaciarCarrito = () => {
     Swal.fire({
       title: "¿Está seguro que desea vaciar el carrito?",
       showCancelButton: true,
       confirmButtonText: "Eliminar",
       cancelButtonText: "Cancelar"    
     }).then((result) => {
       if (result.isConfirmed) {
         Swal.fire("Se eliminaron los productos del carrito", "", "success");
         vaciarTotalCarrito();
       } 
     });
     
    }
     
     

     return (
     <>
     <h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic', marginBottom: "3%" }}>Mi Carrito </h2>
     <Table striped bordered hover  style={{ width: "80%", margin:"auto", textAlign: "center"}}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Categoria</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Precio Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {carrito.map(carr=>
               <tr key={carr.producto.id}>
                  <td>{carr.producto.title}</td>
                  <td>{carr.producto.description}</td>
                  <td>{carr.producto.category}</td>
                  
                  <td>
                    <button
                            onClick={() => eliminarProducto(carr.producto.id)}
                            ///disabled={(cantidades[producto.id] || 0) >= producto.stock}
                            style={{
                              backgroundColor: '#ff4d4d',
                              border: 'none',
                              borderRadius: '5px',
                              color: 'white',
                              width: '30px',
                              height: '30px',
                              fontSize: '18px',
                              cursor: 'pointer'
                            }}
                         >
                            -
                    </button>          
                    <input type="number" 
                            readOnly
                            style={{width:"10%", marginLeft:"2%", marginRight:"2%", appearance: 'textfield', borderRadius: "5px", textAlign:"center"}} 
                            value={
                            carr.cantidad
                          } />
                    <button
                            onClick={() => agregarProducto(carr.producto)}
                            ///disabled={(cantidades[producto.id] || 0) >= producto.stock}
                            style={{
                              backgroundColor: '#4CAF50',
                              border: 'none',
                              borderRadius: '5px',
                              color: 'white',
                              width: '30px',
                              height: '30px',
                              fontSize: '18px',
                              cursor: 'pointer'
                            }}
                         >
                            +
                    </button>
                  </td>
                  <td>{carr.producto.price}</td>
                  <td>{carr.producto.price * carr.cantidad}</td>
                  <td>
                    <ButtonColor 
                         texto ="Eliminar" 
                         color="red"
                         onClick = {()=> eliminarCarritoProducto(carr.producto.id)}>  
                    </ButtonColor >
                  </td>
               </tr>
           )}
           <tr>
               <td>Total</td>
               <td>{montoCarrito}</td>
               <td>
                    <ButtonColor 
                         texto ="Vaciar" 
                         color="red"
                         onClick = {()=> vaciarCarrito()}>  
                    </ButtonColor >
               </td>
           </tr>
          </tbody>
      </Table>  
     </>)
}

export default Carrito;