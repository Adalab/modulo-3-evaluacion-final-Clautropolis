import { Link, useParams } from "react-router-dom"
import '../styles/EachCharacter.scss'
import localStorage from '../services/localStorage';

function Detail({getCharacterInfo, selectHouse, inputName, setInputName, setSelectHouse}) {

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
      setInputName(inputName)
      setSelectHouse(selectHouse)
    }

  return (
    <div>
      <Link to={'/'}>
        <button onClick={handleBack}><i className="fa-solid fa-arrow-left"></i>Volver</button>
      </Link>
      <article>
        <img src={imgDetail} alt={characterData.name} className="character-img"/>
        <h3>{characterData.name}</h3>
        <p>Estado: {characterData.alive ? 'Vivo' : 'Muerto'} {aliveStatus}</p>
        <p>Especie: {speciesInSpanish}</p>
        <p>Género: {genderInSpanish}</p>
        <p>Casa: {characterData.house}</p>
      </article>
    </div>
  )
}

export default Detail