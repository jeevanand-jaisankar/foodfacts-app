import FoodList from './components/FoodList';

function App() {

  const fakeProducts = [
    {
      code: "1",
      product_name: "Apple Juice",
      brands: "Brand A",
      nutriments: {
        "energy-kcal_100g": 120,
        proteins_100g: 1,
        carbohydrates_100g: 28,
        fat_100g: 0
      },
      image_small_url: "https://via.placeholder.com/100"
    },
    {
      code: "2",
      product_name: "Milk",
      brands: "Brand B",
      nutriments: {
        "energy-kcal_100g": 60,
        proteins_100g: 3,
        carbohydrates_100g: 5,
        fat_100g: 3
      },
      image_small_url: "https://via.placeholder.com/100"
    }
  ];

  return (
    <div>
      <h1>FoodFacts</h1>
      <FoodList products={fakeProducts} />
    </div>
  );
}

export default App;