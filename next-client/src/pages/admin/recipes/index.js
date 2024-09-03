import AdminLayout from '@/components/AdminLayout'
import RecipeTable from '@/components/RecipeTable';
import { recipes } from '@/utils/jsonData';
import React from 'react'

const Recipes = () => {
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
      <RecipeTable data={recipes} onEdit={handleEdit} onDelete={handleDelete} />
    </AdminLayout>
  )
}

export default Recipes