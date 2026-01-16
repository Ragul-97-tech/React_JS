

export function ColorBox({color}) {
    const boxStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: color,
        borderRadius: "12px"   
    }
    return (<div style={boxStyle}></div>)
}