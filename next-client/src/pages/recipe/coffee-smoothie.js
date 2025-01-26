import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const coffeeSmoothie = () => {
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
          <h1 className="text-3xl font-bold text-center mb-4">Coffee Smoothie Recipe</h1>
          
          {/* Image Section */}
          <div className="flex flex-wrap justify-center space-x-4 mb-6">
            <div className="relative w-64 h-64">
              <Image
                src="/images/recipes/cs1.jpg"
                alt="Coffee Smoothie Picture 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-64 h-64">
              <Image
                src="/images/recipes/cs2.jpg"
                alt="Coffee Smoothie Picture 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
  
          <div className="prose">
            <h2 className="text-2xl font-semibold">Ingredients:</h2>
            <ul className="list-disc list-inside mb-4">
              <li>1 cup brewed coffee (cooled)</li>
              <li>1/2 cup milk (or almond milk for a dairy-free option)</li>
              <li>1 banana (for creaminess)</li>
              <li>1 tablespoon peanut butter (optional)</li>
              <li>1 tablespoon cocoa powder (optional, for a chocolatey flavor)</li>
              <li>1 tablespoon honey or sweetener (adjust to taste)</li>
              <li>1/2 teaspoon vanilla extract (optional)</li>
              <li>1/2 cup ice cubes</li>
            </ul>
  
            <h2 className="text-2xl font-semibold">Instructions:</h2>
            <ol className="list-decimal list-inside mb-4">
              <li>Brew your coffee and allow it to cool completely.</li>
              <li>In a blender, combine cooled coffee, milk, banana, peanut butter, cocoa powder, honey, and vanilla extract.</li>
              <li>Add ice cubes and blend until smooth.</li>
              <li>Taste and adjust sweetness if needed.</li>
              <li>Pour into a glass and enjoy your delicious coffee smoothie!</li>
            </ol>
  
            <h2 className="text-2xl font-semibold">Tips:</h2>
            <ul className="list-disc list-inside">
              <li>For an extra creamy smoothie, use frozen bananas.</li>
              <li>Feel free to experiment with almond or coconut milk for a different flavor.</li>
              <li>Add a shot of espresso for a stronger coffee flavor.</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default coffeeSmoothie