import { FormEvent } from 'react';

export function TabelaDeClassificacao() {
  function handleAdicinarJogador(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col'>
      <img
        src='https://www.alura.com.br/assets/img/imersoes/dev-2021/tabela-classificacao-bg.png'
        className='absolute -z-10 bg-no-repeat bg-center h-screen w-screen'
      />
      <div className='flex flex-col items-center text-center p-5'>
        <h1 className='text-white mb-2 text-3xl'>Tabela de Classificacao</h1>
        <img
          src='https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg'
          className='w-52 mt-0 mb-3'
        />
      </div>

      <form
        onSubmit={handleAdicinarJogador}
        className='flex items-center justify-around gap-4 p-4'
      >
        <input type='text' className='rounded h-9 pl-2 pr-4' />
        <button
          type='submit'
          className='text-white bg-blue-600 rounded p-2 font-semibold hover:bg-blue-800'
        >
          Adicionar jogador
        </button>
      </form>

      <table className='w-[90vw] bg-white opacity-25 rounded p-2 flex justify-around'>
        <tbody>
          <tr className='w-[90vw] border-black border-b-2  flex justify-around items-center mb-5 p-2'>
            <th>Nome</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Pontos</th>
            <th>Ações</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
