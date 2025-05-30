// sessão
function validarSessao() {
    let nome = sessionStorage.getItem("NOME_USUARIO")
    let id = sessionStorage.getItem("ID_USUARIO")
    let email = sessionStorage.getItem("EMAIL_USUARIO")
    if (nome == null && id == null && email == null) {
        alert("Faça login antes disso!")
        return;
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function limparFormulario() {
    const form = document.getElementById("meuFormulario");
    form.reset();
}
