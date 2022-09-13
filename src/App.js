import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState()

  

  useEffect(() => {
    const min = 1;
    const max = 150;
    const random = Math.floor(Math.random()*(max-min+1)+min);

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then(response => response.json())
      .then(result => {
        // console.log(result.forms[0].name)
        setPokemon(result.forms[0].name)
        
      })
      .catch(error => console.log('error', error));
  }, [])

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("api.giphy.com/v1/gifs/search?q=pikachu&limit=1&api_key=3KdB6xujDx3IGO3O3w0Ze2KIa2Y2SPsz", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


  
  return (
    <div className="App">
        <h1>{pokemon}</h1>
    </div>
  );
}

export default App;
