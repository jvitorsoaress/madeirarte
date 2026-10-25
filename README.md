# Marcenaria Madeirarte

Reconstrução em Angular standalone da cópia local da página institucional da Madeirarte. Os arquivos salvos pelo Chrome continuam preservados na pasta pai; as fotografias e o logo utilizados pela aplicação estão em `public/images`.

## Requisitos

- Node.js 22 ou compatível com Angular 20
- npm

## Executar

Na pasta `madeirarte-app`:

```bash
npm install
npm start
```

A aplicação ficará disponível em `http://localhost:4200/`.

Para gerar a versão de produção ou executar os testes:

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

O comando de testes precisa de uma instalação de Chrome/Chromium compatível com o Karma.

## Organização

- `src/app/app.html`: composição das seções da página.
- `src/app/site-header.component.*`: cabeçalho e menu responsivo.
- `src/app/hero.component.*`: destaque inicial e seleção de ambientes.
- `src/app/about-gallery.component.*`: galeria da apresentação da marcenaria.
- `src/app/portfolio.component.*`: filtros e ampliação dos projetos ilustrativos.
- `src/app/services.component.*`: navegação pelos serviços.
- `src/app/faq.component.*`: acordeão de dúvidas.
- `src/styles.css`: estilos globais e adaptações responsivas.
- `public/images`: imagens e logo extraídos dos arquivos locais.

## Limitações da cópia

As respostas das perguntas frequentes, um formulário funcional e um perfil confirmado de Instagram não estavam disponíveis. As respostas ausentes são identificadas como tal; os contatos encaminham ao WhatsApp que consta na referência. O endereço foi recuperado do mapa salvo, mas o mapa interativo dependia dos scripts e tiles do Google Maps e foi substituído por um link externo. A fonte Manrope é carregada do Google Fonts quando há conexão; fontes do sistema são usadas como fallback.
