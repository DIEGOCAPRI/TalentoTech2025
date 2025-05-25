import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import '../css/Login.css';
import Swal from 'sweetalert2';


function Login (){

    const navigate = useNavigate();
    const {setLogin, setUsuario} = useContext(LoginContext);

   const checkLogin= (e)=>{
        e.preventDefault();
     
        const usuario = e.target.usuario.value;
        const password = e.target.password.value;

        if (usuario == '' || password == ''){
            sweetError();
            return;
        }
        else {
             localStorage.setItem('auth', 'true');
             localStorage.setItem('usuario', usuario);
             setLogin(true);
             setUsuario(usuario);
            navigate('/adminproductos');
            
        }    
       }
        
    const sweetError = ()=>{
        Swal.fire({
            title: 'Error!',
            text: 'Debe completar usuario y contraseña',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
    }

    return (
        <section className='login'>
            <h2>Iniciar Sesión</h2>
        <form className='' onSubmit={checkLogin}> 
            
            <div className='inputbloque'> 
            <input type="text" name="usuario" id="usuario" placeholder='Usuario' />                 
            <input type="password" name="password" id="password" placeholder='Contraseña'/>
            <div className='container'>        
            <button type="submit" className="btn btn-primary">INICIAR SESIÓN</button> 
            </div> 
            </div>
                <p >¿No tenés una cuenta? <Link to={'/newuser'}>Crear una cuenta</Link></p> 
        </form>
        </section>
    )
}

export default Login;