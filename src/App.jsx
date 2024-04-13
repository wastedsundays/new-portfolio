// import { useState } from 'react'


import Navigation from './components/navigation'
import MainPage from './pages/MainPage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SinglePage from './pages/SinglePage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path='work' element={<WorkPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='work/slug' element={<SinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
