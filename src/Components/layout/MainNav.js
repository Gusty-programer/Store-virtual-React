import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import './MainNav.css'


 export default function MainNav(props) {
   
    return (
        <header className='header'>
            <div className='logo'>MAGAZIN MACHETE</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> Produse</Link>
                    </li>
                    <li>
                        <div className='btn_nav'><Link to='/Cos'>Cos cumparaturi</Link></div>
                    </li>
                    <li>
                        <Link to='/Oferte'>Oferte</Link>
                    </li>    
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

