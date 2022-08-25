import React from 'react';
import { Link } from 'react-router-dom';
import Cos from '../Components/ui/Cos';

function CosCumparaturi() {

   let localstore = localStorage.getItem("items")
    if (localstore) {
        localstore = localstore.split(",")
    } else {
        localstore = []
    }
    const removeItem = () => {
        localStorage.clear()
       
    }
    return (
        <section>
            <h1>Cos cumparaturi</h1>
                    <button className='back'><Link to='/'>Inapoi la cumparaturi</Link></button>           
            <div className='produse_cos'>
                <div className='produse'>
            {localstore.map((idp) => (
               <Cos idp={idp}
               key={idp}  
               localstore={localstore}
               
               
             
           />
            ))}
                </div>
               
             </div>
             <div>
                        <button onClick={removeItem}>Remove all</button>
                    </div>
        </section>
    )
}

export default CosCumparaturi;