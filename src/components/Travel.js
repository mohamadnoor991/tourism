import React from "react"
// import data from "../data"

export default function Travel(props){
  let v
  if (props.visited === "true"){
    v="Visited"
  }else {  v= "Not visited"}
    
    return(
        <div className="travel">
        <div className="travel-title">
        <h3>{props.location}</h3>
        <h2>{props.title}</h2>
        
        <img src={props.googlepin} className="travel-pin"/>
  
        <a href={props.googleMapsUrl}><spain>view on google</spain></a>
        </div>

        <div>
          { v &&
        <div className="card--badge">{v}</div>
          }
          <img className="travel-img"      
        src= {props.imageUrl}/>
          </div>
        <div className="travel-info">
        <p>{props.description}</p>
        <hr/>
        <span>Start Date: {props.startDate}</span>
        
        <span>End Date: {props.endDate}</span>
        </div>
        </div>        
    )
}

      
    
        