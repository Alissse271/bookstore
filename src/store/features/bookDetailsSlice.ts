import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookAPI } from "services";
import { IBookDetails } from "types";

interface IBookDetailsState {
  bookDetails: IBookDetails;
  isLoading: boolean;
  error: null | string;
}

const initialState: IBookDetailsState = {
  bookDetails: {} as IBookDetails,
  isLoading: false,
  error: null,
};

export const fetchBookDescription = createAsyncThunk<IBookDetails, string, { rejectValue: string }>(
  "book/fetchBookDescription",
  async (isbn: string, { rejectWithValue }) => {
    try {
      const bookDescription = bookAPI.getBookDetails(isbn);
      return bookDescription;
    } catch (error) {
      rejectWithValue("Error");
    }
  },
);

const bookDetailsSlice = createSlice({
  name: "bookDescription",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookDescription.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBookDescription.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.bookDetails = payload;
      state.error = null;
    });
    builder.addCase(fetchBookDescription.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default bookDetailsSlice.reducer;
export const {} = bookDetailsSlice.actions;
