import '../../styles/FilterByName.scss'
import PropTypes from "prop-types"

function FilterByName({setInputName, inputName}) {

  const handleChange = (ev) => {
    setInputName(ev.target.value.toLowerCase())
  }
  return (
    <div>
      <label className="filter-name" htmlFor="">Buscar por personaje: 
        <input className="filter-name-input" type="text" onChange={handleChange} value={inputName}/>
      </label>
    </div>
  )
}

FilterByName.propTypes={
  setInputName:PropTypes.func,
  inputName:PropTypes.string
}

export default FilterByName