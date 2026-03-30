import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Film.module.css';

function FilmPage() {

  // const films = [
  //   { id: 1, titolo: "Inception", anno: 2010 },
  //   { id: 2, titolo: "Interstellar", anno: 2014 },
  //   { id: 3, titolo: "The Dark Knight", anno: 2008 },
  //   { id: 4, titolo: "Matrix", anno: 1999 }
  // ];
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        console.log(response.data);
        setFilms(response.data.rows);
      }).catch((error) => {
        console.error("Errore nel recupero dei film:", error);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista dei Film</h1>
      <div className={styles.grid}>
        {films.map((film, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.filmTitle}>{film.title}</h2>
            <p><strong>Regista:</strong> {film.director}</p>
            <p><strong>Genere:</strong> {film.genre}</p>
            <p><strong>Anno:</strong> {film.release_year}</p>
            <p className={styles.abstract}>{film.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmPage;