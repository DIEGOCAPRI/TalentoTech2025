import { useState , useEffect, useContext} from "react";
import Swal from 'sweetalert2';
import { CarritoContext } from "../context/CarritoContext";

function Destacados() {
    
    const [destacados, setDestacados ] = useState([]);
    const {agregarCarrito, carrito, eliminarCarrito} = useContext(CarritoContext);

    const apiDestacados = async()=>{
      const url = "https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/productos";
       try {
        let request = await fetch(url);
       /// let request = await fetch('https://fakestoreapi.com/products?limit=4');
        let response = await request.json();
        let respDestacado = response.filter( res => res.destacado == "SI");
        setDestacados(respDestacado);
       }
       catch(e) {
         sweetError();
       }
    }
    

    useEffect(()=>{
        apiDestacados();
    },[])

    const sweetError = ()=>{
            Swal.fire({
                title: 'Error!',
                text: 'Error al cargar los productos, intente nuevamente',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        }
    const agregarProducto = (destacado) => { 
      agregarCarrito(destacado);
    }

    const eliminarProducto = (destacadoId) => {
      eliminarCarrito(destacadoId);
    }

    
    
    
    return (<><h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Nuestros Productos Destacados</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-3 justify-content-center">
                   {destacados.map(destacado=>
                     <div className="col d-flex justify-content-center" key={destacado.id}>
                       <div className="card p-3 h-100" style={{ maxWidth: '320px',width:'100%', backgroundColor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                         <h5 className="card-title text-center mt-3" style={{ height: '50px', fontSize: '1.2rem', color: '#212529' }}>{destacado.title}</h5>
                         <img src={destacado.image} style={{ height: '300px', width:'200px', textAlign:'center' }}  className="card-img-top m-auto mb-5" alt={destacado.title}></img>
                         <p className="card-text" style={{ height: '50px', color: '#495057', textAlign:'center' }}>{destacado.description.slice(0,200)}...</p>
                         <p className="text-center" style={{ fontSize: '1.1rem', color: '#28a745', fontWeight: 'bold' }}>Precio: $ {destacado.price}</p>
                         <div className="text-center mb-3">
                            <button
                                onClick={() => eliminarProducto(destacado.id)}
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
                               carrito.find(carr => carr.producto.id === destacado.id)?.cantidad || 0 
                             } />
                            <button
                                onClick={() => agregarProducto(destacado)}                       
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
            </>  
    )
}

export default Destacados;
