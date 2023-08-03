import { CharacterItem } from "./CharacterItem"

export function CharacterList({ character, toggleCharacter, deleteCharacter }){
  return (
    <ul className="list">
        {character.length === 0 && "No characters"} {/*If no character exist, print*/}
        {character.map(character => {
          return (
            <CharacterItem 
              {...character}
              key={character.id}
              toggleCharacter={toggleCharacter}
              deleteCharacter={deleteCharacter}
            />
          )
        })}
      </ul>
  )
}