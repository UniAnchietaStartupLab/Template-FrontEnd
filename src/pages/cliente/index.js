var params = window.location.search.substr(1).split("&");
const uuid = atob(...params);
const sessionSt = sessionStorage.getItem("uuid");
obtemDadosUsuario(uuid);
var userData;
console.log(uuid);

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
        uuid: data[0].UUID,
        nome: data[0].NOME,
        usuario: data[0].USUARIO,
        email: data[0].EMAIL,
        senha: data[0].SENHA,
        tipo: data[0].TIPO,
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
    case "Agendamentos":
      contentPage.innerHTML = "<div><h1>Meus agendamentos</h1></div>";
      break;
    case "Profissionais":
      contentPage.innerHTML =
        '<div id="contentProfissionais" class="contentProfissionais"> <h1>Profissionais</h1> <header> <input type="text" /><button> <i class="material-icons">search</i> </button> </header> <div class="contentList"> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" class="ftPerson"/> </div> </button> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" class="ftPerson"/> </div> </button> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" class="ftPerson"/> </div> </button> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" class="ftPerson"/> </div> </button> </div> </div>';
      break;
    case "Perfil":
      contentPage.innerHTML = `<div id="contentProfissionais" class="contentProfissionais"> <h1>Meu perfil</h1> <div> <div class="contentPersonData"> <div> <div class="optionPerson"> <p>Usuário:</p> <h3>${userData.usuario}</h3> </div> <div class="optionPerson"> <p>Nome:</p> <h3>${userData.nome}</h3> </div> <div class="optionPerson"> <p>Email:</p> <h3>${userData.email}</h3> </div> </div> <div> <img src="../../assets/images/person.png" alt="foto Perfil" class="ftPerson" /> </div> </div> <hr /> <div class="contentAdressData"> <div class="optionPerson"> <p>Endereço:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Número:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Bairro:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>CEP:</p> <h3>...</h3> </div> <div class="optionPerson"> <p>Complemento:</p> <h3>...</h3> </div> </div> </div> </div>`;
      break;
    case "Configuracoes":
      contentPage.innerHTML = "<div><h1>Configurações</h1></div>";
      break;
  }
}
