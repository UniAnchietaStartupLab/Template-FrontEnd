function createUser() {
  let usuario = document.getElementById("user").value;
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let tipo = document.querySelector(
    "input[type='radio'][name=userType]:checked"
  ).value;

  const dadosUsuario = [nome, usuario, email, senha, tipo];
  const validaCampos = dadosUsuario.some((item) => {
    return item == "";
  });

  if (validaCampos) {
    alert("Campos vazios!");
  } else {
    const dataUser = {
      usuario: usuario,
      email: email,
      senha: senha,
      nome: nome,
      tipo: tipo,
    };

    fetch("http://localhost:3333/createUser", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        window.location.replace("../login/index.html");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
