import React from "react";


function Box(props){



    

    
    return(

        
        <div className="box" key={props.key} style={{backgroundColor: props.on ? "black" : "red"}} onClick={props.handleClick}></div>

      
        
      
        
    )

    

        

    
}



export default Box