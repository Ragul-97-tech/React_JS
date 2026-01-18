import { useState } from "react"

export default function MouseHoverEffect() {
    const divStyle = { minWidth: "150px", minHeight: "150px", borderRadius: "12px", backgroundColor: "white", color: "black", padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", cursor: "pointer", transition: "all ease-in-out 0.3s" }
    const [mouseStyle, setStyle] = useState({backgroundColor: "white"});
    return <div style={Object.assign({}, divStyle, mouseStyle)} onMouseEnter={e => {e.target.textContent = "Mouse Enter"; setStyle({backgroundColor: "coral"})}} onMouseLeave={e => {e.target.textContent = "Mouse Leave"; setStyle({backgroundColor: "white"})}}></div>
}