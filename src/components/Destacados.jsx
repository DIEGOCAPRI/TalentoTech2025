import { useState , useEffect} from "react";
import ButtonColor from "./ButtonColor";
import Swal from 'sweetalert2';

function Destacados() {
    
    const [destacados, setDestacados ] = useState([]);

    const apiDestacados = async()=>{
      const url = "https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/productos";
       try {
        let request = await fetch(url);
       /// let request = await fetch('https://fakestoreapi.com/products?limit=4');
        let response = await request.json();
        setDestacados(response);
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
    
    
    return (<><h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Nuestros Productos Destacados</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 justify-content-center">
                   {destacados.map(destacado=>
                     <div className="col ms-5" key={destacado.id}>
                       <div className="card p-3" style={{ height: 'auto', backgroundColor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                         <h5 className="card-title text-center mt-3" style={{ height: '50px', fontSize: '1.2rem', color: '#212529' }}>{destacado.title}</h5>
                         <img src={destacado.image} style={{ height: '300px', width:'200px', textAlign:'center' }}  className="card-img-top m-auto mb-5" alt={destacado.title}></img>
                         <p className="card-text" style={{ height: '50px', color: '#495057', textAlign:'center' }}>{destacado.description.slice(0,200)}...</p>
                         <p className="text-center" style={{ fontSize: '1.1rem', color: '#28a745', fontWeight: 'bold' }}>Precio: $ {destacado.price}</p>
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

export default Destacados;
