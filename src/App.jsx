import { Routes, Route } from "react-router-dom"
import { PostProvider } from "./context/PostContext"
import { UserProvider } from "./context/userContext"
import { useTheme } from "./context/ThemeContext"

//import { useState } from 'react'
//import './App.css'
import Header from "./components/Header"
//import ProfileCard from "./components/ProfileCard"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import About from "./pages/About"
import WeatherPsge from "./pages/WeatherPage"
import CurrencyPage from "./pages/CurrencyPage"

function App() {
  // const [count, setCount] = useState(0)

  const {theme} = useTheme();
  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <main>
        <UserProvider>
          <PostProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
              <Route path="/weather" element={<WeatherPsge />} />
              <Route path="/currency" element={<CurrencyPage />} />
            </Routes>
          </PostProvider>
        </UserProvider>
      </main>
    </div>
  )
}

export default App
