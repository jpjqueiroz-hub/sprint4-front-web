import { useEffect, useState } from "react"

const banners: string[] = [
  "/images/banner-1.png",
  "/images/banner-02.png",
  "/images/banner-03.png"
]

function Hero() {
  const [bannerAtual, setBannerAtual] = useState<number>(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setBannerAtual((anterior) => (anterior + 1) % banners.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section id="home"className="relative flex min-h-screen items-center overflow-hidden bg-light px-6 pt-20 md:px-10 lg:px-12">
    {banners.map((banner, index) => (
      <div
        key={banner}
        className={`absolute inset-0 bg-cover bg-right bg-no-repeat transition-opacity duration-1000 ${
          index === bannerAtual ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
    ))}

  <div className="absolute inset-0 bg-hero-overlay"></div>

  <div className="relative z-1 flex w-full flex-col items-start gap-8">
    <h2 className="max-w-48 font-sora text-4xl leading-tight text-elevra-dark md:max-w-80 md:text-6xl lg:max-w-5xl lg:text-7xl">
      Aponte, Capture e Aprenda
    </h2>

    <div className="flex flex-col items-start gap-6">
      <p className="max-w-xl font-inter text-base leading-relaxed text-dark md:text-lg lg:text-xl">
        Resuma, explique e resolva conteúdos em tempo real usando Elevra.
      </p>

      <a href="#solucao" className="rounded-full border-2 border-blue bg-blue px-8 py-4 font-inter text-light transition-colors hover:bg-transparent hover:text-dark">
        Visite o site
      </a>
    </div>
  </div>

  <div className="absolute bottom-6 left-1/2 z-1 flex -translate-x-1/2 gap-2">
    {banners.map((_, index) => (
      <button key={index} type="button" onClick={() => setBannerAtual(index)} aria-label={`Exibir banner ${index + 1}`} 
      className={`h-25 rounded-full transition-all ${
          index === bannerAtual
            ? "w-8 bg-elevra-blue"
            : "w-2.5 bg-elevra-light"
        }`}
      ></button>
    ))}
  </div>
</section>
  )
}

export default Hero