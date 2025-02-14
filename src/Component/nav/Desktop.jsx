// import React from "react";

// const Desktop = () => {
//   return (
//     <div className="bg-red-500 p-4 mt-2 text-lg text-white text-center">
//       🖥️ Desktop Banner
//     </div>
//   );
// };

// export default Desktop;

// import React from "react";

// const Desktop = () => {
//   return (
//     <nav className="bg-blue-600 flex items-center justify-between px-6 py-3">
//       {/* Logo */}
//       <img src="~\src\images\simplifyinglogo.png" alt="Logo" className="h-10" />

//       {/* Navigation Links */}
//       <ul className="flex space-x-6 text-white font-semibold">
//         <li className="cursor-pointer">ACADEMY ▼</li>
//         <li className="cursor-pointer">ASSESSMENT CENTER ▼</li>
//         <li className="cursor-pointer">CLUBS ▼</li>
//         <li className="cursor-pointer">COMMUNITY ▼</li>
//       </ul>

//       {/* Search Bar & Login Button */}
//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="px-3 py-1 rounded text-black"
//         />
//         <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">
//           LOGIN
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Desktop;

//new code with dropdwon
import React from "react";
import simplifyingLogo from "../../images/simplifyinglogo.png";
import image46 from "../../images/image46.png";

const Desktop = () => {
  return (
    <nav className="bg-blue-600 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center h-full">
        <img src={simplifyingLogo} alt="Logo" className="h-full  w-40 rounded-tr-3xl" />

        {/* <span className="text-white text-lg font-bold">Simplifying Skills</span> */}
      </div>

      {/* Desktop Menu */}
      <div className="flex space-x-6 py-4 ">
        {/* Academy */}
        <div className="relative group">
          <button className="text-white hover:text-gray-300">Academy ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-40">
            <ul className="py-2">
            {/* <a href="#">For School</a> */}
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">For Schools</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">For Colleges</li>
            </ul>
          </div>
        </div>

        {/* Assessment Center */}
        <div className="relative group">
          <button className="text-white hover:text-gray-300">Assessment Center ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-48">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Skillsphere Assessment</li>
            </ul>
          </div>
        </div>

        {/* Clubs */}
        <div className="relative group">
          <button className="text-white hover:text-gray-300">Clubs ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-56">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Entrepreneurship League</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Artistic Visionaries</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Engineering Explorers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Business Trailblazers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Administrative Achievers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Medical Mavericks</li>
            </ul>
          </div>
        </div>

        {/* Community */}
        <div className="relative group">
          <button className="text-white hover:text-gray-300">Community ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-40">
            <ul className="py-2">
                
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Parents</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Students</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">School</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Colleges</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Educators</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Search & Login Button */}
      <div className="flex items-center space-x-4">
        <img src={image46} alt="Logo" className="h-10 w-auto mr-3" />
        <input type="text" placeholder="Search..." className="px-2 py-1 rounded-md hidden md:block" />
        <button className="bg-white text-red-600 px-4 py-2 rounded-md font-bold">LOGIN</button>
      </div>
    </nav>
  );
};

export default Desktop;
