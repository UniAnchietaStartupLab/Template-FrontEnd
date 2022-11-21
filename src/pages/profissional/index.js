var params = window.location.search.substr(1).split("&");
const uuid = atob(...params);
const sessionSt = sessionStorage.getItem("uuid");
obtemDadosUsuario(uuid);
var userData;

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
      userData = {
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
      contentPage.innerHTML = "<div><h1>Minha agenda</h1></div>";
      break;
    case "Clientes":
      contentPage.innerHTML = "<div><h1>Meus clientes</h1></div>";
      break;
    case "Configuracoes":
      contentPage.innerHTML = "<div><h1>Configurações</h1></div>";
      break;
    case "Perfil":
      contentPage.innerHTML = `<div id="contentProfissionais" class="contentProfissionais"> <h1>Meu perfil</h1> <div> <div class="contentPersonData"> <div> <div class="optionPerson"> <p>Usuário:</p> <h3>${userData.usuario}</h3> </div> <div class="optionPerson"> <p>Nome:</p> <h3>${userData.nome}</h3> </div> <div class="optionPerson"> <p>Email:</p> <h3>${userData.email}</h3> </div> </div> <div> <img src="../../assets/images/person.png" alt="foto Perfil" class="ftPerson" /> </div> </div> <hr /> <div class="contentAdressData"> <h3>Dados Domiciliares</h3> <div class="optionPerson"> <p>Endereço:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Número:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Bairro:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>CEP:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Complemento:</p> <h3>...</h3> </div> </div> <hr /> <div class="aboutProfessional"> <h3>Dados profissionais</h3> <div class="optionPerson"> <p>Profissão:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Sobre mim:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Formação:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Referências:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Contato:</p> <h3>...</h3> </div> </div> </div> </div>`;
      break;
  }
}
