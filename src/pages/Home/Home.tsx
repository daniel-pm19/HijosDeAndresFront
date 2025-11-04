import ImagesContainer from "../../components/ImagesContainer/ImagesContainer";
import TopBar from "../../components/TopBar/TopBar"
import UploadImage from "../../components/UploadImage/UploadImage";
import "./Home.css"


export default function Home(){
    return(
        <div className="home-container">
            <TopBar/>
            <div className="main-content">
                <div className="upload">
                    <UploadImage/>
                </div>
                <ImagesContainer/>
            </div>
        </div>
    );
}