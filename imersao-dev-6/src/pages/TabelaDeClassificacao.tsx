import { FormEvent, useState } from 'react';

export function TabelaDeClassificacao() {
  const [listOfPlayers, setListOfPlayers] = useState([{}]);
  const [playerName, setPlayerName] = useState('');
  const [vitorias, setvitorias] = useState(0);
  const [empates, setempates] = useState(0);
  const [derrotas, setderrotas] = useState(0);
  const [pontos, setpontos] = useState(0);

  function handleAdicinarJogador(e: FormEvent) {
    e.preventDefault();
    const newListOfPLayers = [
      ...listOfPlayers,
      {
        id: ++listOfPlayers.length,
        playerName,
        vitorias,
        empates,
        derrotas,
        pontos,
      },
    ];
    setListOfPlayers(newListOfPLayers);
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
        <input
          type='text'
          className='rounded h-9 pl-2 pr-4'
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button
          type='submit'
          className='text-white bg-blue-600 rounded p-2 font-semibold hover:bg-blue-800'
        >
          Adicionar jogador
        </button>
      </form>

      <table className='w-[90vw] bg-white opacity-25 rounded p-2 flex justify-around'>
        <tbody>
          <tr className='w-[90vw] border-black border-b-2  flex justify-around items-center mb-5 '>
            <th className='border-x-2 border-black w-[20vw]'>Nome</th>
            <th className='border-x-2 border-black w-[10vw]'>Vitórias</th>
            <th className='border-x-2 border-black w-[10vw]'>Empates</th>
            <th className='border-x-2 border-black w-[10vw]'>Derrotas</th>
            <th className='border-x-2 border-black w-[10vw]'>Pontos</th>
            <th className='border-x-2 border-black w-[30vw]'>Ações</th>
          </tr>
          {listOfPlayers.length <= 1 ? (
            <>{''}</>
          ) : (
            listOfPlayers.map((player) => {
              return (
                <tr key={player.id + player.playerName}>
                  <th className='border-2 border-black w-[20vw]'>
                    {player.playerName}
                  </th>
                  <th className='border-2 border-black w-[10vw]'>
                    {player.vitorias}
                  </th>
                  <th className='border-2 border-black w-[10vw]'>
                    {player.empates}
                  </th>
                  <th className='border-2 border-black w-[10vw]'>
                    {player.derrotas}
                  </th>
                  <th className='border-2 border-black w-[10vw]'>
                    {player.pontos}
                  </th>
                  <th className='border-2 border-black w-[30vw]'>Ações</th>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
