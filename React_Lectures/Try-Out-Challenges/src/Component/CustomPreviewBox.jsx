
export default function CustomPreviewBox({context}) {
    return <div style={{width: "400px", height: "150px", padding: "0.5rem 1rem", color: "black", backgroundColor: "white", borderRadius: "12px", boxShadow: "0.5px 0.5px 0 3px gray", overflow: "auto", overflowWrap: "break-word"}}>{context}</div>
}