import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
    },
    reducers:{
        addMoviesList: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const{addMoviesList} = moviesSlice.actions;
export default moviesSlice.reducer;