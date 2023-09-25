import { useEffect, useState } from "react"
import {getLatestMovieList} from '../api'

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
        )
    })
    }  

    return(
        <div className="Content-container">
            <LatestMovieList/>
        </div>
    )
}

export default Latest