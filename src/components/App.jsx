
import '../styles/App.scss'

import MainPage from "./MainPage";
import callToApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState('');

  useEffect(()=> {
    callToApi()
      .then((data)=> {
        setCharacters(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])

  const filteredCharacters = characters.filter((character)=> character.name.toLowerCase().includes(inputName))

  return (
      <>
      <main>
      <MainPage characters={filteredCharacters} setInputName={setInputName}/>
      </main>
      </>
    
  );
}

export default App
