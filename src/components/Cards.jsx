import { useState , useEffect, useContext} from "react";
import {Spinner} from 'react-bootstrap';
import { CarritoContext } from "../context/CarritoContext";
import Paginador from "./Paginador";


function Cards(){
    
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando ] = useState(true);
    const {agregarCarrito, carrito, eliminarCarrito} = useContext(CarritoContext);
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 6;

    useEffect(()=>{
        getProductos();
    }, []);
    
    const getProductos = ()=> {
      fetch('https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/productos')
         .then(response=>response.json())
         .then((data)=>{
            setProductos(data);
            setCargando(false);
         })
         .catch((error)=>{
             console.log('error');
             setCargando(false);
         })
    }
    
    const agregarProducto = (producto) => { 
      agregarCarrito(producto);
    }

    const eliminarProducto = (productoid) => {
      eliminarCarrito(productoid);
    }
    

    const ultimoProducto = paginaActual * productosPorPagina;
    const primerProducto = ultimoProducto - productosPorPagina;
    const productosPaginado = productos.slice(primerProducto,ultimoProducto);

    return (
              <> 
            <h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Nuestros Productos</h2>
            {cargando? (
              <Spinner animation="border" role="status" style={{margin:"auto", display:"flex"}}>  
              <span className="visually-hidden">Cargando...</span>           
              </Spinner>
            ) :   (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-3 justify-content-center">
                   {productosPaginado.map(producto=>
                     <div className="col d-flex justify-content-center" key={producto.id}>
                       <div className="card p-3 h-100" style={{ maxWidth: '320px',width:'100%', backgroundColor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                         <h5 className="card-title text-center mt-3" style={{ height: '75px', fontSize: '1.2rem', color: '#212529' }}>{producto.title}</h5>
                         <img src={producto.image} style={{ objectFit: 'contain', width:'100%', maxHeight: '200px',margin:'auto' }}  className="card-img-top mb-3" alt={producto.title}></img>
                         <p className="card-text" style={{ height: '50px', color: '#495057', textAlign:'center' }}>{producto.description.slice(0,200)}...</p>
                         <p className="text-center" style={{ fontSize: '1.1rem', color: '#28a745', fontWeight: 'bold' }}>Precio: $ {producto.price}</p>
                         <div className="text-center mb-3">
                         <button
                            onClick={() => eliminarProducto(producto.id)}
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
                            carrito.find(carr => carr.producto.id === producto.id)?.cantidad || 0 
                          } />
                        <button
                            onClick={() => agregarProducto(producto)}
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
                        </div>
                       </div>
                     </div>
                   )}
             </div>
            )
            }
            <Paginador
              totalProductos={productos.length}
              paginaActual={paginaActual}
              setPaginaActual={setPaginaActual}
              productosPorPagina={productosPorPagina}
            />           
             </>
    )
}

export default Cards;

