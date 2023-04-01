import style from "./screen2.module.css"
import burger from "./burger.jpeg"
import coke from "./coke.jpeg"
import fries from "./fries.jpeg"
import pepsi from "./pepsi.jpeg"
import { createContext, useContext, useState } from "react"
// import { unstable_HistoryRouter } from "react-router-dom"
// import { useContext } from "react"
import Screen3 from "./Screen3"
import Screen1 from "./Screen1"
export const userContext = createContext()
export const billContext = createContext()


const Screen2 = () => {
    let [bill ,setbill] = useState(0)
    let [cart,setcart] =useState(0)



    let addb=()=>{
        setbill(bill+200)
        setcart(cart+1)
    }
    let subb=()=>{
        setbill(bill-200)
        setcart(cart-1)
    }
    let addf = ()=>{
        setbill(bill+100)
        setcart(cart+1)
    }
    let subf=()=>{
        setbill(bill-100)
        setcart(cart-1)
    }
    let addc = ()=>{
        setbill(bill+50)
        setcart(cart+1)
    }
    let subc=()=>{
        setbill(bill-50)
        setcart(cart-1)
    }
   
    console.log(bill)
    console.log(cart)
    return(
        <div>
            <userContext.Provider value={cart}>
                <Screen1 cart = {cart} />

                
            </userContext.Provider>
            <billContext.Provider value={bill}>
                <Screen3 bill = {bill}/>
            </billContext.Provider>

            
              <section id={style.main}>
            
                <article>
                    <div className={style.Menu}>
                        <div>
                            <img src={burger} alt="" height="50%" width="100%"/>
                            <h2>&nbsp;&nbsp;Hamburger</h2>
                            <h4>&nbsp;&nbsp;Price:200</h4><br />
                            <button onClick = {addb} className={style.add}> + </button>
                            <button onClick = {subb} className={style.sub}> - </button>

                        </div>
                        <div>
                            <img src={fries} alt="" height="50%" width="100%" />
                            <h2>&nbsp;&nbsp;Fries</h2>
                            <h4>&nbsp;&nbsp;Price:100</h4><br />
                            <button onClick = {addf} className={style.add}> + </button>
                            <button onClick = {subf} className={style.sub}> - </button>

                        </div>
                        <div>
                        <img src={coke} alt="" height="50%" width="100%" />
                            <h2>&nbsp;&nbsp;Coke</h2>
                            <h4>&nbsp;&nbsp;Price:50</h4><br />
                            <button onClick={addc} className={style.add}> + </button>
                            <button onClick = {subc} className={style.sub}> - </button>
                        </div>
                        <div>
                        <img src={pepsi} alt="" height="50%" width="100%" />
                            <h2>&nbsp;&nbsp;Pepsi</h2>
                            <h4>&nbsp;&nbsp;Price:50</h4><br />
                            <button onClick={addc} className={style.add}> + </button>
                            <button onClick={subc} className={style.sub}> - </button>
                        </div>
                       
                       
                    </div>                   
                </article>
              </section>


        </div>
    )
}

export default Screen2