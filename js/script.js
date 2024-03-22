//referencia
const formularioTabuada = document.querySelector("form");
const numero = document.querySelector("#numero");
const multiplicador = document.querySelector("#multiplicador");
const quadroResultado = document.querySelector("#resultado");
const tituloQuadroResultado = document.querySelector("#titulo-resultado span");

//funcao
function calcularTabuada(numeroTabuada, numeroMultiplicador) {
    for (let i = 0; i <= numeroMultiplicador; i++) {
        quadroResultado.innerHTML += `<p>${numeroTabuada} x ${i} = ${i * numeroTabuada}</p>`;
    }

    tituloQuadroResultado.innerText = numeroTabuada;
    quadroResultado.style.display = "block";
}

//evento
formularioTabuada.addEventListener("submit", (e) => {
    e.preventDefault();

    const numeroTabuada = +numero.value;
    const numeroMultiplicador = +multiplicador.value;

    //validacao
    if (!numeroTabuada || !numeroMultiplicador) return;

    calcularTabuada(numeroTabuada, numeroMultiplicador);
})
