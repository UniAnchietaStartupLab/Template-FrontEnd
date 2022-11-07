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

      const htmlID = document.getElementById("datauser");
      htmlID.innerHTML = ` <div class="cardInfoUser">
                            <h3>Seja bem vindo ${userData.nome}</h3>
                            <p>
                              Você está acessando um novo ambiente, segue seu id e seu tipo
                              de acesso: ${userData.uuid} | ${userData.tipo}
                            </p>
                            <br />
                            <p>Seu usuario é: <strong>${userData.usuario}</strong></p>
                            <br />
                            <p>Seu email de acesso é: <strong>${userData.email}</strong></p>
                            <br />
                            <p>Sua senha de acesso é: <strong>${userData.senha}</strong></p>
                          </div>`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function voltar() {
  sessionStorage.clear();
  window.location.replace(`../site/index.html`);
}
