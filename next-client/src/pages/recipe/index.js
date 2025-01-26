// pages/recipe.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
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
    <Layout>
    <div className="min-h-screen bg-gray-50">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">All Recipes</h1>
      </header>
      <main className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <Link href="/recipe/ice-coffee">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/images/recipes/ice-coffee3.jpg"
                alt="Ice Coffee"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Ice Coffee</h3>
            </div>
          </div>
        </Link>
        
        {/* Card 2 */}
        <Link href="/recipe/coffee-smoothie">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/images/recipes/cs2.jpg"
                alt="Coffee Smoothie"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Coffee Smoothie</h3>
            </div>
          </div>
        </Link>
        
        {/* Card 3 */}
        <Link href="/recipe/brew-coffee">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/images/recipes/bc2.jpg"
                alt="Brew Coffee"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Brew Coffee</h3>
            </div>
          </div>
        </Link>
        
        {/* Card 4 */}
        <Link href="/recipe/coffee-pudding">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/images/recipes/cp4.jpg"
                alt="Coffee Pudding"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Coffee Pudding</h3>
            </div>
          </div>
        </Link>
        
        {/* Card 5 */}
        <Link href="/recipe/dalgona-coffee">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/images/recipes/dg.jpg"
                alt="Dalgona Coffee"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Dalgona Coffee</h3>
            </div>
          </div>
        </Link>
        
        {/* Card 6 */}
        <Link href="/recipe/coffee-chocolate-mug-cake">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-80 w-full">
              <Image
                src="/images/recipes/cake1.jpg"
                alt="Coffee Chocolate Mug Cake"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Coffee Chocolate Mug Cake</h3>
            </div>
          </div>
        </Link>

      </div>
    </main>
    </div>
    </Layout>
  );
}




