import './Contact.css'

import { FaUserLarge } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";


const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    
    <main>
      <section className=" text-center pt-5 pb-5" id="Contact">
      <div className="container">
        <div className="main-title mt-5 mb-5 position-relative">
          <h2>Contact Me </h2>
          <p>Get in touch</p>
        </div>
        <div id="flex" className="d-flex  justify-content-center ">
          <div id="touch">
              <div className="text-start mt-4">
                <h3>
                    Get in touch 
                </h3>
                <p className="mt-4">
                    If you have any questions or proposals, you can simply write to us.<br/> We will answer you as soon as possible.
                </p>
            </div>
            <div className="text-start d-flex justify-content-start align-items-center mt-4">
              <FaUserLarge   />
                <div  className="head ms-1">
                    <span><b>Name :</b></span>
                    <span>Amine Triki</span>
                </div>
            </div>
            <div className="text-start d-flex justify-content-start align-items-center mt-4">
              <RiMapPinLine />
                <div className="head ms-1">
                    <span><b>Address :</b></span>
                    <span>Sakiet Ezzit , Sfax , Tunisia</span>
                </div>
            </div>
            <div className="text-start d-flex justify-content-start align-items-center mt-4">
              <RiMailLine />
                <div  className="head ms-1">
                    <span><b>Email :</b></span>
                    <span>Contact@aminetriki.com.tn</span>
                </div>
            </div>
          </div>
    
          <form className="container mb-5 text-start mt-4" onSubmit={handleSubmit} >
            <div className="row  mb-4">
              <div className="col">
                <label htmlFor="first-name">first name</label>
                <input type="text" className="form-control" id="first-name" placeholder="First name"/>
              </div>
              <div className="col">
                <label htmlFor="last-name">last name</label>
                <input type="text" className="form-control" id="last-name" placeholder="Last name"/>
              </div>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
              </div>
            <div className="form-group mb-4">
              <label htmlFor="subject">subject </label>
              <input type="text" className="form-control" id="subject" placeholder="subject"/>
            </div>
            <button type="submit" className="btn mb-4" style={{ backgroundColor: '#AA7A82' , cursor:'default' }} >Send</button>
          
          
          </form>
    
        </div>
      </div>
    </section>
    </main>
    
  )
}

export default Contact