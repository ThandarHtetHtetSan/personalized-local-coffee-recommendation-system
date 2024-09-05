import React from 'react'
import { useRouter } from 'next/router';

const Adminheader = () => {
  const router = useRouter();
  const handleSignOut = () => {
    // Perform any sign out logic here (e.g., clearing authentication)
    
    // Navigate to the sign-in page or another route
    router.replace('/');
  };
  return (
    


  
    <div className="flex-1">
    {/* Header */}
    <header className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="text-2xl font-semibold">Coffee Recommendation System</div>
      <div>
        <button onClick={handleSignOut} className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Sign Out
        </button>
      </div>
    </header>
    </div>
  )
}

export default Adminheader