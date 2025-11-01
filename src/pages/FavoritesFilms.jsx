import { useEffect, useState } from "react";
import HeaderFilmSite from "../HeaderFilmSite/HeaderFilmSite";
import Def from "../def/Def";

function FavoritesFilms() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const films = JSON.parse(localStorage.getItem("favorites"))
    const requests = films.map(nameFilm =>
      fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(nameFilm.title)}&apikey=3783628`)
    );
    Promise.all(requests)
      .then(response => Promise.all(response.map(r => r.json())))
      .then(films => setFilms(films));
  }, []);


  return (
    <>
      <HeaderFilmSite />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {films.map((film, index) => (
          <Def
              key={index} 
              src={film.Poster}
              alt={film.Title}
              to={`/${film.imdbID}`}
          />
        ))}
      </div>
    </>
  );
}

export default FavoritesFilms;
