
import '../styles/App.scss'

import MainPage from "./MainPage";
import callToApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState('');
  const [selectHouse, setSelectHouse] = useState('gryffindor');

  useEffect(()=> {
    callToApi(selectHouse)
      .then((data)=> {
        console.log(data)
        setCharacters(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [inputName, selectHouse])

  const filteredCharacters = characters
    .filter((character)=> character.name.toLowerCase().includes(inputName))
    .filter((character)=> character.house.includes(selectHouse))
    console.log(filteredCharacters)

  return (
      <>
      <main>
      <MainPage characters={filteredCharacters} setInputName={setInputName} setSelectHouse={setSelectHouse}/>
      </main>
      </>
    
  );
}

export default App
