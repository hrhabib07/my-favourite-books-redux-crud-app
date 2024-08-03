import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  books: {
    id: string;
    title: string;
    author: string;
    rating: number;
    price: number;
  }[];
};

const initialState: TInitialState = {
  books: [
    {
      id: "f1",
      title: "Atomic habits",
      author: "James Clear",
      rating: 4.8,
      price: 12,
    },
    {
      id: "f2",
      title: "The 7 Habits of Highly effective people",
      author: "Stephen R. Convey",
      rating: 4.7,
      price: 12,
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      // state = state.filter((item) => item.id !== id);
      console.log(state.books);
    },
  },
});

export const { deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
