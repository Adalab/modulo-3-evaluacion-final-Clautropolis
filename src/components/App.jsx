
import '../styles/App.scss'

import MainPage from "./MainPage";
import callToApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';


function App() {

  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState('');
  const [selectHouse, setSelectHouse] = useState('Gryffindor');

  useEffect(()=> {
    callToApi(selectHouse)
      .then((data)=> {
        setCharacters(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [inputName, selectHouse])

  const filteredCharacters = characters
    .filter((character)=> character.name.toLowerCase().includes(inputName))
    .filter((character)=> character.house.includes(selectHouse))

  const getCharacterInfo = (id) => {
    const characterFound = characters.find((character) => character.id === id)
    return characterFound;
  }

  return (
      <>
        <Routes>
          <Route path="/" element={

            <MainPage characters={filteredCharacters} setInputName={setInputName} setSelectHouse={setSelectHouse}/>

          }/>
          
          <Route path="/character/:characterId" element={<Detail getCharacterInfo={getCharacterInfo}/>}/>

          <Route path="*" element={<h1>Page not found</h1>}/> 
        </Routes>
      </>
    
  );
}

export default App
