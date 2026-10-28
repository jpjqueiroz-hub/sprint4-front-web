function Solucao() {
    return (
      <section id="solucao" className="grid grid-cols-1 min-h-screen scroll-mt-20 items-center gap-12 bg-background px-12 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <p className="font-inter text-base font-semibold text-blue md:text-lg">
              SOLUÇÃO
            </p>
  
            <h2 className="font-sora text-4xl font-semibold leading-none text-dark md:text-5xl lg:text-6xl">
              Uma câmera que entende e auxilia o estudante.
            </h2>
          </div>
  
          <p className="w-full font-inter text-lg leading-relaxed text-dark md:w-11/12 md:text-xl lg:w-9/10 lg:text-2xl">
            O JOVI Elevra propõe transformar a câmera do smartphone em um
            assistente acadêmico inteligente, capaz de reconhecer o contexto do
            conteúdo fotografado e auxiliar o estudante durante seus estudos.
          </p>
        </div>
  
        <div className="flex flex-col gap-8 rounded-2xl bg-light p-6 md:p-8 lg:p-12">
          <h3 className="font-sora text-2xl text-dark md:text-3xl">
            Como funciona?
          </h3>
  
          <ul className="flex list-none flex-col gap-8">
            <li className="grid grid-cols-numbered-item items-center gap-4">
              <span className="rounded-2xl bg-blue p-4 font-inter font-semibold text-light">
                01
              </span>
  
              <div className="flex flex-col gap-2 md:gap-4">
                <h3 className="font-sora text-lg text-dark md:text-xl">
                  Aponte
                </h3>
                <p className="font-inter text-base leading-relaxed text-dark md:text-lg">
                  Aponte a câmera para o conteúdo acadêmico que deseja estudar.
                </p>
              </div>
            </li>
  
            <li className="grid grid-cols-numbered-item items-center gap-4">
              <span className="rounded-2xl bg-blue p-4 font-inter font-semibold text-light">
                02
              </span>
  
              <div className="flex flex-col gap-2 md:gap-4">
                <h3 className="font-sora text-lg text-dark md:text-xl">
                  Reconheça
                </h3>
                <p className="font-inter text-base leading-relaxed text-dark md:text-lg">
                  A inteligência artificial reconhece e interpreta o contexto do
                  conteúdo capturado.
                </p>
              </div>
            </li>
  
            <li className="grid grid-cols-numbered-item items-center gap-4">
              <span className="rounded-2xl bg-blue p-4 font-inter font-semibold text-light">
                03
              </span>
  
              <div className="flex flex-col gap-2 md:gap-4">
                <h3 className="font-sora text-lg text-dark md:text-xl">
                  Aprenda
                </h3>
                <p className="font-inter text-base leading-relaxed text-dark md:text-lg">
                  Utilize as funções Resumir, Explicar ou Resolver de acordo com
                  a sua necessidade.
                </p>
              </div>
            </li>
  
            <li className="grid grid-cols-numbered-item items-center gap-4">
              <span className="rounded-2xl bg-blue p-4 font-inter font-semibold text-light">
                04
              </span>
  
              <div className="flex flex-col gap-2 md:gap-4">
                <h3 className="font-sora text-lg text-dark md:text-xl">
                  Organize
                </h3>
                <p className="font-inter text-base leading-relaxed text-dark md:text-lg">
                  Organize os conteúdos capturados para facilitar consultas
                  posteriores.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
  
  export default Solucao