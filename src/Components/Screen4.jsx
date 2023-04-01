import style from "./screen4.module.css"
import burger from "./burger.jpeg"
import coke from "./coke.jpeg"
import fries from "./fries.jpeg"
import pepsi from "./pepsi.jpeg"
// import { unstable_HistoryRouter } from "react-router-dom"

const Screen4 = () => {
    return(
        <div id={style.relative}>
             <section id={style.nav}>
                <article>
                    <div className={style.Logo}>
                    <i class="fa-solid fa-utensils" style={{color:"white"}}></i>
                    <h2>&nbsp;&nbsp;Food's Restaurent</h2>
                    </div>
                </article>
              </section>

              <section id={style.main}>
                <article>
                    <div className={style.Menu}>
                        <div>
                            <img src={burger} alt="" height="50%" width="100%"/>
                            <h2>&nbsp;&nbsp;Hamburger</h2>
                            <h4>&nbsp;&nbsp;Price:200</h4><br />
                            <button className={style.add}> + </button>
                            <button className={style.sub}> - </button>

                        </div>
                        <div>
                            <img src={fries} alt="" height="50%" width="100%" />
                            <h2>&nbsp;&nbsp;Fries</h2>
                            <h4>&nbsp;&nbsp;Price:100</h4><br />
                            <button className={style.add}> + </button>
                            <button className={style.sub}> - </button>

                        </div>
                        <div>
                        <img src={coke} alt="" height="50%" width="100%" />
                            <h2>&nbsp;&nbsp;Coke</h2>
                            <h4>&nbsp;&nbsp;Price:50</h4><br />
                            <button className={style.add}> + </button>
                            <button className={style.sub}> - </button>
                        </div>
                        <div>
                        <img src={pepsi} alt="" height="50%" width="100%" />
                            <h2>&nbsp;&nbsp;Pepsi</h2>
                            <h4>&nbsp;&nbsp;Price:50</h4><br />
                            <button className={style.add}> + </button>
                            <button className={style.sub}> - </button>
                        </div>
                       
                       
                    </div>                   
                </article>
              </section>
            <div className={style.absolute}>
                <div>
                    
                </div>

            </div>


        </div>
        
    )
}

export default Screen4