import './App.css'
import React, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from './Components/Home'
import {MoviePage} from './Components/MoviePage'

export const AppContext = React.createContext();

function App () {
  const [searchText, setSearchText] = useState('')
  const [movieArray, setMovieArray] = useState([])
  const [currMovie, setCurrMovie] = useState({})
  const passContext = { movieArray, setMovieArray, searchText, setSearchText, currMovie, setCurrMovie }
  
  //simple fetch
  // useEffect(() => {
  //   const url = 'http://localhost:8080/'
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log('data from all movie fetch: ', data)
  //       setMovieArray(data)
  //     })
  // }, [])

  useEffect(() => {
    const url = `http://localhost:8080/search/${searchText}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('data from all movie fetch: ', data)
        setMovieArray(data)
      })
  }, [searchText])

  return (
    <AppContext.Provider value={passContext}>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MoviePage/>}/>

        </Routes>


      </Router>
    </AppContext.Provider>
  )
}

export default App
