import './App.css'
import Welcome from './Component/Lecture_001/firstComp'
import Header from './Component/Lecture_001/header'
import Greeting from './Component/Lecture_001/Greetings'
import ProductCard from './Component/Lecture_001/ProductCard'
import LoginState from './Component/Lecture_002/LoginStatus'
import ProductStatus from './Component/Lecture_002/ProductStatus'
import ShowHidePassword from './Component/Lecture_002/ShowHidePass'
import InputChangeTracker from './Component/Lecture_003/InputChangeTracker'
import MouseHoverEffect from './Component/Lecture_003/MouseHoverEffect'
import Counter from './Component/Lecture_003/Counter'
import ColorPicker from './Component/Lecture_003/ColorPicker'

import SyncTextChanges from './Component/Lecture_005/SyncTextChanges'
import ThemeSwitcher from './Component/Lecture_005/ThemeSwitcher'

function LectureOne() {
  const topicNames = ["JSX", "Props", "State", "Hooks"];
  const products = [
    {name: "Joystick", price: 4_999, stock: 5}, 
    {name: "Laptop", price: 59_999, stock: 3}, 
    {name: "Samsung Galaxy", price: 64_999, stock: 2}
  ];

  return (
    <>
      <Header></Header>
      <Welcome></Welcome>
      <Greeting></Greeting>
      <ul>
        {topicNames.map((topic, idx) => <li key={idx}>{topic}</li>)}
      </ul>
      <ProductCard products={products}></ProductCard>
      <LoginState></LoginState>
      <ProductStatus></ProductStatus>
      <ShowHidePassword/>
      <InputChangeTracker/>
      <MouseHoverEffect/>
      <Counter/>
      <ColorPicker/>

      <SyncTextChanges/>
      <ThemeSwitcher/>
    </>
  )
}

export default LectureOne;
