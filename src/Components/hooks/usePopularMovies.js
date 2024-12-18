import { useEffect } from "react";
import { api_options, popularmovies_url } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { popularMovieLists } from "../../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
            fetch(popularmovies_url, api_options)
    .then(res => res.json())
    .then(json => dispatch(popularMovieLists(json.results)))
    .catch(err => console.error(err));
    },[])
}

export default usePopularMovies