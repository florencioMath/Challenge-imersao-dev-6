import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center bg-blue-600'>
      <Link to={'/conversorDeMoedas'}>
        <h2>Conversor de Moedas</h2>
      </Link>
      <Link to={'/mentalista'}>
        <h2>Mentalista</h2>
      </Link>
    </div>
  );
}
