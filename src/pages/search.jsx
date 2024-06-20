import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom" //permite pegar query string da url 
import MovieCard from '../components/movieCard'

const searchURL= import.meta.env.VITE_SEARCH
const apiKey= import.meta.env.VITE_API_KEY

import './movieGrid.css'

const Search = () => {
  
  const [topMovies, setTopMovies] = useState([])

  const [searchParams]= useSearchParams()  //deve envolver com array 55:40 time video
  const [movies, setMovies]= useState([])
  const query= searchParams.get('q')

  return (
    <div className="container">
      <h2 className="title">
        {' '}
        Resultados para: <span className="query-text"> {query} </span>{' '}
      </h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p> Carregando... </p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Search
