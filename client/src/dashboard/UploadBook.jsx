import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import 'flowbite/dist/flowbite.css';
import 'flowbite/dist/flowbite.js';

import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
const UploadBook = () => {
    const bookCategories =[
        "Fiction",
        "Romance",
        "Fantasy",
        "Suspense",
        "Jee Prep",
        "Neet Prep",
        "Programming",
        "Children Books"

    ]
    const [selectedBookCategory, setSelectedBookCategory] =useState(bookCategories[0]);
    const handleChangeSelectedValue =(event)=>
    {
        setSelectedBookCategory(event.target.value);
    }
    const handleBookSubmit =(event)=>{
      event.preventDefault();
      const form = event.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;

      const bookObj ={
        bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL 
      }
      fetch("http://localhost:5000/upload-book",{
        method :"POST",
        headers :{
            "Content-type" : "application/json",
        },
        body : JSON.stringify(bookObj)
      }).then(res => res.json()).then(data =>{
        alert("Book Uploaded Successfully!");
        form.reset();
      })
    }
  return (
    <div className="px-4 my-12">
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" placeholder="Book name" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
        <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" placeholder="Author name" required type="text"/>
      </div>
    </div>
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" placeholder="Book image URL" required />
      </div>
      <div className='lg:w-1/2'>
    <div className="mb-2 block">
        <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id="inputState" name="categoryName"  className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
           {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
           }
            </Select>
      </div>
    </div>
    <div>
    <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Write your Book Description.." className='w-full'required rows={5} />
    </div>
    <div>
    <div className="mb-2 block">
          <Label htmlFor="BookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="BookPdfURL" placeholder="Book pdf URL" required type="text"/>
    </div>
    <button type="submit"  className='bg-blue-500 text-white px-4 py-2 mt-4' >Upload Book</button>
    </form>
    </div>
  );
}

export default UploadBook
