import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'
import { Search } from './Search'

export const Home = () => {
  const { movieArray, setMovieArray, setCurrMovie } = useContext(AppContext)
  const navigate = useNavigate();

  return (
      <>
      <button onClick={()=>{
        navigate(`/`)
        }}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2 justify-center mt-5 ml-5">HOME</button>
      <Search />
      <div className=' grid h-screen justify-items-center'>
        < div className='flex flex-col items-center pt-10 pb-20 space-y-10'>
      <h1 className='text-5xl font-extrabold text-white'>
        {movieArray.length > 0 ? (movieArray.length === 1 ? 1 + " Movie" : `${movieArray.length} Movies`): "No Movies"} Found</h1>
      <ul>
        {movieArray.map(movie => (
          <button onClick={()=>{
            setCurrMovie(movie)
            navigate(`/movie/${movie.id}`)
            }}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2 justify-center mt-5 mb-20">
            <li key={movie.id}>{movie.title}</li>
          </button>
        ))}
      </ul>
      </div>
      </div>
    </>
  )
}
