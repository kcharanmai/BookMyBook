import React,{useEffect, useState} from 'react';
import BookCards from '../components/BookCards';
import Category from './Category';
const FavoriteBooks = () => {
    const [books, setBooks] =useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res=> res.json()).then(data =>setBooks(data))
    },[])
    return (
    <div>
        <BookCards books={books} headline="Popular Novels"/>
        <Category  headline="Categories"/>
    </div>
  )
}
export default FavoriteBooks 