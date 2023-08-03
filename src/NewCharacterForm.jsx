import { useState } from "react"

export function NewCharacterForm({ addCharacter }) {
  const [newCharacterName, setNewCharacterName] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    if (newCharacterName === "") return

    addCharacter(newCharacterName)

    setNewCharacterName("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Character name</label>
        <input 
          value={newCharacterName} 
          onChange={e => setNewCharacterName(e.target.value)} 
          type="text" 
          id="item" 
        />
      </div>
      <button className="btn">Create character</button>
    </form>
  )
}