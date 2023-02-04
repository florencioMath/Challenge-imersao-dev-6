import { Routes, Route } from "react-router-dom";
import { ConversorDeMoedas } from "./pages/ConversorDeMoedas";
import { Home } from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversorDeMoedas" element={<ConversorDeMoedas />} />
    </Routes>
  )
}