import { Route, Routes } from 'react-router-dom';
import FilmFilter from './pages/FilmFilter';
import FavoritesFilms from './pages/FavoritesFilms';
import SinglePageFilm from './pages/SinglePageFilm';
// настроить маршруты path
function App() {
  return (
    <>
      <Routes>                                                                              
        <Route path='/' element={<FilmFilter/>}></Route>
        <Route path='/FavoritesFilms' element={<FavoritesFilms/>}></Route>
        <Route path='/:title' element={<SinglePageFilm/>}></Route>Title
      </Routes> 
    </>
  )
}

export default App;
