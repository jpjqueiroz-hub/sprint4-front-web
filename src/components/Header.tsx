import { useState } from "react"

function Header() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false)

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-light px-4 py-4 md:flex md:h-20 md:items-center md:justify-between md:px-6 lg:px-12">
      <div className="flex items-center justify-between">
        <h1 className="font-sora text-xl text-blue md:text-2xl lg:text-3xl">
          DEVSPARK
        </h1>
        <button type="button" onClick={alternarMenu} className="flex flex-col gap-1.5 md:hidden" aria-label="Abrir menu">
          <span className="h-0.5 w-7 bg-dark"></span>
          <span className="h-0.5 w-7 bg-dark"></span>
          <span className="h-0.5 w-7 bg-dark"></span>
        </button>
      </div>
      <nav className={`${menuAberto ? "block" : "hidden"} mt-4 md:mt-0 md:block`}>
        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-4 lg:gap-8">
          <li>
            <a href="#home" onClick={fecharMenu} className="font-inter text-base text-dark transition-colors hover:text-blue">
              Home
            </a>
          </li>
          <li>
            <a href="#solucao" onClick={fecharMenu} className="font-inter text-base text-dark transition-colors hover:text-blue">
              Solução
            </a>
          </li>
          <li>
            <a href="#publico" onClick={fecharMenu} className="font-inter text-base text-dark transition-colors hover:text-blue">
              Público-Alvo
            </a>
          </li>
          <li>
            <a href="#galeria" onClick={fecharMenu} className="font-inter text-base text-dark transition-colors hover:text-blue">
              Galeria
            </a>
          </li>
          <li>
            <a href="#equipe" onClick={fecharMenu} className="font-inter text-base text-dark transition-colors hover:text-blue">
              Equipe
            </a>
          </li>
          <li>
            <a href="#contato" onClick={fecharMenu} className="font-inter text-base text-dark transition-colors hover:text-blue">
              Contato
            </a>
          </li>
          <li>
            <a href="#prototipo" onClick={fecharMenu} className="font-inter text-base text-dark transition-colors hover:text-blue">
              Protótipo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header