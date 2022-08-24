import React from 'react';
import classes from './Menu.module.css';
import { memo } from "react";

function Menu(props) {

    return (
       < div>
        <li className={classes.li} >
            <div>
                <h4 onClick={() => props.change(props.categ)}> {props.categ} </h4>              
            </div>
        </li>
            </div>
    );
}

export default memo(Menu);