import { Link } from "react-router"

function Prototipo() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-dark px-4 py-8 font-inter">
      <Link to="/" className="rounded-full bg-blue font-inter px-6 py-3 text-base text-light">
        Voltar para o site
      </Link>

      <div className="h-208 w-full max-w-96 rounded-3xl bg-neutral-900 p-3">
        <div className="relative h-full overflow-hidden rounded-3xl text-white">
          <img src="/prototipo/images/wallpaper.png" alt="" className="absolute inset-0 h-full w-full object-cover" />

          <div className="relative flex items-center justify-between px-4 py-5">
            <p className="text-sm font-semibold">9:40</p>
            <img src="/prototipo/images/iconestopo.png" alt="Conexão, Bluetooth, Wi-Fi e bateria" className="w-24" />
          </div>

          <div className="absolute top-44 left-0 w-full text-center">
            <h1 className="text-7xl">09:40</h1>
            <p className="mt-2 text-lg">Quarta-feira, 15 de outubro</p>
          </div>

          <div className="absolute bottom-20 left-0 flex w-full justify-center gap-12">
            <Link to="/prototipo/galeria" className="flex flex-col items-center gap-2">
                <img src="/prototipo/images/iconegaleria.png" alt="" className="size-16 object-contain" />
                <span className="text-sm">Galeria</span>
            </Link>

            <Link to="/prototipo/camera" className="flex flex-col items-center gap-2">
                <img src="/prototipo/images/iconecamera.png" alt="" className="size-16 object-contain" />
                <span className="text-sm">Câmera</span>
            </Link>
          </div>

          <div className="absolute bottom-6 left-0 flex w-full items-center justify-around">
            <button type="button" disabled aria-label="Aplicativos recentes">
              <img src="/prototipo/images/iconerecentes.png" alt="" className="size-6 object-contain" />
            </button>

            <button type="button" disabled aria-label="Tela inicial">
              <img src="/prototipo/images/iconehome.png" alt="" className="size-6 object-contain" />
            </button>

            <button type="button" disabled aria-label="Voltar">
              <img src="/prototipo/images/iconevoltar.png" alt="" className="size-6 object-contain" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Prototipo