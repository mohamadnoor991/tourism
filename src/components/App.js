import React from "react"
import Title from "../components/Title"
import Travel from "../components/Travel"
import data from "../data"

export default function App(){
      const cards = data.map(item => {
        return (
       
            <Travel
                key={item.id}
               {...item}
                
            />
        )
        
    })  
   
    return(
        <div>
        <Title/>
              <section className="travels">
                {cards}
            </section>
        </div>
    )
}
