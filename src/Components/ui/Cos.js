import React from "react";
import { useState, useEffect } from "react";
import PROD_DATA from "../../Img/List";
import "./Cos.css"


export default function Cos(props) {

    const [local, setLocal] = useState(props.localstore)
    const countbuc = localStorage.getItem("count"+props.idp)
    const [count, setCount] = useState(countbuc)
    let elemcos = PROD_DATA.filter((fil) => fil.id === props.idp)[0]
    const pretafis = (elemcos.pret - (elemcos.pret / 100 * elemcos.oferta)).toFixed(2)
    const promo = (elemcos.pret / 100 * elemcos.oferta * count).toFixed(2)
    const prettotal = pretafis * count
    const rest = elemcos.stoc - count
    const increase = () => {
        if(rest >0)
            setCount(parseInt(count) + 1)          
        }
    const decrease = () => {
            if (count > 1) {
                setCount(parseInt(count) - 1)   
            }
    }
    const delelemcos = () => {
        props.localstore.splice(props.localstore.indexOf(props.idp), 1)
        // console.log("localstore=",props.localstore)
        localStorage.removeItem("count" + props.idp)
        localStorage.removeItem("pret" + props.idp)
        setLocal(props.localstore)
        // dispatch({ type: "update" })
         
}

    useEffect(() => {     
         localStorage.setItem("count" + props.idp, count)     
    }, [count]);
    
     useEffect(() => {  
         localStorage.setItem("items", local.join(",")) 
        }, [local]);
   
    return (
        <div className="divcos">
         <div className="produs_cos"> 
         <div>
            <img width='40px' src={elemcos.image}
                alt={elemcos.name} />
            </div>
            <div>
                <span>{elemcos.name} </span>
                </div>
                <div>
            {elemcos.description}
            </div>
            <div className="btn_count">
                    <button onClick={decrease}>-</button> {count}
            <button onClick={increase}>+</button>
            </div>
            <div className="subtotal">
                <span>{(prettotal).toFixed(2)} </span> Lei     
            </div>
            <div>
                <button className="del" onClick={delelemcos}>X sterge</button>         
                </div>
            </div>
            <hr></hr>
            <div className="info">
            <div className="disp">
                    <p><small>Disponibilitate: {elemcos.stoc !== 0 && <span>in stoc </span>}{rest} buc</small></p>
            </div>
            <div className="eco">
            {elemcos.oferta !== 0 && <p><small>Ai economisit {promo} Lei</small></p>}
           </div>
           </div>        
        </div>
    )

}
