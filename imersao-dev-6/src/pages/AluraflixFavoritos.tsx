import { FormEvent, useState } from 'react';
import backgroundAluraflixFavoritos from '../assets/images/background-aluraflixFavoritos.png';
import logoImersaoRed from '../assets/images/logo-imersao-red.svg';

export function AluraflixFavoritos() {
  const [movieList, setMovieList] = useState([
    {
      id: 0,
      movieUrl:
        'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg',
      movieName: 'Kill Bill 1',
    },
  ]);
  const [movieUrl, setMovieUrl] = useState('');
  const [movieName, setMovieName] = useState('');

  function handleAddMovie(e: FormEvent) {
    e.preventDefault();
    const newMovies = [
      ...movieList,
      {
        id: movieList.length + 1,
        movieUrl,
        movieName,
      },
    ];

    setMovieList(newMovies);
    setMovieName('');
    setMovieUrl('');
  }

  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col'>
      <img
        src={backgroundAluraflixFavoritos}
        className='absolute -z-10 bg-no-repeat bg-center h-screen w-screen'
      />
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-white mb-2 text-3xl'>Aluraflix Favoritos</h1>
        <img src={logoImersaoRed} className='w-52 mt-0 mb-3' />
      </div>
      <p className='text-white text-lg'>Qual seu filme favorito?</p>
      <form
        onSubmit={(e) => handleAddMovie(e)}
        className='flex flex-col gap-2 mt-4'
      >
        <input
          type='text'
          name='image'
          id='image'
          className='rounded h-8 pl-2 pr-4'
          placeholder='Insira a URL da imagem'
          required
          value={movieUrl}
          onChange={(e) => setMovieUrl(e.target.value)}
        />
        <input
          type='text'
          name='name'
          id='name'
          className='rounded h-8 pl-2 pr-4'
          placeholder='Insira o Nome do filme'
          required
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button className='text-white bg-red-600 rounded p-2 font-semibold hover:bg-red-800 mt-2'>
          Adicionar filme
        </button>
      </form>
      <div className='w-[90vw] h-[50vh] bg-white opacity-70 m-4 rounded overflow-auto flex flex-wrap gap-4'>
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className='w-52 p-2 flex flex-col items-center rounded mt-3 mb-3'
          >
            <h1 className='text-black text-center'>{movie.movieName}</h1>
            <img
              src={movie.movieUrl}
              alt={movie.movieName}
              className='w-40 h-56 cursor-pointer hover:transition-all hover:border-black hover:border-[6px]'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
