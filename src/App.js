import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./page/Header";
import Axios from "axios";
import { Recipies } from "./page/Recipies";

function App() {
  const [recipe, setRecipes] = useState([]);
  const [search, setSerach] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=69fc12b0&app_key=7a2d467333b16cf286ee7db15fca378c&calories=591-722&health=alcohol-free`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <div className="container">
        <Header
          search={search}
          onInputChange={onInputChange}
          onSearchClick={onSearchClick}
        />
        <Recipies recipes={recipe} />
      </div>
    </div>
  );
}
export default App;
