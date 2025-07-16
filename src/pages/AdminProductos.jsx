import {Button, Form, Table, Modal} from 'react-bootstrap';
import { useState , useEffect} from "react";
import Swal from 'sweetalert2';



function AdminProductos(){

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [currentItem, setCurrentItem] = useState({title:"", description:"", price:"", stock:"", category:"", image:"", id:"", destacado:""});
  const [showModal, setShowModal] = useState(false);
  

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
    if(currentItem.category =="" || currentItem.description =="" || currentItem.price =="" || currentItem.stock =="" ||currentItem.title=="" || currentItem.destacado ==""){
      Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor complete todos los campos del formulario"
          });
          return;
    }

    const image = Math.floor(Math.random() * (301 - 200)) + 200;

    const urlImage = `https://picsum.photos/id/${image}/200/300`;
    const productoFinal = { ...currentItem, image: urlImage };  
    

    try {
      const res = await fetch(urlProductos, {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productoFinal)
      })
      if (!res.ok) throw new Error("Error al crear producto");

      Swal.fire('Producto cargado correctamente');
    }
    catch(error){
       Swal.fire(`Error al cargar la categoría${error}`);
    }
    finally {
      limpiarProductos();
       apiProductos();
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

  /*Edición => Modal + Api */
   
  const openModalEdit = (id, title, description, category, price, stock, destacado)=> {
    setCurrentItem({id: id, title: title, description:description, price: price, stock:stock, category:category, image:"", destacado : destacado})
    setShowModal(true);
  }

  const handleCloseModal = ()=> {
    setShowModal(false);
     limpiarProductos();
  }

  const onEdit = async()=> {
    
    try {
        const res = await fetch(`${urlProductos}/${currentItem.id}`, {
              method: 'PUT',
              headers: {"Content-Type" : "application/json"},
              body: JSON.stringify(currentItem)        
        })
        if (!res.ok) throw new Error("Error al editar producto");
        Swal.fire('El producto fue editado correctamente');
        await apiProductos(); 
      }
    catch(error) {
        Swal.fire("Error al editar producto");
    }
    finally{
      limpiarProductos();
      handleCloseModal();
    }
  }
  
  /*Carga categorias y productos*/
     useEffect(()=>{
        apiCategorias();
    },[]);

    useEffect(()=>{
        apiProductos();
    },[])

  /*limpia productos */

  const limpiarProductos = ()=>{
    setCurrentItem({title:"", description:"", price:"", stock:"", category:"", image:"", id:"", destacado: ""});
  }

  

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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Destacado</Form.Label>           
                <Form.Select 
                  aria-label="Seleccione" 
                  defaultValue=""
                  name="destacado"
                  value={currentItem.destacado}
                  onChange={handleChange}>
                  <option value="" disabled>Seleccione</option>                
                  <option key="SI" value="SI">SI</option>
                  <option key="NO" value="NO">NO</option>                 
                </Form.Select>
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
                  <th>Destacado</th>
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
                    <td>{producto.destacado}</td>
                    <td><Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => openModalEdit(producto.id, producto.title, producto.description, producto.category, producto.price, producto.stock, producto.destacado )}
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

             {/*modal edicion*/}
             <Modal show={showModal} onHide={handleCloseModal}>     
                <Modal.Header closeButton>
                  <Modal.Title>
                    Editar producto
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Producto</Form.Label>
                      <Form.Control
                        type="text"
                        value = {currentItem.title} 
                        name="title"
                        onChange={handleChange} 
                        
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Descripción del producto</Form.Label>
                      <Form.Control
                        type="text"
                        value={currentItem.description}
                        name="description"
                        onChange={handleChange}
                        
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
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
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="number"
                        value = {currentItem.price}
                        name="price"
                        onChange={handleChange}
                        
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Stock</Form.Label>
                      <Form.Control
                        type="number"
                        value= {currentItem.stock}
                        name="stock"
                        onChange={handleChange}
                        
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Destacado</Form.Label>           
                      <Form.Select 
                        aria-label="Seleccione" 
                        defaultValue=""
                        name="destacado"
                        value={currentItem.destacado}
                        onChange={handleChange}>
                        <option value="" disabled>Seleccione</option>                
                        <option key="SI" value="SI">SI</option>
                        <option key="NO" value="NO">NO</option>                 
                      </Form.Select>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Cancelar
                  </Button>
                  <Button
                    variant="primary"
                    onClick={onEdit}
                  >
                    Editar
                  </Button>
                </Modal.Footer>
              </Modal>
        </>
    )
}

export default AdminProductos;