import {Button, Form, Table} from 'react-bootstrap';
import { useState , useEffect} from "react";


function AdminCategorias(){
    
    const [categorias, setCategorias] = useState([]);

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
        </>
    )
}


export default AdminCategorias;