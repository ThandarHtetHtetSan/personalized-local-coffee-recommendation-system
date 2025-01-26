import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const DalgonaCoffee = () => {
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
        <h1 className="text-3xl font-bold text-center mb-4">Dalgona Coffee Recipe</h1>
        
        {/* Image Section */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/dg.jpg"
              alt="Dalgona Coffee Picture 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/dg2.jpg"
              alt="Dalgona Coffee Picture 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="prose">
          <h2 className="text-2xl font-semibold">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>2 tablespoons instant coffee</li>
            <li>2 tablespoons sugar</li>
            <li>2 tablespoons hot water</li>
            <li>1 cup cold milk</li>
            <li>Ice cubes (optional)</li>
          </ul>

          <h2 className="text-2xl font-semibold">Instructions:</h2>
          <ol className="list-decimal list-inside mb-4">
            <li>In a bowl, combine the instant coffee, sugar, and hot water.</li>
            <li>Using a hand mixer or whisk, beat the mixture until it becomes thick and fluffy (about 5-7 minutes).</li>
            <li>Fill a glass with cold milk and ice cubes if desired.</li>
            <li>Spoon the whipped coffee mixture on top of the milk.</li>
            <li>Stir the whipped coffee into the milk before drinking, and enjoy!</li>
          </ol>

          <h2 className="text-2xl font-semibold">Tips:</h2>
          <ul className="list-disc list-inside">
            <li>For a stronger coffee flavor, use less milk or add a shot of espresso.</li>
            <li>Try experimenting with flavored syrups or cocoa powder for a unique twist.</li>
            <li>Use a handheld frother for quicker results when whipping the coffee mixture.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DalgonaCoffee
