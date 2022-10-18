import { Link } from "react-router-dom";
import style from "./logo.module.css"
export default function Logo() {
    return (
        <>
            <Link to="/" className={style.logo}>
                <i 
                    style={{
                        "fontSize":"28px",
                        "marginRight":"10px"
                    }} 
                    className="fa-brands fa-tiktok"></i>
                <h1 
                    style={{
                        "display":"inline-block",
                        "fontSize":"28px"
                    }}>TikTok</h1>
            </Link>
        </>
    )
}