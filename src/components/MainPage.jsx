import CharactersList from "./CharactersList"
import Filters from "./filters/Filters"


function MainPage({characters}) {
  return (
    <div>
        <CharactersList characters={characters}/>
        <Filters/>
    </div>
  )
}

export default MainPage