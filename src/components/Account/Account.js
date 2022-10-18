import { useCallback, useRef } from "react"
import style from "./Account.module.css"

export default function Account({blueTick, userName, userNickName, follower, like, follow}) {
    
    let moreDetail = useRef();
    let timeOut;
    const handleMouseEnter = useCallback((e)=>{
        timeOut = setTimeout(()=>{
            if(!follow)moreDetail.current.style.display = 'block';
        },1000)
    });
    const handleMouseLeave = useCallback((e)=>{
        moreDetail.current.style.display = 'none';
        clearTimeout(timeOut);
    });

    return (
        <div 
            className={style.wrap}
            onMouseEnter = {handleMouseEnter}
            onMouseLeave = {handleMouseLeave}
        >
            <div style={{display:"flex", cursor:"pointer"}}>
                <img 
                style={{
                    height:"40px",
                    width: "40px",
                    marginLeft:"5px"
                }}
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
                <div style={{marginLeft:"10px"}}>
                    <h5>{userNickName}</h5>
                    <p style={{fontSize:"12px"}}>{userName}</p>
                </div>
            </div>
            <div className={style.moreDetail} ref={moreDetail}>
                <img 
                style={{
                    height:"40px",
                    width: "40px",
                    marginLeft:"5px",
                    marginTop:"10px",
                    cursor: "pointer"
                }}
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
                <button className={style.followBtn}>Follow</button>
                <h3>{userNickName}</h3>
                <p>{userName}</p>
                <div style={{marginTop:"20px"}}>
                    <span>
                        <span style={{
                            fontWeight:"700",
                        }}>{follower+" "}</span>
                        Followers
                    </span>
                    <span>
                        <span style={{
                            fontWeight:"700",
                            marginLeft:"30px"
                        }}>{like+" "}</span>
                        Likes
                    </span>
                </div>
            </div>
        </div>
    )
}