import { useEffect, useState } from "react"
import axios from "axios"

const apikey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
    const movie = await axios.get(
        `${baseUrl}/trending/movie/day?page=1&api_key=${apikey}`
        )
    return movie.data.results
}

function Latest() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovieList().then((results) => {
          setMovies(results)
        })
      }, [])
    
        const LatestMovieList = () => {
            return movies.map((movie, i) => {
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

    return(
        <div className="Content-container">
            <LatestMovieList/>
        </div>
    )
}

export default Latest