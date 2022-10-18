import style from "./uploadBtn.module.css"
import { Link } from "react-router-dom"

export default function UpdloadBtn() {
    return (
        <Link to="/upload" className={style.uploadBtn}>
            <i style={{
                "marginRight":"8px"
            }} className="fa-solid fa-plus"></i>
            Upload
        </Link>
    )
}