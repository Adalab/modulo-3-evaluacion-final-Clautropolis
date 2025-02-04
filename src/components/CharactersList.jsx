import EachCharacter from "./EachCharacter"
import '../styles/CharactersList.scss'


function CharactersList({characters}) {

        const charactersHtml = characters.map((eachCharacter)=> (
            <EachCharacter key={eachCharacter.id} infoCharacter={eachCharacter}/>
        ));



  return (
    <div className="characters-list">
        {charactersHtml}
    </div>
  )
}

export default CharactersList