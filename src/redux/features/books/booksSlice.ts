import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IBook {
  genre: string;
  publicationDate: string;
}

const initialState: IBook = {
  genre: '',
  publicationDate: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    filterBookByGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    filterBookByPublicationDate: (state, action: PayloadAction<string>) => {
      state.publicationDate = action.payload;
    },
  },
});

export const { filterBookByGenre, filterBookByPublicationDate } =
  bookSlice.actions;

export const bookReducer = bookSlice.reducer;
