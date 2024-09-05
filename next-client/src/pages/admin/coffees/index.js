import AdminLayout from '@/components/AdminLayout'
import CoffeeTable from '@/components/CoffeeTable';
import Modal from '@/components/Modal';
import { useCoffee } from '@/contexts/CoffeeContext';
import { coffees } from '@/utils/jsonData';
import React, { useEffect, useState } from 'react'
import EditCoffee from './edit-coffee';
import axios from 'axios';

const Coffees = () => {
  const { coffeeList, setCoffeeList } = useCoffee()
  const [editCoffee, setEditCoffee] = useState({})

  const fetchCoffees = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/coffees', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      console.log(data)
      // setCoffeeList(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  }

  useEffect(() => {
    // fetchCoffees()
    setCoffeeList(coffees)
  }, []);

  const handleModalClose = () => {
    setEditCoffee({})
  }

  const handleEdit = (coffee) => {
    console.log("Edit item:", coffee);
    // Add your edit logic here
    setEditCoffee({ ...coffee })
  };

  const handleDelete = async (id) => {
    console.log("Delete item with id:", id);
    try {
      // await axios.delete(`http://localhost:5000/api/delete-coffee/${coffeeId}`)
      const newCoffeeList = coffeeList.filter(cof => cof._id !== id);
      setCoffeeList(newCoffeeList);
    } catch (error) {
      
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