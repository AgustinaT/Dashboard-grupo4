import React from 'react';

function TablaUsuario(props){
    return(
        <React.Fragment>
        <div className="card-body">
         <div className="table-responsive">
         <h1 className="h3 mb-2 text-gray-800">Lista de todos los Usuarios.</h1>
            {props.map((props)=> {
            return (
               <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Email Registrado</th>
                      </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                          <tr>
                            <td>{props.id}</td>
                            <td>{props.email}</td>
                          </tr>
                    </tbody>
                  </table>
                )
                })}

        </div>
        </div>
        </React.Fragment>
    )
}
export default TablaUsuario;

// linea 12 <div className="h5 mb-0 font-weight-bold text-gray-800">{(props.moneda ? '$'+props.valor:  props.valor)}</div> //