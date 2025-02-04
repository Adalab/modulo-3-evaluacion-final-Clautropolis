

function FilterByHouse({setSelectHouse}) {

    const handleSelect = (ev) => {
        setSelectHouse(ev.target.value)
    }
  return (
    <div>
        <label htmlFor="houseSelect">Buscar por casa:
            <select name="house" id="houseSelect" onChange={handleSelect}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
            </select>
        </label>
    </div>
  )
}

export default FilterByHouse