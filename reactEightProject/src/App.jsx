import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [data, setData] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  

  useEffect(() => {
    async function getData() {
      try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setPrevUrl(data.previous)
          setNextUrl(data.next)
          setData(data.results)
          return data;
      } catch (error) {
          console.error(error.message);
          return { data: [] };
      }
  }
  getData()
  }, [url])

  return (
    <>
     <h1 className=''>Pokèdex</h1>
     <div>
        {data.map((pokemon) => {
            const splitString = pokemon.url.split("/")
            const id = splitString[6]            
            
            const newUrl = new URL(`${id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}`)
            console.log(newUrl);
          return ( 
            <div>
              <h2 key={pokemon.name}>{pokemon.name}</h2>
              <img src={newUrl}/>
            </div>
             )
        })}
     </div>
        <div>
        {prevUrl ? ( <button onClick={() => {
              setUrl(prevUrl)
            }} className='border p-2 cursor-pointer '>Next</button> 

        ) : ( 
        
        <button disabled className='border p-2 cursor-not-allowed bg-red-200'>Next</button> )}

          {nextUrl ? ( 
            <button onClick={() => {
              setUrl(nextUrl)
            }} className='border p-2 cursor-pointer ' >Next</button> 
            ) : ( 
            <button disabled className='border p-2 cursor-not-allowed bg-red-200 '>Next</button> )}
        </div>
      </>
  )
}

export default App
