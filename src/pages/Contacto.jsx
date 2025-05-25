import { Form, Button, Container } from 'react-bootstrap';

function Contacto (){
    return (
        <>
           <h2 className="text-center mt-5 mb-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Contacto</h2>
           <Container className="pt-4 pb-4" style={{ width: '400px', backgroundColor:'rgba(25, 78, 27, 0.295)',
            border: '3px solid rgb(145, 140, 140)', borderRadius: '3%'
           }}>
           <Form>
            <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" name="name" required>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" required>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formMensaje" className="mb-3">
                <Form.Label>Consulta</Form.Label>
                <Form.Control as="textarea" placeholder="Consulta" name="consulta" required>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
           </Form>
           </Container>
        </>
    )
}


export default Contacto;