import style from "./searchbox.module.css"
export default function SearchBox() {
    return (
        <>
            <div className={style.searchBox}>
                <input 
                    type="text"
                    className={style.searchInput} 
                    placeholder="Search account and videos"
                />
                <button className={style.searchBtn}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </>
    )
}