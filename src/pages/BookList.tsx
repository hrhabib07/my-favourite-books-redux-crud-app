import { SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import AddBook from "../components/AddBook";
import { deleteBook } from "../features/bookSlice";

const BookList = () => {
  const { books } = useAppSelector((state) => state.booksR);
  const dispatch = useAppDispatch();
  const [editableBook, setEditableBook] = useState({
    id: "",
    title: "",
    author: "",
  });
  const handleEditBook = (
    data: SetStateAction<{ id: string; title: string; author: string }>
  ) => {
    setEditableBook(data);
  };

  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold">My favorite books list</h1>
        <div>
          <AddBook editableBook={editableBook}></AddBook>
        </div>
        <div className="my-8">
          <ol>
            {books.map((book) => (
              <div className="grid grid-cols-10 items-center my-2  p-2 bg-gray-50">
                <li className="list-decimal col-span-8 text-2xl" key={book.id}>
                  <span className="text-md font-semibold">{book.title} </span>{" "}
                  <span className="text-gray-700">- by {book.author}</span>
                </li>
                <button
                  onClick={() => handleEditBook(book)}
                  className="p-2 bg-green-700 text-white rounded ms-2 uppercase"
                >
                  Edit{" "}
                </button>
                <button
                  onClick={() => dispatch(deleteBook(book.id))}
                  className="p-2 bg-red-700 text-white rounded ms-2 uppercase"
                >
                  Remove{" "}
                </button>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BookList;
