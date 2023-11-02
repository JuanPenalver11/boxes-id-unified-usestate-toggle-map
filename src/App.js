import boxes from './boxes';
import Box from './component/Box';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [squares, setSquares] = useState(boxes)

 const squareDisplay = squares.map(square => (
   <Box  key={square.id}  on={square.on} handleClick={()=>toggle(square.id)}/>
 )
  )

  function toggle(id){
    setSquares((prevSquares) => prevSquares.map((square)=> square.id === id ? {...square, on:!square.on} : {...square} ))
  }


  return (
    <div className="App">

      {squareDisplay}

      
      
    </div>
  );
}

export default App;
