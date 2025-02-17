import React from 'react';

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
                <img src="/image.png" alt="School Banner Image" className="max-w-xs md:max-w-md lg:max-w-lg" />
            </div>
        </section>
    );
};

export default Banner;
