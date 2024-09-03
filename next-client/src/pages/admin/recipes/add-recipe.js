import React, { useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: ''
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
    <AdminLayout>
      <div className="flex justify-center h-screen p-6 min-h-screen overflow-auto">
        <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Add Recipe</h2>
          <form onSubmit={handleSubmit}>
            {/* Other form fields */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows={4}
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
      </div>
    </AdminLayout>
  );
};

export default AddRecipe;
