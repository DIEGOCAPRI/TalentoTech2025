import '../css/Footer.css';
import { Link } from 'react-router-dom';



function Footer(){
    return (
        <footer>
            <div className="divfooter">
                <h4>Nosotros</h4>
                <p><Link to ="/locales" style={{textDecoration: 'none', color:'white'}}>Locales</Link></p>
                <p><Link to ="/aboutus" style={{textDecoration: 'none', color:'white'}}>Sobre Nosotros</Link></p>
            </div>
            <div className="divfooter">
                <h4>Ayuda</h4>
                <p><Link  to ="/contacto" style={{textDecoration: 'none', color:'white'}}>Contacto</Link></p>
                <p><Link  to ="/pago" style={{textDecoration: 'none', color:'white'}}>Formas de Pago</Link></p>
                <p><Link  to ="/envio" style={{textDecoration: 'none', color:'white'}}>Metodos de envío</Link></p>
                <p><Link  to ="/faqs" style={{textDecoration: 'none', color:'white'}}>Preguntas Frecuentes</Link></p>
            </div>
            <div className="divfooter redes">
                <h4>Nuestras Redes</h4>
                <p><img src="../images/Footer/instagram.png" alt="instagram" />Instagram</p>
                <p><img src="../images/Footer/facebook.png" alt="facebook" />Facebook</p>
                <p><img src="../images/Footer/whatsapp.png" alt="whatsapp" />Whatsapp</p>
                <p>Copyright &#169; Tienda Multimarca</p>
            </div>

        </footer>
    )
}

export default Footer;