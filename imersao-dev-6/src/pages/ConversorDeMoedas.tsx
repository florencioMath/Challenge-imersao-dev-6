export function ConversorDeMoedas() {
  let nomeUsuario = "Matheus";
  let valorEmEthereum = 3;
  let cotacaoEmEthereum = 8109.71;
  let valorEmReal = (valorEmEthereum * cotacaoEmEthereum).toFixed(2);
  // valorEmReal = valorEmReal.toFixed(2);
  // alert('Olá ' + nomeUsuario + '! O valor em reais é de R$ ' + valorEmReal);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center flex-col ">
      <img src="https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Background.png" alt="" className="absolute -z-10 bg-no-repeat bg-center h-screen w-screen" />
      <div className="text-center p-5">
        <h1 className="text-white mb-2">Conversor de Moedas</h1>
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" alt="" className="w-52 mt-0 mb-3" />
      </div>
      <div>

        <img src="https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Convers%C3%A3o+1.png" className="mt-0 mb-3" />

      </div>
    </div>
  )
}