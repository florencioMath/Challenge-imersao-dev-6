import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ConversorDeMoedas } from "./pages/ConversorDeMoedas";
import { Home } from "./pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversorDeMoedas" element={<ConversorDeMoedas />} />
    </Routes>
  )
}