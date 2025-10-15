import { useEffect, useState } from "react";
import HeaderFilmSite from "../HeaderFilmSite/HeaderFilmSite";

function FavoritesFilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const requests = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const title = localStorage.getItem(key);
      requests.push(
        fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=3783628`)
          .then(res => res.json())
      );
    }

    Promise.all(requests)
      .then(filmsData => setFilms(filmsData))
      .catch(error => console.error("Ошибка при загрузке фильмов:", error));
  }, []);

  return (
    <>
      <HeaderFilmSite />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {films.map((film, index) => (
          <div key={index} style={{ width: "200px" }}>
            <img src={film.Poster} alt={film.Title} style={{ width: "100%" }} />
            <h3>{film.Title}</h3>
            <p>{film.Year}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FavoritesFilms;
