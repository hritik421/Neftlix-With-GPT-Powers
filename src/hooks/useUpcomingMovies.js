import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMoviesList } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
        const dispatch = useDispatch();
        const getNowPlayingMovies = async () => {
            const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
            const data = await movies.json();
            dispatch(addUpcomingMoviesList(data.results));
        }
    
      useEffect(() => {
        getNowPlayingMovies();
      }, []);
}

export default useUpcomingMovies