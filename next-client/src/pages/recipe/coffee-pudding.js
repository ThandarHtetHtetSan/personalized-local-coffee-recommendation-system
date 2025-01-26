import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const CoffeePudding = () => {
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
        <h1 className="text-3xl font-bold text-center mb-4">Coffee Pudding Recipe</h1>
        
        {/* Image Section */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/cp1.jpg"
              alt="Coffee Pudding Picture 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/cp4.jpg"
              alt="Coffee Pudding Picture 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="prose">
          <h2 className="text-2xl font-semibold">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>2 cups milk</li>
            <li>3 tablespoons instant coffee powder</li>
            <li>1/4 cup sugar</li>
            <li>3 tablespoons cornstarch</li>
            <li>1/4 teaspoon vanilla extract</li>
            <li>Optional: whipped cream, chocolate shavings for garnish</li>
          </ul>

          <h2 className="text-2xl font-semibold">Instructions:</h2>
          <ol className="list-decimal list-inside mb-4">
            <li>In a saucepan, heat 1 ½ cups of the milk over medium heat.</li>
            <li>In a small bowl, whisk together the remaining 1/2 cup milk, coffee powder, sugar, and cornstarch until smooth.</li>
            <li>Slowly whisk the coffee mixture into the warm milk, stirring constantly to avoid lumps.</li>
            <li>Continue cooking over medium heat, stirring frequently, until the mixture thickens and starts to bubble.</li>
            <li>Remove from heat and stir in the vanilla extract.</li>
            <li>Pour the pudding into serving dishes and let it cool to room temperature.</li>
            <li>Refrigerate for at least 2 hours before serving.</li>
            <li>Optional: Top with whipped cream and chocolate shavings for garnish before serving.</li>
          </ol>

          <h2 className="text-2xl font-semibold">Tips:</h2>
          <ul className="list-disc list-inside">
            <li>Use freshly brewed coffee instead of instant powder for a stronger coffee flavor.</li>
            <li>Chill the pudding for at least 4 hours for a firmer texture.</li>
            <li>Add a pinch of cinnamon or cocoa powder to enhance the flavor.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CoffeePudding
