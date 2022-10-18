import style from "./navbtn.module.css"

export default function NavBtn({nameClass, name}) {
    return (
        <span className={style.navBtn}>
            <i className={nameClass} ></i>
            <div className={style.dropDescription}>
                {name}
            </div>
        </span>
    )
}