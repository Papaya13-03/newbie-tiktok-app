import style from "./Suggest.module.css"
import Account from "../Account/Account";
import { useCallback, useEffect, useState } from "react"


export default function Suggest() {
    const [num, setNum] = useState(5);
    const [see, setSee] = useState('See more');
    const hehe = useCallback(()=>{
        let arr = [];
        for(let i = 1 ; i <= num ; ++i) {
            arr.push(
                <Account 
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
            }}>Suggested accounts</p>
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