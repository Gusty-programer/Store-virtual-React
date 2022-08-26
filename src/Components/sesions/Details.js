import React from "react";
import { useParams } from "react-router-dom";
import PROD_DATA from "../../Img/List";
import './Details.css';
import { useState, useEffect } from "react";


export default function Details() {
    const search = useParams();
    let produs = PROD_DATA.filter((fil) => fil.id === search.ID)
    let countbuc = localStorage.getItem("count" + produs[0].id)
    if (!countbuc) {
        countbuc = 1
    }
    const [count, setCount] = useState(countbuc)  
    const [items, setItems] = useState(null)
    const pretpromo = (produs[0].pret - (produs[0].pret / 100 * produs[0].oferta)).toFixed(2)
    let local = localStorage.getItem('items')    
    if (local) {
        local = local.split(",")
    } else {
        local = []
    }

    const decrase = () => {
        if (count > 1) {
            setCount(parseInt(count) - 1)
        }
    }
    const incrase = () => {
        if (ramas > 0) {
            setCount(parseInt(count) + 1) 
        }  
    }     
    const addItem = () => {
        setItems(produs[0].id)
    }

    useEffect(() => {
        if (local.includes(produs[0].id)){
            localStorage.setItem("count" + produs[0].id, count) 
         }
    }, [count])
    
    useEffect(() => {
        if(items){
        !local.includes(items) && local.push(items)}
        if(local){
            localStorage.setItem('items', local.join(','))
            
        }
        if (local.includes(produs[0].id)){
            localStorage.setItem("count" + produs[0].id, count) 
         }
        
    }, [items])
    
    const ramas = produs[0].stoc - count

    return (
        <section>
            <h1>Detalii produs</h1>
            <div className="detail">                
                <div className="divimg">
                    <img src={produs[0].image} alt={produs[0].name}  />
                </div>
                <div className="text_details">
                    <h3>{produs[0].name}</h3>
                    <p><span>categoria:</span> {produs[0].categ}</p>
                    <p><span>scara</span> {produs[0].scara}</p>
                    <p><span>stoc: </span> {ramas <= 0 ? 0 : ramas}</p>
                    <div className="divcount">
                        <button onClick={decrase}>-</button>
                        {count}
                        <button onClick={incrase}>+</button>
                    </div>
                </div>
                <div className="pret">
                    <p><span>Pret cu TVA</span></p>
                    {produs[0].oferta === 0 ?
                 <p>{(produs[0].pret * count).toFixed(2)} Lei</p> :  
                 <p>{(pretpromo * count).toFixed(2)} Lei</p>
                    }
                    <div className="divbtn">
                        {produs[0].stoc !== 0 ?<button onClick={addItem}>Adauga in cos</button> : <p>Out of stoc</p>}
                    </div>             
                </div>     
           </div>      
        </section>
    );
}