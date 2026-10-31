import { useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router"

function Explicar() {
  const [parametros] = useSearchParams()
  const [menuAberto, setMenuAberto] = useState(false)
  const [painelAberto, setPainelAberto] = useState(parametros.get("abrir") === "explicacao")
  const [painelExpandido, setPainelExpandido] = useState(false)
  const navigate = useNavigate()

  function abrirExplicacao() {
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
          <img src="/prototipo/images/wallpaper3.png" alt="Simulação da câmera apontada para a obra Abaporu" className="absolute inset-0 h-full w-full object-cover" />

          <div className="relative flex items-center justify-between px-4 py-5">
            <p className="text-sm font-semibold">9:40</p>
            <img src="/prototipo/images/iconestopo.png" alt="Conexão, Bluetooth, Wi-Fi e bateria" className="w-24" />
          </div>

          {!painelAberto && (
            <button type="button" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir ou fechar assistente acadêmico" aria-expanded={menuAberto} className="absolute bottom-60 left-4 cursor-pointer">
              <img src="/prototipo/images/iconeassistente.png" alt="" className="size-12 object-contain" />
            </button>
          )}

          {menuAberto && (
            <div className="absolute bottom-59 left-0 flex w-full justify-center gap-2 bg-neutral-900 px-2 py-3">
                <Link to="/prototipo/resumir" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                    RESUMIR
                </Link>

              <Link to="/prototipo/camera" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                RESOLVER
              </Link>

              <button type="button" onClick={abrirExplicacao} className="cursor-pointer rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                EXPLICAR
              </button>
            </div>
          )}

          {painelAberto && (
            <div className={`absolute right-0 bottom-16 left-0 flex flex-col bg-neutral-900 ${painelExpandido ? "top-16" : "h-96"}`}>
              <div className="flex items-center justify-between gap-4 p-4">
                <h2 className="text-base font-semibold">
                  EXPLICAÇÃO
                </h2>

                <button type="button" onClick={() => setPainelExpandido(!painelExpandido)} aria-label={painelExpandido ? "Recolher painel" : "Expandir painel"} className="cursor-pointer">
                  <img src="/prototipo/images/expandir.png" alt="" className="size-6 object-contain" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto text-sm">
                <details open className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    1 — Obra de arte: Abaporu
                  </summary>

                  <div className="grid gap-3 px-4 pb-4">
                    <p>
                      Abaporu, de 1928, é uma pintura de Tarsila do Amaral e um marco do Modernismo brasileiro. A figura apresenta pés e mãos grandes e uma cabeça pequena, ao lado de um cacto e sob um sol intenso.
                    </p>
                    <p>
                      A obra inspirou o Movimento Antropofágico, que propunha transformar influências estrangeiras em uma produção cultural brasileira.
                    </p>
                    <p>Explicação demonstrativa do JOVI Elevra.</p>
                  </div>
                </details>

                <details className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    2 — Quem foi Tarsila do Amaral?
                  </summary>

                  <div className="grid gap-3 px-4 pb-4">
                    <p>
                      Tarsila do Amaral foi uma das principais artistas do Modernismo brasileiro. Suas pinturas exploram paisagens, cores e temas ligados à cultura nacional.
                    </p>
                    <p>
                      Entre suas obras estão A Negra, Abaporu e Antropofagia.
                    </p>
                  </div>
                </details>

                <details className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    3 — Qual é o contexto da obra?
                  </summary>

                  <div className="grid gap-3 px-4 pb-4">
                    <p>
                      Abaporu foi criado em 1928, durante um período de busca por novas formas de representar a identidade brasileira na arte.
                    </p>
                    <p>
                      No mesmo ano, Oswald de Andrade publicou o Manifesto Antropófago, associado ao movimento que a pintura ajudou a inspirar.
                    </p>
                  </div>
                </details>
              </div>

              <div className="flex shrink-0 justify-center gap-2 p-4">
                <Link to="/prototipo/resumir" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                    RESUMIR
                </Link>

                <Link to="/prototipo/camera" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                  RESOLVER
                </Link>

                <button type="button" className="rounded-full bg-neutral-700 px-3 py-2 text-xs text-yellow-300">
                  EXPLICAR
                </button>
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

export default Explicar