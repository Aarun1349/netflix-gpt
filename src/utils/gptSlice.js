import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    searchResult:null,
    movieNames:null
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    searchMovies:(state,action)=>{
        state.searchResult = action.payload
    },
    addGptMovies :(state,action)=>{
      const {movieNames,movieList}=action.payload
      state.searchResult = movieList;
      state.movieNames=movieNames;
    }
  },
});
export const {toggleGPTSearchView,addGptMovies} = gptSlice.actions
export default gptSlice.reducer;
