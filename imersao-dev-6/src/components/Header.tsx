import { Link } from 'react-router-dom';
import logo from '../assets/logo-imersao-dev6.png';

export function Header() {
  return (
    <div className='w-auto h-[10vh] bg-backgroundDarkBlue flex items-center justify-between gap-4 p-8'>
      <Link to={'/'}>
        <img src={logo} className='max-w-[240px] max-h-28' />
      </Link>
      <p className='text-white'>
        Criado por{' '}
        <a
          href='http://github.com/florencioMath'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:bg-slate-500'
        >
          Matheus Florêncio
        </a>
      </p>
    </div>
  );
}
