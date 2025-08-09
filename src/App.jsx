import React from 'react'
import LandingPage from './component/LandingPage'
import Navbar from './component/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
import LoginPage from './component/LoginPage'
import RegisterPage from './component/RegisterPage'
import Addnewtask from './component/Addnewtask'
import Showtasks from './component/Showtasks'
import Footer from './component/Footer'
import Protected from './component/Protected'
import HeroPage from './component/HeroPage'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const userId = useSelector((state) => state.user?.user?._id)

  return (
    <div className="w-full bg-black flex justify-center">
      <div className="w-full max-w-[1280px]">
        {/* Navbar */}
        <div className="fixed top-2 w-full max-w-[1280px] mx-auto z-50 backdrop-blur-md bg-[#33333380] rounded-lg shadow-md flex items-center  h-14">
          {userId ? (
            <Navbar />
          ) : (
            <div className="flex justify-between items-center w-full">
              <Link to="/">
                <h1 className="text-white text-2xl font-bold">Chronotrox</h1>
              </Link>
              <Link
                to="/login"
                className="text-white text-lg font-semibold hover:underline"
              >
                Login
              </Link>
            </div>


          )}
        </div>

        {/* Main Content */}
        <div className="w-full min-h-screen pt-[60px] text-white flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/addtask" element={<Protected Element={Addnewtask} />} />
              <Route path="/home" element={<Protected Element={HeroPage} />} />
              <Route path="/showtasks" element={<Protected Element={Showtasks} />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
