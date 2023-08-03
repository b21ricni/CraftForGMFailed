export function CharacterItem({ completed, id, title, toggleCharacter, deleteCharacter }) {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={e => toggleCharacter(id, e.target.checked)}
        />
        {title}
      </label>
      <button 
        className="btn btn-danger"
        onClick={e => deleteCharacter(id)}
      >X</button>
    </li>
  )
}