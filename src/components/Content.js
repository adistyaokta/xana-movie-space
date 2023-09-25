import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from '../api';

function Content({ searchValue }) {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    if (searchValue.length > 3) {
      searchMovie(searchValue).then((query) => {
        setPopularMovies(query.results);
      });
    } else {
      // If the search query is not valid, fetch popular movies
      getMovieList().then((results) => {
        setPopularMovies(results);
      });
    }
  }, [searchValue]);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title">{movie.title}</div>
        <img
          className="Movie-thumbnail"
          alt=""
          src={`${process.env.REACT_APP_BASEIMGURL}/w342/${movie.poster_path}`}
        />
        <div className="Movie-date">Release date: {movie.release_date}</div>
        <div className="Movie-rating">{movie.vote_average}</div>
      </div>
    ));
  };

  return (
    <div className="Content-container">
      <PopularMovieList />
    </div>
  );
}

export default Content;
