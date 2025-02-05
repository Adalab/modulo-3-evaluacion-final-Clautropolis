import { useParams } from "react-router-dom"


function Detail({getCharacterInfo}) {

  const {characterId} = useParams();
  console.log(characterId);

  const characterData = getCharacterInfo(characterId);
  console.log(characterData);

    if(!characterData) {
      return <p>Character not found</p>
    }

  return (
    <article>
      <img src={characterData.img} alt={characterData.name} />
      <h3>{characterData.name}</h3>
      <p>{characterData.alive}</p>
      <p>{characterData.species}</p>
      <p>{characterData.gender}</p>
      <p>{characterData.house}</p>
    </article>
  )
}

export default Detail