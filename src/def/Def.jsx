import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "../FilmCard/FilmCard.css";
import { useFavoritesStore } from "../storage/favoritesStore";

function Def(props) {
  const { favorites, toggleFavorite } = useFavoritesStore();

  // проверяем, добавлен ли фильм в избранное
  const isFavorite = favorites.some((f) => f.id === props.to);

  return (
    <div className="film-card">
      <span
        className="film-card__favorite"
        onClick={() =>
          toggleFavorite({
            id: props.to,
            title: props.alt,
            poster: props.src,
          })
        }
      >
        {isFavorite ? "❤️" : "🤍"}
      </span>

      <img className="film-card__img" src={props.src} alt={props.alt} />
      <p className="film-card__title">{props.alt}</p>

      <NavLink to={props.to}>
        <Button>Смотреть</Button>
      </NavLink>
    </div>
  );
}

export default Def;
