import React from 'react'
import style from "./screen1.module.css"
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  // let navigate = useNavigate()
  

  return (
    <div>
          <section id={style.main}>
            <article>
              <div className={style.Menu}>
                <h1>Welcome to Food's <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen</h1> <br /><br />
                <div className={style.btn}>
                 <button><Link to="/screen2">Go to menu</Link></button>
                </div>

              </div>                   
            </article>
          </section>
  </div>
  )
}

export default Home