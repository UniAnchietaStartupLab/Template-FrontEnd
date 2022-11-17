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
    case "Agendamentos":
      contentPage.innerHTML = "";
      break;
    case "Profissionais":
      contentPage.innerHTML =
        '<div id="contentProfissionais" class="contentProfissionais"> <h1>Profissionais</h1> <header> <input type="text" /><button> <i class="material-icons">search</i> </button> </header> <div class="contentList"> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" /> </div> </button> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" /> </div> </button> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" /> </div> </button> <button class="listaProfissionais"> <div> <h2>Roberto Felipe Nhani de Oliveira</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, reiciendis accusamus atque itaque dolorum nulla pariatur, id quod praesentium quam obcaecati optio esse neque inventore. Ipsam omnis molestiae architecto. </p> <p>19 anos</p> </div> <div> <img src="../../assets/images/person.png" alt="profissional" /> </div> </button> </div> </div>';
      break;
    case "Configuracoes":
      contentPage.innerHTML = "";
      break;
    case "Perfil":
      contentPage.innerHTML = "";
      break;
  }
}
