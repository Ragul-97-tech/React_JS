
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {
  useEffect(() => {
    console.log("App is mounting");
    return () => console.log("App is unmounting");
  }, []);

  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => setTime(time => time + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Hello Class</h1>
      <p>Timer: {time}</p>
    </div>
  )
}

export default App
