import AdminLayout from '@/components/AdminLayout'
import CoffeeTable from '@/components/CoffeeTable';
import { coffees } from '@/utils/jsonData';
import React from 'react'

const Coffees = () => {
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
      <CoffeeTable data={coffees} onEdit={handleEdit} onDelete={handleDelete} />
    </AdminLayout>
  )
}

export default Coffees