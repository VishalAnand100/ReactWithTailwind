// import React from "react";

// const Mobile = () => {
//   return (
//     <div className="bg-green-500 p-4 mt-2 text-lg text-white text-center">
//       📱 Mobile Banner
//     </div>
//   );
// };

// export default Mobile;

// import React, { useState } from "react";

// const Mobile = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 p-4">
//       {/* Top Bar with Logo & Menu Button */}
//       <div className="flex justify-between items-center">
//         <img src="./images/logosimplifyingskills.png" alt="Logo" className="h-8" />
//         <button onClick={() => setOpen(!open)} className="text-white text-2xl">
//           ☰
//         </button>
//       </div>

//       {/* Dropdown Menu */}
//       {open && (
//         <ul className="bg-blue-700 text-white mt-2 p-2 space-y-2 rounded">
//           <li className="cursor-pointer">ACADEMY ▼</li>
//           <li className="cursor-pointer">ASSESSMENT CENTER ▼</li>
//           <li className="cursor-pointer">CLUBS ▼</li>
//           <li className="cursor-pointer">COMMUNITY ▼</li>
//           <li>
//             <button className="bg-white text-blue-600 px-4 py-2 w-full rounded font-semibold">
//               LOGIN
//             </button>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Mobile;


//new code with added dropdown
import React, { useState } from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import simplifyingLogo from "../../images/simplifyinglogo.png";

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [clubsOpen, setClubsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={simplifyingLogo} alt="Logo" className="h-10 w-auto mr-3" />
          <span className="text-white text-lg font-bold">Simplifying Skills</span>
        </div>

        {/* Search, Menu & Login Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white text-lg" onClick={() => setSearchOpen(!searchOpen)}>
            <FaSearch />
          </button>
          <button className="text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
          <a href="/login" className="text-white bg-red-800 px-3 py-1 rounded-md hover:bg-red-600 flex items-center">
            <FaUser className="mr-2" /> Login
          </a>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="mt-2 flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-l-md text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-white text-blue-600 px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-blue-700 py-2 mt-2 rounded-lg">
          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setAcademyOpen(!academyOpen)}>
              Academy ▼
            </button>
            {academyOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">For Schools</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">For Colleges</li>
              </ul>
            )}
          </div>

          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setAssessmentOpen(!assessmentOpen)}>
              Assessment Center ▼
            </button>
            {assessmentOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Skillsphere Assessment</li>
              </ul>
            )}
          </div>

          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setClubsOpen(!clubsOpen)}>
              Clubs ▼
            </button>
            {clubsOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Entrepreneurship League</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Artistic Visionaries</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Engineering Explorers</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Business Trailblazers</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Administrative Achievers</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Medical Mavericks</li>
              </ul>
            )}
          </div>

          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setCommunityOpen(!communityOpen)}>
              Community ▼
            </button>
            {communityOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Parents</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Students</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">School</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Colleges</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Educators</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Mobile;
