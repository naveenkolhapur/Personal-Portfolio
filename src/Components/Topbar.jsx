import React, {useState} from 'react'
import './Topbar.css';

function Topbar() {

    const [show,setShow] = useState(false);
    const [navbar,setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 90){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

  return (
   <>
    <section className='topbar-section'>
        <nav className={navbar ? "navbar fixed-top navbar-expand-lg navbar-light active" : "navbar fixed-top navbar-expand-lg navbar-light"}>
            <div className="container">
                <a className="navbar-brand" href="#"><img src='./Images/logo.png' height="60px" width="60px"/></a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#Home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#About">About Me</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
   </>
  )
}

export default Topbar