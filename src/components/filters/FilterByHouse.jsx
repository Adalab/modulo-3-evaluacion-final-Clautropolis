import '../../styles/FilterByHouse.scss'
import PropTypes from "prop-types"

function FilterByHouse({setSelectHouse, selectHouse}) {

    const handleSelect = (ev) => {
        setSelectHouse(ev.target.value)
    }
  return (
    <div>
        <label className="filter-house" htmlFor="houseSelect">Buscar por casa:
            <select name="house" id="houseSelect" onChange={handleSelect} value={selectHouse}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
            </select>
        </label>
    </div>
  )
}
FilterByHouse.propTypes={
  setSelectHouse:PropTypes.func, 
  selectHouse:PropTypes.string
}

export default FilterByHouse