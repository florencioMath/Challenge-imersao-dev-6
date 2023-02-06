import { Routes, Route } from 'react-router-dom';
import { Aluraflix } from './pages/Aluraflix';
import { AluraflixFavoritos } from './pages/AluraflixFavoritos';
import { ConversorDeMoedas } from './pages/ConversorDeMoedas';
import { Home } from './pages/Home';
import { Mentalista } from './pages/Mentalista';
import { TabelaDeClassificacao } from './pages/TabelaDeClassificacao';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/conversorDeMoedas' element={<ConversorDeMoedas />} />
      <Route path='/mentalista' element={<Mentalista />} />
      <Route path='/aluraflix' element={<Aluraflix />} />
      <Route path='/aluraflixFavoritos' element={<AluraflixFavoritos />} />
      <Route
        path='/tabelaDeClassificacao'
        element={<TabelaDeClassificacao />}
      />
    </Routes>
  );
}
