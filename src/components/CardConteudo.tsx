import { Link } from "react-router"

interface CardConteudoProps {
  titulo: string
  disciplina: string
  tipo: string
  imagem: string
  rota: string
}

function CardConteudo({ titulo, disciplina, tipo, imagem, rota }: CardConteudoProps) {
  return (
    <Link to={rota} className="flex min-w-0 flex-col gap-2 rounded-xl bg-neutral-100 p-2">
      <img src={imagem} alt={titulo} className="aspect-square w-full rounded-lg object-cover" />

      <h2 className="text-sm font-semibold">
        {titulo}
      </h2>

      <p className="text-xs text-neutral-600">
        {disciplina}
      </p>

      <p className="text-xs font-semibold text-blue">
        {tipo}
      </p>
    </Link>
  )
}

export default CardConteudo