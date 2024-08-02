import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center">
            <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
              <img src="src/assets/IMG_20230312_080436.jpg" alt="Developer" className="w-32 h-32 rounded-full object-cover" />
              <h2 className="text-xl font-semibold mt-4 text-center sm:text-left">Developer</h2>
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl font-semibold">About the Site</h1>
              <p className="mt-4 text-gray-700">
                Welcome to our bookstore! This platform allows users to buy and sell books at better prices. Whether you're looking for a rare find or want to sell your old textbooks, our site provides a seamless and user-friendly experience. Join our community of book lovers and discover a world of literary treasures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
