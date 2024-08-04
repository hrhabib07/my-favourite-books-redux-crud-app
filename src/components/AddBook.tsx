/* eslint-disable @typescript-eslint/no-explicit-any */
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addBook, editBook } from "../features/bookSlice";

type TEditableBook = {
  editableBook: { id: string; title: string; author: string };
};

const AddBook = ({ editableBook }: TEditableBook) => {
  const editableBookId = editableBook.id;
  const [book, setBook] = useState({
    title: "",
    author: "",
  });
  const dispatch = useAppDispatch();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const id = nanoid();
    if (editableBook.title) {
      dispatch(editBook({ ...book, id: editableBookId }));
    } else {
      dispatch(addBook({ ...book, id }));
    }
  };

  useEffect(() => {
    if (editableBook) {
      setBook({
        title: editableBook.title,
        author: editableBook.author,
      });
    }
  }, [editableBook]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setBook((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };
  return (
    <div className="my-4">
      <h1>Add new book here</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="border rounded p-2 bg-gray-100"
          type="text"
          name="title"
          placeholder="Book Name"
          value={book.title}
          onChange={handleChange}
        />

        <input
          className="border rounded p-2 bg-gray-100 mx-2"
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
        />
        <button
          className="p-2 bg-green-700 text-white rounded ms-2 uppercase"
          type="submit"
        >
          {editableBook.title ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
