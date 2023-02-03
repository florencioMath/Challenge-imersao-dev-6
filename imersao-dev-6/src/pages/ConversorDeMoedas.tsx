import * as Toast from '@radix-ui/react-toast';
import { useEffect, useRef, useState } from 'react';
import { XSquare } from 'phosphor-react'

export function ConversorDeMoedas() {
  let nomeUsuario = "Dev";
  let valorEmEthereum = 3;
  let cotacaoEmEthereum = 8109.71;
  let valorEmReal = (valorEmEthereum * cotacaoEmEthereum).toFixed(2);

  const [open, setOpen] = useState(false);
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div className="w-full h-[80vh] flex justify-center items-center flex-col ">
      <img src="https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Background.png" alt="" className="absolute -z-10 bg-no-repeat bg-center h-screen w-screen" />
      <div className="text-center p-5">
        <h1 className="text-white mb-2 text-3xl">Conversor de Moedas</h1>
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" alt="" className="w-52 mt-0 mb-3" />
      </div>
      <div>
        <img src="https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Convers%C3%A3o+1.png" className="mt-0 mb-3" />
      </div>

      <Toast.Provider swipeDirection='left'>
        <button onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
          className='bg-white rounded p-1 text-lg'
        >Real para Ethereum</button>

        <Toast.Root open={open} onOpenChange={setOpen} className='bg-white rounded-md p-2 gap-2'>
          <Toast.Title className='text-lg'>Ethereum</Toast.Title>
          <Toast.Description>{'Olá ' + nomeUsuario + '! O valor em reais é de R$ ' + valorEmReal}</Toast.Description>
          <Toast.Close onClick={() => { setOpen(false) }}
            className='absolute top-7 right-9'
          >
            <XSquare size={32} className="text-black" />
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport className='fixed bottom-[10vh] right-0 p-6 w-80 h-20' />
      </Toast.Provider>
    </div >
  )
}