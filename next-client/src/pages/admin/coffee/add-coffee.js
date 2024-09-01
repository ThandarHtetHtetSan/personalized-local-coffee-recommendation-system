import React, { useState } from 'react';
import axios from 'axios';

const AddDataForm = () => {
  const [formData, setFormData] = useState({
    brand_name: '',
    coffee_type: '',
    processing_method: '',
    no_of_bags: '',
    net_weight: '',
    roast_level: '',
    fragrance: '',
    flavor: '',
    ground_type: '',
    body: '',
    price: '',
    contact: '',
    class_name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/add-coffee', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Add Coffee Data</h2>
        <form onSubmit={handleSubmit}>
          {/* Other form fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Brand Name</label>
            <input
              type="text"
              name="brand_name"
              value={formData.brand_name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Product Name</label>
            <input
              type="text"
              name="class_name"
              value={formData.class_name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Processing Method</label>
            <input
              type="text"
              name="processing_method"
              value={formData.processing_method}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Coffee Type</label>
            <input
              type="text"
              name="coffee_type"
              value={formData.coffee_type}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Roast Level</label>
            <select
              name="roastLevel"
              value={formData.roastLevel}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Roast Level</option>
              <option value="66c4d63bc0935cb1598e7a08">Light</option>
              <option value="66c4d644c0935cb1598e7b2f">Medium Light</option>
              <option value="66c4d633c0935cb1598e78a1">Medium</option>
              <option value="66c4d635c0935cb1598e791e">Medium Dark</option>
              <option value="66c4d634c0935cb1598e78ce">Dark</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Ground Type</label>
            <select
              name="groundType"
              value={formData.groundType}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Ground Type</option>
              <option value="66c4d636c0935cb1598e7961">Whole Bean</option>
              <option value="66c4d634c0935cb1598e78aa">Fine Ground</option>
              <option value="66c4d635c0935cb1598e78f5">Coarse Ground</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Fragrance</label>
            <select
              name="fragrance"
              value={formData.fragrance}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Fragrance</option>
              <option value="66c4d63cc0935cb1598e7a16">Fruity</option>
              <option value="66c4d63cc0935cb1598e7a16">Floral</option>
              <option value="66c4d634c0935cb1598e78a4">Sweet</option>
              <option value="66c4d635c0935cb1598e7921">Spicy</option>
              <option value="66c4d634c0935cb1598e78d1">Smoky</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Flavor</label>
            <select
              name="flavor"
              value={formData.flavor}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Flavor</option>
              <option value="66c4d63bc0935cb1598e7a0c">Very Sweet</option>
              <option value="66c4d644c0935cb1598e7b35">Sweet</option>
              <option value="66c4d634c0935cb1598e78a7">Normal</option>
              <option value="66c4d635c0935cb1598e7924">Bitter</option>
              <option value="66c4d634c0935cb1598e78d4">Very Bitter</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Body</label>
            <select
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Body</option>
              <option value="66c4d63bc0935cb1598e7a10">Lighter</option>
              <option value="66c4d644c0935cb1598e7b39">Light</option>
              <option value="66c4d634c0935cb1598e78ad">Medium</option>
              <option value="66c4d635c0935cb1598e7928">Full</option>
              <option value="66c4d634c0935cb1598e78d8">Heavy</option>
            </select>
          </div>
          {/* Repeat similar blocks for other fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Number of Bags</label>
            <input
              type="text"
              name="no_of_bags"
              value={formData.no_of_bags}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Net Weight</label>
            <input
              type="text"
              name="net_weight"
              value={formData.net_weight}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Data
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default AddDataForm;
