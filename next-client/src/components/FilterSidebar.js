import { useCoffee } from '@/contexts/CoffeeContext';
import { useEffect, useState } from 'react';
import { FaCoffee } from "react-icons/fa";

const FilterSidebar = ({ onRecommend }) => {
  const { filters, setFilters } = useCoffee();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: checked
        ? value
        : '',
    }));
  };

  useEffect(() => {
    const isEmpty = Object.values(filters).some(catVal => catVal === '');
    setIsDisabled(isEmpty)
  }, [filters])

  const handleRecommendClick = () => {
    onRecommend();
  };

  return (
    <div className="w-64 min-w-64 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Filter</h2>
      {['Roast', 'Fragrance', 'Ground Type', 'Body', 'Flavor'].map((category) => {
        const lowerCaseCategory = category.toLowerCase().replace(' ', '');
        return (
          <div key={category} className="mb-4">
            <h3 className="font-semibold mb-2 text-gray-900">{category}</h3>
            <ul>
              {getOptions(category).map((option, index) => (
                <li key={option} className="mb-2">
                  <label className="flex items-center text-gray-800">
                    <input
                      type="checkbox"
                      name={option}
                      value={index}
                      checked={filters[lowerCaseCategory] === `${index}` }
                      onChange={(e) => handleCheckboxChange(e, lowerCaseCategory)}
                      className="mr-2 rounded text-blue-500 custom-checkbox"
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )
      }
      )}
      <div className='bg-white sticky bottom-0 py-2'>
        <button
          onClick={handleRecommendClick}
          disabled={isDisabled}
          className={`bg-[#A53F3F] mb-2 px-4 py-2.5 w-full rounded-lg duration-200 text-white ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-85 hover:scale-105'}`}
        >
          Recommend
        </button>
      </div>
    </div>
  );
};

const getOptions = (category) => {
  switch (category) {
    case 'Roast':
      return ['Light', 'Medium Light', 'Medium', 'Medium Dark', 'Dark'];
    case 'Fragrance':
      return ['Fruity', 'Floral', 'Sweet', 'Spicy', 'Smoky'];
    case 'Ground Type':
      return ['Whole Bean', 'Fine Ground', 'Coarse Ground'];
    case 'Body':
      return ['Lighter', 'Light', 'Medium', 'Full','Heavy'];
    case 'Flavor':
      return ['Very Sweet', 'Sweet', 'Normal', 'Bitter', 'Very Bitter'];
    default:
      return [];
  }
};

export default FilterSidebar;
