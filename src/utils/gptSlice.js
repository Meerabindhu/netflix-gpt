import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"gptslice",
    initialState: {
        showGptSearch: false,
        gptMoviesList: [],
        movieNames: []
    },
    reducers: {
        toggleGPTSearch: (state,action)=>{
            state.showGptSearch = !state.showGptSearch
        },
        getGPTMovies: (state,action) => {
            state.gptMoviesList = action.payload?.promiseArr;
            state.movieNames = action.payload?.moviesListArr;
        }
    }
})

export default GPTSlice.reducer;

export const { toggleGPTSearch, getGPTMovies} = GPTSlice.actions;