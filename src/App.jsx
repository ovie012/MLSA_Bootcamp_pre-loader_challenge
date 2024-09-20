import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import PreLoader from './pages/PreLoader'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Privacy from './pages/Privacy'

function App() {
  const [screenLoading, setScreenLoading] = useState(false);
  const [fadeAway, setFadeAway] = useState(false);

  useEffect(() => {
    setScreenLoading(true);

    setTimeout(() => {
      setFadeAway(true);
    }, 13300)

    setTimeout(() => {
      setScreenLoading(false);
    }, 14000)
  }, [])

  return (
    <>
      {screenLoading ? (
        <PreLoader fadeAway={fadeAway} />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Privacy' element={<Privacy />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App


// LEGEND.DEV coded this 