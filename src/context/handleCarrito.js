export function agregarItem(producto){ 

    const carrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
    console.log(carrito);
    const existeCarrito = carrito.find(carr=> carr.producto.id == producto.id);
    console.log('test');
    console.log(existeCarrito);
    let carritoActualizado = [];
    if(existeCarrito){
       carritoActualizado = carrito.map(car=> car.producto.id == producto.id ? 
        {...car, cantidad : car.cantidad + 1} : car)
                                            
    }
    else {
        carritoActualizado = [...carrito,{ producto, cantidad: 1}]
    }
    localStorage.setItem('productosCarrito', JSON.stringify(carritoActualizado));
}

export function eliminarItem(productoId){
    
    const carrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
    const existeCarrito = carrito.find(carr=> carr.producto.id == productoId);
    let carritoActualizado = [];

    if(existeCarrito){
      if(existeCarrito.cantidad == 1){
        carritoActualizado = carrito.filter(carr => carr.producto.id != productoId);
      }
      else{
        carritoActualizado = carrito.map(carr => carr.producto.id == productoId 
            ?{...carr, cantidad: carr.cantidad - 1} 
            : carr
        )
      }
    }
    localStorage.setItem('productosCarrito', JSON.stringify(carritoActualizado));
    
    
}

export function obtenerTodo(){

}