import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle' 

import './App.css'
import { Header , Footer } from './components/index'
import { Home , Projects , Contact} from './pages/index'



function App() {
 

  return (
    <>
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/Contact' element ={<Contact/>} />
          <Route path='/Projects' element ={<Projects/>} />
          
        
        </Routes>
        
        <Footer/>
      </Router>
      
      
    </>
  )
}

export default App
