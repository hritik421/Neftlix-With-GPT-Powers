import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getTrailer = async () => {
        const videoList = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const jsonData = await videoList.json();
        const filterData = jsonData.results.filter((x) => x.type === "Trailer");
        const trailer = filterData ? filterData[0] : jsonData[0];
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getTrailer();
      }, []);
}

export default useMovieTrailer;