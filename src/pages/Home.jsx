import React from 'react';
import Destacados from '../components/Destacados';
import Carousel from 'react-bootstrap/Carousel';




function Home() {
  return (
    <>
      <h1 className="text-center pt-5" style={{}}>Bienvenido a Tienda Multimarca</h1>
      <h2 className="text-center pb-4" style={{fontStyle:"italic"}}>Los mejores productos en un solo lugar</h2> 
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/images/Carrousel/carrousel_ofertas.jpg"
            alt="Ofertas"
          />
          <Carousel.Caption>
            <h3 style={{color:"black", fontStyle:"italic"}}>Hot Week</h3>
            <p style={{color:"black", fontStyle:"italic"}}>Ofertas bomba por tiempo limitado.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/images/Carrousel/carrousel_loto.jpg"
            alt="Ofertas Lotto"
          />
          <Carousel.Caption>
            <h3 style={{color:"black", fontStyle:"italic"}}>Liquidación Lotto</h3>
            <p style={{color:"black", fontStyle:"italic"}}>Los mejores productos de Lotto al mejor precio del mercado.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../src/images/Carrousel/carrousel_river.jpg"
            alt="Equipos de argentina"
          />
          <Carousel.Caption>
            <h3 style={{color:"black", fontStyle:"italic"}}>Equipos de futbol de Argentina</h3>
            <p style={{color:"black", fontStyle:"italic"}}>Encontrá las mejores promociones.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Destacados/>
    </>
    
  );
}

export default Home;
