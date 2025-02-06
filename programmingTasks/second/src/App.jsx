import { useState, useEffect } from 'react';
import { getData, search } from './fetches/fetch'; 
import { MainCard } from './cards/mainCard'; 
import './App.css';

function App() {
  const [items, setItems] = useState([]);  // Holds all items from the API
  const [page, setPage] = useState(1);     // For pagination
  const [query, setQuery] = useState("");   // The search query

  // Fetch listings data based on the page
  useEffect(() => {
    async function fetchListings() {
      const data = await getData(page);
      if (data && data.data) {
        setItems(data.data);  // Set fetched data
      }
    }
    fetchListings();
  }, [page]);

  // Handle search form submission
  const handleSearch = async (event) => {
    event.preventDefault();
    const searchTerm = event.target.searchInput.value.trim();
    setQuery(searchTerm); // Update query state

    // Fetch search results using the API
    if (searchTerm) {
      const result = await search(searchTerm); // Call the search function
      if (result) {
        setItems(result.data); // Update items with search results
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
