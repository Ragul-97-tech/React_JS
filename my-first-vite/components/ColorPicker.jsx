import { useState } from "react"

export function ColorPicker({color, setColor}) {
    const inputStyle = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        cornerShape: "scoop",
        border: "2px solid #fff",
        margin: "0 auto"
    }
    return (
        <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px"
            }}>
            <input type="color" style={inputStyle} value={color} onChange={e => setColor(e.target.value)} />
            <p>Selected Color: <strong style={{textTransform: "uppercase"}}>{color}</strong></p>
        </div>
    )
}