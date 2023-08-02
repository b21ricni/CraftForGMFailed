import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newCharacterName, setNewCharacterName] = useState("")
  const [character, setCharacter] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setCharacter((currentCharacter) => {
      return [
        ...currentCharacter,
        {id: crypto.randomUUID(), title: newCharacterName, completed: false},
      ]
    })

    setNewCharacterName("")
  }
  
  function toggleCharacter(id, completed){
    setCharacter(currentCharacter => {
      return currentCharacter.map(character => {
        if (character.id === id) {
          return { ...character, completed}
        }

        return character
      })
    })
  }

  function deleteCharacter(id){
    setCharacter(currentCharacter => {
      return currentCharacter.filter(character => character.id !== id)
    })
  }

  return (
    <>
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
      <h1 className="header">Characters</h1>
      <ul className="list">
        {character.length === 0 && "No characters"}
        {character.map(character => {
          return (
            <li key={character.id} >
              <label>
                <input 
                  type="checkbox" 
                  checked={character.completed} 
                  onChange={e => toggleCharacter(character.id, e.target.checked)}
                />
                {character.title}
              </label>
              <button 
                className="btn btn-danger"
                onClick={e => deleteCharacter(character.id)}
              >X</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
