import React, { useState } from 'react';

function DeleteCoffee({ coffeeId }) {
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const response = await fetch(`/api/delete-coffee/${coffeeId}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Delete Coffee</h2>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Delete
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}

export default DeleteCoffee;
