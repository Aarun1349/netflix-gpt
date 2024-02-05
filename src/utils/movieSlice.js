import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null,popularMovies:null,favouriteMovies:null,ratedTV:null,movieTrailer:null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addFavouriteMovies: (state, action) => {
      state.favouriteMovies = action.payload;
    },
    addRatedTV: (state, action) => {
      state.ratedTV = action.payload;
    },
    addMovieTrailer:(state,action)=>{
      state.movieTrailer = action.payload
    }
  },
});
export const {addNowPlayingMovies,addMovieTrailer,addFavouriteMovies,addRatedTV,addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;
