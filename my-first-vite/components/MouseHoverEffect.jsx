
export function MouseEffect() {
    const divStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: "white",
        cursor: "pointer",
        borderRadius: "12px"
    }
    return (
        <div style={divStyle} onMouseEnter={e => e.target.textContent = "Mouse Inside"}></div>
    )
}