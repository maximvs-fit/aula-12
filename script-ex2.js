const btn = document.getElementById("btn-buscar");

btn.addEventListener("click", buscar);

function buscar(evento) {
  evento.preventDefault();

  // pegar o elemento do input
  const entrada = document.getElementById("input-cep");

  // pegar o texto desse elemento
  const texto = entrada.value.replace(/\D/g, "");

  if (texto.length !== 8) {
    alert("cep inválido");
    return;
  }

  fetch(`http://viacep.com.br/ws/${texto}/json/`)
    .then(async (resposta) => {
      dados = await resposta.json();

      if ("erro" in dados) {
        alert(
          "cep não encontrado, confira o cep e tente novamente ou preencha os dados manualmente"
        );
        limpaForm();
        throw new Error("cep não encontrado");
      }
      preencheCep(dados);
    })
    .catch((erro) => {
      console.log("Erro ao buscar cep", erro);
    });
}

function preencheCep(dados) {
  console.log("função que preenche os dados do cep", dados);

  atualizaCampo("rua", dados.logradouro);
  atualizaCampo("bairro", dados.bairro);
  atualizaCampo("cidade", dados.localidade);
  atualizaCampo("estado", dados.uf);

  // {
  //   cep: "01122-000",
  //   logradouro: "Rua Ribeiro de Lima",
  //   complemento: "",
  //   bairro: "Bom Retiro",
  //   localidade: "São Paulo",
  //   uf: "SP",
  //   ibge: "3550308",
  //   gia: "1004",
  //   ddd: "11",
  //   siafi: "7107",
  // };
}

function atualizaCampo(id, value) {
  const entrada = document.getElementById(id);
  entrada.value = value;
  entrada.setAttribute("readonly", "");
}

function limpaForm() {
  atualizaCampo("rua", "");
  atualizaCampo("bairro", "");
  atualizaCampo("cidade", "");
  atualizaCampo("estado", "");
  atualizaCampo("numero", "");
  atualizaCampo("complemento", "");
}
