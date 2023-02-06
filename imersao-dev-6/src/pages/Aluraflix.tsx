export function Aluraflix() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col'>
      <img
        src='https://cdn.pixabay.com/photo/2014/11/30/17/15/theater-551797_960_720.jpg'
        alt=''
        className='absolute -z-10 bg-no-repeat bg-center h-screen w-screen'
      />
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-white mb-2 text-3xl'>Aluraflix</h1>
        <img
          src='https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg'
          alt=''
          className='w-52 mt-0 mb-3'
        />
      </div>
    </div>
  );
}
