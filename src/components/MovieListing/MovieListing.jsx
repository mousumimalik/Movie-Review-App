import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "",
    renderShows = "";

  renderMovies =
    movies && movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3 className="">{movies && movies.Error}</h3>
      </div>
    );
  // console.log("movies => ", movies);

  renderShows =
    shows && shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="show-error">
        <h3 className="">{shows && shows.Error}</h3>
      </div>
    );
  // console.log("shows => ", shows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="">Movies</h2>

        <div className="movie-container">{renderMovies}</div>
      </div>

      <div className="show-list">
        <h2 className="">Shows</h2>

        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}

export default MovieListing;
