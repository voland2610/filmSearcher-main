import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import '../FilmCard/FilmCard.css'
// ❤️ 🤍 переписать onClick
function Def(props){
    return(
        <>
          <div className="film-card">
            <span className="film-card__favorite" onClick={(e)=>{
              localStorage.setItem(props.to, props.alt)
              e.target.textContent == '🤍' ? e.target.textContent = '❤️' : e.target.textContent = '🤍'
              }}>🤍</span>
            <img className="film-card__img" src={props.src} alt={props.alt} />
            <p className="film-card__title">{props.alt}</p>
            <NavLink to={props.to}>
                <Button>Смотреть</Button>
            </NavLink>             
          </div>
        </>
    );
}

export default Def;