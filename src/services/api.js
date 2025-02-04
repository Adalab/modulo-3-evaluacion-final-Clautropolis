const callToApi = () => {
    // Llamamos a la API
    return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor") // 
      .then((response) => response.json())
      .then((data) => {
        // Cuando responde la API podemos limpiar los datos aquí
        const result = data.map((character)=> {
          return {
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          house: character.house,
          alive: character.alive,
          img: character.image
        };
      })
        return result;
      });
  };
  
  export default callToApi;