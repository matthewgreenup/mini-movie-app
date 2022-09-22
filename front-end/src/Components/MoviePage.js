import React, { useContext, useNavigate } from 'react'
import { AppContext } from '../App'
import {Search} from './Search'


export const MoviePage = () => {
  const { movieArray, setMovieArray } = useContext(AppContext)

  return (
    <div      id=' registerContainer '
    className=' grid h-screen place-items-center '>
      <Search />
      <div
      className='flex flex-col items-center pt-10 pb-20 space-y-10'
    >
      <h1 className='text-5xl font-extrabold text-white'>These afffre the movies</h1>
      <ul>
        {movieArray.map(movie => (
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2 justify-center mt-5 mb-20">
            <li key={movie.id}>{movie.title}</li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  )
}
