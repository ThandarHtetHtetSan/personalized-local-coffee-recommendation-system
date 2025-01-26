import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const CoffeeChocolateMugCake = () => {
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
        <h1 className="text-3xl font-bold text-center mb-4">Coffee Chocolate Mug Cake Recipe</h1>
        
        {/* Image Section */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/cake1.jpg"
              alt="Coffee Chocolate Mug Cake Picture 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/cake2.jpg"
              alt="Coffee Chocolate Mug Cake Picture 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="prose">
          <h2 className="text-2xl font-semibold">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>4 tablespoons all-purpose flour</li>
            <li>2 tablespoons cocoa powder</li>
            <li>2 tablespoons sugar</li>
            <li>1/4 teaspoon baking powder</li>
            <li>2 tablespoons brewed coffee</li>
            <li>2 tablespoons milk</li>
            <li>2 tablespoons vegetable oil</li>
            <li>1/4 teaspoon vanilla extract</li>
            <li>Pinch of salt</li>
            <li>Optional: chocolate chips or chocolate chunks</li>
          </ul>

          <h2 className="text-2xl font-semibold">Instructions:</h2>
          <ol className="list-decimal list-inside mb-4">
            <li>In a microwave-safe mug, combine flour, cocoa powder, sugar, baking powder, and salt.</li>
            <li>Add the brewed coffee, milk, vegetable oil, and vanilla extract. Stir well to combine.</li>
            <li>If desired, stir in a few chocolate chips for an extra chocolatey texture.</li>
            <li>Microwave on high for 1 minute and 30 seconds or until the cake is cooked through.</li>
            <li>Let it cool for a minute, then enjoy your Coffee Chocolate Mug Cake!</li>
          </ol>

          <h2 className="text-2xl font-semibold">Tips:</h2>
          <ul className="list-disc list-inside">
            <li>Top with whipped cream or ice cream for a decadent dessert.</li>
            <li>Adjust the microwave time depending on your microwave's power (start with 1 minute).</li>
            <li>For a richer flavor, use dark cocoa powder and strong brewed coffee.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CoffeeChocolateMugCake
