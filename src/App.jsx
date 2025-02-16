import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle' 

import './App.css'
import { Header , Footer } from './components/index'
import { Home , Weather , Projects , Contact , Privacy , Terms} from './pages/index'




function App() {
 

  return (
    <>
      <Router basename={'/'}>
        <Header/>
        
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/weather' element ={<Weather/>} />
          <Route path='/contact' element ={<Contact/>} />
          <Route path='/projects' element ={<Projects/>} />
          <Route path='/privacy_policy' element ={<Privacy/>} />
          <Route path='/terms_of_service' element ={<Terms/>} />
          
        
        </Routes>
        
        <Footer/>
      </Router>
      
      
    </>
  )
}

export default App
