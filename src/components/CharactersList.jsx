import EachCharacter from "./EachCharacter"
import '../styles/CharactersList.scss'
import PropTypes from "prop-types"


function CharactersList({characters}) {

  if (characters.length === 0) {
    return <p className="not-found">No hay ningún personaje que coincida con la búsqueda.</p>
  }
    const charactersHtml = characters.map((eachCharacter)=> (
      <EachCharacter key={eachCharacter.id} infoCharacter={eachCharacter}/>
    )
  );
return (
    <div className="characters-list">
        {charactersHtml}
    </div>
  )
}
CharactersList.propTypes={
  characters:PropTypes.array
}

export default CharactersList