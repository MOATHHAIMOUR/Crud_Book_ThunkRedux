import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInsert } from "./repoertSlice";

//status could be received or error or loading
const initialState = { books: null, status: null, error: null };

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (dataBook, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    dataBook.username = getState().auth.name;
    try {
      const res = await fetch("http://localhost:5000/books", {
        method: "POST",
        body: JSON.stringify(dataBook),
        headers: {
          "content-Type": "application/json charset=UTF-8",
        },
      });
      const data = await res.json();
      dispatch(logInsert({ name: "insertBook", status: "Success" }));
      return data;
    } catch (error) {
      dispatch(logInsert({ name: "insertBook", status: "Failed" }));
      return rejectWithValue(error.message);
    }
  }
);
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const BookSlice = createSlice({
  name: "book",
  initialState, // Should be lowercase 'i'
  reducers: {},
  extraReducers: (builder) => {
    // get books
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = "received";
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });

    // insert books
    builder
      .addCase(insertBook.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.status = "received";
        state.books.push(action.payload);
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });

    // delete books
    builder
      .addCase(deleteBook.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "received";
        state.books = state.books.filter((b) => b.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export default BookSlice.reducer;
