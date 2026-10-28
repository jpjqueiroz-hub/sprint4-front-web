function Publico() {
    return (
      <section id="publico" className="grid min-h-screen scroll-mt-20 grid-cols-1 items-center gap-8 bg-light px-6 py-16 text-dark md:px-8 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <img src="/images/estudante.png" alt="Estudante universitário utilizando um smartphone" className="h-80 w-full rounded-2xl object-cover md:h-112 lg:h-150"/>
        </div>
  
        <div className="flex flex-col gap-8">
          <p className="font-inter text-base font-semibold text-blue md:text-lg">
            PÚBLICO-ALVO
          </p>
  
          <h2 className="font-sora text-4xl font-semibold leading-none text-dark md:text-5xl lg:text-6xl">
            Tecnologia que acompanha seus estudos.
          </h2>
  
          <p className="font-inter text-base leading-relaxed text-dark md:text-lg">
            Nosso público principal são estudantes universitários que utilizam o
            smartphone na rotina acadêmica para registrar lousas, livros,
            exercícios e anotações. A solução busca tornar esse processo mais
            prático, organizado e integrado ao estudo.
          </p>
  
          <div className="grid gap-4">
            <div className="grid grid-cols-numbered-item items-center gap-8 rounded-2xl bg-background p-4">
              <div className="p-4 font-inter text-base font-semibold text-blue md:text-lg">
                01
              </div>
  
              <div>
                <h3 className="mb-4 font-sora text-base text-dark md:text-lg">
                  Praticidade
                </h3>
                <p className="font-inter text-base text-dark md:text-lg">
                  Menos troca entre diferentes aplicativos.
                </p>
              </div>
            </div>
  
            <div className="grid grid-cols-numbered-item items-center gap-8 rounded-2xl bg-background p-4">
              <div className="p-4 font-inter text-base font-semibold text-blue md:text-lg">
                02
              </div>
  
              <div>
                <h3 className="mb-4 font-sora text-base text-dark md:text-lg">
                  Compreensão
                </h3>
                <p className="font-inter text-base text-dark md:text-lg">
                  Suporte contextual para conteúdos acadêmicos.
                </p>
              </div>
            </div>
  
            <div className="grid grid-cols-numbered-item items-center gap-8 rounded-2xl bg-background p-4">
              <div className="p-4 font-inter text-base font-semibold text-blue md:text-lg">
                03
              </div>
  
              <div>
                <h3 className="mb-4 font-sora text-base text-dark md:text-lg">
                  Organização
                </h3>
                <p className="font-inter text-base text-dark md:text-lg">
                  Conteúdos de estudo reunidos de forma mais prática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Publico