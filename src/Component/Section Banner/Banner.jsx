import React from 'react';
import bannerimage from "../../images/bannerimage.png";
const Banner = () => {
    return (
        <section className="bg-gradient-to-b from-blue-100 to-white flex flex-col md:flex-row items-center justify-between px-10 py-16 max-w-6xl mx-auto">
            <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-black">A School <span className="text-blue-600">Beyond</span> <br /> <span className="text-blue-600">School</span></h1>
                <div className="mt-6 flex items-center space-x-4">
                    <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">Register Now</a>
                    <a href="#" className="flex items-center space-x-2 text-gray-700 font-semibold">
                        <span className="bg-red-500 text-white rounded-full p-2">▶</span>
                        <span>Watch Video</span>
                    </a>
                </div>
            </div>
            <div className="relative mt-10 md:mt-0">
                <img src= {bannerimage} alt="School Banner Image" className="max-w-xs md:max-w-md lg:max-w-lg" />
            </div>
        </section>
    );
};

export default Banner;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Banner = () => {
//     const [isMobileAppVisible, setIsMobileAppVisible] = useState(false);

//     return (
//         <section className="bg-gradient-to-b from-blue-100 to-white flex flex-col md:flex-row items-center justify-between px-10 py-16 max-w-6xl mx-auto relative">
            
//             {/* Left Side - Desktop App */}
//             <div className="max-w-lg">
//                 <h1 className="text-4xl md:text-5xl font-bold text-black">
//                     A School <span className="text-blue-600">Beyond</span> <br /> 
//                     <span className="text-blue-600">School</span>
//                 </h1>
//                 <p className="mt-4 text-gray-700">Explore our platform on Desktop and Mobile.</p>

//                 {/* Desktop App Section */}
//                 <div className="mt-6 bg-gray-200 p-6 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold">Desktop Application</h2>
//                     <p>Features and tools for web users.</p>
//                 </div>

//                 {/* Button to Open Mobile App */}
//                 <button 
//                     onClick={() => setIsMobileAppVisible(true)}
//                     className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md"
//                 >
//                     Open Mobile App
//                 </button>
//             </div>

//             {/* Right Side - Desktop App Image */}
//             <div className="relative mt-10 md:mt-0">
//                 <img src="/desktop-image.png" alt="Desktop App Image" className="max-w-xs md:max-w-md lg:max-w-lg" />
//             </div>

//             {/* Mobile App Pop-up (Sliding from Right) */}
//             <motion.div 
//                 initial={{ x: "100%" }} 
//                 animate={{ x: isMobileAppVisible ? "0%" : "100%" }} 
//                 transition={{ duration: 0.5 }}
//                 className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6"
//             >
//                 {/* Close Button */}
//                 <button onClick={() => setIsMobileAppVisible(false)} className="absolute top-2 right-2 text-gray-600">
//                     ✖ Close
//                 </button>

//                 {/* Mobile App UI */}
//                 <h2 className="text-xl font-semibold mb-4">Mobile Application</h2>
//                 <p>Experience our mobile-friendly features.</p>

//                 {/* Mobile App Image */}
//                 <img src="/mobile-image.png" alt="Mobile App Image" className="w-full mt-4 rounded-lg shadow-md" />
//             </motion.div>
//         </section>
//     );
// };

// export default Banner;

