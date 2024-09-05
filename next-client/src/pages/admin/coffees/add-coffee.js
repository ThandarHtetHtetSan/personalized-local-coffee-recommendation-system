import React, { useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';
import CoffeeForm from '@/components/forms/CoffeeForm';

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
    <AdminLayout>
      <div className="flex justify-center h-screen p-6 min-h-screen overflow-auto">
        <div className="w-full min-h-screen max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">Add Coffee</h2>
            <CoffeeForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddDataForm;
