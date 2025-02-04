import FilterByHouse from "./FilterByHouse"
import FilterByName from "./FilterByName"


function Filters({setInputName, setSelectHouse}) {
  return (
    <form>
      <FilterByName setInputName={setInputName} />
      <FilterByHouse setSelectHouse={setSelectHouse}/>
    </form>
  )
}

export default Filters