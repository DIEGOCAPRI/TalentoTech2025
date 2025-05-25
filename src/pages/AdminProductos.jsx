import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AdminProductos(){
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
                  <Form.Control type="text" placeholder="Categoría" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="number" placeholder="Precio" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{display: "flex", margin:"auto"}}>
                  Agregar
                </Button>
           </Form>
        </>
    )
}

export default AdminProductos;