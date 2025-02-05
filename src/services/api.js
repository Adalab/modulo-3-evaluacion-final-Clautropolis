const callToApi = (selectHouse) => {
    
    return fetch(`https://hp-api.onrender.com/api/characters/house/${selectHouse}`)  
      .then((response) => response.json())
      .then((data) => {
        
        const result = data.map((character)=> {
          return {
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          house: character.house,
          alive: character.alive,
          img: character.image,
          alternativeNames: character.alternate_names
        };
      })
        return result;
      });
  };
  
  export default callToApi;