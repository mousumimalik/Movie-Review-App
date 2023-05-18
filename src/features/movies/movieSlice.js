import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

// movies

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);

// shows

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";

    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );

    return response.data;
  }
);

// movie & show details

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",

  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("Pending...");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched Movies Successfully!");

        return {
          ...state,
          movies: payload,
        };
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("Rejected!");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetched Shows Successfully!");

        return {
          ...state,
          shows: payload,
        };
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("Fetched Selected Movie/Show Successfully!");

        return {
          ...state,
          selectedMovieOrShow: payload,
        };
      });
  },
  // extraReducers: {
  //   [fetchAsyncMovies.pending]: () => {
  //     console.log("Pending...");
  //   },
  //   [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
  //     console.log("Fetched Movies Successfully!");

  //     return {
  //       ...state,
  //       movies: payload,
  //     };
  //   },
  //   [fetchAsyncMovies.rejected]: () => {
  //     console.log("Rejected!");
  //   },
  //   [fetchAsyncShows.fulfilled]: (state, { payload }) => {
  //     console.log("Fetched Shows Successfully!");

  //     return {
  //       ...state,
  //       shows: payload,
  //     };
  //   },
  //   [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
  //     console.log("Fetched Selected Movie/Show Successfully!");

  //     return {
  //       ...state,
  //       selectedMovieOrShow: payload,
  //     };
  //   },
  // },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;

// if we want to get a value from the store
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
