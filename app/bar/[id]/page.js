import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getDrink = async (id) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch a drink');
  }
}

const DrinkPage = async ({ params }) => {

  const data = await getDrink(params.id);
  const name = data?.drinks[0]?.strDrink;
  const thumb = data?.drinks[0]?.strDrinkThumb;
  const instructions = data?.drinks[0]?.stringInstructions;
  
  console.log(data);
    console.log(params.id);
  return (
    <div>
      <Link href="/bar" className="btn btn-primary mt-8 mb-10">Back</Link>
      <Image src={thumb} width={300} height={300} className="w-48 h-48 rounded shadow-lg mb-4"/>
      <h1 className='text-4xl mb-8'>{name}</h1>
      <p>{instructions}</p>
    </div>
  )
}

export default DrinkPage