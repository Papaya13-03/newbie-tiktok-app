import style from './/content.module.css'
import Post from '../Post/Post'
import { useCallback, useRef, useState } from 'react';

export default function Content() {
    const content = useRef();
    const [num, setNum] = useState(10);
    const [play, setPlay] = useState(1);
    const handle = useCallback(
        ()=>{
            const _this = content.current;
            const contentTop = _this.scrollTop;
            const clientHeight = _this.clientHeight;
            if(_this.scrollHeight - _this.scrollTop - _this.clientHeight <= 500){
                setNum(num+5)
            }   
            let cnt = parseInt(contentTop/clientHeight);
            cnt++; 
            if(contentTop%clientHeight >= 600)cnt++;  
            setPlay(cnt);
        },[num]
    )
    const Render = useCallback(
        ()=>{
            const arr = [];
            for(let i = 1 ; i <= num ; ++i) {
                arr.push(
                    <Post 
                        play = {play === i}
                        key={i}
                        name = {i}
                        nickName = "NickName"
                        title = "This is title"
                        sound = "Name of sound"
                    />
                );
            }
            return arr;
        },[num, play]
    )
    return (
        <div className={style.wrap} ref={content} onScroll = {handle}>
            {
                Render()
            }
        </div>
    )
}