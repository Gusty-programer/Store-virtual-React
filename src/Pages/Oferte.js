import React from 'react';
import ProdList from "../Components/products/ProdList";
import PROD_DATA from "../Img/List";

function Oferte() {
    const categor = PROD_DATA.filter((cat) => cat.oferta > 0);
    
    return (
        <section>
            <h1>Oferte</h1>
            <ProdList
                products={categor}
               
            />  
        </section>
    );
}

export default Oferte;