import style from "./screen1.module.css"
import "./Screen2"
// import { useHistory } from "react-router-dom"
// import { BrowserRouter, Route, Switch } from "react-router-dom"
// import Screen2 from "./Screen2"
import { Link, useNavigate } from "react-router-dom"
import Home from "./Home"
import { useContext, useState } from "react"
import cart from "./Home"
import { userContext} from "./Screen2"

const Screen1 = ({cartCount,cartBill}) => {
    // let navigate = useNavigate()
    
    
    // const history = useHistory();
  
    // const coursesPage = () => {x
        // history.push("./Screen2.jsx")

    // }
    const user = useContext(userContext)
    // const bill = useContext(billContext)

    
    console.log(cartCount)
    return(
        <div>
             <section id={style.nav}>
                <article>
                    <div className={style.Logo}>
                    <i class="fa-solid fa-utensils" style={{color:"white"}}></i>
                    <h2>Food's Restaurent</h2>
                    </div>
                    <div className={style.cart} >
                    <h1 onClick={() => cartBill()}><i class="fa-solid fa-cart-plus" style={{color:"white"} }></i>{cartCount}</h1>
                    </div>
                </article>
              </section>

             


        </div>
    )
}

export default Screen1