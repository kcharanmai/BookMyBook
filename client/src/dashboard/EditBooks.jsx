import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput , Textarea} from "flowbite-react";
const EditBooks = () => {
    const {id} =useParams();
    const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} =useLoaderData();
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
    const handleUpdate =(event)=>{
      event.preventDefault();
      const form = event.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;

      const updateBookObj ={
        bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL 
      }
      fetch(`http://localhost:5000/book/${id}`,{
        method :"PATCH",
        headers :{
            "Content-type" : "application/json",
        },
        body : JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data =>{
        alert("Book Updated Successfully!");
      })
    }
  return (
    <div className="px-4 my-12">
      <h2 className='mb-8 text-3xl font-bold'>Update the book</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" placeholder="Book name" required tpe="text" defaultValue={bookTitle}/>
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
        <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" placeholder="Author name" required type="text" defaultValue={authorName}/>
      </div>
    </div>
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" placeholder="Book image URL" required defaultValue={imageURL}/>
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
        <Textarea id="bookDescription" name="bookDescription" placeholder="Write your Book Description.." className='w-full'required rows={5} defaultValue={bookDescription}/>
    </div>
    <div>
    <div className="mb-2 block">
          <Label htmlFor="BookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="BookPdfURL" placeholder="Book pdf URL" required type="text" defaultValue={bookPDFURL}/>
    </div>
    <button type="submit"  className='bg-blue-500 text-white px-4 py-2 mt-4' >Update Book</button>
    </form>
    </div>
  );
}

export default EditBooks
