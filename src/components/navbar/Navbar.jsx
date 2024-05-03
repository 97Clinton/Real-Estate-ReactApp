import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
 
function Navbar() {
    const [open, setOpen] = useState(false);

    const user = true;

    return (
        <nav>
            <div className="left">
                <a href="" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>ClinEstate</span>
                </a>
                <a href="/">Home</a>
                <Link to={'/list'}><a href="/">Apartments</a></Link>
                <a href="/">Contact</a>
                <a href="/">About</a>
            </div>
            <div className="right">
                { user ? (
                    
                    <div className="user">
                        <img src="/mine.png" alt="" ></img>
                        <span>Atayero Clinton</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div> 
                    ) : (
                        <> <a href="/">Sign in</a>
                            <a href="/" className="register">Sign up</a> 
                        </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prevValue) => !prevValue)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    
                    <a href="/">Home</a>
                    <Link to={'/list'}><a href="/" onClick={() => setOpen(false)}>Apartments</a></Link>
                    <Link to={'/profile'}><a href="/" onClick={() => setOpen(false)}>Profile</a></Link>
                    <a href="/">Contact</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;