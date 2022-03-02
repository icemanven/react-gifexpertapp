import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(["Samurai X"]);

  /* const handleAdd = () => {
        const newElement = 'Batman';
        if (!categories.includes(newElement)) {
            setCategories([...categories, newElement]);
        }
        
    }; */

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
