import '../styles/ResetButton.scss'
import PropTypes from "prop-types"

function ResetButton({setInputName, setSelectHouse, setGenderRadio}) {

    const handleReset = () => {
        setInputName('');
        setSelectHouse('Gryffindor')
        setGenderRadio('')
    }
  return (
    <div className="container-reset-button">
        <button className="reset-button" onClick={handleReset}>Resetear formulario</button>
    </div>
  )
}
ResetButton.propTypes={
  setInputName:PropTypes.func,
  setSelectHouse:PropTypes.func, 
  selectHouse:PropTypes.string,
  setGenderRadio:PropTypes.func,
}

export default ResetButton