import { FormEvent, useState } from 'react';

export function AluraflixFavoritos() {
  const [movieList, setMovieList] = useState([
    { id: 0, movieUrl: '', movieName: '' },
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
    console.log(movieUrl, movieName);
    console.log(movieList);
    setMovieList(newMovies);
    console.log(movieList);
  }

  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col'>
      <img
        src='https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-04-aluraflix-e-filmes.png'
        className='absolute -z-10 bg-no-repeat bg-center h-screen w-screen'
      />
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-white mb-2 text-3xl'>Aluraflix Favoritos</h1>
        <img
          src='https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg'
          className='w-52 mt-0 mb-3'
        />
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
          onChange={(e) => setMovieUrl(e.target.value)}
        />
        <input
          type='text'
          name='name'
          id='name'
          className='rounded h-8 pl-2 pr-4'
          placeholder='Insira o Nome do filme'
          required
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button className='text-white bg-red-600 rounded p-2 font-semibold hover:bg-red-800 mt-2'>
          Adicionar filme
        </button>
      </form>
      <div className='w-[80vw] h-screen bg-white opacity-20 m-4 rounded'>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <p>{movie.movieName}</p>
            <p>{movie.movieUrl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
