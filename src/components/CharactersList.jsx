import EachCharacter from "./EachCharacter"


function CharactersList({characters}) {

        const charactersHtml = characters.map((eachCharacter)=> (
            <EachCharacter key={eachCharacter.id} infoCharacter={eachCharacter}/>
        ));



  return (
    <div>
        {charactersHtml}
    </div>
  )
}

export default CharactersList