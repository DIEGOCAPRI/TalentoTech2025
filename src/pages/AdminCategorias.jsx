import {Button, Form, Table} from 'react-bootstrap';
import { useState , useEffect} from "react";
import Swal from 'sweetalert2';


function AdminCategorias(){
    
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [editando, setEditando] = useState(false);

    const url = "https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/categorias";

     const apiCategorias = async()=>{
       try {
        let request = await fetch(url);
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
   
    const handleCategoria = (e)=>{
     setCategoria(e.target.value);
    }
    
    ///Alta categoría
    const createCategoria = async(e)=>{
      e.preventDefault();
      if(categoria.length < 3){
        Swal.fire('La categoría no puede contener menos de 3 caracteres');
        return;
      }
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({name: categoria}),
        })
        if (!res.ok) throw new Error("Error al crear item");
        Swal.fire('Categoría cargada correctamente');
        await apiCategorias();      
      }
      catch(error) {
        Swal.fire('Error al cargar la categoría');
        console.error(error);
      }
      finally {
        setCategoria('');
      }
    }

    //Delete Categoría

    const onDelete = async(id)=>{
        console.log(id);
        try {
           const res = await fetch(`${url}/${id}`, {
           method: "DELETE",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({id: id}),
        })
         if (!res.ok) throw new Error("Error al borrar categoría");
         Swal.fire('La categoría fue eliminada correctamente');
         await apiCategorias(); 
        }
        catch (error) {
          Swal.fire('Error al eliminar la categoría');
        }
        finally {
            console.log(id);
        }
    }

    return (
        <>{console.log(editando)}
        <h2 className="text-center mt-5 mb-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Alta de Categorías</h2>
        <Form 
               style={{marginLeft: "35%", 
                       marginRight:"35%", 
                       backgroundColor:"rgba(248,249,250)",
                       padding: "20px 10px",
                       borderRadius: "3%",
                       border: '3px solid rgb(230, 223, 223)'}}
                onSubmit={createCategoria}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Categoría</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder="Nombre de la categoría" 
                  value= {categoria}
                  onChange ={handleCategoria} />
                </Form.Group>
                {!editando  ?  
                  (<Button variant="primary" type="submit" style={{display: "flex", margin:"auto"}}  >
                  Agregar
                </Button>) :
                  (<Button variant="primary" type="submit" style={{display: "flex", margin:"auto"}}  >
                  Editar
                </Button>) }
                
        </Form>
           <h2 className="text-center mt-5 mb-3 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Listado de Categorías</h2>
           <Table striped bordered hover variant="light" style={{width:"50%", margin:"auto"}}>
              <thead>
                <tr style={{textAlign:"center"}}>
                  <th>Id</th>
                  <th>Categoría</th>
                  <th>Acciones</th>
                </tr>
              </thead>          
            {categorias.length === 0 ? 
            (<td colSpan={4} style={{color:"black", textAlign:"center"}}>No hay productos cargados</td>) 
            :(<tbody>
                {categorias.map(categoria=>
                    <tr style={{textAlign:"center"}} key={categoria.id}> 
                    <td>{categoria.id}</td>
                    <td>{categoria.name}</td>
                    <td><Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => onEdit({ id, nombre, precio })}
                        >Editar
                        </Button>
                        <Button
                        variant="danger"
                        size="sm"
                        className="me-2"
                        onClick={() => onDelete(categoria.id)}
                        >Eliminar</Button>
                    </td>
                    </tr>)}
               
                </tbody>)}
             </Table>
        </>
    )
}


export default AdminCategorias;