import { useState } from 'react'

function App() {
  const [movie_details, set_movie_details] = useState([]);
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

  // console.log(movie_name);

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
    <div  className="bg-gray-700 h-full w-[100vw]">
      <h1 className="text-white text-7xl text-center my-2">Movie Cards</h1>
      <div className="bg-gray-700 h-full w-[100vw] flex flex-row">
        <div className="bg-gray-700 h-full w-[50%] flex flex-col justify-center  border-r-4 border-white">
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
        <div className="flex flex-row flex-wrap w-[50%] h-full items-center">
          {movie_card}
        </div>
      </div>
    </div>

  )
}

export default App
