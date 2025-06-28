import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const movie_details = props.movie_details;
    const set_movie_details = props.set_movie_details;
    const [movie_name, set_movie_name] = useState("");
  const handle_movie_input = (e) => {
    set_movie_name(e.target.value);
  }

  const [description_name, set_description_name] = useState("");
  const handle_description_input = (e) => {
    set_description_name(e.target.value);
  }

  const [rating_name, set_rating_name] = useState("");
  const handle_rating_input = (e) => {
    set_rating_name(e.target.value);
  }

  const [url_name, set_url_name] = useState("");
  const handle_url_input = (e) => {
    set_url_name(e.target.value);
  }

  const handle_form_submission = (e) => {
    e.preventDefault();
    console.log("The form has been submitted");
    let temp_movie_details = [...movie_details];
    let new_movie_Details = {
      movie_name: movie_name,
      description: description_name,
      rating: rating_name,
      url: url_name
    }
    temp_movie_details.push(new_movie_Details);
    console.log(temp_movie_details);
    set_movie_details(temp_movie_details);
    set_url_name("");
    set_rating_name("");
    set_description_name("");
    set_movie_name("");
  }
    console.log(movie_details);
  return (
    <div className="bg-gray-700 w-[50%] h-[100%] flex flex-col justify-center  border-r-10 border-b-10 border-white">
        <form onSubmit={ handle_form_submission }>
        <label className="text-white text-3xl mx-5">What is the name of the movie</label><br/>
        <input required className="border-b-4 border-white outline-0 text-white text-3xl w-[80%] mx-5 my-10" placeholder="title" onChange={handle_movie_input} value={movie_name}></input><br/>

        <label className="text-white text-3xl mx-5">What is the description of the movie</label><br/>
        <textarea required className="border-4 border-white outline-0 text-white text-3xl w-[80%] h-[30%] mx-5 my-10" placeholder="description" onChange={handle_description_input} value={description_name}></textarea><br/>

        <label className="text-white text-3xl mx-5">What is the rating of the movie out of 10</label><br/>
        <input required type="number" min="0" max="10" className="border-b-4 border-white outline-0 text-white text-3xl w-[80%] mx-5 my-10" placeholder="rating" onChange={handle_rating_input} value={rating_name}></input><br/>

        <label className="text-white text-3xl mx-5">What is the name of the movie</label><br/>
        <input type="url" required className="border-b-4 border-white outline-0 text-white text-3xl w-[80%] mx-5 my-10" placeholder="url of image" onChange={handle_url_input} value={url_name}></input><br /><br />
        
        <button className="bg-white text-gray-700 text-3xl w-[80%] mx-5 my-10 p-2 rounded-lg hover:bg-gray-300">Submit</button>
        </form>
    </div>

)}

export default Form