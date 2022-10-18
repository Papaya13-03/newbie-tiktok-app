import { useEffect, useRef } from "react";
import style from "./Video.module.css"
export default function Video({src, play}) {
    const videoElement = useRef();
    useEffect(()=>{
        if(play)videoElement.current.play();
        else   videoElement.current.pause()
    })
    return (
        <video className={style.video} controls ref={videoElement} loop>
            <source src={src} ></source>
        </video>
    ) 
}