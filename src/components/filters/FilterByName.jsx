

function FilterByName({setInputName}) {

  const handleChange = (ev) => {
    setInputName(ev.target.value.toLowerCase())
  }
  return (
    <div>
      <label htmlFor="">
        <input type="text" onChange={handleChange}/>Buscar por personaje:
      </label>
    </div>
  )
}

export default FilterByName