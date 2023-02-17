import * as Toast from '@radix-ui/react-toast';
import { useEffect, useRef, useState } from 'react';
import { XSquare } from 'phosphor-react';
import backgroundConversao from '../assets/images/background-conversao.png';
import logoConversao from '../assets/images/logo-conversao.png';
import logoImersaoRed from '../assets/images/logo-imersao-red.svg';

export function ConversorDeMoedas() {
  let valorEmEthereum = 1;
  let cotacaoEmEthereum = 8563.22;
  const realAmount = 1;
  const euroPrice = 5.58;
  const realToEuro = (realAmount * euroPrice).toFixed(2);
  const dolarPrice = 5.15;
  const realToDolar = (realAmount * dolarPrice).toFixed(2);
  const argentinaPesoPrice = 0.027;
  const realToArgentinaPeso = (realAmount * argentinaPesoPrice).toFixed(2);
  const russianRubloPrice = 0.073;
  const realToRussianRublo = (realAmount * russianRubloPrice).toFixed(2);

  let valorEmReal = (valorEmEthereum * cotacaoEmEthereum).toFixed(2);

  const [openEuro, setOpenEuro] = useState(false);
  const [openDolar, setOpenDolar] = useState(false);
  const [openPesoArgentino, setOpenPesoArgentino] = useState(false);
  const [openRubloRussian, setOpenRubloRussian] = useState(false);
  const timerRefEuro = useRef(0);
  const timerRefDolar = useRef(0);
  const timerRefPesoArgentino = useRef(0);
  const timerRefRubloRussian = useRef(0);

  useEffect(() => {
    return () => {
      clearTimeout(timerRefEuro.current),
        clearTimeout(timerRefDolar.current),
        clearTimeout(timerRefPesoArgentino.current),
        clearTimeout(timerRefRubloRussian.current);
    };
  }, []);

  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col '>
      <img
        src={backgroundConversao}
        alt=''
        className='absolute -z-10 bg-no-repeat bg-center h-screen w-screen'
      />
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-white mb-2 text-3xl'>Conversor de Moedas</h1>
        <img src={logoImersaoRed} alt='' className='w-52 mt-0 mb-3' />
      </div>
      <div>
        <img src={logoConversao} className='mt-0 mb-3' />
      </div>

      <div className='flex items-center justify-around flex-wrap flex-col gap-2'>
        <Toast.Provider swipeDirection='left'>
          <button
            onClick={() => {
              setOpenEuro(false);
              window.clearTimeout(timerRefEuro.current);
              timerRefEuro.current = window.setTimeout(() => {
                setOpenEuro(true);
              }, 100);
            }}
            className='bg-white rounded p-1 text-lg'
          >
            Real para Euro
          </button>

          <Toast.Root
            open={openEuro}
            onOpenChange={setOpenEuro}
            className='bg-white rounded-md p-2 gap-2'
          >
            <Toast.Title className='text-lg'>Euro</Toast.Title>
            <Toast.Description>
              {'Olá Dev! O valor de 1 Euro em real é de R$ ' + realToEuro}
            </Toast.Description>
            <Toast.Close
              onClick={() => {
                setOpenEuro(false);
              }}
              className='absolute top-7 right-9'
            >
              <XSquare size={32} className='text-black' />
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport className='fixed bottom-[10vh] right-0 p-6 w-80 h-20' />
        </Toast.Provider>

        <Toast.Provider swipeDirection='left'>
          <button
            onClick={() => {
              setOpenDolar(false);
              window.clearTimeout(timerRefDolar.current);
              timerRefDolar.current = window.setTimeout(() => {
                setOpenDolar(true);
              }, 100);
            }}
            className='bg-white rounded p-1 text-lg'
          >
            Real para Dólar
          </button>

          <Toast.Root
            open={openDolar}
            onOpenChange={setOpenDolar}
            className='bg-white rounded-md p-2 gap-2'
          >
            <Toast.Title className='text-lg'>Dólar</Toast.Title>
            <Toast.Description>
              {'Olá Dev! O valor de 1 Dolár em real é de R$ ' + realToDolar}
            </Toast.Description>
            <Toast.Close
              onClick={() => {
                setOpenDolar(false);
              }}
              className='absolute top-7 right-9'
            >
              <XSquare size={32} className='text-black' />
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport className='fixed bottom-[10vh] right-0 p-6 w-80 h-20' />
        </Toast.Provider>

        <Toast.Provider swipeDirection='left'>
          <button
            onClick={() => {
              setOpenPesoArgentino(false);
              window.clearTimeout(timerRefPesoArgentino.current);
              timerRefPesoArgentino.current = window.setTimeout(() => {
                setOpenPesoArgentino(true);
              }, 100);
            }}
            className='bg-white rounded p-1 text-lg'
          >
            Real para Peso Argentino
          </button>

          <Toast.Root
            open={openPesoArgentino}
            onOpenChange={setOpenPesoArgentino}
            className='bg-white rounded-md p-2 gap-2'
          >
            <Toast.Title className='text-lg'>Peso Argentino</Toast.Title>
            <Toast.Description>
              {'Olá Dev! O valor de 1 Peso Argentino em real é de R$ ' +
                realToArgentinaPeso}
            </Toast.Description>
            <Toast.Close
              onClick={() => {
                setOpenPesoArgentino(false);
              }}
              className='absolute top-7 right-9'
            >
              <XSquare size={32} className='text-black' />
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport className='fixed bottom-[10vh] right-0 p-6 w-80 h-20' />
        </Toast.Provider>

        <Toast.Provider swipeDirection='left'>
          <button
            onClick={() => {
              setOpenRubloRussian(false);
              window.clearTimeout(timerRefRubloRussian.current);
              timerRefRubloRussian.current = window.setTimeout(() => {
                setOpenRubloRussian(true);
              }, 100);
            }}
            className='bg-white rounded p-1 text-lg'
          >
            Real para Rublo Russo
          </button>

          <Toast.Root
            open={openRubloRussian}
            onOpenChange={setOpenRubloRussian}
            className='bg-white rounded-md p-2 gap-2'
          >
            <Toast.Title className='text-lg'>Rublo Russo</Toast.Title>
            <Toast.Description>
              {'Olá Dev! O valor de 1 Rublo Russo em real é de R$ ' +
                realToRussianRublo}
            </Toast.Description>
            <Toast.Close
              onClick={() => {
                setOpenRubloRussian(false);
              }}
              className='absolute top-7 right-9'
            >
              <XSquare size={32} className='text-black' />
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport className='fixed bottom-[10vh] right-0 p-6 w-80 h-20' />
        </Toast.Provider>
      </div>
    </div>
  );
}
