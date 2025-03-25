
'use client'

import { CartContext } from '@/app/layout';
import { BookDto } from '@/ds/book.dto';
import { getBookById } from '@/service/BookService';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export  default  function BookDetails() {
    const {addToCart} = useContext(CartContext);
    const {id}:{id:string} = useParams();
    const [bookDto,setBookDto] = useState<BookDto>({} as BookDto);  
    useEffect(()=>{
        getBookById(parseInt(id))
            .then(res => setBookDto(res.data))
            .catch(err => console.log(err));
    },[bookDto]);

    console.log(bookDto);

  return (
    <div className='mx-auto container  px-3 py-3'>

<div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <Image width={300} height={250} className='rounded-3xl show-sm p-3 img-fluid'
      src={`/images/books/${bookDto.imageUrl}.jpg`}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h1 className="card-title">{bookDto.bookTitle}</h1>
    <p>This book is written by <span className='text-capitalize font-bold'>{bookDto.authorName}</span>.</p>
    <p>Sales for this book is {bookDto.stock} items.</p>
    <p>Price for this book is ${bookDto.price}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, fugit!</p>
    <div className="card-actions justify-center">  
      <button onClick={() => addToCart(bookDto)}
      className="btn btn-primary me-2">Buy Now</button>
      <Link href="/" className="btn btn-primary">Continue Shopping</Link>
    </div>
  </div>
</div>
    </div>
  )
}
