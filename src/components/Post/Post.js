import style from './Post.module.css'
import Video from '../Video/Video'
export default function Post({name, nickName, title, sound, play}) {

    return (
        <>
            <div className={style.wrap} >
                <div>
                    <img 
                        style={{
                            width:"60px" , 
                            height:"60px"  ,
                            marginLeft:"20px"
                        }} 
                        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' 
                        alt='user'
                    />
                </div>
                <div 
                    style={{
                        flexGrow:"1",
                        padding:"10px",
                    }} 

                >
                    <h4 style={{display:"inline-block", marginRight:"10px"}}>{nickName}</h4>
                    <p style={{display:"inline-block", fontSize:"14px"}}>{name}</p>
                    <p style={{fontSize:"18px",marginTop:"10px"}}>
                        {title}
                    </p>
                    <p style={{fontSize:"16px",marginTop:"10px",fontWeight:"700"}}>
                        <i className="fa-solid fa-music" style={{marginRight:"10px"}}></i>
                        {sound}
                    </p>
                    <Video play = {play} src = "https://v16-webapp.tiktok.com/2eff3bfd8c2f4ca5a2acd105827c3d92/633ecb45/video/tos/useast2a/tos-useast2a-pve-0037-aiso/21254f536d9d4799a577687303c3dcbd/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2472&bt=1236&cs=0&ds=3&ft=eXd.6Hk_Myq8ZwUp3he2Nm0G2l7Gb&mime_type=video_mp4&qs=0&rc=aGg5PDdlOTppOjU2ZTg7OEBpanhsaDw6ZnMzZjMzZjgzM0BfNi00Xy1eNjQxM2FhNWNjYSNuZF4wcjRvbnJgLS1kL2Nzcw%3D%3D&l=202210060634020102440940461FAC4327&btag=80000"/>
                </div>
                <div>
                    <button className={style.followBtn}>Follow</button>
                </div>
            </div>
            <div className={style.bottomLine}></div>
        </>
    )
}