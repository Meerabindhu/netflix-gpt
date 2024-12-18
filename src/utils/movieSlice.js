import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingList:{},
        trailerVideo:{},
        popularMovies: {}
    },
    reducers: {
        nowPlayingMovieLists : (state,action) => {
            state.nowPlayingList = action.payload;
        },
        popularMovieLists : (state,action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo= action.payload;
        }
    }
})

export default movieSlice.reducer;

export const {nowPlayingMovieLists,popularMovieLists,addTrailerVideo} = movieSlice.actions;