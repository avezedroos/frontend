import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './Pages/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
    <Routes>
       <Route path="/" element={<HomePage/>} />
    </Routes>
    </div>
    </Router>
   
  )
}

export default App
