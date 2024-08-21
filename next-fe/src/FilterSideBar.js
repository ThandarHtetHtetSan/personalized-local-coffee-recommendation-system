// import { useState } from 'react';
// import { FaCoffee } from 'react-icons/fa';

// const FilterSidebar = ({ onRecommend }) => {
//   const [filters, setFilters] = useState({
//     roast: '',
//     fragrance: '',
//     groundtype: '',
//     body: '',
//     flavor: '',
//   });

//   const handleChange = (e, category) => {
//     const { value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [category]: value,
//     }));
//   };

//   const handleRecommendClick = () => {
//     onRecommend(filters);
//   };

//   return (
//     <div className="w-64 min-w-64 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4 text-gray-900">Filter</h2>
//       {['Roast', 'Fragrance', 'Ground Type', 'Body', 'Flavor'].map((category) => (
//         <div key={category} className="mb-4">
//           <h3 className="font-semibold mb-2 text-gray-900">{category}</h3>
//           <select
//             onChange={(e) => handleChange(e, category.toLowerCase().replace(' ', ''))}
//             className="w-full p-1 border rounded"
//           >
//             <option value="">Select {category}</option>
//             {getOptions(category).map((option) => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>
//       ))}
//       <div className='bg-white sticky bottom-0 py-2'>
//         <button
//           onClick={handleRecommendClick}
//           className='bg-[#A53F3F] mb-2 px-4 py-2 w-full rounded-full hover:opacity-85 hover:scale-105 duration-200 flex items-center gap-3 '
//         >
//           <FaCoffee className='text-3xl cursor-pointer'/>
//           Recommend
//         </button>
//       </div>
//     </div>
//   );
// };

// const getOptions = (category) => {
//   // This function should return the options for the dropdown.
//   // Since we don't have the actual options, I'm returning a placeholder array.
//   return ['Option 1', 'Option 2', 'Option 3'];
// };

// export default FilterSidebar;
import { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';

const FilterSideBar = ({ onRecommend }) => {
  const [filters, setFilters] = useState({
    roast: [],
    fragrance: [],
    groundtype: [],
    body: [],
    flavor: [],
    // price: { min: 0, max: 50000 },
  });

  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: checked
        ? [...prevFilters[category], name]
        : prevFilters[category].filter((item) => item !== name),
    }));
  };

  // const handlePriceChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     price: { ...prevFilters.price, [name]: Number(value) },
  //   }));
  // };

  const handleRecommendClick = () => {
    onRecommend(filters);
  };

  return (
    <div className="w-64 min-w-64 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Filter</h2>
      {['Roast', 'Fragrance', 'Ground Type', 'Body', 'Flavor'].map((category) => (
        <div key={category} className="mb-4">
          <h3 className="font-semibold mb-2 text-gray-900">{category}</h3>
          <ul>
            {getOptions(category).map((option) => (
              <li key={option} className="mb-2">
                <label className="flex items-center text-gray-800">
                  <input
                    type="checkbox"
                    name={option}
                    onChange={(e) => handleCheckboxChange(e, category.toLowerCase().replace(' ', ''))}
                    className="mr-2 rounded text-blue-500 custom-checkbox"
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-900">Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            name="min"
            value={filters.price.min}
            onChange={handlePriceChange}
            className="w-full p-1 border rounded"
            placeholder="Min"
          />
          <input
            type="number"
            name="max"
            value={filters.price.max}
            onChange={handlePriceChange}
            className="w-full p-1 border rounded"
            placeholder="Max"
          />
        </div>
      </div> */}
      <div className='bg-white sticky bottom-0 py-2'>
        <button
          onClick={handleRecommendClick}
          className='bg-[#A53F3F] mb-2 px-4 py-2 w-full rounded-full hover:opacity-85 hover:scale-105 duration-200 flex items-center gap-3 '
        >
          <FaCoffee className='text-3xl cursor-pointer'/>
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
      return ['Lighter', 'Light', 'Medium', 'Full', 'Heavy'];
    case 'Flavor':
      return ['Very Sweet', 'Sweet', 'Normal', 'Bitter', 'Very Bitter'];
    default:
      return [];
  }
};

export default FilterSideBar;




