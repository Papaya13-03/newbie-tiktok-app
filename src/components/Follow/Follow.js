import Account from "../Account/Account"
import style from './follow.module.css'
import { useState, useCallback } from "react";
export default function Follow() {
    const [num, setNum] = useState(5);
    const [see, setSee] = useState('See more');
    const hehe = useCallback(()=>{
        let arr = [];
        for(let i = 1 ; i <= num ; ++i) {
            arr.push(
                <Account 
                    follow
                    key = {i}
                    blueTick
                    userNickName = "NickName"
                    userName = "Name"
                    like = "13"
                    follower = "100M"
                />
            );
        }
        return arr;
    },[num])
    return (
        <div className={style.wrap + " " +  style.prevLine}>
            <p style={{
                fontSize:"14px",
                color:"rgb(136, 136, 136)"
            }}>Following accounts</p>
            {
                hehe()
            }
            <p 
                style={{
                    color:"rgb(254,44,85)",
                    fontSize:"14px",
                    cursor: "pointer",
                    fontWeight:"700"
                }}
                onClick={()=>{
                    if(see === "See more"){
                        setSee("See less");
                        setNum(20);
                    }
                    else {
                        setSee('See more');
                        setNum(5);
                    }
                }}
            >
                {see}
            </p>
        </div>
    )
}