import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newCharacter, setNewCharacter] = useState("")
  
  return (
    <>
      <form action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Character name</label>
          <input 
            value={newCharacter} 
            onChange={e => setNewCharacter(e.target.value)} 
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Create character</button>
      </form>
      <h1 className="header">Characters</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className="btn btn-danger">X</button>
        </li>
      </ul>
    </>
  )
}
