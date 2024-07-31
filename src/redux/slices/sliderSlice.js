import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching slider data
export const fetchSliders = createAsyncThunk('slider/fetchSliders', async () => {

  const response = await fetch("https://admin.vedscienceandmaths.com/slider", {
    method: 'GET',
    headers: {},
  });
  const data = await response.json();
  return data;
});

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    sliders: [],
    status: 'idle', // or 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    // Add any additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSliders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sliders = action.payload;
      })
      .addCase(fetchSliders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default sliderSlice.reducer;
