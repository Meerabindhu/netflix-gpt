import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="p-4">
      <div className="text-2xl py-4 font-bold text-white">{title}</div>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList?.length &&
            movieList?.map((movie) => <MovieCard movieData={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
