import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    return (
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>

            {/* 
            
            SINGLE DARK MODE

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlhtmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
            </div> */}

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Dark Mode
              </button>

              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

                <li>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{props.toogleMode('blue')}}/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Dark Blue
                      </label>
                  </div>
                </li>

                <li>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{props.toogleMode('red')}}/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Dark Red
                      </label>
                  </div>
                </li>

                <li>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{props.toogleMode('green')}}/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Dark Green
                      </label>
                  </div>
                </li>

                <li><hr className="dropdown-divider"/></li>

                <li>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{props.toogleMode('light')}}/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Light Mode
                      </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'About'
}

