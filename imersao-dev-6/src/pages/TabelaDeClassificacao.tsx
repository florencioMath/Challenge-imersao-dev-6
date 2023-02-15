import { FormEvent, useState } from 'react';

export function TabelaDeClassificacao() {
  const [listOfPlayers, setListOfPlayers] = useState([
    {
      id: 0,
      nomeDoJogador: 'Matheus',
      vitorias: 2,
      empates: 1,
      derrotas: 1,
      pontos: 7,
    },
  ]);
  const [nomeDoJogador, setNomeDoJogador] = useState('');
  const [vitorias, setVitorias] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [derrotas, setDerrotas] = useState(0);
  const [pontos, setPontos] = useState(0);

  function handleAdicinarJogador(e: FormEvent) {
    e.preventDefault();

    if (nomeDoJogador == '') {
      return;
    }

    const newListOfPLayers = [
      ...listOfPlayers,
      {
        id: ++listOfPlayers.length,
        nomeDoJogador,
        vitorias,
        empates,
        derrotas,
        pontos,
      },
    ];
    setListOfPlayers(newListOfPLayers);
    setNomeDoJogador('');
  }

  function handleVitoria(player: any) {
    setVitorias(player.vitorias++);
    setPontos((player.pontos = player.pontos + 3));
  }

  function handleEmpate(player: any) {
    setEmpates((player.empates = player.empates + 1));
    setPontos(player.pontos++);
  }

  function handleDerrota(player: any) {
    setDerrotas((player.derrotas = player.derrotas + 1));
  }

  function handleZerarPontos(player: any) {
    setVitorias((player.vitorias = 0));
    setEmpates((player.empates = 0));
    setDerrotas((player.derrotas = 0));
    setPontos((player.pontos = 0));
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
          value={nomeDoJogador}
          onChange={(e) => setNomeDoJogador(e.target.value)}
        />
        <button
          type='submit'
          className='text-white bg-blue-600 rounded p-2 font-semibold hover:bg-blue-800'
        >
          Adicionar jogador
        </button>
      </form>

      <table className='w-[95vw] h-[50vh] overflow-auto bg-white opacity-50 rounded flex justify-around p-2'>
        <tbody>
          <tr className='w-[90vw] border-black border-b-2 flex justify-around items-center mb-2'>
            <th className='border-2 border-black w-[20vw]'>Nome</th>
            <th className='border-2 border-black w-[10vw]'>Vitórias</th>
            <th className='border-2 border-black w-[10vw]'>Empates</th>
            <th className='border-2 border-black w-[10vw]'>Derrotas</th>
            <th className='border-2 border-black w-[10vw]'>Pontos</th>
            <th className='border-2 border-black w-[30vw]'>Ações</th>
          </tr>
          {listOfPlayers.map((player) => {
            return (
              <tr key={player.id + player.nomeDoJogador}>
                <th className='border-2 border-black w-[20vw]'>
                  {player.nomeDoJogador}
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

                <th className='border-2 border-black w-[30vw] flex items-center justify-evenly gap-1 flex-wrap p-1'>
                  <button
                    className='text-white bg-green-600 rounded p-1 font-semibold hover:bg-green-800'
                    onClick={() => {
                      handleVitoria(player);
                    }}
                  >
                    Vitória
                  </button>
                  <button
                    className='text-white bg-yellow-600 rounded p-1 font-semibold hover:bg-yellow-800'
                    onClick={() => handleEmpate(player)}
                  >
                    Empate
                  </button>
                  <button
                    className='text-white bg-red-600 rounded p-1 font-semibold hover:bg-red-800'
                    onClick={() => handleDerrota(player)}
                  >
                    Derrota
                  </button>
                  <button
                    className='text-white bg-gray-600 rounded p-1 font-semibold hover:bg-gray-800'
                    onClick={() => handleZerarPontos(player)}
                  >
                    Zerar Pontos
                  </button>
                  <button className='text-white bg-black-600 rounded p-1 font-semibold hover:bg-black-800'>
                    Apagar Jogador
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
