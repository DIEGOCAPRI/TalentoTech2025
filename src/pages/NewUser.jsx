
import '../css/Login.css';
import Swal from 'sweetalert2';

function NewUser (){

  const checkRegister = (e)=>{
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value
        const usuario = e.target.usuario.value;
        const password = e.target.password.value;

        if( nombre == "" || apellido == "" || usuario == "" || password == ""){
            sweetError();
            return;
        }
    }

    const sweetError = ()=>{
            Swal.fire({
                title: 'Error!',
                text: 'Todos los campos son obligatorios',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        }

    return (
        <section className='login'>
        <h2>Registrar Usuario</h2>
    <form className='' onSubmit={checkRegister}> 
        
        <div className='inputbloque'> 
        <input type="text" name="nombre" id="nombre" placeholder='Nombre' />                 
        <input type="text" name="apellido" id="apellido" placeholder='Apellido'/>   
        <input type="text" name="usuario" id="usuario" placeholder='Usuario' />                 
        <input type="password" name="password" id="password" placeholder='Contraseña'/>
        <div className='container'>        
        <button type="submit" className="btn btn-primary">REGISTRAR USUARIO</button> 
        </div> 
        </div>
    </form>
    </section>
    )
}


export default NewUser;