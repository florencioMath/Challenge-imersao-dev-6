import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { ConversorDeMoedas } from "./pages/ConversorDeMoedas";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversorDeMoedas" element={<ConversorDeMoedas />} />
    </Routes>
  )
}