import React,{Component} from 'react';
import TablaUsuario from '../components/TablaUsuario';


class ListaUsuarios extends Component {
    constructor(){
        super();
        this.state ={
            usersList :[],         
        }
    }
    componentDidMount(){
        fetch('/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users =>{
            this.setState({
                usersList : users.data,
            
            })
        })

        .catch(error=> console.log("error 99"))
    }
    render(){
      
        return (
            
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="container-fluid">
            <div className="container-fluid">
                {
                    this.state.usersList.map((users,index)=>{
                        return <TablaUsuario  {...users}  key= {index}/>
                    })  
                }             
            </div>
            </div>
            </React.Fragment>
        )
    }
    
}
export default ContentRowProducts;

/* this.state.usersList.map((user,index)=>{
                        return <SmallCard  {...user}  key= {index}/>
                    })  */