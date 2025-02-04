import CharactersList from "./CharactersList"
import Filters from "./filters/Filters"
import '../styles/MainPage.scss'


function MainPage({characters, setInputName, setSelectHouse}) {
  return (
    <div className="main">
      <Filters setInputName={setInputName} setSelectHouse={setSelectHouse}/>
      <CharactersList characters={characters}/>
    </div>
  )
}

export default MainPage