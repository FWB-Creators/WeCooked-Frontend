import React from 'react'
import Image from 'next/image'
import { ingredients } from '../data/ingredient';

export default function IngredientPage() {
  return (
    <div className="h-[450px] relative w-full flex flex-col items-center">
      <div className="absolute left-0 top-[-140px] z-10 w-1/2 md:w-auto">
        <Image
          src="/images/spice.png"
          alt="Spices"
          width={750}
          height={750}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="absolute right-[450px] top-10 z-10 max-w-2xl">
        <h1 className="py-1.5 text-5xl font-bold bg-gradient-to-b from-[#F0725C] to-[#FE3511] inline-block text-transparent bg-clip-text">
          Ingredients
        </h1>
        <ul className="list-disc text-lg max-w-2xl p-8" aria-label="Course ingredients">
          {ingredients.map((ingredient) => (
            <li key={ingredient.name} className="py-1 text-gray-700">
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}