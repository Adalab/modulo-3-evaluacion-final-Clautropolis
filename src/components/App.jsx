
import '../styles/App.scss'

import localStorage from '../services/localStorage';
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
  const [genderRadio, setGenderRadio] = useState('');

  useEffect(()=> {
    callToApi(selectHouse)
      .then((data)=> {
        setCharacters(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [inputName, selectHouse])

  useEffect(()=> {

    localStorage.set('name', inputName);
    localStorage.set('house', selectHouse);
    localStorage.set('gender', genderRadio);

  }, [inputName, selectHouse, genderRadio])

  const filteredCharacters = characters
    .filter((character)=> character.name.toLowerCase().includes(inputName))
    .filter((character)=> character.house.includes(selectHouse))
    .filter((character) => genderRadio === '' || character.gender === genderRadio)
    .sort((characterA, characterB) => {
      if (characterA.name > characterB.name) {
        return 1;
      } else if (characterA.name < characterB.name){
        return -1;
      } else {
        return 0;
      }
    })

  const getCharacterInfo = (id) => {
    const characterFound = characters.find((character) => character.id === id)
    return characterFound;
  }

  return (
      <>
        <Routes>
          <Route path="/" element={

            <MainPage characters={filteredCharacters} setInputName={setInputName} setSelectHouse={setSelectHouse} selectHouse={selectHouse} inputName={inputName} setGenderRadio={setGenderRadio} genderRadio={genderRadio}/>

          }/>

          <Route path="/character/:characterId" element={<Detail getCharacterInfo={getCharacterInfo} selectHouse={selectHouse} inputName={inputName} setSelectHouse={setSelectHouse} setInputName={setInputName} setGenderRadio={setGenderRadio} genderRadio={genderRadio}/>}/>

          <Route path="*" element={<h1>Page not found</h1>}/> 
        </Routes>
      </>
    
  );
}

export default App
