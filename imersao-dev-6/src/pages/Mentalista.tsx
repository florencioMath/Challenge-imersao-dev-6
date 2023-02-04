export function Mentalista() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col'>
      <img
        src='https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/background_mentalista.png'
        alt=''
        className='absolute -z-10 bg-no-repeat bg-center h-screen w-screen'
      />
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-white mb-2 text-3xl'>Mentalista</h1>
        <img
          src='https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg'
          alt=''
          className='w-52 mt-0 mb-3'
        />
      </div>
      <div>
        <img
          src='https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Ilustra%C3%A7%C3%A3o-c%C3%A9rebro+1.png'
          className='mt-0 mb-3'
        />
      </div>
    </div>
  );
}
