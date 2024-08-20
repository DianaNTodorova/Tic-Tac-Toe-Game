function GameBoard({ onSetPlayer, board }) {
  /*const [symbol, setSymbol] = useState(board);
 function handleSetSymbol(indexRow, indexPlayer) {
    setSymbol((previousBoard) => {
      const updatedBoard = [
        ...previousBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[indexRow][indexPlayer] = activePlayerSymbol;
      onSetPlayer();
      return updatedBoard;
    });
  }*/

  return (
    <ol id="game-board">
      {board.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((playerSymbol, indexCol) => (
              <li key={indexCol}>
                <button
                  onClick={() => onSetPlayer(indexRow, indexCol)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
