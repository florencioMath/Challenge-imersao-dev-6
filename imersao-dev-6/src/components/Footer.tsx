import logoAlura from '../assets/logo-imersao-dev6-alura.png';

export function Footer() {
  return (
    <div className='w-auto h-[10vh] bg-backgroundDarkBlue flex items-center justify-center p-8'>
      <img
        src={logoAlura}
        alt='Logo da Imersão dev com Alura'
        className='w-1/3 max-h-44'
      />
    </div>
  );
}
