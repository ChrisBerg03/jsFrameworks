import { useState, useEffect } from 'react';
import { getData, search } from './fetches/fetch'; 
import { MainCard } from './cards/mainCard'; 
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1); 
  const [query, setQuery] = useState("");   

  useEffect(() => {
    async function fetchListings() {
      const data = await getData(page);
      if (data && data.data) {
        setItems(data.data);  
      }
    }
    fetchListings();
  }, [page]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchTerm = event.target.searchInput.value.trim();
    setQuery(searchTerm); 

    if (searchTerm) {
      const result = await search(searchTerm); 
      if (result) {
        setItems(result.data); 
      }
    }
  };

  return (
    <>
      {query && <h3>Showing results for: <strong>{query}</strong></h3>}

      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Prev Page</button>
      
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>

      <form onSubmit={handleSearch}>
        <input type="text" name="searchInput" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>

      <div className="cards-container">
        {items.length > 0 ? (
          items.map((item) => <MainCard key={item.id} {...item} />)
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </>
  );
}

export default App;
