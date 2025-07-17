import { Navbar, Button, Container, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link,  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

    function Header() {
    
    const {isLogin, usuarioLogin, setLogin} = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogout =()=>{
         setLogin(false);
         localStorage.removeItem('auth');
         localStorage.removeItem('usuario');
         navigate("/");
    }
    
        return (
        <Navbar bg="dark" variant="dark" expand ="md" className="py-2">
            <Container>
            <Navbar.Brand className="d-flex align-items-center"><Link to="/"><Image  src="../src/images/Header/logo_multimarca.jpeg" alt="Logo" style={{height: '50px', objectFit: 'contain'}} fluid /></Link></Navbar.Brand>            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
            {isLogin ? (
                <>
                <span style={{marginRight:"10px"}}>Hola! {usuarioLogin}</span>
                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                            Cerrar sesión
                </Button>
                </>
            ) :
            (
                <Link to="/login" className="text-decoration-none">Iniciar Sesión</Link>
            )
                
            } 
            </Nav>   
            </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }


export default Header;