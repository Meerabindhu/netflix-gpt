import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { background_img } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={background_img} alt="Background logo" />
      </div>
    <div className="pt-[8%]">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
    </>
  );
};

export default GPTSearch;
