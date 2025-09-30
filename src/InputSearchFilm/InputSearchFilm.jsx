import { useState } from 'react';
import './InputSearchFilm.css'
import Button from '../Button/Button';

function InputSearchFilm({setFilmData}) {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  

  const fetchFilm = () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(inputValue)}&apikey=3783628`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setFilmData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Ошибка при получении данных о фильме:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="InputSearchFilm">
        <label className='InputSearchFilm__text' htmlFor="name">Введите название фильма</label>
        <input
          type="text"
          name="name"
          value={inputValue}
          className='InputSearchFilm__input'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={fetchFilm}>Поиск</Button>
        {loading && <p>Загрузка...</p>}
      </div>
    </>
  );
}

export default InputSearchFilm;
