import { useState } from "react"
import { Link, useNavigate } from "react-router"

function Resumir() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [painelAberto, setPainelAberto] = useState(false)
  const [painelExpandido, setPainelExpandido] = useState(false)
  const navigate = useNavigate()

  function abrirResumo() {
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
          <img src="/prototipo/images/wallpaper4.png" alt="Simulação da câmera apontada para um conteúdo sobre as Grandes Navegações" className="absolute inset-0 h-full w-full object-cover" />

          <div className="relative flex items-center justify-between px-4 py-5">
            <p className="text-sm font-semibold">9:41</p>
            <img src="/prototipo/images/iconestopo.png" alt="Conexão, Bluetooth, Wi-Fi e bateria" className="w-24" />
          </div>

          {!painelAberto && (
            <button type="button" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir ou fechar assistente acadêmico" aria-expanded={menuAberto} className="absolute bottom-57 left-4 cursor-pointer">
              <img src="/prototipo/images/iconeassistente.png" alt="" className="size-12 object-contain" />
            </button>
          )}

          {menuAberto && (
            <div className="absolute bottom-56 left-0 flex w-full justify-center gap-2 bg-neutral-900 px-2 py-3">
              <button type="button" onClick={abrirResumo} className="cursor-pointer rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                RESUMIR
              </button>

              <Link to="/prototipo/camera" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                RESOLVER
              </Link>

              <Link to="/prototipo/explicar" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                EXPLICAR
              </Link>
            </div>
          )}

          {painelAberto && (
            <div className={`absolute right-0 bottom-16 left-0 flex flex-col bg-neutral-900 ${painelExpandido ? "top-16" : "h-96"}`}>
              <div className="flex items-center justify-between gap-4 p-4">
                <h2 className="text-base font-semibold">
                  RESUMO
                </h2>

                <button type="button" onClick={() => setPainelExpandido(!painelExpandido)} aria-label={painelExpandido ? "Recolher painel" : "Expandir painel"} className="cursor-pointer">
                  <img src="/prototipo/images/expandir.png" alt="" className="size-6 object-contain" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto text-sm">
                <details open className="border-b border-neutral-800">
                  <summary className="cursor-pointer p-4">
                    A era das Grandes Navegações
                  </summary>

                  <div className="grid gap-4 px-4 pb-4">
                    <p>
                      A Era das Grandes Navegações ocorreu entre os séculos XV e XVII e foi marcada pela expansão marítima europeia. Portugal e Espanha lideraram expedições em busca de novas rotas comerciais, riquezas e territórios.
                    </p>

                    <p>
                      Avanços como a bússola, o astrolábio e as caravelas contribuíram para essas viagens. Entre os acontecimentos do período estão a chegada da expedição de Cristóvão Colombo à América e a viagem de Vasco da Gama às Índias.
                    </p>

                    <p>
                      A expansão marítima ampliou as conexões entre continentes e impulsionou a formação de impérios coloniais, acompanhada pela exploração de povos, escravização e violência contra populações indígenas.
                    </p>

                    <p>
                      Resumo demonstrativo do JOVI Elevra.
                    </p>
                  </div>
                </details>
              </div>

              <div className="flex shrink-0 justify-center gap-2 p-4">
                <button type="button" className="rounded-full bg-neutral-700 px-3 py-2 text-xs text-yellow-300">
                  RESUMIR
                </button>

                <Link to="/prototipo/camera" className="rounded-full bg-neutral-700 px-3 py-2 text-xs hover:text-yellow-300">
                  RESOLVER
                </Link>

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

export default Resumir