function Contato() {
    return (
      <section id="contato"className="min-h-screen scroll-mt-20 bg-light px-6 py-16 text-dark md:px-8 md:py-20 lg:px-12 lg:py-24"
>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="font-inter text-lg font-semibold text-blue">
                ENTRE EM CONTATO
              </p>
  
              <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl">
                Vamos conversar?
              </h2>
  
              <p className="font-inter text-lg">
                Tem alguma dúvida sobre o projeto ou quer conhecer melhor
                o JOVI Elevra? Entre em contato com a equipe DevSpark.
              </p>
            </div>
  
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h3 className="font-sora text-2xl">
                E-mail
              </h3>
              <a href="mailto:devspark@email.com" className="font-inter text-lg transition hover:text-blue">
                devspark@email.com
              </a>
            </div>
  
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h3 className="font-sora text-2xl">
                Redes sociais
              </h3>
  
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h4 className="font-sora text-xl text-blue">
                    GitHub
                  </h4>
  
                  <ul className="flex flex-col gap-3 font-inter text-lg">
                    <li>
                      <a href="https://github.com/FChelottiDev" className="transition hover:text-blue">
                        Fernando
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/gabmelolopes" className="transition hover:text-blue">
                        Gabriel
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Guilherme-Alvim-dev" className="transition hover:text-blue">
                        Guilherme
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/jpjqueiroz-hub" className="transition hover:text-blue">
                        João
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/nicolassadala" className="transition hover:text-blue">
                        Nícolas
                      </a>
                    </li>
                  </ul>
                </div>
  
                <div className="flex flex-col gap-4 text-center lg:text-left">
                  <h4 className="font-sora text-xl text-blue">
                    LinkedIn
                  </h4>
  
                  <ul className="flex flex-col gap-3 font-inter text-lg">
                    <li>
                      <a href="https://www.linkedin.com/in/fernandochelottijr/" className="transition hover:text-blue">
                        Fernando
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/gabriel-lopes-8212743ab/" className="transition hover:text-blue">
                        Gabriel
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/guilherme-alvim-miranda-ferreira-5539a83a7/" className="transition hover:text-blue">
                        Guilherme
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-queiroz-00357a379/" className="transition hover:text-blue">
                        João
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/n%C3%ADcolas-sadala-1a00803b3/" className="transition hover:text-blue">
                        Nícolas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div className="rounded-2xl bg-background p-6 md:p-10">
            <form name="form-contato" id="form-contato" method="get" action="">
                <fieldset className="rounded-2xl border-0 p-4 md:p-6">
                    <legend className="px-2 font-sora text-2xl text-dark">Envie sua mensagem</legend>

                    <div className="grid gap-6">
                    <div>
                        <label htmlFor="nome" className="mb-2 ml-2 block font-inter text-lg text-dark">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" maxLength={100} required className="w-full rounded-lg border border-card bg-light px-4 py-3 font-inter text-base" />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 ml-2 block font-inter text-lg text-dark">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" maxLength={100} required className="w-full rounded-lg border border-card bg-light px-4 py-3 font-inter text-base" />
                    </div>

                    <div>
                        <label htmlFor="mensagem" className="mb-2 ml-2 block font-inter text-lg text-dark">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem" maxLength={1000} required className="h-40 w-full rounded-lg border border-card bg-light px-4 py-3 font-inter text-base" />
                    </div>

                    <button type="submit" className="cursor-pointer rounded-lg border-2 border-blue bg-blue px-6 py-4 font-inter text-lg font-semibold text-light hover:bg-transparent hover:text-blue">Enviar mensagem</button>
                    </div>
                </fieldset>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contato