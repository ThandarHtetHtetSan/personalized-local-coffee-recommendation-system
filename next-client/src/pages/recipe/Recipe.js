// pages/recipes.js
import React from 'react';

const recipes = [
  {
    title: 'Ice Coffee',
    image: '/images/recipes/ice-coffee3.jpg',

  },
  {
    title: 'Coffee Smoothie',
    image: '/images/recipes/cs2.jpg',
  
  },
  {
    title: 'Brew Coffee',
    image: '/images/recipes/bc2.jpg',

  },
  {
    title: 'Coffee Pudding',

    image: '/images/recipes/cp4.jpg',

  },
  {
    title: 'Dalgona Coffee',

    image: '/images/recipes/dg.jpg',

  },
  {
    title: 'Coffee Chocolate Mug Cake',
    image: '/images/recipes/cake1.jpg',

  },
];

export default function Recipe() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">All Recipes</h1>
      </header>

      <main className="container mx-auto px-4">
        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative h-80 w-full">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Category Badge (Optional) */}
                {recipe.category && (
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium mb-2">
                    {recipe.category}
                  </span>
                )}

                {/* Recipe Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">{recipe.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-base mb-4">{recipe.description}</p>

                {/* Time Icon and Info */}
                {recipe.time && (
                  <div className="mt-2 text-sm text-gray-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 4a1 1 0 112 0v4a1 1 0 01-.553.894l-2.5 1.25a1 1 0 11-.894-1.789l2-1V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{recipe.time}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
