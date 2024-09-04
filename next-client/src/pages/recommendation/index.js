import FilterSidebar from '@/components/FilterSidebar';
import CoffeeCard from '@/components/CoffeeCard';
import { recommendations as recommendationsArray } from '@/utils/jsonData';
import Layout from '@/components/Layout';
import { useCoffee } from '@/contexts/CoffeeContext';

export default function Recommendation() {
  const { coffeeList, setCoffeeList } = useCoffee();

  const handleRecommend = async (filters) => {
    const images = ['coffee-cup-1.jpg', 'coffee-cup-2.jpeg', 'coffee-cup-3.jpeg', 'coffee-cup-4.jpg', 'coffee-cup-5.jpeg', 'coffee-cup-6.jpeg']

    const coffeesWithImage = recommendationsArray.map(coffee => {
      const randomNumber = Math.floor(Math.random() * 6);
      return ({ ...coffee, thumbnail: `images/coffees/${images[randomNumber]}` })
    })
    setCoffeeList(coffeesWithImage);
    return


    const payload = {
      selectedValues: filters
    };
    try {
      const response = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      console.log(data)
      // setCoffeeList(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <Layout className="container mx-auto">
      <div className="flex px-4 py-6">
        <FilterSidebar onRecommend={handleRecommend} />
        <div className="flex-grow px-6">
          {coffeeList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffeeList.map((coffee) => (
                <CoffeeCard
                  key={coffee._id}
                  slug={coffee._id}
                  brand={coffee.brand_name}
                  name={coffee.class_name}
                  price={coffee.price}
                  thumbnail={coffee.thumbnail}
                  gram={coffee.net_weight}
                />
              ))}
            </div>
          ) : (<div className='h-screen flex items-center justify-center'>
            <h1 className='text-center text-5xl font-bold -mt-40 text-[#634832]'>
              Explore the benefits of using our AI-powered <br /> Coffee Recommendation System
            </h1></div>)}

        </div>
      </div>
    </Layout>
  );
}
