import React, { Component } from "react";

import ListaProductos from './ListaProductos'

class ProductsDb extends Component {
  
  render() {
    return (
      <>
        <div className="container-fluid" >
          <ListaProductos/>
        </div>
      </>
    );
  }
}
export default ProductsDb;
