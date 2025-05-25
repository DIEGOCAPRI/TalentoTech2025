import { Container } from 'react-bootstrap';


function Pago (){
    return (
        <>
         <h2 className="text-center mt-5 mb-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Medios de Pago</h2>
         <h3 className="text-center">Tarjetas de Crédito</h3>
         <Container className="d-flex align-items-center"> 
            <img src="../src/images/Pago/visa.png" alt="" className="me-3" />
            <img src="../src/images/Pago/master.png" alt=""  className="me-3"/>
            <img src="../src/images/Pago/american.png" alt="" />   
         </Container>
          <p className="text-center">*La empresa se reserva el derecho de realizar modificaciones acerca de la vigencia o cualquier término y condición de las promociones vigentes.</p>
        
        </>
    )
}


export default Pago;