import React from 'react';
import imagenFondo from '../../../assets/images/lavanda.jpeg'; 

function ProductoDestacado(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Planta mas vendida</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h4>Lavanda Europea</h4>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 rounded-circle" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Imagen Del Producto "/>
                        <h4>{props.products[props.products.length-1].name}</h4>
                        <p>Precio: $1000 </p>
                        <p>Descripción: La lavanda es una planta aromática semiarbustiva, habitual en muchos jardines mediterráneos. Su fácil cultivo hace que sea una elección segura en terrenos no muy ricos, como los secos y arcillosos.  </p>
                    </div>
                <div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductoDestacado;
