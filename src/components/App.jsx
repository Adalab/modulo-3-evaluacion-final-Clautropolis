
//import '../styles/App.scss'

import MainPage from "./MainPage";
import callToApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(()=> {
    callToApi()
      .then((data)=> {
        console.log(data)
        setCharacters(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])

  return (
      <>
      <h1>Esta es mi web de Harry Potter</h1>
      <MainPage characters={characters}/>
      </>
    
  );
}

export default App
