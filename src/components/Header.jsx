import { Navbar, Button } from 'react-bootstrap';
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
        <Navbar bg="dark" variant="dark" className="">
            <Navbar.Brand className="w-25 ms-5"><Link to="/"><Image  src="../src/images/Header/logo_multimarca.jpeg" alt="Logo" style={{width:"300px", marginLeft:"150px"}} /></Link></Navbar.Brand>            
            <Navbar.Text className="text-end text-white w-50">
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
            </Navbar.Text>
        </Navbar>
        );
    }


export default Header;