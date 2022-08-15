import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Bienvenida from "./components/Bienvenida";
import Contenido from "./components/Contenido";
import Drawer from "./components/Drawer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/drawer" element={<Drawer />} />
      </Routes>
    </>
  );
}

export default App;
