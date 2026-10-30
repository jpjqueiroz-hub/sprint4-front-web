import { Link } from "react-router"

function ApresentacaoPrototipo() {
    return (
      <section id="prototipo" className="min-h-screen scroll-mt-20 bg-light px-6 py-16 text-dark md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center rounded-2xl bg-light p-6 md:p-8">
            <img src="/images/prototipo.png" alt="Demonstração do protótipo JOVI Elevra em uma interface de smartphone" className="max-h-144 w-full rounded-xl object-contain" loading="lazy" />
          </div>
  
          <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <p className="font-inter text-lg font-semibold text-blue">
              NOSSO PROTÓTIPO
            </p>
  
            <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl">
              Da captura ao conhecimento. Conheça o JOVI Elevra.
            </h2>
  
            <p className="max-w-xl font-inter text-lg">
              Explore nosso protótipo e descubra como resumir, explicar, resolver e organizar conteúdos de estudo em uma experiência integrada à câmera do smartphone.
            </p>
  
            <Link to="/prototipo" className="rounded-full border-2 border-blue bg-blue px-8 py-4 font-inter text-lg font-semibold       text-light transition-colors hover:bg-transparent hover:text-blue">
                Conheça nosso protótipo
            </Link>
          </div>
        </div>
      </section>
    )
  }
  
  export default ApresentacaoPrototipo