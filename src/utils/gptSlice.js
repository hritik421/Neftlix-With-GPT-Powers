import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptView : false,
        movieNames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptView: (state) => {
            state.showGptView = !state.showGptView;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {toggleGptView, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;