import ReactPaginate from "react-paginate";
import {useState} from 'react'; 
import {useEffect} from 'react'
import TopBar from './TopBar'

function ListaProductos() {

    const[items,setItems]= useState([]);

    useEffect(()=>{
        const getProducts = async()=>{
            const res = await fetch("/api/products/paginado");
            const data = await res.json();
            setItems(data)
        };
        getProducts();
    },[]);
    
    //console.log(items) //
    const fetchProducts = async(currentPage) => {
        const res = await fetch(`/api/products/paginado?page=${currentPage}&size=5`);
        const data = await res.json();
        return data;
    };

    const handlePageclick = async (data) =>{
    console.log(data.selected);
    
    let currentPage = data.selected
    const productsServer = await fetchProducts(currentPage);
    setItems(productsServer) 
    }

  return (
    <div>
        
        <div className="card-shadow mb-4">
            <TopBar/>
        <div className="card-body">
         <div className="table-responsive">
         <h1 className="h3 mb-2 text-gray-800">Lista de todos los Productos.</h1>
            {items.map((item)=> {
            return (
               <table
                className="table table-bordered table table-success table-striped" 
                id="dataTable"
                width="100%"
                cellspacing="0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.product}</td>
                            <td>{item.description}</td>
                            <td>{item.category_id}</td>
                            <td>{item.price}</td>
                          </tr>
                    </tbody>
                  </table>
                )
                })}
                
      <ReactPaginate
       previousLabel={'<<'}
       nextLabel={'>>'}
       breakLabel ={'...'}
       pageCount={2}
       marginPagesDisplayed={1}
       pageRangeDisplayed={1}
       onPageChange ={handlePageclick}
       containerClassName={'pagination justify-content-center'}
       pageClassName={'page-item'}
       pageLinkClassName={'page-link'}
       previousClassName={'page-item'}
       previousLinkClassName={'page-link'}
       nextClassName={'page-item'}
       nextLinkClassName={'page-link'}
       breakClassName={'page-item'}
       breakLinkClassName={'page-link'}
       activeClassName={'active'}
/>
        </div>
        </div>
        </div>
  </div> 
  );
}

export default ListaProductos;
