import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../utils/constants";
import {getGPTMovies} from '../utils/gptSlice';

const GPTSearchBar = () => {
  const langCode = useSelector((store) => store.config?.lang);
  const searchText = useRef();
  const dispatch = useDispatch();
  const moviesListArr = ["Absolution",'Heretic',"Elevation","Red One","Moana 2"]

  const searchMovieDetails = async (movie) => {
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1';
    const apiResult = await fetch(url,api_options);
    const movieJSON = await apiResult.json();
    return movieJSON
  }

  const handleGPTapi = async () => {
    // Open ai api key is not working .Caught up with 429 limit exceeded error.Used a list of hardcoded values
    const gptQuery = 'Act as a movie recommendation system to suggest some movies for the query ' + searchText.current.value + ' only give the names of 5 movies with comma separated values like the example result given below Example Result : Sholay,Nun,Golmaal,The Venom,onjuring'
    // const chatCompletion = await client.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    // });
    // const moviesList = chatCompletion.choices[0].content || moviesListArr;
    const moviesList = searchText.current.value ? moviesListArr.map(movie => searchMovieDetails(movie)) : [];
    const promiseArr = await Promise.all(moviesList) || [];
    dispatch(getGPTMovies({moviesListArr,promiseArr}));
}

  return (
    <div className="flex justify-center">
      <form
        className="w-1/2 bg-black p-2 grid grid-cols-12 "
        onClick={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="text-center rounded-md mr-4 border-e-white col-span-9"
          placeholder={lang[langCode]?.searchPlaceholder}
        />
        <button
          className="bg-red-700 rounded-md text-white px-8 py-4 col-span-3"
          onClick={handleGPTapi}
        >
          {lang[langCode]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
