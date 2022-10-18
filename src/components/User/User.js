import style from "./user.module.css"
import { useRef } from "react";

export default function User() {
    const userNav = useRef();
    var hi;
    function handleMouseIn() {
        userNav.current.style.display = "block";
        clearTimeout(hi);
    }
    function handleMouseOut() {
        hi = setTimeout(()=>{
            userNav.current.style.display = "none";
        },1000)
    }
    return (
        <div
            className={style.wrap}
            onMouseEnter = {handleMouseIn}
            onMouseLeave = {handleMouseOut}
        >
            <img style={{
                width:"40px",
                height:"40px",
                borderRadius:"50%",
                cursor:"pointer",
                display:"inline-block"
            }} alt="img" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <div className= {style.userNav} ref={userNav}>
                <ul>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        View profile
                    </li>
                    <li>
                        <i className="fa-solid fa-coins"></i>
                        Get coins
                    </li>
                    <li>
                        <i className="fa-solid fa-video"></i>
                        Live studio
                    </li>
                    <li>
                        <i className="fa-solid fa-gear"></i>
                        Setting
                    </li>
                    <li>
                        <i className="fa-solid fa-language"></i>
                        Language
                    </li>
                </ul>
            </div>

        </div>
    )
}