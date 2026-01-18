import { useState } from "react";

export default function ColorPicker() {
    const [colorCode, setColor] = useState("#ffffff");
    const divStyle = { minWidth: "150px", minHeight: "150px", borderRadius: "12px", fontSize: "20px", backgroundColor: colorCode, color: "black", padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", cursor: "pointer", transition: "all ease-in-out 0.3s" };
    return (
        <div>
            <div style={divStyle}>{colorCode}</div>
            <input style={{ color: colorCode, backgroundColor: "currentColor", border: "1px solid white", borderRadius: "50%", cornerShape: "scoop", padding: "1.5rem" }} type="color" onChange={e => setColor(e.target.value)}/>
            <span>{colorCode}</span>
        </div>
    );
}