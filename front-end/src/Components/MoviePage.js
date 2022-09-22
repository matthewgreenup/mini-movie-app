import React, { useContext } from 'react'
import { AppContext } from '../App'
import {Search} from './Search'
import { useNavigate } from 'react-router-dom'


export const MoviePage = () => {
  const { movieArray, setMovieArray, currMovie } = useContext(AppContext)
  const navigate = useNavigate();
  return (
    <>
    <button onClick={()=>{
        navigate(`/`)
        }}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2 justify-center mt-5 mb-20 ml-5">HOME</button>
    <div className=' grid h-screen justify-items-center mt-10'>
    <h1 className='text-5xl font-extrabold text-white'>{currMovie.title}</h1>
    </div>
    
    </>
    )
}
