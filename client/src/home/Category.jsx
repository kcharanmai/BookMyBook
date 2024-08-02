import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Category = ({ headline }) => {
  // Array of book details
  const books = [
    { image: "src/assets/banner-books/book9.jpeg", Category: "Neet Prep", price: "$15.00"},
    { image: "src/assets/banner-books/book8.jpeg", Category: "Jee Prep", price: "$20.00" },
    {image: "src/assets/banner-books/book12.jpeg", Category: "Suspense", price: "$10.00" },
    { image: "src/assets/banner-books/book10.jpeg",Category: "Fiction", price: "$10.00" },
    { image: "src/assets/banner-books/book13.jpeg",Category: "Romance", price: "$12.00" },
    { image: "src/assets/banner-books/book11.jpeg",Category: "Data Structures",  price: "$18.00" },
  ];

  return (
    <div className='my-16 px-14 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-blue-700 my-10'>{headline}</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
                <Link to={`/category/${book.Category}`}>
              <img src={book.image} alt={book.Category} />
              <div className="text-center mt-2">
                <h3 className="text-lg font-semibold">{book.Category}</h3>
                <p className="text-sm text-gray-800">{book.price}</p>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
