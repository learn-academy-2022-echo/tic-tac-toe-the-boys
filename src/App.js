import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

// Player 1 wins XXX
// Player 2 wins XXX
// Player wins on last move XXX
// Alert only pops up on next user click, even after winner is decided.



const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(1)
  const [counter, setCounter] = useState(0)
  // newSquares array will be used to update squares state on each player move.
  let newSquares = [...squares] 

  const handleGame = (index) => {

    if (calculateWinner(squares) === "X") {
      alert("Winner is Player One")
      return
    } else if (calculateWinner(squares) === "O") {
      alert("Winner is Player Two")
      return
    }

    // Counter variable will be compared against length of squares array - 1 to assess if any more moves can be made.
    if(counter === squares.length) {
      alert("Game Over")
    }

      // Player 1 functionality. Switches player state to 2 after turn is over. Adds to counter state if box is clicked. Updates newSquares array at index to "X" and updates squares state with the newSquares array.
      if (player === 1) {
        if (newSquares[index] === "X") {
          alert("You have already marked this square")
        } else if (newSquares[index] === "O") {
          alert(`Player ${player + 1} already marked this square`)
        } else {
          newSquares[index] = "X"
          setSquares(newSquares)
          setCounter(counter + 1)
          setPlayer(2)
        }
      }
      // Player 2 functionality. Switches player state to 1 after turn is over. Adds to counter state if box is clicked. Updates newSquares array at index to "O" and updates squares state with the newSquares array.
      if (player === 2) {
        if (newSquares[index] === "O") {
          alert("You have already marked this square")
        } else if (newSquares[index] === "X") {
          alert(`Player ${player - 1} already marked this square`)
        } else {
          newSquares[index] = "O"
          setSquares(newSquares)
          setCounter(counter+1)
          setPlayer(1)
        }
      }

  }
    // Functionality to define a winner (a certain player connects three in a row).
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
    // Reset button functionality. Resets all states back to their original state.
    const handleReset = () => {
      setPlayer(1)
      setCounter(0)
      setSquares(squares.fill(null))
    }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) => {
        return (
          <Square squares={squares} handleGame={handleGame} value={value} index={index}/>
        )
      })}
      </div>
    <p>Player: {player}</p>
    <div className="button">
    <button onClick ={handleReset}>Reset</button> 
    </div>
    </>
  )
}

export default App