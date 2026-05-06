import SearchBar from './components/SearchBar';

function App() {

  const handleSearch = (query) => {
    console.log("Searching:", query);
  };

  return (
    <div>
      <h1>FoodFacts</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;