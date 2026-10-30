import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import "./index.css"
import App from "./App"
import Prototipo from "./pages/Prototipo"
import Camera from "./pages/Camera"
import Explicar from "./pages/Explicar"
import Resumir from "./pages/Resumir"
import GaleriaPrototipo from "./pages/GaleriaPrototipo"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prototipo" element={<Prototipo />} />
        <Route path="/prototipo/camera" element={<Camera />} />
        <Route path="/prototipo/explicar" element={<Explicar />} />
        <Route path="/prototipo/resumir" element={<Resumir />} />
        <Route path="/prototipo/galeria" element={<GaleriaPrototipo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)