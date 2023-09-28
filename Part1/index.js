let player = 'X'

const play = (evt) => {
    const targetSquare = evt.target
    targetSquare.innerText = player
    if (player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
    const curPlay = document.querySelector("#current-player")
    curPlay.innerText = player

    let winner = calculateWinner()
    if (winner) {
        alert (`${winner} is the winner!`)
    } else if (boardFull()) {
        alert `Tie game!`
    }

}
const squares = document.querySelectorAll('.square')

const calculateWinner= () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for (let line of lines){
        const [a, b, c,] = line
        const squareA = squares[a].innerText
        const squareB = squares[b].innerText
        const squareC = squares[c].innerText

        if (squareA !== '' && squareA === squareB && squareA === squareC) {
            return squareA
        }
      }
      return undefined
}

const boardFull = () => {
    for (let square of squares) {
        if (square.innerText === ''){
            return false
        }
    } return true
}
for (let sqr of squares) {
    sqr.addEventListener('click', (evt) => play(evt))
}