import { CharacterItem } from "./CharacterItem"

export function CharacterList({ character }){
  return (
    <ul className="list">
        {character.length === 0 && "No characters"} {/*If no character exist, print*/}
        {character.map(character => {
          return (
            <CharacterItem 
              id={character.item} 
              completed={character.completed} 
              title={character.title} 
              key={character.id} 
            />
          )
        })}
      </ul>
  )
}