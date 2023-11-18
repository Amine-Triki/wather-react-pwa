import './Footer.css'

let year = new Date().getFullYear() ;

const Footer = () => {
  return (
    
    <>
      <footer className="footer py-3 bg-dark text-white  ">
        <p id="Rights" className="container text-center mb-0">{`${year} © Amine Triki || All Rights Reserved`} </p>
    </footer>
    </>
  )
}

export default Footer