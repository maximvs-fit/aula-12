const btn = document.getElementById("btn-buscar");

btn.addEventListener("click", buscar);

function buscar(evento) {
  // console.log(evento)
  // console.log(evento.target)
  evento.preventDefault()

  // pegar o elemento do input
  const entrada = document.getElementById("input-cep");

  // pegar o texto desse elemento
  const texto = entrada.value;

  console.log("antes do fetch", texto);

  fetch(`http://viacep.com.br/ws/${texto}/json/`)
    .then(async (resposta) => {
      dados = await resposta.json();
      preencheCep(dados);
      return "bla";
    })
    .then((dados) => {
      console.log("executando o then 2", dados);
      return "ble";
    })
    .then((dados) => {
      console.log("executando o then 3", dados);
      throw new Error("deu ruim");
    })
    .then((dados) => {
      console.log("executando o then 4", dados);
      return "bli";
    })
    .catch((erro) => {
      console.log("executando catch", erro);
    })
    .finally(() => console.log("executando o finally"));

  console.log("depois do fetch");
}

function preencheCep(dados) {
  console.log("função que preenche os dados do cep", dados);
}
