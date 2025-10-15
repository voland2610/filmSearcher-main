import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import './SinglePageFilm.css';
import HeaderFilmSite from "../HeaderFilmSite/HeaderFilmSite";

function SinglePageFilm(){
    const [SingleFim, setSingleFim] = useState([]);
    const {title} = useParams();

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?i=${title}&apikey=3783628`)
        .then(res => res.json())
        .then(film => setSingleFim(film))
    }, [title]);

    return (
      <>
      <HeaderFilmSite></HeaderFilmSite> 
      <div className="SingleFilmPage">
        <span onClick={()=>localStorage.setItem(SingleFim.imdbID, SingleFim.Title)}>❤️</span>
        {SingleFim.Title && (
          <div className="SingleFilmPage__container">
            <img
              className="SingleFilmPage__poster"
              src={SingleFim.Poster}
              alt={SingleFim.Title}
            />
            <div className="SingleFilmPage__info">
              <h1 className="SingleFilmPage__title">{SingleFim.Title} ({SingleFim.Year})</h1>
              <p className="SingleFilmPage__meta">
                {SingleFim.Genre} | {SingleFim.Runtime} | Rated: {SingleFim.Rated}
              </p>
              <p className="SingleFilmPage__plot">{SingleFim.Plot}</p>
              
              <div className="SingleFilmPage__ratings">
                {SingleFim.Ratings?.map((rating, idx) => (
                  <div key={idx} className="SingleFilmPage__rating">
                    {rating.Source}: {rating.Value}
                  </div>
                ))}
              </div>
              <NavLink to={`/`} className="SingleFilmPage__button">
                <Button>Назад</Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
      </>
    );
}

export default SinglePageFilm;