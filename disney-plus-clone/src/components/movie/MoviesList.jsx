import React, { useEffect, useState } from "react";
import GlobalApi from "../../services/GlobalApi";
import Movie from "./Movie";

function MoviesList({ genreId }) {
  const [moviesList, setMovieList] = useState([]);

  useEffect(() => {
    getMoviesByGenreId(genreId);
  }, []);

  const getMoviesByGenreId = (genreId) => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  return <div className="flex gap-8 mt-1 md:mt-2 overflow-x-auto scrollbar-hide py-5 px-1 md:py-5 md:px-3">
    {moviesList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
    ))}
  </div>;
}

export default MoviesList;
