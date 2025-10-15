import { useEffect, useState } from 'react';
import './FilmCard.css';
import Def from '../def/Def';

function FilmCard({ filmData }) {
  const nameFilms = ['iron man', 'iron man 2', 'fight club', "Blade Runner 2049", "nobody", "nobody 2", "Nightcrawler"];
  const [startsFilm, setStartsFilm] = useState([]);

  useEffect(() => {
    const requests = nameFilms.map(nameFilm =>
      fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(nameFilm)}&apikey=3783628`)
    );
    Promise.all(requests)
      .then(response => Promise.all(response.map(r => r.json())))
      .then(films => setStartsFilm(films));
  }, []);

  const isEmptyFilmData = !filmData || Object.keys(filmData).length === 0;

  return (
    <>
      {isEmptyFilmData ? (
        <div className="film-list">
          {startsFilm.map((data, index) => (
            data && data.Response !== "False" && (
              
              <Def
                key={index} 
                src={data.Poster}
                alt={data.Title}
                to={`/${data.imdbID}`}

              />
            )
          ))}
        </div>
      ) : (
        <div className="film-list">
          <Def src={filmData.Poster} alt={filmData.Title} to={`/${filmData.imdbID}`}></Def>
        </div>
      )}
    </>
  );
}

export default FilmCard;
