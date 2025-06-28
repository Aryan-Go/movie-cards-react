import React from 'react'
import { useState } from 'react'


const Movie_card = (props) => {
    const movie_details = props.movie_details;
    const movie_card = movie_details.map((movie, index) => {
        return (
          <div key={index} className=" mx-5 bg-gray-800 m-[1rem] p-[1rem] rounded-2xl">
            <h1 className="text-white text-3xl">Movie name</h1>
            <p className="text-white text-xl">{movie.movie_name} </p>
            <img alt="movie image" src={movie.url} />
            <h1 className="text-white text-3xl">Rating</h1>
            <p className="text-white text-xl">{movie.rating}/10 </p>
            <h1 className="text-white text-3xl">Description </h1>
            <p className="text-white text-xl">{movie.description} </p>
        </div>
        )
      })
  return (
    <div className="flex flex-row flex-wrap w-[50%] h-full items-center">
    {movie_card}
  </div>
  )
}

export default Movie_card