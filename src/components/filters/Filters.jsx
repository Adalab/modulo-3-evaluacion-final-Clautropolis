import ResetButton from "../ResetButton";
import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"
import '../../styles/Filters.scss';


function Filters({setInputName, setSelectHouse, selectHouse, inputName}) {

  const handleSubmit =(ev) => {
    ev.preventDefault();

  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <img src="harry-potter-logo.png" alt="Es el logo de Harry Potter"className="form-img"/>
      <div className="form-input">
        <FilterByName setInputName={setInputName} inputName={inputName}/>
        <FilterByHouse setSelectHouse={setSelectHouse} selectHouse={selectHouse}/>
        <ResetButton setInputName={setInputName} setSelectHouse={setSelectHouse}/>
      </div>
      
    </form>
  )
}

export default Filters