import CharactersList from "./CharactersList"
import Filters from "./filters/Filters"
import '../styles/MainPage.scss'
import PropTypes from "prop-types"


function MainPage({characters, setInputName, setSelectHouse, selectHouse, inputName, setGenderRadio, genderRadio}) {
  return (
    <div className="main">
      <Filters setInputName={setInputName} setSelectHouse={setSelectHouse} selectHouse={selectHouse} inputName={inputName} setGenderRadio={setGenderRadio} genderRadio={genderRadio}/>
      <CharactersList characters={characters}/>
    </div>
  )
}

MainPage.propTypes={
  characters:PropTypes.array,
  setInputName:PropTypes.func,
  setSelectHouse:PropTypes.func, 
  selectHouse:PropTypes.string,
  inputName:PropTypes.string,
  setGenderRadio:PropTypes.func,
  genderRadio:PropTypes.string
}

export default MainPage