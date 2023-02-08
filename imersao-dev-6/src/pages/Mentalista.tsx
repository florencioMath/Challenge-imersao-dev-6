import { useEffect, useState } from 'react';

const aleatorio = Math.random() * (10 - 1) + 1;
const numeroAleatorio = Number(aleatorio.toFixed());

export function Mentalista() {
  const [chute, setChute] = useState(0);
  const [random, setRandom] = useState(0);
  const [resposta, setResposta] = useState('Aperte em "Chute"');

  function randomNumberInRange(min = 0, max = 10) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandom(randomNumber);
  }

  function handleForm(e: any) {
    e.preventDefault(e);
  }

  function isRandomNumber(randomNumber: number, guess: number) {
    if (randomNumber == guess) {
      setResposta(`O chute: ${guess} é igual ao número aleatório`);
    } else {
      setResposta('O chute não é igual ao número aleatório');
    }
  }

  useEffect(() => {
    randomNumberInRange();
  }, []);

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

      <label htmlFor='palpite'>Digite um número entro 0 e 10</label>
      <br />
      <form onSubmit={handleForm}>
        <input
          type='text'
          id='palpite'
          onChange={(event) => setChute(Number(event.target.value))}
        />
        <button onClick={() => isRandomNumber(random, chute)}>Chutar</button>
      </form>
      <br />

      <span>{resposta}</span>
    </div>
  );
}
