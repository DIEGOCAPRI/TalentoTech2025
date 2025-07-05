import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import Swal from 'sweetalert2';
import { LoginContext } from '../context/LoginContext';
import { CarritoContext } from '../context/CarritoContext';


function NavBar(){
  

  const [categorias, setCategorias ] = useState([]);
  const {isLogin} = useContext(LoginContext);
  const {montoCarrito} = useContext(CarritoContext);

    const apiCategorias = async()=>{
       try {
        let request = await fetch('https://fakestoreapi.com//products/categories');
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

    const sweetError = ()=>{
            Swal.fire({
                title: 'Error!',
                text: 'Error al cargar las categorías, intente nuevamente',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        }

  return (
    <Navbar expand="lg sm" className="bg-body-tertiary">
      <Container className="">
        <Navbar.Brand href="#home" className="navbar-start"><Link to="/" style={{textDecoration:"none", color:"black"}}>Tienda Multimarca</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-around w-100">
            <Link to="/" style={{textDecoration:"none", color:"black"}}>Inicio</Link>
            <Link to="/cards" style={{textDecoration:"none", color:"black"}}>Productos</Link>
            {isLogin && (
            <NavDropdown title="Administración" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/adminproductos" style={{textDecoration:"none", color:"black"}}>Alta de Productos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/admincategorias" style={{textDecoration:"none", color:"black"}}>Alta de Categorias</Link>
              </NavDropdown.Item>
            </NavDropdown>
            )}            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categorias.map(categoria=>
                <NavDropdown.Item href="#action/3.1" key={categoria}>
                  <Link to={`/prodxcategoria/${categoria}`} style={{textDecoration:"none", color:"black"}}>{categoria}</Link>
                  </NavDropdown.Item>
              )
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        <Navbar.Brand href="#home">
        <Link to="/carrito"><img src="../src/images/Nav/carrito.png" alt="" width={30} height={30}/></Link>        
        <span className='p-3'>${montoCarrito}</span>
        </Navbar.Brand>
        
      </Container>
    </Navbar>
  )

}


export default NavBar;