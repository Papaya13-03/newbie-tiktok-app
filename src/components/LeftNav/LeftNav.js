import style from "./LeftNav.module.css"
import NavBar from "../NavBar/NavBar"
import Suggest from "../Suggest/Suggest"
import Follow from "../Follow/Follow"
import Discover from "../Discover/Discover"

export default function LeftNav() {
    return (
        <div className={style.wrap} >
            <NavBar />
            <Suggest />
            <Follow />
            <Discover />
        </div>
    )
}