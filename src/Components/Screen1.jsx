import style from "./screen1.module.css"
import "./Screen2"
import { useHistory } from "react-router-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Screen2 from "./Screen2"
import { Link, useNavigate } from "react-router-dom"
import Home from "./Home"
import { useContext, useEffect, useState } from "react"
import cart from "./Home"
// import { userContext} from "./Screen2"
import { userContext, billContext } from './Screen2'
import { cartCountVal } from "./utils"

const Screen1 = ({cartcount,cartBill}) => {
    // let navigate = useNavigate()
    
    
    // const history = useHistory();
  
    // const coursesPage = () => {x
        // history.push("./Screen2.jsx")

    // }
    const user = useContext(userContext)
    // const bill = useContext(billContext)

    return(
        <div>
             <section id={style.nav}>
                <article>
                    <div className={style.Logo}>
                    <i class="fa-solid fa-utensils" style={{color:"white"}}></i>
                    <h2>Food's Restaurent</h2>
                    </div>
                    <div className={style.cart} >
                    <h1 onClick={() => cartBill()}><i class="fa-solid fa-cart-plus" style={{color:"white"} }></i>{cartcount}</h1>
                    </div>
                </article>
              </section>

             


        </div>
    )
}

export default Screen1
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { userContext, billContext } from './Screen2';
// import style from "./screen1.module.css";
// import Screen3 from './Screen3';  // Import Screen3 component


// const Screen1 = ({ cartCount, cartBill }) => {
//     const user = useContext(userContext);
//     const bill = useContext(billContext);
  
//     const handleCartClick = () => {
//       // Perform any actions you need when the cart button is clicked
//       console.log('Cart button clicked');
//     };
  
//     return (
//       <div>
//         <section id={style.nav}>
//           <article>
//             <div className={style.Logo}>
//               <i className="fa-solid fa-utensils" style={{ color: "white" }}></i>
//               <h2>Food's Restaurant</h2>
//             </div>
//             <div className={style.cart}>
//               {/* Update the onClick handler to call handleCartClick */}
//               <h1 onClick={handleCartClick}>
//                 <i className="fa-solid fa-cart-plus" style={{ color: "white" }}></i>
//                 {cartCount}
//               </h1>
//             </div>
//           </article>
//         </section>
  
//         {/* Link to navigate to Screen3 */}
//         <Link to="/screen3">Go to Screen3</Link>
  
//         {/* Show the CartPage (Screen3) when the path is /screen3 */}
//         <Route path="/screen3" component={Screen3} />
//       </div>
//     );
//   };
  
//   export default Screen1;
  