import Logo from '../Logo/Logo';
import style from './header.module.css'
import SearchBox from '../SearchBox/SearchBox';
import RightNav from '../RightNav/RightNav';
function Header() {
    return (
        <div className={style.header}>
            <div className={style.wrap}>
                <Logo />
                <SearchBox />
                <RightNav />
            </div>
        </div>
    )
}

export default Header;