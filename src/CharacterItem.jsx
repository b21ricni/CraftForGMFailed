export function CharaterItem(completed, id, title) {
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