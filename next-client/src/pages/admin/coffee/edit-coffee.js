import axios from 'axios';

const updateData = async (brandName, updatedData) => {
  try {
    const response = await axios.put('http://localhost:5000/api/update-data', {
      brandName: brandName,
      updatedData: updatedData
    });
    console.log(response.data.message);
  } catch (error) {
    console.error('There was an error updating the data!', error);
  }
};

// Example usage
const updatedData = {
  coffee_type: 'Robusta',
  processing_method: 'Natural Dry',
  price: '5000'
};

updateData('YourBrandNameHere', updatedData);
