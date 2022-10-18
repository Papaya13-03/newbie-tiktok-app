import { useCallback } from 'react'
import style from './discover.module.css'

const arrDesc = [
    "On top",
    "Oi troi oi cuu toi troi oi cuu toi",
    "Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi",
    "san sang thay doi",
    "lai mot ngay nua sap troi qua roi",
    "you is better with a someone new",
    "i'm stronger, i'm smarter, i'm better"
]

export default function Discover() {

    const getDesc = useCallback(
        ()=>{
            let arr = [];
            let loop = Math.random()*10 + 1
            for(let i = 1 ; i <= loop ; ++i) {
                arr.push(
                    <Tag    
                        key={i}
                        type={parseInt(Math.random()*3)} 
                        desc = {arrDesc[parseInt(Math.random()*6)]}
                    />
                )
            }
            return arr
        }
    )

    return (
        <div className={`${style.wrap} ${style.prevLine}`}>
            <p style={{
                fontSize:"14px",
                color:"rgb(136, 136, 136)",
                marginBottom:"10px"
            }}>Discover</p>
            {
                getDesc()
            }
        </div>
    )
}

function Tag({type, desc}) {   
    function check(type) {
        if(type <= 1)
            return <i style={{marginRight:"5px"}} className="fa-solid fa-hashtag"></i>
        return <i style={{marginRight:"5px"}} className="fa-solid fa-music"></i>
    }
    return (
        <span style={{
            maxWidth:"90%",
            display:"inline-block",
            whiteSpace:"nowrap",
            textOverflow:"ellipsis",
            backgroundColor:"rgb(240, 238, 238)",
            padding:"2px 5px",
            margin:"2px 10px",
            borderRadius:"8px",
            cursor:"pointer",
            overflow:"hidden"
        }}>
            {
                check(type)
            }
            {desc}
        </span>
    )
}