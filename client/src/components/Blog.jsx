import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-8">
          <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Blog</h1>
            <div className="space-y-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Book Review: The Great Gatsby</h2>
                <p className="text-gray-700">In this review, we dive into the classic novel "The Great Gatsby" by F. Scott Fitzgerald...</p>
                <a href="#" className="text-blue-600 underline mt-2 block">Read more</a>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Charity Event: Donate Books for Orphans</h2>
                <p className="text-gray-700">We are organizing a charity event to collect donations for distributing free books to orphans. Your contributions can make a significant difference in their lives by providing them with the gift of knowledge and imagination...</p>
                <a href="#" className="text-blue-600 underline mt-2 block">Read more</a>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
