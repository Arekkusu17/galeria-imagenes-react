import React from "react";

const Header =(props)=>{
  return(
    <header>
      <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand ps-3 mb-0 h1">{props.titulo}</span>
      </div>
    </nav>
    </header>
  )
}

export default Header