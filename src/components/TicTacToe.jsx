import React, { useState } from 'react'
export default function TicTacToe() {
  const emptyBoard = Array(9).fill(null)
 
  const [board, setBoard] = useState(emptyBoard)
  const [turn, setTurn] = useState('X') 
  
  const [victor, setVictor] = useState(null)


  function findWinner(bd) {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const a = lines[i][0]
      const b = lines[i][1]
      const c = lines[i][2]
      if (bd[a] && bd[a] === bd[b] && bd[a] === bd[c]) {
        return bd[a]
      }
    }
    return null
  }

  function onCellClick(i) {
    if (board[i] || victor) return
    const next = board.slice()
        next[i] = turn
     
        setBoard(next)

    const w = findWinner(next)
    if (w) {

      setVictor(w)
    } 
    
    
    else {
      setTurn(turn === 'X' ? 'O' : 'X')
    }
  }

  function resetGame() {
    setBoard(emptyBoard)
    setTurn('X')
    setVictor(null)
  }

  let statusText = ''
  if (victor) {
         
    
    
    statusText = victor === 'X' ? 'PLAYER 1 WON!' : 'PLAYER 2 WON!'
  } 
  
  else if (board.every(Boolean)) {
    statusText = 'DRAW!'
  } else {
    
    
    
    statusText = turn === 'X' ? "PLAYER 1'S TURN" : "PLAYER 2'S TURN"
  }

  return (
    <div className="container">
      <div className="card">
        <div className="title">TIC-TAC-TOE</div>
        <div className="status">{statusText}</div>

        <div className="grid">
         
               {
               board.map(function (val, idx) {
            return (
              <div
               
              key={idx}
                onClick={function () { onCellClick(idx) }}
                
                  className="cell"
              >
                {val === 'X' ? (


                  <span className="x">X</span>
                ) : val === 'O' ? (



                  <span className="o">O</span>
                ) : null}
                      </div>
            )
              })}
        </div>

        <button className="reset" onClick={resetGame}>RESET</button>
      </div>
    </div>
  )
}
