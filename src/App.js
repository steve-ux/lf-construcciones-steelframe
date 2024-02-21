import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./components/Info";
import Contacto from "./components/Contacto";
import Enviado from "./components/Enviado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/+Info" element={<Info />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Enviado" element={<Enviado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
