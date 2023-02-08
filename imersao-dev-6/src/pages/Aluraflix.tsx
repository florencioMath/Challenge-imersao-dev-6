export function Aluraflix() {
  const listaFilmes = [
    {
      id: 0,
      URL: 'https://1.bp.blogspot.com/-SWt9furxjhU/WD4cHIz_g3I/AAAAAAAB3R0/DCU7KcT8Kykcof5I8IYFiMiPNodwH6AkgCLcB/s1600/Capit%25C3%25A3o%2BFant%25C3%25A1stico.jpg',
      name: 'Capitão Fantástico',
    },
    {
      id: 1,
      URL: 'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg',
      name: 'Kill Bill 1',
    },
    {
      id: 2,
      URL: 'https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg',
      name: 'Estrelas além do tempo',
    },
    {
      id: 3,
      URL: 'https://m.media-amazon.com/images/I/81Z6-ieAIyL.jpg',
      name: 'O grande hotel Budapeste',
    },
    {
      id: 4,
      URL: 'https://viureview.com.br/images/filmes8/La-la-land.jpg',
      name: 'La La Land',
    },
    {
      id: 5,
      URL: 'https://static.rogerebert.com/uploads/movie/movie_poster/the-bridges-of-madison-county-1995/large_czRuGEx9Yhnh6nApirTLPToxHNu.jpg',
      name: 'As pontes de Madison',
    },
    {
      id: 6,
      URL: 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg',
      name: 'Soul',
    },
    {
      id: 7,
      URL: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg',
      name: 'Bastardos Inglórios',
    },
    {
      id: 8,
      URL: 'https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg',
      name: 'A viagem de Chihiro',
    },
    {
      id: 10,
      URL: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Amsterdam_%282022_film%29.jpg/220px-Amsterdam_%282022_film%29.jpg',
      name: 'Amsterdam',
    },
    {
      id: 11,
      URL: 'https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg',
      name: 'Divertidamente',
    },
    {
      id: 12,
      URL: 'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg',
      name: 'Harry Potter e a Câmara Secreta',
    },
  ];

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
