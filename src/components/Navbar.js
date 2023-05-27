import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-${this.props.mode==="dark"?"dark":"light"} navbar-expand-lg bg-${this.props.mode}`} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsToday</Link>
                <div className={`collapse navbar-collapse bg-${this.props.mode}`} id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/business">business</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/entertainment">entertainment</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/general">general</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/health">health</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/science">science</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/sports">sports</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/technology">technology</Link>
                      </li>
                  </ul>
                </div>
                <div className="container">
                    <div className="form-check form-switch d-flex align-items-center">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                      <lord-icon
                          src="https://cdn.lordicon.com/tgnqhsfe.json"
                          trigger="hover"
                          colors="primary:#08a88a,secondary:#121331"
                          style={{width:'40px',height:'40px'}}>
                      </lord-icon></label>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
