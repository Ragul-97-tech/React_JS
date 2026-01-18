import { useState } from "react";

export default function InputChangeTracker() {
    const [textContent, setContext] = useState("");
    return (
        <div style={{display: "flex", placeContent: "center", flexDirection: "column", gap: "10px"}}>
            <h1>Input Change Tracker</h1>
            <textarea name="context" id="context" style={{minHeight: "100px", maxWidth: "400px" , maxHeight: "200px" , resize: "vertical"}} onChange={e => setContext(e.target.value)}></textarea>
            <div style={{width: "400px", height: "150px", padding: "0.5rem 1rem", color: "black", backgroundColor: "white", borderRadius: "12px", boxShadow: "0.5px 0.5px 0 3px gray", overflow: "auto", overflowWrap: "break-word"}}>{textContent}</div>
        </div>
    );
}