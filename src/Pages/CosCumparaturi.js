import React from 'react';
import { Link } from 'react-router-dom';
import PROD_DATA from '../Img/List'

function FavoritesPage() {
    
    return (
        <section>
            <h1>Cos cumparaturi</h1>
                    <button className='back'><Link to='/'>Inapoi la cumparaturi</Link></button>           
            <div className='produse_cos'>
                <div className='produse'>
            {PROD_DATA.map((idp) => (
                <p>{idp.name}</p>
            ))}
                </div>
               
             </div>
             
        </section>
    )
}

export default FavoritesPage;