import React from 'react';
// import imagenFondo from '../assets/images/fondofooter.jpg';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white border border-success">
			{/* <img className="img-fluid px-0 px-sm-0 mt-0 mb-0" style={{width: 100 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/> */}
			{/* <img src={imagenFondo} className="img-fluid pb-10" alt="asd"></img> */}
				<div className="container my-auto">
				<div class= "pie">
    {/* <div class="redes-sociales">
        <h3>Encontranos en</h3>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-square"></i>
    </div> <div class="wapp">
        <h3>Contactanos!</h3> 
        <i class="fab fa-whatsapp-square"></i>
    </div>

    <div class="envios">
        <h3>Coordinar envios</h3>        
        <i class="fas fa-shuttle-van"></i>
    </div> */}

<div class="d-flex bd-highlight">
  	<div class="p-2 flex-fill bd-highlight"><h6>Encontranos en <i class="fab fa-instagram"></i> <i class="fab fa-facebook-square"></i></h6>
	</div>
  <div class="p-2 flex-fill bd-highlight"><h6>Contactanos! <i class="fab fa-whatsapp"></i></h6></div>
  <div class="p-2 flex-fill bd-highlight"><h6>Coordinar envios <i class="fas fa-shuttle-van"></i></h6>      
</div>
</div>
</div>
</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;