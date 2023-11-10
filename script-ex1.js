const btn = document.getElementById("btn-salvar");

btn.addEventListener("click", salvar);

function salvar() {
  // pegar o elemento do input
  const entrada = document.getElementById("texto");

  // pegar o texto desse elemento
  const texto = entrada.value;

  if (texto === "") {
    return;
  }

  // criar um elemento de lista com o texto do input
  const novaLinha = document.createElement("li");
  novaLinha.textContent = texto;

  // adicionar esse elemento no final da lista
  const lista = document.getElementById("historico");
  lista.appendChild(novaLinha);

  entrada.value = "";
}
