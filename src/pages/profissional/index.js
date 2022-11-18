var params = window.location.search.substr(1).split("&");
const uuid = atob(...params);
const sessionSt = sessionStorage.getItem("uuid");
obtemDadosUsuario(uuid);

if (sessionSt === null) {
  alert("Sessão expirada!");
  window.location.replace(`../login/index.html`);
}

function obtemDadosUsuario(uuid) {
  fetch(`http://localhost:3333/dataUser/${uuid}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var userData = {
        uuid: data[0].uuid,
        nome: data[0].nome,
        usuario: data[0].usuario,
        email: data[0].email,
        senha: data[0].senha,
        tipo: data[0].tipo,
      };

      const htmlID = document.getElementById("boasVindas");
      htmlID.innerHTML = `<p>Seja bem vindo, <strong>${userData.nome}</strong></p>`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function sair() {
  sessionStorage.clear();
  window.location.replace(`../site/index.html`);
}

function mostraConteudo(conteudo) {
  let contentPage = document.getElementById("contentPage");
  contentPage.innerHTML = "";

  switch (conteudo) {
    case "Minha agenda":
      contentPage.innerHTML = "";
      break;
    case "Clientes":
      contentPage.innerHTML = "";
      break;
    case "Configuracoes":
      contentPage.innerHTML = "";
      break;
    case "Perfil":
      contentPage.innerHTML = "";
      break;
  }
}
