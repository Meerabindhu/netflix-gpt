import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlayingMovieLists from "../Components/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const userData = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt?.showGptSearch);

  useNowPlayingMovieLists();
  usePopularMovies();

  return (
    <div>
        <Header userData={userData}></Header>
        {showGPTSearch ? (
            <GPTSearch/>
        ) : (
            <>
                <MainContainer/>
                <SecondaryContainer/>
            </>
        )}
    </div>
  );
};

export default Browse;
