import React from 'react'

export default function Navbar(props) {
  return (
    <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
  <a classNameName="navbar-brand" href="#">{props.title}</a>
  <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span classNameName="navbar-toggler-icon"></span>
  </button>

  <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    <ul classNameName="navbar-nav mr-auto">
      <li classNameName="nav-item active">
        <a classNameName="nav-link" href="#">Home <span classNameName="sr-only">(current)</span></a>
      </li>
      <li classNameName="nav-item">
        <a classNameName="nav-link" href="#">Link</a>
      </li>
      <li classNameName="nav-item dropdown">
        <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
          <a classNameName="dropdown-item" href="#">Action</a>
          <a classNameName="dropdown-item" href="#">Another action</a>
          <div classNameName="dropdown-divider"></div>
          <a classNameName="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li classNameName="nav-item">
        <a classNameName="nav-link disabled" href="#">{props.aboutText}</a>
      </li>
    </ul>
    {/*<form classNameName="form-inline my-2 my-lg-0">
      <input classNameName="form-control mr-sm-5" type="search" placeholder="Search" aria-label="Search"/>
      <button classNameName="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form>*/}
    <div className="form-check form-switch text-light">
       <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
    </div>
  </div>
</nav>
  )
}
