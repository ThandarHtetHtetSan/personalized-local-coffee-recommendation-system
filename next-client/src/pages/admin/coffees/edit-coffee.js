import CoffeeForm from '@/components/forms/CoffeeForm';
import { useCoffee } from '@/contexts/CoffeeContext';
import { useState } from 'react';

const EditCoffee = ({ editCoffee, onClose }) => {
  const [coffee, setCoffee] = useState({ ...editCoffee })
  const { coffeeList, setCoffeeList } = useCoffee()

  const handleChange = (e) => {
    setCoffee({
      ...coffee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const coffeeId = coffee._id;
      delete coffee._id
      console.log('coffeeId', coffeeId)
      console.log('coffee', coffee)
      // const response = await axios.put(`http://localhost:5000/api/edit-coffee/${coffeeId}`, coffee);
      // console.log(response.data);
      const newCoffeeList = coffeeList.map(cof => cof._id === coffeeId ? ({ ...coffee, _id: coffeeId }) : cof);
      setCoffeeList(newCoffeeList);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mt-3">
      <CoffeeForm formData={coffee} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default EditCoffee