'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createContext, useState } from "react";
import { BookDto } from "@/ds/book.dto";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const CartContext = createContext({
  booksDto : [] as BookDto[],
  addToCart : (bookDto:BookDto) => {},
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [booksDto,setBookDto] = useState<BookDto[]>([] as BookDto[]);
  const addToCart = (bookDto:BookDto) => {
    if(!isDuplicate(bookDto)){
      setBookDto([...booksDto,bookDto]);
    }
  }
  const isDuplicate= (item : BookDto) => booksDto.some((book) => book.bookId === item.bookId);
  const contextValue = {booksDto,addToCart};
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartContext.Provider value={contextValue}>
          {children}
        </CartContext.Provider>
       
      </body>
    </html>
  );
}
