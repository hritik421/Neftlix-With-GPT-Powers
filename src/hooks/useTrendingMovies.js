import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMoviesList } from '../utils/moviesSlice';

const useTrendingMovies = () => {
        const dispatch = useDispatch();
        const getTrendingMovies = async () => {
            const movies = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', API_OPTIONS);
            const data = await movies.json();
            dispatch(addTrendingMoviesList(data.results));
        }
    
      useEffect(() => {
        getTrendingMovies();
      }, []);
}

export default useTrendingMovies