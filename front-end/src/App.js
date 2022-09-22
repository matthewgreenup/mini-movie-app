import './App.css';
import React, { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const AppContext = React.createContext();
  let [movieArray, setMovieArray] = useState([]);
  const passContext = {movieArray, setMovieArray};
  useEffect(() => {
    const url = "http://localhost:8080/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data from all movie fetch: ", data);
        setMovieArray(data)
      });
  }, []);
  return (

Howdy
<AppContext.Provider value={passContext}>
<ul>
        {movieArray.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

</AppContext.Provider>

  );
}

export default App;
