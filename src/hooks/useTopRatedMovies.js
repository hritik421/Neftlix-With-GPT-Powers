import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMoviesList } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
        const dispatch = useDispatch();
        const getNowPlayingMovies = async () => {
            const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
            const data = await movies.json();
            dispatch(addTopRatedMoviesList(data.results));
        }
    
      useEffect(() => {
        getNowPlayingMovies();
      }, []);
}

export default useTopRatedMovies