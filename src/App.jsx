import './App.css'
import FilmCard from './FilmCard/FilmCard'
import HeaderFilmSite from './HeaderFilmSite/HeaderFilmSite'
import InputSearchFilm from './InputSearchFilm/InputSearchFilm'
import { useState } from 'react';

function App() {
  const [filmData, setFilmData] = useState({});
  return (
    <>                                                                               
      <HeaderFilmSite></HeaderFilmSite>
      <InputSearchFilm setFilmData={setFilmData}></InputSearchFilm>
      <FilmCard filmData={filmData}></FilmCard>
    </>
  )
}

export default App;
