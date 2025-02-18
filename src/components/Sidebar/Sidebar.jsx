import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { assets } from '../../assets/assets';
import './Sidebar.css';

const Sidebar = () => {
    const { onSent, prevPrompts, setRecentPrompt, setInput, newChat } = useContext(Context);
    const [extended, setExtended] = useState(false);

    const loadPrompt = async (prompt) => {
        setInput(prompt);
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => (
                            <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Sidebar;