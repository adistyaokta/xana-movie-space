import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const apikey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
    const movie = await axios.get(
        `${baseUrl}/trending/movie/day?page=1&api_key=${apikey}`
        )
    return movie.data.results
}

const Trending = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovieList().then((results) => {
          setMovies(results)
        })
      }, [])

    const responsive = {
      all: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
      },
  };
  
  return (
    <div className="Carousel-container">
      <Carousel
        responsive={responsive}
        itemClass="Trending-wrapper"
        centerMode={true}
        swipeable={false}
        draggable={true}
        showDots={false}
        ssr={true}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="Carousel-container"
        removeArrowOnDeviceType={['all']}
        dotListClass="custom-dot-list-style"
      >
        <div className="Trending-container">
          {movies.map((results, index) => {
            return (
              <div className="Movie-wrapper" key={index}>
                <img
                  className="Movie-thumbnail"
                  alt=""
                  src={`${process.env.REACT_APP_BASEIMGURL}/w154/${results.poster_path}`}
                />
                <div className="Movie-details">
                  <div className="Movie-title">{results.title}</div>
                  <div className="Movie-date">Release date: {results.release_date}</div>
                  <div className="Movie-rating">{results.vote_average}<i class="fa fa-solid fa-star"></i></div>
                </div>
              </div>
            )
          })}
        </div>
      </Carousel>
    </div>
  )
}

export default Trending
