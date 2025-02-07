import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col">
  {/* Navbar */}
  <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-gray-800">MyBrand</h1>
    <div>
      <a href="#" className="text-gray-700 px-4">Home</a>
      <a href="#" className="text-gray-700 px-4">About</a>
      <a href="#" className="text-gray-700 px-4">Services</a>
      <a href="#" className="text-gray-700 px-4">Contact</a>
    </div>
  </nav>

  {/* Hero Section */}
  <header className="flex flex-col justify-center items-center text-center flex-grow p-8">
    <h1 className="text-5xl font-extrabold text-white leading-tight">
      Welcome to MyBrand 🚀
    </h1>
    <p className="text-lg text-white mt-4">
      Build amazing things with modern web technologies.
    </p>
    <a href="#" className="mt-6 bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
      Get Started
    </a>
  </header>
  
  {/* Footer */}
  <footer className="text-center text-white py-4">
    © {new Date().getFullYear()} MyBrand. All rights reserved.
  </footer>
</div>
  );
}

export default App;
