import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function IcedCoffee() {
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
        <h1 className="text-3xl font-bold text-center mb-4">Iced Coffee Recipe</h1>
        
        {/* Image Section */}
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/ice-coffee2.jpg"
              alt="Iced Coffee Picture 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/images/recipes/image.jfif"
              alt="Iced Coffee Picture 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="prose">
          <h2 className="text-2xl font-semibold">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1 cup of freshly brewed coffee (cooled)</li>
            <li>1/2 cup of milk (any kind)</li>
            <li>2 tablespoons of sugar (adjust to taste)</li>
            <li>Ice cubes</li>
            <li>Optional: whipped cream, chocolate shavings, or caramel syrup for garnish</li>
          </ul>

          <h2 className="text-2xl font-semibold">Instructions:</h2>
          <ol className="list-decimal list-inside mb-4">
            <li>Brew a cup of your favorite coffee and let it cool to room temperature.</li>
            <li>In a glass, mix the cooled coffee with sugar until fully dissolved.</li>
            <li>Add the milk to the coffee mixture and stir well.</li>
            <li>Fill a glass with ice cubes and pour the coffee mixture over the ice.</li>
            <li>Optional: Top with whipped cream and garnish with chocolate shavings or caramel syrup.</li>
            <li>Serve immediately and enjoy your refreshing iced coffee!</li>
          </ol>

          <h2 className="text-2xl font-semibold">Tips:</h2>
          <ul className="list-disc list-inside">
            <li>Use a coffee maker with a strong brew setting for a more robust flavor.</li>
            <li>Experiment with different types of milk or milk alternatives for a unique taste.</li>
            <li>For an extra kick, add a splash of flavored syrup or a shot of espresso.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
