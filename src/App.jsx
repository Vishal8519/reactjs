import Screen1 from "./Components/Screen1";
import Screen3 from "./Components/Screen3";
import Screen2 from "./Components/Screen2";
import Screen4 from "./Components/Screen4";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Nav";

const App=()=>{
    return(
        <div>
            

            <BrowserRouter>
            
            <Screen1></Screen1> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/screen2" element={<Screen2/>}></Route>
                <Route path="/screen3" element={<Screen3/>}></Route>
            </Routes>
            
            </BrowserRouter>
            {/* <Screen4></Screen4> */}
            {/* <Home/> */}
          
            
        </div>
    )
}
export default App