import { useState } from "react"
import "./styles.css"
import { NewCharacterForm } from "./NewCharacterForm"
import { CharacterList } from "./CharacterList"

export default function App() {
  const [character, setCharacter] = useState([])

  function addCharacter(title){
    setCharacter((currentCharacter) => {
      return [
        ...currentCharacter,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
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
      <NewCharacterForm addCharacter={addCharacter}/>
      <h1 className="header">Characters</h1>
      <CharacterList 
        character={character} 
        toggleCharacter={toggleCharacter} 
        deleteCharacter={deleteCharacter}
      />
    </>
  )
}
