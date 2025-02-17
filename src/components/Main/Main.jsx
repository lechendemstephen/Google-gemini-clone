import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon } alt="" />


        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Lechendem. </span></p>
                <p>How can i help you today ? </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>How i succeeded in getting my first IT Job in the USA</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>How to learn Django</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>How to learn python </p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>How to learn Data Science</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Main
