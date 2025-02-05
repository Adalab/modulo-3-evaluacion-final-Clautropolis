import CharactersList from "./CharactersList"
import Filters from "./filters/Filters"
import '../styles/MainPage.scss'


function MainPage({characters, setInputName, setSelectHouse, selectHouse, inputName}) {
  return (
    <div className="main">
      <Filters setInputName={setInputName} setSelectHouse={setSelectHouse} selectHouse={selectHouse} inputName={inputName}/>
      <CharactersList characters={characters}/>
    </div>
  )
}

export default MainPage