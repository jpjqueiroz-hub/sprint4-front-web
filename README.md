# JOVI Elevra — DevSpark

Projeto desenvolvido para a Sprint 4 das disciplinas Front-End Design e Web Development, dando continuidade à solução apresentada na Sprint 3 do Challenge FIAP/JOVI.

O JOVI Elevra propõe transformar a câmera do smartphone em um assistente acadêmico, permitindo resumir, explicar, resolver e organizar conteúdos de estudo.

Nesta versão, a landing page e o protótipo foram migrados para React e Tailwind CSS. As respostas do assistente são demonstrações predefinidas: o projeto não realiza reconhecimento de imagens nem gera respostas com inteligência artificial em tempo real.

## Tecnologias utilizadas

- React: construção das interfaces com componentes.
- TypeScript: tipagem do código.
- Tailwind CSS: estilização e responsividade.
- Vite: ambiente de desenvolvimento e geração da versão de produção.
- React Router: navegação entre as páginas.
- Fetch API: requisições HTTP.
- MockAPI: disponibilização dos dados dos conteúdos de estudo.
- Git e GitHub: versionamento e armazenamento do código.

## Funcionalidades

### Landing page

- Apresentação da solução.
- Menu responsivo.
- Carrossel de banners.
- Seções de solução, público-alvo, galeria, protótipo, equipe e contato.

### Protótipo

- Tela inicial que simula um smartphone.
- Acesso à câmera e à galeria.
- Menu do assistente com as funções Resolver, Explicar e Resumir.
- Painéis de resultados com expansão e recolhimento.
- Galeria com navegação entre Fotos, Álbuns e Estudos.
- Consulta dos conteúdos da pasta Estudos por meio de uma API.



## Como executar em outro computador

### 1. Obter o projeto

Baixe e extraia o ZIP.

### 2. Abrir a pasta da aplicação

Abra a pasta `jovi-elevra` no editor e inicie um terminal nessa pasta.

Se estiver na pasta `Sprint4-Front`, execute:

```bash
cd jovi-elevra
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar a aplicação

```bash
npm run dev
```

Abra no navegador o endereço exibido pelo terminal, normalmente:

```text
http://localhost:5173
```

Não é necessário iniciar um servidor de back-end local. Os dados externos são fornecidos pelo MockAPI.

## API consumida

O projeto utiliza um recurso chamado `conteudos`, configurado no MockAPI para simular uma base de conteúdos acadêmicos.

Endpoint público:

https://6ae602fa877d34ccafc29b04.mockapi.io/conteudos

A aplicação realiza uma requisição `GET` para obter os registros da pasta Estudos. Cada registro contém:

- `id`: identificador do conteúdo.
- `titulo`: nome do conteúdo.
- `disciplina`: matéria relacionada.
- `tipo`: resolução, explicação ou resumo.
- `imagem`: caminho da imagem dentro do projeto.
- `rota`: endereço da página que apresenta o resultado.

A consulta é realizada pelo hook `useConteudos`, que também controla os estados de carregamento e erro. Os dados são enviados ao componente `CardConteudo` por props.

As imagens permanecem na pasta `public/prototipo/images`; a API armazena apenas seus caminhos. Os textos dos painéis de resolução, explicação e resumo continuam predefinidos na aplicação.

Não são necessárias credenciais ou variáveis de ambiente para consultar esse endpoint. O acesso depende de conexão com a internet e da disponibilidade do serviço externo.

## Principais rotas

| Rota | Página |
|---|---|
| `/` | Landing page |
| `/prototipo` | Tela inicial do protótipo |
| `/prototipo/camera` | Câmera e resolução de matemática |
| `/prototipo/explicar` | Explicação sobre Abaporu |
| `/prototipo/resumir` | Resumo sobre as Grandes Navegações |
| `/prototipo/galeria` | Fotos, álbuns e conteúdos de estudo |


## Uso de inteligência artificial

A inteligência artificial foi utilizada como ferramenta de apoio na criação e configuração do recurso de dados da API no MockAPI, incluindo a definição dos campos, a organização dos registros em JSON e orientações para seu consumo no React. E também como apoio na criação do menu oculto no header da página

## Integrantes

- Fernando Raimundo Chelotti Ferreira Júnior — RM 571610
- Gabriel de Melo Lopes — RM 569404
- Guilherme Alvim Miranda Ferreira — RM 573040
- João Pedro Jales Queiroz — RM 568678
- Nicolas Vasconcelos Bettini Sadala — RM 571011

## Links do projeto

- Repositório GitHub: **https://github.com/jpjqueiroz-hub/sprint4-front-web**.
- Deploy na Vercel: **inserir o link após a publicação**.