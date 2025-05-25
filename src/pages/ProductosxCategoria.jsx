import { useState , useEffect} from "react";
import ButtonColor from "../components/ButtonColor";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";

function ProductosxCategoria() {

    const {categoria} = useParams(); 
    
    
    const [productos, setProductos ] = useState([]);

    const apiProductos = async()=>{
       try {
        let request = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
        let response = await request.json();
        setProductos(response);
       }
       catch(e) {
         sweetError();
       }
    }

    useEffect(()=>{
        apiProductos();
    },[categoria])

    const sweetError = ()=>{
            Swal.fire({
                title: 'Error!',
                text: 'Error al cargar los productos, intente nuevamente',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        }
    
    
    return (<><h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Productos de la categoria {categoria}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 justify-content-center">
                   {productos.map(producto=>
                     <div className="col ms-5" key={producto.id}>
                       <div className="card p-3" style={{ height: 'auto', backgroundColor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                         <h5 className="card-title text-center mt-3" style={{ height: '75px', fontSize: '1.2rem', color: '#212529' }}>{producto.title}</h5>
                         <img src={producto.image} style={{ height: '150px', width:'100px' }}  className="card-img-top m-auto mb-5" alt={producto.title}></img>
                         <p className="card-text" style={{ height: '125px', color: '#495057' }}>{producto.description.slice(0,200)}...</p>
                         <p className="text-center" style={{ fontSize: '1.1rem', color: '#28a745', fontWeight: 'bold' }}>Precio: $ {producto.price}</p>
                         <div className="text-center mb-3">
                        <ButtonColor texto ="Agregar" color="green"></ButtonColor >
                        <ButtonColor texto ="Eliminar" color="red"></ButtonColor >
                        </div>
                       </div>
                     </div>
                   )}
             </div>
            </>  
    )
}

export default ProductosxCategoria;
