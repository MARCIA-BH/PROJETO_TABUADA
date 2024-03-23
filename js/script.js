//referência 
const form = document.querySelector("form");
const numeroMultiplicador = document.querySelector("#numeroMultiplicador");
const repetirMultiplicador = document.querySelector("#repetirMultiplicador");
const quadroResultado = document.querySelector(".quadro-resultado");
const adicionarNumeroMultiplicador = document.querySelector("h2 span");

//fução
const criarTabuada = (numero, multiplicadorNumero) => {

    for(let i = 0; i <= multiplicadorNumero; i++) {
        const resultado = i * numero;

        const template = `<div class="linha">
            <div class="operacao">${numero} x ${i} = </div>
            <div class="resultado">${resultado}</div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const linha = htmlTemplate.querySelector(".linha");

        quadroResultado.appendChild(linha);
    }

    quadroResultado.style.display = "block";
    adicionarNumeroMultiplicador.innerText = numero;
}


//evento
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // adicionar valores do input em uma variável
    const multiplicador = numeroMultiplicador.value;
    const repetir = repetirMultiplicador.value;

    //validação
    if(!multiplicador || !repetir) return;

    criarTabuada(multiplicador, repetir);
})