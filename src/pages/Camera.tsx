import { useState } from "react"
import { Link, useNavigate } from "react-router"

function Camera() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [painelAberto, setPainelAberto] = useState(false)
  const [painelExpandido, setPainelExpandido] = useState(false)
  const navigate = useNavigate()

  function abrirResolucao() {
    setPainelAberto(true)
    setMenuAberto(false)
  }

  function voltar() {
    if (painelExpandido) {
      setPainelExpandido(false)
    } else if (painelAberto) {
      setPainelAberto(false)
    } else if (menuAberto) {
      setMenuAberto(false)
    } else {
      navigate("/prototipo")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-dark px-4 py-8 font-inter">
      <Link to="/" className="rounded-full bg-blue px-6 py-3 text-base text-light">
        Voltar para o site
      </Link>

      <div className="h-208 w-full max-w-96 rounded-3xl bg-neutral-900 p-3">
        <div className="relative h-full overflow-hidden rounded-3xl text-white">
          <img src="/prototipo/images/wallpaper2.png" alt="Simulação da câmera apontada para um exercício de matemática" className="absolute inset-0 h-full w-full object-cover" />

          <div className="relative flex items-center justify-between px-4 py-5">
            <p className="text-sm font-semibold">9:40</p>
            <img src="/prototipo/images/iconestopo.png" alt="Conexão, Bluetooth, Wi-Fi e bateria" className="w-24" />
          </div>

          {!painelAberto && (
            <button type="button" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir ou fechar assistente acadêmico" aria-expanded={menuAberto} className="absolute bottom-54 left-4 cursor-pointer">
              <img src="/prototipo/images/iconeassistente.png" alt="" className="size-12 object-contain" />
            </button>
          )}

          {menuAberto && (
            <div className="absolute bottom-53 left-0 flex w-full justify-center gap-2 bg-neutral-900 px-2 py-4">
                <Link to="/prototipo/resumir" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                    RESUMIR
                </Link>

              <button type="button" onClick={abrirResolucao} className="cursor-pointer rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                RESOLVER
              </button>

                <Link to="/prototipo/explicar" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                        EXPLICAR
                </Link>
            </div>
          )}

          {painelAberto && (
            <div className={`absolute right-0 bottom-16 left-0 flex flex-col bg-neutral-900 ${painelExpandido ? "top-16" : "h-96"}`}>
              <div className="flex items-center justify-between gap-4 p-4">
                <h2 className="text-base font-semibold">
                  PASSO A PASSO
                </h2>

                <button type="button" onClick={() => setPainelExpandido(!painelExpandido)} aria-label={painelExpandido ? "Recolher painel" : "Expandir painel"} className="cursor-pointer">
                  <img src="/prototipo/images/expandir.png" alt="" className="size-6 object-contain" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto text-sm">
                <details open className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    1 — Identificar os coeficientes
                  </summary>

                  <div className="grid gap-2 px-4 pb-4">
                    <p>Comparando com a forma geral:</p>
                    <p>ax² + bx + c = 0</p>
                    <p>a = 1</p>
                    <p>b = 5</p>
                    <p>c = 6</p>
                  </div>
                </details>

                <details className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    2 — Usar a fórmula de Bhaskara
                  </summary>

                  <div className="px-4 pb-4">
                    <p>x = (-b ± √Δ) / (2a)</p>
                  </div>
                </details>

                <details className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    3 — Calcular o delta
                  </summary>

                  <div className="grid gap-2 px-4 pb-4">
                    <p>Δ = b² - 4ac</p>
                    <p>Δ = 5² - 4 × 1 × 6</p>
                    <p>Δ = 25 - 24 = 1</p>
                  </div>
                </details>

                <details className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    4 — Substituir na fórmula
                  </summary>

                  <div className="grid gap-2 px-4 pb-4">
                    <p>x = (-5 ± √1) / 2</p>
                    <p>x = (-5 ± 1) / 2</p>
                  </div>
                </details>

                <details className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    5 — Encontrar a solução final
                  </summary>

                  <div className="grid gap-2 px-4 pb-4">
                    <p>x₁ = -2</p>
                    <p>x₂ = -3</p>
                  </div>
                </details>
              </div>

              <div className="flex shrink-0 justify-center gap-2 p-4">
                <Link to="/prototipo/resumir" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                    RESUMIR
                </Link>

                <button type="button" className="rounded-full bg-neutral-700 px-3 py-2 text-xs text-yellow-300">
                  RESOLVER
                </button>

                <Link to="/prototipo/explicar" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                    EXPLICAR
                </Link>
              </div>
            </div>
          )}

          <div className="absolute bottom-6 left-0 flex w-full items-center justify-around">
            <button type="button" disabled aria-label="Aplicativos recentes">
              <img src="/prototipo/images/iconerecentes.png" alt="" className="size-6 object-contain" />
            </button>

            <Link to="/prototipo" aria-label="Tela inicial">
              <img src="/prototipo/images/iconehome.png" alt="" className="size-6 object-contain" />
            </Link>

            <button type="button" onClick={voltar} aria-label="Voltar" className="cursor-pointer">
              <img src="/prototipo/images/iconevoltar.png" alt="" className="size-6 object-contain" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Camera