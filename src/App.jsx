import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle' 

import './App.css'
import { Header , Footer } from './components/index'
import { Home , Weather , Projects , Contact} from './pages/index'



function App() {
 

  return (
    <>
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/weather' element ={<Weather/>} />
          <Route path='/contact' element ={<Contact/>} />
          <Route path='/projects' element ={<Projects/>} />
          
        
        </Routes>
        
        <Footer/>
      </Router>
      
      
    </>
  )
}

export default App
