import React, { Component } from "react";
import ListaUsuarios from "./ListaUsuarios"


class UsersDb extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <ListaUsuarios/>
        </div>
      </>
    );
  }
}
export default UsersDb ;
