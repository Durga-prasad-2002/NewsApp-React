import React from 'react'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
const Navbar = (props)=>{
    return (
      <div>
        <nav className={`navbar navbar-${props.mode === "dark" ? "dark" : "light"} navbar-expand-lg bg-${props.mode}`} >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsToday</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse bg-${props.mode}`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
            <div className="container">
              <div className="form-check form-switch d-flex align-items-center">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  <lord-icon
                    src="https://cdn.lordicon.com/tgnqhsfe.json"
                    trigger="hover"
                    colors="primary:#08a88a,secondary:#121331"
                    style={{ width: '40px', height: '40px' }}>
                  </lord-icon></label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar
