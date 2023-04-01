import style from "./screen3.module.css"


import { billContext} from "./Screen2"
import { useContext } from "react"

const Screen3 = () => {
    const bill = useContext(billContext)
    return(
        <div>
              <section id={style.main}>
                <article>
                    <div className={style.Menu}>
                        <h2>Payable amount <sup>{bill}</sup></h2>
                        {bill}
                        <h1><center>Checkout</center></h1><br />
                       <h2>&nbsp;&nbsp;&nbsp;Thank you for your order.</h2> <br /><br />
                        
                    </div>                   
                </article>
              </section>


        </div>
    )
}
export default Screen3