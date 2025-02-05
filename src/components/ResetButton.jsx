import '../styles/ResetButton.scss'

function ResetButton({setInputName, setSelectHouse}) {

    const handleReset = () => {
        setInputName('');
        setSelectHouse('Gryffindor')
    }
  return (
    <div className="container-reset-button">
        <button className="reset-button" onClick={handleReset}>Resetear formulario</button>
    </div>
  )
}

export default ResetButton