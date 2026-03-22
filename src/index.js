import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // import Tailwind CSS

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
    </div>
  );
}

// Create root and render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);