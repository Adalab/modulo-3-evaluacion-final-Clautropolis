import { Link } from "react-router-dom"
import '../styles/EachCharacter.scss'

function EachCharacter({infoCharacter}) {

    const imgCharacter = infoCharacter.img ? infoCharacter.img : 'https://placehold.co/150x200'

  return (
    <article key={infoCharacter.id} className="character-card" >
        <Link className="character-link">
            <img src={imgCharacter} alt={infoCharacter.name} className="character-img"/>
            <h3>{infoCharacter.name}</h3>
            <p>{infoCharacter.species}</p>
        </Link>
    </article>
  )
}

export default EachCharacter