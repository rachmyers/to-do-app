import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const DrinksList = ({drinks}) => {
  return (
    <ul className='grid sm:grid-cols2 gap-6 mt-6'>
        {drinks?.map((drink) => (
            <li key={drink.idDrink}>
                <Link className='text-xl font-medium' href={`/bar/${drink.idDrink}`}>
                <div className="relative h-60 w-60 mb-4">
                  <Image 
                  src={drink.strDrinkThumb} 
                  alt={drink.strDrink} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  className="rounded-md object-cover"/>
                </div>
                {drink.strDrink}
                </Link>
            </li>
        ))}
    </ul>
  );
};

export default DrinksList;