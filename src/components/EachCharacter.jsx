import { Link } from "react-router-dom"
import '../styles/EachCharacter.scss'
import PropTypes from "prop-types"

function EachCharacter({infoCharacter}) {

    const imgCharacter = infoCharacter.img ? infoCharacter.img : 'https://placehold.co/150x200'

  return (
    <article key={infoCharacter.id} className="character-card" >
        <Link to={`/character/${infoCharacter.id}`} className="character-link">
            <img src={imgCharacter} alt={infoCharacter.name} className="character-img"/>
            <h3>{infoCharacter.name}</h3>
            <p>{infoCharacter.species}</p>
        </Link>
    </article>
  )
}

EachCharacter.propTypes={
  infoCharacter:PropTypes.object
}

export default EachCharacter