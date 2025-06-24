import {Button, Form, Table} from 'react-bootstrap';
import { useState , useEffect} from "react";
import Swal from 'sweetalert2';



function AdminProductos(){

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [currentItem, setCurrentItem] = useState({title:"", description:"", price:"", stock:"", category:"", image:""})

  const urlCategorias = "https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/categorias";
  const urlProductos = "https://684b2b0b165d05c5d35bb945.mockapi.io/talentotech/productos";

  const apiCategorias = async()=>{
       try {
        let request = await fetch(urlCategorias);
        let response = await request.json();
        setCategorias(response);
       }
       catch(e) {
         sweetError(e);
       }
    }

  const apiProductos = async() => {
    try{
      let request = await fetch(urlProductos);
      let response = await request.json();
      await setProductos(response);
    }
    catch(e){
      sweetError(e);
    }
  }  

  const handleChange = (e)=> {
      setCurrentItem({...currentItem , [e.target.name] : e.target.value});  
  }

  const crearProducto = async(e)=> {
    e.preventDefault();
    if(currentItem.category =="" || currentItem.description =="" || currentItem.price =="" || currentItem.stock =="" ||currentItem.title==""){
      Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor complete todos los campos del formulario"
          });
          return;
    }
    try {
      const res = await fetch(urlProductos, {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem)
      })
      if (!res.ok) throw new Error("Error al crear producto");

      Swal.fire('Producto cargado correctamente');
    }
    catch(error){
       Swal.fire(`Error al cargar la categoría${error}`);
    }
    finally {
       apiProductos();
       console.log(currentItem);
    }
  }
  
  /*Borra productos*/
  
  const onDelete = async(id)=>{
    try{
      const res = await fetch(`${urlProductos}/${id}`,{
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id: id})
      })
       if (!res.ok) throw new Error("Error al borrar producto");
       Swal.fire('El producto fue eliminado correctamente');
        
    }
    catch(error){
         Swal.fire(`Error al borrar el producto ${error}`);
    }
    finally {
      await apiProductos();
    }
  }
  /*Carga categorias y productos*/
     useEffect(()=>{
        apiCategorias();
    },[]);

    useEffect(()=>{
        apiProductos();
    },[])


    return (
        <>
          <h2 className="text-center mt-5 mb-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Alta de Prodcutos</h2>
          <Form 
               style={{marginLeft: "35%", 
                       marginRight:"35%", 
                       backgroundColor:"rgba(248,249,250)",
                       padding: "20px 10px",
                       borderRadius: "3%",
                       border: '3px solid rgb(230, 223, 223)'}}
                onSubmit={crearProducto}       >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Producto</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Nombre del producto"
                    name="title"
                    value={currentItem.title}
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Descripción del Producto</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Descripción del producto"
                    name="description"
                    value={currentItem.description}
                    onChange ={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Categoría</Form.Label>           
                <Form.Select 
                  aria-label="Seleccione una categoría" 
                  defaultValue=""
                  name="category"
                  value={currentItem.category}
                  onChange={handleChange}>
                  <option value="" disabled>Seleccione una categoría</option>
                  {categorias.map(categoria=> 
                    <option key={categoria.id} value={categoria.name}>{categoria.name}</option>
                  )}
                </Form.Select>
                 </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Precio"
                    name="price"
                    value={currentItem.price}
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control 
                  type="number" 
                  placeholder="Stock"
                  name="stock"
                  value={currentItem.stock}
                  onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{display: "flex", margin:"auto"}}>
                  Agregar
                </Button>
           </Form>
           <h2 className="text-center mt-5 mb-3 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Listado de Productos</h2>
           <Table striped bordered hover variant="light" style={{width:"50%", margin:"auto"}}>
              <thead>
                <tr style={{textAlign:"center"}}>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Categoria</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>          
            {productos.length === 0 ? 
            (<td colSpan={4} style={{color:"black", textAlign:"center"}}>No hay productos cargados</td>) 
            :(<tbody>
               {productos.map(producto=> 
                    <tr style={{textAlign:"center"}} key={producto.id}>
                    <td>{producto.title}</td>
                    <td>{producto.description}</td>
                    <td>{producto.category}</td>
                    <td>{producto.price}</td>
                    <td>{producto.stock}</td>
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
                          onClick={() => onDelete(producto.id)}
                          >Eliminar
                        </Button></td>
                    </tr>  )}              
                </tbody>)}
             </Table>
        </>
    )
}

export default AdminProductos;