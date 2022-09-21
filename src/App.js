import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [poke, setPoke] = useState('')
  const [url, setUrl] = useState('');

  const apiGiphy = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${poke}&api_key=3KdB6xujDx3IGO3O3w0Ze2KIa2Y2SPsz`)
      .then(response => response.json())
      .then(result => { 
        setUrl(result.data[0].images.original.url)
      })
      .catch(error => console.log('error', error));
  };



  useEffect(() => {
    const getPokemon = () => {
      let random = Math.floor(Math.random() * (400 - 1 + 1)) + 1;
      fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then(response => response.json())
        .then(result => {
          setPoke(result.forms[0].name)
        })
        .catch(error => console.log('error', error));
    };

    getPokemon()
  }, []);

  
  apiGiphy()

  return (
    <div className="App">
      <h1>{poke}</h1>
      <img src={url}></img>
    </div>
  );

}

export default App;
