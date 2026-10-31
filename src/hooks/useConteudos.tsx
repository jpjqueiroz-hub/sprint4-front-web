import { useEffect, useState } from "react"

export interface Conteudo {
  id: string
  titulo: string
  disciplina: string
  tipo: string
  imagem: string
  rota: string
}

function useConteudos() {
  const [conteudos, setConteudos] = useState<Conteudo[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")

  useEffect(() => {
    let ativo = true

    async function buscarConteudos() {
      try {
        const resposta = await fetch(
          "https://6ae602fa877d34ccafc29b04.mockapi.io/conteudos"
        )

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os conteúdos.")
        }

        const dados: Conteudo[] = await resposta.json()

        if (ativo) {
          setConteudos(dados)
        }
      } catch {
        if (ativo) {
          setErro("Não foi possível carregar os estudos. Tente novamente mais tarde.")
        }
      } finally {
        if (ativo) {
          setCarregando(false)
        }
      }
    }

    buscarConteudos()

    return () => {
      ativo = false
    }
  }, [])

  return { conteudos, carregando, erro }
}

export default useConteudos