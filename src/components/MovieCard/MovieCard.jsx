import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard(props) {
  const { data } = props;

  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>

          <div className="card-bottom">
            <div className="card-info">
              <h4 className="">{data.Title}</h4>
              <p className="">{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
