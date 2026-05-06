import FoodCard from './components/FoodCard';

function App() {
  const fakeProduct = {
    product_name: "Test Food",
    brands: "Test Brand",
    nutriments: {
      "energy-kcal_100g": 250,
      proteins_100g: 10,
      carbohydrates_100g: 30,
      fat_100g: 5
    },
    image_small_url: "https://via.placeholder.com/100"
  };

  return (
    <div>
      <h1>FoodFacts</h1>
      <FoodCard product={fakeProduct} />
    </div>
  );
}

export default App;