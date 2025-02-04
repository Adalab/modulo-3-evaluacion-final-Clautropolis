import CharactersList from "./CharactersList"
import Filters from "./filters/Filters"


function MainPage({characters, setInputName, setSelectHouse}) {
  return (
    <div>
      <Filters setInputName={setInputName} setSelectHouse={setSelectHouse}/>
      <CharactersList characters={characters}/>
    </div>
  )
}

export default MainPage