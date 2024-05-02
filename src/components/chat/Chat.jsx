import { useState } from "react";
import "./chat.scss";

function Chat() {
    const [chat, setChat] = useState(null);

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={() => (
                    setChat(true)
                )}>
                    <img src="/mine.png" alt="" />
                    <span>Atayero Clinton</span>
                    <p>
                        Lorem ipsum dolor amet...
                    </p>
                </div>
                <div className="message" onClick={() => (
                    setChat(true)
                )}>
                    <img src="/mine.png" alt="" />
                    <span>Atayero Clinton</span>
                    <p>
                        Lorem ipsum dolor amet...
                    </p>
                </div>
                <div className="message" onClick={() => (
                    setChat(true)
                )}>
                    <img src="/mine.png" alt="" />
                    <span>Atayero Clinton</span>
                    <p>
                        Lorem ipsum dolor amet...
                    </p>
                </div>
                
                <div className="message" onClick={() => (
                    setChat(true)
                )}>
                    <img src="/mine.png" alt="" />
                    <span>Atayero Clinton</span>
                    <p>
                        Lorem ipsum dolor amet...
                    </p>
                </div>
                <div className="message" onClick={() => (
                    setChat(true)
                )}>
                    <img src="/mine.png" alt="" />
                    <span>Atayero Clinton</span>
                    <p>
                        Lorem ipsum dolor amet...
                    </p>
                </div>
                <div className="message" onClick={() => (
                    setChat(true)
                )}>
                    <img src="/mine.png" alt="" />
                    <span>Atayero Clinton</span>
                    <p>
                        Lorem ipsum dolor amet...
                    </p>
                </div>
            </div>
            { chat === true && <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="/mine.png" alt="" />
                        Atayero Clinton
                    </div>
                    <span className="close" onClick={() => (
                        setChat(null)
                    )}>X</span>
                </div>
                <div className="centre">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor amet</p>
                        <span>1 hour ago</span>
                    </div>
                    
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    )
};

export default Chat;