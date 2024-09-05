import React, { useState, useMemo } from 'react';

const CoffeeTable = ({ data, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on search query
  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.brand_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.class_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.net_weight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price.toString().includes(searchQuery)
    );
  }, [searchQuery, data]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-1/3"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-4">Brand Name</th>
            <th className="text-left p-4">Class Name</th>
            <th className="text-left p-4">Net Weight</th>
            <th className="text-left p-4">Price</th>
            <th className="text-center p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item._id} className="border-b hover:bg-gray-50">
              <td className="p-4">{item.brand_name}</td>
              <td className="p-4">{item.class_name}</td>
              <td className="p-4">{item.net_weight}</td>
              <td className="p-4">{item.price}</td>
              <td className="p-4 flex justify-center space-x-4">
                <button
                  onClick={() => onEdit(item)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'}`}
          >
            First
          </button>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'}`}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 border rounded bg-blue-500 text-white"
          >
            {currentPage}
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'}`}
          >
            Next
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'}`}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTable;