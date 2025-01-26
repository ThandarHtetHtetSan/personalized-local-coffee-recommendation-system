import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const brewCoffee = () => {
    const router = useRouter()

    const goToRecipe = () => {
      router.push('/recipe') // Navigates to the /recipe page
    }
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <button 
            onClick={goToRecipe} 
            className="inline-block mb-4 text-[#38220f] hover:opacity-70 font-semibold">
              &larr;
              Back
          </button>
          <h1 className="text-3xl font-bold text-center mb-4">Brew Coffee Recipe</h1>
          
          {/* Image Section */}
          <div className="flex flex-wrap justify-center space-x-4 mb-6">
            <div className="relative w-64 h-64">
              <Image
                src="/images/recipes/bc1.jpg"
                alt="Brew Coffee Picture 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-64 h-64">
              <Image
                src="/images/recipes/bc2.jpg"
                alt="Brew Coffee Picture 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
  
          <div className="prose">
            <h2 className="text-2xl font-semibold">Ingredients:</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Fresh coffee beans (about 2 tablespoons per cup)</li>
              <li>Filtered water</li>
              <li>Optional: milk, sugar, or cream for serving</li>
            </ul>
  
            <h2 className="text-2xl font-semibold">Instructions:</h2>
            <ol className="list-decimal list-inside mb-4">
              <li>Start by boiling filtered water and grinding your coffee beans to a medium grind size.</li>
              <li>Place the ground coffee in your coffee maker, French press, or pour-over setup.</li>
              <li>Slowly pour hot water over the grounds, allowing them to bloom for about 30 seconds.</li>
              <li>Continue pouring the water in a steady stream, ensuring the coffee grounds are fully saturated.</li>
              <li>Let the coffee steep (if using a French press) or drip (if using a pour-over or coffee maker) for about 4-5 minutes.</li>
              <li>Once brewed, pour your coffee into a mug and add milk, sugar, or cream to taste, if desired.</li>
            </ol>
  
            <h2 className="text-2xl font-semibold">Tips:</h2>
            <ul className="list-disc list-inside">
              <li>For a stronger brew, use a higher coffee-to-water ratio.</li>
              <li>Grind the coffee beans just before brewing to retain the best flavor.</li>
              <li>For an iced brew, let the coffee cool and serve over ice.</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default brewCoffee