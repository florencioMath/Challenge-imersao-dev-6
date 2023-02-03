import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Challenges } from "./components/Challenges";
import { ConversorDeMoedas } from "./pages/ConversorDeMoedas";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Challenges />} />
      <Route path="/conversorDeMoedas" element={<ConversorDeMoedas />} />
    </Routes>
  )
}