import React, { useState } from 'react';
import './home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/Fooddisplay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchTerm={searchTerm} />
    </div>
  );
}

export default Home;
