import { Routes, Route } from "react-router-dom"
//import { useState } from 'react'
//import './App.css'
import Header from "./components/Header"
//import ProfileCard from "./components/ProfileCard"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import About from "./pages/About"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
