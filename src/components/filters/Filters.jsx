import ResetButton from "../ResetButton";
import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"
import '../../styles/Filters.scss';
import FilterByGender from "./FilterByGender";
import PropTypes from "prop-types"
import harryPotterLogo from '../../images/harry-potter-logo.png'


function Filters({setInputName, setSelectHouse, selectHouse, inputName, setGenderRadio, genderRadio}) {

  const handleSubmit =(ev) => {
    ev.preventDefault();

  }
  return (
    <form onSubmit={handleSubmit} className="form">

      <img src={harryPotterLogo} alt="Es el logo de Harry Potter"className="form-img"/>
      
      <div className="form-input">
        <FilterByName setInputName={setInputName} inputName={inputName}/>
        <FilterByHouse setSelectHouse={setSelectHouse} selectHouse={selectHouse}/>
        <FilterByGender setGenderRadio={setGenderRadio} genderRadio={genderRadio}/>
        <ResetButton setInputName={setInputName} setSelectHouse={setSelectHouse} setGenderRadio={setGenderRadio}/>
      </div>
      
    </form>
  )
}

Filters.propTypes={
  setInputName:PropTypes.func,
  setSelectHouse:PropTypes.func, 
  selectHouse:PropTypes.string,
  inputName:PropTypes.string,
  setGenderRadio:PropTypes.func,
  genderRadio:PropTypes.string
}

export default Filters