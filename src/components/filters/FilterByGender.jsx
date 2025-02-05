import PropTypes from "prop-types"

function FilterByGender({setGenderRadio, genderRadio}) {

    const handleGenderFilter = (ev) => {
        const radioResponse = ev.target.value === 'male' ? 'male' : 'female';
        setGenderRadio(radioResponse)
    }
  return (
    <div>
        <label htmlFor="">Selecciona un género:</label>
        <div>
            <label htmlFor="">Masculino</label>
            <input type="radio"
            name="genderRadio"
            id="male"
            value="male"
            checked={genderRadio === "male"}
            onChange={handleGenderFilter}/>
        </div>
        <div>
            <label htmlFor="">Femenino</label>
            <input type="radio"
            name="genderRadio"
            id="female"
            value="female"
            checked={genderRadio === "female"}
            onChange={handleGenderFilter}/>
        </div>
        
    </div>
  )
}

FilterByGender.propTypes={
  setGenderRadio:PropTypes.func,
  genderRadio:PropTypes.string
}

export default FilterByGender