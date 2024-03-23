# TABUADA

Este é um pequeno aplicativo em JavaScript que gera uma tabuada baseada nos valores inseridos pelo usuário. O aplicativo é composto por um formulário HTML e uma função JavaScript que manipula os dados e gera a tabuada dinamicamente.

## Funcionalidade

- O usuário pode inserir um número para a tabuada (multiplicando) e o número de vezes que deseja repetir a tabuada (multiplicador).
- Ao enviar o formulário, a tabuada é gerada e exibida na página.

## Estrutura do Código

O código é dividido em duas partes principais:

1. **Referências de Elementos do DOM:**
   - **form**: Referência ao formulário HTML.
   - **numeroMultiplicador**: Referência ao campo de entrada para o número da tabuada.
   - **repetirMultiplicador**: Referência ao campo de entrada para o multiplicador da tabuada.
   - **quadroResultado**: Referência ao elemento onde a tabuada será exibida.
   - **adicionarNumeroMultiplicador**: Referência ao elemento **`<span>`** dentro do título **`<h2>`** para mostrar o número da tabuada.

2. **Função para Criar a Tabuada:**
   - A função **`criarTabuada`** recebe dois parâmetros: o número da tabuada e o multiplicador.
   - Ela utiliza um loop **`for`** para calcular os resultados da tabuada e cria elementos HTML para exibir as operações e resultados.
   - Os elementos HTML são adicionados ao quadro de resultados na página.

## Como Usar

1. Abra o arquivo HTML em um navegador.
2. Insira um número para a tabuada e o número de vezes que deseja repeti-la nos campos do formulário.
3. Clique no botão de envio para gerar a tabuada.
