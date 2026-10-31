import { useState } from "react"
import { Link, useNavigate } from "react-router"
import useConteudos from "../hooks/useConteudos"
import CardConteudo from "../components/CardConteudo"

function GaleriaPrototipo() {
  const [telaAtual, setTelaAtual] = useState("fotos")
  const navigate = useNavigate()
  const { conteudos, carregando, erro } = useConteudos()

  function voltar() {
    if (telaAtual === "estudos") {
      setTelaAtual("albuns")
    } else if (telaAtual === "albuns") {
      setTelaAtual("fotos")
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
        <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white text-black">
          <div className="flex shrink-0 items-center justify-between px-4 py-5">
            <p className="text-sm font-semibold">9:40</p>
            <img src="/prototipo/images/iconestopo-preto.png" alt="Conexão, Bluetooth, Wi-Fi e bateria" className="w-24" />
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-6">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h1 className="text-2xl font-semibold">
                {telaAtual === "fotos" ? "Fotos" : telaAtual === "albuns" ? "Álbuns" : "Estudos"}
              </h1>

              <img src="/prototipo/images/iconesgaleria.png" alt="Ícones ilustrativos de pesquisa, seleção e opções" className="w-20" />
            </div>

            {telaAtual === "fotos" && (
              <div>
                <p className="mb-4 text-sm text-neutral-600">
                  Hoje
                </p>

                <div className="grid grid-cols-3 gap-2">
                  <img src="/prototipo/images/matemática.png" alt="Exercício de matemática" className="aspect-square w-full object-cover" />
                  <img src="/prototipo/images/abaporu.png" alt="Obra Abaporu" className="aspect-square w-full object-cover" />
                  <img src="/prototipo/images/lousa.png" alt="Conteúdo sobre as Grandes Navegações" className="aspect-square w-full object-cover" />
                </div>
              </div>
            )}

            {telaAtual === "albuns" && (
              <div className="grid grid-cols-2 gap-6">
                <button type="button" onClick={() => setTelaAtual("estudos")} className="flex cursor-pointer flex-col items-center gap-3">
                  <img src="/prototipo/images/pasta-estudos.png" alt="" className="size-24 object-contain" />
                  <span className="text-base font-semibold">Estudos</span>
                </button>

                <button type="button" onClick={() => setTelaAtual("fotos")} className="flex cursor-pointer flex-col items-center gap-3">
                  <img src="/prototipo/images/pasta-fotos.png" alt="" className="size-24 object-contain" />
                  <span className="text-base font-semibold">Fotos</span>
                </button>
              </div>
            )}

              {telaAtual === "estudos" && (
                <div>
                  {carregando && (
                    <p className="text-sm text-neutral-600">
                      Carregando seus estudos...
                    </p>
                  )}

                  {erro && (
                    <p role="alert" className="text-sm text-red-700">
                      {erro}
                    </p>
                  )}

                  {!carregando && !erro && conteudos.length === 0 && (
                    <p className="text-sm text-neutral-600">
                      Nenhum conteúdo encontrado.
                    </p>
                  )}

                  {!carregando && !erro && (
                    <div className="grid grid-cols-2 gap-3">
                      {conteudos.map((conteudo) => (
                        <CardConteudo
                          key={conteudo.id}
                          titulo={conteudo.titulo}
                          disciplina={conteudo.disciplina}
                          tipo={conteudo.tipo}
                          imagem={conteudo.imagem}
                          rota={conteudo.rota}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
          </div>

          <div className="flex shrink-0 justify-center gap-12 border-t border-neutral-200 px-4 py-4">
            <button type="button" onClick={() => setTelaAtual("fotos")} className={`cursor-pointer text-base font-semibold ${telaAtual === "fotos" ? "text-blue" : "text-neutral-500"}`}>
              Fotos
            </button>

            <button type="button" onClick={() => setTelaAtual("albuns")} className={`cursor-pointer text-base font-semibold ${telaAtual !== "fotos" ? "text-blue" : "text-neutral-500"}`}>
              Álbuns
            </button>
          </div>

          <div className="flex shrink-0 items-center justify-around pt-3 pb-6">
            <button type="button" disabled aria-label="Aplicativos recentes">
              <img src="/prototipo/images/iconerecentes-preto.png" alt="" className="size-6 object-contain" />
            </button>

            <Link to="/prototipo" aria-label="Tela inicial">
              <img src="/prototipo/images/iconehome-preto.png" alt="" className="size-6 object-contain" />
            </Link>

            <button type="button" onClick={voltar} aria-label="Voltar" className="cursor-pointer">
              <img src="/prototipo/images/iconevoltar-preto.png" alt="" className="size-6 object-contain" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default GaleriaPrototipo