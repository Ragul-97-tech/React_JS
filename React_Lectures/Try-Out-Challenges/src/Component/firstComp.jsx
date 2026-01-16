
function Welcome() {
    const welcomeParentStyle = {
        background: "white", 
        padding: "10px", 
        borderRadius: "12px",
        cornerShape: "bevel"
    }
    return (<div style={welcomeParentStyle}><h1 className="gradient-txt">Hello, Class!</h1></div>)
}

export default Welcome;