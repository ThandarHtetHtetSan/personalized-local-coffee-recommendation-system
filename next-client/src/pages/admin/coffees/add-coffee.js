import React, { useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';
import TextInput from '@/components/inputs/TextInput';
import Select from '@/components/inputs/Select';
import { BODY_OPTIONS, FLAVOR_OPTIONS, FRAGRANCE_OPTIONS, GROUND_TYPE_OPTIONS, ROAST_LEVEL_OPTIONS } from '@/utils/constant';

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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <TextInput label="Brand Name"
                  type="text"
                  name="brand_name"
                  value={formData.brand_name}
                  onChange={handleChange}
                />
                <TextInput label="Product Name"
                  type="text"
                  name="class_name"
                  value={formData.class_name}
                  onChange={handleChange}
                />
                <TextInput label="Processing Method"
                  type="text"
                  name="processing_method"
                  value={formData.processing_method}
                  onChange={handleChange}
                />
                <TextInput label="Coffee Type"
                  type="text"
                  name="coffee_type"
                  value={formData.coffee_type}
                  onChange={handleChange}
                />

                <Select label="Roast Level" name="roast_level" value={formData.roast_level} onChange={handleChange} options={ROAST_LEVEL_OPTIONS} />
                <Select label="Ground Type" name="ground_type" value={formData.ground_type} onChange={handleChange} options={GROUND_TYPE_OPTIONS} />
                <Select label="Fragrance" name="fragrance" value={formData.fragrance} onChange={handleChange} options={FRAGRANCE_OPTIONS} />
                <Select label="Flavor" name="flavor" value={formData.flavor} onChange={handleChange} options={FLAVOR_OPTIONS} />
                <Select label="Body" name="body" value={formData.body} onChange={handleChange} options={BODY_OPTIONS} />

                <TextInput label="Price"
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
                <TextInput label="Number of Bags"
                  type="text"
                  name="no_of_bags"
                  value={formData.no_of_bags}
                  onChange={handleChange}
                />
                <TextInput label="Net Weight"
                  type="text"
                  name="net_weight"
                  value={formData.net_weight}
                  onChange={handleChange}
                />
                <TextInput label="Contact"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-[#38220f] hover:opacity-80 text-white font-bold uppercase py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddDataForm;
