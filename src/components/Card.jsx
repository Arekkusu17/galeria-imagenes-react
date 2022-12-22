import React from "react";

const Card=(props)=>{
  return(    
    <div className="card mt-5 mb-5" >
      <img src={props.url} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.info}
        </p>
        <a href={props.url} className="btn btn-primary">
          Ver imagen 
        </a>
      </div>
    </div>
  )
}

export default Card