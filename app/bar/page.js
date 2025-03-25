import React from 'react'
import DrinksList from '../../components/DrinksList'

const url= "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";

const Bar = async () => {
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error("failed api request");
  }

  const data = await response.json();

  return (
    <DrinksList drinks={data.drinks}/>
  )
}

export default Bar;