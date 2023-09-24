import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        upcomingMovies: null,
        topRatedMovies: null,
        popularMovies: null,
        trendingMovies: null,
    },
    reducers:{
        addMoviesList: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addUpcomingMoviesList: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMoviesList: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addPopularMoviesList: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMoviesList: (state, action) => {
            state.trendingMovies = action.payload;
        }
    }
});

export const{addMoviesList, addTrailerVideo, addUpcomingMoviesList, addPopularMoviesList, addTopRatedMoviesList, addTrendingMoviesList} = moviesSlice.actions;
export default moviesSlice.reducer;