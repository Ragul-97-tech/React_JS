import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './ToDoInReducer.jsx'
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav>
        <Link to={'/setting'}>Setting</Link>
      </nav>
      <h1>Welcome Home</h1>
    </div>
  )
}

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hi, User!</h1>
      <h2>User Id: {params.sid}</h2>
      <button onClick={navigate("/setting/accounts")}>Go to Accounts</button>
    </div>
  )
}

const NotFound = () => {
  return (
    <h1>Something Went Wrong!</h1>
  )
}

const Setting = () => {
  return (
    <h1>Settings Page</h1>
  )
}

const Accounts = () => {
  return (
    <h1>Account Page</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/setting'>
          <Route path='accounts' element={<Accounts />}></Route>
        </Route>
        <Route path='/profile'>
          <Route path=':sid' element={<Profile />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}
    <Todo />
  </StrictMode>
)
