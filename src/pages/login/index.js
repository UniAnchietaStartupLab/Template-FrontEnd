function validaLogin() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (email == "startups@email.com" && senha == "123456") {
    alert(`Seja bem vindo ${email}`);
  } else {
    alert(`Usuário inválido`);
  }
}

function validaLogin() {
  let emailUser = document.getElementById("email").value;
  let senhaUser = document.getElementById("senha").value;

  const dadosUsuario = [emailUser, senhaUser];
  const validaCampos = dadosUsuario.some((item) => {
    return item == "";
  });

  if (validaCampos) {
    alert("Campos vazios!");
  } else {
    const dataUser = {
      email: emailUser,
      senha: senhaUser,
    };

    fetch("http://localhost:3333/validateUser", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          alert("Sucesso!");
          console.log(data);
          sessionStorage.setItem("uuid", btoa(data[0].UUID));

          if (data[0].tipo == "Profissional") {
            window.location.replace(
              `../profissional/index.html?${btoa(data[0].UUID)}`
            );
          } else {
            window.location.replace(
              `../cliente/index.html?${btoa(data[0].UUID)}`
            );
          }
        } else {
          alert("Usuário inválido!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
