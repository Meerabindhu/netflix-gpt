import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store?.movies?.nowPlayingList);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  return (
    <>
      {movieList?.length && (
        <div className="bg-black">
          <div className="relative -mt-80 z-40 pl-12">
            <MovieList title="Now Playing" movieList={movieList} />
            <MovieList title="Popular" movieList={popularMovies} />
            <MovieList title="Upcoming Movies" movieList={movieList} />
            <MovieList title="Horror Movies" movieList={movieList} />
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryContainer;
