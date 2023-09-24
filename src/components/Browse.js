import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MoviesList * N
          - cards * N
      */}
    </div>
  );
};

export default Browse