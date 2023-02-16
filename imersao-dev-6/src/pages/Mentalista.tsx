import { useEffect, useState } from 'react';
import backgroundMentalista from '../assets/images/background-mentalista.png';
import logoMentalista from '../assets/images/logo-mentalista.png';
import logoImersaoRed from '../assets/images/logo-imersao-red.svg';

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

  function isRandomNumber(randomNumber: number, chute: number) {
    if (chute < 0 || chute > 10) {
      return setResposta(`O chute deve ser entre 0 e 10!`);
    }

    if (randomNumber == chute) {
      setResposta(`O chute: ${chute} é IGUAL ao número aleatório!`);
    } else {
      setResposta(`O chute: ${chute} NÃO é igual ao número aleatório!`);
    }
  }

  useEffect(() => {
    randomNumberInRange();
  }, []);

  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col'>
      <img
        src={backgroundMentalista}
        alt=''
        className='absolute -z-10 bg-no-repeat bg-center h-screen w-screen'
      />
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-white mb-2 text-3xl'>Mentalista</h1>
        <img src={logoImersaoRed} alt='' className='w-52 mt-0 mb-3' />
      </div>
      <div>
        <img src={logoMentalista} className='mt-0 mb-3 -z-10' />
      </div>

      <div className='flex items-center justify-evenly flex-col w-80 h-[320px] m-3 p-3 absolute border-black bg-opacity-20 bg-white rounded'>
        <label htmlFor='palpite'>Digite um número entro 0 e 10</label>
        <form
          onSubmit={handleForm}
          className='w-full h-40 flex flex-col items-center justify-center gap-3'
        >
          <input
            type='number'
            id='palpite'
            onChange={(event) => setChute(Number(event.target.value))}
            className='flex w-[140px] text-center h-8 font-bold'
          />
          <button
            onClick={() => isRandomNumber(random, chute)}
            className='flex items-center justify-center w-[140px] h-14 rounded-lg p-3 bg-white font-semibold'
          >
            Chutar
          </button>
        </form>
        <span className='font-medium text-lg text-center'>{resposta}</span>
      </div>
    </div>
  );
}
