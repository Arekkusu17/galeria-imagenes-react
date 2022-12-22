import React from "react";

const Footer=(props)=>{
  return(
  <div className="container">
    <footer className="py-3 my-4 text-center">
      <p className="nav justify-content-center d-flex align-content-center  pb-1">Si te gusta apreciar las fotografías que las personas comparten en internet , te invito a visitar la galería en  </p>
      <a href={props.url} className="btn btn-primary mb-3">Picsum</a>
      <p className="text-center border-top pt-3">Arekkusu 17 - Alex Fernández</p>
    </footer>
  </div>
  )
}

export default Footer