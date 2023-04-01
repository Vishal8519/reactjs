import{createRoot} from "react-dom/client"
import App from "./App"
// import App from"./App"
// import { BrowserRouter, Route, Switch } from "react-router-dom"
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, 
//     document.getElementById('root')
// )
// import Nav from "./Components/Nav"
createRoot(document.getElementById("root")).render(<App/>)