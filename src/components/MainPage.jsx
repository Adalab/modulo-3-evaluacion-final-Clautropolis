import CharactersList from "./CharactersList"
import Filters from "./filters/Filters"


function MainPage({characters, setInputName}) {
  return (
    <div>
      <Filters setInputName={setInputName}/>
      <CharactersList characters={characters}/>
    </div>
  )
}

export default MainPage