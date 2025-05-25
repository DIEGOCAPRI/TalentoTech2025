function Locales (){
     const urlMaps = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0113003546016!2d-58.41356462492869!3d-34.60387575750532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8c854bd13f%3A0xfc0cf5c054da4aa1!2sAbasto%20Shopping!5e0!3m2!1ses!2sar!4v1747514409678!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    return(<>
     <h2 className="text-center mt-5 fw-bold seccion-titulo" style={{ fontStyle: 'italic' }}>Nuestros Locales</h2>
     <div className="text-center mt-5"> 
          <div dangerouslySetInnerHTML={{ __html: urlMaps }} />
     </div>
     <div className="text-center mt-3">
     <h4>Sede Abasto Shopping</h4>
     <p>Dirección: Av. Corrientes 3244</p>
     <p>Lunes a Domingo de 08:00 a 22:00 Hs.</p>
     <p>Contacto: 0800-222-2222</p>
     </div>
     </>
    )
}


export default Locales;