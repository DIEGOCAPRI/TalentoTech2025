
import { Button } from 'react-bootstrap';


function Paginador  ({totalProductos,  paginaActual, setPaginaActual, productosPorPagina}){

    
    const paginasTotales = Math.ceil(totalProductos/productosPorPagina);

    return (
        <div className="d-flex justify-content-center mt-4 flex-wrap">
            <Button
              variant="outline-secondary"
              className="mx-1 mb-2"
              disabled={paginaActual === 1}
              onClick={() => setPaginaActual(paginaActual - 1)}
            >
             ⬅ Anterior
            </Button>
            {Array.from({ length: paginasTotales }, (_, indice) => (
            <Button
              key={indice + 1}
              variant={paginaActual === indice + 1 ? 'primary' : 'outline-primary'}
              className="mx-1 mb-2"
              onClick={() => setPaginaActual(indice + 1)}
            >
              {indice + 1}
            </Button>
            ))}
            <Button
              variant="outline-secondary"
              className="mx-1 mb-2"
              disabled={paginaActual === paginasTotales}
              onClick={() => setPaginaActual(paginaActual + 1)}
            >
              Siguiente ➡ 
            </Button>
        </div>
    )


}

export default Paginador;