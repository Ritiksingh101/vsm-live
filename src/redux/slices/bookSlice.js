import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk('books/fetchCategories', async () => {
  const response = await fetch("https://api.vedscienceandmaths.com/api/category", {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + "2|e8U7SSdsCJ3X0YHmIwKQvkx5q2FtVxaizqOEbJvD",
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    categories: [],
    status: 'idle', // or 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    // Add any additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Sanitize URLs
        state.categories = action.payload.map(category => ({
          ...category,
          books: category.books.map(book => ({
            ...book,
            book: book.book.replace('/books/books/', '/books/'),
          })),
        }));
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
