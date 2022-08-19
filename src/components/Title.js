import React from "react"
import x from '../components/images/2.jpg'

export default function Title(){
    return(
        <div className="title">
        <img className="title-logo" src={x}/>
    <div>
     <marquee direction="up">
   <h1 >Choice your  traveling journey</h1>
   </marquee>
   </div>

        <img  className="title-logo" src={x}/>
        
        </div>
    )
}