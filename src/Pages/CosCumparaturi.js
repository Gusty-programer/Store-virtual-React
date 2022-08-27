import React, {useState } from 'react';
import Cos from '../Components/ui/Cos';
import {Link } from 'react-router-dom'

function CosCumparaturi(props) {
    
    const [totall, setTotall] = useState(localStorage.total)

     let localstore
    function locstore() {
      localstore = localStorage.getItem("items")
    if (localstore) {
        localstore = localstore.split(",")     
    } else {
        localstore = []
        }
        return localstore
        }
    locstore() 
   
    const total=()=> {
      let  pretprod = localStorage.total
        console.log("pretprod=", pretprod) 
        setTotall(pretprod)
        return pretprod
    }
    const removeItem = () => {
        localStorage.clear()
        locstore()
        setTotall(0)
        
    }
    
    return (
        <section>
            <h1>Cos cumparaturi</h1>
            {localstore.length === 0 &&
                <div className='divback'>
                    <h2>Nu aveti produse in cos!</h2>
                    <button className='back'><Link to='/'>Inapoi la cumparaturi</Link></button>
                </div>}
            <div className='produse_cos'>
                <div className='produse'>
            {localstore.map((idp) => (
                <Cos idp={idp}
                    key={idp}  
                    localstore={localstore}
                    changeTotal={total}
                    reload={locstore}
                    
                />
            ))}
                </div>
                {localstore.length !== 0 &&
                <div className='pret_total'>
                        <h3>Sumar comanda</h3>
                        <p>Cost produse {totall} Lei</p>
                        <p>Cost livrare  19.00 Lei</p>
                        <hr></hr>
                        <h3> Total: <span> {parseFloat(totall) + 19}</span> Lei </h3>
                        <div className='continua'>
                            <button ><Link to='/'>Continua</Link></button>
                            </div>
                    </div>
                }
             </div>
             <div>
                        <button onClick={removeItem}>Remove all</button>
                    </div>
        </section>
    )
}

export default CosCumparaturi;