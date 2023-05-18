import React, { useEffect } from "react";
// import movieApi from "../../common/apis/movieApi";
// import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
// import { addMovies } from "../../features/movies/movieSlice";

function Home() {
  // const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());

    // const fetchMovies = async () => {
    // const response = await movieApi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err) => {
    //     console.log("Error = ", err);
    //   });
    // dispatch(addMovies(response.data));
    // console.log("Response from API = ", response);
    // };
    // fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>

      <MovieListing />
    </div>
  );
}

export default Home;
