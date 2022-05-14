export const URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};
