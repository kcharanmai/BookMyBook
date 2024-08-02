import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, bookPDFURL, authorName } = useLoaderData();

  return (
    <div className='flex w-full flex-col md:flex-row justify-between items-start gap-10 py-10'>
      <div className='mt-28 px-6 lg:px-34 flex flex-col items-center md:items-start md:w-1/3'>
        <img src={imageURL} alt={bookTitle} className='ml-10 w-65 h-71' />
        <h2 className='text-2xl font-bold mt-4 ml-10'>{bookTitle}</h2>
      </div>
      <div className='mt-28 px-6 lg:px-34 flex flex-col md:w-2/3'>
        <p className='text-2xl mt-2 font-bold'>Book Description</p>
        <p className='text-lg mt-2 mb-4'>{bookDescription}</p>
        <p className='text-lg font-bold mb-4'>Author: {authorName}</p>
        <a href={bookPDFURL} className='text-blue-500 hover:underline' target='_blank' rel='noopener noreferrer'>Read the Book</a>
      </div>
    </div>
  );
};

export default SingleBook;


//export default SingleBook;

// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const SingleBook = () => {
//   const { _id, bookTitle, imageURL, bookDescription, bookPDFURL, authorName } = useLoaderData();

//   return (
//     <div className='flex w-full flex-col md:flex-row justify-between items-start gap-10 py-10'>
//       <div className='mt-28 px-6 lg:px-34 flex flex-col items-center md:items-start'>
//         <img src={imageURL} alt={bookTitle} className='h-96' />
//         <h2 className='text-2xl font-bold mt-4'>{bookTitle}</h2>
//       </div>
//       <div className='mt-28 px-6 lg:px-34 flex flex-col'>
//         <p className='text-lg mb-4'>{bookDescription}</p>
//         <p className='text-lg font-semibold mb-4'>Author: {authorName}</p>
//         <a href={bookPDFURL} className='text-blue-500 hover:underline' target='_blank' rel='noopener noreferrer'>Read the Book</a>
//       </div>
//     </div>
//   );
// };

//export default SingleBook;

// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const SingleBook = () => {
//     const {_id, bookTitle, imageURL,bookDescription,bookPDFURL} =useLoaderData();
//   return (
//     <div className='flex w-full flex-col md:flex-row justify-between items-center gap-10 py-10'> 
//     <div className='mt-28 px-6 lg:px-34'>
//       <img src={imageURL} alt="" className='h-96'/>
//       <h2>{bookTitle}</h2>
//     </div>
//     <div className="ml-100">
//         <p>{bookDescription}</p>
//     </div>
//     </div>
//   )
// }

// export default SingleBook
