import { useState } from 'react'
import Square from "./Components/Square";
import './App.css'

function App() {
  const [board, setBoard] = useState(["","","","" ,"","","","",""])

  return (
    <div className='App'>
      <div className="board">
          <div className="row">
            <Square val={board[0]} 
            chooseSquare={() =>
             {alert(0)}}/>
          </div>
          <div className="row">
          <Square val={board[1]}
           chooseSquare={() => 
           {alert(1)}}/>
          </div>
          <div className="row">
          <Square val={board[2]}
           chooseSquare={() => 
           {alert(2)}}/>
          </div>
      </div>
    </div>
  )
}

export default App
