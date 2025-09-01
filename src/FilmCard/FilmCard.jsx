import { useEffect, useState } from 'react';
import './FilmCard.css';

function FilmCard({filmData}) {
  const nameFilms = ['iron man', 'iron man 2', 'fight club'];
  let [startsFilm, setStartsFilm] = useState([]);
  useEffect(()=>{
    let requsts = nameFilms.map(nameFilm => fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(nameFilm)}&apikey=3783628`))
    Promise.all(requsts)
        .then(response => Promise.all(response.map(r=>r.json())))
        .then(films=>{setStartsFilm(films) 
        })

  },[])
  
  
  return (
    <>
    {/* {filmData && filmData.Response !== "False" ? (
        <div className="film-card">
          <img className="film-card__img" src={filmData.Poster} alt={filmData.Title} />
          <p className="film-card__title">{filmData.Title}</p>
        </div>
      ) : (
        filmData && <p>Фильм не найден.</p>
      )} */}
      
      {Object.keys(filmData).length === 0 ? (
        startsFilm.map((data, index) => (
        <div key={index} className="film-card">
          <img className="film-card__img" src={data.Poster} alt={data.Title} />
          <p className="film-card__title">{data.Title}</p>
        </div>
      ))
    ) : (
      <div className="film-card">
        <img className="film-card__img" src={filmData.Poster} alt={filmData.Title} />
        <p className="film-card__title">{filmData.Title}</p>
      </div>
    )}
    </>
  );
}

export default FilmCard;
