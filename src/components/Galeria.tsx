function Galeria() {
    return (
      <section id="galeria" className="scroll-mt-20 bg-background px-6 py-16 text-center md:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-6">
          <p className="font-inter text-base font-semibold text-blue md:text-lg">
            GALERIA
          </p>
  
          <h2 className="font-sora text-4xl leading-tight text-elevra-dark md:text-5xl lg:text-6xl">
            Veja a solução em ação
          </h2>
        </div>
  
        <div className="grid auto-rows-64 grid-cols-1 gap-4 lg:auto-rows-80 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl lg:row-span-2">
            <img src="/images/galeria-1.png" alt="Demonstração da solução JOVI SmartStudy Cam" loading="lazy" className="h-full w-full object-cover"/>
          </div>
  
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/galeria-2.png" alt="Interface da JOVI SmartStudy Cam" loading="lazy" className="h-full w-full object-cover"/>
          </div>
  
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/galeria-3.png" alt="Reconhecimento de conteúdo acadêmico" loading="lazy" className="h-full w-full object-cover"/>
          </div>
  
          <div className="overflow-hidden rounded-2xl lg:col-span-2">
            <img src="/images/galeria-4.png" alt="Funcionalidades da JOVI SmartStudy Cam" loading="lazy" className="h-full w-full object-cover"/>
          </div>
        </div>
      </section>
    )
  }
  
  export default Galeria