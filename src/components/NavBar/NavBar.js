import style from "./NavBar.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function NavBar() {
    const [state, setState] = useState(1)
    return (
        <div className={style.wrap}>
            <Link 
                className={`${style.link} ` + (state === 1 ? style.active : "") } 
                to="/"
                onClick={()=>{setState(1)}}
            >
                <i className="fa-solid fa-house"></i>
                For you
            </Link>
            <Link 
                className={`${style.link} ` + (state === 2 ? style.active : "") } 
                to="/"
                onClick={()=>{setState(2)}}
            >
                <i className="fa-solid fa-user-group"></i>
                Following
            </Link>
            <Link 
                className={`${style.link} ` + (state === 3 ? style.active : "") } 
                to="/"
                onClick={()=>{setState(3)}}
            >
                <i className="fa-solid fa-video"></i>
                Livestream
            </Link>
        </div>

    )
}