import React from "react";
import ProdList from "../Components/products/ProdList";
import PROD_DATA from "../Img/List";


var prodi = PROD_DATA;

function AllProductsPage() {
    return (     
        <section>
            <h1>AllProducts</h1>
            <ProdList products={prodi}               
                   />  
        </section>   
    );
}

export default AllProductsPage;