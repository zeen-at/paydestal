
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index path='/' element={<Home />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
