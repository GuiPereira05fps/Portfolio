const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {

    // block de page reload'    
    event.preventDefault();

    let formularioValido = true;

    // limpa as bordas antigas
    nome.style.border = "";
    email.style.border = "";
    mensagem.style.border = "";

    // validação de nome, email e mensagem
    if (nome.value.trim() === "") {
        nome.style.border = "2px solid red";
        formularioValido = false;
    }
    if (email.value.trim() === "") {
        email.style.border = "2px solid red";
        formularioValido = false;
    }
    if (mensagem.value.trim() === "") {
        mensagem.style.border = "2px solid red";
        formularioValido = false;
    }

    // se tudo estiver certo, manda alerta e limpa os inputs
    if (formularioValido) {
        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    }

});