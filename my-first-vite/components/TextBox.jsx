import { useState } from "react"

export function TextBox() {
    const [text, setText] = useState("");
    
    const textAreaStyle = {
        width: "300px",
        height: "150px",
        borderRadius: "12px",
        padding: "10px",
        fontSize: "16px",
        resize: "vertical",
        border: "2px solid"
    }

    const previewBoxStyle = {
        maxWidth: "300px",
        overflow: "auto",
        background: "#fff",
        height: "100px",
        borderRadius: "12px",
        color: "black",
        padding: "10px"
    }

    return (
        <div style={{display: "flex", placeContent: "center", flexDirection: "column", textAlign: "center", gap: "12px"}}>
            <h1>Text Box</h1>
            <textarea name="textBox" style={textAreaStyle} value={text} id="textBox" onChange={e => setText(e.target.value)}></textarea>
            <h1>Preview Box</h1>
            <pre style={previewBoxStyle}>{text}</pre>
        </div>
    )
}