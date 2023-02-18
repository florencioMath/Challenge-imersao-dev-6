import { Link } from 'react-router-dom';
import backgroundHome from '../assets/images/background-home.png';
import backgroundConversao from '../assets/images/background-conversao.png';
import backgroundMentalista from '../assets/images/background-mentalista.png';
import backgroundAluraflix from '../assets/images/background-aluraflix.png';
import backgroundAluraflixFavoritos from '../assets/images/background-aluraflixFavoritos.png';
import backgroundTabelaDeClassificacao from '../assets/images/background-tabelaDeClassificacao.png';

export function Home() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-wrap gap-4 p-5 overflow-auto'>
      <img
        src={backgroundHome}
        alt=''
        className='absolute -z-10 h-screen object-cover'
      />

      <div className='w-60 h-[240px] border-black rounded border-2 bg-backgroundDarkBlue flex flex-col justify-between'>
        <div>
          <img
            className='h-[100px] w-full'
            src={backgroundConversao}
            alt='Background do Conversor de Moedas'
          />
        </div>
        <div className='h-[90px]w-full text-center text-white'>
          <p>
            Toast que irá mostrar a conversão de 1 real para quatro tipos de
            moedas.
          </p>
        </div>
        <Link to={'/conversorDeMoedas'}>
          <div className='w-full h-[50px] rounded bg-white hover:bg-slate-100 border-black flex items-center justify-center p-2 text-center font-bold'>
            <h2>Conversor de Moedas</h2>
          </div>
        </Link>
      </div>

      <div className='w-60 h-[240px] border-black rounded border-2 bg-backgroundDarkBlue flex flex-col justify-between'>
        <div>
          <img
            className='h-[100px] w-full'
            src={backgroundMentalista}
            alt='Background do Conversor de Moedas'
          />
        </div>
        <div className='h-[90px]w-full text-center text-white'>
          <p>Adivinhe um número entre 0 e 10.</p>
        </div>
        <Link to={'/mentalista'}>
          <div className='w-full h-[50px] rounded bg-white hover:bg-slate-100 border-black flex items-center justify-center p-2 text-center font-bold'>
            <h2>Mentalista</h2>
          </div>
        </Link>
      </div>

      <div className='w-60 h-[240px] border-black rounded border-2 bg-backgroundDarkBlue flex flex-col justify-between'>
        <div>
          <img
            className='h-[100px] w-full'
            src={backgroundAluraflix}
            alt='Background do Conversor de Moedas'
          />
        </div>
        <div className='h-[90px]w-full text-center text-white'>
          <p>Lista de filmes.</p>
        </div>
        <Link to={'/aluraflix'}>
          <div className='w-full h-[50px] rounded bg-white hover:bg-slate-100 border-black flex items-center justify-center p-2 text-center font-bold'>
            <h2>Aluraflix</h2>
          </div>
        </Link>
      </div>

      <div className='w-60 h-[240px] border-black rounded border-2 bg-backgroundDarkBlue flex flex-col justify-between'>
        <div>
          <img
            className='h-[100px] w-full'
            src={backgroundAluraflixFavoritos}
            alt='Background do Conversor de Moedas'
          />
        </div>
        <div className='h-[90px]w-full text-center text-white'>
          <p>Adicione filmes com imagem e nome.</p>
        </div>
        <Link to={'/aluraflixFavoritos'}>
          <div className='w-full h-[50px] rounded bg-white hover:bg-slate-100 border-black flex items-center justify-center p-2 text-center font-bold'>
            <h2>Aluraflix Favoritos</h2>
          </div>
        </Link>
      </div>

      <div className='w-60 h-[240px] border-black rounded border-2 bg-backgroundDarkBlue flex flex-col justify-between'>
        <div>
          <img
            className='h-[100px] w-full'
            src={backgroundTabelaDeClassificacao}
            alt='Background do Conversor de Moedas'
          />
        </div>
        <div className='h-[90px]w-full text-center text-white'>
          <p>Adicione jogadores, pontos e os exlua também.</p>
        </div>
        <Link to={'/tabelaDeClassificacao'}>
          <div className='w-full h-[50px] rounded bg-white hover:bg-slate-100 border-black flex items-center justify-center p-2 text-center font-bold'>
            <h2>Tabela de Classificacao</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
