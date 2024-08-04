/* eslint-disable @typescript-eslint/no-explicit-any */
import { nanoid } from "nanoid";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addBook } from "../features/bookSlice";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
  });
  const dispatch = useAppDispatch();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const id = nanoid();
    dispatch(addBook({ ...book, id }));
  };
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
          onChange={handleChange}
        />

        <input
          className="border rounded p-2 bg-gray-100 mx-2"
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />
        <button
          className="p-2 bg-green-700 text-white rounded ms-2 uppercase"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;
