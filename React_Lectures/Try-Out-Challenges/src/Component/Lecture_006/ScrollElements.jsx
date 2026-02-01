import { useRef } from "react";

const Images = import.meta.glob("../../assets/*", { eager: true });

export default function ClashRoyale() {
    const archer = useRef(null);
    return (
        <div className="holder">
            <h1>Image Gallery</h1>
            <div className="imageContainer">
                <ul>
                    {Object.values(Images).map((image, idx, imageArr) => {
                        const angle = (360 / imageArr.length * idx);
                        return <li style={{ "--angle": `${angle}deg` }} key={idx}>
                            <img src={image.default} alt={`image-${idx}`} />
                        </li>
                    })}
                </ul>
            </div>
            <div className="scrollButton">
                <button></button>
                <button></button>
            </div>
        </div>
    )
}