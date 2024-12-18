import { useEffect } from "react";
import { api_options, nowplaying_url } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingMovieLists } from "../../utils/movieSlice";

const useNowPlayingMovieLists = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingList);

    useEffect(()=> {
            fetch(nowplaying_url, api_options)
    .then(res => res.json())
    .then(json => dispatch(nowPlayingMovieLists(json.results)))
    .catch(err => console.error(err));
    },[])
}

export default useNowPlayingMovieLists