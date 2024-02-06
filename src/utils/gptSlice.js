import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    searchResult:[]
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    searchMovies:(state,action)=>{
        state.searchResult = action.payload
    }
  },
});
export const {toggleGPTSearchView} = gptSlice.actions
export default gptSlice.reducer;
