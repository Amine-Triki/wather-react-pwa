import './Footer.css'

let year = new Date().getFullYear() ;

const Footer = () => {
  return (
    
    <>
      <footer className="footer py-3 "style={{ backgroundColor: '#ffc0cb' }}  >
        <p id="Rights" className="container text-center mb-0">2023 -- {`${year} © Amine Triki || All Rights Reserved`} </p>
    </footer>
    </>
  )
}

export default Footer