import { useEffect, useState } from "react"
import {getLatestMovieList, searchMovie} from '../api'

function Latest() {
    const [latestMovies, setLatestMovies] = useState([])

    useEffect(() => {
        getLatestMovieList().then((results) => {
          setLatestMovies(results)
        })
      }, [])
    
    const LatestMovieList = () => {
    return latestMovies.map((movie, i) => {
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

    const searchLatest = async (q) => {
        if (q.length > 3) {
          const query = await searchMovie(q)
          setLatestMovies(query.results)
        }
    }
  

    return(
        <div className="Content-container">
            <LatestMovieList searchLatest={searchLatest}/>
        </div>
    )
}

export default Latest