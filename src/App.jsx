import Screen1 from "./Components/Screen1";
import Screen3 from "./Components/Screen3";
import Screen2 from "./Components/Screen2";
import Screen4 from "./Components/Screen4";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { cartCountVal } from "./Components/utils";

const App=()=>{
    const[cartcount,setCartCount]=useState("0")
    const [showCart,setShowCart] = useState(false);
    const cartItem = () => {
        setCartCount(cartcount+1);
    }
    const cartBill = () => {
        setShowCart(true);
    }
    const cartDec = () => {
        if(cartcount != 0){
            setCartCount(cartcount-1);
        }
        
    }
    useEffect(()=>{

        cartCountVal(setCartCount)
    },[])
    return(
        <div>
            

            <BrowserRouter>
            
            <Screen1 cartcount={cartcount} cartBill={cartBill}></Screen1> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/screen2" element={<Screen2 cartItem={cartItem} showCart={showCart} cartDec={cartDec} setCartCount={setCartCount} cartcount={cartcount}/>}></Route>
                {/* <Route path="/screen3" element={<Screen3/>}></Route> */}
            </Routes>
            
            </BrowserRouter>
            {/* <Screen4></Screen4> */}
            {/* <Home/> */}
          
            
        </div>
    )
}
export default App

// const App = () => {
//     const [cartCount, setCartCount] = useState(0);
//     const [showCart, setShowCart] = useState(false);

//     const cartItem = () => {
//         setCartCount(cartCount + 1);
//     };

//     const cartBill = () => {
//         setShowCart(true);
//     };

//     const cartDec = () => {
//         if (cartCount !== 0) {
//             setCartCount(cartCount - 1);
//         }
//     };

//     return (
//         <div>
//             <BrowserRouter>
//                 <Screen1 cartCount={cartCount} cartBill={cartBill}></Screen1>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route
//                         path="/screen2"
//                         element={<Screen2 cartItem={cartItem} showCart={showCart} cartDec={cartDec} />}
//                     />
//                     {/* <Route path="/screen3" element={<Screen3/>}></Route> */}
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;
