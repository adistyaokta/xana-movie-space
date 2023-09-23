import { useEffect, useState } from "react"
import {getMovieList, searchMovie} from '../api'

function Content() {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getMovieList().then((results) => {
          setPopularMovies(results)
        })
      }, [])
    
    const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (          
        <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img className="Movie-thumbnail" alt="" 
            src={`${process.env.REACT_APP_BASEIMGURL}/w342/${movie.poster_path}`}/>
            <div className="Movie-date">Release date: {movie.release_date}</div>
            <div className="Movie-rating">{movie.vote_average}</div>
        </div>
        )
    })
    }

    const search = async (q) => {
        if (q.length > 3) {
          const query = await searchMovie(q)
          setPopularMovies(query.results)
        }
    }
  

    return(
        <div className="Content-container">
            <PopularMovieList/>
        </div>
    )
}

export default Content