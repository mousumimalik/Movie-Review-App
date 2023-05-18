import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.css";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  // console.log("data => ", data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));

    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>

            <div className="movie-rating">
              <span className="">
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span className="">
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span className="">
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span className="">
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>

            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div className="">
                <span className="">Director</span>
                <span className="">{data.Director}</span>
              </div>

              <div className="">
                <span className="">Stars</span>
                <span className="">{data.Actors}</span>
              </div>

              <div className="">
                <span className="">Geners</span>
                <span className="">{data.Genre}</span>
              </div>

              <div className="">
                <span className="">Languages</span>
                <span className="">{data.Language}</span>
              </div>

              <div className="">
                <span className="">Awards</span>
                <span className="">{data.Awards}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
