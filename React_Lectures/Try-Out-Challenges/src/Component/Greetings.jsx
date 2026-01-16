
function Greeting() {
    return (<div style={{textAlign: "center", lineHeight: "2"}}>
        <h2>🌸 Good {new Date().getHours() < 8 ? "Morning" : new Date().getHours() < 16 ? "Afternoon" : "Evening"} 🌸</h2>
        <p>{new Date().toDateString() + " " + new Date().toTimeString().split(" ")[0]}</p>
    </div>)
}

export default Greeting;