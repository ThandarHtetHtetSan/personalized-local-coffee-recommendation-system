import AdminLayout from '@/components/AdminLayout'
import CoffeeTable from '@/components/CoffeeTable';
import Modal from '@/components/Modal';
import { useCoffee } from '@/contexts/CoffeeContext';
import React, { useEffect, useState } from 'react'
import EditCoffee from './edit-coffee';
import axios from 'axios';
import { BODY_OPTIONS, FLAVOR_OPTIONS, FRAGRANCE_OPTIONS, GROUND_TYPE_OPTIONS, ROAST_LEVEL_OPTIONS } from '@/utils/constant';

const Coffees = () => {
  const { coffeeList, setCoffeeList } = useCoffee()
  const [editCoffee, setEditCoffee] = useState({})

  const fetchCoffees = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/coffees', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      console.log(data.length)
      setCoffeeList(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  }

  useEffect(() => {
    fetchCoffees()
    // setCoffeeList(coffees)
  }, []);

  const handleModalClose = () => {
    setEditCoffee({})
  }

  const handleEdit = (coffee) => {
    console.log("Edit item:", coffee);
    const roastLevel = ROAST_LEVEL_OPTIONS.find(option => option.label === coffee.roast_level)
    const groundType = GROUND_TYPE_OPTIONS.find(option => option.label === coffee.ground_type)
    const fragrance = FRAGRANCE_OPTIONS.find(option => option.label === coffee.fragrance)
    const flavor = FLAVOR_OPTIONS.find(option => option.label === coffee.flavor)
    const body = BODY_OPTIONS.find(option => option.label === coffee.body)

    // Add your edit logic here
    setEditCoffee({ ...coffee, roast_level: roastLevel.value, ground_type: groundType.value, fragrance: fragrance.value, flavor: flavor.value, body: body.value })
  };

  const handleDelete = async (id) => {
    console.log("Delete item with id:", id);
    try {
      await axios.delete(`http://127.0.0.1:5000/api/delete-coffee/${id}`)
      const newCoffeeList = coffeeList.filter(cof => cof._id !== id);
      setCoffeeList(newCoffeeList);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <AdminLayout>
        <CoffeeTable data={coffeeList} onEdit={handleEdit} onDelete={handleDelete} />
      </AdminLayout>
      {/* {editCoffee._id ?  : null} */}
      <Modal isOpen={!!editCoffee._id} onClose={handleModalClose} title="Edit Coffee">
        <EditCoffee editCoffee={editCoffee} onClose={handleModalClose} />
      </Modal>
    </>
  )
}

export default Coffees