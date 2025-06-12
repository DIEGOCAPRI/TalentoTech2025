
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

///import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import ProductosxCategoria from './pages/ProductosxCategoria';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Footer from './components/Footer';
import Login from './pages/Login';
import Carrito from './pages/Carrito';

import AdminProductos from './pages/AdminProductos';
import AdminCategorias from './pages/AdminCategorias';

///links del footer
import Locales from './pages/Locales';
import SobreNosotros from './pages/SobreNosotros';
import Envio from './pages/Envio';
import Contacto from './pages/Contacto';
import Pago from './pages/Pago';
import Faqs from './pages/Faqs';

import RutaProtegida from './components/RutaProtegida';
//context
import {LoginProvider } from './context/LoginContext';

function App() {

    return (
     <LoginProvider>
     <Router>
     <div>
        
        <Header/>
        <NavBar/>        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cards" element={<Cards/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/newuser" element={<NewUser/>}/>
            <Route path="/locales" element={<Locales/>}/>
            <Route path="/aboutus" element={<SobreNosotros/>}/>
            <Route path="/envio" element={<Envio/>}/>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/pago" element={<Pago/>}></Route>
            <Route path="/faqs" element={<Faqs/>}></Route>
            <Route path="/prodxcategoria/:categoria" element={<ProductosxCategoria/>}></Route>
            <Route path="/adminproductos" element={<RutaProtegida><AdminProductos/></RutaProtegida>}></Route>
            <Route path="/admincategorias" element={<RutaProtegida><AdminCategorias/></RutaProtegida>}></Route>
            <Route path="/carrito" element={<Carrito/>}></Route>
            <Route/>
        </Routes>       
        <Footer/>    
     </div>
     </Router>
     </LoginProvider>
     
    )

}

export default App