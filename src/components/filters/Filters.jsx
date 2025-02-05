import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"


function Filters({setInputName, setSelectHouse, selectHouse, inputName}) {

  const handleSubmit =(ev) => {
    ev.preventDefault();

  }
  return (
    <form onSubmit={handleSubmit}>
      <FilterByName setInputName={setInputName} inputName={inputName}/>
      <FilterByHouse setSelectHouse={setSelectHouse} selectHouse={selectHouse}/>
    </form>
  )
}

export default Filters