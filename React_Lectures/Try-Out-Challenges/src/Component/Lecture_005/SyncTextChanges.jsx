import { useState } from "react";
import CustomTextArea from "../CustomTextArea";
import CustomPreviewBox from "../CustomPreviewBox";

export default function SyncTextChanges() {
    const [text, setText] = useState("");
    function handleText(e) { setText(e.target.value) }
    return (
        <div style={{display: "flex", placeContent: "center", flexDirection: "column", gap: "10px"}}>
            <CustomTextArea context={text} actionSync={handleText} />
            <CustomPreviewBox context={text} />
        </div>
    );
}