import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [namePlayer, setNamePlayer] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, namePlayer);
    }
  }
  function handleChangeName(event) {
    setNamePlayer(event.target.value);
  }
  let playerName = <span className="player-name">{namePlayer}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={namePlayer}
        onChange={handleChangeName}
      ></input>
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}
