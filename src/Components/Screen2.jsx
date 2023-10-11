// import style from "./screen2.module.css"
// import burger from "./burger.jpeg"
// import coke from "./coke.jpeg"
// import fries from "./fries.jpeg"
// import pepsi from "./pepsi.jpeg"
// import { createContext, useContext, useState } from "react"
// // import { unstable_HistoryRouter } from "react-router-dom"
// // import { useContext } from "react"
// import Screen3 from "./Screen3"
// import Screen1 from "./Screen1"
// export const userContext = createContext()
// export const billContext = createContext()


// const Screen2 = ({cartItem,showCart,cartDec}) => {
//     let [bill ,setbill] = useState(0)
//     let [cart,setcart] =useState(0)



//     let addb=()=>{
//         setbill(bill+200)
//         cartItem()
//     }
//     let subb=()=>{
//         setbill(bill-200)
//         cartDec()
//     }
//     let addf = ()=>{
//         setbill(bill+100)
//         cartItem()
//     }
//     let subf=()=>{
//         setbill(bill-100)
//         cartDec()

//     }
//     let addc = ()=>{
//         setbill(bill+50)
//         cartItem()
//     }
//     let subc=()=>{
//         setbill(bill-50)
//         cartDec()

//     }
   
//     console.log(bill)
//     console.log(cart)
//     return(
//         <div>
//             <userContext.Provider value={cart}>
//             </userContext.Provider>
//             <billContext.Provider value={bill}>
//                {showCart && showCart ? <Screen3 bill = {bill}/> :
//                 <section id={style.main}>
            
//                 <article>
//                     <div className={style.Menu}>
//                         <div>
//                             <img src={burger} alt="" height="50%" width="100%"/>
//                             <h2>&nbsp;&nbsp;Hamburger</h2>
//                             <h4>&nbsp;&nbsp;Price:200</h4><br />
//                             <button onClick = {addb} className={style.add}> + </button>
//                             <button onClick = {subb} className={style.sub}> - </button>

//                         </div>
//                         <div>
//                             <img src={fries} alt="" height="50%" width="100%" />
//                             <h2>&nbsp;&nbsp;Fries</h2>
//                             <h4>&nbsp;&nbsp;Price:100</h4><br />
//                             <button onClick = {addf} className={style.add}> + </button>
//                             <button onClick = {subf} className={style.sub}> - </button>

//                         </div>
//                         <div>
//                         <img src={coke} alt="" height="50%" width="100%" />
//                             <h2>&nbsp;&nbsp;Coke</h2>
//                             <h4>&nbsp;&nbsp;Price:50</h4><br />
//                             <button onClick={addc} className={style.add}> + </button>
//                             <button onClick = {subc} className={style.sub}> - </button>
//                         </div>
//                         <div>
//                         <img src={pepsi} alt="" height="50%" width="100%" />
//                             <h2>&nbsp;&nbsp;Pepsi</h2>
//                             <h4>&nbsp;&nbsp;Price:50</h4><br />
//                             <button onClick={addc} className={style.add}> + </button>
//                             <button onClick={subc} className={style.sub}> - </button>
//                         </div>
                       
                       
//                     </div>                   
//                 </article>
//               </section>} 
//             </billContext.Provider>
             


//         </div>
//     )
// }

// export default Screen2

// import React, { useState, useEffect ,createContext} from 'react';
// import style from "./screen2.module.css";
// // import React, { createContext } from 'react';

// const userContext = createContext();
// const billContext = createContext();

// export { userContext, billContext };

// const Screen2 = ({ cartItem, showCart, cartDec }) => {
//     const [foodItems, setFoodItems] = useState([]);
//     const [bill, setBill] = useState(0);

//     useEffect(() => {
//         fetchFoodItems();
//     }, []);

//     const fetchFoodItems = async () => {
//         try {
//             const response = await fetch('/api/food-items/');
//             const data = await response.json();
//             setFoodItems(data);
//         } catch (error) {
//             console.error('Error fetching food items:', error);
//         }
//     };

//     const addFood = (price) => {
//         cartItem();
//         setBill(prevBill => prevBill + price);
//     };

//     const subFood = (price) => {
//         cartDec();
//         setBill(prevBill => prevBill - price);
//     };

//     return (
//         <section id={style.main}>
//             <article>
//                 <div className={style.Menu}>
//                     {foodItems.map(item => (
//                         <div key={item.id}>
//                             <img src={item.image} alt={item.name} height="50%" width="100%" />
//                             <h2>&nbsp;&nbsp;{item.name}</h2>
//                             <h4>&nbsp;&nbsp;Price: {item.price}</h4><br />
//                             <button onClick={() => addFood(item.price)} className={style.add}> + </button>
//                             <button onClick={() => subFood(item.price)} className={style.sub}> - </button>
//                         </div>
//                     ))}
//                 </div>
//             </article>
//         </section>
//     );
// };

// export default Screen2;




// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect, createContext } from 'react';
import style from "./screen2.module.css";
import { cartCountVal } from './utils';

const userContext = createContext();
const billContext = createContext();

export { userContext, billContext };

const Screen2 = ({ cartItem, showCart, cartDec,setCartCount,cartcount }) => {
    const [foodItems, setFoodItems] = useState([]);
    const [bill, setBill] = useState(0);

    useEffect(() => {
        fetchFoodItems();
    }, []);

    const fetchFoodItems = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/food-items/');
            const data = await response.json();

            // Append base URL to image URLs
            const foodItemsWithFullImageURLs = data.map(item => ({
                ...item,
                image: `http://127.0.0.1:8000${item.image}`,
            }));

            setFoodItems(foodItemsWithFullImageURLs);
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };

    const addFood = async (item) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/add-to-cart/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item_id: item.id,
                }),
            });
    
            if (response.ok) {
                cartItem();
                cartCountVal(setCartCount)
                setBill(prevBill => prevBill + item.price);
            } else if (response.status === 404) {
                console.error('Food item not found');
            } else {
                console.error('Failed to add item to cart');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };
    
    const subFood = async (item) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/remove-from-cart/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item_id: item.id,
                }),
            });
    
            if (response.ok) {
                cartDec();
                cartCountVal(setCartCount)
                setBill(prevBill => prevBill - item.price);
            } else if (response.status === 404) {
                console.error('Food item not found');
            } else {
                console.error('Failed to remove item from cart');
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };
    
    
    

    return (
        <section id={style.main}>
            <article>
                <div className={style.Menu}>
                    {foodItems.map(item => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.name} height="50%" width="100%" />
                            <h2>&nbsp;&nbsp;{item.name}</h2>
                            <h4>&nbsp;&nbsp;Price: {item.price}</h4><br />
                            {/* <button onClick={() => addFood(item.price)} className={style.add}> + </button>
                            <button onClick={() => subFood(item.price)} className={style.sub}> - </button> */}
                            <button onClick={() => addFood(item)} className={style.add}> + </button>
                            <button onClick={() => subFood(item)} className={style.sub}> - </button>

                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
};

export default Screen2;



