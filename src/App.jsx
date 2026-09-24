import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <main>
        <ProfileCard />
      </main>
    </div>
  )
}

export default App
