import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    if (props.calculateWinner(props.squares) === "X") {
      alert("Winner is Player One")
      return;
    } else if (props.calculateWinner(props.squares) === "O") {
      alert("Winner is Player Two")
      return;
    }

    props.handleGame(props.index)

  }


  return (
    <div className="square" onClick={handleClick}>{props.value}</div>
  )
}
export default Square
