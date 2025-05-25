
import Accordion from 'react-bootstrap/Accordion';

function Faqs(){
    return( 
    <>
    <h2 className="text-center mt-5 mb-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Preguntas Frecuentes</h2>
     <Accordion style={{marginLeft: '20%', marginRight: '20%'}} defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Cómo hago para comprar en Tienda Multimarca?</Accordion.Header>
        <Accordion.Body>
          Por favor, ingresá en el siguiente link, en el que encontrarás el video explicativo de cómo comprar:
        https://www.youtube.com/embed/sarasa
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Cómo hago para seguir mi pedido?</Accordion.Header>
        <Accordion.Body>
          Por favor, ingresá en el siguiente link en el que encontrarás el instructivo para hacer el seguimiento de tu compra: https://www.youtube.com/embed/test
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Cómo hago para cancelar mi pedido?</Accordion.Header>
        <Accordion.Body>
          Por favor, ingresá en el siguiente link en el que encontrarás el instructivo para cancelar tu pedido: https://www.youtube.com/embed/cancelar
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
    )
}


export default Faqs;