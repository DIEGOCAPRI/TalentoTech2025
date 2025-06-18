import {Button, Form, Table} from 'react-bootstrap';
import { useState , useEffect} from "react";




function AdminProductos(){

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const urlCategorias = "https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/categorias";

  const apiCategorias = async()=>{
       try {
        let request = await fetch(urlCategorias);
        let response = await request.json();
        setCategorias(response);
       }
       catch(e) {
         sweetError(e);
       }
    }
     useEffect(()=>{
        apiCategorias();
    },[])


    return (
        <>
          <h2 className="text-center mt-5 mb-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Alta de Prodcutos</h2>
          <Form 
               style={{marginLeft: "35%", 
                       marginRight:"35%", 
                       backgroundColor:"rgba(248,249,250)",
                       padding: "20px 10px",
                       borderRadius: "3%",
                       border: '3px solid rgb(230, 223, 223)'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Producto</Form.Label>
                  <Form.Control type="text" placeholder="Nombre del producto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Descripción del Producto</Form.Label>
                  <Form.Control type="text" placeholder="Descripción del producto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Categoría</Form.Label>           
                <Form.Select aria-label="Seleccione una categoría" defaultValue="">
                  <option value="" disabled>Seleccione una categoría</option>
                  {categorias.map(categoria=> 
                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                  )}
                </Form.Select>
                 </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="number" placeholder="Precio" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{display: "flex", margin:"auto"}}>
                  Agregar
                </Button>
           </Form>
           <h2 className="text-center mt-5 mb-3 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Listado de Productos</h2>
           <Table striped bordered hover variant="light" style={{width:"50%", margin:"auto"}}>
              <thead>
                <tr style={{textAlign:"center"}}>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Categoria</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>          
            {productos.length === 1 ? 
            (<td colSpan={4} style={{color:"black", textAlign:"center"}}>No hay productos cargados</td>) 
            :(<tbody>
                <tr style={{textAlign:"center"}}> 
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                     <Button
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
                </tr>
                </tbody>)}
             </Table>
        </>
    )
}

export default AdminProductos;