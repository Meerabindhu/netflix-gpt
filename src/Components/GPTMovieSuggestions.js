import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt);
  const { movieNames, gptMoviesList } = gptMovies || {};
  if (!gptMoviesList) return;
  console.log({ gptMovies });

  return (
    <>
      {gptMoviesList?.length && (
        <div className="p-4 m-4 bg-black bg-opacity-50">
          {movieNames.map((each, index) => (
            <MovieList title={each} movieList={gptMoviesList[index]?.results} />
          ))}
        </div>
      )}
    </>
  );
};

export default GPTMovieSuggestions;
