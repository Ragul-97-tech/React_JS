import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GreetingCard from '../components/StudentCard'
import { FirstComponent, ReactClub } from '../components/StudentCard'
import { StudentCard } from '../components/StudentCard'
import { CounterCard } from '../components/StudentCard'

import { ColorPicker } from '../components/ColorPicker'
import { ColorBox } from '../components/ColorBox'

import { TextBox } from '../components/TextBox'
import { MouseEffect } from '../components/MouseHoverEffect'

function App() {
  
  const products = [
    {name: "Samsung Galaxy", price: 12_000, stock: 5},
    {name: "Keyboard", price: 2_000, stock: 7},
    {name: "Joystick", price: 5_000, stock: 2}
  ]
  
  const topicNames = ["JSX", "Props", "State", "Hooks"];

  const [color, setColor] = useState("#df13d5");

  console.log("hi everyone")

  return (
    <>
      <TextBox></TextBox>
      <MouseEffect></MouseEffect>
      {/* <ColorBox color={color}></ColorBox>
      <ColorPicker color={color} setColor={setColor}></ColorPicker>
      <CounterCard padding={"12rem"}>Increment</CounterCard>
      <StudentCard>{"hello"}</StudentCard>
      <ReactClub></ReactClub>
      <FirstComponent></FirstComponent>
      <GreetingCard></GreetingCard>
      <ul>
        {topicNames.map((ele, idx) => <li key={idx}>{ele}</li>)}
      </ul> */}
    </>
  )
}

export default App
