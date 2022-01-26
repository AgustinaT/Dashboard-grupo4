import React from 'react';
import imagenFondo from '../../../assets/images/jazmin chino.jpeg';

function UltimoProductoAgregado(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Ultimo ingreso</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <h4>Jazmin Chino</h4>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 rounded-circle" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Imagen Del Producto "/>
                        <h4>{props.products[props.products.length-1].name}</h4>
                        <p>Precio: $800</p>
                        <p>Descripción: Se le llama habitualmente jazmín chino, jazmín de invierno o jazmín trepador. Se trata de una planta trepadora originaria de China y Birmania, como su nombre común indica, y es de hoja perenne. Cuando se cultiva como planta trepadora, puede alcanzar alturas de hasta 6 metros si tienes el soporte adecuado, por lo que es muy utilizada en pérgolas y muros.</p>
                    </div>
                <div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UltimoProductoAgregado;
