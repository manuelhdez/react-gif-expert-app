import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  return (
    <>
      <h2>Gif Expert App</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((el) => (
          <GifGrid key={el} category={el} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
