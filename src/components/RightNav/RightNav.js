import UploadBtn from "../UploadBtn/UploadBtn"
import NavBtn from "../NavBtn/NavBtn"
import User from "../User/User"
export default function RightNav() {
    return (
        <div style={{
            "display":"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <UploadBtn />
            <NavBtn nameClass="fa-solid fa-paper-plane" name="Messages"/>
            <NavBtn nameClass="fa-solid fa-message" name="Inbox"/>
            <User />
        </div>
    )
}