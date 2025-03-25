import { getBooks } from '@/service/BookService'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function HomePage() {
  const books = await getBooks()
  .catch(e => {
    console.log(e)
    return [];
  })
  
  return (
    <div className='mx-auto container max-w-[15020px] px-3 py-3 bg-purple-50'>
       <div className='grid grid-cols-4 gap-2'>
      {
        books && books.length > 0 && books.map((book) =>(
         
          <div className='card bg-base-100 w-70 shadow-sm mb-3 rounded-3xl' key={book.bookId}>
              <figure>
                <Image src={`/images/books/${book.imageUrl}.jpg`}
                  width={250} height={200} className='rounded-3xl p-3'
                  alt="" />
              </figure>

              <div className='card-body'>
                  <h2 className='card-title'>{book.bookTitle}</h2>
                  <span className='text-capitalize'>{book.authorName}</span>
                  <div className='flex justify-between items-center'>
                      <span>${book.price}</span>
                      <div>
                      <span className='text-purple-700 font-bold me-1'>Sales</span> <span>{book.stock} items.</span> 
                      </div>
                      
                  </div>
                  <div className='card-actions justify-between p-1 items-center'>
                      <Link href={`/book-details/${book.bookId}`} className='badge badge-primary p-3'>Details</Link>
                      <Link href="/cart" className='badge badge-primary p-3'>AddToCart</Link>
                  </div>
              </div>
          
      </div>
        ))
            
      }
      </div>
      
    </div>
  )
}
