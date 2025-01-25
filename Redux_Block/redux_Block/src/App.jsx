import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewPost from './ViewPost'
import CreatePost from './CreatePost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/posts' element={<ViewPost />} />
     <Route path='/create' element={<CreatePost />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App