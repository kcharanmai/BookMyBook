import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (category) {
      fetch(`http://localhost:5000/all-books?category=${category}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => setBooks(data))
        .catch(error => setError(error.message));
    }
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='mt-28 text-5xl text-center font-bold text-blue-700 my-10'>{category.replace('-', ' ')}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {books.map((book, index) => (
          <div key={index} className='border p-4 flex flex-col items-center md:items-start'>
            <img src={book.imageURL} alt={book.bookTitle} className='w-48 h-64' />
            <h3 className='text-lg font-semibold mt-4'>{book.bookTitle}</h3>
            <p className='text-sm text-gray-600'>{book.authorName}</p>
            <p className='text-sm text-gray-800'>{book.bookDescription}</p>
            <a href={book.bookPDFURL} className='text-blue-500 hover:underline mt-2' target='_blank' rel='noopener noreferrer'>Read the Book</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryPage = () => {
//   const { Category } = useParams();
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/all-books?Category=${Category}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => setBooks(data))
//       .catch(error => setError(error.message));
//   }, [Category]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2 className='mt-39 text-5xl text-center font-bold text-blue-700 my-10'>{Category.replace('-', ' ')}</h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//         {books.map((book, index) => (
//           <div key={index} className='border p-4'>
//             <img src={book.image} alt={book.title} />
//             <h3 className='text-lg font-semibold'>{book.title}</h3>
//             <p className='text-sm text-gray-600'>{book.author}</p>
//             <p className='text-sm text-gray-800'>{book.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
