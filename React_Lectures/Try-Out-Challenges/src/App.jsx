import './App.css'
import Welcome from './Component/firstComp'
import Header from './Component/header'
import Greeting from './Component/Greetings'
import ProductCard from './Component/ProductCard'

function App() {
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
    </>
  )
}

export default App;
