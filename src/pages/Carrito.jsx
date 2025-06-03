import { useState , useEffect} from "react";
import ButtonColor from "../components/ButtonColor";

function Carrito (){
     return (
     <>
     <h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Mi Carrito {categoria}</h2>
     </>)
}

export default Carrito;