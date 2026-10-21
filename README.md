# Snoozy · o cochilo de 20 minutos

## Integrantes

- Juan Sanchez

## Sobre o produto

A **Snoozy** é uma máscara de cochilo inteligente (fictícia) pensada para estudantes universitários que vivem entre prova, estágio e trabalho em grupo. Ela bloqueia a luz, toca sons para relaxar (chuva, ventilador, lo-fi) e acorda a pessoa com luz e vibração suave antes do sono profundo, no ciclo de 20 minutos.

O público é quem dorme pouco e precisa render no dia seguinte. A landing page apresenta o produto, explica como ele funciona e leva o visitante até a lista de espera ou até uma compra simulada com cupom de estudante.

**Como rodar**

```bash
npm install
npm run dev
```

A página abre em `http://localhost:5173/`. Outros scripts: `npm run build` e `npm run lint`.

**Arquitetura:** FSD (Feature-Sliced Design), seguindo o template visto em aula, com CSS Modules.

```
src/
  app/        entrada da aplicação e estilos globais (cores, fontes)
  pages/      home: monta a página com os widgets e controla os modais
  widgets/    cabeçalho, hero, benefícios, como funciona, depoimentos,
              oferta, faq e rodapé
  features/   lista-espera e comprar-snoozy
  entities/   model (dados mockados) e ui (cards): benefício, plano,
              depoimento e pergunta
  shared/     ui: Button, Badge, Input, Modal, ilustração SVG e formatarPreco
```

## Jornada de construção

### Ideia inicial

Queria um produto que tivesse a ver com a vida de quem está na faculdade, e o que mais falta pra gente é sono. Daí veio a ideia de uma máscara de cochilo: dormir pouco é piada pronta entre os colegas, então dava para fazer uma página divertida sem sair do tom acadêmico.

Alternativas que considerei:

- **App de cochilo**, só com timer e sons. Descartei porque a máscara é algo físico, dá para desenhar e vender em kits, o que combina mais com uma landing page de produto.
- **Nome Napo** (de *nap*, cochilo em inglês). Foi o primeiro nome, mas não gostei do resultado na página e troquei por **Snoozy**, de *snooze*, o botão de soneca do despertador. É mais fácil de lembrar e todo mundo já conhece a palavra.

### Pesquisa e referências

- O **template de FSD da aula** (`template-aula-fsd-modelo`), que usei como base para a estrutura de pastas, os nomes em português, os `index.js` por camada e os componentes `Button`, `Modal` e `Input`.
- **Landing pages de marcas jovens**, com bordas grossas, sombras duras sem desfoque e cores fortes (estilo neo-brutalista). Achei que combinava com o público universitário.
- A paleta **roxo-noite com amarelo** veio da ideia de noite e despertar, com rosa como cor de apoio.
- A **estrutura clássica de landing page** (hero, benefícios, como funciona, prova social, preço, FAQ e CTA), que também é o que o enunciado pede.

### Ferramentas utilizadas

- React 19 com Vite
- CSS Modules
- ESLint
- VS Code
- OpenCode
- Git e GitHub
- Google Fonts (Bricolage Grotesque e DM Sans)
- Ilustração do produto feita em SVG direto no código, sem banco de imagens nem gerador de imagem

### Uso de IA

Usei dois modelos:

- **GPT-5 Mini, no OpenCode:** comecei por ele, que era a proposta da atividade, para conhecer a ferramenta e fazer os primeiros testes e ajustes. Ele foi bem em coisas pontuais, mas quando pedi mudanças maiores de layout se perdeu: elementos mudavam de posição e tive que pedir para desfazer.
- **Claude Sonnet:** troquei para ele quando precisei montar a estrutura inteira seguindo o template de FSD, porque mexia em muitos arquivos de uma vez e mantinha o padrão de pastas e nomes. Usei para gerar a base dos componentes, os CSS Modules e os textos mockados.

O que foi **mantido** das sugestões: a paleta roxo e amarelo, a ilustração em SVG com animação leve, os dois CTAs (lista de espera e compra simulada), o seletor de modos em "Como funciona" e o cupom `PROVA10`.

O que foi **alterado**:

- O nome sugerido no começo (Napo) eu troquei por Snoozy.
- A IA primeiro organizou as `entities` em uma pasta por entidade e criou um `index.js` dentro de `shared`. Comparei com o template da aula e pedi para seguir o mesmo formato: `entities/ui` e `entities/model`, e imports direto do componente em `shared`.
- Em um momento o projeto foi recriado com `npm create vite@latest`, que veio com Oxlint. Voltei para o ESLint para ficar igual ao template.

O que foi **descartado**: `react-router-dom`, `axios` e `json-server` do template, porque a página é única e totalmente client-side, sem API.

**Quando não ficou bom:** o botão "Ver preços" do hero foi gerado dentro de um `<a>`, que é HTML inválido (um elemento clicável dentro de outro). Corrigi para rolar até a seção com `scrollIntoView`. O `Modal` também gerava um alerta do ESLint no `useEffect`, corrigido desestruturando `onFechar`.

### Evolução da solução

- **Produto e nome:** a ideia da máscara se manteve, mas o nome mudou de Napo para Snoozy.
- **CTA:** a primeira ideia era só o formulário da lista de espera. No fim ficaram dois: lista de espera (com validação e posição na fila) e compra simulada (cor, cupom e número de pedido).
- **Como funciona:** era só texto em três passos. Adicionei um seletor de modos (pós-almoço, véspera de prova, madrugada do TCC) com barra de duração, para ficar interativo.
- **Imagens:** pensei em usar fotos, mas troquei por uma ilustração SVG própria, que muda de cor conforme a escolha na compra.
- **Estrutura:** reorganizei as pastas duas vezes para ficar igual ao template da aula.
- **Componentes:** o `Modal`, o `Button` e o `Input` do template foram adaptados ao estilo novo (borda grossa e sombra amarela) e simplificados, com menos variantes.
- **Testes:** testei no navegador o formulário, a compra, o FAQ e o layout no celular (375px). Nem tudo saiu certo de primeira, por isso alguns commits são de correção.

### Resultado final

Gostei do resultado. A página tem identidade própria, todas as seções pedidas (hero, benefícios, imagem do produto, como funciona, avaliações fictícias, preço, FAQ e CTAs funcionando), é responsiva e segue FSD com CSS Modules, como vimos em aula.

O que aprendi: separar a página em camadas deixa fácil achar onde mexer, e a IA ajuda muito a ganhar tempo, mas precisa conferir o que ela gera, porque nem sempre segue o padrão pedido.

Com mais tempo eu faria: fotos ou mockups 3D do produto, animações ao rolar a página, um carrinho com mais de um item e testes automatizados dos validadores.
