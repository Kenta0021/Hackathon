import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Sign_up from './pages/Sign_up'
function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='sign_up' element={<Sign_up/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
