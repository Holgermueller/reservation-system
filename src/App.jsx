import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Resume from "./pages/Resume"
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
    <Header/>
     <Nav/>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='about'  element={<About/>}></Route>
      <Route path='resume'  element={<Resume/>}></Route>
      <Route path='portfolio'  element={<Portfolio/>}></Route>
      <Route path='contact'  element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
