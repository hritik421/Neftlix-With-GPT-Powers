import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMoviesList } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const data = await movies.json();
        dispatch(addMoviesList(data.results));
      }
    
      useEffect(() => {
        getNowPlayingMovies();
      }, []);
};

export default useNowPlayingMovies;
  