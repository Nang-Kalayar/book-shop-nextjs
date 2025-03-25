import { BookDto } from "@/ds/book.dto";
import axios from "axios";


const BOOK_STORE_BACKEND_URL = "http://localhost:8080/api/books";



export const getBooks = async (): Promise<BookDto[]> => {
    const response = await axios.get<BookDto[]>(BOOK_STORE_BACKEND_URL);
    return response.data; // Extract the `data` property from the response
};

export const getBookById = (id:number) =>
    axios.get<BookDto>(`${BOOK_STORE_BACKEND_URL}/details/${id}`);


    