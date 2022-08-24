import React from 'react';
import classes from './ProdItem.module.css';
import Card from '../ui/Card';


function ProdItems(props) {

    return (
        <li className={classes.item}>
            
            <Card
                image={props.image}
                name={props.name}
                scara={props.scara}
                description={props.description}
                pret={props.pret}
                promo={props.promo}
                id={props.id}
                stoc={props.stoc}
                update={props.update} 
            /> 
        </li>
    );  
}

export default ProdItems;