import { FormEvent } from 'react';

export function AluraflixFavoritos() {
  function handleAddmovie(e: FormEvent) {
    e.preventDefault();
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
      <form onSubmit={handleAddmovie} className='flex flex-col gap-2 mt-4'>
        <input
          type='text'
          name='image'
          id='image'
          className='rounded h-8 pl-2 pr-4'
          placeholder='Insira a URL da imagem'
        />
        <input
          type='text'
          name='name'
          id='name'
          className='rounded h-8 pl-2 pr-4'
          placeholder='Insira o Nome do filme'
        />
        <button className='text-white bg-red-600 rounded p-2 font-semibold hover:bg-red-800 mt-2'>
          Adicionar filme
        </button>
      </form>
    </div>
  );
}
