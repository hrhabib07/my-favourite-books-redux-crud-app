import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  books: {
    id: string;
    title: string;
    author: string;
  }[];
};

const initialState: TInitialState = {
  books: [
    {
      id: "f1",
      title: "Atomic habits",
      author: "James Clear",
    },
    {
      id: "f2",
      title: "The 7 Habits of Highly effective people",
      author: "Stephen R. Convey",
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((item) => item.id !== id);
    },
    addBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
    },
  },
});

export const { deleteBook, addBook } = bookSlice.actions;

export default bookSlice.reducer;
