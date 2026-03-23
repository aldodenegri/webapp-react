
function FilmPage() {

  const films = [
    { id: 1, titolo: "Inception", anno: 2010 },
    { id: 2, titolo: "Interstellar", anno: 2014 },
    { id: 3, titolo: "The Dark Knight", anno: 2008 },
    { id: 4, titolo: "Matrix", anno: 1999 }
  ];

  return (
    <>
      <h1>Qui verranno elencati i film</h1>

      <ul>
        {films.map((film) => (
          <li key={film.id}>
            {film.titolo} ({film.anno})
          </li>
        ))}
      </ul>
    </>
  );
}

export default FilmPage;