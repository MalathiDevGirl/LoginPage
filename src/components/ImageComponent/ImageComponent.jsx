import SideImage from "../../assests/side-image.png";
import './imageContainer.style.css';
const ImageComponent = () => {
    return (<div className="image-container" >
        <img src={SideImage} alt="Logo"/>
    </div>);
}
export default ImageComponent;