function Equipe() {
    return (
      <section id="equipe"className="min-h-screen scroll-mt-20 bg-light px-6 py-16 text-dark md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-inter text-lg font-semibold text-blue">
              NOSSA EQUIPE
            </p>
  
            <h2 className="max-w-5xl font-sora text-3xl md:text-4xl lg:text-5xl">
              Conheça quem está por trás da DevSpark
            </h2>
          </div>
  
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            <article className="flex flex-col gap-8 rounded-2xl bg-background p-8 md:p-10 lg:col-span-2">
              <div className="flex flex-col gap-3">
                <h3 className="font-sora text-2xl md:text-3xl">
                  Fernando
                </h3>
  
                <p className="font-inter text-lg font-semibold text-blue">
                  Scrum Master
                </p>
              </div>
  
              <p className="font-inter text-lg">
                Responsável, organizado e proativo, contribui para a comunicação
                e organização da equipe.
              </p>
            </article>
  
            <article className="flex flex-col gap-8 rounded-2xl bg-background p-8 md:p-10 lg:col-span-2">
              <div className="flex flex-col gap-3">
                <h3 className="font-sora text-2xl md:text-3xl">
                  Gabriel
                </h3>
  
                <p className="font-inter text-lg font-semibold text-blue">
                  Desenvolvedor Back-end
                </p>
              </div>
  
              <p className="font-inter text-lg">
                Criativo e comunicativo, destaca-se pelo trabalho em equipe,
                pontualidade e comprometimento.
              </p>
            </article>
  
            <article className="flex flex-col gap-8 rounded-2xl bg-background p-8 md:p-10 lg:col-span-2">
              <div className="flex flex-col gap-3">
                <h3 className="font-sora text-2xl md:text-3xl">
                  Guilherme
                </h3>
  
                <p className="font-inter text-lg font-semibold text-blue">
                  Desenvolvedor Back-end
                </p>
              </div>
  
              <p className="font-inter text-lg">
                Colaborativo e confiável, valoriza a integridade, a comunicação
                e a participação ativa na equipe.
              </p>
            </article>
  
            <article className="flex flex-col gap-8 rounded-2xl bg-background p-8 md:p-10 lg:col-span-2 lg:col-start-2">
              <div className="flex flex-col gap-3">
                <h3 className="font-sora text-2xl md:text-3xl">
                  João
                </h3>
  
                <p className="font-inter text-lg font-semibold text-blue">
                  Desenvolvedor Front-end
                </p>
              </div>
  
              <p className="font-inter text-lg">
                Cuidadoso e objetivo, busca manter uma visão equilibrada
                e um alto padrão de qualidade no desenvolvimento.
              </p>
            </article>
  
            <article className="flex flex-col gap-8 rounded-2xl bg-background p-8 md:p-10 lg:col-span-2 lg:col-start-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-sora text-2xl md:text-3xl">
                  Nícolas
                </h3>
  
                <p className="font-inter text-lg font-semibold text-blue">
                  Desenvolvedor Front-end
                </p>
              </div>
  
              <p className="font-inter text-lg">
                Empático e articulado, contribui com criatividade, novas ideias
                e uma visão inspiradora para a equipe.
              </p>
            </article>
          </div>
        </div>
      </section>
    )
  }
  
  export default Equipe