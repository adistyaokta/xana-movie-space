import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from '../api';

function Content({ searchValue }) {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue.length > 3) {
        const query = await searchMovie(searchValue);
        setPopularMovies(query.results);
      } else {
        const results = await getMovieList();
        setPopularMovies(results);
      }
    };

    fetchData();
  }, [searchValue]);

  return (
    <div className="Content-container">
      {popularMovies.map((movie, i) => (
        <div
          className="Movie-wrapper"
          key={i}
          style={{
            backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/w342/${movie.poster_path})`,
          }}
        >
          <div className="Movie-details">
            <div className="Movie-title">{movie.title}</div>
            <div className="Movie-date">Release date: {movie.release_date}</div>
            <div className="Movie-rating">{movie.vote_average}<i class="fa fa-solid fa-star"></i></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
