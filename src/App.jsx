import { useState } from 'react'
import Form from './Form.jsx'
import Movie_card from './Movie_card.jsx'

function App() {
  const [movie_details, set_movie_details] = useState([]);
  
 
  return (
    <div  className="bg-gray-700 h-full w-[100%]">
      <h1 className="text-white text-7xl text-center my-2">Movie Cards</h1>
      <div className="bg-gray-700 h-[100%] w-[100vw] flex flex-row">
        <Form movie_details={movie_details} set_movie_details={set_movie_details} />
        <Movie_card movie_details={ movie_details} set_movie_details={set_movie_details} />
      </div>
    </div>

  )
}

export default App
