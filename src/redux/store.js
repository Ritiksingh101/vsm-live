import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/bookSlice'
import sliderReducer from './slices/sliderSlice'
export default configureStore({
  reducer: {
    books: bookReducer,
    slider: sliderReducer, 
  },
})