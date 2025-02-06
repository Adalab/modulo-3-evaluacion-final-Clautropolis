import PropTypes from "prop-types"
import '../../styles/FilterByGender.scss'

function FilterByGender({setGenderRadio, genderRadio}) {

    const handleGenderFilter = (ev) => {
        const radioResponse = ev.target.value === 'male' ? 'male' : 'female';
        setGenderRadio(radioResponse)
    }
  return (
    <div className="gender-filter">
        <h4>Selecciona un género:</h4>
        <div className="gender-select">
            <label htmlFor="male">Masculino</label>
            <input type="radio"
            name="genderRadio"
            id="male"
            value="male"
            checked={genderRadio === "male"}
            onChange={handleGenderFilter}/>
        </div>
        <div className="gender-select">
            <label htmlFor="female">Femenino</label>
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