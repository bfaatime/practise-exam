import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import MainLayout from './componenets/mainlayout'
import Add from './pages/Add'
import Favorites from './pages/Favorites'
import './App.css'
import Home from './pages/Home'
import Basket from './pages/Basket'
import Login from './pages/Login'
import Shop from './pages/Shop'
import NotFound from './componenets/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/add" element={<Add/>}/>
         <Route path="/favorites" element={<Favorites/>}/>
         <Route path="/basket" element={<Basket/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path='/shop' element={<Shop/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
