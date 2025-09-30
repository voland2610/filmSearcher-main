import { useEffect, useState } from 'react';
import './FilmCard.css';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

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
            <div key={index} className="film-card">
              <img className="film-card__img" src={data.Poster} alt={data.Title} />
              <p className="film-card__title">{data.Title}</p>
              <NavLink to={`/${data.imdbID}`}>
                <Button>--</Button>
              </NavLink>              
            </div>
          ))}
        </div>
      ) : (
        <div className="film-list">
          <div className="film-card">
            <img className="film-card__img" src={filmData.Poster} alt={filmData.Title} />
            <p className="film-card__title">{filmData.Title}</p>
            <NavLink to={`/${filmData.imdbID}`}>
                <Button>--</Button>
            </NavLink> 
          </div>
        </div>
      )}
    </>
  );
}

export default FilmCard;
