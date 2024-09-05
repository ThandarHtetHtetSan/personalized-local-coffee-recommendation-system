import AdminLayout from '@/components/AdminLayout'
import CoffeeTable from '@/components/CoffeeTable';
import { useCoffee } from '@/contexts/CoffeeContext';
import { coffees } from '@/utils/jsonData';
import React, { useEffect } from 'react'

const Coffees = () => {
  const { coffeeList, setCoffeeList } = useCoffee()

  useEffect(() => {
    setCoffeeList(coffees)
  }, []);

  const handleEdit = (id) => {
    console.log("Edit item with id:", id);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log("Delete item with id:", id);
    // Add your delete logic here
  };

  return (
    <AdminLayout>
      <CoffeeTable data={coffeeList} onEdit={handleEdit} onDelete={handleDelete} />
    </AdminLayout>
  )
}

export default Coffees