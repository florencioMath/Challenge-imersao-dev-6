import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center bg-blue-600 gap-4'>
      <Link to={'/conversorDeMoedas'}>
        <div className='w-32 h-14 rounded bg-white border-black flex items-center justify-center p-2 text-center'>
          <h2>Conversor de Moedas</h2>
        </div>
      </Link>
      <Link to={'/mentalista'}>
        <div className='w-32 h-14 rounded bg-white border-black flex items-center justify-center p-2 text-center'>
          <h2>Mentalista</h2>
        </div>
      </Link>
      <Link to={'/aluraflix'}>
        <div className='w-32 h-14 rounded bg-white border-black flex items-center justify-center p-2 text-center'>
          <h2>Aluraflix</h2>
        </div>
      </Link>
      <Link to={'/aluraflixFavoritos'}>
        <div className='w-32 h-14 rounded bg-white border-black flex items-center justify-center p-2 text-center'>
          <h2>Aluraflix Favoritos</h2>
        </div>
      </Link>
      <Link to={'/tabelaDeClassificacao'}>
        <div className='w-32 h-14 rounded bg-white border-black flex items-center justify-center p-2 text-center'>
          <h2>Tabela de Classificacao</h2>
        </div>
      </Link>
    </div>
  );
}
