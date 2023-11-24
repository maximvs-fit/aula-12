const btnListar = document.getElementById("btn-listar");
const btnCriar = document.getElementById("btn-criar");

const baseUrl = "http://localhost:5000";

btnListar.addEventListener("click", handleListar);
btnCriar.addEventListener("click", handleCriar);

function handleListar() {
  fetch(`${baseUrl}/exibir`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function handleCriar() {
  const data = {
    console: "Nintendo Switch",
    genre: "Aventura",
    title: "Zelda: BOTW",
  };

  const myHeaders = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  const myInit = {
    method: "POST",
    body: JSON.stringify(data),
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  fetch(`${baseUrl}/adicionar`, myInit)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
