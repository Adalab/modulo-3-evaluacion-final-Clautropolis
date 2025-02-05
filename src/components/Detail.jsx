import { Link, useParams } from "react-router-dom"
import localStorage from '../services/localStorage';
import PropTypes from "prop-types"
import '../styles/Detail.scss'

function Detail({getCharacterInfo, selectHouse, inputName, setInputName, setSelectHouse, setGenderRadio, genderRadio}) {

  const {characterId} = useParams();

  const characterData = getCharacterInfo(characterId);

    if(!characterData) {
      return <p>El personaje que buscas no existe.</p>
    }

    const aliveStatus = characterData.alive ? (<i className="fa-solid fa-heart-pulse"></i>) : (<i className="fa-solid fa-skull"></i>)

    const speciesTranslation = {
      human: "Humano",
      "half-giant": "Semigigante",
      ghost: "Fantasma",
      werewolf: "Hombre lobo",
      goblin: "Duende",
      "house-elf": "Elfo doméstico",
      vampire: "Vampiro",
      veela: "Veela",
      centaur: "Centauro",
      giant: "Gigante",
      merperson: "Gente del agua",
      acromantula: "Acromántula",
      basilisk: "Basilisco",
      thestral: "Thestral",
      hippogriff: "Hipogrifo",
      dragon: "Dragón",
      dementor: "Dementor",
      inferius: "Inferius",
      boggart: "Boggart",
    };

    const speciesInSpanish = speciesTranslation[characterData.species] || 'Especie desconocida';

    const genderTranslation = {
      female: 'Femenino',
      male: 'Masculino'
    };

    const genderInSpanish = genderTranslation[characterData.gender] || 'No definido'

    const imgDetail = characterData.img ? characterData.img : 'https://placehold.co/150x200'

    const handleBack = () => {
      localStorage.get('name', inputName)
      localStorage.get('house', selectHouse)
      localStorage.get('gender', genderRadio)
      setInputName(inputName)
      setSelectHouse(selectHouse)
      setGenderRadio(genderRadio)
    }

  return (
    <div className="detail-container">
      <img src="harry-potter-logo.png" alt="Es el logo de Harry Potter"className="form-img"/>
      <Link to={'/'}>
        <button className="back-button" onClick={handleBack}><i className="fa-solid fa-arrow-left"></i>Volver</button>
      </Link>
      <article className="detail">
        <img src={imgDetail} alt={characterData.name} className="detail-img"/>
        <h3 className="detail-name">{characterData.name}</h3>
        <p className="detail-alive">Estado: {characterData.alive ? 'Vivo' : 'Muerto'} {aliveStatus}</p>
        <p className="detail-species">Especie: {speciesInSpanish}</p>
        <p className="detail-gender">Género: {genderInSpanish}</p>
        <p className="detail-house">Casa: {characterData.house}</p>
        <ul>También conocido por: 
          {characterData.alternativeNames.length > 0 ? (
            characterData.alternativeNames.map((name, index) => (
              <li key={index}>{name}</li>))) : ('')
          }
        </ul>
      </article>
    </div>
  )
}

Detail.propTypes={
  getCharacterInfo:PropTypes.func,
  setInputName:PropTypes.func,
  setSelectHouse:PropTypes.func, 
  selectHouse:PropTypes.string,
  inputName:PropTypes.string,
  setGenderRadio:PropTypes.func,
  genderRadio:PropTypes.string
}

export default Detail