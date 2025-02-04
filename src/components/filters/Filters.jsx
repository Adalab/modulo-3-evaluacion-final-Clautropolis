import FilterByName from "./FilterByName"


function Filters({setInputName}) {
  return (
    <form>
      <FilterByName setInputName={setInputName}/>
    </form>
  )
}

export default Filters