import { NavLink } from 'react-router-dom';
import './HeaderFilmSite.css';

function HeaderFilmSite(){
    return( 
        <header>
            <NavLink to='/'>
                <div className="header__nameText">Film filter</div>
            </NavLink>            
            <NavLink to='/FavoritesFilms'>
                <div className="header__favorites">Favorites Films</div>
            </NavLink>                 
        </header>
    )
}

export default HeaderFilmSite;