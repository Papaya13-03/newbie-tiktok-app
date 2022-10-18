import LeftNav from '../LeftNav/LeftNav'
import Content from '../Content/Content';

function Container() {
    return (
        <div style={{
            maxWidth:"1100px",
            width: "100%",
            height: "calc(100vh - 60px)",
            backgroundColor:"#130324",
            overflow: "hidden",
            display:"flex"
        }}>
            <LeftNav />
            <Content />
        </div>
    )
}

export default Container;