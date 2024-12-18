import { useDispatch } from "react-redux";
import { api_options } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";

const useVideoDetails = (movieId) => {
    const dispatch = useDispatch();

  const getVideoDetails = async () => {

    const apiData = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      api_options
    );
    const apiJsonData = await apiData.json();
    const filterData =
      apiJsonData?.results?.filter((result) => result.type === "Trailer") ||
      (apiJsonData?.results && apiJsonData?.results[0]);
    dispatch(addTrailerVideo(filterData));
  };

  useEffect(() => {
    getVideoDetails();
  }, []);

}

export default useVideoDetails