

function FilterByName({setInputName, inputName}) {

  const handleChange = (ev) => {
    setInputName(ev.target.value.toLowerCase())
  }
  return (
    <div>
      <label htmlFor="">
        <input type="text" onChange={handleChange} value={inputName}/>Buscar por personaje:
      </label>
    </div>
  )
}

export default FilterByName