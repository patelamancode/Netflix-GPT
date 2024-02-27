import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    movieTrailer: null,
    popularMovie: null,
    topRatedMovie: null,
    upComingMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpComingMovie: (state, action) => {
      state.upComingMovie = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addMovieTrailer,
  addPopularMovie,
  addTopRatedMovie,
  addUpComingMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
