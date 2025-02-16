import './Header.css'

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <> 
    <nav  className="navbar navbar-expand-lg sticky-top text-info "  style={{ backgroundColor: '#ffc0cb' }}> 
          <div className="container">
            <Link  to="/" className="navbar-brand" ><h1>Amine Triki</h1></Link>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#main" 
            aria-controls="main" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link  to="/" className="nav-link  p-2 p-lg-3">Home</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/weather" className="nav-link  p-2 p-lg-3">Weather</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link  p-2 p-lg-3">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link to="/terms_of_service" className="nav-link  p-2 p-lg-3">Terms of Service</Link>
                </li>
                <li className="nav-item">
                  <Link to="/privacy_policy" className="nav-link  p-2 p-lg-3">Privacy Policy</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link  p-2 p-lg-3">Contact Me</Link>
                </li>
              </ul>
            
            </div>
            
          </div>
    </nav>
    </>
  )
}

export default Header