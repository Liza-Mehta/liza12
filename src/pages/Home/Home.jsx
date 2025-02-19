import React, { useState } from 'react'
import Header  from '../../components/Header/Header'
import ExplorMenu from '../../components/Explormenu/ExplorMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
  <div>
    <Header />
    <ExplorMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
  </div>
  )
}

export default Home
