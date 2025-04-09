import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Welcome to My React App
        </h1>
        <p className="text-lg text-gray-700 max-w-md mx-auto">
          This is a simple home page built with React and Tailwind CSS using
          Vite.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
