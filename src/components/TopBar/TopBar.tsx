import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/pixelscribe.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"
import "./TopBar.css"

export default function TopBar(){
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        setMenuVisible((prev) => !prev)
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuVisible(false);
        }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        
        return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, []);


    return(
        <header className = "main-container">
            <div className = "logo-container">
                <img src = { Logo }  alt = "logo"/>
            </div>
            
            <div className="userContainer">
                <button className="user-button" onClick = {handleClick}>
                    <FaUserCircle/>
                </button>
                {menuVisible && (
                    <nav>
                        <ul>
                            <li>
                                <Link to = "/" className="login-link">
                                    <span> Sign Out </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>


        </header>
    )
}