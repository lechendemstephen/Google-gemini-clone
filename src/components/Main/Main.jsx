import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini Clone</p>
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
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat eveniet molestiae accusamus enim quas, 
                    
                </p>
            </div>
        </div>
     
    </div>
  )
}

export default Main
