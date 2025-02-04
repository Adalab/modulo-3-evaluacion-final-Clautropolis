import { Link } from "react-router-dom"
import '../styles/EachCharacter.scss'

function EachCharacter({infoCharacter}) {
    console.log(infoCharacter)

    const imgCharacter = infoCharacter.img ? infoCharacter.img : 'https://placehold.co/150x200'
    console.log(imgCharacter)

    

  return (
    <article>
        <Link>
            <img src={imgCharacter} alt={infoCharacter.name} className="img-character"/>
            <h3>{infoCharacter.name}</h3>
            <p>{infoCharacter.species}</p>
        </Link>
    </article>
  )
}

export default EachCharacter