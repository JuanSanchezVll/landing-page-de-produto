# Snoozy · o cochilo de 20 minutos

## Integrantes

- Juan Sanchez

## Sobre o produto

A **Snoozy** é uma máscara de cochilo inteligente (fictícia) pensada para estudantes universitários que vivem entre prova, estágio e trabalho em grupo. Ela bloqueia a luz, toca sons para relaxar (chuva, ventilador, lo-fi) e acorda a pessoa com luz e vibração suave antes do sono profundo, no ciclo de 20 minutos.

A landing page apresenta o produto, explica como ele funciona e leva o visitante até a lista de espera ou até uma compra simulada.

**Como rodar**

```bash
npm install
npm run dev
```

Outros scripts: `npm run build` e `npm run lint`.

## Arquitetura

O projeto segue **FSD (Feature-Sliced Design)**, usando como base o template visto em aula. Cada camada só importa das camadas abaixo dela e cada pasta tem um `index.js` expondo o que pode ser usado por fora.

```
src/
  app/        entrada da aplicação, estilos globais (tokens de cor, fontes)
  pages/      home: monta a página com os widgets e controla os modais
  widgets/    blocos grandes da página: cabeçalho, hero, benefícios,
              como funciona, depoimentos, oferta, faq e rodapé
  features/   ações do usuário: lista-espera e comprar-snoozy
  entities/   model (dados mockados) e ui (cards): beneficio, plano,
              depoimento e pergunta
  shared/     Button, Badge, Input, Modal, ilustração SVG e formatarPreco (tudo em ui)
```

Estilização com **CSS Modules** (um `.module.css` por componente) e variáveis CSS globais em `app/index.css`.

## Jornada de construção

### Ideia inicial

Queria um produto que tivesse a ver com a vida de quem está na faculdade, e o que mais falta pra gente é sono. Dali veio a ideia de uma máscara de cochilo: dormir pouco é piada pronta entre os colegas, então dava para fazer uma página engraçada sem sair do tom acadêmico. O nome **Snoozy** vem de *snooze* (o botão de soneca do despertador, em inglês) e é fácil de lembrar e de falar.

Considerei também tratar o produto como um app de cochilo, mas a máscara dá algo físico para desenhar e vender, o que combina melhor com uma landing page com preço e kits.

### Pesquisa e referências

- O template de FSD da aula (`template-aula-fsd-modelo`), que usei como modelo de pastas, nomes em português, `index.js` por camada e componentes `Button`, `Modal` e `Input`.
- Estilo visual inspirado em sites de marcas jovens, com bordas grossas, sombras duras sem desfoque e cores fortes. A paleta roxo-noite com amarelo reforça o tema de dormir e acordar.
- Estrutura clássica de landing page de produto (hero, benefícios, como funciona, prova social, preço, FAQ e CTA), que é o que o enunciado pede.

### Ferramentas utilizadas

- React 19 com Vite
- CSS Modules
- ESLint
- VS Code
- Git e GitHub
- Google Fonts (Bricolage Grotesque e DM Sans)
- Ilustração do produto feita em SVG direto no código, sem banco de imagens

### Evolução da solução

- A primeira ideia de CTA era só o formulário da lista de espera. Acabaram ficando dois: lista de espera (formulário com validação e posição na fila) e compra simulada (escolha de cor, cupom e número de pedido).
- Inclui um seletor de modos (pós-almoço, véspera de prova, madrugada do TCC) na seção "Como funciona" para a explicação não ser só texto.
- O `Modal` do template foi adaptado ao novo estilo, com borda grossa e sombra amarela.
- Troquei a ideia de usar fotos por uma ilustração SVG própria, que muda de cor conforme a escolha do cliente.
- Os componentes do template foram simplificados (menos variantes) porque a landing não precisa de tudo.
- `react-router-dom`, `axios` e `json-server` do template ficaram de fora, porque a página é única e totalmente client-side, sem API.
- O botão "Ver preços" do hero estava dentro de um `<a>`, o que é HTML inválido (elemento interativo dentro de outro), então passou a rolar até a seção por `scrollIntoView`.
- O `Modal` do template tinha um alerta de dependência no `useEffect`, corrigido desestruturando `onFechar`.
- O nome do produto começou como Napo e virou Snoozy.
- Testei tudo no navegador (formulário com validação, compra simulada, FAQ e responsivo em 375px) e nem tudo saiu certo de primeira, por isso os commits de correção.

### Resultado final

A página ficou com identidade própria, todas as seções pedidas na atividade (hero, benefícios, imagens do produto, como funciona, avaliações fictícias, preço, FAQ e CTAs funcionais), é responsiva e segue FSD com CSS Modules.

Com mais tempo eu faria: fotos reais ou mockups 3D do produto, animações ao rolar a página, um carrinho com mais de um item e testes automatizados dos validadores.
