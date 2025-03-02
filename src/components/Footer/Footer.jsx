import './Footer.css'
import { Link } from "react-router-dom";
let year = new Date().getFullYear() ;

const Footer = () => {
  return (
    
    <>
      <footer className="footer py-3 "style={{ backgroundColor: '#ffc0cb' }}  >
        <p id="Rights" className="container text-center mb-0">2023 -- {`${year} © Amine Triki || All Rights Reserved`} ||<span> <Link to="/terms_of_service" className='text-dark'>Terms of Service</Link>  <Link to="/privacy_policy" className='text-dark' >Privacy Policy</Link></span> </p>
    </footer>
    </>
  )
}

export default Footer