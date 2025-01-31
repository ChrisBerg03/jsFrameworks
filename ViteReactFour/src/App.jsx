import { useEffect, useState } from 'react';
import './App.css'
import { PrimaryCard, SecondaryCard, CharacterCard } from './components/card';

function App() {
  const [count, setCount] = useState(0);
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
     console.log(character);
  }, [character])

  useEffect(() => {
    async function getData() {
      try {
      const res = await fetch(`https://api.disneyapi.dev/character?page=${page}`);
      const data = await res.json();
      // console.log(data);
       setCharacter([...character, ...data.data]);
      } catch {

      }
    }
    getData()
  }, [page]);


  return (
    <>
      <button onClick={() => {setCount(count+1)}}>Count: {count}</button>

        <h1>disney character</h1>
        <div> {character.length ? character.map((char) => {
            return <CharacterCard name={char.name} imageUrl={char.imageUrl} key={char._id}/>;
        }) : "loading"}        
</div>
        <button onClick={ () => {setPage(page + 1)}}>load more: page {page}</button>
    </>

  )
}

export default App

