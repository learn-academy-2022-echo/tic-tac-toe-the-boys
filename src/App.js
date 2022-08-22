import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(1)

  const handleGame = (index) => {
    // const winner = calculateWinner(squares)
    let newSquares = [...squares]
    // console.log(index)
    // console.log("Player: " + player)

    // if (winner === "X") {
    //   alert("Winner is: Player 1")
    // } else if (winner === "O") {
    //   alert("Winner is: Player 2")
    // }


      if (player === 1) {
        if (newSquares[index] === "X") {
          alert("You have already marked this square")
        } else if (newSquares[index] === "O") {
          alert(`Player ${player + 1} already marked this square`)
        } else {
          newSquares[index] = "X"
          setSquares(newSquares)
          setPlayer(2)
        }
      }

      if (player === 2) {
        if (newSquares[index] === "O") {
          alert("You have already marked this square")
        } else if (newSquares[index] === "X") {
          alert(`Player ${player - 1} already marked this square`)
        } else {
          newSquares[index] = "O"
          setSquares(newSquares)
          setPlayer(1)
        }
      }

      

    

  }

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

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) => {
        return (
          <Square calculateWinner={calculateWinner} squares={squares} handleGame={handleGame} value={value} index={index}/>
        )
      })}
      </div>
    </>
  )
}

export default App