// import React, { useState } from 'react';

// const App = () => {
//   // Initialize state for each select box
//   const [selectedOptions, setSelectedOptions] = useState({
//     roast_level: '',
//     ground_type: '',
//     fragrance: '',
//     flavor: '',
//     body: ''
//   });
//   const [list, setList] = useState([]);
//   console.log("The list is",list)

//   // Initialize the mapping for values
//   const valueMappings = {
//     roast_level: { '0': 'Light', '1': 'Medium Light', '2': 'Medium', '3': 'Medium Dark', '4': 'Dark' },
//     ground_type: { '0': 'Whole Bean', '1': 'Fine Ground', '2': 'Coarse Ground' },
//     fragrance: { '0': 'Fruity', '1': 'Floral', '2': 'Sweet', '3': 'Spicy', '4': 'Smoky' },
//     flavor: { '0': 'Very Sweet', '1': 'Sweet', '2': 'Normal', '3': 'Bitter', '4': 'Very Bitter' },
//     body: { '0': 'Lighter', '1': 'Light', '2': 'Medium', '3': 'Full', '4': 'Heavy' }
//   };

//   // Handle select box change
//   const handleSelectChange = (event) => {
//     const { name, value } = event.target;
//     setSelectedOptions(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();  // Prevent default form submission

//     // Prepare the data to be sent
//     const data = {
//       selectedValues: selectedOptions,
//       valueMappings: valueMappings
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/data', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),  // Convert object to JSON string
//       });

//       // Parse the JSON response
//       const result = await response.json();
//       console.log(result);  // Handle the result from the backend
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="roast_level">Roast Level:</label>
//           <select
//             id="roast_level"
//             name="roast_level"
//             value={selectedOptions.roast_level}
//             onChange={handleSelectChange}
//           >
//             <option value="">--Select an option--</option>
//             <option value="0">Light</option>
//             <option value="1">Medium Light</option>
//             <option value="2">Medium</option>
//             <option value="3">Medium Dark</option>
//             <option value="4">Dark</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="ground_type">Ground Type:</label>
//           <select
//             id="ground_type"
//             name="ground_type"
//             value={selectedOptions.ground_type}
//             onChange={handleSelectChange}
//           >
//             <option value="">--Select an option--</option>
//             <option value="0">Whole Bean</option>
//             <option value="1">Fine Ground</option>
//             <option value="2">Coarse Ground</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="fragrance">Fragrance:</label>
//           <select
//             id="fragrance"
//             name="fragrance"
//             value={selectedOptions.fragrance}
//             onChange={handleSelectChange}
//           >
//             <option value="">--Select an option--</option>
//             <option value="0">Fruity</option>
//             <option value="1">Floral</option>
//             <option value="2">Sweet</option>
//             <option value="3">Spicy</option>
//             <option value="4">Smoky</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="flavor">Flavor:</label>
//           <select
//             id="flavor"
//             name="flavor"
//             value={selectedOptions.flavor}
//             onChange={handleSelectChange}
//           >
//             <option value="">--Select an option--</option>
//             <option value="0">Very Sweet</option>
//             <option value="1">Sweet</option>
//             <option value="2">Normal</option>
//             <option value="3">Bitter</option>
//             <option value="4">Very Bitter</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="body">Body:</label>
//           <select
//             id="body"
//             name="body"
//             value={selectedOptions.body}
//             onChange={handleSelectChange}
//           >
//             <option value="">--Select an option--</option>
//             <option value="0">Lighter</option>
//             <option value="1">Light</option>
//             <option value="2">Medium</option>
//             <option value="3">Full</option>
//             <option value="4">Heavy</option>
//           </select>
//         </div>
//         <button type="submit">Send Data</button>
//       </form>
//       <div>
//       <h1>List from Backend</h1>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//     </div>
    
//   );
// };

// export default App;



import React, { useState } from 'react';

const App = () => {
  // Initialize state for each select box and result
  const [selectedOptions, setSelectedOptions] = useState({
    roast_level: '',
    ground_type: '',
    fragrance: '',
    flavor: '',
    body: ''
  });
  const [recommendations, setRecommendations] = useState([]);

  // Handle select box change
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission for KNN
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent default form submission

    // Prepare the data to be sent
    const data = {
      selectedValues: selectedOptions
    };

    try {
      const response = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Convert object to JSON string
      });

      // Parse the JSON response
      const result = await response.json();
      setRecommendations(result);  // Handle the result from the backend
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>KNN Coffee Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="roast_level">Roast Level:</label>
          <select
            id="roast_level"
            name="roast_level"
            value={selectedOptions.roast_level}
            onChange={handleSelectChange}
          >
            <option value="">--Select an option--</option>
            <option value="0">Light</option>
            <option value="1">Medium Light</option>
            <option value="2">Medium</option>
            <option value="3">Medium Dark</option>
            <option value="4">Dark</option>
          </select>
        </div>
        <div>
          <label htmlFor="ground_type">Ground Type:</label>
          <select
            id="ground_type"
            name="ground_type"
            value={selectedOptions.ground_type}
            onChange={handleSelectChange}
          >
            <option value="">--Select an option--</option>
            <option value="0">Whole Bean</option>
            <option value="1">Fine Ground</option>
            <option value="2">Coarse Ground</option>
          </select>
        </div>
        <div>
          <label htmlFor="fragrance">Fragrance:</label>
          <select
            id="fragrance"
            name="fragrance"
            value={selectedOptions.fragrance}
            onChange={handleSelectChange}
          >
            <option value="">--Select an option--</option>
            <option value="0">Fruity</option>
            <option value="1">Floral</option>
            <option value="2">Sweet</option>
            <option value="3">Spicy</option>
            <option value="4">Smoky</option>
          </select>
        </div>
        <div>
          <label htmlFor="flavor">Flavor:</label>
          <select
            id="flavor"
            name="flavor"
            value={selectedOptions.flavor}
            onChange={handleSelectChange}
          >
            <option value="">--Select an option--</option>
            <option value="0">Very Sweet</option>
            <option value="1">Sweet</option>
            <option value="2">Normal</option>
            <option value="3">Bitter</option>
            <option value="4">Very Bitter</option>
          </select>
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <select
            id="body"
            name="body"
            value={selectedOptions.body}
            onChange={handleSelectChange}
          >
            <option value="">--Select an option--</option>
            <option value="0">Lighter</option>
            <option value="1">Light</option>
            <option value="2">Medium</option>
            <option value="3">Full</option>
            <option value="4">Heavy</option>
          </select>
        </div>
        <button type="submit">Get Recommendations</button>
      </form>

      <div>
        <h3>Recommended Coffees:</h3>
        <ul>
          {recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
