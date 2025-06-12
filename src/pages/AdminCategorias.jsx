import {Button, Form, Table} from 'react-bootstrap';
import { useState , useEffect} from "react";
import Swal from 'sweetalert2';


function AdminCategorias(){
    
    const [categorias, setCategorias] = useState([]);

    const url = "https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/categorias";

     const apiCategorias = async()=>{
       try {
        let request = await fetch(url);
        let response = await request.json();
        setCategorias(response);
       }
       catch(e) {
         sweetError();
       }
    }
     useEffect(()=>{
        apiCategorias();
    },[])
   

    return (
        <>
        <h2 className="text-center mt-5 mb-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Alta de Categorías</h2>
        <Form 
               style={{marginLeft: "35%", 
                       marginRight:"35%", 
                       backgroundColor:"rgba(248,249,250)",
                       padding: "20px 10px",
                       borderRadius: "3%",
                       border: '3px solid rgb(230, 223, 223)'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Categoría</Form.Label>
                  <Form.Control type="text" placeholder="Nombre de la categoría" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{display: "flex", margin:"auto"}}>
                  Agregar
                </Button>
           </Form>
           <h2 className="text-center mt-5 mb-3 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Listado de Categorías</h2>
           <Table striped bordered hover variant="light" style={{width:"50%", margin:"auto"}}>
              <thead>
                <tr style={{textAlign:"center"}}>
                  <th>Id</th>
                  <th>Categoría</th>
                  <th>Acciones</th>
                </tr>
              </thead>          
            {categorias.length === 0 ? 
            (<td colSpan={4} style={{color:"black", textAlign:"center"}}>No hay productos cargados</td>) 
            :(<tbody>
                {categorias.map(categoria=>
                    <tr style={{textAlign:"center"}}> 
                    <td>{categoria.id}</td>
                    <td>{categoria.name}</td>
                    <td><Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => onEdit({ id, nombre, precio })}
                        >Editar
                        </Button>
                        <Button
                        variant="danger"
                        size="sm"
                        className="me-2"
                        onClick={() => onEdit({ id, nombre, precio })}
                        >Eliminar</Button>
                    </td>
                    </tr>)}
               
                </tbody>)}
             </Table>
        </>
    )
}


export default AdminCategorias;